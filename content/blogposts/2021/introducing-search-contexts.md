---
title: 'Introducing search contexts'
description: "Version contexts and repogroups are a powerful way to search across multiple repositories. To expand this functionality, we're releasing search contexts in Sourcegraph 3.33."
authors:
  - name: Rok Novosel
  - name: Ben Venker
publishDate: 2021-10-22T10:00-07:00
tags: [blog]
slug: introducing-search-contexts
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/introducing-search-contexts/search-context-example.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/introducing-search-contexts/search-context-example.png
published: true
---

One of Sourcegraph's most powerful capabilities is being able to search across multiple repositories. Our customers can have tens of thousands of repositories, and before Sourcegraph, searching across them all was painful or impossible.

Although cross-repo search is powerful on its own, when you have hundreds or thousands of repos across dozens of teams, it's not enough. We created version contexts to address some of those limitations. Version contexts enables site admins to create groups of repositories and revisions to search through, which simplifies their code search landscape. For example, enterprise users created bundles of repositories and revisions that were included in a particular release, enabling quicker bug trackdown in specific versions.

With the release of Sourcegraph 3.33, we're officially launching [search contexts](https://docs.sourcegraph.com/code_search/how-to/search_contexts), which maintain those functionalities but make them available to all users–not just site admins–in a convenient management UI.

## Why search contexts, and deprecation of version contexts and repogroups

Version contexts have always been an experimental feature. With the launch of search contexts in GA in version 3.33, we're officially deprecating version contexts and repogroups. In our next release, version 3.34, they will be removed completely.

Over time, we saw a ton of value in the way that large organizations were using version contexts and repogroups. For example, admins used them to segment large codebases by teams and focus areas, allowing users to search only the code they needed–making code search faster.

Additionally, we created repogroups to allow organizations such as [Stanford](https://sourcegraph.com/stanford) and the [Kubernetes](https://sourcegraph.com/kubernetes) project to highlight repositories of interest.

The one big drawback was that individual users wanted to be able to scope their version contexts on their own, and limiting version contexts to admins created a bottleneck. We decided to take the features, upgrade them, and make them broadly available for all Sourcegraph users and configurable with a friendly UI.

## What changes for you

With the launch of search contexts, all users (not just admins) can create and view their own search contexts as well as use public contexts created by admins, their organization, or other users.<a href="#footnote-1"><sup>1</sup></a> Why is this useful? For teams, creating search contexts makes it easier to focus your searches on repos you care about. Let's say, for example, that you work on internal tools and have a set of repositories you primarily work in. By creating a search context with those repos, you can have your searches scoped to the repos relevant to your work, ensuring the most relevant search results.

If you're a team lead or manager, you can create contexts and share them with the team. For companies with a large collection of repositories, this can simplify the search experience and speed up developer workflows.

If you're an individual developer, you can create contexts out of sets of repositories you use often.

You can access search contexts in two ways. First, after you create a context, it will be available in the context dropdown on the left side of the search bar. Second, you can use the `context:` filter anywhere search queries are used to utilize any context available to you.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/introducing-search-contexts/search-context-dropdown.png"
  alt="Using the context dropdown in the search bar"
  caption="Using the context dropdown in the search bar"
/>

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/introducing-search-contexts/manual-search-context.png"
  alt="Using the context filter"
  caption="Using the `context:` filter"
/>

## Performing the migration to search contexts

To help you migrate from version contexts to search contexts, we've created an automatic migration that allows you to selectively migrate your version contexts [with the click of a button](https://docs.sourcegraph.com/admin/how-to/converting-version-contexts-to-search-contexts).

To migrate from repogroups to search contexts, you can follow the migration steps in [repogroups to search contexts migration guide](https://docs.sourcegraph.com/code_search/how-to/convert_repository_groups_to_search_contexts).

Version contexts and repogroups will be removed in Sourcegraph 3.34, to be released on October 20, 2021, so we recommend migrating to search contexts before then. You will still be able to manually migrate version contexts and repogroups to search contexts after that point, but the automatic conversion page will not be available.

You will not lose any data stored in the configuration as a result of the deprecation, so manual migration will still be possible.

## Conclusion

Give search contexts a try and we think you'll love them. You can learn how to create your own search contexts [here](https://docs.sourcegraph.com/code_search/how-to/search_contexts).

Below are some contexts and ideas to get you started. Remember to take a look at the context filter to see the context you're in.

- [The latest Facebook Android SDK version](https://sourcegraph.com/search?q=context:%40benvenker/fb-android-sdk-v12.0.1+&patternType=literal_)
- [Auth0's .Net Core authentication library at main](https://sourcegraph.com/search?q=context:%40benvenker/auth0/asp.net-core-auth+&patternType=literal)
- [Search only PHP, Kotlin, and Python repos](https://sourcegraph.com/search?q=context:%40benvenker/langs+&patternType=literal)
- A search context for your team, division, or business unit

The list goes on! You can add multiple repositories easily to each search context, so get creative.

For questions about or support with upgrading to search contexts, please reach out to your CE or [support@sourcegraph.com](mailto:support@sourcegraph.com). Also note that going forward, search contexts will only be available for enterprise customers; if you are currently using Sourcegraph OSS, you will need to become an enterprise customer to use this feature.

---

<a id="footnote-1"><sup>1</sup><small>Although public contexts created by other users are searchable, they will not show up in the search contexts dropdown. Users will need to use the context filter, like so: `context:other-context`</small></a>

---
