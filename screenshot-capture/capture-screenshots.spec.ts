// @ts-check
/**
 * Playwright spec that logs into a local/DDEV Drupal site, walks every
 * documented Auto-Bundle screen, and saves labelled PNGs into
 *   ../static/img/auto/
 *
 * Region screenshots use `element.screenshot()` so each PNG contains only
 * the relevant fieldset — the annotation step then overlays numbered
 * callouts on the tight crop.
 *
 * Fixture assumptions:
 *   - A TMGMT translator with plugin `content_api_connector` exists with
 *     id = TMGMT_TRANSLATOR_ID (see .env.example).
 *   - At least one continuous job exists (for the status panel to render
 *     with content). The spec tolerates an empty state and shots it too.
 */

import { test, expect, Page } from '@playwright/test';
import * as path from 'node:path';

const OUT_DIR = path.resolve(__dirname, '..', 'static', 'img', 'auto');
const TRANSLATOR_ID = process.env.TMGMT_TRANSLATOR_ID || 'lionbridge_content_api';
const USER = process.env.DRUPAL_USER || 'admin-docs';
const PASS = process.env.DRUPAL_PASS || '';

async function login(page: Page) {
  await page.goto('/user/login');
  await page.getByLabel('Username').fill(USER);
  await page.getByLabel('Password').fill(PASS);
  await page.getByRole('button', { name: /Log in/i }).click();
  await expect(page).not.toHaveURL(/\/user\/login/);
}

async function shootRegion(page: Page, selector: string, filename: string) {
  const el = page.locator(selector).first();
  await el.scrollIntoViewIfNeeded();
  await el.screenshot({ path: path.join(OUT_DIR, filename), animations: 'disabled' });
}

// Force every <details> on the page open. The Auto-Bundle form has three
// collapsible sections that hide their contents when closed; we need them
// open so region screenshots capture real content.
async function openAllDetails(page: Page) {
  await page.evaluate(() => {
    document.querySelectorAll<HTMLDetailsElement>('details').forEach(d => {
      d.open = true;
    });
  });
}

test.describe('Auto-Bundle admin tab screenshots', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
    await page.goto(`/admin/tmgmt/translators/manage/${TRANSLATOR_ID}/auto-bundle`);
    // Ensure the checkbox is in the DOM (route resolved) before forcing
    // details open. Attached, not visible — the outer <details> may be closed.
    await expect(page.locator('input[name="auto_bundle[auto_bundle_enabled]"]'))
      .toHaveCount(1, { timeout: 15_000 });
    await openAllDetails(page);
  });

  test('01 · master switch & summary strips', async ({ page }) => {
    await shootRegion(page, '.tmgmt-contentapi-master-switch, details[id*="edit-auto-bundle"]',
      'auto-bundle-tab-master-switch.png');
  });

  test('02 · always-on grouping dimensions', async ({ page }) => {
    await shootRegion(page,
      'details[id*="grouping-dimensions"]',
      'auto-bundle-tab-always-on.png');
  });

  test('03 · group by content type', async ({ page }) => {
    await shootRegion(page,
      'input[name="auto_bundle[group_by_content_type]"]',
      'auto-bundle-tab-group-by-content-type.png');
  });

  test('04 · group by priority (picker or warning)', async ({ page }) => {
    await shootRegion(page,
      '.tmgmt-contentapi-priority-settings',
      'auto-bundle-tab-priority.png');
  });

  test('05 · trigger thresholds', async ({ page }) => {
    await shootRegion(page,
      'details[id*="edit-auto-bundle-triggers"]',
      'auto-bundle-tab-triggers.png');
  });

  test('06 · limits and safety caps', async ({ page }) => {
    // Caps section defaults to collapsed — expand before shooting.
    const caps = page.locator('details[id*="edit-auto-bundle-limits"]');
    await caps.evaluate((el: HTMLDetailsElement) => (el.open = true));
    await shootRegion(page, 'details[id*="edit-auto-bundle-limits"]',
      'auto-bundle-tab-caps.png');
  });

  test('07 · workflow gate', async ({ page }) => {
    await shootRegion(page,
      'details[id*="edit-workflow-gate"]',
      'auto-bundle-tab-workflow-gate.png');
  });

  test('08 · status panel', async ({ page }) => {
    // The status panel only renders when auto_bundle_enabled is TRUE on the
    // translator. When disabled, skip cleanly instead of hanging.
    const panel = page.locator(
      '.tmgmt-ab-status-column, .tmgmt-contentapi-status-panel, [id*="auto-bundle-status"]'
    ).first();
    if ((await panel.count()) === 0) {
      test.skip(true, 'Auto-Bundle is disabled on this translator; status panel not rendered.');
      return;
    }
    await shootRegion(page,
      '.tmgmt-ab-status-column, .tmgmt-contentapi-status-panel, [id*="auto-bundle-status"]',
      'auto-bundle-tab-status-panel.png');
  });
});

test.describe('Adjacent screens', () => {
  test.beforeEach(async ({ page }) => login(page));

  test('provider settings (credentials)', async ({ page }) => {
    await page.goto(`/admin/tmgmt/translators/manage/${TRANSLATOR_ID}`);
    await page.locator('form.tmgmt-translator-form').screenshot({
      path: path.join(OUT_DIR, 'install-credentials.png'),
      animations: 'disabled',
    });
  });

  test('jobs overview', async ({ page }) => {
    await page.goto('/admin/tmgmt/jobs');
    await page.screenshot({
      path: path.join(OUT_DIR, 'jobs-overview.png'),
      fullPage: false,
      animations: 'disabled',
    });
  });
});
