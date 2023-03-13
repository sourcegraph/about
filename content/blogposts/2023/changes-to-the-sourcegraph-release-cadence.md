---
title: 'Changes to the Sourcegraph release cadence'
authors:
- name: Coury Clark
  url: https://github.com/coury-clark
publishDate: 2023-03-13T10:00-07:00
description: 'A summary of upcoming changes to the Sourcegraph release cadence.'
tags: [blog]
slug: 'changes-to-the-sourcegraph-release-cadence'
published: true
---

The past year we have been focused on improving the experience of administrating and running Sourcegraph in a variety of ways. 
We've made it easier than ever to get started with [Sourcegraph Cloud](https://docs.sourcegraph.com/cloud), and we've simplified the on-prem experience by launching [Sourcegraph AMIs](https://docs.sourcegraph.com/admin/deploy/machine-images/aws-ami).

Additionally, we took a look at our release cycle and how frequently Sourcegraph users upgrade their instances. We found that many users selectively manage which versions of Sourcegraph they upgrade to versus which they skip. When customers land on a stable and feature-rich version of Sourcegraph, they tend to stick with that version for a while. 

We want every version of Sourcegraph to be extremely valuable and extremely stable. Therefore, we are excited to continue to simplify
the experience of operating Sourcegraph with changes to our release cadence.

Following the Sourcegraph 5.0 Starship event in March 2023, open source and enterprise Sourcegraph will move to a quarterly feature release cycle. The first
of these quarterly releases will be version 5.1 which will be released in June 2023. These feature releases will be packed full of the exciting work on our roadmap,
as well as bug fixes, security updates, and any other infrastructure changes.

Here is the tentative schedule for the next year of Sourcegraph feature releases:

| Version | Anticipated Release |
|---------|---------------------|
| 5.1     | June, 2023          |
| 5.2     | September, 2023     |
| 5.3     | December, 2023      |
| 5.4     | March, 2024         |

_Release dates and version numbers are subject to change._

Additionally, we will stabilize the cadence of patches between feature releases with scheduled bi-weekly patch releases. This will allow us to bundle our changes more efficiently
and significantly smooth out the experience of updating Sourcegraph.

These changes in release cadence will not reduce our response time for security incidents or other critical incidents affecting the operation of Sourcegraph. 
Patches will be released out of band as necessary in addition to any other scheduled patches. 

We are excited to provide a consistent and stable release schedule for Sourcegraph going forward. And, if you'd like to see more about our upcoming Starship event and the release of Sourcegraph 5.0, you can [check it out here](https://about.sourcegraph.com/starship).
