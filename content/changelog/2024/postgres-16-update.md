---
title: "Postgres 16 upgrade for customers using the Sourcegraph Postgres image"
authors:
  - name: Jacob Pleiness
    avatar: https://storage.googleapis.com/sourcegraph-assets/blog/jacob_avatar.png
publishDate: 2024-11-25T10:00-02:00
description: "Self-hosted customers using the provided Sourcegraph Postgres image will be upgraded to Postgres 16."
tags: [Enterprise]
version: [v5.10]
versionIcon: /assets/changelog/sourcegraph.svg
slug: 'postgres-16-update'
published: true
relatedTopics:
  - title: Cody docs
    url: https://sourcegraph.com/docs/cody
  - title: Model configuration docs
    url: https://sourcegraph.com/docs/cody/enterprise/model-configuration
---

Currently, Sourcegraph’s minimum required version of Postgres, the database management system used for all Sourcegraph instances, is Postgres 12. Postgres 12 is reaching end-of-life and will no longer be supported by Postgres. Because of this, Sourcegraph will be updating our minimum supported version to Postgres 16.

If you are using Sourcegraph’s released Postgres images, these images will be updated to Postgres 16 as part of the Sourcegraph 5.10 release and all near-term subsequent releases. With this update, Sourcegraph will experience a longer-than-average downtime at the time of the upgrade to version 5.10 or beyond. This downtime is proportional to the amount of code indexed in your instance and can range from approximately 15 minutes to a couple of hours. The downtime will only occur at the first upgrade to version 5.10 or beyond, and not during any subsequent upgrades.

We strongly recommend that you consider this downtime prior to upgrading to ensure minimal disruption to your users. We also strongly recommend creating a backup of your database before the upgrade process.

For more detailed information, please refer to our [technical changelog](https://sourcegraph.com/docs/technical-changelog) or contact your Sourcegraph Support representative.