---
title: Services map
sidebar_label: Services map
sidebar_position: 2
sourceRefs:
  - tmgmt_contentapi.services.yml
  - src/Services/
---

# Services map

The auto-bundle feature is decomposed into single-responsibility services
in `src/Services/`. Use this map to find the right file when investigating
a bug or extending behavior.

| Service | File | Responsibility |
|---|---|---|
| `tmgmt_contentapi.priority_field_discovery` | `PriorityFieldDiscovery.php` | Scans translatable bundles for List (text) / List (integer) fields; feeds the priority picker. |
| `tmgmt_contentapi.auto_bundle_group_key_builder` | `AutoBundleGroupKeyBuilder.php` | Composes the group key from always-on + optional dimensions. |
| `tmgmt_contentapi.auto_bundle_group_key_humanizer` | `AutoBundleGroupKeyHumanizer.php` | Turns a group key back into human-readable segments for the status panel. |
| `tmgmt_contentapi.auto_bundle_trigger_evaluator` | `AutoBundleTriggerEvaluator.php` | Decides whether a group is due (item count / word count / max wait / caps). |
| `tmgmt_contentapi.auto_bundle_flusher` | `AutoBundleFlusher.php` | Reads a due group, builds a TMGMT job, drops the rows. |
| `tmgmt_contentapi.auto_bundle_status_builder` | `AutoBundleStatusBuilder.php` | Builds the right-side status panel render array. |
| `tmgmt_contentapi.continuous_job_service` | `ContinuousJobService.php` | Enqueues items produced by continuous jobs into the bundle queue. |
| `tmgmt_contentapi.queue_operations` | `QueueOperations.php` | Low-level queue read/write helpers. |
| — | `ContinuousReQueueSuppressor.php` | Blocks duplicate rows for the same node/target within a short window. |
| — | `JobHelper.php`, `JobUploadManagerService.php`, `CreateConnectorJob.php`, `ExportJobFiles.php`, `ImportJob.php`, `HandleThrottling.php`, `CapiDataProcessor.php`, `CapiDetails.php`, `AnalysisCodeApi.php` | Downstream job / Content API plumbing. |

## Extension points

- To add a new grouping dimension, extend `AutoBundleGroupKeyBuilder` and
  add a checkbox in `AutoBundleForm::buildForm()` alongside
  `group_by_content_type`.
- To add a new trigger, extend `AutoBundleTriggerEvaluator::isDue()` and
  add a form field in the "Send a bundle when …" fieldset.
