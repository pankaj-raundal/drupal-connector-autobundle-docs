---
slug: /
title: Support & user documentation
description: Everything the support team needs to answer client questions about auto-bundle and continuous jobs in the Lionbridge Content API TMGMT provider.
sidebar_label: Welcome
sidebar_position: 0
---

# Lionbridge Content API — Auto-Bundle & Continuous Jobs

This site is the single source of truth for **auto-bundle** and
**continuous job** behavior in the `tmgmt_contentapi` Drupal module. It is
written for the support team so that any client question can be answered by
pointing at a URL.

## Who this is for

- **Support engineers** answering client tickets ("why aren't my jobs
  bundling?", "what does this checkbox do?").
- **Site builders** configuring the Auto-Bundle tab for the first time.
- **Reviewers & PMs** validating that a story landed the way the spec said.

## How to use it

1. Client describes a UI they're looking at → find the matching page under
   [Auto-Bundle tab (per field)](/04-auto-bundle-tab/01-enable-toggle). Every
   fieldset in [AutoBundleForm.php](https://git.example.com/lionbridge_translation_provider/-/blob/main/tmgmt_contentapi/src/Form/AutoBundleForm.php)
   has its own page with a screenshot and a "Common client questions"
   section.
2. Client describes a **symptom** (bundle never fires, wrong grouping, stuck
   in queue) → jump to [Troubleshooting](/06-troubleshooting/items-not-bundling).
3. You need the raw config keys, service names, or routes → see
   [Reference](/07-reference/config-schema).

## Page template {#page-template}

Every page under sections 2–5 follows the same structure. If you're adding
or updating a page, keep the headings in this order so support staff know
where to look:

```markdown
---
title: <UI label as it appears in Drupal>
sidebar_label: <short label>
sourceRefs:
  - src/Form/AutoBundleForm.php#L<line>-L<line>
  - src/Services/<relevant service>.php
---

# <UI label>

## What this field does           <!-- 1 sentence, plain English -->

## Screenshot                     <!-- Annotated PNG with numbered callouts -->

## Configuration options          <!-- Table: option → effect → default -->

## Real-world example             <!-- Before/after screenshots or scenario -->

## Related settings               <!-- Links to other pages -->

## Common client questions        <!-- Q&A block -->

## Troubleshooting                <!-- Links into section 06 -->
```

## Where to start

- New to the module? Read [What is auto-bundle?](/01-overview/what-is-auto-bundle)
  and [End-to-end flow](/01-overview/end-to-end-flow) in that order.
- Setting up for the first time? Follow
  [Prerequisites](/02-prerequisites/install-and-credentials) and then
  [Enable continuous mode](/03-continuous-job/enable-continuous-mode).
- Answering a client ticket? Jump straight to the relevant field page or
  troubleshooting entry from the sidebar.
