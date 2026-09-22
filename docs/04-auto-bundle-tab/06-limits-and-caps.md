---
title: Limits & safety caps
sidebar_label: 06 · Limits & caps
sidebar_position: 6
sourceRefs:
  - src/Form/AutoBundleForm.php#L1000-L1100
  - src/Services/AutoBundleTriggerEvaluator.php
---

# Limits & safety caps

## What this fieldset does

Hard upper limits on bundle size. Unlike the trigger thresholds in the
previous section, **caps cannot be disabled** — they exist so a bundle
cannot grow to a size that is operationally unmanageable for reviewers
or for Lionbridge translators.

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/auto/auto-bundle-tab-caps.png"
       alt="Placeholder — Limits & safety caps details section, collapsed by default"
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> Maximum items per bundle —
    <span className="callout-num">2</span> Maximum words per bundle.
  </figcaption>
</figure>

## The caps

| Cap | Input | Default | Min | Config key |
|---|---|---|---|---|
| Maximum items per bundle | Number, `items` suffix | 50 | 1 | `auto_bundle.cap_max_items` |
| Maximum words per bundle | Number, `words` suffix | 50,000 | 1 | `auto_bundle.cap_max_words` |

## Behavior

When a bundle reaches either cap it is force-submitted **immediately**,
regardless of trigger settings. Setting an artificially high value (e.g.
`999999`) effectively disables the cap in practice, which is the
recommended workaround for clients who want unbounded bundles.

## Common client questions

> **Q — Can I set the cap to 0 to disable it?**
> No. The minimum is 1. Set a very high value if you do not want it to
> activate in practice.

> **Q — What happens if I lower the cap while items are queued?**
> The next evaluation force-submits any group already at or above the new
> cap. This is safe but may produce a burst of Lionbridge submissions.

## Related pages

- [Trigger thresholds](/04-auto-bundle-tab/05-trigger-thresholds)
- [When bundles are released](/05-runtime-behavior/when-bundles-are-released)
