---
title: Install & credentials
sidebar_label: Install & credentials
sidebar_position: 1
sourceRefs:
  - README.md (module root)
  - composer.json
---

# Install & credentials

## What this covers

Installing the `lionbridge_translation_provider` module (which ships
`tmgmt_contentapi` as a submodule) and connecting it to a Lionbridge
Content API account.

## Prerequisites

- Drupal 9 or 10
- TMGMT enabled (`drupal/tmgmt`)
- Lionbridge Content API credentials (API key, secret, service URL)

## Screenshot

<figure className="docs-screenshot">
  <img src="/img/auto/install-credentials.png"
       alt="Placeholder — replace with a screenshot of the Lionbridge provider settings form"
       loading="lazy" />
  <figcaption>Provider settings screen. Highlight the credential fields and the "Test connection" button.</figcaption>
</figure>

## Steps

1. Install via Composer:
   ```bash
   composer require drupal/lionbridge_translation_provider
   ```
2. Enable the module:
   ```bash
   drush en lionbridge_translation_provider -y
   ```
3. **Configuration → Translation Management → Providers**, add a new
   provider of type **Lionbridge Content API Connector**.
4. Enter the API credentials supplied by Lionbridge.
5. Save. Re-open the translator; the **Auto-Bundle** local task appears.

## Common client questions

> **Q — Where do I get my API credentials?**
> Lionbridge provisions these per client. Ticket must go to the Lionbridge
> onboarding team, not to the module maintainers.

> **Q — I saved credentials but the Auto-Bundle tab isn't there.**
> Ensure the translator's *plugin* is `content_api_connector`. The
> Auto-Bundle tab is only attached to that plugin — other TMGMT provider
> plugins do not expose it.

## Troubleshooting

- [Items not bundling](/06-troubleshooting/items-not-bundling) — usually
  a credentials or plugin mismatch when the tab is missing.

## Template placeholder

_This page is a stub — fill in real credentials-screen screenshots and any
site-specific quirks. Use the [page template](/#page-template)._
