# Lionbridge Content API — Docs Site

Docusaurus 3 site that documents the **auto-bundle** and **continuous job**
features of the `tmgmt_contentapi` Drupal module (part of
[drupal/lionbridge_translation_provider](https://www.drupal.org/project/lionbridge_translation_provider)).

**Live site:** https://pankaj-raundal.github.io/drupal-connector-autobundle-docs/

**Deploy:** every push to `main` triggers
[.github/workflows/deploy-docs.yml](.github/workflows/deploy-docs.yml),
which builds and publishes `build/` to the `gh-pages` branch. GitHub Pages
serves it from there.

## Layout

```
docs/                          # Docusaurus root
├─ docs/                       # Markdown source pages (routed 1:1 to URLs)
│  ├─ intro.md
│  ├─ 01-overview/
│  ├─ 02-prerequisites/
│  ├─ 03-continuous-job/
│  ├─ 04-auto-bundle-tab/      # One page per fieldset in AutoBundleForm.php
│  ├─ 05-runtime-behavior/
│  ├─ 06-troubleshooting/
│  └─ 07-reference/
├─ src/css/custom.css          # Theme + .docs-screenshot styling
├─ static/img/                 # Screenshots (PNG) — see conventions below
├─ screenshot-capture/         # Playwright automation
├─ docusaurus.config.js
├─ sidebars.js
└─ package.json
```

## Build & serve

Requires **Node.js 20+** (Docusaurus 3 works on 18, but Playwright — used for
the screenshot capture below — requires 20 or higher).

If you're on Node 18, install nvm and switch:

```bash
# Install nvm if you don't have it — https://github.com/nvm-sh/nvm
nvm install 20
nvm use 20
node --version   # should print v20.x
```

Then:

```bash
cd web/sites/default/modules/contrib/lionbridge_translation_provider/tmgmt_contentapi/docs

# One-time
npm install
npx playwright install chromium

# Local preview (hot reload) — http://localhost:3000/lionbridge-tmgmt-contentapi/
npm start

# Production build (outputs to build/)
npm run build

# Serve the built site
npm run serve
```

## Screenshot workflow

Screenshots are the whole reason this site exists. Two flows are supported:

### 1. Automated baseline capture (recommended for every module release)

```bash
# Set DDEV / local site URL + admin creds in .env.local (see .env.example)
cp .env.example .env.local

# Capture — writes fresh PNGs into static/img/auto/
npm run capture
```

The Playwright spec lives in [screenshot-capture/](./screenshot-capture/). It
logs into the local Drupal, visits every documented route, sets known fixture
state, and exports one PNG per named region.

### 2. Manual annotated overlays

For pages that need arrows / numbered callouts (① ② ③), open the automated
PNG in your annotation tool of choice (Shottr / CleanShot X / Flameshot) and
save the annotated result to `static/img/annotated/` with the **same filename**
as the baseline. Reference it from the MDX page like:

```mdx
<figure className="docs-screenshot">
  <img src={require('@site/static/img/annotated/auto-bundle-tab-triggers.png').default}
       alt="Trigger thresholds section of the Auto-Bundle tab" />
  <figcaption>
    <span className="callout-num">1</span> Word-count threshold —
    <span className="callout-num">2</span> item-count threshold —
    <span className="callout-num">3</span> maximum wait time.
  </figcaption>
</figure>
```

See [screenshot-capture/ANNOTATION-GUIDE.md](./screenshot-capture/ANNOTATION-GUIDE.md)
for the callout style guide, PII redaction rules, and file-naming conventions.

## Publishing

The `build/` directory is a static site. Deploy it to any static host:

- **Netlify / Vercel**: point at `docs/` as the base directory, run
  `npm run build`, publish `build/`.
- **GitHub Pages**: use the `deploy` script (add
  `"deploy": "docusaurus deploy"` to `package.json` and configure
  `deploymentBranch` in `docusaurus.config.js`).
- **Pantheon / internal S3**: upload `build/` behind your VPN.

## Editing conventions

- **One page per fieldset.** The Auto-Bundle admin form
  ([AutoBundleForm.php](../src/Form/AutoBundleForm.php)) is organized into
  `details` groups. Each group gets exactly one page under
  `04-auto-bundle-tab/`. Do not combine multiple fieldsets on one page — it
  breaks the "point support staff at one URL" workflow.
- **Template.** Every field page follows the template documented in
  [intro.md](./docs/intro.md#page-template). The overview page
  (`01-overview/what-is-auto-bundle.md`) is the canonical fully-written
  example.
- **Never fabricate defaults.** If a default changes in
  `AutoBundleForm.php`, update the corresponding page in the same PR. The
  page front matter includes a `sourceRefs` list pointing at the PHP file
  and line range so future edits are easy to find.
- **No secrets.** Blur or mask PATs, session cookies, and client names in
  screenshots. The Playwright capture script logs in with a fixture user
  whose display name is `Admin (support docs)` to make this easy.
