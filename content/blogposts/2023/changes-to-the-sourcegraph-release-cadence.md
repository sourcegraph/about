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

Additionally, we took a look at our release cycle and found it is more difficult for customers to land on a stable and feature-rich version of Sourcegraph than we want. We didn't like that some users felt they had to selectively manage which versions are worth the effort to upgrade. We want every version of Sourcegraph to be extremely valuable, and extremely stable. Therefore, we are excited to continue to simplify
the experience of operating Sourcegraph with changes to our release cadence.

Following the Sourcegraph 5.0 Starship event in March 2023, Sourcegraph will move to a quarterly feature release cycle. The first
of these quarterly releases will be version 5.1 which will be released in June 2023. These feature releases will be packed full of the exciting work on our roadmap,
as well as bug fixes, security updates, and any other infrasturcture changes.

Here is the tentative schedule for the next year of Sourcegraph feature releases:

| Version | Anticipated Release |
|---------|---------------------|
| 5.1     | June, 2023          |
| 5.2     | September, 2023     |
| 5.3     | December, 2023      |
| 5.4     | March, 2024         |

_Release dates and version numbers are subject to change._

Additionally, we will stabilize the cadence of patches between feature releases with scheduled bi-weekly patch releases. This will allow us to bundle our fixes more efficiently,
and significantly smooth out the experience of updating Sourcegraph.

These changes in release cadence will not reduce our response time for security incidents or other critical incidents affecting the operation of Sourcegraph. 
Patches will be released out of band as necessary in addition to any other scheduled patches.

We are excited to provide a consistent and stable release schedule for Sourcegraph going forward
