---
title: "Sourcegraph 3.25 release"
publishDate: 2021-02-20T10:00-07:00
description: "Sourcegraph 3.25 is released."
tags: [blog, release]
slug: "release/3.25"
published: true
changelogItems:
  - description: "Go `1.15` introduced changes to SSL/TLS connection validation which requires certificates to include a `SAN`. This field was not included in older certificates and clients relied on the `CN` field. You might see an error like `x509: certificate relies on legacy Common Name field`. We recommend that customers using Sourcegraph with an external database that is connected using SSL/TLS check whether the certificate is up to date. AWS RDS customers please reference <a href='https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html'>AWS' documentation on updating the SSL/TLS certificate</a> for steps to rotate your certificate."
    category: Admin
    url: https://github.com/sourcegraph/sourcegraph/pull/18024
  - description: Structural search now supports searching unindexed revisions and indexed branches other than default.
    url: https://github.com/sourcegraph/sourcegraph/pull/17726
    category: Search
  - description: "Experimental: The webapp can now stream search results to the client, improving search performance. To enable it, add `{ \"experimentalFeatures\": { \"searchStreaming\": true } }` in user settings."
    url: https://github.com/sourcegraph/sourcegraph/pull/16097
    category: Search
  - description: "New product research sign-up page added to user settings. Users can now opt in to participate in user research and provide feedback. Use the new site config option `productResearchPage.enabled` to disable access to the product research sign-up page."
    url: https://github.com/sourcegraph/sourcegraph/pull/17945
    category: Admin
  - description: "Secrets (such as access tokens and passwords) will now appear as REDACTED when editing external service config, and in graphql API responses."
    url: https://github.com/sourcegraph/sourcegraph/issues/17261
    category: Admin
  - description: Improved performance of structural search on monorepo deployments
    url: https://github.com/sourcegraph/sourcegraph/pull/17846
    category: Search
  - description: "Removed the `search.migrateParser` setting. As of 3.20 and onward, a new parser processes search queries by default. Previously, `search.migrateParser` was available to enable the legacy parser. Enabling/disabling this setting now no longer has any effect."
    url: https://github.com/sourcegraph/sourcegraph/pull/17344
    category: Search
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.
