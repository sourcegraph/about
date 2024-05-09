---
title: "Sourcegraph May 2024 release"
publishDate: 2024-05-09T10:00-07:00
description: "The latest Sourcegraph release includes a new point-in-time search filter for Code Search."
tags: [blog, release]
slug: "release/May-2024"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/may-2024/sourcegraph-may2024-release-image.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/release-post/may-2024/sourcegraph-may2024-release-image.png
changelogItems:
  - description: "Increased both the performance and the default timeout for language usage insights, which will significantly reduce pain for customers with large repos. Both are configurable using environment variables on the frontend container."
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

<br/>

### Point-in-time search filter for Code Search

<br/>

Sourcegraph 5.4.0 brings improvements to Code Search with a new search filter [rev:at.time()](https://sourcegraph.com/docs/code-search/queries#structural-search) that provides point-in-time searching. This allows for searching a repo’s state at a specific timestamp rather than at a specific commit, branch, or tag.


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

Code Insights chart drill-downs now utilize the new point-in-time search filter to more accurately represent the results that produced a data point on a chart. Previously a diff search was used to show the difference between a selected point in time on a chart and the one before it, but Code Insights can now show a repository’s state at that exact timestamp. This functionality is useful for those searching large repositories or repositories with lots of history.

<br/>

### Added Pkl syntax highlighting

<br/>

Sourcegraph 5.4.0 now supports syntax highlighting for the Pkl configuration language.


<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/release-post/may-2024/Pklsyntaxhighlighting.gif"
  alt="Toggling Pkl syntax highlighting"
/>


Sourcegraph 5.4.0 is now available and users self-hosting Sourcegraph can upgrade their instances. Sourcegraph Cloud users will receive this update within the coming days.
