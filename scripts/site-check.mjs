import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const docs = path.join(root, 'docs');
const baselineFile = path.join(root, 'compatibility.json');
const excluded = new Set(['node_modules', '.vuepress', '.vitepress', '.git']);
const errors = [];

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (excluded.has(entry.name) || entry.name.startsWith('.')) return [];
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? files(filename) : [filename];
  });
}

function relative(filename) {
  return path.relative(docs, filename).split(path.sep).join('/');
}

function articleUrl(filename) {
  const name = relative(filename);
  return `/${name.replace(/(?:README|index)\.md$/, 'index.html').replace(/\.md$/, '.html')}`;
}

function references(text) {
  const prose = text.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '');
  return [...prose.matchAll(/(?:!?\[[^\]]*\]\(\s*<?([^\s)>]+)>?|\b(?:src|href)=["']([^"']+)["'])/g)]
    .map(match => match[1] || match[2]);
}

function localTarget(filename, reference) {
  if (/^(?:https?:|mailto:|tel:|data:|#|\/\/)/i.test(reference)) return null;
  let target;
  try {
    target = decodeURIComponent(reference.split(/[?#]/)[0]);
  } catch {
    return null;
  }
  if (!target) return null;
  const resolved = target.startsWith('/') ? path.resolve(docs, `.${target}`) : path.resolve(path.dirname(filename), target);
  if (resolved !== docs && !resolved.startsWith(`${docs}${path.sep}`)) return null;
  return resolved;
}

function sourceExists(target) {
  const publicTarget = path.join(docs, 'public', path.relative(docs, target));
  return [target, publicTarget, target.replace(/\.html$/, '.md'), path.join(target, 'index.md'), path.join(target, 'README.md'), `${target}.md`]
    .some(candidate => existsSync(candidate));
}

const articles = files(docs).filter(filename => filename.endsWith('.md') && !path.basename(filename).startsWith('_'));

if (process.argv.includes('--capture')) {
  if (existsSync(baselineFile)) throw new Error('兼容基线已存在，拒绝覆盖');
  const assets = new Set();
  const navigation = new Set(['/', '/zh/']);
  for (const filename of articles) {
    for (const reference of references(readFileSync(filename, 'utf8'))) {
      const target = localTarget(filename, reference);
      if (target && existsSync(target) && /\.(?:png|jpe?g|gif|svg|webp)$/i.test(target)) assets.add(relative(target));
      if (target && sourceExists(target) && /(?:\.md|\.html)$/.test(reference)) navigation.add(`/${relative(target).replace(/\.md$/, '.html')}`);
    }
  }
  writeFileSync(baselineFile, `${JSON.stringify({ documents: articles.map(filename => ({ source: relative(filename), url: articleUrl(filename) })), assets: [...assets].sort(), navigation: [...navigation].sort(), excludedAssets: [] }, null, 2)}\n`);
  console.log(`已记录 ${articles.length} 篇旧文档和 ${assets.size} 项有效图片引用`);
  process.exit(0);
}

const baseline = JSON.parse(readFileSync(baselineFile, 'utf8'));
if (!baseline || !Array.isArray(baseline.documents) || !Array.isArray(baseline.assets) || !Array.isArray(baseline.excludedAssets)) throw new Error('兼容清单结构错误');
const excludedAssets = new Set(baseline.excludedAssets);

for (const filename of articles) {
  const text = readFileSync(filename, 'utf8');
  if (/(?:\/Users\/|\/home\/|file:\/\/|[A-Z]:\\Users\\)/.test(text)) errors.push(`${relative(filename)}: 本机绝对路径`);
  for (const reference of references(text)) {
    if (reference === '#') errors.push(`${relative(filename)}: 占位链接`);
    if (/^https:\/\/iolinker\.com\/(?:zh\/|[^/#]+\.html)/.test(reference)) errors.push(`${relative(filename)}: 文档链接指向官网`);
    const target = localTarget(filename, reference);
    if (target && excludedAssets.has(relative(target))) errors.push(`${relative(filename)}: 引用已隔离资源 ${reference}`);
    if (target && !sourceExists(target)) errors.push(`${relative(filename)}: 缺失资源 ${reference}`);
  }
}

const workflow = readFileSync(path.join(root, '.github/workflows/deploy.yml'), 'utf8');
if (!/cname:\s*doc\.iolinker\.com(?:\s|$)/.test(workflow)) errors.push('文档 CI 域名不一致');
for (const filename of [path.join(root, 'CNAME'), path.join(docs, 'public/CNAME')]) {
  if (!existsSync(filename) || readFileSync(filename, 'utf8').trim() !== 'doc.iolinker.com') errors.push('文档 CNAME 不一致');
}

if (process.argv.includes('--dist')) {
  const dist = path.join(docs, '.vitepress/dist');
  for (const item of baseline.excludedAssets) {
    if (typeof item !== 'string' || item.includes('..') || path.isAbsolute(item)) throw new Error('无效隔离图片路径');
    if (existsSync(path.join(dist, item))) errors.push(`隔离图片进入发布产物 ${item}`);
  }
  for (const item of baseline.documents) {
    if (!item || typeof item.url !== 'string' || !/^\/[\w./-]+\.html$/.test(item.url) || item.url.includes('..')) throw new Error('无效旧文档路径');
    if (!existsSync(path.join(dist, item.url.slice(1)))) errors.push(`缺失旧文档产物 ${item.url}`);
  }
  for (const item of baseline.assets) {
    if (typeof item !== 'string' || item.includes('..') || path.isAbsolute(item)) throw new Error('无效旧图片路径');
    if (!baseline.excludedAssets.includes(item) && !existsSync(path.join(dist, item))) errors.push(`缺失旧图片产物 ${item}`);
  }
  if (!existsSync(path.join(dist, 'index.html')) || !existsSync(path.join(dist, 'zh/index.html'))) errors.push('缺失中英文首页');
  if (!existsSync(path.join(dist, 'CNAME')) || readFileSync(path.join(dist, 'CNAME'), 'utf8').trim() !== 'doc.iolinker.com') errors.push('构建产物域名错误');
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`文档完整性检查通过：${articles.length} 篇文章${process.argv.includes('--dist') ? '，旧入口与图片兼容' : ''}`);
}
