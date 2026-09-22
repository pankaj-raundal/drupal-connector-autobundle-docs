---
title: Priority tier grouping
sidebar_label: 04 · Priority tier grouping
sidebar_position: 4
sourceRefs:
  - src/Form/AutoBundleForm.php#L560-L720
  - src/Services/PriorityFieldDiscovery.php
---

# Priority tier grouping

## What this field does

Adds a **priority tier** as a grouping dimension. Items sharing the same
priority value (e.g. `high`) bundle together; different tiers form
separate bundles even when every other dimension matches.

## Prerequisites

You must add a **List (text)** or **List (integer)** field to every
translatable content type that should participate. Follow the walkthrough
in [Priority field content model](/02-prerequisites/priority-field-content-model).

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/auto/auto-bundle-tab-priority.png"
       alt="Placeholder — Group by priority tier checkbox with the priority field picker below"
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> Group by priority tier checkbox —
    <span className="callout-num">2</span> "Before you turn this on" setup callout —
    <span className="callout-num">3</span> Priority field dropdown —
    <span className="callout-num">4</span> Empty-value fallback dropdown.
  </figcaption>
</figure>

## Configuration options

| Option | Effect | Default | Config key |
|---|---|---|---|
| Group by priority tier | Master switch for this dimension | Off | `auto_bundle.group_by_priority` |
| Priority field | Which List field to read | *(empty)* | `auto_bundle.priority_field` |
| If the priority field is empty on a node | Fallback routing | `normal` | `auto_bundle.priority_empty_fallback` |

### Fallback options in detail

| Value | Behavior |
|---|---|
| `normal` (**recommended**) | Empty items join a shared `normal` tier bundle. |
| `low` | Empty items join the `low` tier bundle. |
| `skip` | Empty items bypass bundling and are submitted immediately as their own single-item job. |

## Worked example (from the form)

Three articles are queued for the same source/target/profile: two marked
`urgent`, one marked `normal`.

- **ON:** two bundles — \{article A urgent, article B urgent\} and
  \{article C normal\}.
- **OFF:** one bundle of three items.

## Empty-picker state

When `PriorityFieldDiscovery` returns no eligible fields (no List (text)
or List (integer) on any translatable bundle), the picker is **replaced**
with a warning callout ("No suitable priority field"). Any previously
saved `priority_field` value is preserved via a hidden `#value` element,
so saving the form does not wipe your setup.

## Field-lock behavior

Same as "Group by content type": while items are pending in the queue,
the checkbox, field dropdown, and fallback dropdown are all disabled.

## Common client questions

> **Q — I checked the box but nothing changed.**
> Priority grouping requires a field to be **selected** in the picker,
> not just the box checked. Verify the picker has a non-empty selection.

> **Q — My "urgent" items are still bundling with "normal" items.**
> Check that both content types use the **same key** (`urgent`, not
> `Urgent` on one and `urgent` on the other). Different keys → different
> bundles.

> **Q — Empty priority items are being submitted one-by-one — is that
> expected?**
> Only if the fallback is set to `skip`. Change it to `normal` or `low`
> to bundle them.

## Related pages

- [Priority field content model](/02-prerequisites/priority-field-content-model)
- [Optional dimensions](/04-auto-bundle-tab/03-optional-dimensions)

## Troubleshooting

- [Empty priority field warning](/06-troubleshooting/empty-priority-field-warning)
- [Bundle split unexpectedly](/06-troubleshooting/bundle-split-unexpectedly)
