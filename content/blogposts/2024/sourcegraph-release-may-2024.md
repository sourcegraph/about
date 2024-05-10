---
title: "Sourcegraph May 2024 release"
publishDate: 2024-05-10T10:00-07:00
description: "The latest Sourcegraph release includes a new point-in-time search filter for Code Search, plus new Code Insights drill-downs to see exactly what your codebase looked like at given timestamps."
tags: [blog, release]
slug: "release/May-2024"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/may-2024/sourcegraph-may2024-release-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/may-2024/sourcegraph-may2024-release-image.png
changelogItems:
  - description: "Improved the performance of language stats insights by 50-70%, significantly reducing pain for customers with large repos. The timeout for language stats insights has also been raised from 3 to 5 minutes. Both are configurable using environment variables on the frontend container."
    url: https://sourcegraph.com/docs/code_insights/explanations/administration_and_security_of_code_insights#language-stats-performance-configuration
    category: Code Insights
  - description: "Improved Zoekt CPU usage and scalability for customers with a large number of repos."
    url:
    category: Search
  - description: "Greatly improved git blame performance on large files, reducing the time it takes for a git blame on a large file to load from several seconds down to less than 500 milliseconds."
    url:
    category: Search
  - description: "Search Jobs now supports diff, commit, and path searches. Before, only file searches were supported."
    url:
    category: Source
 


---

Sourcegraph provides visibility into massive codebases across every code host, and with the release of 5.4.0 this extends across time, too. The new rev:at.time() filter gives you full context into how your codebase has evolved over time and lets you pinpoint code at any point in the past, while improved Code Insights charts now let you drill down to an exact timestamp.

<br/>

### Point-in-time search filter for Code Search

<br/>

Sourcegraph 5.4.0 brings improvements to Code Search with a new search filter [rev:at.time()](https://sourcegraph.com/docs/code-search/queries#structural-search) that provides point-in-time searching. This allows for searching a repo’s state at a specific timestamp rather than at a specific commit, branch, or tag.

The new filter works with both timestamps and natural language:

- `rev:at.time(1 year ago)`
- `rev:at.time(3 days ago)`
- `rev:at.time(2022-05-05)`


<Video 
  source={{
    mp4: 'blog/release-post/may-2024/rev-at-time'
  }}
  loop={true}
  title="Searching by the new point-in-time search filter"
/>



<br/>

### Improved Code Insights chart drill-downs

<br/>

Code Insights chart drill-downs now use the new point-in-time search filter to more accurately represent the results that produced a data point on a chart. Previously a diff search was used to show the difference between a selected point in time on a chart and the one before it, but Code Insights can now show a repository’s state at that exact timestamp. This functionality is useful for searching large repositories or repositories with lots of history.

<Video 
  source={{
    mp4: 'blog/release-post/may-2024/code-insights-rev_at-time-search'
  }}
  controls={true}
  title="Using the new point-in-time filter to drill down in a code insight"
/>



<br/>

### Added Pkl syntax highlighting

<br/>

Sourcegraph 5.4.0 now supports syntax highlighting for the Pkl configuration language.


<Video 
  source={{
    mp4: 'blog/release-post/may-2024/pkl-syntax-highlighting'
  }}
  loop={true}
  title="Pkl syntax highlighting in Sourcegraph"
/>

<br/>

Sourcegraph 5.4.0 is now available and users self-hosting Sourcegraph can upgrade their instances. Sourcegraph Cloud users will receive this update within the coming days.
