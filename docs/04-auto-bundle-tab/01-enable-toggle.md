---
title: Master switch — Enable Auto-Bundle
sidebar_label: 01 · Enable toggle
sidebar_position: 1
sourceRefs:
  - src/Form/AutoBundleForm.php#L200-L260
---

# Enable Auto-Bundle (master switch)

## What this field does

Turns automatic bundling on or off for **this** translator. When off,
every eligible job leaves the site individually. When on, eligible items
are grouped and submitted per the rules configured below.

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/auto/auto-bundle-tab-master-switch.png"
       alt="Placeholder — the top of the Auto-Bundle tab with the master switch and the 'Live preview ON' pill"
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> Master switch checkbox —
    <span className="callout-num">2</span> "Live preview ON" pill (shows only when switch is on) —
    <span className="callout-num">3</span> Current setup / Bundling by summary strips.
  </figcaption>
</figure>

## Configuration options

| Option | Effect | Default | Config key |
|---|---|---|---|
| Enable Auto-Bundle | Master switch | Off | `auto_bundle.auto_bundle_enabled` |

## What happens when you toggle it

- **On → Off:** all sections below stay visible and saveable, but no
  bundling occurs. New items are sent individually. Existing queue rows
  are **not** flushed automatically — they remain waiting until you turn
  auto-bundle back on and their triggers fire, or until you manually
  flush them.
- **Off → On:** sections activate. A "catch-up flush" evaluates existing
  queue rows against the current thresholds; any groups already meeting
  a trigger flush on save.

## Manual jobs are never affected

Anything submitted from the TMGMT cart or Sources page bypasses this
switch and is sent as-is. This behavior is intentional and cannot be
changed.

## Common client questions

> **Q — I turned auto-bundle off. Why are old items still queued?**
> Toggling the master switch does not empty the queue; it only stops new
> items from being enqueued. Use the flush action from
> [Status panel & manual flush](/04-auto-bundle-tab/08-status-panel-and-manual-flush)
> to release existing rows.

> **Q — What is the "Live preview ON" pill next to the checkbox?**
> A visual cue that the group-key preview and status widget will
> re-render live as you change form values. It disappears when the master
> switch is off.

## Related pages

- [Always-on grouping dimensions](/04-auto-bundle-tab/02-always-on-dimensions)
- [Status panel & manual flush](/04-auto-bundle-tab/08-status-panel-and-manual-flush)

## Troubleshooting

- [Items not bundling](/06-troubleshooting/items-not-bundling)
