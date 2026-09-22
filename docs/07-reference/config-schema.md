---
title: Config schema
sidebar_label: Config schema
sidebar_position: 1
sourceRefs:
  - config/schema/tmgmt_contentapi.schema.yml
  - src/Form/AutoBundleForm.php (defaults)
---

# Config schema

All auto-bundle settings are persisted on the **translator entity** under
the `auto_bundle.*` and `continuous_settings.*` keys. There is no
standalone Drupal config object — `AutoBundleForm::getEditableConfigNames()`
returns an empty array by design.

## `auto_bundle.*`

| Key | Type | Default | Docs |
|---|---|---|---|
| `auto_bundle_enabled` | boolean | `false` | [Enable toggle](/04-auto-bundle-tab/01-enable-toggle) |
| `group_by_content_type` | boolean | `true` | [Optional dimensions](/04-auto-bundle-tab/03-optional-dimensions) |
| `group_by_priority` | boolean | `false` | [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping) |
| `priority_field` | string | `""` | [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping) |
| `priority_empty_fallback` | enum `normal\|low\|skip` | `normal` | [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping) |
| `trigger_word_count` | integer (words, `0` = off) | `5000` | [Trigger thresholds](/04-auto-bundle-tab/05-trigger-thresholds) |
| `trigger_item_count` | integer (items, `0` = off) | `10` | [Trigger thresholds](/04-auto-bundle-tab/05-trigger-thresholds) |
| `trigger_max_wait_seconds` | integer (seconds, `0` = off) | `86400` | [Trigger thresholds](/04-auto-bundle-tab/05-trigger-thresholds) |
| `cap_max_items` | integer (items, min `1`) | `50` | [Limits & caps](/04-auto-bundle-tab/06-limits-and-caps) |
| `cap_max_words` | integer (words, min `1`) | `50000` | [Limits & caps](/04-auto-bundle-tab/06-limits-and-caps) |

## `continuous_settings.*` (auto-bundle-adjacent)

| Key | Type | Default | Docs |
|---|---|---|---|
| `workflow_states_required` | list of moderation state ids | `[]` (open) | [Workflow gate](/04-auto-bundle-tab/07-workflow-gate) |

## Always-on grouping dimensions (not in config)

Composed at runtime by `AutoBundleGroupKeyBuilder`; no config keys.

```
source_language, target_language, translator_profile, continuous_job
```

Constant: `AutoBundleForm::ALWAYS_ON_GROUPING_DIMENSIONS`.
