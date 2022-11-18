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
  - description: 
    url: 
    category: 
  - description: 
    url: 
    category: 
---

<Badge link="" text="Feature Name" color="blue" size="small" />

#### Secrets in server-side Batch Changes (Beta)

It's common to use secrets in batch changes steps: for example, to authenticate to a private registry to install packages, to create tickets from within a batch change, or to make authentified API calls to other services. In local runs, secrets can be either hardcoded in the spec or loaded from environment variables using [`step.env`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-env), but until now there was no robust and secure way to manage secrets for server-side runs.

That's why we're releasing [executor secrets](https://docs.sourcegraph.com/admin/executor_secrets). You can now define secrets to be passed to server-side runs. They can then be referenced as `env` variables in the batch change spec.

Sourcegraph supports two types of secrets: namespaced secrets that can only be accessed by their owner, and global secets that site-admins can set and make available to all users on the instance. 

This feature is in Beta, and feedback is very welcome. Tweet at us, or drop a comment in this [issue](https://github.com/sourcegraph/sourcegraph/issues/44597)!

<br />
<Badge link="" text="Feature name" color="cerise" size="small" />

#### Highlight 2

<br />
Sourcegraph 4.2 is now available to download. For Sourcegraph Cloud users, instances will be upgraded to 4.2 beginning (Date).
