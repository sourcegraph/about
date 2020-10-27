# Goals

## Guiding principles

1. **Make it work**: Build the backend blocking work, and expose it (even in a roughly usable way) to the Sourcegraph team. We will be able to quickly surface any glaring issues and will have more thoughts around usability. Take shortcuts where possible (this is currently due to the team having fewer frontend resources).
   - Where possible, making it work and usable should be combined (avoid duplicate efforts), but if it's possible to separate the two in order to move things forward, we should!
1. **Make it usable**: The experience has been designed and thought through. We feel good about putting this in front of users, and they will find it valuable!
1. **Make it fast**: Now that users can try it, make sure the experience is fast for them (but it's better to have a slow working feature than a fast not-working one).
1. **Make it scale**: Make it work at large scale. Up until now we have been starting to grow awareness of the feature, so the number of users is starting to matter. It is better to have high demand and need to surge on scalability than to make an infinitely scalable unused feature.

## Goals

### User configured public code on Sourcegraph Cloud

**Problem:** Sourcegraph Cloud proactively indexes and refreshes only a fixed set of public repositories (e.g., top 100k public repositories on GitHub.com). Code outside of this set is lazily updated when a user visits that repository, and is not stored in our search index. This does not allow individual users to search over all the code that they might care about (e.g., as user might have one or more of their own repositories that are not in the top 100k on GitHub.com).

**Milestones:**

1. The Sourcegraph organization and team members can add public code from GitHub.com, GitLab.com, and Bitbucket Cloud.
   - Code is indexed.
1. Any user can add public code from GitHub.com, GitLab.com, and Bitbucket Cloud.
   - Connecting their first code host and adding their own public repos is intuitive and easy for new and existing users.
   - System activity and progress is easy to understand and doesn’t take too long.
     - Repo syncing
     - Repo indexing

### Private code on Sourcegraph Cloud

**Problem:** Customers who want to use Sourcegraph with their private code must setup and run a Sourcegraph instance on their own compute infrastructure. There are customers who want to use Sourcegraph but don't want to have to deploy and operate their own Sourcegraph instance and associated compute infrastructure. To host private code on Sourcegraph Cloud, we need to not only ensure the security of our product (which is important for on-premise deployments too), but we also have to ensure the security of our Sourcegraph Cloud infrastructure.

**Milestones:**

1. The Sourcegraph organization and team members can add private code to Sourcegraph Cloud.
   - No plaintext tokens or secrets anywhere (including gitserver .git/config remotes).
   - All private repository content are only decryptable by Sourcegraph services.
     - Gitserver.
     - Searcher and code intel caches.
     - Any other service that needs access to repository contents needs to be able to decrypt what it needs on the fly.
   - Searching the user's or organization's private code versus searching all Cloud code is intuitive.
   - **DEPENDENCY:** We first need to finish [user configured public code on Sourcegraph Cloud](#user-configured-public-code-on-sourcegraph-cloud).
1. Any user or organization can add private code to Sourcegraph Cloud for free before it's GA.
   - Authorization from code hosts is enforced (e.g., organizations, teams).
   - Repository visibility and permissions on Sourcegraph is intuitive.
   - Adding private repositories is part of the same flows as adding public repositories.
   - **DEPENDENCY**: We need to have [visibility into our attack surface](../security/index.md#visibility-into-sourcegraph-clouds-attack-surface).
1. Sourcegraph Cloud is Generally Available (GA).
   - Abuse protection: API rate limiting, DDoS mitigation, limiting user accounts.
   - Scalable syncing of permissions, repos, changesets.
   - High availability, SLOs, etc.
   - Billing and subscriptions.
   - [Confidence in our security model](../security/index.md#confidence-in-our-security-model).

### Backend infrastructure

Backend infrastructure goals are ad hoc as requests come up from customers or other teams. The Cloud team is responsible for scheduling and prioritizing these requests as they come up. See the [roadmap](../../product/roadmap.md#cloud) for planned items.
