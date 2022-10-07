---
title: 'Sourcegraph 3.39 release'
publishDate: 2022-04-21T10:00-07:00
description: 'Sourcegraph 3.39 introduces Notebooks, Code Insights on native PostgreSQL, faster Code Intelligence for Java, and dependencies search for Go.'
tags: [blog, release]
slug: 'release/3.39'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.39/sourcegraph-3-39-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.39/sourcegraph-3-39-release.png
changelogItems:
  - description: 'The repository page has been redesigned and now includes information such as recent commits and Code Intelligence availability. To use this feature, enable the `new-repo-page` feature flag.'
    url: https://github.com/sourcegraph/sourcegraph/pull/33319
    category: Repositories
  - description: 'The Code Insights GraphQL API now accepts search contexts as filters. Using a search context as a filter will extract the `repo` and `-repo` search query fields from the context and apply it, allowing you to scope your insights and only return data relevant to the repositories you care about.'
    url: https://github.com/sourcegraph/sourcegraph/pull/33866
    category: Code Insights
  - description: 'The Code Insights commit indexer can now index commits in smaller batches to ensure it succeeds for repositories with many commits. Set the number of days per batch in the site setting `insights.commit.indexer.windowDuration`. A value of 0 (default) will disable batching.'
    url: https://github.com/sourcegraph/sourcegraph/pull/33666
    category: Code Insights
  - description: 'Code Insights series data is now sorted by semantic version and then alphabetically to make it easier to understand data in order of earliest to latest versions.'
    url: https://github.com/sourcegraph/sourcegraph/pull/33454
    category: Code Insights
  - description: "We've optimized search patterns containing `and` and `not` expressions. These kinds of queries now generally execute 10 times faster than before. Previous cases where no results were returned due to hitting the file limit should now work and return results quickly."
    url: https://github.com/sourcegraph/sourcegraph/pull/33308
    category: Search
  - description: 'Built-in authentication (i.e. username and password) now supports account lockout after consecutive failed sign-in attempts. New config options have been added under `auth.lockout` to customize the threshold for failed attempts and length of lockouts.'
    url: https://github.com/sourcegraph/sourcegraph/pull/33999
    category: Admin
---

Sourcegraph 3.39 is now available! Here are some highlights from this release:

## Onboard developers fast with Notebooks

Built with onboarding in mind, the Notebooks feature allows you to integrate search results and Markdown to enable documentation that is easy to create and doesn't get stale. The feature is inspired by the Jupyter Notebooks project and features four unique block types, an intelligent notepad for creating notebooks on the fly, and deep integration with Code Search, so you can always find the code you need.

<video title="Notebooks overview" alt="An example of using a notebook." loop autoplay muted playsinline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/notebooks/notebooks_overview_release_post.mp4" />
</video>

Web-based notebooks are the easiest way to create and share new documentation with your team, but we also support file-based notebooks via a special `.snb.md` file type. With file-based notebooks, you can transform your existing documentation and augment it with Sourcegraph query blocks. You can also embed notebooks on any web page, enabling easy integration with your own knowledge management systems, so you can meet your developers where they are.

Notebooks are now available for free for all users in Sourcegraph 3.39, and you can also explore some of our [public notebooks on Sourcegraph Cloud](https://sourcegraph.com/notebooks?tab=explore) with no account required.

To learn more, [read the Notebooks docs](https://docs.sourcegraph.com/notebooks).

## Filter Code Insights using search contexts

<Figure 
  alt="Image of a search context being used to filter a code insight" 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/3.39/code_insights_3.39_dynamic_context_filters.png"
/>

[Search contexts](https://docs.sourcegraph.com/code_search/explanations/features#search-contexts) are pre-set repository groups that make it easy to scope your Sourcegraph searches, and you can now apply search contexts to Code Insights as well. Then, by updating your search contexts, your filtered insights will automatically update to reflect the changes as well. Using search contexts is a fast, succinct way to reuse complex repository filters.

In this initial release, you can use the `repo:` or `-repo:` field of [query-based search contexts](https://docs.sourcegraph.com/code_search/how-to/search_contexts#beta-query-based-search-contexts) to filter your insights. We're continuing to explore enabling other capabilities of search contexts to use as filters. To learn more, [read the search context filters docs](https://docs.sourcegraph.com/code_insights/explanations/code_insights_filters#context-query-based-search-context-filters).

## Code Insights no longer requires a Timescale database

Code Insights can now be used with managed database solutions that do not support [Timescale](https://www.timescale.com/), like Amazon RDS. It now uses native PostgreSQL.

This migration has been applied over 3.37 and 3.38, and should be seamless if you are running infrastructure as described by the [official Sourcegraph deployment repositories](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph+select:repo&patternType=literal). If you have a customized deployment, you may need to incorporate some changes into your configuration ([more details and examples here](https://github.com/sourcegraph/sourcegraph/issues/32271#issuecomment-1086328666)).

Any managed database solution that supports the [official Sourcegraph PostgreSQL version requirements](https://docs.sourcegraph.com/admin/postgres#version-requirements) is now suitable for Code Insights. Migration from a self-hosted database is not performed automatically, and will need to be performed by a Sourcegraph admin at your own discretion.

## Local navigation for Java code is now faster and more accurate

We've added tree-sitter to our search-based Code Intelligence, meaning that local navigation for Java is now faster and more precise.

<video title="Java code Intelligence" alt="An example of using Java Code Intelligence within the sourcegraph/sourcegraph repo." loop autoplay muted playsinline>
  <source src="https://user-images.githubusercontent.com/1657213/163855878-4355bcb0-5407-4307-b3f2-4581e1ab2fe2.mp4" />
</video>

## Search your Go dependencies natively in Sourcegraph

Dependencies search, introduced for NPM in Sourcegraph 3.38, allows you to quickly search through your repository dependencies for faster incident and vulnerability resolution. Dependencies search has been expanded to now support Go dependencies as well. You can [read the dependencies search docs here](https://docs.sourcegraph.com/code_search/how-to/dependencies_search) or [try it out yourself on Sourcegraph Cloud](https://sourcegraph.com/search?q=context:global+r:deps%28%5Egithub%5C.com/sourcegraph/sourcegraph%24%403.37%29+r:%5Ego+fmt.Println&patternType=literal).
