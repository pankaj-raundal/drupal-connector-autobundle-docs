---
title: Bundle split unexpectedly
sidebar_label: Bundle split unexpectedly
sidebar_position: 2
---

# Bundle split unexpectedly

## Symptom

Client expected one bundle; the status panel shows two or more groups
that "look identical".

## Root causes (in order of frequency)

1. **Priority key mismatch.** Different content types use different
   allowed-value keys (e.g. `Urgent` vs `urgent`). Two keys → two groups,
   even when everything else matches. See
   [Priority field content model](/02-prerequisites/priority-field-content-model).
2. **Group by content type is on.** Bundles never mix content types when
   this is enabled — even if all other dimensions align. See
   [Optional dimensions](/04-auto-bundle-tab/03-optional-dimensions).
3. **Different continuous job.** Each continuous job is its own bundle
   pool. Confirm the nodes were queued under the same continuous job.
4. **Different translator profile.** Uncommon but possible when multiple
   translators exist for the same language pair.

## Diagnostic step

Expand the humanized group key in the status panel — the segment that
differs is the split cause. See
[Group-key composition](/05-runtime-behavior/group-key-composition).

## Related pages

- [Always-on dimensions](/04-auto-bundle-tab/02-always-on-dimensions)
- [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping)
