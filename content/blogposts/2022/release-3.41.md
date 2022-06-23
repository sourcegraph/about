---
title: 'Sourcegraph 3.41 release'
publishDate: 2022-06-21T10:00-07:00
description: 'Sourcegraph 3.41 introduces running batch changes server-side, file mounting for the batch change container, greater pattern tracking in Code Insights, and admin settings to restrict extensions to those authored by Sourcegraph.'
tags: [blog, release]
slug: 'release/3.41'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.41/sourcegraph-3-41-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.41/sourcegraph-3-41-release.png
changelogItems: 
  - description: 'Added a new templating variable, batch_change_link, to give more control over where the "Created by Sourcegraph batch change" message appears in the published changeset description. This message would occasionally break CI workflows that parsed the bottom of a message; it can now be moved accordingly.'
    url: https://github.com/sourcegraph/sourcegraph/pull/35319
    category: Batch Changes
  - description: Added `sort` and `limit` filters for capture group insights. This gives Code Insights users more control over which series are displayed.
    url: https://github.com/sourcegraph/sourcegraph/pull/34611
    category: Code Insights
  - description: 'Commit and diff search: The hard limit of 50 repositories has been removed, so you can now run broader searches. Long-running searches will continue running until the timeout is hit.'
    url: https://github.com/sourcegraph/sourcegraph/pull/36486
    category: Search
  - description: 'Zoekt-indexserver has a new debug landing page, /debug, which exposes information about the queue, the list of indexed repositories, and the list of assigned repositories for easier visual debugging. Admins can reach the debug landing page by going to the site admin view and selecting "Instrumentation" > indexed-search-indexer > "Debug".'
    url: https://github.com/sourcegraph/zoekt/pull/346
    category: Admin
---
 
Sourcegraph 3.41 is now available! Here are some highlights from this release:

## Running batch changes server-side is moving to beta

Until now, you had to run `src-cli` locally to create your batch changes. `src-cli` pulls repo archives through Sourcegraph, and runs your batch spec to create diffs. For large amounts of repositories or resource-intensive code rewrites, running `src-cli` locally could take an impractical amount of time or be brittle.

Today, we're announcing that you can now run [batch changes server-side (beta)](https://docs.sourcegraph.com/batch_changes/explanations/server_side). 

Running batch changes server-side allows you to:
- Run large-scale or resource intensive batch changes without clogging your local machine.
- Run large batch changes faster by distributing them across an autoscaled pool of compute instances.
- Get a better debugging experience, with logs being streamed directly into Sourcegraph.
- Simplify setup for local users (no local `src-cli`) by having the Sourcegraph admin manage server-side setup.

This is the outcome of months of iteration on the experimental version of the feature, and we're grateful to early users for their feedback!

This feature requires admins to set up [executors](https://docs.sourcegraph.com/admin/executors) (much like CI agents), which Sourcegraph will use to offload expensive tasks. Executors can also be used to run Code Intelligence [auto-indexing](https://docs.sourcegraph.com/code_intelligence/how-to/enable_auto_indexing) (experimental).

##  Batch specs can now mount local files on steps containers (experimental)

As we improve Batch Changes, we're focused on making it easy to write and debug batch specs. Iteration time needs to be as small as possible, so that users can quickly put together a spec, run it, see results, and quickly improve on it.

Many users have custom tooling or scripts that they run as batch changes steps. The only way to do that until now was to bake those scripts into the step container, or to copy-paste the scripts directly in the spec using [`steps.files`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-files). Both options slow down iterating on batch changes, requiring users either to rebuild the container at each modification, or to copy-paste code inside YAML.

Now you can directly mount files or directories on the batch change container using [`steps.mount`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-mount). This is an experimental feature that's only supported when running batch changes locally. [Lots of improvements are on the way as well](https://github.com/sourcegraph/sourcegraph/issues/14851).

We're committed to making the process of iterating on batch changes as fast as possible. You can submit feedback through your Sourcegraph account manager, or raise an issue [here](https://github.com/sourcegraph/sourcegraph/issues/new?title=Batch%20changes:&body=@batchers%20this%20is%20an%20issue%20for%20you).

## Sort and filter "detect and track patterns" code insights series 

![Code_Insights_sorting](https://storage.googleapis.com/sourcegraph-assets/blog/release-post/3.41/code_insights_sorting.png)

Detect and track patterns charts now allow setting the series sort order and number (up to 20) of series. This means you can set an insight with greater than 20 match patterns to show the 1-20 most or least common series by match count; oldest or newest version by series name; or oldest-added or newest-added versions by date appearing in the codebase. Previously, if there were greater than 20 match patterns, it returned a random set of 20 each session.

## Allow only extensions authored by Sourcegraph

You can now restrict users to only use Sourcegraph-authored extensions by setting [`extensions.allowOnlySourcegraphAuthoredExtensions`](../config/site_config.md) to `true` in your site configuration. This allows you to easily enforce that any extensions you are using are built and supported by Sourcegraph. While we encourage trying out open source extensions from the community, this setting may be valuable for those teams who want to ensure all of their extensions are directly supported by Sourcegraph.

For more information about this feature, please refer to the [documentation](https://docs.sourcegraph.com/admin/extensions#allow-only-extensions-authored-by-sourcegraph).
