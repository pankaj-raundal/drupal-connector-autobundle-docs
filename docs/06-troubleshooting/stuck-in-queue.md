---
title: Stuck in queue
sidebar_label: Stuck in queue
sidebar_position: 3
---

# Stuck in queue

## Symptom

Rows exist in `tmgmt_contentapi_bundle_queue` but never flush, even after
the client says "the max wait time passed hours ago".

## Root causes

1. **Cron isn't running.** Max-wait is time-based; it only fires from
   cron. Check `admin/reports/status` for the last cron run.
2. **Auto-bundle is disabled after items were queued.** Toggling the
   master switch off does not empty the queue. Turn it back on, or
   trigger a manual flush from
   [Status panel](/04-auto-bundle-tab/08-status-panel-and-manual-flush).
3. **All triggers disabled + cap not reached.** If every trigger is `0`
   and the group hasn't hit `cap_max_items` or `cap_max_words`, it will
   sit forever. Re-enable at least one trigger.
4. **Lionbridge API errored on the last flush attempt.** Check
   `admin/reports/dblog?type=tmgmt_contentapi` for ERROR entries around
   the expected flush time.

## Force flush

Use the queue processing route:

```
POST /tmgmt-contentapi/queue-process-background/{queue_name}/{batch_size}
```

Permission required: `access queue process`.

## Related pages

- [Queue and cron](/03-continuous-job/queue-and-cron)
- [When bundles are released](/05-runtime-behavior/when-bundles-are-released)
