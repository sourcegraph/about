# Product roadmap

We strive for an outcome-based roadmap: each roadamp item should describe the problem we want to solve or outcome we want to achieve.

<!-- Gantt chart syntax documentation: https://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/gantt.html -->

<pre class="mermaid" data-rendered-width="150%" data-scroll-right="50%">
gantt
    title In progress work
    dateFormat YYYY-MM-DD
    axisFormat %b %d

section Milestones
    3.21 :active, release-3.21, 2020-09-21, 2020-10-20
    3.22 :        release-3.22, 2020-10-21, 2020-11-20

%% section Campaigns
%%     TO DO :active, after release-3.21, 30d

section Cloud
    User added code is indexed and searchable                 :done,   2020-09-23, 2020-10-07
    RFC 167 - Product license tiers                           :active, 2020-10-07, 14d
    Syncing repos is more scalable                            :active, 2020-10-07, 14d
    Metrics/monitoring in place                               :active, 2020-10-07, 14d
    GitHub app to simplify access to repositories (spike)     :        2020-10-21, 2d
    Webhooks to receive repo permissions and metadata (spike) :        2020-10-21, 2d

%% section Code intel
%%     TO DO :active, after release-3.21, 30d

section Web
    Existing Sourcegraph extensions discoverability           :done,    2020-09-14, 2020-09-28
    Browser extension discoverability improvements            :active, 2020-09-28, 14d
    Breadcrumbs unified                                       :         2020-10-12, 7d
    Build new and improved extensions                         :         2020-10-12, 14d
    Improve extensions development experience                 :         2020-10-26, 14d
    Sourcegraph web app navigation updates                    :         2020-11-09, 7d
    Code insights prototyping                                 :         2020-11-16, 14d
%%     TO DO :active, after release-3.21, 30d

%% section Search
%%     TO DO :active, after release-3.21, 30d
</pre>

## Campaigns

1. Gradually publish changesets ([RFC 228](https://docs.google.com/document/d/1A-5cbYGz1p1UB1eAFsIgpK5XDkvS7ZNAVKMdtBm_WY0/edit?ts=5f48b4b2#heading=h.trqab8y0kufp) changesetTemplate.published boolean)
1. Improved src-cli UX: better errors, debugging support, src-cli command to create skeleton spec
1. User credentials ([RFC 242](https://docs.google.com/document/d/1SqoWWm1xs82QibrWwYsXmpmgweN6EpcKt1qXrRBjjlU/edit)), which will allow non-site-admins to create campaigns
1. Allow multiple users to edit the same campaign
1. Versioning/releasing of src-cli with respect to sg/sg
1. Publish changesets as GitHub draft PRs (and same for other code hosts)

See [roadmap at a glance](https://docs.google.com/document/d/1zRTfK6mENKicfLwDaWgLk1dBvQVKDg-J7pwjGg8tpps/edit#) for more.

## Cloud

1. ✅ User added code is indexed
1. ✅ Users do not need to take any steps for a repository they add to be searchable
1. 🔄 [RFC 167: Product license tiers](https://docs.google.com/document/d/1XozQ4JINJqirdaG-XqGtboT2-PlIXPyBn6EwV7Q3pWI/edit?ts=5f0811cf#heading=h.trqab8y0kufp)
1. 🔄 Syncing repos is more scalable
1. 🔄 Metrics/monitoring in place to ensure a good experience
1. GitHub app to have users sign in with GitHub and select the repos/organizations that have access.
1. Use webhooks to receive updates on anything that is relevant to this user’s connection to GitHub
1. Equivalent things to GitLab and Bitbucket Cloud
1. User understands state and progress of their configured repositories and associated metadata
1. [UX TBD: New sign up/auth flow]
1. [UX TBD: Communicate state]

Unplanned:

- [Non-Git VCS](https://docs.google.com/document/d/1Y2xYbckAz5jlBePER_BarypeDfP3mjjX9bBOZm3ALqY/edit#heading=h.m60esa7uysvx)

## Code intel

TO DO

## Distribution

See [Distribution roadmap](https://github.com/sourcegraph/about/pull/1104).

## Search

TO DO

## Security

TO DO

## Web

1. ✅ Existing sourcegraph extensions are more discoverable [(RFC 209)](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#)
1. 🔄 The Sourcegraph browser extension is more discoverable and easy to congifure [(RFC 221)](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit)
1. Page title breadcrumbs are unified and useful 
1. Build new and improved Sourcegraph extensions communicate the value and opportunity of extensions
1. Building a sourcegraph extension is simpler and better documented
1. Sourcegraph web app navigation is clearer and intentionally designed
1. Code insights prototypes exist to help us answer questions and validate use cases 

