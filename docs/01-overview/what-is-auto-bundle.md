---
title: What is auto-bundle?
sidebar_label: What is auto-bundle?
sidebar_position: 1
sourceRefs:
  - src/Form/AutoBundleForm.php
  - src/Services/AutoBundleGroupKeyBuilder.php
  - src/Services/AutoBundleTriggerEvaluator.php
  - src/Services/AutoBundleFlusher.php
---

# What is auto-bundle?

## The one-sentence version

**Auto-bundle** collects continuous-job translation items into groups
("bundles") and submits each group to Lionbridge as a **single** TMGMT job,
instead of one job per node.

## Why it exists

Without auto-bundle, every time a translatable node is saved, a separate
job leaves the site for Lionbridge. On a busy editorial site this produces
hundreds of tiny jobs a day — expensive for reviewers to manage on both
sides, and hard for Lionbridge translators to context-switch between.

With auto-bundle, items that share a **group key** wait in a small local
queue until any **trigger** fires. Then they are handed to Lionbridge as one
job. Reviewers see one row per bundle. Translators receive one file
containing related content.

## The three concepts you need

<figure className="docs-screenshot">
  <img src={require("@site/static/img/placeholders/screenshot-pending.png").default}
       alt="Grouping dimensions decide which items belong together; triggers decide when to send them; caps decide the maximum bundle size."
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> <strong>Grouping dimensions</strong> —
    which items belong in the <em>same</em> bundle.
    <span className="callout-num">2</span> <strong>Triggers</strong> —
    <em>when</em> a bundle is submitted.
    <span className="callout-num">3</span> <strong>Caps</strong> —
    hard upper limits that force submission regardless of triggers.
  </figcaption>
</figure>

### 1. Grouping dimensions

Two items can only travel in the same bundle if they match on **every**
grouping dimension. Four are always on and non-negotiable:

- **Source language** — mixing sources produces an invalid TMGMT job.
- **Target language** — one bundle translates into exactly one locale.
- **Translator profile** — provider routing must be consistent.
- **Continuous job** — continuous and one-off submissions have separate
  lifecycles.

On top of the always-on set, site builders can enable two optional
dimensions on the Auto-Bundle tab:

- **Group by content type** — keep articles with articles, pages with
  pages. On by default.
- **Group by priority tier** — segregate by a *priority* list field on the
  node (e.g. `high` / `medium` / `low`). Off by default; requires a
  content-model prerequisite. See
  [Priority field content model](/02-prerequisites/priority-field-content-model).

See [Always-on grouping dimensions](/04-auto-bundle-tab/02-always-on-dimensions)
and [Optional dimensions](/04-auto-bundle-tab/03-optional-dimensions) for
full field-level docs.

### 2. Triggers

A bundle is submitted the moment any one of these thresholds is met:

| Trigger | Default | Field on the form |
|---|---|---|
| Word count threshold | 5,000 words | `auto_bundle.trigger_word_count` |
| Item count threshold | 10 items | `auto_bundle.trigger_item_count` |
| Maximum wait time (oldest item) | 24:00:00 | `auto_bundle.trigger_max_wait_seconds` |

Any trigger set to `0` (or `00:00:00` for wait time) is disabled. See
[Trigger thresholds](/04-auto-bundle-tab/05-trigger-thresholds).

### 3. Caps

Caps are hard limits that **cannot be disabled**. They exist so a bundle
cannot grow to a size that is operationally unmanageable — for editors on
the Drupal side or for translators on the Lionbridge side.

| Cap | Default | Field on the form |
|---|---|---|
| Maximum items per bundle | 50 items | `auto_bundle.cap_max_items` |
| Maximum words per bundle | 50,000 words | `auto_bundle.cap_max_words` |

See [Limits & safety caps](/04-auto-bundle-tab/06-limits-and-caps).

## What auto-bundle does **not** change

- **Manual jobs.** Anything sent via the TMGMT cart or the Sources page
  bypasses bundling entirely and is submitted immediately, exactly as it
  was before this feature existed.
- **Translator credentials or routing.** Auto-bundle sits on top of the
  existing Lionbridge Content API translator; it does not alter the
  underlying API contract.
- **TMGMT job structure downstream.** The bundle becomes a normal TMGMT
  job — jobs overview, import queue, and status reporting all continue to
  work as before.

## Where to configure it

**Configuration → Translation Management → Providers → [your translator]
→ Auto-Bundle**

Route: `/admin/tmgmt/translators/manage/{tmgmt_translator}/auto-bundle`

Permission required: the standard TMGMT provider administration
permission — no separate permission is added by this feature.

## Next step

Read [End-to-end flow](/01-overview/end-to-end-flow) to see how a single
node save travels from the editor's browser all the way to a Lionbridge
submission, step by step.
