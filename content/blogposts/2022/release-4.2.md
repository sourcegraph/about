---
title: "Sourcegraph 4.2 release"
publishDate: 2022-11-29T10:00-07:00
description: "Sourcegraph 4.2 introduces the new audit log, executor secrets for server-side Batch Changes, and Smart Search to make it easier to find the search results you're looking for."
tags: [blog, release]
slug: "release/4.2"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-2-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-2-hero.png
changelogItems:
  - description: The search input has a new recent searches button, and recent searches can be cycled via the up/down arrow keys for quick access to previous searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/44544
    category: Search
  - description: "When the `content:` filter is used in a query, it now behaves more predictably by only searching file contents. Previously, file contents, paths, and repositories were searched. However, as before, if `type:` is also set, the `content:` filter will search for results of the specified `type:`."
    url: https://github.com/sourcegraph/sourcegraph/pull/43442
    category: Search
  - description: When rendering a file that is backed by Git LFS, Sourcegraph now displays a page that links directly to the file on the code host. Previously we rendered the LFS pointer.
    url: https://github.com/sourcegraph/sourcegraph/pull/43686
    category: Search
  - description: Code Insights data points that do not contain any results will display zero instead of being omitted from the visualization for clarity. This only applies to insight data created after 4.2.
    url: https://github.com/sourcegraph/sourcegraph/pull/43166
    category: Code Insights
  - description: "A new experimental GraphQL query, `permissionsSyncJobs`, now lists the states of recently completed permissions sync jobs and the state of each provider to check that syncing is working as intended. The TTL of entries can be configured with `authz.syncJobsRecordsTTL`."
    url: https://github.com/sourcegraph/sourcegraph/pull/44387
    category: API
  - description: Repositories can now be ordered by size on the repository admin page to make it easy to find the largest synced repositories.
    url: https://github.com/sourcegraph/sourcegraph/pull/44360
    category: Admin
  - description: Access token creation, GitHub and GitLab OAuth login attempts, and OIDC login attempts are now part of the audit log.
    url: https://github.com/sourcegraph/sourcegraph/pull/43886
    category: Admin
---

Sourcegraph 4.2 is here! This month, we are kicking off significant work to improve the scale, speed, and security of Sourcegraph.

Sourcegraph's code intelligence platform is built to help you find and understand code fast, stay in flow, and focus more on what you love doing: writing great code. In order to do this seamlessly for all sizes of engineering teams, Sourcegraph must be able to operate across massive numbers of repositories, search millions of commits, and bake security into every part of the product.

To accomplish this and support even the most demanding engineering teams, Sourcegraph is focused on improving scale, speed, and security over the next several releases in addition to releasing new features.

Here's what's new in Sourcegraph 4.2:

<Badge link="https://docs.sourcegraph.com/admin/audit_log#on-premises" text="Admin" color="violet" size="small" />

#### Get enhanced security visibility with audit logs

Sourcegraph users frequently want to answer questions regarding who has accessed their instance, what actions they've taken, and when. Sourcegraph already provides some information (such as monitoring and pings), but more data is needed to serve pentesting and security testing use cases.

In 4.2, Sourcegraph now ships with an easy-to-consume audit log. The log contains security events, Gitserver access events, and GraphQL requests. The audit log is available for Sourcegraph self-hosted instances, with availability coming soon for Sourcegraph Cloud.

<a href="https://docs.sourcegraph.com/admin/audit_log" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />

#### Secrets in server-side Batch Changes (Beta)

It's common to use secrets in batch changes steps. Developers can use secrets in batch changes to authenticate to a private registry to install packages, create tickets from within a batch change, or make authenticated API calls to other services. In local runs, secrets can be either hardcoded in the batch spec or loaded from environment variables using [`step.env`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-env), but until now, there was no robust and secure way to manage secrets for server-side runs.

To solve this, we're releasing [executor secrets](https://docs.sourcegraph.com/admin/executor_secrets). You can now define secrets to be passed to server-side runs, and those secrets can be referenced as `env` variables in the batch change spec.

Sourcegraph supports two types of secrets: namespaced secrets that can only be accessed by their owner, and global secrets that site admins can set and make available to all users on an instance.

This feature is in Beta, and feedback is very welcome. Tweet at us, or drop a comment in this [issue](https://github.com/sourcegraph/sourcegraph/issues/44597).

<a href="https://docs.sourcegraph.com/admin/executor_secrets" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### Smart Search helps with search queries to find more results, faster

To help you find information in your codebase faster than ever, we're introducing Smart Search, a new query assistant that activates when a search returns no results. It can be turned on with the new lightning bolt toggle <span style={{display: "inline-flex", verticalAlign: "middle", margin: "2px"}}><img style={{width: "18px", height: "18px"}} src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/smart-search-bar-lightning.png"/></span> in the search bar.

Smart Search helps find search results that are likely to be more useful than showing "no results" by trying slight variations of a user's original query. Smart Search automatically tries alternative queries based on a handful of rules (we know how easy it is to get tripped up by query syntax). When a query alternative finds results, those results are shown immediately. See the documentation to learn more about Smart Search behavior and configuration.

<a href="https://docs.sourcegraph.com/code_search/explanations/features#smart-search" className="tw-not-italic tw-flex tw-items-center tw-mb-sm">Docs<OpenInNewIcon className="tw-ml-xxs" size={18} /></a>

<br />
Sourcegraph 4.2 is now available to download. For Sourcegraph Cloud users, instances will be upgraded to 4.2 beginning December 5.
