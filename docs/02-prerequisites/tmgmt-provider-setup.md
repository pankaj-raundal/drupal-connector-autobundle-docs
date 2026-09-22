---
title: TMGMT provider setup
sidebar_label: TMGMT provider setup
sidebar_position: 2
sourceRefs:
  - src/ContentApiTranslatorUI.php
---

# TMGMT provider setup

## What this covers

Configuring the Lionbridge Content API translator entity — the parent
entity that the Auto-Bundle tab hangs off. Every auto-bundle setting is
stored **on this translator**, not in a Drupal `config` object.

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/placeholders/screenshot-pending.png"
       alt="Placeholder — TMGMT provider edit form for a Lionbridge Content API translator"
       loading="lazy" />
  <figcaption>The parent translator edit form. Highlight the local tasks bar (Edit / Auto-Bundle / …).</figcaption>
</figure>

## Fields worth calling out

_TBD — capture each fieldset from `ContentApiTranslatorUI::pluginSettingsForm()`
and document them here. Include the default translator profile, continuous
job settings, callback URLs, and the retry / throttling settings that
interact with auto-bundle._

## Common client questions

> **Q — Can I have multiple translators pointing at the same Lionbridge
> account?**
> Yes. Each translator has its own Auto-Bundle configuration; bundles never
> cross translator boundaries (see the always-on `translator_profile`
> grouping dimension).

## Related settings

- [Enable continuous mode](/03-continuous-job/enable-continuous-mode)
- [Auto-Bundle enable toggle](/04-auto-bundle-tab/01-enable-toggle)

## Troubleshooting

- [Items not bundling](/06-troubleshooting/items-not-bundling)

## Template placeholder

_This page is a stub — fill in per-field detail. Use the
[page template](/#page-template)._
