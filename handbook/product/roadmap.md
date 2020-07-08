# Product roadmap

<pre class="mermaid" data-rendered-width="150%" data-scroll-right="50%">
gantt
    title In progress work
    dateFormat YYYY-MM-DD

section Milestones
    3.18 :active, release-3.18, 2020-06-21, 2020-07-20
    3.19 :release-3.19, 2020-07-21, 2020-08-20

section Campaigns
    Add GitLab support :active, 2020-06-21, 12d
    Frontend - New campaigns flow :active, 2020-06-21, 12d
    Backend - New campaigns flow :active, 2020-06-21, 12d

section Cloud
    Index non-master branches :2020-05-01, 60d
    Storing secrets securely :2020-06-29, 30d
    RFC 174 - HA postgres for Sourcegraph Cloud :2020-07-23, 10d
    Scaling repo-updater :2020-06-22, 30d
    Enforce license tiers :2020-06-22, 10d

section Code intel
    Clangd LSIF indexer :active, 2020-06-19, 20d
    Configure LSIF auto-indexing in Sourcegraph :active, 2020-06-20, 0d
    Incremental indexing, scalable find-nearest queries :active, 2020-06-20, 0d
    Improve hover tooltips to include more info on state/source of code intel :active, 2020-06-30, 0d

section Web
    Improve confidence in shipping releases by building integration test infrastructure, :2020-06-21, 30d

section Search
    RFC 159 - interesting collections of code and languages :2020-06-01, 30d
    Enable full hierarchical search with AND/OR queries :2020-06-20, 30d
</pre>

## Campaigns

### In progress

- Add GitLab support :active, 2020-06-21, 12d
- Frontend: New campaigns flow :active, 2020-06-21, 12d
- Backend: New campaigns flow :active, 2020-06-21, 12d

### Next

- RFC 157: Make campaigns accessible to non-site-admins
- Fix all bugs, documentation and Needs improvement in the user feedback
- RFC 157: Incorporate repository permissions into campaigns
- Design spike to simplify campaigns creation flow
- Investigate enabling for all users
- Allow users to see campaigns on Sourcegraph.com
- Allow drafting of changesets for unsupported code hosts
- Integrate into the search workflow so that users can create campaigns directly
- Add more examples in the documentation and ready-to-run campaign actions
- Incorporate examples into the web UI and CLI

## Cloud

### In progress

- Index non-master branches :2020-05-01, 40d
- Storing secrets securely :2020-06-29, 30d
- RFC 174 - HA postgres for Sourcegraph Cloud :2020-07-23, 10d
- Scaling repo-updater :2020-06-22, 30d
- Enforce license tiers :2020-06-22, 10d

### Next

- Support for non-Git VCS :2020-07-08, 0d
- Streaming search support :2020-06-22, 45d
- RFC 162 - Devolve the site admin role :2020-09-01, 0d
- RFC 52 - Other security concerns :2020-08-01, 0d
- Spike - investigate Gitaly as a replacement for gitserver :2020-08-01, 2d
- RFC 161 - Authentication management :2020-08-01, 0d
- Search personal public repos, pinned repos, starred :2020-08-10, 0d
- API rate limiting :2020-07-15, 21d
- Rebalancing support for gitserver :2020-08-10, 0d
- Repo metadata indexing :2020-07-27, 14d
- Stats badge (SVG) that is dynamically updated with usage over time charts :0d
- Abuse protection of all public endpoints :2020-07-15, 0d
- Integrating with cloudflare :7d
- Pass repository IDs :2020-07-20, 0d
- HA redis for Sourcegraph Cloud :2020-07-30, 7d
- RFC 163: Support private repositories :2020-09-01, 0d
- Support for Replication Factor > 1 (HA) for gitserver :2020-09-01, 0d
- Making APIs take IDs as well as names :7d
- Make all clients take IDs :7d
- RFC 178: Sourcegraph cloud authorization model :2020-09-01, 0d

## Code intel

### In progress

- Clangd LSIF indexer :active, 2020-06-19, 20d
- Configure LSIF auto-indexing in Sourcegraph :active, 2020-06-20, 0d
- Incremental indexing, scalable find-nearest queries :active, 2020-06-20, 0d
- Improve hover tooltips to include more info on state/source of code intel :active, 2020-06-30, 0d

### Next

- Expand languages and use cases to automatically index :2020-07-06, 0d
- Java LSIF indexer :0d
- Dart LSIF indexer :0d

## Distribution

[Distribution roadmap](https://github.com/sourcegraph/about/pull/1104)

## Search

### In progress

- RFC 159 - interesting collections of code and languages :2020-06-01, 30d
- Enable full hierarchical search with AND/OR queries :2020-06-20, 30d

### Next

- Search and explore usage examples :0d
- RFC 160 - Change search scopes :2020-07-06, 0d
- RFC 174 - Community pages :2020-07-07, 0d
- Connect about site to Sourcegraph.com :2020-06-27, 3d
- See statistics about usage over time for a specific package, usage pattern, or group of repositories :0d
- Scaling of Zoekt :2020-06-20, 0d
- "Project search" link to help users find real-world usage examples of the library :0d
- RFC 164 - Compute transitive dependencies :2020-09-01, 0d

## Web

### In progress

- Improve confidence in shipping releases by building integration test infrastructure, :2020-06-21, 30d

### Next

- Search and explore usage examples :0d
- Enable full hierarchical search with AND/OR queries :2020-06-20, 0d
- RFC 160 - Change search scopes :2020-07-06, 0d,
- RFC 159 - interesting collections of code and languages :active, 2020-06-01, 0d
- RFC 174 - Community pages :2020-07-07, 0d
- Connect about site to Sourcegraph.com :2020-06-27, 3d
- See statistics about usage over time for a specific package, usage pattern, or group of repositories :0d
- Scaling of Zoekt :2020-06-20, 0d
- "Project search" link to help users find real-world usage examples of the library :0d
- RFC 164 - Compute transitive dependencies :2020-09-01, 0d
