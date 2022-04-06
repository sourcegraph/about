---
title: 'Sourcegraph 3.25 release'
publishDate: 2021-02-20T10:00-07:00
description: 'Sourcegraph 3.25 is released.'
tags: [blog, release]
slug: 'release/3.25'
published: true
changelogItems:
  - description: "Go `1.15` introduced changes to SSL/TLS connection validation which requires certificates to include a `SAN`. This field was not included in older certificates and clients relied on the `CN` field. You might see an error like `x509: certificate relies on legacy Common Name field`. We recommend that customers using Sourcegraph with an external database that is connected using SSL/TLS check whether the certificate is up to date. AWS RDS customers please reference AWS' documentation (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) on updating the SSL/TLS certificate for steps to rotate your certificate."
    url: https://github.com/sourcegraph/sourcegraph/pull/18024
    category: Admin
  - description: Structural search now supports searching unindexed revisions and indexed branches other than default.
    url: https://github.com/sourcegraph/sourcegraph/pull/17967
    category: Search
  - description: 'Experimental: The webapp can now stream search results to the client, improving search performance. To enable it, add `{ "experimentalFeatures": { "searchStreaming": true } }` in user settings.'
    url: https://github.com/sourcegraph/sourcegraph/pull/16097
    category: Search
  - description: 'New product research sign-up page added to user settings. Users can now opt in to participate in user research and provide feedback. Use the new site config option `productResearchPage.enabled` to disable access to the product research sign-up page.'
    url: https://github.com/sourcegraph/sourcegraph/pull/17945
    category: Admin
  - description: 'Secrets (such as access tokens and passwords) will now appear as REDACTED when editing external service config, and in graphql API responses.'
    url: https://github.com/sourcegraph/sourcegraph/issues/17261
    category: Admin
  - description: 'Improved performance of structural search on monorepo deployments.'
    url: https://github.com/sourcegraph/sourcegraph/pull/17846
    category: Search
  - description: 'When previewing a campaign spec, changesets can be filtered by current state or the action(s) to be performed.'
    url: https://github.com/sourcegraph/sourcegraph/issues/16960
    category: Campaigns
  - description: 'Experimental: Sync Perforce depots directly through the Sourcegraph UI. To enable, use the feature flag `"experimentalFeatures": { "perforce": "enabled" }`. For more information on how to add your Perforce depots, please reference our docs (https://docs.sourcegraph.com/admin/repo/perforce).'
    url: https://docs.sourcegraph.com/admin/repo/perforce
    category: Admin
---
