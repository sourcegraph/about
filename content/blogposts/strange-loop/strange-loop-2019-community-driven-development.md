---
title: "Strange Loop 2019 - Community Driven Development"
description: "As developers who want to lend our skills to support organizations fighting for social justice, how do we build effective, impactful collaborations with organizations and make the resulting open source projects sustainable? Over two years and 1,062 commits, we'll follow the evolution of an open source project built with and for New Sanctuary Coalition (NSC), an NYC immigrant rights organization, to meet exponentially growing demand for their immigration court accompaniment program, pro se legal clinic, and anti-detention program following the 2016 election."
authors:
  - name: Jamal Rogers
    url: https://twitter.com/bambiffpow
publishDate: 2019-09-14T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-community-driven-development
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Christine Zagrobelny</span>
        <a href="https://github.com/CZagrobelny" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

As developers who want to lend our skills to support organizations fighting for social justice, how do we build effective, impactful collaborations with organizations and make the resulting open source projects sustainable? Over two years and 1,062 commits, we'll follow the evolution of an open source project built with and for New Sanctuary Coalition (NSC), an NYC immigrant rights organization, to meet exponentially growing demand for their immigration court accompaniment program, pro se legal clinic, and anti-detention program following the 2016 election.

---


Christine Zagrobelny began as a volunteer with the New Sanctuary Coalition. The organization was founded by immigrants to stop the system of inhumane detention and deportation of undocumented people (Friends), and to provide those Friends with assistance and resources. The services provideded include: 
* Accompaniament program - Pairs Friends with volunteerss to provide support for ICE checkins and immigration hearings
* Pro-se legal clinic - Friends work with volunteers and lawyers to plan for their legal case
* Anti-detention program - Works with detained immigrants to fight for their release
* Sanctuary - A network of spaces offering sanctuary

Following the 2016 election, there was an influx of both volunteers and requests for help. The existing systems could not be sustained as volume scaled up. The number of Friends using the services increased from 4 per week to 40. This meant an icrease in deadlines, ICE check-ins, court dates, and asylum applications, all of which needed to be tracked. This was made even more difficult when multiple volunteers worked on a single case, and needed coordinate handoffs. Christine decided to use her tech skills to solve this problem. After determining that there wasn't any existing software that fit, she began creating wireframes for a Rails app for the NSC.

After working summer Fridays from April-August, Christine began to burn out. She began hack events in the fall to attract more contributors to the OSS project. Since the hackers wouldn't know the software, and she didn't know their experience level, this influenced the way she wrote issues. In order to reduce the amount of unusable work, she wrote highly prescriptive issues.

These hack events led again to Christine being burnt out. She wasn't meeting her goal of getting long-term contributors. She was putting effort to setting up events, but not to retaining participants. She then started  to think about what would motivate people to be long term contributors. This led to thinking about the NSC's community and why people join, and attempted to embed the community in the project:

* Connection to the work
  * Regular contributors were invited to visit the clinic
  * Monthly newsletters provided contributors with updates on NSC's work
  * She started to create GitHub issues with verbiage that described the real-world need
* Working together
  * Creation of a monthly virtual co-working night on Zoom
  * Shout-outs for contribitors! It's important/energizing to see the effect of the work as a whole
  * She began to share previews of current/upcoming work on a regular interval
* Shared Values and goals
 * Incorporated NSC's values and mission in the project's Code Of Counduct
 * Included all tech projects and tech volunteers at NSC, not just OSS contributors
 
 
The talk concluded with an invitation for the audience to be an orginization's tech friend. Be a part of the community first, and put a focus on sustainability.

For more about the NSC:

[Website](https://www.newsanctuarynyc.org/)

[One-time gift](https://www.newsanctuarynyc.org/onetimegift)

[The project on GitHub](https://github.com/CZagrobelny/new_sanctuary_asylum)

[Join the newsletter](mailto:newsanctuary.tech@gmail.com)
