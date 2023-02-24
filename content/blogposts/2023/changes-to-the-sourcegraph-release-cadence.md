---
title: 'Changes to the Sourcegraph release cadence'
authors:
- name: Coury Clark
  url: https://github.com/coury-clark
  publishDate: 2023-02-22T10:00-07:00
  description: 'A summary of upcoming changes to the Sourcegraph release cadence.'
  tags: [blog]
  slug: 'changes-to-the-sourcegraph-release-cadence'
  published: false
  heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/conc-og-social.png
  socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/conc-og-social.png
---

The past year we has been focused on improving the experience of administrating and running Sourcegraph in a variety of ways. 
We've made it easier than ever to get started with [Sourcegraph Cloud](https://docs.sourcegraph.com/cloud), as well as simplified the on-prem experience by launching [Sourcegraph AMI](https://docs.sourcegraph.com/admin/deploy/machine-images/aws-ami).
Additionally, we have evaluated our release cycle, and we are excited to continue to simplify
the experience of operating Sourcegraph with changes to our release cadence.

Following the March 2023 Starship event, Sourcegraph will move to a quarterly feature release cycle. The first
of these quarterly releases will be version 4.7 which will be released in June 2023. These feature releases will be packed full of the exciting work on our roadmap,
as well as bug fixes, security updates, and any other infrasturcture changes.

Here are the tentative dates for the next year of Sourcegraph feature releases:

| Version | Release Date       |
|---------|--------------------|
| 4.7     | June 13, 2023      |
| 4.8     | September 12, 2023 |
| 4.9     | December 12, 2023  |
| 4.10    | March 12, 2024     |

_Release dates and version numbers are subject to change._

Additionally, we will stabilize the cadence of patches between feature releases with scheduled bi-weekly patch releases. This will allow us to bundle our fixes more efficiently,
and significantly smooth out the experience of updating Sourcegraph.

These changes in release cadence will not reduce our response time for security incidents or other critical incidents affecting the operation of Sourcegraph. 
Patches will be released out of band as necessary in addition to any other scheduled patches.

We are excited to provide a consistent and stable release schedule for Sourcegraph, 
