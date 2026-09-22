# Screenshot annotation guide

The Playwright script in this folder produces **raw** PNGs into
`../static/img/auto/`. These are the source images. To make them useful in
support docs, apply annotations (numbered callouts, arrows, blurs) and save
the result to `../static/img/annotated/` using the **same filename**.

## When to annotate vs. use raw

- **Raw is fine** when the page's prose already fully describes what is on
  screen (e.g. a simple confirmation dialog).
- **Annotate** any screenshot that a page references with numbered callouts
  (①②③). This is the majority of pages under `docs/04-auto-bundle-tab/`.

## Style guide

### Callout numbers

- Circular badges, `#005e9e` fill, white text, `700` weight.
- Placed to the **left** of what they mark, `4px` gap.
- Sequential, matching the order in the `<figcaption>` text.

### Arrows

- Same brand blue, 2px stroke, 8px arrowhead.
- Only use when a callout number alone would be ambiguous.

### Redaction (mandatory)

Blur or overlay-mask **every** occurrence of:

- Real client names, project names, or organization identifiers.
- Email addresses (unless they are your fixture account).
- API tokens, session cookies, PATs (should never be visible in a form
  screenshot — if they are, that is a security bug to fix first).
- User photos or avatars.
- Node counts or job totals that could identify a specific client's
  traffic volume.

Use Gaussian blur radius `12px` for text; a filled rectangle for URLs.

## Filenames

Baseline PNG (auto-captured):

```
static/img/auto/auto-bundle-tab-triggers.png
```

Annotated version (manual):

```
static/img/annotated/auto-bundle-tab-triggers.png
```

Both filenames are identical; only the folder differs. Pages reference the
`annotated/` version when it exists, falling back to `auto/` otherwise.

## Recommended tools

Any of these produce results that match the style guide out of the box:

- **Shottr** (macOS) — free, precise numbered stamps.
- **CleanShot X** (macOS) — commercial, best annotation UX.
- **Flameshot** (Linux) — free, keyboard-driven.
- **Snagit** (Windows / macOS) — commercial, powerful templates.

Save results as **PNG** (never JPEG — the compression artifacts around
form fields look terrible).

## MDX usage snippet

Paste into any page:

```mdx
<figure className="docs-screenshot">
  <img
    src={require('@site/static/img/annotated/auto-bundle-tab-triggers.png').default}
    alt="Trigger thresholds section of the Auto-Bundle tab"
    loading="lazy"
  />
  <figcaption>
    <span className="callout-num">1</span> Word count threshold —
    <span className="callout-num">2</span> Item count threshold —
    <span className="callout-num">3</span> Maximum wait time (HH:MM:SS).
  </figcaption>
</figure>
```

## Freshness policy

Every UI-affecting story landing in `tmgmt_contentapi` triggers a docs
review ticket. The reviewer:

1. Re-runs `npm run capture` against a local DDEV site.
2. Diffs the new PNGs against `../static/img/auto/` (git shows the change).
3. If the visual differs, re-annotates the affected file into
   `../static/img/annotated/` and updates the page prose if needed.
4. Commits both the raw + annotated PNGs together with the doc edits so
   the history stays coherent.
