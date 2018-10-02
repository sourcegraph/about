---
title: ACLs in Sourcegraph
description: DESCRIPTION
authors:
  - Beyang Liu
startdate: 2018-10-02
releasedate: yyyy-mm-dd
publishdate: yyyy-mm-dd
published: false
---

This is a draft document about how we will add access control (ACLs) to Sourcegraph.

### Background/context

Prospective customers have requested ACLs in Sourcegraph. The lack of ACLs synced from either code host or SSO identity provider has prevented multiple customers from adopting Sourcegraph.

An ancillary benefit of ACLs is that it would require users to sign in to a given Sourcegraph instance, which means Sourcegraph instance admins could see more useful metrics about how that Sourcegraph instance is being used by developers.

### Goals

Goal: Solicit feedback from prospective customers on the proposed ACL design.

Goal: Implement ACL support for code host connections, starting with GitLab and GitHub.

1. Repository ACLs are sufficient for now. Later, we may also wish to enforce ACLs for fetching other data from code host APIs (e.g., users and orgs). The design proposed should permit such extensions in the future.
1. Adding a code host configuration to the site config should enforce that code host's ACLs on Sourcegraph.
1. ACL enforcement should add minimal overhead to request latency.
   - Corollary: There is an acceptable amount of lag (tunable) between changes to ACLs on the code host and those changes being enforced on Sourcegraph.
1. ACL check should be enforced in any application request for repository info, including search.
1. ACL behavior is well tested.

### Definition of success

## Solution

The proposed solution is broken down into the following components:

1. A way to tractably fetch ACL data from the code host
2. A way to map Sourcegraph users to code host users
3. A way to translate the code host ACL data into a form Sourcegraph understands
4. The actual enforcement mechanism in Sourcegraph, which should be robust and easy-to-understand

We limit ourselves to repo ACLs for now (i.e., don't care about org membership, user metadata, etc.)

### Implementation

### (1) Tractably fetching ACL data from code host

"Tractably fetching ACL data" within the scope of this project means "listing all repositories a user can read."

The best way to support this is the use of user impersonation tokens. If a code host offers an API to create such tokens, then we just need to do the following:

1. Create a user impersonation token for the code host.
1. Issue a call to the "repositories.list" code host endpoint using the token.

Support for impersonation tokens varies among the different code hosts we support. Here's what we'll do for each code host:

- GitHub Enterprise
  - Impersonation token: https://developer.github.com/enterprise/2.14/v3/enterprise-admin/users/#create-an-impersonation-oauth-token
- GitLab on-prem
  - Impersonation token: https://docs.gitlab.com/ee/api/#impersonation-tokens
- Bitbucket Server
  - Does not yet support impersonation tokens, inquiry posted here: https://community.developer.atlassian.com/t/any-plans-to-support-impersonation-tokens/23062
- Gitolite: Gitolite permissions can be fetched directly via the SSH API.
- AWS CodeDeploy
  - No impersonation token, but seems like it should be possible through IAM + CodeCommit API.
- GitHub.com, Bitbucket.org, GitLab.com
  - No impersonation token.
  - Less likely that we'll have customers who want ACL support for these.
  - Each of these is an OAuth provider, so we can require login via OAuth.

### (2) A way to map Sourcegraph users to code host users

In any Sourcegraph deployment, there are at most three sets of identity:

- SSO provider (e.g., Okta, OneLogin, Google)
- Code Host
- Sourcegraph

SSO provider and code host are sometimes the same (e.g., login via GitHub.com OAuth).

The SSO provider is the source of identity truth. Both the code host and Sourcegraph will receive a user's identity upon login through the SSO provider.

In cases where SSO provider != code host, there is no direct way to map Sourcegraph user to code host user. However, the following condition is almost always true: `(code host username == SSO username) && (SSO username == Sourcegraph username)`.

We therefore assume a Sourcegraph user will have the same username on the code host. Every code host supports looking up users by username, so we now have a way to map Sourcegraph user to code host user.

This assumption should be documented publicly.

### (3) A way to translate the code host ACL data into a form Sourcegraph understands

A single-instance service serves as middleman between Sourcegraph and the code host API.

The service will cache code host ACLs for a period of time determined by a site config option.

The service will expose the following endpoints over REST:

```go
type ACLClient interface {
    ListRepositories(userID int32, codeHostURL string) []api.RepoURI
    HasRepository(userID int32, repo api.RepoURI) bool
}
```

### (4) ACL enforcement mechanism

#### Guarantee

In order to enforce repository ACLs, we claim it is sufficient to enforce that any get/list of repository metadata is guarded by an ACL check.

That means checks will be done at the `db` layer (the `repos.getBySQL` and `repos.List` methods).

The assumption here is that there is no code path that allows a request to return repository data without calling into `repos.getBySQL` or `repos.List` in the `db` package.

#### Efficiency

In a given request lifetime, `repos.getBySQL` or `repos.List` may be invoked redundantly. To avoid unnecessary checks (each of which requires a network call to the ACL service), we'll cache a list of authorized repositories in the request context. The ACL check function will first consult the list of repositories already authorized in the context list before calling out to the ACL service.

This means each frontend HTTP request will potentially include making an HTTP request to the internal ACLs service, which we think is acceptable because in practice we already make such a request to `repo-updater` on every frontend HTTP request that touches repo data.

### Rough roadmap, including "stretch" tasks

TODO

### Link to issues

### Known concerns/risks

1. Creating impersonation tokens requires the source token have "sudo"-like permissions on the code host. Requiring such a token for code host connections (i.e., prohibiting the use of personal access tokens that lack the permissions to create impersonation tokens) may become a blocker to Sourcegraph installation. E.g., the Sourcegraph early adopter wants to spin up an instance for their team, but needs to get approval to obtain a code host sudo token, whereas before they couldn't just used a personal access token.
1. Enforcing ACLs on GitHub.com, Bitbucket.org, and GitLab.com would require supporting them as OAuth login methods (and requiring OAuth login before a user can access a Sourcegraph instance).
1. Should the service responsible for fetching ACL data from code hosts (the ACLs service) be `repo-updater` (which is already responsible for talking directly to code hosts) or a separate service?
1. There is no near-term plan to support Bitbucket Server.
1. Don't yet have a fleshed outplan for supporting AWS CodeCommit.
