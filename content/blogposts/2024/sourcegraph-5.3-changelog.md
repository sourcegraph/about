---
title: "What's new in Sourcegraph 5.3"
publishDate: 2024-02-15T19:00-06:00
authors:
  - name: Kelvin Yap
    url:
tags: [blog]
slug: 'sourcegraph-5.3-changelog'
published: true
description: "Sourcegraph 5.3 includes security-focused features for Cody along with multi-repo context. Code Search also receives a new search results UX."
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/5.3/sourcegraph-5-3.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/5.3/sourcegraph-5-3.png
---

Sourcegraph version 5.3 is now available, including updates to both Cody and Code Search. We're also announcing the availability of Cody Enterprise today, and you can [read the full announcement here](https://sourcegraph.com/blog/cody-is-enterprise-ready).

In 5.3, Cody receives new security-focused features like OSS attribution guardrails and new admin controls. Cody Enterprise is also getting an upgrade to how it finds and retrieves context across multiple repositories in parallel.

For Code Search, we've focused this release on the core search workflow at the center of the product and the interactions that impact all developers who use Code Search daily. The search experience in 5.3 is faster, more efficient, and more refined.

Read on to learn more about what's new.

## Cody

### Multi-repository context

We're revamping the way Cody Enterprise retrieves context from your entire codebase. Cody can now pull context from more than one repository at a time with multi-repo context, extending even to repositories that are not open in a developer's editor or even exist on their local machine.

To do this, we've plugged Cody into the core Sourcegraph search engine, so Cody is now able to search context from all of the repositories indexed on Sourcegraph. Previously, Cody used embeddings of indexed repositories to retrieve context. This new method does not require embeddings, making it both more powerful and far easier to configure.

Developers can now select up to 10 repositories for Cody to draw context from. In practice, this means developers can ask questions about remote repositories and services that are adjacent to the one they're currently working in.

<Video
  source={{
    mp4: 'blog/cody-better-faster-stronger/multi-repo-support'
  }}
  loop={true}
  title="Cody multi-repo support"
/>

As part of this change, embeddings will no longer be required for Cody Enterprise customers. [You can read more about how Cody retrieves codebase context here](http://sourcegraph.com/blog/how-cody-understands-your-codebase).

### OSS attribution guardrails [Beta]

Since the LLMs used by Cody are trained using broad corpuses of data, it's rare but possible for Cody to return code that closely matches public code. OSS attribution guardrails is a new beta feature designed to reduce a team's exposure to introducing copyrighted code into their codebase.

Guardrails works by verifying code suggested by Cody against a large corpus of public code. Cody runs this verification check any time it generates a code snippet of 10 lines or more. This impacts code returned to the user in two ways:

Autocomplete: Any multi-line suggestion of 10 or more lines is verified against the public code corpus before being returned to the user. If there is a positive match against public code, that suggestion is not returned to the user.

Chat and commands: Any time Cody generates a snippet of 10 or more lines of code, it is verified by guardrails. The snippet is still returned to the user, but Cody also includes a note alongside the suggestion indicating whether the guardrails check was passed or failed.

You can see this latter functionality below:

<Video
  source={{
    mp4: 'blog/5.3/guardrails'
  }}
  loop={true}
  title="Cody guardrails example"
/>

Guardrails is now available in beta. To turn guardrails on for your Cody Enterprise account, add `"attribution.enabled": true` to your site configuration.

[Read more](https://sourcegraph.com/docs/cody/clients/enable-cody-enterprise#guardrails) about guardrails in the docs.

### Admin controls

For accounts with Cody Enterprise enabled, Sourcegraph admins can now delegate Cody access with RBAC. This makes it easier to give access to select users and groups of users.

[Read more in the docs](https://sourcegraph.com/docs/cody/clients/enable-cody-enterprise#enable-cody-only-for-some-users).

### Analytics

Teams have direct access to comprehensive analytics of all their Cody usage data across active users, completions, commands, and chats so they can better understand how teams are using AI and the value it's delivering.

![Completions dashboard](https://storage.googleapis.com/sourcegraph-assets/blog/5.3/analytics.png)

### Ignore context [Experimental]

Ignore context is a new way for Sourcegraph admins to exclude specific files from being accessible to Cody as context. They're useful in two ways:

1.  For sensitive information, you can filter it to prevent it from being sent to third-party LLM providers.

2.  For code that is outdated or generally not conforming to best practices, you can filter it to prevent Cody from referencing it and using it as a stylistic direction for new code.

Cody Enterprise admins can filter files by adding file patterns to `.cody/ignore`.

Ignore context is an experimental feature and has limitations. Filters are only respected when used with Cody in VS Code, and it's possible you may find edge cases where filters are not respected. We can't yet guarantee that filtered files won't be used as context in those edge cases so we recommend caution when trying this feature with sensitive information. [Read more](https://sourcegraph.com/docs/cody/capabilities/ignore-context) in the docs.

### StarCoder for Cody Enterprise

In December, we changed Cody Free and Cody Pro to use the open source StarCoder model for autocomplete. Cody previously defaulted to Claude Instant for autocomplete, and early results for StarCoder showed that the model lowered the average latency of autocomplete while also increasing completion acceptance rate for most users.

Today we're ready to bring this model to the enterprise, and Cody Enterprise users can now choose between Claude Instant and StarCoder for autocomplete. We're always searching for the best models to support each of Cody's functions, and to that end, we'll continue bringing new, high-performance models to Cody.

To switch autocompletions for your Cody Enterprise account to StarCoder, add `"completionModel": "fireworks/starcoder"` to your site configuration.

## Code Search

For 5.3, we focused on the core Code Search experience and the actions that developers take every day. We're releasing a number of updates to improve the core search workflow.

### Search results

The search results screen has a new look! This new layout is both simpler and dense, with a new filters panel on the left, as well as a new file preview option.

![New search results UI](https://storage.googleapis.com/sourcegraph-assets/blog/5.3/search%20results%20UI.png)

### Keyword search

We're updating the search syntax to bring it closer to the flexible, "keyword search" style that most users expect from their search bars. Previously a user's query was always interpreted literally. Now we break terms up by whitespace and perform an "AND" between terms. This strikes a better balance of flexibility and precision, allowing us to return relevant results even for ambiguous queries.

![Keyword search](https://storage.googleapis.com/sourcegraph-assets/blog/5.3/keyword%20search.png)

### Search term highlighting

With keyword search enabled, search terms are now highlighted in the search bar in order to make the tokenization of the search term clear to a user.

![Search term highlighting](https://storage.googleapis.com/sourcegraph-assets/blog/5.3/search%20term%20highlighting.png)

### File Preview

File preview allows you to check files with matches from within the search results screen, without having to click through to view each file.

![File preview](https://storage.googleapis.com/sourcegraph-assets/blog/5.3/file%20preview.png)

Note: file preview works only for content and file matches. It doesn't work for other types of matches such as diffs, commits or symbols, or if the file is binary.

### Perform an action

We added text to the action buttons in the file view. The copy link button also has a different behavior, copying either a link to the latest code, or copying a permalink to the file. It will no longer modify the browser's URL.

![Perform an action](https://storage.googleapis.com/sourcegraph-assets/blog/5.3/perform%20an%20action.png)

### Changeset export

For Batch Changes, changesets can bow be exported via the UI in either CSV or JSON format.

![Changeset export](https://storage.googleapis.com/sourcegraph-assets/blog/5.3/changeset%20export.png)

### Commit signing

Admins can now configure Batch Changes to return an error when it creates an unsigned commit. Configuration information can be found [here](https://sourcegraph.com/docs/admin/config/batch_changes#rejecting-unverified-commits).

### Forks

Changesets created in a forked namespace can now be signed via the Commit Signing App configured for Batch Changes.

### Improved search indexing

We made significant improvements to search indexing, reducing the time and memory required to index larger repositories. Specifically, we fixed two [important](https://github.com/sourcegraph/zoekt/pull/686) [bugs](https://github.com/sourcegraph/zoekt/pull/689) that could cause "out of memory" errors and [parallelized symbols parsing](https://github.com/sourcegraph/sourcegraph/issues/58112).

If you previously ran into indexing errors and bumped Sourcegraph indexserver's memory, you can now revisit the configuration and potentially downsize the instance. As a generous rule-of-thumb, an indexserver with 8 threads should not need more than 8GB of memory.

## Get started with Sourcegraph 5.3

Sourcegraph 5.3 is available today. If you have a Sourcegraph Cloud instance, you'll be upgraded to the new version automatically within the coming days. If you're self-hosting a Sourcegraph instance, 5.3 will be available later today for you to upgrade.

If you've been using the Cody beta please reach out and coordinate with your account team, and don't forget to upgrade your IDE extensions to the latest version of Cody to receive all of the new features.

If you're not already using Code Search or Cody and want to learn more, you can [contact us](https://sourcegraph.com/contact/request-info) for information.