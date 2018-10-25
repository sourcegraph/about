# Respecting repository permissions from your code host

Sourcegraph Enterprise now applies repository permissions from your code host when users search and browse code on Sourcegraph. If a user is not permitted to view a repository on your code host, they will not see any search results from that repository and will be unable to browse it.

To support this, we're introducing some new features:

- A user account on your Sourcegraph instance can be linked to a user account on a code host (and SSO authentication provider).
- Search results are drawn only from repositories that the user is authorized to view.
- All other operations, such as browsing a repository, also respect the user's authorization level.
- The [GraphQL API](https://docs.sourcegraph.com/api) applies the authenticated user's authorization level when performing queries and mutations.

Initially [GitLab project permissions](https://docs.gitlab.com/ee/development/permissions.html) are supported. We plan to support permissions for [other code hosts](TODO) soon.

<!-- TODO, WIP -->