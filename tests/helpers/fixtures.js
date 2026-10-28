// Authenticated fixture intentionally fails closed; public checks use @playwright/test directly.
const base = require('@playwright/test');
const test = base.test.extend({
  authedContext: async ({}, use) => {
    throw new Error('[AUTH_NOT_VALIDATED] NEEDS VALIDATION AFTER AUTHENTICATED EXPLORATION: login selectors, success signal, redirect and session lifecycle. No login attempted.');
  },
  context: async ({ authedContext }, use) => { await use(authedContext); },
  page: async ({ authedContext }, use) => {
    const page = await authedContext.newPage();
    try { await use(page); } finally { await page.close(); }
  },
});
module.exports = { test, expect: base.expect };
