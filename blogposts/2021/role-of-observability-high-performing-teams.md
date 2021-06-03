---
title: "Monitoring is no longer enough: For high-performing development teams you need observability tools"
author: 
authorUrl: 
description: "Observability and tracking the right metrics are critical to development teams' success. We chatted to Charity Majors of Honeycomb about bridging the gap between dev and ops and making software more comprehensible to everyone."
publishDate: 2021-06-04T18:00-07:00
tags: [blog]
slug: role-of-observability-tools-high-performing-development-teams
heroImage: https://sourcegraphstatic.com/blog/high-performing-development-teams-observability.gif
socialImage: https://sourcegraphstatic.com/blog/high-performing-development-teams-observability.gif
published: true
---

![Facilitating high-performing teams](https://sourcegraphstatic.com/blog/high-performing-development-teams-observability.gif)

Legacy methods for predicting system failures are no longer enough. To bring development and operation teams together more effectively, you need modern observability and monitoring tools designed for highly distributed systems and microservices architectures.

During a recent [Sourcegraph podcast episode](/podcast/charity-majors/), Cofounder and CTO [Beyang Liu](/handbook/company/team#beyang-liu) spoke with Charity Majors, Founder and CTO of [Honeycomb](https://www.honeycomb.io/) about the impact of observability and monitoring on development teams.

## Why monitoring alone is no longer enough

Orgs have historically relied in telemetry and monitoring tools to predict and surface system failues, but in most cases, logs are only useful if you know what to include in them before deployment and what to search for when a problem arises. Similarly, most metrics aren’t tied together in a way that makes it possible to understand these complex system states. 

>"Many times, when an app is down and you have to figure out what’s going on, it’s a very manual process. You’ve got your top lists of metrics and your defined questions to monitor, but if those don’t indicate the problem you're looking for a needle in a haystack." – Charity

Enter observability tools: A way to deal with unknown unknowns or the situations you cannot predict beforehand. While most monitoring tools measure specific data points to know when something is wrong, observability tools can track hundreds of different data points to provide more context and help surface the reason behind failures. Furthermore, by shifting away from the emphasis on the system itself when collecting data towards the user experience, it’s far easier to trace issues back to their source.

>"At a high level, observability is being able to ask any question of your systems and understanding any state that the system has gotten itself into, without having any prior knowledge of it, without having seen a break before, and without shipping any custom code to handle the question you’re trying to ask." – Charity

## Adoption of observability tools is critical

With so many tools available in the realm of observability and monitoring—from log aggregation, application performance management, distributed tracers, and more—it can be difficult for development teams to know what to use. In fact, when it comes to closing the gap between operations and development it can be intimidating for many teams. That’s why developer-friendly observability tools are critical for building a stronger and more efficient DevOps culture.

>"We really have to make it a production practice and an expectation that everyone who's writing code spends time every week with their eyes on production, on their code. You're going to pull out so many more subtler bugs and problems that would never reach the level of paging someone from operations." – Charity

While monitoring tools are great for keeping operations teams informed about system failures, observability tools can give you a wide range of data to better understand the way your code is performing. That’s because they allow you to set alerts thresholds to detect unexpected behavior that’s not necessarily catastrophic. Over the longer term, therefore, observability can make complex systems more comprehensible and resilient than relying solely on monitoring tools.

## You need to be measuring the right things 

 According to the [Accelerated State of DevOps report](https://cloud.google.com/devops/state-of-devops/), the bottom 50% of performers are getting worse year-over-year, while the top 50% continue to get better even faster. That’s because complex systems are constantly on the verge of overtaking teams if they’re taking steps to make their software more comprehensible.

> "These are social-technical systems. The people, the code, the tools you use for deploying and managing that code, and observability are important steps, but it’s all about the effectiveness of the team. I feel like 80, 90, or more percentage of your velocity and your ability to ship code with confidence has nothing to do with your personal skills. It has everything to do with your team."

While low-performing developers can often join a high-performing team and ramp up to hold their own within a few months, the opposite isn’t usually the case. That’s why it's crucial to track key metrics that improve the effectiveness of the entire team rather than focusing on individual developers or tools. 

The metrics Charity finds most important are: 

- Deployment frequency
- The time from merging code until the build reaches production
- The time to recover from outages

These metrics, when combined with a wide dataset, can make complex systems much more comprehensible for new and experienced developers alike. This leads to more effective teams because it’s easier to write and debug software when the feedback loop for developers is significantly shorter. 

_Want to learn more about facilitating high-performance teams? [Listen to the full podcast](/podcast/charity-majors/)._
