---
title: "A new model for Sourcegraph integrations" 
description: "Sourcegraph is making updates to our integrations and extensions with the upcoming September release of Sourcegraph 4.0." 
authors:
    - name: Ryan Scott
publishDate: 2022-08-16T18:00+02:00
tags: [blog]
slug: integrations-update
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/integrations-update/integrations-update-hero.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/integrations-update/integrations-update-social.png
published: true
---

With the upcoming launch of Sourcegraph 4.0 in September, 2022, we're investing in a new model for integrations that will support deeper integrations with our code intelligence platform and make it easier to surface code context during the ideal moments in a developer's workflow. 

This decision means that after the September 2022 release of Sourcegraph 4.0 the following changes will go into effect: 

* Top used extensions, including code navigation, git-extras, open-in-editor, and search-exports, will become part of the core functionality. These enhancements will provide developers code context while staying in the flow within their preferred tools. 
* By default, you won't be able to access the extensions registry to use or enable extensions. Note: If you still need access to extensions, you can enable a feature flag to do so until early 2023.
* You will no longer be able to create extensions on a private registry unless you have enabled the feature flag.

Please note that this **does not** impact our IDE extensions, which will continue to allow you to search and navigate across all of your repositories without ever leaving your IDE or checking them out locally. Our browser extensions will continue to have code navigation support, but other functionality to the code host will be discontinued (e.g. code coverage information).

Integrations continue to be an important part of our code intelligence platform, and we will be investing in an even more powerful framework for the future. 

Please view our [docs](https://docs.sourcegraph.com/extensions) or reach out to your dedicated Customer Engineer for more information. If you'd like to learn more about what's shipping in Sourcegraph 4.0, check out this PR: [https://github.com/sourcegraph/about/pull/5623/files](https://github.com/sourcegraph/about/pull/5623/files). 
