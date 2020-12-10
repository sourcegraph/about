## Software Engineer - Code Intelligence Indexing

The Code Intelligence [team](../code-intelligence/index.md) builds tools and services that provide contextual information around code, taking into account its lexical, syntactic, and semantic structure.  We want to provide users with fast, comprehensive and accurate answers to important code navigation queries.  

Our mission is to build a code intelligence platform that understands code in all languages and provides rich metadata to power [code search](https://docs.sourcegraph.com/code_search) and  [campaigns](https://docs.sourcegraph.com/campaigns) alongside future features.



## How does Code Intelligence work from a high level?

We write language specific indexers that emit [LSIF](https://lsif.dev/) data about projects.  This information is processed, persisted and used to answer [LSP](https://microsoft.github.io/language-server-protocol/) requests on demand such as Go to Definition and Find references within Sourcegraph.

## What problems would you be working on?

Our current [focus](../code-intelligence/goals.md) is to provide automated code intelligence for C++ and Java to supplement our Go and TS indexers.  

We're looking for someone to lead either the C++ or Java development of the LSIF indexers. Problems that we want to solve include:

* Automatic support for a variety of dependency management and builds systems in each ecosystem.
* Incremental indexing, currently a one line change will need a full re-index of a project.  Help us make this faster and more efficient.
* Resolution and indexing of 3rd party dependencies
* Distributed builds



As our mission is to provide Code Intelligence for all languages, this role will also be crucial in setting a foundation for how we approach indexing across a broad variety of languages.



## What will the team potentially look like in a year from now?

We will grow to 6 to 8 engineers, with two distinctive problem spaces:

* 3-4 engineers focusing on the indexers, expanding support for a wider range of languages (think the rest of the C/JVM family and Python etc).
* 3-4 engineers transforming and exposing the LSIF data, optimizing queries to be as fast as possible.



## Qualifications

* Solid understanding of either C++ or Java with a focus on Clang or Javac fundamentals from a language tooling perspective.
* Experience with dependency management systems, and build systems coupled with a strong desire to learn new ones.
* Ability to communicate clearly and empathetically, especially in writing and documentation.
* Practiced at creating high quality software balanced with a pragmatic understanding of how to make appropriate tradeoffs (e.g., cut scope) to ship quickly and iterate when necessary.

## Nice-to-haves

* Experience in the developer productivity space.
* Experience or familiarity with [LSP](https://microsoft.github.io/language-server-protocol/) or [LSIF](https://lsif.dev/).
* Experience or familiarity with Bazel/Pants and distributed builds.
* Experience working on small high-performing teams, preferably tech startups.

## Not sure if this is you?

We want a diverse, global team, with a broad range of experience and perspectives. If this job sounds great, but you’re not sure if you qualify, apply anyway! We carefully consider every application, and will either move forward with you, find another team that might be a better fit, keep in touch for future opportunities, or thank you for your time.

## Learn more about us

To create a product that serves the needs of all developers, we are building a diverse [all-remote team](https://about.sourcegraph.com/company/remote) that is [distributed across the world](https://about.sourcegraph.com/company/team). Sourcegraph is an equal opportunity workplace; we welcome people from all backgrounds and communities.

We provide [competitive compensation](https://about.sourcegraph.com/handbook/people-ops/compensation) and [practical benefits](https://about.sourcegraph.com/handbook/people-ops/benefits-and-perks) to keep you happy and healthy so that you can do your best work.

Learn more about what it is like to work at Sourcegraph by reading [our handbook](https://about.sourcegraph.com/handbook).

## Interview process

1. The **Hiring Manager** reviews all the information you provided on your application to determine if you meet our qualifications for this role (if there is another open role we think you would be better qualified for, we will let you know).
2. A **Recruiter** sets up a 30 minute call to learn more about what you are looking for, tell you about Sourcegraph, and answer any questions that you have.
3. We set up a 1 hour interview with the **Hiring Manager**, who will tell you more about the role in the team. They will ask you about your past work and accomplishments and assess your suitability for the role.
4. We schedule the following additional interviews, in no particular order, across multiple days: 
   - TODO, (coding challenge or walk-through of a project?)
   - 1 hour **Team collaboration:** We ask you about how you work and communicate in a team setting, how you handle tricky situations, decisions you made, and what you'd do differently today.
   - 1 hour **Architecture** We give you an open problem statement and you walk us through how you would solve the problem.
   - 30 minutes **VP Engineering**
   - 30 minutes **CTO**
   - 30 minutes **CEO**
5. We check your references.
6. We make you a job offer.

We want to ensure Sourcegraph is an environment that suits your working style and empowers you to do your best work, so we are eager to answer any questions that you have about us at any point in the interview process.

#TODO Add Lever link here

Go back to the [careers page](https://about.sourcegraph.com/company/careers) for all open positions.

