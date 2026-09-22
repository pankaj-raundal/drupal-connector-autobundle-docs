---
title: Queue and cron
sidebar_label: Queue and cron
sidebar_position: 3
sourceRefs:
  - tmgmt_contentapi_bundle_queue (schema)
  - src/Services/AutoBundleTriggerEvaluator.php
  - src/Services/AutoBundleFlusher.php
  - src/Services/QueueOperations.php
  - src/Controller/QueueProcessController.php
  - tmgmt_contentapi.routing.yml
---

# Queue and cron

## What this covers

The `tmgmt_contentapi_bundle_queue` table, the Drupal queues used to
process it, and the cron dependency for time-based triggers.

## Two queues, one table

- **`tmgmt_contentapi_bundle_queue`** — durable table that holds pending
  items keyed by group key. Rows survive cron failures and site restarts.
- **Drupal queue workers** — background workers that consume the table and
  call `AutoBundleFlusher` for groups that the trigger evaluator marks as
  due.

## Cron dependency

Only the time-based trigger (`trigger_max_wait_seconds`) needs cron to
fire. Item-count and word-count triggers evaluate synchronously the moment
a new row is inserted, so they fire without cron.

**Rule of thumb:** if the client says "my bundle didn't fire after 24
hours", check cron first. See
[Stuck in queue](/06-troubleshooting/stuck-in-queue).

## Manual queue processing route

The module exposes an authenticated route to force queue processing
without waiting for cron:

- **Path:** `/tmgmt-contentapi/queue-process-background/{queue_name}/{batch_size}`
- **Method:** `POST`
- **Permission:** `access queue process` (restricted)
- **Controller:** `QueueProcessController::processQueueInBackground`

Use this from a support session to unblock a stuck queue without global
cron impact.

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/placeholders/screenshot-pending.png"
       alt="Placeholder — status page or drush queue:list output showing the tmgmt_contentapi queues"
       loading="lazy" />
  <figcaption>Queue overview. Highlight items pending vs items released.</figcaption>
</figure>

## Common client questions

> **Q — Can I run cron more often?**
> Yes, and it is safe. Cron only re-evaluates existing rows; it never
> creates duplicates thanks to `ContinuousReQueueSuppressor`.

## Related pages

- [End-to-end flow](/01-overview/end-to-end-flow)
- [When bundles are released](/05-runtime-behavior/when-bundles-are-released)

## Troubleshooting

- [Stuck in queue](/06-troubleshooting/stuck-in-queue)
