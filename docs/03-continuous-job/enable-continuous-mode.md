---
title: Enable continuous mode
sidebar_label: Enable continuous mode
sidebar_position: 1
sourceRefs:
  - src/Services/ContinuousJobService.php
  - src/ContinuousReQueueSuppressor.php
---

# Enable continuous mode

## What this covers

Turning on **continuous translation** for a TMGMT job. Auto-bundle only
operates on items produced by continuous jobs — one-off cart submissions
bypass bundling entirely.

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/placeholders/screenshot-pending.png"
       alt="Placeholder — TMGMT job edit form with the 'Continuous' checkbox highlighted"
       loading="lazy" />
  <figcaption>TMGMT job → mark as continuous.</figcaption>
</figure>

## Steps

_TBD — screenshot the exact toggle. Document any continuous-settings that
live on the translator entity vs the job._

## Common client questions

> **Q — Do I have to create a continuous job per language pair?**
> Yes, one per source/target/translator profile. Auto-bundle's always-on
> grouping dimensions include continuous job, so mixing them would produce
> separate bundles anyway.

## Related settings

- [Auto-Bundle enable toggle](/04-auto-bundle-tab/01-enable-toggle)
- [Workflow gate](/04-auto-bundle-tab/07-workflow-gate)

## Template placeholder

_This page is a stub. Use the [page template](/#page-template)._
