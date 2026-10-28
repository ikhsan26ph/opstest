const fs = require('fs');
const { chromium } = require('@playwright/test');
const { parseEnv } = require('../tests/helpers/env');
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const response = await page.goto(parseEnv().baseUrl, { waitUntil: 'domcontentloaded' });
    await page.locator('body').waitFor({state:'visible'});
    // Observe only; no assumed login selector, route, submit, or credential entry.
    const observed = await page.locator('input, button, h1, h2').evaluateAll(els => els.map(el => ({
      tag: el.tagName, type: el.getAttribute('type'), role: el.getAttribute('role'),
      placeholder: el.getAttribute('placeholder'), text: el.tagName === 'INPUT' ? null : el.textContent.trim().slice(0,120)
    })));
    const evidence = { at: new Date().toISOString(), requestedUrl: parseEnv().baseUrl,
      finalUrl: page.url(), httpStatus: response?.status(), title: await page.title(), observed,
      scope: 'Public DOM only; no login submitted. Not a business scenario verdict.' };
    fs.mkdirSync('explore', {recursive:true});
    fs.writeFileSync('explore/public-smoke.json', JSON.stringify(evidence,null,2)+'\n');
    console.log(JSON.stringify(evidence,null,2));
    if (!response || !response.ok()) process.exitCode = 1;
  } finally { await browser.close(); }
})().catch(() => { console.error('Public smoke failed; NEEDS VALIDATION (browser/network).'); process.exitCode = 1; });
