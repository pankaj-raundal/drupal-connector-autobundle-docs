---
title: Status panel & manual flush
sidebar_label: 08 · Status panel & flush
sidebar_position: 8
sourceRefs:
  - src/Services/AutoBundleStatusBuilder.php
  - src/Services/AutoBundleFlusher.php
  - src/Controller/AutoBundleStatusController.php
  - tmgmt_contentapi.auto_bundle_status_refresh route
---

# Status panel & manual flush

## What this covers

The right-side status panel on the Auto-Bundle tab (built by
`AutoBundleStatusBuilder`), the AJAX refresh endpoint that keeps it
current, and the manual flush action support engineers use to release a
group without waiting for triggers.

## Screenshot

<figure className="docs-screenshot">
  <img src={require("@site/static/img/placeholders/screenshot-pending.png").default}
       alt="Placeholder — right-hand status panel on the Auto-Bundle tab, listing pending groups with age and item count"
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> Pending groups list —
    <span className="callout-num">2</span> Age indicator (colored by
    proximity to max-wait) —
    <span className="callout-num">3</span> Manual flush button per group.
  </figcaption>
</figure>

## AJAX refresh route

- **Path:** `/admin/tmgmt/translators/manage/{tmgmt_translator}/auto-bundle/status`
- **Controller:** `AutoBundleStatusController::refresh`
- **Cache:** `no_cache: TRUE`
- **Access:** custom access callback on the controller

The panel polls this route so pending counts and ages stay live without
a full page reload.

## Manual flush

_TBD — document the exact button label and confirmation dialog once the
screenshot is captured. Note that a manual flush is subject to the same
cap enforcement as automatic flushes._

## Common client questions

> **Q — The panel says "3 items pending" but I just saved 5 nodes.**
> Two were rejected by the workflow gate. Check watchdog for INFO entries
> at that timestamp. See [Workflow gate](/04-auto-bundle-tab/07-workflow-gate).

> **Q — Manual flush button is missing.**
> The current user does not have the TMGMT provider administration
> permission on this translator entity.

## Related pages

- [When bundles are released](/05-runtime-behavior/when-bundles-are-released)
- [Queue and cron](/03-continuous-job/queue-and-cron)

## Troubleshooting

- [Stuck in queue](/06-troubleshooting/stuck-in-queue)
