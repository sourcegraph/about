---
title: "Sourcegraph Code Search now supports Jupyter Notebook rendering"
publishDate: 2024-05-13T10:00-07:00
authors:
  - name: Alex Isken
    url: https://handbook.sourcegraph.com/team/#alex-isken
  - name: Justin Dorfman
    url: https://handbook.sourcegraph.com/team/#justin-dorfman
description: "Sourcegraph's Code Search now supports read-only rendering of Jupyter Notebooks (.ipynb files), allowing users to view rich text, and media directly in the file view. "
tags: [blog]
slug: "code-search-now-supports-jupyter-notebook-rendering"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/code-search-now-supports-jupyter-notebook-rendering/code-search-now-supports-jupyter-notebook-rendering-og.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/code-search-now-supports-jupyter-notebook-rendering/code-search-now-supports-jupyter-notebook-rendering-og.jpg
---

We are excited to announce Code Search now has read-only support for all `.ipynb` files aka Jupyter Notebooks. This update comes to Sourcegraph thanks to a community contribution from Dyma Solovei.

Jupyter Notebook (formerly known as the IPython Notebook) is an interactive computational environment in which you can combine code execution, rich text, and rich media.

Before this update, Sourcegraph rendered these files as JSON. Now, you can view rich text, and rich media directly in the file view. The only thing you won’t be able to do is execute code.

This update is available now on [sourcegraph.com/search](http://Sourcegraph.com/search), our public code search utility, and it’ll be coming soon to Sourcegraph Enterprise instances.

<br/>

<Video
  source={{
    mp4: 'blog/code-search-now-supports-jupyter-notebook-rendering/video_001'
  }}
  controls={true}
  loop={true}
  title="Searching by the new point-in-time search filter"
/>

<br/>

We are grateful for [Dyma Solovei](https://github.com/bevzzz)’s contribution. We can now close out this [~4-year-old issue](https://github.com/sourcegraph/sourcegraph/issues/10203). 

[Search for notebooks](https://sourcegraph.com/search?q=context:global+file:ipynb&patternType=keyword&sm=0) now!
