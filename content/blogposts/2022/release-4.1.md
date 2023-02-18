---
title: "Sourcegraph 4.1 release"
publishDate: 2022-10-21T10:00-07:00
description: "Sourcegraph 4.1 introduces new features for server-side Batch Changes and improvements to the code navigation reference panel."
tags: [blog, release]
slug: "release/4.1"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.1/sourcegraph-4-1-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.1/sourcegraph-4-1-hero.png
changelogItems:
  - description: Added repository sync counters to the code host details page to give visibility into external service sync progress.
    url: https://github.com/sourcegraph/sourcegraph/pull/43039
    category: Repositories
  - description: "Added a new button in the repository settings, under \"Mirroring,\" to delete a repository from disk and reclone it. This prevents the need to manually delete failed repositories from the Git server."
    url: https://github.com/sourcegraph/sourcegraph/pull/42177
    category: Repositories
  - description: "GraphQL request logs are now compliant with the audit logging format. The old GraphQl logging based on `LOG_ALL_GRAPHQL_REQUESTS` env var is now deprecated and scheduled for removal."
    url: https://github.com/sourcegraph/sourcegraph/pull/42550
    category: Admin
  - description: "Git server access logs are now compliant with the audit logging format. This introduces a breaking change: The 'actor' field is now nested under the 'audit' field."
    url: https://github.com/sourcegraph/sourcegraph/pull/41865
    category: Admin
  - description: Security events are now included in the audit log by default to provide more visibility to security teams.
    url: https://github.com/sourcegraph/sourcegraph/pull/42653
    category: Admin
  - description: "Security events in the audit log can now optionally exclude internal actor traffic to reduce noise. This traffic is excluded by default, but can be enabled with the `log.auditLog.backgroundJobs` setting."
    url: https://github.com/sourcegraph/sourcegraph/pull/42946
    category: Admin
  - description: Fixed a bug with the GitHub integration that caused archived repositories to be incorrectly returned when using the "public" repositoryQuery keyword.
    url: https://github.com/sourcegraph/sourcegraph/pull/41461
    category: Admin
---

<Alert>
  <strong>Update as of October 28:</strong> Patch 4.1.1 has been released, which fixes the issue below. We recommend upgrading to 4.1.1 or the latest version available.
</Alert>

<Alert>
  <strong>Update as of October 26:</strong> We have identified a bug in Sourcegraph 4.1 that can cause upgrades from earlier versions to fail. We are working to fix this in an upcoming patch. For now, we recommend running Sourcegraph 4.0.
</Alert>

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />

#### Server-side Batch Changes now supports file mounts and organization namespaces

We're iterating on [server-side Batch Changes](https://about.sourcegraph.com/blog/release/4.0#high-leverage-ways-to-improve-your-entire-codebase) as we prepare to move it from beta to GA. In 4.1, we're adding the last features to bring server-side Batch Changes up to feature parity with changes that are run locally.
- When running server-side Batch Changes, you can now mount files on batch change steps containers using `steps.mount`. This is useful when your batch change needs to run long scripts or binaries that change frequently because file mounts allow you to iterate on those scripts and binaries without needing to bake them into the container and rebuild the container every time they change. You can read more about this feature in the [3.41 release post](https://about.sourcegraph.com/blog/release/3.41).
- Previously, server-side batch changes could only be edited or deleted by the users that created them (or site admins). Now, users can create server-side batch changes in an organization namespace, which allows any user within that organization to edit or delete the batch change, making it easier to work collaboratively on batch changes with other devs.

<a href="https://docs.sourcegraph.com/batch_changes/how-tos/server_side_file_mounts" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Reference panel improvements

In 4.0, we launched a new version of the reference panel. In 4.1, we've added further enhancements to the panel to improve your code navigation experience. Here's what's new:
- Reference and definition results now have syntax highlighting for better readability.
- Behavior when using your browser's back and forward buttons has been improved. Previously, it was easy to lose track of your context while drilling into definitions and references through the reference panel. Now, every browser URL is mapped with a single URL (the focused line in the preview pane), allowing the reference panel to update accordingly when you click on the browser's back or forward buttons.
- Clicking on any line in the preview panel now promotes the file to the main file view.

<Video 
  source={{
    webm: 'blog/release-post/4.1/ref-panel-improvements',
    mp4: 'blog/release-post/4.1/ref-panel-improvements'
  }}
  loop={true}
  title="The reference panel featuring syntax highlighting and improved functionality."
/>
<br />
<a href="https://docs.sourcegraph.com/code_navigation/explanations/features#find-references" className="not-italic flex items-center mb-sm">Docs<OpenInNewIcon className="ml-xxs" size={18} /></a>

<br />
Sourcegraph 4.1 is now available to download. For Sourcegraph Cloud users, instances will be upgraded to 4.1 beginning October 24.
