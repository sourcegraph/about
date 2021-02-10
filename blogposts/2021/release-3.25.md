---
title: "Sourcegraph 3.25 release"
publishDate: 2021-02-20T10:00-07:00
description: "Sourcegraph 3.25 is released."
tags: [blog, release]
slug: "release/3.25"
published: false
changelogItems:
- description: "Go `1.15` introduced changes to SSL/TLS connection validation which requires certificates to include a `SAN`. This field was not included in older certificates and clients relied on the `CN` field. You might see an error like `x509: certificate relies on legacy Common Name field`. We recommend that customers using Sourcegraph with an external database and and connecting to it using SSL/TLS check whether the certificate is up to date. AWS RDS customers please reference [AWS' documentation on updating the SSL/TLS certificate](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) for steps to rotate your certificate."
  category: Admin
  url: https://github.com/sourcegraph/sourcegraph/pull/18024
---
\* Please [contact Sourcegraph](https://about.sourcegraph.com/contact/sales/) with any licensing questions.
