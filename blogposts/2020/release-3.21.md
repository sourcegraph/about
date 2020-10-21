---
title: "Sourcegraph 3.21 release"
publishDate: 2020-10-20T10:00-07:00
description: "Sourcegraph 3.21 is released."
tags: [blog, release]
slug: "release/3.21"
published: true
changelogItems:
  - description: "The new GraphQL API query field `namespaceByName(name: String!)` makes it easier to look up the user or organization with the given name. Previously callers needed to try looking up the user and organization separately."
    url: 
    category: API
  - description: Changesets created by campaigns will now include a link back to the campaign in their body text.
    url: https://github.com/sourcegraph/sourcegraph/issues/14033
    category: Campaigns
  - description: Users can now preview commits that are going to be created in their repositories in the campaign preview UI.
    url: https://github.com/sourcegraph/sourcegraph/pull/14181
    category: Campaigns
  - description: If emails are configured, the user will be sent an email when important account information is changed. This currently encompasses changing/resetting the password, adding/removing emails, and adding/removing access tokens.
    url: https://github.com/sourcegraph/sourcegraph/pull/14320
    category: Admin
  - description: "A subset of changesets can now be published by setting the `published` flag in campaign specs [to an array](https://docs.sourcegraph.com/@main/campaigns/campaign_spec_yaml_reference#publishing-only-specific-changesets), which allows only specific changesets within a campaign to be published based on the repository name."
    url: https://github.com/sourcegraph/sourcegraph/pull/13476
    category: Campaigns
  - description: Homepage panels are now enabled by default.
    url: https://github.com/sourcegraph/sourcegraph/issues/14287
    category: 
  - description: "The most recent ping data is now available to site admins via the Site-admin \u003e Pings page."
    url: https://github.com/sourcegraph/sourcegraph/issues/13956
    category: Admin
  - description: Homepage panel engagement metrics will be sent back in pings.
    url: https://github.com/sourcegraph/sourcegraph/pull/14589
    category: 
  - description: Homepage now has a footer with links to different extensibility features.
    url: https://github.com/sourcegraph/sourcegraph/issues/14638
    category: 
  - description: "Added an onboarding tour of Sourcegraph for new users. It can be enabled in user settings with `experimentalFeatures.showOnboardingTour`"
    url: https://github.com/sourcegraph/sourcegraph/pull/14636
    category: 
  - description: "Repository GraphQL queries now support an `after` parameter that permits cursor-based pagination."
    url: https://github.com/sourcegraph/sourcegraph/issues/13715
    category: API
# Changed
  - description: "Interactive search mode is now disabled by default because the new plain text search input is smarter. To reenable it, add `{ \"experimentalFeatures\": { \"splitSearchModes\": true } }` in user settings."
    url: 
    category: Search
  - description: "The extension registry has been redesigned to make it easier to find non-default Sourcegraph extensions."
    url: 
    category: 
  - description: Tokens and similar sensitive information included in the userinfo portion of remote repository URLs will no longer be visible on the Mirroring settings page.
    url: https://github.com/sourcegraph/sourcegraph/pull/14153
    category: Repositories
  - description: The sign in and sign up forms have been redesigned with better input validation.
    url: 
    category: 
  - description: "Kubernetes admins mounting [configuration files](https://docs.sourcegraph.com/admin/config/advanced_config_file#kubernetes-configmap) are encouraged to change how the ConfigMap is mounted. See the new documentation. Previously our documentation suggested using subPath. However, this lead to Kubernetes not automatically updating the files on configuration change."
    url: https://github.com/sourcegraph/sourcegraph/pull/14297
    category: Admin
  - description: "The precise code intel bundle manager will now expire any converted LSIF data that is older than `PRECISE_CODE_INTEL_MAX_DATA_AGE` (30 days by default) that is also not visible from the tip of the default branch."
    url: 
    category: 
  - description: "`SRC_LOG_LEVEL=warn` is now the default in Docker Compose and Kubernetes deployments, reducing the amount of uninformative log spam."
    url: https://github.com/sourcegraph/sourcegraph/pull/14458
    category: 
  - description: Permissions data that were stored in deprecated binary format are abandoned. Downgrade from 3.21 to 3.20 is OK, but to 3.19 or prior versions might experience missing/incomplete state of permissions for a short period of time.
    url: https://github.com/sourcegraph/sourcegraph/issues/13740
    category: 
  - description: "The query builder page is now disabled by default. To reenable it, add `{ \"experimentalFeatures\": { \"showQueryBuilder\": true } }` in user settings."
    url: 
    category: 
  - description: "The GraphQL `updateUser` mutation now returns the updated user (instead of an empty response)."
    url: 
    category: API
# Fixed
  - description: Git clone URLs now validate their format correctly.
    url: https://github.com/sourcegraph/sourcegraph/pull/14313
    category: 
  - description: "Usernames set in Slack `observability.alerts` now apply correctly."
    url: https://github.com/sourcegraph/sourcegraph/pull/14079
    category: Admin
  - description: Path segments in breadcrumbs get truncated correctly again on small screen sizes instead of inflating the header bar.
    url: https://github.com/sourcegraph/sourcegraph/pull/14097
    category: 
  - description: GitLab pipelines are now parsed correctly and show their current status in campaign changesets.
    url: https://github.com/sourcegraph/sourcegraph/pull/14129
    category: Campaigns
  - description: Fixed an issue where specifying any repogroups would effectively search all repositories for all repogroups.
    url: https://github.com/sourcegraph/sourcegraph/pull/14190
    category: Search
  - description: Changesets that were previously closed after being detached from a campaign are now reopened when being reattached.
    url: https://github.com/sourcegraph/sourcegraph/pull/14099
    category: Campaigns
  - description: "Previously large files that match the site configuration [search.largeFiles](https://docs.sourcegraph.com/admin/config/site_config#search-largeFiles) would not be indexed if they contained a large number of unique trigrams. We now index those files as well. Note: files matching the glob still need to be valid utf-8."
    url: https://github.com/sourcegraph/sourcegraph/issues/12443
    category: Search
  - description: "Git tags without a `creatordate` value will no longer break tag search within a repository."
    url: https://github.com/sourcegraph/sourcegraph/issues/5453
    category: Search
  - description: Campaigns pages now work properly on small viewports.
    url: https://github.com/sourcegraph/sourcegraph/pull/14292
    category: Campaigns
  - description: Fix an issue with viewing repositories that have spaces in the repository name
    url: https://github.com/sourcegraph/sourcegraph/issues/2867
    category: Repositories
# Removed
  - description: "Syntax highlighting for GraphQL, INI, TOML, and Perforce files has been removed [due to incompatible/absent licenses](https://github.com/sourcegraph/sourcegraph/issues/13933). We plan to add it back in the future."
    url: "https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+add+syntax+highlighting+for+develop+a+"
    category: API
  - description: "Search scope pages (`/search/scope/:id`) were removed."
    url: 
    category: Search
  - description: "User-defined search scopes are no longer shown below the search bar on the homepage. Use the `quicklinks` setting instead to display links there."
    url: https://docs.sourcegraph.com/user/personalization/quick_links
    category: Search
  - description: "The explore page (`/explore`) was removed."
    url: 
    category: 
  - description: The sign out page was removed.
    url: 
    category: 
  - description: "The unused GraphQL types `DiffSearchResult` and `DeploymentConfiguration` were removed."
    url: 
    category: Search
  - description: "The deprecated GraphQL mutation `updateAllMirrorRepositories`."
    url: 
    category: API
  - description: "The deprecated GraphQL field `Site.noRepositoriesEnabled`."
    url: 
    category: API
  - description: Total counts of users by product area have been removed from pings.
    url: 
    category: 
  - description: "Aggregate daily, weekly, and monthly latencies (in ms) of code intelligence events (e.g., hover tooltips) have been removed from pings."
    url: 
    category: 
---