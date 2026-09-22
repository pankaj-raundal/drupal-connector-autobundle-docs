---
title: Permissions
sidebar_label: Permissions
sidebar_position: 3
sourceRefs:
  - tmgmt_contentapi.permissions.yml
---

# Permissions

The `tmgmt_contentapi` module declares one custom permission. Everything
else relies on standard TMGMT provider administration permissions.

| Permission | Machine name | Restrict access | Docs |
|---|---|---|---|
| Access Translation Queue Process | `access queue process` | **Yes** | [Queue and cron](/03-continuous-job/queue-and-cron) |

## Recommended role setup

- **Editors** — no new permissions; standard node edit permissions apply.
- **Translation managers** — TMGMT provider administration + optionally
  `access queue process` if they need to force flushes.
- **Support / DevOps** — `access queue process` (used to unblock stuck
  queues without waiting for cron).
