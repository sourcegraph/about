---
title: 'Sourcegraph 3.65 release'
publishDate: 2022-01-21T10:00-07:00
description: 'Sourcegraph 3.36 introduces...'
tags: [blog, release]
slug: 'release/3.36'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.36/sourcegraph-3-36-release.png
changelogItems:
---

Sourcegraph 3.36 is now available! Here are some highlights from this release:

## Batch Changes on forks

Before this release, creating a batch change required you (or your service-account) to have write-access to every target repository. This was incompatible with having tight repository access control, and was impractical at a large scale; you want all users to be able to create batch changes on all repositories, but also not grant them overly broad write permissions.

That's why we are introducing [batch changes on forks](https://docs.sourcegraph.com/admin/config/batch_changes), which makes it possible for branches created by Batch Changes to be pushed to a fork of the repository instead of a branch. This solves those access control challenges and lets you safely enable Batch Changes for everyone. In this version, this is an instance setting that is either on for all users, or off (default).

## Find repo files faster with fuzzy finder

We're excited to introduce a new fuzzy file finder which can help you quickly open a file from your repository. The keyboard shortcut to activate it is Cmd+K on macOS, or Ctrl+K on Linux/Windows. Note that it will not activate in non-repository related pages, such as search results for example.

<img class="blog-image" title="Fuzzy finder" alt="An example of using fuzzy finder to navigate to test files within the sourcegraph/sourcegraph repo." src="https://storage.googleapis.com/sourcegraph-assets/blog/3.36/fuzzyfinder.gif">

## Notebooks in beta

We're excited to announce that Notebooks have moved out of Experimental and into Beta! Notebooks are a great way to document code and codebases to onboard new team members or contributors, or keep track of bug resolutions, and more. Recently, we made a [Notebook](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MQ==) to identify log4j dependencies!

To try them out, make sure Notebooks are enabled in your settings by setting showSearchNotebook to true under the experimentalFeatures property in your settings.

Once you have Notebooks enabled, go ahead and [explore](https://sourcegraph.com/notebooks?tab=explore) some public notebooks!

## Query-based search contexts in beta

Search contexts can now be defined with a restricted search query as an alternative to a specific list of repositories and revisions.
What does this mean for users? First, this provides search context support for monorepos. Second, and just as impactful, users with thousands of repositories and different teams or sub-organizations can easily define dynamic search contexts with a query. No more specifying dozens or hundreds (or more!) repositories and keeping the list up to date.

You can also now create new search contexts right from the search results page. Once you've enabled query-based search contexts, you'll see a Create context button above the search results.

Check the [docs](https://docs.sourcegraph.com/code_search/how-to/search_contexts#beta-query-based-search-contexts) to learn more about how to enable and use query-based search contexts.
