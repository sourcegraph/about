---
title: 'Sourcegraph 3.41 release'
publishDate: TODO
description: TODO
tags: [blog, release]
slug: 'release/3.41'
published: false
heroImage: TODO
socialImage: TODO
changelogItems: TODO
---

<!-- <div className="alert alert-primary" role="alert" style={{maxWidth:'650px', alignItems:'center', margin: 'auto auto 20px auto'}}>
      <strong>Update as of May 31:</strong> Patch 3.40.1 has been released, which fixes the issue below. We recommend GitLab users upgrade to this patch. In the unlikely event you still see GitLab repositories missing, you can log out of Sourcegraph via GitLab and then log back in to refresh your OAuth token.
      <br/>
      <strong>May 24:</strong> GitLab 15.0 no longer supports OAuth tokens that don’t expire, which can cause authorization between Sourcegraph and GitLab to fail. We are working to fix compatibility with GitLab 15.0 (and support expiring OAuth tokens) in an upcoming patch.
</div>
 -->
 
Sourcegraph 3.41 is now available! Here are some highlights from this release:


## Batch Changes

### Running batch changes server-side is moving to Beta

Until now, you had to run `src-cli` locally to create your batch changes. `src-cli` pulls repo archives through Sourcegraph, and runs your batch spec to create diffs. For large amounts of repositories or resource-intensive code rewrites, running `src-cli` locally could take an impractical amount of time or be brittle.

Today, we're announcing that you can now run [batch changes server-side (beta)](https://docs.sourcegraph.com/batch_changes/explanations/server_side). This feature requires to setup [executors](https://docs.sourcegraph.com/admin/executors) (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run Code Intelligence [auto-indexing](https://docs.sourcegraph.com/code_intelligence/how-to/enable_auto_indexing) (experimental).

Setting up running batch changes server-side allows to:
- Run large-scale or resource intensive batch changes without clogging your local machine.
- Run large batch changes faster by distributing them across a pool of executors.
- Get a better debugging experience, with logs being streamed directly into Sourcegraph.
- Trade-off a little more setup for the Spurcegraph admin, against a lot less setup for users (no local `src-cli`)

This is the outcome of months of iteration on the experimental version of the feature, and we're grateful to early users for their feedback!

<!-- TODO: asset welcome right after deployment on demo -->


## Sourcegraph Extensions

### Allow only extensions authored by Sourcegraph

You can now restrict users to only use Sourcegraph-authored extensions by setting [`extensions.allowOnlySourcegraphAuthoredExtensions`](../config/site_config.md) to `true` in your site configuration. This allows you to easily enforce that any extensions you are using are built and supported by Sourcegraph.

For more information about this feature please refer to the [documentation](https://docs.sourcegraph.com/admin/extensions#allow-only-extensions-authored-by-sourcegraph)
