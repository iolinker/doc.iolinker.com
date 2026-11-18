import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const base = process.env.DOCS_PREVIEW_URL || 'http://127.0.0.1:4174';
let browser;
before(async () => {
  const response = await fetch(base, { signal: AbortSignal.timeout(3000) });
  assert.ok(response.ok, '请先运行 npm run docs:dev -- --port 4174');
  browser = await chromium.launch({ headless: true });
});
after(async () => browser?.close());

for (const width of [375, 768, 1440]) {
  test(`文档 ${width}px：首页、指南、导航与目录`, async () => {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    page.setDefaultTimeout(7000);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${base}/zh/guide/quick-start.html`);
    await page.waitForSelector('.scope-note');
    assert.match(await page.locator('h1').textContent(), /完成第一个任务/);
    assert.ok(await page.locator('.VPDocAsideOutline').count() > 0);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    if (width > 768) {
      assert.match(await page.locator('.VPSidebar').textContent(), /Agent 工作台/);
      assert.match(await page.locator('.VPSidebar').textContent(), /节点参考/);
    } else {
      await page.locator('.VPLocalNav .menu').click();
      assert.ok(await page.locator('.VPSidebar').isVisible());
      await page.keyboard.press('Escape');
    }
    if (await page.locator('.VPNavBarHamburger:visible').count()) await page.locator('.VPNavBarHamburger').click();
    if (await page.locator('button[aria-label="extra navigation"]:visible').count()) await page.locator('button[aria-label="extra navigation"]').click();
    await page.locator('.VPSwitchAppearance:visible').click();
    assert.ok(await page.locator('html').evaluate(element => element.classList.contains('dark')));
    mkdirSync(new URL('../test-results/', import.meta.url), { recursive: true });
    await page.screenshot({ path: new URL(`../test-results/docs-${width}.png`, import.meta.url).pathname, fullPage: true });
    await page.goto(base);
    assert.match(await page.locator('h1').textContent(), /inspectable execution path/);
    await page.goto(`${base}/zh/`);
    assert.match(await page.locator('h1').textContent(), /可检查的执行路径/);
    assert.deepEqual(errors, []);
    await page.close();
  });
}

test('文档本地搜索与语言切换', async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${base}/zh/guide/skills.html`);
  await page.locator('.DocSearch-Button').click();
  await page.locator('.VPLocalSearchBox input').fill('MCP');
  await page.locator('.VPLocalSearchBox .result').first().waitFor();
  assert.ok(await page.locator('.VPLocalSearchBox .result').count() > 0);
  await page.keyboard.press('Escape');
  await page.goto(`${base}/zh/guide/schedules.html`);
  await page.locator('.VPNavBarTranslations button').click();
  const english = page.locator('.VPNavBarTranslations a').filter({ hasText: 'English' });
  assert.match(await english.getAttribute('href'), /\/guide\/schedules\.html$/);
  await page.close();
});

test('文档减少动画', async () => {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  await page.goto(`${base}/zh/trigger_form.html`);
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  assert.equal(await page.locator('iframe').count(), 0);
  await page.close();
});
