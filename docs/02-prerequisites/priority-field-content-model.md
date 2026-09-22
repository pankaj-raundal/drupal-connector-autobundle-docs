---
title: Priority field content model
sidebar_label: Priority field content model
sidebar_position: 3
sourceRefs:
  - src/Services/PriorityFieldDiscovery.php
  - src/Form/AutoBundleForm.php
  - README.md (Auto-Bundle setup section)
---

# Priority field content model

## What this covers

The **one-time content-model change** required before the "Group by
priority tier" checkbox on the Auto-Bundle tab does anything useful.

## Why it matters

`PriorityFieldDiscovery` only lists fields that are already present on a
translatable bundle. If no bundle has a suitable field, the picker on the
Auto-Bundle tab renders a warning callout ("No suitable priority field")
and the priority-grouping feature is effectively unavailable.

## Screenshot

<figure className="docs-screenshot">
  <img src={require("@site/static/img/placeholders/screenshot-pending.png").default}
       alt="Placeholder — Manage fields form on a content type, showing a List (text) field being added"
       loading="lazy" />
  <figcaption>Structure → Content types → [type] → Manage fields → Add field → List (text).</figcaption>
</figure>

## Recommended field configuration

| Setting | Recommended value |
|---|---|
| Field type | **List (text)** (or **List (integer)** for numeric keys) |
| Machine name | `field_translation_priority` |
| Label | *Translation priority* |
| Allowed values | `high\|High Priority`<br/>`medium\|Medium Priority`<br/>`low\|Low Priority` |
| Translatable | **No** (share priority across all languages) |
| Required | Optional — empty values fall back to the configured fallback |

## Steps

1. **Structure → Content types → [type] → Manage fields → Add field**.
2. Choose **List (text)**.
3. Machine name `field_translation_priority` (use the same name on every
   participating content type so the picker stays tidy).
4. On the *Allowed values* form, enter one `key|Label` pair per line.
5. Set **Translatable** to *No* unless your editorial workflow needs
   per-language priorities.
6. Repeat for every translatable content type that should participate.
7. Reload the Auto-Bundle tab — the field now appears in the *Priority
   field* dropdown.

## Runtime behavior

- Items with the same priority key (e.g. `high`) bundle together.
- Different priority keys form separate bundles even when every other
  grouping dimension matches.
- Items whose bundle does not carry the field, or whose value is empty,
  are routed by the *If the priority field is empty on a node* setting on
  the Auto-Bundle tab. See
  [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping).

## Common client questions

> **Q — Can I use different allowed-value keys on different content
> types?**
> Technically yes, but bundles will split by key: `High` on articles and
> `high` on pages produce two separate bundles. Use the same keys
> everywhere.

> **Q — What happens if I add the field after items are already queued?**
> Existing queue rows keep their existing group key and flush under it.
> The new priority dimension applies only to items enqueued after the
> field is discovered.

## Troubleshooting

- [Empty priority field warning](/06-troubleshooting/empty-priority-field-warning)
- [Bundle split unexpectedly](/06-troubleshooting/bundle-split-unexpectedly)
