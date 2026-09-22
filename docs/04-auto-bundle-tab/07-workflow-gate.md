---
title: Workflow gate
sidebar_label: 07 · Workflow gate
sidebar_position: 7
sourceRefs:
  - src/Form/AutoBundleForm.php#L120-L200
  - continuous_settings.workflow_states_required
---

# Workflow gate

## What this fieldset does

Restricts which **content moderation states** trigger a continuous
translation job. Applies to **both** auto-bundle mode and direct
continuous submission — it is *not* an auto-bundle-only setting, which is
why it renders above the master switch and stays accessible even when
auto-bundle is off.

Only visible when the `content_moderation` core module is enabled.

## Screenshot

<figure className="docs-screenshot">
  <img src={require("@site/static/img/auto/auto-bundle-tab-workflow-gate.png").default}
       alt="Placeholder — Workflow gate details with a checkbox list of allowed moderation states"
       loading="lazy" />
  <figcaption>
    <span className="callout-num">1</span> Allowed moderation states
    (checkboxes) —
    <span className="callout-num">2</span> "What this does" callout —
    <span className="callout-num">3</span> Example callout.
  </figcaption>
</figure>

## Configuration options

| Option | Effect | Default | Config key |
|---|---|---|---|
| Allowed moderation states | Only content in a checked state triggers a translation job. Leave all unchecked to allow any state. | *(empty — gate open)* | `continuous_settings.workflow_states_required` |

## Behavior

- Zero states checked → gate is fully open; every state triggers as
  normal (default).
- One or more states checked → items in any other state are **silently
  skipped**. A Drupal watchdog **INFO** log entry is written per skip
  (useful for support triage).

## No workflow available message

If no `workflow` entities exist yet, the section shows a "No workflows
found" notice. Add and enable at least one content moderation workflow
before configuring the gate.

## Worked example (from the form)

> Check *Published* to ensure only fully published nodes are sent to
> Lionbridge. Nodes in *Draft* or *Needs review* are silently queued for
> human review first.

## Common client questions

> **Q — I checked "Published" but drafts are still being sent.**
> Verify the node actually reaches Published state before save. Some
> editorial flows save-then-transition; the gate is checked at save time.

> **Q — Where do I see the "skipped" log entries?**
> `admin/reports/dblog` — filter on the `tmgmt_contentapi` type at
> severity Info.

## Related pages

- [Enable continuous mode](/03-continuous-job/enable-continuous-mode)
- [What triggers a continuous job](/03-continuous-job/what-triggers-a-continuous-job)
