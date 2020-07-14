# Product roadmap

We strive for an outcome-based roadmap: each roadamp item should describe the problem we want to solve or outcome we want to achieve.

<!-- Gantt chart syntax documentation: https://mermaid-js.github.io/mermaid/#/gantt -->

<pre class="mermaid" data-rendered-width="150%" data-scroll-right="50%">
gantt
    title In progress work
    dateFormat YYYY-MM-DD
    axisFormat %b %d

section Milestones
    3.18 :active, release-3.18, 2020-06-21, 2020-07-20
    3.19 :release-3.19, 2020-07-21, 2020-08-20

section Campaigns
    Add GitLab support :active, 2020-06-21, 12d
    Frontend - New campaigns flow :active, 2020-06-21, 12d
    Backend - New campaigns flow :active, 2020-06-21, 12d

section Cloud
    Index non-master branches :2020-05-01, 70d
    Storing secrets securely :2020-06-29, 30d
    RFC 174 - HA postgres for Sourcegraph Cloud :2020-06-21, 10d
    Scaling repo-updater :2020-06-21, 30d
    Enforce license tiers :2020-06-21, 10d

section Code intel
    Clangd LSIF indexer :active, 2020-06-19, 20d
    Configure LSIF auto-indexing in Sourcegraph :active, 2020-06-20, 0d
    Incremental indexing, scalable find-nearest queries :active, 2020-06-20, 0d
    Improve hover tooltips to include more info on state/source of code intel :active, 2020-06-30, 0d

section Web
    Improve confidence in shipping releases, :active, 2020-06-21, 30d
    Quick UX wins, :done, 2020-06-21, 7d

section Search
    RFC 159 - custom search pages :2020-05-01, 70d
    Full hierarchical search :2020-06-20, 30d
</pre>

## Campaigns

### In progress/next

- Add GitLab support :active, 2020-06-21, 12d
- Frontend: New campaigns flow :active, 2020-06-21, 12d
- Backend: New campaigns flow :active, 2020-06-21, 12d

### Soon

- [RFC 157](#) - Make campaigns accessible to non-site-admins
- Fix all bugs, documentation and Needs improvement in the user feedback
- [RFC 157](#) - Incorporate repository permissions into campaigns
- Design spike to simplify campaigns creation flow
- Investigate enabling for all users
- Allow users to see campaigns on Sourcegraph.com
- Allow drafting of changesets for unsupported code hosts
- Integrate into the search workflow so that users can create campaigns directly
- Add more examples in the documentation and ready-to-run campaign actions
- Incorporate examples into the web UI and CLI

## Cloud

### Product priorities

- [Non-Git VCS](https://docs.google.com/document/d/1Y2xYbckAz5jlBePER_BarypeDfP3mjjX9bBOZm3ALqY/edit#heading=h.m60esa7uysvx)
- Multi-tenancy
- Ranking search results

### In progress/next

\* Estimates based on Keegan days

- Index non-master branches :2020-05-01, 70d
- Storing secrets securely :2020-06-29, 30d
- [RFC 174](#) - HA postgres for Sourcegraph Cloud :2020-07-23, 10d
- Scaling repo-updater :2020-06-22, 30d
- Enforce license tiers :2020-06-22, 10d

### Soon

- Support for non-Git VCS :2020-07-08, 0d
- Streaming search support :2020-06-22, 45d
- [RFC 162](#) - Devolve the site admin role :2020-09-01, 0d
- [RFC 52](#) - Other security concerns :2020-08-01, 0d
- Spike - investigate Gitaly as a replacement for gitserver :2020-08-01, 2d
- [RFC 161](#) - Authentication management :2020-08-01, 0d
- Search personal public repos, pinned repos, starred :2020-08-10, 0d
- API rate limiting :2020-07-15, 21d
- Rebalancing support for gitserver :2020-08-10, 0d
- Repo metadata indexing :2020-07-27, 14d
- Stats badge (SVG) that is dynamically updated with usage over time charts :0d
- Abuse protection of all public endpoints :2020-07-15, 0d
- Integrating with cloudflare :7d
- Pass repository IDs :2020-07-20, 0d
- HA redis for Sourcegraph Cloud :2020-07-30, 7d
- [RFC 163](#) - Support private repositories :2020-09-01, 0d
- Support for Replication Factor > 1 (HA) for gitserver :2020-09-01, 0d
- Making APIs take IDs as well as names :7d
- Make all clients take IDs :7d
- [RFC 178](#): Sourcegraph cloud authorization model :2020-09-01, 0d

## Code intel

### In progress/next

- Clangd LSIF indexer :active, 2020-06-19, 20d
- Configure LSIF auto-indexing in Sourcegraph :active, 2020-06-20, 0d
- Incremental indexing, scalable find-nearest queries :active, 2020-06-20, 0d
- Improve hover tooltips to include more info on state/source of code intel :active, 2020-06-30, 0d

### Soon

- Expand languages and use cases to automatically index :2020-07-06, 0d
- Java LSIF indexer :0d
- Dart LSIF indexer :0d

OLD

- Users know precise code intelligence exists and how to set it up
- Precise code intel is adopted in private instances
- Precise code intelligence services are robust

- ⏳ Java LSIF indexer works for [$CUSTOMER](https://app.hubspot.com/contacts/2762526/company/407948923)
- ⏳ Go LSIF indexer works for [$CUSTOMER](https://app.hubspot.com/contacts/2762526/company/814799425)
- ⏳ Dart LSIF indexer works for [$CUSTOMER](https://app.hubspot.com/contacts/2762526/company/557475882), see [Slack thread](https://sourcegraph.slack.com/archives/CHXHX7XAS/p1571382911099300)
- 🏃‍♂️ Support LSIF at customers ([RFC 115 PRIVATE](https://docs.google.com/document/d/1yllbVc5ocQuNNv_vnQ1a-yQcEz-wKiWIHwkUspUzgFg/edit))
- Create a multi-language indexer that auto-detects project structure (Michael)
- Make an campaign that adds LSIF configuration for all repositories (Michael)
- Java LSIF indexer cross-repo support (Chris)
  - Don’t prioritize until we get feedback from Java
- Go-to-definition from private Sourcegraph instance to open source libraries on Sourcegraph.com
- Implement symbol search using data from LSIF
- Implement dependency search using data from LSIF
- The most referenced code that you’ve written
- Preload and style differently the tokens in the current file that have code intel

To prioritize:

- Enable definition and references via search (not by position)

## Distribution

[Distribution roadmap](https://github.com/sourcegraph/about/pull/1104)

## Search

### Product priorities



### In progress/next

- [RFC 159](https://docs.google.com/document/d/16ANfXRaJmsiYCPZSPlyAc8Zu-sY6plO6_eRDZ09C_SY/edit#heading=h.trqab8y0kufp) - custom search pages :active, 2020-05-01, 70d
  - Create interesting collections of code and languages so new users can search over code they care about
- Full hierarchical search :active, 2020-06-20, 30d
  - Enable full hierarchical search with AND/OR queries

### Soon

- Search and explore usage examples :0d
- [RFC 160](#) - Change search scopes :2020-07-06, 0d
- [RFC 174](#) - Community pages :2020-07-07, 0d
- Connect about site to Sourcegraph.com :2020-06-27, 3d
- See statistics about usage over time for a specific package, usage pattern, or group of repositories :0d
- Scaling of Zoekt :2020-06-20, 0d
- "Project search" link to help users find real-world usage examples of the library :0d
- [RFC 164](#) - Compute transitive dependencies :2020-09-01, 0d
- Improve search performance on Sourcegraph.com
- Better handling of errors and failure states

## Web

### Product priorities

1. The extension registry is confusing and does not communicate it's value
1. Many developers do not realize Sourcegraph has a browser extension
1. A few high quality non-language intelligence extension would help communicate the value and opportunity of Sourcegraph extensions
1. Webapp consistency
1. 

### In progress/next

- Improve confidence in shipping releases by building integration test infrastructure, :active, 2020-06-21, 30d
- Quick UX wins to improve web experience, :done, 2020-06-21, 7d

### Soon

- Search and explore usage examples :0d
- Enable full hierarchical search with AND/OR queries :2020-06-20, 0d
- [RFC 160](#) - Change search scopes :2020-07-06, 0d,
- [RFC 159](#) - interesting collections of code and languages :active, 2020-06-01, 0d
- [RFC 174](#) - Community pages :2020-07-07, 0d
- Connect about site to Sourcegraph.com :2020-06-27, 3d
- See statistics about usage over time for a specific package, usage pattern, or group of repositories :0d
- Scaling of Zoekt :2020-06-20, 0d
- "Project search" link to help users find real-world usage examples of the library :0d
- [RFC 164](#) - Compute transitive dependencies :2020-09-01, 0d
- Reduce the complexity of adding your first repositories
- Code insights
- Sourcegraph extensions drive engagement among developers and engineering leaders
- Lower the barrier of entry to using the browser extension & native integrations

## Wishlist

- Sourcegraph extensions - we have the infrastructure in place and a few good (non-code intelligence) extensions that are enjoyed by many users. We would love to continue to add additional context to code from other services and make those integrations top-notch.
- Browser extension improvements
  - Firefox warnings - getting the extension to meet the standards for Firefox add-ons (some background)
  - Improving UX of the extension to make it feel like a natural part of the code host
- Consistent search results - find a balance between speed and consistent ordering. It can be confusing to get different results each time a search is run, and we should show users the things they care about (prioritize recent repositories, popular repositories, or repositories that are owned by the team they are part of).
- Add support for more code hosts with the browser extension (e.g., Bitbucket Cloud, Gerrit).
- Code host integrations
  - Provide search capabilities from the code host
- IDE integrations
  - Powering language support, including cross repository for organizations with thousands of repositories, or organizations with very large monorepos where individual projects are checked out locally.
  - Adding more context to code using code intelligence, extensions, etc.
