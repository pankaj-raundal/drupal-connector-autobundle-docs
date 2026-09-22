# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: capture-screenshots.spec.ts >> Auto-Bundle admin tab screenshots >> 08 · status panel
- Location: screenshot-capture/capture-screenshots.spec.ts:105:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.tmgmt-contentapi-status-panel, [id*="auto-bundle-status"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - link "Skip to main content" [ref=f2e2] [cursor=pointer]:
    - /url: "#main-content"
  - group "Site administration toolbar":
    - navigation "Toolbar items" [ref=f2e3]:
      - heading "Toolbar items" [level=2] [ref=f2e4]
      - generic [ref=f2e5]:
        - link "Back to site" [ref=f2e6] [cursor=pointer]:
          - /url: https://dconnector933.ddev.site:3989/user/1?check_logged_in=1
        - generic:
          - navigation
      - generic [ref=f2e7]:
        - button "Manage" [pressed] [ref=f2e8] [cursor=pointer]
        - navigation "Administration menu" [ref=f2e10]:
          - heading "Administration menu" [level=3] [ref=f2e11]
          - list [ref=f2e12]:
            - listitem [ref=f2e13]:
              - link "Content" [ref=f2e14] [cursor=pointer]:
                - /url: /admin/content
            - listitem [ref=f2e15]:
              - link "Structure" [ref=f2e16] [cursor=pointer]:
                - /url: /admin/structure
            - listitem [ref=f2e17]:
              - link "Appearance" [ref=f2e18] [cursor=pointer]:
                - /url: /admin/appearance
            - listitem [ref=f2e19]:
              - link "Extend" [ref=f2e20] [cursor=pointer]:
                - /url: /admin/modules
            - listitem [ref=f2e21]:
              - link "Configuration" [ref=f2e22] [cursor=pointer]:
                - /url: /admin/config
            - listitem [ref=f2e23]:
              - link "Translation" [ref=f2e24] [cursor=pointer]:
                - /url: /admin/tmgmt
            - listitem [ref=f2e25]:
              - link "People" [ref=f2e26] [cursor=pointer]:
                - /url: /admin/people
            - listitem [ref=f2e27]:
              - link "Reports" [ref=f2e28] [cursor=pointer]:
                - /url: /admin/reports
            - listitem [ref=f2e29]:
              - link "Help" [ref=f2e30] [cursor=pointer]:
                - /url: /admin/help
          - button "Vertical orientation" [ref=f2e33] [cursor=pointer]
      - button "Shortcuts" [ref=f2e35] [cursor=pointer]
      - button "admin" [ref=f2e37] [cursor=pointer]
      - button "Devel" [ref=f2e39] [cursor=pointer]
      - generic [ref=f2e40]:
        - link "Announcements" [ref=f2e41] [cursor=pointer]:
          - /url: /admin/announcements_feed
        - generic:
          - navigation
  - main [ref=f2e43]:
    - generic [ref=f2e46]:
      - navigation [ref=f2e49]:
        - heading "Breadcrumb" [level=2] [ref=f2e50]
        - list [ref=f2e51]:
          - listitem [ref=f2e52]:
            - link "Home" [ref=f2e53] [cursor=pointer]:
              - /url: /
          - listitem [ref=f2e54]:
            - link "Administration" [ref=f2e55] [cursor=pointer]:
              - /url: /admin
          - listitem [ref=f2e56]:
            - link "Translation" [ref=f2e57] [cursor=pointer]:
              - /url: /admin/tmgmt
          - listitem [ref=f2e58]:
            - link "Providers" [ref=f2e59] [cursor=pointer]:
              - /url: /admin/tmgmt/translators
          - listitem [ref=f2e60]:
            - link "Edit provider" [ref=f2e61] [cursor=pointer]:
              - /url: /admin/tmgmt/translators/manage/contentapi
      - generic [ref=f2e62]:
        - generic [ref=f2e63]:
          - heading "Auto-Bundle" [level=1] [ref=f2e64]
          - link [ref=f2e65] [cursor=pointer]:
            - /url: /admin/config/user-interface/shortcut/manage/default/add-link-inline?link=admin/tmgmt/translators/manage/contentapi/auto-bundle&name=Auto-Bundle&destination=/admin/tmgmt/translators/manage/contentapi/auto-bundle&token=7stTEXf0KyTyOBo-WWJhAYJ5JAYmceXCLR5NRvAmCW0
            - generic [ref=f2e67]:
              - text: Add to
              - emphasis [ref=f2e68]: Default
              - text: shortcuts
        - generic [ref=f2e69]:
          - heading "Primary tabs" [level=2] [ref=f2e70]
          - navigation "Primary tabs" [ref=f2e71]:
            - list [ref=f2e72]:
              - listitem [ref=f2e73]:
                - link "Edit" [ref=f2e74] [cursor=pointer]:
                  - /url: /admin/tmgmt/translators/manage/contentapi
              - listitem [ref=f2e75]:
                - link "Auto-Bundle" [ref=f2e76] [cursor=pointer]:
                  - /url: /admin/tmgmt/translators/manage/contentapi/auto-bundle
              - listitem [ref=f2e77]:
                - link "Translate provider" [ref=f2e78] [cursor=pointer]:
                  - /url: /admin/tmgmt/translators/manage/contentapi/translate
              - listitem [ref=f2e79]:
                - link "Devel" [ref=f2e80] [cursor=pointer]:
                  - /url: /devel/tmgmt_translator/contentapi
    - generic [ref=f2e82]:
      - alert [ref=f2e86]:
        - heading "Error message" [level=2] [ref=f2e88]
        - generic [ref=f2e89]:
          - text: There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the
          - link "available updates" [ref=f2e90] [cursor=pointer]:
            - /url: /admin/reports/updates/update
          - text: page for more information and to update your software.
      - generic [ref=f2e93]:
        - generic [ref=f2e95]:
          - group [ref=f2e96]:
            - button "Workflow gate (continuous & auto-bundle)" [expanded] [ref=f2e97] [cursor=pointer]
            - generic [ref=f2e98]:
              - generic [ref=f2e99]: Control which content moderation states are eligible for automatic translation job creation. Applies to both auto-bundle and continuous direct jobs, regardless of whether auto-bundle is enabled.
              - group "Allowed moderation states" [ref=f2e100]:
                - generic [ref=f2e103]:
                  - generic [ref=f2e104]:
                    - generic [ref=f2e105]:
                      - 'checkbox "Editorial: Draft" [ref=f2e106]'
                      - text: "Editorial: Draft"
                    - generic [ref=f2e107]:
                      - 'checkbox "Editorial: Published" [checked] [ref=f2e108]'
                      - text: "Editorial: Published"
                    - generic [ref=f2e109]:
                      - 'checkbox "Editorial: Archived" [ref=f2e110]'
                      - text: "Editorial: Archived"
                  - generic [ref=f2e111]: Only content in a checked state will trigger a translation job. Leave all unchecked to allow any state (default — no restriction).
              - note [ref=f2e112]:
                - heading "What this does" [level=4] [ref=f2e113]
                - paragraph [ref=f2e114]: When no states are checked, the gate is fully open and all content triggers translation jobs as normal.
                - paragraph [ref=f2e115]:
                  - text: When one or more states are checked, content in any other state is silently skipped. A Drupal watchdog
                  - emphasis [ref=f2e116]: info
                  - text: log entry is written for every skipped item.
                - paragraph [ref=f2e117]:
                  - text: This gate applies to
                  - strong [ref=f2e118]: both
                  - text: auto-bundle mode and continuous direct-submission mode — no separate configuration is needed.
              - note [ref=f2e119]:
                - heading "Example" [level=4] [ref=f2e120]
                - paragraph [ref=f2e121]: Check <em>Published</em> to ensure only fully published nodes are sent to Lionbridge. Nodes saved in <em>Draft</em> or <em>Needs review</em> will be silently queued for human review first.
          - group [ref=f2e122]:
            - button "Auto-Bundle Settings" [expanded] [ref=f2e123] [cursor=pointer]
            - generic [ref=f2e124]:
              - generic [ref=f2e125]: Configure how jobs are automatically bundled for this translator. Specific options will be added in subsequent stories.
              - generic [ref=f2e126]:
                - generic [ref=f2e127]:
                  - checkbox "Enable Auto-Bundle" [checked] [ref=f2e128]
                  - text: Enable Auto-Bundle
                  - generic [ref=f2e129]: Turn automatic bundling on or off for this translator. When off, jobs are sent individually as they are today. You can toggle this at any time.
                - generic [ref=f2e130]: Live preview ON
              - status [ref=f2e131]:
                - generic [ref=f2e132]: "Current setup:"
                - generic [ref=f2e133]: flush at 10 items or 5,000 words or 1 day wait • checked after every published item • hard cap 50 items / 50,000 words • 100 concurrent
              - status [ref=f2e134]:
                - generic [ref=f2e135]: "Bundling by:"
                - generic [ref=f2e136]: items travel together when they share source language + target language + translator + continuous job + content type
              - note [ref=f2e137]:
                - heading "What this does" [level=4] [ref=f2e138]
                - paragraph [ref=f2e139]: When checked, eligible new jobs from this translator are automatically grouped into bundles using the rules configured below.
                - paragraph [ref=f2e140]: When unchecked, all sections below remain visible and saveable, but no bundling occurs — jobs are sent individually as they are today.
                - paragraph [ref=f2e141]: Manual jobs are never affected by this setting and are always sent as-is.
              - group [ref=f2e142]:
                - button "Group items by …" [expanded] [ref=f2e143] [cursor=pointer]
                - generic [ref=f2e144]:
                  - group [ref=f2e145]:
                    - button "Always-on grouping dimensions" [expanded] [ref=f2e146] [cursor=pointer]
                    - generic [ref=f2e147]:
                      - generic [ref=f2e148]:
                        - checkbox "Source language" [checked] [disabled] [ref=f2e149]
                        - text: Source language
                        - generic [ref=f2e150]: Items in a bundle must share the same source language; mixing source languages would produce an invalid TMGMT job.
                      - generic [ref=f2e151]:
                        - checkbox "Target language" [checked] [disabled] [ref=f2e152]
                        - text: Target language
                        - generic [ref=f2e153]: Items in a bundle must share the same target language; each bundle translates into exactly one target locale.
                      - generic [ref=f2e154]:
                        - checkbox "Translator profile" [checked] [disabled] [ref=f2e155]
                        - text: Translator profile
                        - generic [ref=f2e156]: Items in a bundle must use the same translator profile so that provider settings and routing are consistent.
                      - generic [ref=f2e157]:
                        - checkbox "Continuous job" [checked] [disabled] [ref=f2e158]
                        - text: Continuous job
                        - generic [ref=f2e159]: Continuous and one-off jobs are kept in separate bundles because they follow different submission lifecycles.
                      - note [ref=f2e160]:
                        - heading "What this does" [level=4] [ref=f2e161]
                        - paragraph [ref=f2e162]: These four dimensions — Source language, Target language, Translator profile, and Continuous job — are always part of the bundle group key. Mixing items that differ on any of these would produce an invalid TMGMT job, so they cannot be turned off.
                        - paragraph [ref=f2e163]: Every bundle therefore contains items that share the same source language, target language, translator profile, and continuous-job context. Any additional grouping rules you configure below are applied on top of these mandatory dimensions.
                        - paragraph [ref=f2e164]: These dimensions are not stored in configuration — they are composed into the group key automatically at runtime.
                  - heading "Optional dimensions" [level=4] [ref=f2e165]
                  - generic [ref=f2e166]:
                    - checkbox "Group by content type" [checked] [ref=f2e167]
                    - text: Group by content type
                    - generic [ref=f2e168]: When enabled, items are bundled only with other items of the same content type. Disable to allow items of different content types to share a bundle when all other grouping rules match.
                  - note [ref=f2e169]:
                    - heading "What this does" [level=4] [ref=f2e170]
                    - paragraph [ref=f2e171]: When checked, items are bundled only with other items of the same content type. Articles bundle with articles, basic pages with basic pages, and so on.
                    - paragraph [ref=f2e172]: When unchecked, content type is ignored when forming bundles, so items of different types that match all other grouping rules can travel together in a single bundle.
                    - paragraph [ref=f2e173]: This dimension is added on top of the always-on grouping dimensions above.
                  - note [ref=f2e174]:
                    - heading "Example" [level=4] [ref=f2e175]
                    - paragraph [ref=f2e176]: Two articles and one basic page are queued for the same source/target language and translator profile.
                    - paragraph [ref=f2e177]: "With \"Group by content type\" ON: two bundles are formed — one containing the two articles, and a separate one containing the basic page."
                    - paragraph [ref=f2e178]: "With \"Group by content type\" OFF: a single bundle of three items is formed, since all other grouping dimensions match."
                  - generic [ref=f2e179]:
                    - checkbox "Group by priority tier" [ref=f2e180]
                    - text: Group by priority tier
                  - note [ref=f2e181]:
                    - heading "Before you turn this on" [level=4] [ref=f2e182]
                    - paragraph [ref=f2e183]:
                      - text: To use priority-tier grouping you must add a
                      - strong [ref=f2e184]: List (text)
                      - text: or
                      - strong [ref=f2e185]: List (integer)
                      - text: field to each translatable content type you want to prioritize. The Auto-Bundle picker below only shows fields that already exist.
                    - paragraph [ref=f2e186]:
                      - strong [ref=f2e187]: Quick setup
                    - list [ref=f2e189]:
                      - listitem [ref=f2e190]:
                        - text: Go to
                        - emphasis [ref=f2e191]: Structure → Content types → [your type] → Manage fields
                        - text: .
                      - listitem [ref=f2e192]:
                        - text: Add a new field of type
                        - emphasis [ref=f2e193]: List (text)
                        - text: ". Suggested machine name:"
                        - code [ref=f2e194]: field_translation_priority
                        - text: .
                      - listitem [ref=f2e195]:
                        - text: "Define the allowed values, one per line. Recommended:"
                        - code [ref=f2e196]: high|High Priority
                        - text: ","
                        - code [ref=f2e197]: medium|Medium Priority
                        - text: ","
                        - code [ref=f2e198]: low|Low Priority
                        - text: .
                      - listitem [ref=f2e199]: "Make the field translatable if your workflow requires it (most cases: leave non-translatable so all language versions share the same priority)."
                      - listitem [ref=f2e200]: Repeat for every translatable content type that should participate in priority-tier grouping.
                      - listitem [ref=f2e201]: Reload this page — the field will now appear in the picker below.
                    - paragraph [ref=f2e202]:
                      - text: Items whose bundle does not carry the selected field, or whose field value is empty, fall back to the
                      - emphasis [ref=f2e203]: "\"If the priority field is empty on a node\""
                      - text: setting below.
                  - generic [ref=f2e204]:
                    - generic [ref=f2e205]:
                      - generic [ref=f2e206] [cursor=pointer]: Priority field
                      - combobox "Priority field" [disabled] [ref=f2e207]:
                        - option "- Select a priority field -" [disabled] [selected]
                        - option "Content > Article > List(text) (list_string)" [disabled]
                    - generic [ref=f2e208]:
                      - generic [ref=f2e209] [cursor=pointer]: If the priority field is empty on a node
                      - combobox "If the priority field is empty on a node" [disabled] [ref=f2e210]:
                        - option "Treat the item as 'normal' (recommended)" [disabled] [selected]
                        - option "Treat the item as 'low'" [disabled]
                        - option "Skip auto-bundling for this item (submit immediately on its own)" [disabled]
                  - note [ref=f2e211]:
                    - heading "What this does" [level=4] [ref=f2e212]
                    - paragraph [ref=f2e213]: When checked, items are bundled only with other items that share the same priority value, taken from the field you select below. Urgent items travel together, normal items travel together, and so on.
                    - paragraph [ref=f2e214]: When unchecked, priority is ignored when forming bundles and items of any priority can be combined as long as all other grouping rules match.
                    - paragraph [ref=f2e215]: This dimension is added on top of the always-on grouping dimensions above.
                  - note [ref=f2e216]:
                    - heading "Example" [level=4] [ref=f2e217]
                    - paragraph [ref=f2e218]: "Three articles are queued for the same source/target language and translator profile: two marked \"urgent\" and one marked \"normal\"."
                    - paragraph [ref=f2e219]: "With \"Group by priority tier\" ON: two bundles are formed — one containing the two urgent articles, and a separate one containing the normal article."
                    - paragraph [ref=f2e220]: "With \"Group by priority tier\" OFF: a single bundle of three items is formed, since all other grouping dimensions match."
                  - note [ref=f2e221]:
                    - heading "Heads up" [level=4] [ref=f2e222]
                    - paragraph [ref=f2e223]: Only list (text) and list (integer) fields on translatable bundles are eligible. A bundle that does not carry the selected field is treated as if its priority were empty.
                    - paragraph [ref=f2e224]: Items with an empty priority value fall back to the "Priority empty fallback" value above. Choose a fallback that matches one of the field's allowed values so those items still group cleanly.
                  - generic [ref=f2e225]:
                    - generic [ref=f2e226]: Resulting group key
                    - code [ref=f2e227]: "continuous: · src: · tgt: · translator:contentapi · type:"
                    - paragraph [ref=f2e228]: This preview shows how items will be grouped into bundles based on your settings above. Each unique combination of dimensions creates a separate bundle. The preview updates live as you toggle the optional grouping checkboxes — no save required.
                    - paragraph [ref=f2e229]:
                      - strong [ref=f2e230]: "Placeholder values:"
                      - text: The values shown above (like
                      - code [ref=f2e231]: <cjid>
                      - text: ","
                      - code [ref=f2e232]: <EN>
                      - text: ) are placeholders representing the actual values from your content. At runtime, they will be replaced with real translator IDs, language codes, content types, and priorities from your items.
              - group [ref=f2e233]:
                - button "Send a bundle when …" [expanded] [ref=f2e234] [cursor=pointer]
                - generic [ref=f2e235]:
                  - generic [ref=f2e236]:
                    - generic [ref=f2e237] [cursor=pointer]: Word count threshold
                    - spinbutton "Word count threshold" [ref=f2e238]: "5000"
                    - text: words
                    - generic [ref=f2e239]: Total source words across all items currently in the bundle.
                  - button "Help for Word count threshold" [ref=f2e240]: "?"
                  - note [ref=f2e241]:
                    - heading "What this does" [level=4] [ref=f2e242]
                    - paragraph [ref=f2e243]: When the total word count of items waiting in the bundle reaches this value, the bundle is submitted to Lionbridge automatically.
                    - paragraph [ref=f2e244]: To disable this trigger, enter 0. If the field is left blank, the default of 5,000 words applies.
                  - note [ref=f2e245]:
                    - heading "Example" [level=4] [ref=f2e246]
                    - paragraph [ref=f2e247]: "With a threshold of 5,000: three articles arrive totalling 4,800 words — the bundle waits. A fourth article adds 300 words, bringing the total to 5,100. The bundle is submitted immediately."
                  - generic [ref=f2e248]:
                    - generic [ref=f2e249] [cursor=pointer]: Item count threshold
                    - spinbutton "Item count threshold" [ref=f2e250]: "10"
                    - text: items
                    - generic [ref=f2e251]: Number of pending items (translatable nodes) in the bundle.
                  - button "Help for Item count threshold" [ref=f2e252]: "?"
                  - note [ref=f2e253]:
                    - heading "What this does" [level=4] [ref=f2e254]
                    - paragraph [ref=f2e255]: When the number of pending items in the bundle reaches this value, the bundle is submitted to Lionbridge automatically.
                    - paragraph [ref=f2e256]: To disable this trigger, enter 0. If the field is left blank, the default of 10 items applies.
                  - generic [ref=f2e257]:
                    - generic [ref=f2e258] [cursor=pointer]: Maximum wait time (oldest item)
                    - textbox "Maximum wait time (oldest item)" [ref=f2e259]:
                      - /placeholder: HH:MM:SS
                      - text: 24:00:00
                    - generic [ref=f2e260]: SLA guarantee — the oldest pending item never waits longer than this.
                  - button "Help for Maximum wait time" [ref=f2e261]: "?"
                  - note [ref=f2e262]:
                    - heading "What this does" [level=4] [ref=f2e263]
                    - paragraph [ref=f2e264]: When the oldest item waiting in the bundle has been queued for longer than this duration, the entire bundle is submitted to Lionbridge automatically. The timer tracks the oldest item's age — not the newest — so no item is ever held beyond the configured limit.
                    - paragraph [ref=f2e265]: To disable this trigger, enter 00:00:00.
                  - note [ref=f2e266]:
                    - heading "Example" [level=4] [ref=f2e267]
                    - paragraph [ref=f2e268]: "With a limit of 24:00:00: a single article is queued at 09:00 on Monday. No other trigger fires during the day. At 09:00 on Tuesday — exactly 24 hours later — the bundle is force-submitted even though it contains only that one article."
              - group [ref=f2e269]:
                - button "Limits & safety caps" [ref=f2e270] [cursor=pointer]
                - generic [ref=f2e271]:
                  - generic [ref=f2e272]:
                    - generic [ref=f2e273] [cursor=pointer]: Maximum items per bundle
                    - spinbutton "Maximum items per bundle" [ref=f2e274]: "50"
                    - text: items
                    - generic [ref=f2e275]: Hard upper limit — once a bundle reaches this many items it is force-submitted, regardless of other trigger settings.
                  - button "Help for Maximum items per bundle" [ref=f2e276]: "?"
                  - note [ref=f2e277]:
                    - heading "What this does" [level=4] [ref=f2e278]
                    - paragraph [ref=f2e279]: When a bundle accumulates this many items it is force-submitted to Lionbridge immediately, even if none of the trigger thresholds (item count, word count, maximum wait time) have fired. This prevents runaway bundles from growing beyond what is operationally manageable for reviewers and Lionbridge.
                    - paragraph [ref=f2e280]: Unlike the trigger thresholds, this cap cannot be disabled. If you do not want it to activate in practice, set it to a very high value.
                  - generic [ref=f2e281]:
                    - generic [ref=f2e282] [cursor=pointer]: Maximum words per bundle
                    - spinbutton "Maximum words per bundle" [ref=f2e283]: "50000"
                    - text: words
                    - generic [ref=f2e284]: Hard upper limit — once a bundle reaches this many source words it is force-submitted, regardless of other trigger settings.
                  - button "Help for Maximum words per bundle" [ref=f2e285]: "?"
                  - note [ref=f2e286]:
                    - heading "What this does" [level=4] [ref=f2e287]
                    - paragraph [ref=f2e288]: When a bundle accumulates this many source words it is force-submitted to Lionbridge immediately, even if none of the trigger thresholds (item count, word count, maximum wait time) have fired. This prevents bundles from exceeding Lionbridge's file-size or word-count limits per CAPI job.
                    - paragraph [ref=f2e289]: Unlike the trigger thresholds, this cap cannot be disabled. If you do not want it to activate in practice, set it to a very high value.
                  - generic [ref=f2e290]:
                    - generic [ref=f2e291] [cursor=pointer]: Minimum items required to flush
                    - spinbutton "Minimum items required to flush" [ref=f2e292]: "1"
                    - text: items
                    - generic [ref=f2e293]: Triggers are suppressed until the bundle contains at least this many items. Set to 1 (default) to allow flushing as soon as any trigger fires.
                  - button "Help for Minimum items required to flush" [ref=f2e294]: "?"
                  - note [ref=f2e295]:
                    - heading "What this does" [level=4] [ref=f2e296]
                    - paragraph [ref=f2e297]: When a bundle contains fewer items than this value, all flush triggers are suppressed — even if the item-count, word-count, or wait-time thresholds have been reached. Once the bundle reaches the floor, triggers resume normal evaluation and the bundle can be flushed as usual.
                  - generic [ref=f2e298]:
                    - checkbox "Override min-items when wait-time fires" [checked] [ref=f2e299]
                    - text: Override min-items when wait-time fires
                    - generic [ref=f2e300]: When checked, the wait-time trigger can flush the bundle even if it has not yet reached the minimum-items floor.
                  - button "Help for Override min-items when wait-time fires" [ref=f2e301]: "?"
                  - note [ref=f2e302]:
                    - heading "What this does" [level=4] [ref=f2e303]
                    - paragraph [ref=f2e304]:
                      - strong [ref=f2e305]: "Checked (recommended):"
                      - text: When the maximum wait time fires, the bundle is submitted to Lionbridge even if it contains fewer items than the minimum-items floor. This prevents slow-day bundles from waiting indefinitely.
                    - paragraph [ref=f2e306]:
                      - strong [ref=f2e307]: "Unchecked:"
                      - text: The minimum-items floor is enforced even when the maximum wait time fires. If the bundle never accumulates enough items, it will not be flushed automatically — it will wait until the item count is met.
              - group [ref=f2e308]:
                - button "Submission behavior" [ref=f2e309] [cursor=pointer]
                - generic [ref=f2e310]:
                  - generic [ref=f2e311]:
                    - generic [ref=f2e312] [cursor=pointer]: Submission mode
                    - combobox "Submission mode" [ref=f2e313]:
                      - option "Immediate (check after every published item)" [selected]
                      - option "Cron-only (check on every Drupal cron run)"
                    - generic [ref=f2e314]: Choose whether the auto-bundle evaluator runs after every published item (fastest turnaround) or only on a fixed cron schedule (most predictable).
                  - button "Immediate is recommended for sites that want fastest turnaround. Cron-only is useful when you want exactly one or two batches per day at known times." [ref=f2e315]: "?"
                  - note [ref=f2e316]:
                    - heading "What this does" [level=4] [ref=f2e317]
                    - paragraph [ref=f2e318]:
                      - strong [ref=f2e319]: "Immediate:"
                      - text: after each published continuous item the auto-bundle triggers are re-evaluated and the bundle is submitted as soon as any threshold is met. Recommended for most sites.
                    - paragraph [ref=f2e320]:
                      - strong [ref=f2e321]: "Cron-only:"
                      - text: triggers are only re-evaluated when Drupal cron runs. Configure cron frequency at
                      - emphasis [ref=f2e322]: admin/config/system/cron
                      - text: . The bundle waits until the next cron run before being submitted.
                  - generic [ref=f2e323]:
                    - generic [ref=f2e324] [cursor=pointer]: Maximum concurrent submissions
                    - spinbutton "Maximum concurrent submissions" [ref=f2e325]: "100"
                    - generic [ref=f2e326]: Maximum number of bundles from this translator that may be in flight to Lionbridge at the same time. Must be greater than 0.
                  - button "The default of 100 works for most sites. Lower it to throttle parallel submissions or raise it if your Lionbridge contract permits higher concurrency." [ref=f2e327]: "?"
                  - note [ref=f2e328]:
                    - heading "What this does" [level=4] [ref=f2e329]
                    - paragraph [ref=f2e330]: Defaults to 100, meaning up to 100 bundles may be in flight to Lionbridge at once. If a 101st bundle becomes ready while 100 are still in flight, it waits.
                    - paragraph [ref=f2e331]: Adjust this value based on your Lionbridge contract and confirmed provider rate limits. Any positive integer is accepted.
          - generic [ref=f2e332]:
            - button "Save configuration" [ref=f2e333] [cursor=pointer]
            - button "Validate settings" [ref=f2e334] [cursor=pointer]
            - button "Reset to defaults" [ref=f2e335] [cursor=pointer]
            - button "Disable Auto-Bundle" [ref=f2e336] [cursor=pointer]
        - complementary "Auto-Bundle status panel" [ref=f2e338]:
          - generic [ref=f2e339]:
            - heading "Bundle status" [level=2] [ref=f2e340]
            - button "Refresh all cards" [ref=f2e341] [cursor=pointer]:
              - text: ↻
              - generic [ref=f2e342]: Refresh
          - generic [ref=f2e343]:
            - generic [ref=f2e344]:
              - button "Live Preview Nothing queued" [expanded] [ref=f2e345] [cursor=pointer]:
                - generic [aria-hidden] [ref=f2e346]: ▾
                - heading "Live Preview" [level=3] [ref=f2e347]
                - generic [ref=f2e348]: Nothing queued
              - paragraph [ref=f2e350]: No items waiting. New content will appear here as it is published.
            - generic [ref=f2e351]:
              - button "Due Next Nothing scheduled" [expanded] [ref=f2e352] [cursor=pointer]:
                - generic [aria-hidden] [ref=f2e353]: ▾
                - heading "Due Next" [level=3] [ref=f2e354]
                - generic [ref=f2e355]: Nothing scheduled
              - paragraph [ref=f2e357]: No bundles waiting. Items will appear here as content is published.
            - generic [ref=f2e358]:
              - 'button "Recent Submissions Last: 9 minutes ago" [expanded] [ref=f2e359] [cursor=pointer]':
                - generic [aria-hidden] [ref=f2e360]: ▾
                - heading "Recent Submissions" [level=3] [ref=f2e361]
                - generic [ref=f2e362]: "Last: 9 minutes ago"
              - list [ref=f2e364]:
                - listitem [ref=f2e365]:
                  - generic [ref=f2e366]: 9 minutes ago
                  - 'link "Auto-bundle: en → ru · Article · 1 items [2026-09-21 11:58]" [ref=f2e368] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/36
                  - generic [ref=f2e369]:
                    - generic [ref=f2e370]: 1 items
                    - generic [ref=f2e371]: Unprocessed
                - listitem [ref=f2e372]:
                  - generic [ref=f2e373]: 4 days ago
                  - 'link "Auto-bundle: en → ru · 1 items [2026-09-17 10:09]" [ref=f2e375] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/35
                  - generic [ref=f2e376]:
                    - generic [ref=f2e377]: 1 items
                    - generic [ref=f2e378]: Active
                - listitem [ref=f2e379]:
                  - generic [ref=f2e380]: 4 days ago
                  - 'link "Auto-bundle: en → ru · 1 items [2026-09-17 06:57]" [ref=f2e382] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/34
                  - generic [ref=f2e383]:
                    - generic [ref=f2e384]: 1 items
                    - generic [ref=f2e385]: Active
                - listitem [ref=f2e386]:
                  - generic [ref=f2e387]: 2026-09-08 05:42
                  - 'link "Auto-bundle: High Priority · en → ru · Article · 2 items [2026-09-07 07:23]" [ref=f2e389] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/27
                  - generic [ref=f2e390]:
                    - generic [ref=f2e391]: 2 items
                    - generic [ref=f2e392]: Active
                - listitem [ref=f2e393]:
                  - generic [ref=f2e394]: 2026-09-03 06:12
                  - 'link "Auto-bundle: Normal priority · en → ru · Basic page · 3 items [2026-09-03 06:12]" [ref=f2e396] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/26
                  - generic [ref=f2e397]:
                    - generic [ref=f2e398]: 3 items
                    - generic [ref=f2e399]: Active
                - listitem [ref=f2e400]:
                  - generic [ref=f2e401]: 2026-09-03 06:11
                  - 'link "Auto-bundle: Medium Priority · en → ru · Article · 2 items [2026-09-03 06:04]" [ref=f2e403] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/25
                  - generic [ref=f2e404]:
                    - generic [ref=f2e405]: 2 items
                    - generic [ref=f2e406]: Active
                - listitem [ref=f2e407]:
                  - generic [ref=f2e408]: 2026-09-03 05:40
                  - 'link "Auto-bundle: Low Low Priority · en → ru · Article · 2 items [2026-09-03 05:39]" [ref=f2e410] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/24
                  - generic [ref=f2e411]:
                    - generic [ref=f2e412]: 2 items
                    - generic [ref=f2e413]: Active
                - listitem [ref=f2e414]:
                  - generic [ref=f2e415]: 2026-09-02 13:53
                  - 'link "Auto-bundle: High High Priority · en → ru · Article · 2 items [2026-09-02 13:53]" [ref=f2e417] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/23
                  - generic [ref=f2e418]:
                    - generic [ref=f2e419]: 2 items
                    - generic [ref=f2e420]: Active
                - listitem [ref=f2e421]:
                  - generic [ref=f2e422]: 2026-09-02 13:53
                  - 'link "Auto-bundle: High High Priority · en → ru · Article · 2 items [2026-09-02 13:35]" [ref=f2e424] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/22
                  - generic [ref=f2e425]:
                    - generic [ref=f2e426]: 2 items
                    - generic [ref=f2e427]: Active
                - listitem [ref=f2e428]:
                  - generic [ref=f2e429]: 2026-09-02 13:04
                  - 'link "Auto-bundle: High High Priority priority · English → Russian · Article · 2 items [2026-09-02 13:00]" [ref=f2e431] [cursor=pointer]':
                    - /url: /admin/tmgmt/jobs/21
                  - generic [ref=f2e432]:
                    - generic [ref=f2e433]: 2 items
                    - generic [ref=f2e434]: Active
  - generic [ref=f2e435]:
    - text: Tray "Administration menu" opened. There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the
    - link "available updates" [ref=f2e436] [cursor=pointer]:
      - /url: /admin/reports/updates/update
    - text: page for more information and to update your software.
```

# Test source

```ts
  1   | // @ts-check
  2   | /**
  3   |  * Playwright spec that logs into a local/DDEV Drupal site, walks every
  4   |  * documented Auto-Bundle screen, and saves labelled PNGs into
  5   |  *   ../static/img/auto/
  6   |  *
  7   |  * Region screenshots use `element.screenshot()` so each PNG contains only
  8   |  * the relevant fieldset — the annotation step then overlays numbered
  9   |  * callouts on the tight crop.
  10  |  *
  11  |  * Fixture assumptions:
  12  |  *   - A TMGMT translator with plugin `content_api_connector` exists with
  13  |  *     id = TMGMT_TRANSLATOR_ID (see .env.example).
  14  |  *   - At least one continuous job exists (for the status panel to render
  15  |  *     with content). The spec tolerates an empty state and shots it too.
  16  |  */
  17  | 
  18  | import { test, expect, Page } from '@playwright/test';
  19  | import * as path from 'node:path';
  20  | 
  21  | const OUT_DIR = path.resolve(__dirname, '..', 'static', 'img', 'auto');
  22  | const TRANSLATOR_ID = process.env.TMGMT_TRANSLATOR_ID || 'lionbridge_content_api';
  23  | const USER = process.env.DRUPAL_USER || 'admin-docs';
  24  | const PASS = process.env.DRUPAL_PASS || '';
  25  | 
  26  | async function login(page: Page) {
  27  |   await page.goto('/user/login');
  28  |   await page.getByLabel('Username').fill(USER);
  29  |   await page.getByLabel('Password').fill(PASS);
  30  |   await page.getByRole('button', { name: /Log in/i }).click();
  31  |   await expect(page).not.toHaveURL(/\/user\/login/);
  32  | }
  33  | 
  34  | async function shootRegion(page: Page, selector: string, filename: string) {
  35  |   const el = page.locator(selector).first();
> 36  |   await el.scrollIntoViewIfNeeded();
      |            ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 60000ms exceeded.
  37  |   await el.screenshot({ path: path.join(OUT_DIR, filename), animations: 'disabled' });
  38  | }
  39  | 
  40  | // Force every <details> on the page open. The Auto-Bundle form has three
  41  | // collapsible sections that hide their contents when closed; we need them
  42  | // open so region screenshots capture real content.
  43  | async function openAllDetails(page: Page) {
  44  |   await page.evaluate(() => {
  45  |     document.querySelectorAll<HTMLDetailsElement>('details').forEach(d => {
  46  |       d.open = true;
  47  |     });
  48  |   });
  49  | }
  50  | 
  51  | test.describe('Auto-Bundle admin tab screenshots', () => {
  52  |   test.beforeEach(async ({ page }) => {
  53  |     await login(page);
  54  |     await page.goto(`/admin/tmgmt/translators/manage/${TRANSLATOR_ID}/auto-bundle`);
  55  |     // Ensure the checkbox is in the DOM (route resolved) before forcing
  56  |     // details open. Attached, not visible — the outer <details> may be closed.
  57  |     await expect(page.locator('input[name="auto_bundle[auto_bundle_enabled]"]'))
  58  |       .toHaveCount(1, { timeout: 15_000 });
  59  |     await openAllDetails(page);
  60  |   });
  61  | 
  62  |   test('01 · master switch & summary strips', async ({ page }) => {
  63  |     await shootRegion(page, '.tmgmt-contentapi-master-switch, details[id*="edit-auto-bundle"]',
  64  |       'auto-bundle-tab-master-switch.png');
  65  |   });
  66  | 
  67  |   test('02 · always-on grouping dimensions', async ({ page }) => {
  68  |     await shootRegion(page,
  69  |       'details[id*="grouping-dimensions"]',
  70  |       'auto-bundle-tab-always-on.png');
  71  |   });
  72  | 
  73  |   test('03 · group by content type', async ({ page }) => {
  74  |     await shootRegion(page,
  75  |       'input[name="auto_bundle[group_by_content_type]"]',
  76  |       'auto-bundle-tab-group-by-content-type.png');
  77  |   });
  78  | 
  79  |   test('04 · group by priority (picker or warning)', async ({ page }) => {
  80  |     await shootRegion(page,
  81  |       '.tmgmt-contentapi-priority-settings',
  82  |       'auto-bundle-tab-priority.png');
  83  |   });
  84  | 
  85  |   test('05 · trigger thresholds', async ({ page }) => {
  86  |     await shootRegion(page,
  87  |       'details[id*="edit-auto-bundle-triggers"]',
  88  |       'auto-bundle-tab-triggers.png');
  89  |   });
  90  | 
  91  |   test('06 · limits and safety caps', async ({ page }) => {
  92  |     // Caps section defaults to collapsed — expand before shooting.
  93  |     const caps = page.locator('details[id*="edit-auto-bundle-limits"]');
  94  |     await caps.evaluate((el: HTMLDetailsElement) => (el.open = true));
  95  |     await shootRegion(page, 'details[id*="edit-auto-bundle-limits"]',
  96  |       'auto-bundle-tab-caps.png');
  97  |   });
  98  | 
  99  |   test('07 · workflow gate', async ({ page }) => {
  100 |     await shootRegion(page,
  101 |       'details[id*="edit-workflow-gate"]',
  102 |       'auto-bundle-tab-workflow-gate.png');
  103 |   });
  104 | 
  105 |   test('08 · status panel', async ({ page }) => {
  106 |     await shootRegion(page,
  107 |       '.tmgmt-contentapi-status-panel, [id*="auto-bundle-status"]',
  108 |       'auto-bundle-tab-status-panel.png');
  109 |   });
  110 | });
  111 | 
  112 | test.describe('Adjacent screens', () => {
  113 |   test.beforeEach(async ({ page }) => login(page));
  114 | 
  115 |   test('provider settings (credentials)', async ({ page }) => {
  116 |     await page.goto(`/admin/tmgmt/translators/manage/${TRANSLATOR_ID}`);
  117 |     await page.locator('form.tmgmt-translator-form').screenshot({
  118 |       path: path.join(OUT_DIR, 'install-credentials.png'),
  119 |       animations: 'disabled',
  120 |     });
  121 |   });
  122 | 
  123 |   test('jobs overview', async ({ page }) => {
  124 |     await page.goto('/admin/tmgmt/jobs');
  125 |     await page.screenshot({
  126 |       path: path.join(OUT_DIR, 'jobs-overview.png'),
  127 |       fullPage: false,
  128 |       animations: 'disabled',
  129 |     });
  130 |   });
  131 | });
  132 | 
```