---
title: Always-on grouping dimensions
sidebar_label: 02 · Always-on dimensions
sidebar_position: 2
sourceRefs:
  - src/Form/AutoBundleForm.php (ALWAYS_ON_GROUPING_DIMENSIONS constant)
  - src/Services/AutoBundleGroupKeyBuilder.php
---

# Always-on grouping dimensions

## What this fieldset does

Displays the four grouping dimensions that are **always** part of every
bundle's group key. The checkboxes are read-only — these dimensions
cannot be turned off because bundles that violated them would produce
invalid TMGMT jobs.

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/auto/auto-bundle-tab-always-on.png"
       alt="Placeholder — Always-on grouping dimensions section with four disabled checkboxes"
       loading="lazy" />
  <figcaption>
    Four dimensions, all checked and disabled: Source language, Target
    language, Translator profile, Continuous job.
  </figcaption>
</figure>

## The four dimensions

| Dimension | Why it is mandatory |
|---|---|
| **Source language** | Items in a bundle must share the same source; a mixed-source job is invalid in TMGMT. |
| **Target language** | Each bundle translates into exactly one target locale. |
| **Translator profile** | Provider routing and settings must be consistent within a bundle. |
| **Continuous job** | Continuous and one-off submissions follow different lifecycles. |

## Storage note

These dimensions are **not** written to configuration. They are composed
into the group key at runtime by `AutoBundleGroupKeyBuilder`, regardless
of any stored `auto_bundle` settings. Removing the constant from code is
the only way to change this — no UI setting will disable them.

## Common client questions

> **Q — Why can't I turn off "Continuous job" so my one-off carts bundle
> too?**
> Because bundling one-off items would change their submission lifecycle
> in ways TMGMT downstream cannot reconcile. One-off submissions are sent
> as-is, always.

> **Q — Can I bundle two different target languages together?**
> No. Lionbridge routes each bundle to translators for one target locale;
> mixing targets would require a different API contract.

## Related pages

- [Optional dimensions](/04-auto-bundle-tab/03-optional-dimensions)
- [Group-key composition](/05-runtime-behavior/group-key-composition)
