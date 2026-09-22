// @ts-check
import { defineConfig } from '@playwright/test';
import * as path from 'node:path';

// Load .env.local (site URL + admin creds) — never commit real values.
// Copy screenshot-capture/.env.example to .env.local and edit locally.
import * as fs from 'node:fs';
const envLocal = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envLocal)) {
  for (const line of fs.readFileSync(envLocal, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

export default defineConfig({
  testDir: __dirname,
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: process.env.DOCS_SITE_URL || 'https://dconnector933.ddev.site',
    headless: true,
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    // Screenshots default off; the spec triggers them explicitly per region.
    trace: 'off',
    video: 'off',
  },
  outputDir: path.resolve(__dirname, '..', 'static', 'img', 'auto'),
});
