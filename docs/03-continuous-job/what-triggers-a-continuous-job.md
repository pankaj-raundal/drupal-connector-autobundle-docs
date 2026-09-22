---
title: What triggers a continuous job
sidebar_label: What triggers a continuous job
sidebar_position: 2
sourceRefs:
  - src/Services/ContinuousJobService.php
  - src/EventSubscriber/
---

# What triggers a continuous job

## What this covers

The Drupal events that cause a translatable node to be enqueued into the
bundle queue (or, when auto-bundle is off, sent directly to Lionbridge).

## Trigger events

_TBD — enumerate the hook_entity_update / hook_entity_insert paths and the
event subscribers. Cover:_

- New node save (`hook_ENTITY_TYPE_insert` on translatable bundles)
- Node re-save (`hook_ENTITY_TYPE_update` with translation-relevant fields
  changed)
- Bulk re-queue actions
- The `ContinuousReQueueSuppressor` gate that prevents duplicate rows

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/placeholders/screenshot-pending.png"
       alt="Placeholder — Drupal status message after saving a translatable node"
       loading="lazy" />
  <figcaption>Confirmation shown to the editor after a successful save that enters the bundle queue.</figcaption>
</figure>

## Common client questions

> **Q — Why did my save not create a queue row?**
> Check the workflow gate first — content in a disallowed moderation
> state is silently skipped and a watchdog INFO entry is written. See
> [Workflow gate](/04-auto-bundle-tab/07-workflow-gate) and
> [Items not bundling](/06-troubleshooting/items-not-bundling).

## Template placeholder

_This page is a stub. Use the [page template](/#page-template)._
