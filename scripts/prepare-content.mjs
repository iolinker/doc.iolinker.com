import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const docs = path.join(root, 'docs');
const exclusions = JSON.parse(readFileSync(path.join(root, 'security-exclusions.json'), 'utf8'));
const excludedNames = new Set(exclusions.map(item => path.basename(item.source)));
const historicalArticle = source => !source.includes('guide/') && source !== 'index.md' && source !== 'zh/index.md';
const quarantined = new Set();

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.') || ['img', 'public'].includes(entry.name)) return [];
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

for (const filename of walk(docs).filter(file => file.endsWith('.md'))) {
  const source = path.relative(docs, filename).split(path.sep).join('/');
  const chinese = source.startsWith('zh/');
  const text = readFileSync(filename, 'utf8');
  const lines = text.split('\n');
  const output = [];
  for (const line of lines) {
    if (/(?:\/Users\/|\/home\/|file:\/\/|[A-Z]:\\Users\\)/.test(line)) {
      if (line.includes('<img') || line.includes('![')) output.push(chinese ? '> 历史图片引用不可用，已移除；请按文字步骤和当前界面操作。' : '> The unavailable historical image reference was removed. Follow the written steps and current interface.');
      continue;
    }
    const image = line.match(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/) || line.match(/!\[[^\]]*\]\(([^)]+)\)/);
    if (image) {
      const reference = image[1];
      const basename = path.basename(reference.split(/[?#]/)[0]);
      if (excludedNames.has(basename)) {
        output.push(chinese ? '> 原截图含凭据、令牌或应用标识，已停止公开。请在对应平台自行创建秘密并填入本地配置。' : '> The original image contained a credential, token or application identifier and is excluded from publication. Create and enter your own secret in the local configuration.');
      } else if (historicalArticle(source)) {
        output.push(chinese ? '> 历史界面图片在复核并重拍前不展示，请按当前界面核对操作。' : '> Historical interface images are withheld pending review and recapture. Check operations against the current interface.');
      } else if (/^(?:create-(?:dingtalk|feishu)|feishu-bot|get-telegram)/.test(basename)) {
        output.push(chinese ? '> 第三方应用配置图未纳入公开素材；请按当前平台后台填写，不在截图或日志中分享应用秘密。' : '> Third-party application media is not published. Follow the current provider console and never share application secrets in screenshots or logs.');
      } else {
        output.push(line.replace(/\sstyle=["'][^"']*["']/g, ''));
        continue;
      }
      const resolved = path.relative(docs, path.resolve(path.dirname(filename), reference.split(/[?#]/)[0]));
      if (!resolved.startsWith('..') && !path.isAbsolute(resolved)) quarantined.add(resolved.split(path.sep).join('/'));
    } else {
      output.push(line.replace(/\sstyle=["'][^"']*["']/g, '').replaceAll('[test.com](test.com)', '[test.com](https://test.com)'));
    }
  }
  writeFileSync(filename, `${output.join('\n').replace(/\n{4,}/g, '\n\n\n').replace(/\n+$/, '')}\n`);
}

const baseline = JSON.parse(readFileSync(path.join(root, 'compatibility.json'), 'utf8'));
const excluded = new Set([...exclusions.map(item => item.source), ...(baseline.excludedAssets || [])]);
for (const item of quarantined) excluded.add(item);
baseline.excludedAssets = [...excluded].sort();
writeFileSync(path.join(root, 'compatibility.json'), `${JSON.stringify(baseline, null, 2)}\n`);
let copied = 0;
for (const source of baseline.assets) {
  if (typeof source !== 'string' || path.isAbsolute(source) || source.split('/').includes('..')) throw new Error('无效图片路径');
  const published = path.join(docs, 'public', source);
  if (excluded.has(source)) {
    if (existsSync(published)) {
      const quarantine = path.join(docs, '.vitepress/quarantine', source);
      mkdirSync(path.dirname(quarantine), { recursive: true });
      renameSync(published, quarantine);
    }
    continue;
  }
  const from = path.join(docs, source);
  if (!existsSync(from)) continue;
  const to = path.join(docs, 'public', source);
  mkdirSync(path.dirname(to), { recursive: true });
  copyFileSync(from, to);
  copied++;
}
const logo = path.join(root, '../iolinker.com/logo.png');
const publishedLogo = path.join(docs, 'public/logo.png');
if (existsSync(logo)) {
  copyFileSync(logo, publishedLogo);
} else if (!existsSync(publishedLogo)) {
  throw new Error('缺少站点品牌图标');
}
console.log(`已准备 ${copied} 项公开图片；敏感及未核实旧素材不会进入发布目录`);
