---
title: "Sourcegraph 4.1 release"
publishDate: 2022-10-21T10:00-07:00
description: "Sourcegraph 4.1 introduces new features for server-side batch changes and improvements to the code navigation reference panel."
tags: [blog, release]
slug: "release/4.1"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.1/sourcegraph-4-1.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.1/sourcegraph-4-1.png
changelogItems:
  - description: Added repository sync counters to the code host details page to give visibility into external service sync progress.
    url: https://github.com/sourcegraph/sourcegraph/pull/43039
    category: Repositories
  - description: "Added a new button in the repository settings, under \"Mirroring\", to delete a repository from disk and reclone it. This prevents the need to manually delete failed repositories from the Git server."
    url: https://github.com/sourcegraph/sourcegraph/pull/42177
    category: Repositories
  - description: "GraphQL request logs are now compliant with the audit logging format. The old GraphQl logging based on `LOG_ALL_GRAPHQL_REQUESTS` env var is now deprecated and scheduled for removal."
    url: https://github.com/sourcegraph/sourcegraph/pull/42550
    category: Admin
  - description: "Git server access logs are now compliant with the audit logging format. This introduces a breaking change: The 'actor' field is now nested under the 'audit' field."
    url: https://github.com/sourcegraph/sourcegraph/pull/41865
    category: Admin
  - description: Security events are now included in the audit log by default.
    url: https://github.com/sourcegraph/sourcegraph/pull/42653
    category: Admin
  - description: "Security events (in the audit log) can now optionally omit internal actor traffic to reduce noise."
    url: https://github.com/sourcegraph/sourcegraph/pull/42946
    category: Admin
  - description: Fixed a bug with GitHub code hosts that did not label archived repos correctly when using the "public" repositoryQuery keyword.
    url: https://github.com/sourcegraph/sourcegraph/pull/41461
    category: Admin
---

Sourcegraph 4.1 is now available! For this release, we introduced:

<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />

#### Server-side batch changes now support file mounts and organization namespaces

We're iterating on running batch changes server-side as we prepare it to move from beta to GA. In 4.1, we're  adding the last features to bring server-side batch changes up to feature parity with local runs.
- You can now mount files on batch change steps containers when running server-side. This is useful when your batch change needs to run long scripts or binaries that change frequently: by using file mounts, you can iterate on them without needing to rebuild the container every time. You can read more about this feature in [release post 3.41](https://about.sourcegraph.com/blog/release/3.41) where it was first introduced.
- Server-side batch changes can now be created in an organization namespace, which allows any member of that organization to edit or delete the batch change. Previously server-side runs could only be created in a user namespace.

<a href="https://docs.sourcegraph.com/batch_changes/how-tos/server_side_file_mounts" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Reference panel improvements

In 4.0, we launched a new version of the reference panel. In 4.1, we've added further enhancements to the panel to improve your code navigation experience.
- Reference and definition results now have syntax highlighting.
- Behavior when using your browser's back and forward buttons has been improved. Previously, it was easy to lose track of your context while drilling into definitions and references through the reference panel. Now, every browser URL is mapped with a single URL (the focused line in the preview pane), allowing the reference panel to update accordingly when you click on the browser's back or forward buttons.
- Clicking on any line in the preview panel will now promote the file to the main file view.

<Video 
  source={{
    webm: 'blog/release-post/4.1/ref-panel-improvements',
    mp4: 'blog/release-post/4.1/ref-panel-improvements'
  }}
  loop={true}
  title="The reference panel featuring syntax highlighting and improved functionality."
/>
<br />
<a href="https://docs.sourcegraph.com/code_navigation/explanations/features#find-references" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>