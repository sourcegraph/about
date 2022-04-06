---
title: "Sourcegraph 3.20 release"
publishDate: 2020-09-20T10:00-07:00
description: "Sourcegraph 3.20 is released."
tags: [blog, release]
slug: "release/3.20"
published: true
changelogItems:
  - description: "Site admins can now force a specific user to re-authenticate on their next request or visit."
    url: https://github.com/sourcegraph/sourcegraph/pull/13647
    category: Admin
  - description: "To define repository groups (`search.repositoryGroups` in global, org, or user settings), you can now specify regular expressions in addition to single repository names."
    url: https://github.com/sourcegraph/sourcegraph/pull/13730
    category: Search
  - description: "Files and directories can now be excluded from search by adding the file `.sourcegraph/ignore` to the root directory of a repository."
    url: https://github.com/sourcegraph/sourcegraph/pull/13690
    category: Search
  - description: "Structural search syntax now allows regular expressions in patterns. Also, `...` can now be used in place of `:[_]`."
    url: https://docs.sourcegraph.com/code_search/reference/structural
    category: Search
  - description: "Experimental: A new homepage UI for Sourcegraph Server shows the user their recent searches, repositories, files, and saved searches. It can be enabled with `experimentalFeatures.showEnterpriseHomePanels`."
    url: https://github.com/sourcegraph/sourcegraph/issues/13407
    category: Search
  - description: "Campaigns are enabled by default for all users. Site admins may view and create campaigns; everyone else may only view campaigns."
    url: "https://docs.sourcegraph.com/@3.20/user/campaigns#site-admin-configuration-for-campaigns"
    category: Campaigns
  - description: "Negated content search is now also supported for unindexed repositories. Previously it was only supported for indexed repositories."
    url: https://github.com/sourcegraph/sourcegraph/pull/13359
    category: Search
  - description: "`rev:` is available as alternative syntax of `@` for searching revisions instead of the default branch"
    url: https://github.com/sourcegraph/sourcegraph/pull/13133
    category: Search
  - description: "Sourcegraph now watches its configuration files (when using external files) and automatically applies the changes to Sourcegraph's configuration when they change. For example, this allows Sourcegraph to detect when a Kubernetes ConfigMap changes."
    url: https://docs.sourcegraph.com/admin/config/advanced_config_file
    category: Admin
---
