---
title: "Sourcegraph 4.2 release"
publishDate: 2022-11-22T10:00-07:00
description: "Sourcegraph 4.2 introduces..."
tags: [blog, release]
slug: "release/4.2"
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-2-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/4.2/sourcegraph-4-2-hero.png
changelogItems:
  - description: The search input has a new search history button, and search history can be cycled via the up/down arrow keys for quick access to previous searches.
    url: https://github.com/sourcegraph/sourcegraph/pull/44544
    category: Search
  - description: "When the `content:` filter is used in a query, it now behaves more predictably and only saerches file contents. Previously, file contents, paths, and repos were searched. However, as before, if `type:` is also set, the `content:` filter will search for results of the specified `type:`."
    url: https://github.com/sourcegraph/sourcegraph/pull/43442
    category: Search
  - description: When rendering a file which is backed by Git LFS, Sourcegraph now displays a page that links directly to the file on the codehost. Previously we rendered the LFS pointer.
    url: https://github.com/sourcegraph/sourcegraph/pull/43686
    category: Search
  - description: Code Insights data points that do not contain any results will display zero instead of being omitted from the visualization for clarity. This only applies to insight data created after 4.2.
    url: https://github.com/sourcegraph/sourcegraph/pull/43166
    category: Code Insights
  - description: "A new experimental GraphQL query, `permissionsSyncJobs`, now lists the states of recently completed permissions sync jobs and the state of each provider to check that syncing is working as intended. The TTL of entries can be configured with `authz.syncJobsRecordsTTL`."
    url: https://github.com/sourcegraph/sourcegraph/pull/44387
    category: API
  - description: Repositories can now be ordered by size on the repo admin page to make it easy to find the largest synced repos.
    url: https://github.com/sourcegraph/sourcegraph/pull/44360
    category: Admin
  - description: Access token creation, GitHub aned GitLab OAuth login attempts, and OIDC login attempts are now part of the audit log.
    url: https://github.com/sourcegraph/sourcegraph/pull/43886
    category: Admin
---

Sourcegraph 4.2 is here! This month, we are kicking off significant work to improve the scale, speed, and security of Sourcegraph.

The Sourcegraph platform is built to make developers' lives easier. With a great code intelligence platform, developers are able to find and understand code fast, stay in flow, and focus more on what they love doing: writing great code. In order to do this, Sourcegraph needs to fit the requirements of all sizes of engineering teams. These requirements include operating across massive numbers of repositories, being able to search millions of commits, and baking security into every part of the product.

To accomplish these things and deliver a product for even the most demanding engineering teams, Sourcegraph is putting extra focus on scale, speed, and security, and you will see these themes surface frequently over the next several releases.

<Badge link="https://docs.sourcegraph.com/admin/audit_log#on-premises" text="Admin" color="violet" size="small" />

#### Get enhanced security visibility with audit logs

Sourcegraph users frequently want to answer questions regarding who has accessed their instance, what actions they've taken, and when. Sourcegraph already provides some information (such as monitoring and pings) to this end, but more robust information is needed to serve pentesting and security testing use cases.

In 4.2, Sourcegraph now ships with an easy-to-consume audit log. The log contains security events, Gitserver access events, and GraphQL requests. You can read [more about the audit log in our docs](https://docs.sourcegraph.com/admin/audit_log#on-premises).

<br />
<Badge link="/batch-changes" text="Batch Changes" color="blue" size="small" />

#### Secrets in server-side Batch Changes (Beta)

It's common to use secrets in batch changes steps: for example, to authenticate to a private registry to install packages, to create tickets from within a batch change, or to make authentified API calls to other services. In local runs, secrets can be either hardcoded in the spec or loaded from environment variables using [`step.env`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-env), but until now there was no robust and secure way to manage secrets for server-side runs.

That's why we're releasing [executor secrets](https://docs.sourcegraph.com/admin/executor_secrets). You can now define secrets to be passed to server-side runs. They can then be referenced as `env` variables in the batch change spec.

Sourcegraph supports two types of secrets: namespaced secrets that can only be accessed by their owner, and global secets that site-admins can set and make available to all users on the instance. 

This feature is in Beta, and feedback is very welcome. Tweet at us, or drop a comment in this [issue](https://github.com/sourcegraph/sourcegraph/issues/44597)!

<br />
<Badge link="/code-search" text="Code Search" color="cerise" size="small" />

#### A Smart Search toggle to assist with search queries

The new lightning bolt toggle <span style={{display: "inline-flex", verticalAlign: "middle", margin: "2px"}}><img style={{width: "18px", height: "18px"}} src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/smart-search-bar-lightning.png"/></span> in the search bar activates `Smart Search`. Smart Search is a query assistant that activates when a search ordinarily returns no results. 

The basic idea is to help find search results that are likely to be more useful than showing "no results" by trying slight variations of the original query. Smart Seach works by trying alternative queries based on a handful of rules (we know how easy it is to get tripped up by query syntax). When a query alternative finds results, those results are shown immediately.

Take a query like `go buf byte parser`, for example. Normally, Sourcegraph will search for the string "go buf byte parser" with those tokens in that order. If there are **_no_** results, Smart Search attempts variations of the query. One rule applies a `lang:` filter to known languages. For example, `go` may refer to the `Go` language, so we convert this token to a `lang:Go` filter. Additionally, another rule relaxes the ordering on remaining tokens so that we search for `buf AND byte AND parser` anywhere in the file. Here's an example of what Smart Search looks like in action:

<img src="https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/blog/2022/smart-search-example.png"/>

Note that if the original query found results (which depends on the code it runs on), Smart Search has no effect. Smart Search does not otherwise intervene (or interfere with) search queries if those queries return results, and Sourcegraph behaves as usual. 

It is sometimes useful to check for the _absence_ of results (we _want_ to see zero matches). In these cases Smart Search can disabled temporarily by toggling the button in the search bar. To disable Smart Search permanently by default, set `"search.defaultMode": "precise"` in settings.

It is not possible to customize Smart Search rules at this time. So far a small number of rules are enabled based on feedback and utility. They affect the following query properties:

- Separate patterns with `AND` (pattern order doesn't matter)
- Patterns as filters (e.g., apply `lang:` or `type:symbol`  filters based on keywords)
- Quotes in queries (run a literal search for quoted patterns)
- Patterns as Regular Expressions (check patterns for likely regular expression syntax)

<br />
<hr/>
Sourcegraph 4.2 is now available to download. For Sourcegraph Cloud users, instances will be upgraded to 4.2 beginning November 23.
