---
title: "GopherCon 2019 - You can't Go your own way: The standardization of Go at GitHub"
description: "Ever feel like moving code bases, even in the same language, can feel like working at an entirely new company? Over the past year, GitHub has been working on standardizing its usage of Go to mitigate issues like this. This talk will cover challenges faced and lessons learned throughout this process."
authors:
  - name: Amber Byers for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-10:50
tags: [
  gophercon
]
slug: gophercon-2019-you-can-t-go-your-own-way-the-standardization-of-go-at-github
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true 
---

Presenter: [Jessica Lucci](https://luccacabra.com/)

Liveblogger: [Amber Byers](https://www.linkedin.com/in/amberbyers)

## Overview

Ever feel like moving code bases, even in the same language, can feel like working at an entirely new company? Over the past year, GitHub has been working on standardizing its' usage of Go to mitigate issues like this. This talk will cover challenges faced and lessons learned throughout this process.

---

## About Jessica

Jessica has been an Infrastructure Engineer at GitHub for about two years but has been doing Ops work for about seven.  She is passionate about creating tooling, processes, and structures that actually improve the lives of her fellow developers.

## The Problem

Jessica wanted to create an application that did a simple scraping job in Go.  The application should pull data from an API and dump that data into a database, so it only needed an API client and a database driver.  The concept is simple, and she initially expected this project to take around three to four days.  It ended up consuming three to four *weeks*.

Since this was a new database, the schema had to be designed and saved, something Jessica hadn't attempted before.  Like any good developer, she asked around a bit to learn about the GitHub standard for database schemas, but she received just as many answers.  One team saves their scheme in a text file, while another includes it in their application's code base.  Since there were so many methods, she decided to talk directly to the GitHub database team.  As it turns out, they had already started writing their own schema tool designed to solve this problem for developers.

Jessica and the database team spent some time writing some automation and test suites for the schema tool, and a few days later, GitHub had a fully managed schema tool available for developers.

Next, Jessica focused on the database driver, another tool she hadn't written before.  Again, she polled various GitHub teams for any "standard" or common database driver, and again she receieved as many answers.  This time, she decided to research and evaluate her own database driver, write a test suite for it, integrate it with her application, and move on to the next part of her project: the API client.

At this point, Jessica had detected a pattern, so she talked to several teams that had written or used an API client and discovered as many answers again.  Yet again, she did her own research, developed her own API, created a test suite, and finally finished the project.

## The Solution

Frustrated by the issues she encountered in this seemingly simple project, Jessica gathered some developers from a few teams at GitHub to brainstorm and discuss some possible solutions.  They all quickly centered on language standardization as their solution.

## What is Language Standardization?
Language standardization has three main tenants:
1. Libraries and Packages
2. Project Structure
3. Development Lifecycle

Standarizing the libraries and packages of a language involves answered the main question, "Which versions of what code live where?" and the followup questions, "How do we as developers determine which libraries and packages to use when?" and "What is the accepted upgrade process for each package?"  Jessica and her team decided that they could decrease the amount of time a developer spent researching, validating, testing, and upgrading libraries and packages by standardizing those processes.

Standardizing the project structure involves answering the question, "Where do I find the code thing?"  One of the main issues a developer faces when looking at a new repository or joining a new project is trying to learn the project's structure and the codebase's directory structure.  Jessica and her team discovered that if these structures were standardized across an organization, then they could minimize a developer's spin-up time when joining a new project. It's worth noting that the project structure includes build and run scripts so that the developers could quickly understand the application's full developtment lifecycle.

Finally, standardizing the development lifecycle simply made sense for GitHub as a whole.  Having a documented method for filing bug reports and feature requests, building test suites, using loggers, and putting in and reviewing pull requests improve the entire organization's efficiency and communication.

## Why Should We Care About Language Standardization?
Standardization offers three main benfits:
1. Security and Trust
2. Discoverability and Deduplication
3. Consistency that Organically Drives Collaboration

In Jessica's experience above, the version of the database driver that she deployed had a serious security vulnerability.  Another team at GitHub had been using that version and had found and resolved the issues, but it would take her team two weeks before they found the issue.  If GitHub had been using standardized packages and a centralized repository for those packages, the automated package updates would have applied the other team's fix to her project before her team even knew about the vulnerability.

If all packages and libraries are in a standard location, then the question "What packages/libraries/tools already exist and are production-ready?" is easy to answer. In Jessica's experience of searching for an API client, she found several clients within GitHub that were in various states of done, so in the spirit of this [relevant xkcd](https://xkcd.com/927/), she created yet another API client. The time, energy, effort, and resources required to recreate this work were unnecessary.

Finally, creating consistency across an organization enables seamless project switching for developers and supports smoother collaboration between teams.  In addition, fostering collaboration between development teams benefits those using the platform as well.  The users see a smoother developer experience, consistent management, and a more stable project overall.

## If Standardization Is So Great, How Do We Convince Management It's Worth It?
Jessica worked to convince management to support language standardization from two directions:
1. Language Working Groups Powered by Volunteers
2. Full-Time Framework Engineers

To get cross-team buy-in, Jessica recruited several volunteers with interest or experience in Go.  The team worked on several tasks, including:
- Creating and monitoring continuous integration scorecards filled out at build-time using a static code analysis.
- Vetting various modules and upgrade processes the teams already use.
- Creating mutually beneficial processes for various tasks in the development lifecycle.

The framework engineers, experts in Go, took on the full-time job of supporting the movement to standardization, working closely with the team of volunteers.

## Challenges to the Standardization Movement
There are always challenges to any movement within a group of people, no matter how wonderful the end result might seem.  The first challenge is getting buy-in from stakeholders by communicating the value of standardization. Both developers and managers have to be genuinely excited about the project and feel some ownership in the project's outcome.  Developers, in particular, are more excited to migrate to a new technology or process when they don't have to change their day to day process.

The second challenge is the migration to the new system.  In Jessica's case, modules are a major change from the existing tooling in Go, so GitHub decided to hold off on implmenting modules until the release of Go version 1.12.  This gave them time to train other developers on how to use both modules and the new standard tools and systems.

The last challenge Jessica and her team faced was limited resources.  The language working groups were comprised entirely of volunteers who were still responsible for their team's deliverables and thus had limited time to focus on the language working group's tasks.  Jessica realized that she needed GitHub as an organization to agree that this standardization effort deserved a place on the roadmap and a line item in the organization's Objectives and Key Results.  Between having a spot on the roadmap and dedicated full-time framework engineers, the standardization effort had clear ownership, goals, and deadlines so the organization could allocate more resources to the project.

## What's Next for Standardization at GitHub?
Jessica outlined three next steps for the standardization effort:
1. Standardizing GitHub's Go package registry and proxy.
2. Formalizing support for the new standardized processes.
3. Expanding the standardization project to the operations group as well.

## Conclusions
Jessica's talk covered the benefits of a language standardization across an organization, though I believe that much of what she discussed also can apply to the larger Go community or even the entire developer community.  Personally, I would be interested in a followup from Jessica next year to hear how this standardization is working for GitHub and how they  accomplished their next steps.



## Additional Resources

* [Find Jessica on Twitter](https://twitter.com/luccacabra)
