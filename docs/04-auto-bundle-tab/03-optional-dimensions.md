---
title: Optional dimensions — Group by content type
sidebar_label: 03 · Optional dimensions
sidebar_position: 3
sourceRefs:
  - src/Form/AutoBundleForm.php#L490-L560
---

# Optional dimensions — Group by content type

## What this field does

Adds **content type** as a grouping dimension on top of the always-on
four. When checked, articles bundle with articles, basic pages with basic
pages, and so on.

## Screenshot

<figure className="docs-screenshot">
  <img src={require("@site/static/img/auto/auto-bundle-tab-group-by-content-type.png").default}
       alt="Placeholder — Group by content type checkbox with What this does and Example callouts"
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> Group by content type checkbox
    (disabled while items are pending in the queue) —
    <span className="callout-num">2</span> "What this does" callout —
    <span className="callout-num">3</span> "Example" callout with ON/OFF outcomes.
  </figcaption>
</figure>

## Configuration options

| Option | Effect | Default | Config key |
|---|---|---|---|
| Group by content type | When on, splits bundles by content type | **On** | `auto_bundle.group_by_content_type` |

## When ON

Items are bundled only with other items of the same content type.

## When OFF

Content type is ignored; items of different types that match all other
grouping rules travel together in a single bundle.

## Worked example (from the form)

Two articles and one basic page are queued for the same
source/target/profile.

- **ON:** two bundles — \{article, article\} and \{basic page\}.
- **OFF:** one bundle — \{article, article, basic page\}.

## Field-lock behavior

While rows are pending in `tmgmt_contentapi_bundle_queue`, this checkbox
is **disabled**. Toggling it would rewrite the group-key formula and
orphan queued rows under a stale key that can never flush. The field
unlocks automatically once the queue is empty; a warning callout is shown
at the top of the section.

## Common client questions

> **Q — Why is the checkbox greyed out?**
> Items are currently pending in the queue. The message at the top of the
> section shows the pending count. Wait for a flush (or trigger one
> manually) and reload the page.

> **Q — Can I bundle by taxonomy term instead of content type?**
> Not with this checkbox. Use "Group by priority tier" as a more general
> per-node dimension, or open a feature request.

## Related pages

- [Priority tier grouping](/04-auto-bundle-tab/04-priority-tier-grouping)
- [Group-key composition](/05-runtime-behavior/group-key-composition)

## Troubleshooting

- [Bundle split unexpectedly](/06-troubleshooting/bundle-split-unexpectedly)
