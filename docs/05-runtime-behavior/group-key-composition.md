---
title: Group-key composition
sidebar_label: Group-key composition
sidebar_position: 1
sourceRefs:
  - src/Services/AutoBundleGroupKeyBuilder.php
  - src/Services/AutoBundleGroupKeyHumanizer.php
---

# Group-key composition

## What this covers

How `AutoBundleGroupKeyBuilder` assembles the string key that decides
which items belong in the same bundle, and how
`AutoBundleGroupKeyHumanizer` turns it back into something readable for
the status panel.

## Formula

```
group_key = source_language
          + '|' + target_language
          + '|' + translator_profile
          + '|' + continuous_job_id
          + optional('|' + content_type)     ← when group_by_content_type
          + optional('|' + priority_value)   ← when group_by_priority and a
                                                priority_field is selected;
                                                empty values resolved through
                                                priority_empty_fallback
```

## Worked example

_TBD — capture a real key from the status panel; annotate each segment
with its source config._

## Common client questions

> **Q — Why does the status panel show two entries for what looks like
> the same content?**
> The keys differ on a segment the client isn't looking at — most
> commonly translator profile or priority tier. Expand the humanized key.

## Related pages

- [Always-on dimensions](/04-auto-bundle-tab/02-always-on-dimensions)
- [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping)
- [Bundle split unexpectedly](/06-troubleshooting/bundle-split-unexpectedly)
