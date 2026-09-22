---
title: Routes & URLs
sidebar_label: Routes & URLs
sidebar_position: 4
sourceRefs:
  - tmgmt_contentapi.routing.yml
---

# Routes & URLs

Quick reference for the URLs support staff and site builders interact
with. Placeholders in `{braces}` are Drupal parameter names — replace with
real entity IDs when copy-pasting into a browser.

| Purpose | Path | Method | Access | Handler |
|---|---|---|---|---|
| Auto-Bundle configuration form | `/admin/tmgmt/translators/manage/{tmgmt_translator}/auto-bundle` | GET / POST | Custom (`AutoBundleForm::access`) | `AutoBundleForm` |
| Status panel AJAX refresh | `/admin/tmgmt/translators/manage/{tmgmt_translator}/auto-bundle/status` | GET | Custom (controller) | `AutoBundleStatusController::refresh` |
| Continuous submissions list per job | `/admin/tmgmt/jobs/{tmgmt_job}/submissions` | GET | Custom (controller) | `ContinuousSubmissionsController::listSubmissions` |
| Force queue processing | `/tmgmt-contentapi/queue-process-background/{queue_name}/{batch_size}` | POST | `access queue process` | `QueueProcessController::processQueueInBackground` |

## Local task tabs

The Auto-Bundle form is registered as a local task tab so it appears in
the row of tabs at the top of the translator edit page:

```
Edit | Delete | Auto-Bundle
```

Registration lives in `tmgmt_contentapi.links.task.yml`.
