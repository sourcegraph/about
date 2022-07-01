---
title: "Custom search pages on Sourcegraph Cloud"
authors:
  - name: Farhan Attamimi
publishDate: 2020-07-20T05:00-07:00
tags: [blog]
slug: custom-search-pages
heroImage: /blog/3.18-custom-search-pages.png
published: true
---

[Sourcegraph.com](https://sourcegraph.com/search) now has custom search pages for major open source communities. These pages provide targeted documentation with suggested queries specifically for users and contributors in each community, and searches are scoped by default to repositories relevant to that community.

This is a great resource that we hope will make these communities accessible to more developers, both experienced maintainers and newbies from all backgrounds.

Here are the communities currently supported:

<h2 className="text-center">Kubernetes</h2>
<Figure 
  alt="K8s search page" 
  src="https://sourcegraphstatic.com/blog/3.18/k8s-search-page.png"
  link={{ href: 'https://sourcegraph.com/kubernetes', alt: 'Sourcegraph search page for Kubernetes' }}
/>

<h2 className="text-center">Python 2 to Python 3 migration</h2>
<Figure
  alt="Python search page" 
  src="https://sourcegraphstatic.com/blog/3.18/resize-python-search-page.png"
  link={{ href: 'https://sourcegraph.com/refactor-python2-to-3', alt: 'Sourcegraph search page for refactoring Python 2 and Python 3' }}
/>

<h2 className="text-center">Go</h2>
<Figure 
  alt="Golang search page" 
  src="https://sourcegraphstatic.com/blog/3.18/golang-search-page.png"
  link={{ href: 'https://sourcegraph.com/golang', alt: 'Sourcegraph search page for the Go programming language' }}
/>

<h2 className="text-center">React Hooks</h2>
<Figure 
  alt="React search page" 
  src="https://sourcegraphstatic.com/blog/3.18/react-search-page.png"
  link={{ href: 'https://sourcegraph.com/react-hooks', alt: 'Sourcegraph search page for React Hooks' }}
/>

<h2 className="text-center">Android</h2>
<Figure 
  alt="Android search page"
  src="https://sourcegraphstatic.com/blog/3.18/resize-android-search-page.png"
  link={{ href: 'https://sourcegraph.com/android', alt: 'Sourcegraph search page for Android' }}
/>

...and more to come. If you are a member of another community that you think would benefit from having a custom Sourcegraph search page, [let us know](https://github.com/sourcegraph/sourcegraph/issues/new/choose)!

GitHub issue: [#11526](https://github.com/sourcegraph/sourcegraph/issues/11526)
