---
title: 'Sourcegraph 3.32 release'
publishDate: 2021-09-20T10:00-07:00
description: 'Sourcegraph 3.32 introduces UPDATE'
tags: [blog, release]
slug: 'release/3.32'
published: false
heroImage:
socialImage:
changelogItems:
---

Sourcegraph 3.32 is now available! For this release, we introduced:

## Feature

## Code Insights is available in Public Beta

Code Insights is a new analytics tool that lets you track and understand what’s in your code and how it changes over time. You can find it via “Insights” in the main nav bar. It is free while in beta through 2021. When Code Insights is officially released, we may disable your use of it or charge for using it. We're still polishing Code Insights, so we appreciate if you [share any bugs or feedback about your experience](mailto:feedback@sourcegraph.com).

## Revisions sidebar
In the left sidebar of your search results, you can now see both branches and tags associated with a repository you’re viewing. When you add a search literal, such as “auth”, the search term will persist across searches, allowing you to quickly search between branches or tags for that search term.

## Result caching and improved back button behavior
We’re now caching search results so that when you click into a file from the search results page and then navigate back to the results, the search results will no longer be reordered.

## Compute API endpoint
For Code Insights and API users, we’ve exposed a new compute endpoint that allows you to extract and aggregate data based on a regex. For example, you can search for react as a dependency in `package.json` and group your results by version number.


