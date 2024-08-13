---
title: "Sourcegraph August 2024 updates: New search experience, enterprise model selection, and Prompt Library"
authors:
  - name: Kelvin Yap
    url: https://x.com/KelvinYap
publishDate: 2024-08-07T10:00-01:00
description: "In this month’s release we’ve made significant improvements to the code search experience, introduced prompts and the Prompt Library, and made enterprise model selection available as EAP."
tags: [blog, release]
slug: 'release/august-2024'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/sourcegraph-aug24-release-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/sourcegraph-aug24-release-image.png
---

<br />
In this month’s Sourcegraph release (5.6.0) we’ve made significant improvements to the code search experience including a new search experience, regex support for repo metadata, and saved searches improvements.

For Cody we are introducing the evolution of commands with prompts and Prompt Library, additional analytics improvements, and the launch of enterprise model selection as EAP.
<br />

## New search experience

<br />
Developers love using Code Search to help them search, navigate, and find answers about their codebase no matter the scale. We believe we can help users navigate code and find answers even faster, and to that end we have undertaken a full rewrite of the search UI using SvelteKit and making it available to try in this release.

This rewrite focuses on speed and simplicity for users. There are numerous improvements to the core search experience including a new file page design with new file actions such as “open in editor” and “open on code host”, keyboard shortcuts for focusing the search input, and a new in-line diff view that lets you compare commits and how a file has changed over time, all in-line.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/new%20search%20experience.png"
  alt="New search experience view"
/>
<br />

These improvements aren't limited to design and quality of life - you will notice markedly improved performance (as much as 10x faster in some instances) for a faster and snappier experience searching your codebase.

There are some limitations to the new search experience - particularly if you use precise code intelligence, Perforce, or have accessibility requirements - so we are making it available today as an opt-in for Enterprise customers (please [see our docs](https://sourcegraph.com/docs/code-search/features#search-experience) to learn more about opting in). As we continue work to gain parity with the existing experience we will graduate the experience to opt-out later this year, and as the default shortly thereafter.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/switch%20out%20to%20new%20experience.png"
  alt="Try the new experience toggle"
/>
<br />

## Saved searches improvements

<br />
Saved searches let you save search queries that are useful, such as recent security-related changes on all branches or dependency changes, so you can refer back to them regularly or share them with others within your team or organization. In this release, we have made a number of improvements to the UI and how saved searches can be drafted and owned:
<br />

### Improved UI

<br />
Previously saved searches were nested in a user or organization’s profile, and you had to visit your profile or the profile page of all orgs you’re in to view them. Now they are elevated to the top nav, making them easier to navigate to and use.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/saved%20searches%20nav.png"
  alt="Saved searches nav"
/>
<br />

Saved searches can now be sorted by name or recently-updated, and we’ve added the ability to search your saved searches (very meta).
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/saved%20searches%20view.png"
  alt="Saved searches nav"
/>
<br />

### Transfer ownership

<br />
You can now transfer ownership of a saved search. Previously when a person left a company you had to delete the saved search and create it under a new owner, but with this change you can share a saved search owned by you and also transfer ownership.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/transfer%20search%20ownership.png"
  alt="Transfer ownership of a saved search"
/>
<br />

### Saved search drafts

<br />
You can now mark saved searches as a “draft”, letting other users know that a saved search isn’t quite ready to be used yet.
<br />

## Prompts and Prompt Library for VS Code

<br />
Cody currently offers users quick, ready-to-use commands for common actions to write, describe, fix, and smell code, as well as the ability to create their own custom commands tailored to your development workflow. We’ve heard from customers how valuable commands are and received lots of feedback on how to improve them.

With that in mind we are excited to share the evolution of commands in Cody, beginning with VS Code: prompts. Prompts function the same as commands but have been renamed to easier understand their usefulness in the context of existing AI chat terminology. Prompts can be created and discovered via the web UI in the new Prompt Library, making it easier to create, edit, share, and discover prompts you’ve created or have been shared within your organization.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/prompt%20library.png"
  alt="Prompt Library view"
/>
<br />

Prompts are releasing for VS Code today and will be coming to JetBrains IDEs soon. Please read our [announcement of prompts](https://sourcegraph.com/blog/cody-vscode-1-30-0-release) to learn more about its capabilities and eventual replacement for commands.
<br />

## Enterprise model selection (EAP)

<br />
Access to the latest and greatest models and avoiding ‘model lock-in’ is a core reason why customers choose to use Cody. For enterprise customers, we’re expanding Cody to be more flexible and allow admins to select multiple models from multiple providers, which end users can then choose from on-demand.

Sourcegraph 5.6.0 includes our new enterprise model selection, released as Early Access and offers end-users the flexibility to use different models their admin provides access to for chat. For admins, this new model selection method not only allows them to define what models their end users can use, they can also select models from different provider methods too.

The experience for Enterprise end users with enterprise model selection is similar to Free and Pro users - they can select from a number of different models when using Cody chat.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/enterprise%20model%20selection.png"
  alt="Model selection view inside IDE"
/>
<br />

Admins can not only provide multiple model options to their users, but they can also configure and use models from different providers as well. For example, if a customer on AWS Bedrock wants to give their users access to OpenAI models they can configure Azure OpenAI as a provider to allow this in a secure manner. Enterprise model selection will support providers from the aforementioned AWS Bedrock and Azure OpenAI, along with Sourcegraph and Bring Your Own Key (BYOK) methods.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/enterprise%20model%20selection%20providers.png"
  alt="Model selection view with providers"
/>
<br />

Enterprise model selection is currently part of our Early Access Program (EAP) and will be available as the default model selection method for Enterprise customers later in the year. Existing customers who are interested to find out more should reach out to their account managers. If you’re not a customer but would like to learn more please [contact us](https://sourcegraph.com/contact/request-info?form_submission_source=request-info). 
<br />

## Unified Cody sidebar for VS Code users

<br />
[Announced recently](https://sourcegraph.com/blog/cody-vscode-1-28-0-release) for Cody Free and Pro users on VS Code, the unified Cody sidebar is now available for Enterprise end users too. The new sidebar experience is aligned with our goal of making the Cody experience as familiar and consistent as possible, regardless of whether you’re using it on the web or across any of the IDEs we support.

The new UX updates include moving chat into the primary sidebar with the option to open a dedicated chat window with the “Move Chat to Editor Panel” button. Commands and the new prompts and Prompt Library are also available in the sidebar, with all functions quickly available at a glance.

This update will become the default interface everywhere Cody exists, starting with VS Code users across the Free, Pro, and Enterprise plans today, and will be available to JetBrains users soon as well.
<br />

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/unified%20cody%20sidebar%20update.png"
  alt="Cody unified sidebar"
/>
<br />

## Cody analytics improvements

<br />
We’ve continued to refine the analytics UI following the improvements in the [last release](https://sourcegraph.com/blog/release/july-2024). The definitions now live in an information button to reduce clutter, and we've added an `All time` option to the time picker we introduced last month. This gives admins additional options to view data across a time period, and we’ve updated the chart styling to handle the greater density of data displayed.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/august-2024/cody%20analytics.png"
  alt="Cody analytics view"
/>
<br />

## Regex search support for repo metadata

<br />
Repo metadata is a useful way Sourcegraph users add their business-specific information into the search query language. It allows tagging repos with arbitrary, code-adjacent metadata like ownership info, quality metrics, and third-party system IDs that can be searched, but it’s currently limited to searching with an exact key/value pair. In this month’s release we have added regex search support for repo metadata, enabling users to ingest semi-structured data and making it searchable by pattern.

Learn more about regex search support [here](https://sourcegraph.com/docs/admin/repo/metadata).
<br />

## Support for Perforce labels

<br />
Labels in Perforce are used to mark, record, and easily retrieve a set of file versions, and can be used to mark important file revisions such as a particular release or last known good build. Perforce labels can function in a similar way to git tags, and in this month’s Sourcegraph release certain labels can be mapped into git tags, making them available for filtering and searching within the UI.

More information on support for Perforce labels can be found in our [docs](https://sourcegraph.com/docs/admin/repo/perforce#perforce-labels).
<br />

## Improvements to native Kubernetes Executors

<br />
Executors allow Sourcegraph to process tasks such as batch changes and auto-index repos for precise code navigation in a secure and private way. Previously, the default mode of operation for Executors running in Kubernetes required three pods to run a job, but we recently added an optional single job pod mode that reduces resource usage and improves efficiency and security.

In this release, single job pods are now the default for Executors on Kubernetes. Learn more about native kubernetes executors in our [docs](https://sourcegraph.com/docs/admin/executors/deploy_executors_kubernetes).

Sourcegraph 5.6.0 is now available. Users self-hosting Sourcegraph can upgrade their instances today, and Sourcegraph Cloud users will receive this update within the coming days.
<br />
