---
title: "Sourcegraph 3.25 release"
publishDate: 2021-02-20T10:00-07:00
description: "Sourcegraph 3.25 is released."
tags: [blog, release]
slug: "release/3.25"
published: true
changelogItems:
- description: "Go `1.15` introduced changes to SSL/TLS connection validation which requires certificates to include a `SAN`. This field was not included in older certificates and clients relied on the `CN` field. You might see an error like `x509: certificate relies on legacy Common Name field`. We recommend that customers using Sourcegraph with an external database and and connecting to it using SSL/TLS check whether the certificate is up to date. AWS RDS customers please reference [AWS' documentation on updating the SSL/TLS certificate](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) for steps to rotate your certificate."
  category: Admin
  url: https://github.com/sourcegraph/sourcegraph/pull/18024
# Added
- description: "New site config option `\"log\": { \"sentry\": { \"backendDSN\": \"\u003cREDACTED\u003e\" } }` to use a separate Sentry project for backend errors."
  url: https://github.com/sourcegraph/sourcegraph/pull/17363
  category:
- description: Structural search now supports searching indexed branches other than default.
  url: https://github.com/sourcegraph/sourcegraph/pull/17726
  category: Search
- description: Structural search now supports searching unindexed revisions.
  url: https://github.com/sourcegraph/sourcegraph/pull/17967
  category: Search
- description: "New site config option `\"allowSignup\"` for SAML authentication to determine if automatically create new users is allowed."
  url: https://github.com/sourcegraph/sourcegraph/pull/17989
  category:
- description: "Experimental: The webapp can now stream search results to the client, improving search performance. To enable it, add `{ \"experimentalFeatures\": { \"searchStreaming\": true } }` in user settings."
  url: https://github.com/sourcegraph/sourcegraph/pull/16097
  category: Search
- description: "New product research sign-up page. This can be accessed by all users in their user settings."
  url: https://github.com/sourcegraph/sourcegraph/pull/17945
  category: Search
- description: "New site config option `productResearchPage.enabled` to disable access to the product research sign-up page."
  url: https://github.com/sourcegraph/sourcegraph/pull/17945
  category: Search
- description: Pings now contain Sourcegraph extension activation statistics.
  url: https://github.com/sourcegraph/sourcegraph/pull/16421
  category:
- description: "Pings now contain aggregate Sourcegraph extension activation statistics: the number of users and number of activations per (public) extension per week, and the number of total extension users per week and average extensions activated per user."
  url: https://github.com/sourcegraph/sourcegraph/pull/16421
  category:
- description: "Pings now contain aggregate code insights usage data: total insight views, interactions, edits, creations, removals, and counts of unique users that view and create insights."
  url: https://github.com/sourcegraph/sourcegraph/pull/17805
  category:
# Changed
- description: "Alert solutions links included in [monitoring alerts](https://docs.sourcegraph.com/admin/observability/alerting) now link to the relevant documentation version."
  url: https://github.com/sourcegraph/sourcegraph/pull/17828
  category: Admin
- description: "Secrets (such as access tokens and passwords) will now appear as REDACTED when editing external service config, and in graphql API responses."
  url: https://github.com/sourcegraph/sourcegraph/issues/17261
  category: Admin
# Fixed
- description: Fixes an issue that prevented the hard deletion of a user if they had saved searches.
  url: https://github.com/sourcegraph/sourcegraph/pull/17461
  category: Search
- description: "Fixes an issue that caused some missing results for `type:commit` when a pattern was used instead of the `message` field."
  url: "https://github.com/sourcegraph/sourcegraph/pull/17490#issuecomment-764004758"
  category:
- description: "Fixes an issue where cAdvisor-based alerts would not fire correctly for services with multiple replicas."
  url: https://github.com/sourcegraph/sourcegraph/pull/17600
  category:
- description: Significantly improved performance of structural search on monorepo deployments
  url: https://github.com/sourcegraph/sourcegraph/pull/17846
  category: Search
- description: Fixes an issue where upgrades on Kubernetes may fail due to null environment variable lists in deployment manifests
  url: "https://github.com/sourcegraph/deploy-sourcegraph/pull/1781"
  category:
- description: Fixes an issue where counts on search filters were inaccurate.
  url: https://github.com/sourcegraph/sourcegraph/pull/18158
  category: Search
# Removed
- description: "Removed the `search.migrateParser` setting. As of 3.20 and onward, a new parser processes search queries by default. Previously, `search.migrateParser` was available to enable the legacy parser. Enabling/disabling this setting now no longer has any effect."
  url: https://github.com/sourcegraph/sourcegraph/pull/17344
  category: Search
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.
