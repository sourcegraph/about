# Product roadmap

We strive for an outcome-based roadmap: each roadamp item should describe the problem we want to solve or outcome we want to achieve.

<!-- Gantt chart syntax documentation: https://mermaid-js.github.io/mermaid/#/gantt -->

<pre class="mermaid" data-rendered-width="150%" data-scroll-right="50%">
gantt
    title In progress work
    dateFormat YYYY-MM-DD
    axisFormat %b %d

section Milestones
    3.18 :done, release-3.18, 2020-06-21, 2020-07-20
    3.19 :active, release-3.19, 2020-07-21, 2020-08-20
    <!-- 3.20 :release-3.20, 2020-08-21, 2020-09-20 -->

section Campaigns
    New campaigns flow :active, 2020-06-21, 2020-08-21

section Cloud
    Allow users and organizations to create external services :active, 2020-07-20, 30d
    Store and handle external service and external account secrets securely :active, 2020-07-20, 30d

section Code intel
    TO DO, :active, after release-3.18

section Web
    Improve confidence in shipping releases, :active, 2020-06-21, 60d

section Search
    TO DO, :active, after release-3.18
</pre>

## Campaigns

### Product priorities

1. TO DO

## Cloud

### Product priorities

1. [Non-Git VCS](https://docs.google.com/document/d/1Y2xYbckAz5jlBePER_BarypeDfP3mjjX9bBOZm3ALqY/edit#heading=h.m60esa7uysvx)
1. Multi-tenancy

## Code intel

### Product priorities

1. Precise code intelligence (Go, TypeScript) works for customer scale and deployment requirements
1. Precise code intelligence for C++
1. Precise code intelligence for Java
1. Use precise intelligence to supplement ranked search results
1. Provide the dependency graph for a repository

## Distribution

[Distribution roadmap](https://github.com/sourcegraph/about/pull/1104)

## Search

### Product priorities

1. Evolve our search query syntax (OpenGrok parity)
1. Search home page
1. Version contexts v2
1. Deterministic and ranked search results
1. Repogroup pages for enterprise
1. Saved search expressions (previously search scopes)
1. Search over my public repositories, repositories I have starred, and public repositories of organizations I am affiliated with.
1. Search history
1. [Saved searches/search notifications (PD 12)](https://docs.google.com/document/d/1D9Useap2CuPJmed7Htdoho4nyzM0MMT0LJL_MlhoMv4/edit)
1. Ranked search results

  - Consistent search results - find a balance between speed and consistent ordering. It can be confusing to get different results each time a search is run, and we should show users the things they care about (prioritize recent repositories, popular repositories, or repositories that are owned by the team they are part of).

1. Precise code intel aware search

## Web

### Product priorities

1. Webapp consistency
1. The extension registry is confusing and does not communicate it's value
1. Many developers do not realize Sourcegraph has a browser extension
1. A few high quality non-language intelligence extension would help communicate the value and opportunity of Sourcegraph extensions
- Sourcegraph extensions - we have the infrastructure in place and a few good (non-code intelligence) extensions that are enjoyed by many users. We would love to continue to add additional context to code from other services and make those integrations top-notch.
- Improving UX of the browser extension to make it feel like a natural part of the code host
1. Code insights
- Add support for more code hosts with the browser extension (e.g., Bitbucket Cloud, Gerrit).
- Provide search capabilities from the code host
- IDE integrations
  - Powering language support, including cross repository for organizations with thousands of repositories, or organizations with very large monorepos where individual projects are checked out locally.
  - Adding more context to code using code intelligence, extensions, etc.
