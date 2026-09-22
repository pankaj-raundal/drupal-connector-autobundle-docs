---
title: When bundles are released
sidebar_label: When bundles are released
sidebar_position: 3
sourceRefs:
  - src/Services/AutoBundleTriggerEvaluator.php
  - src/Services/AutoBundleFlusher.php
---

# When bundles are released

## What this covers

The decision matrix `AutoBundleTriggerEvaluator` uses to decide "due /
not due", and the handoff to `AutoBundleFlusher`.

## Decision matrix

A bundle is **due** the moment any of the following are true:

| Rule | Evaluated | Source |
|---|---|---|
| Item count ≥ `trigger_item_count` (when > 0) | Synchronously on insert | Trigger |
| Word count ≥ `trigger_word_count` (when > 0) | Synchronously on insert | Trigger |
| Age of oldest item ≥ `trigger_max_wait_seconds` (when > 0) | On cron | Trigger |
| Item count ≥ `cap_max_items` | Synchronously on insert | Cap |
| Word count ≥ `cap_max_words` | Synchronously on insert | Cap |

The evaluator short-circuits on the first true rule and hands the group
to `AutoBundleFlusher`, which:

1. Reads all rows for the group under a database lock.
2. Builds one TMGMT job with all items attached.
3. Deletes the queue rows only after the job is created (crash-safe).
4. Submits the job via the standard Content API translator plugin.

## Concurrency

The flusher takes a per-group lock; parallel evaluations cannot
double-submit. When a lock is contested, the losing evaluation defers to
the next cron run — a warning callout on the form explains this.

## Related pages

- [Trigger thresholds](/04-auto-bundle-tab/05-trigger-thresholds)
- [Limits & safety caps](/04-auto-bundle-tab/06-limits-and-caps)
- [Queue and cron](/03-continuous-job/queue-and-cron)
