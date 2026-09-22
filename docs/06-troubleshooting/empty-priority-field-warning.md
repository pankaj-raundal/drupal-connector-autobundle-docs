---
title: '"No suitable priority field" warning'
sidebar_label: Empty priority field warning
sidebar_position: 4
---

# "No suitable priority field" warning

## Symptom

The Auto-Bundle tab shows a yellow callout titled *No suitable priority
field* where the priority dropdown should be.

## Cause

`PriorityFieldDiscovery` scans every translatable bundle for a **List
(text)** or **List (integer)** field. If none exist, the picker has
nothing to render and the warning callout is shown instead.

## Fix

Add a List field to at least one translatable content type. Full
walkthrough: [Priority field content model](/02-prerequisites/priority-field-content-model).

## Data safety

The warning is a **render-time substitution only** — any previously saved
`auto_bundle.priority_field` value is preserved via a hidden
`#value` element on the form. Saving the form while the warning is
visible does not wipe your prior selection.

## Related pages

- [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping)
