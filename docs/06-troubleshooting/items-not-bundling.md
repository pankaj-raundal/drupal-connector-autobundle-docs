---
title: Items not bundling
sidebar_label: Items not bundling
sidebar_position: 1
---

# Items not bundling

## Symptom

Client saves translatable nodes but nothing appears in the status panel,
the queue table is empty, and no TMGMT jobs are being created.

## Checklist (in order)

1. **Is the translator plugin `content_api_connector`?**
   Only Lionbridge Content API translators surface the Auto-Bundle
   tab. Other TMGMT provider plugins do not enqueue into
   `tmgmt_contentapi_bundle_queue`.
2. **Is the master switch on?**
   [Enable toggle](/04-auto-bundle-tab/01-enable-toggle) — when off,
   items bypass the queue entirely and are sent individually.
3. **Is the workflow gate configured?**
   If a state list is configured, items in any *other* state are
   silently skipped with a watchdog INFO entry. See
   [Workflow gate](/04-auto-bundle-tab/07-workflow-gate).
4. **Is the content type translatable?**
   Regional and language → Content language and translation.
5. **Is the node hitting a re-queue suppressor?**
   `ContinuousReQueueSuppressor` blocks duplicate rows for the same
   node/target within a short window. Reload after 30 seconds.

## Diagnostic queries

Check the queue table for the translator:

```sql
SELECT COUNT(*) FROM tmgmt_contentapi_bundle_queue
WHERE translator_id = :translator_id;
```

Check watchdog for skipped items:

```
admin/reports/dblog?type=tmgmt_contentapi&severity=6
```

## Related pages

- [Enable continuous mode](/03-continuous-job/enable-continuous-mode)
- [What triggers a continuous job](/03-continuous-job/what-triggers-a-continuous-job)
