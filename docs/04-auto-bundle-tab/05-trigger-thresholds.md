---
title: Trigger thresholds — Send a bundle when …
sidebar_label: 05 · Trigger thresholds
sidebar_position: 5
sourceRefs:
  - src/Form/AutoBundleForm.php#L810-L1000
  - src/Services/AutoBundleTriggerEvaluator.php
---

# Trigger thresholds

## What this fieldset does

Decides **when** a bundle is submitted. As soon as **any one** trigger is
met, `AutoBundleTriggerEvaluator` marks the bundle as due and
`AutoBundleFlusher` submits it.

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/auto/auto-bundle-tab-triggers.png"
       alt="Placeholder — Send a bundle when… section with word count, item count, and maximum wait time inputs"
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> Word count threshold —
    <span className="callout-num">2</span> Item count threshold —
    <span className="callout-num">3</span> Maximum wait time (HH:MM:SS).
  </figcaption>
</figure>

## The three triggers

| Trigger | Input | Default | Disable by | Config key |
|---|---|---|---|---|
| Word count threshold | Number, `words` suffix | 5,000 | Enter `0` | `auto_bundle.trigger_word_count` |
| Item count threshold | Number, `items` suffix | 10 | Enter `0` | `auto_bundle.trigger_item_count` |
| Maximum wait time (oldest item) | Text, `HH:MM:SS` mask | 24:00:00 (86,400s) | Enter `00:00:00` | `auto_bundle.trigger_max_wait_seconds` |

The maximum-wait field is a `textfield` with a `value_callback`
(`AutoBundleForm::maxWaitSecondsValueCallback`) that converts between
`HH:MM:SS` display and integer seconds for storage. **Never** change this
to a `<select>` — the field is free-form time entry.

## Worked examples (from the form)

### Word count

> With a threshold of 5,000: three articles arrive totalling 4,800 words —
> the bundle waits. A fourth adds 300 words, bringing the total to 5,100.
> The bundle is submitted immediately.

### Item count

> With a threshold of 10: the 10th item enqueued into a group triggers
> submission the instant it lands, regardless of word count.

### Maximum wait time

> With a limit of 24:00:00: a single article is queued at 09:00 Monday.
> No other trigger fires all day. At 09:00 Tuesday the bundle is
> force-submitted with only that one item.

## Cron dependency for max-wait

Word- and item-count triggers evaluate **synchronously** when a new row
is inserted. The max-wait trigger is time-based, so it only fires when
`AutoBundleTriggerEvaluator` is invoked from **cron**. If cron is broken,
a bundle whose only trigger is max-wait will never flush. See
[Queue and cron](/03-continuous-job/queue-and-cron).

## Directional lock while items are pending

When queued items exist, thresholds can be **raised or disabled**, but
**not lowered**. Lowering a threshold could cause groups to appear "due
now" and stampede the flusher. A warning callout ("Trigger thresholds
are partially locked") explains this on the form.

Any threshold change re-evaluates the current queue immediately on save:
groups that now meet a trigger flush right away; groups blocked by a
concurrent operation defer to the next cron run.

## Common client questions

> **Q — I set item count to 5 but bundles are firing at 3.**
> Something else fired first — probably the word-count threshold or the
> item cap. Check the current values of *both* triggers.

> **Q — Max wait says 24:00:00 but my bundle sat for two days.**
> Cron did not run. Verify Drupal cron is active.

## Related pages

- [Limits & safety caps](/04-auto-bundle-tab/06-limits-and-caps)
- [When bundles are released](/05-runtime-behavior/when-bundles-are-released)

## Troubleshooting

- [Stuck in queue](/06-troubleshooting/stuck-in-queue)
