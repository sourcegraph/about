---
title: 'Sourcegraph 3.40 release'
publishDate: 2022-05-20T10:00-07:00
description: 'Sourcegraph 3.40 introduces...'
tags: [blog, release]
slug: 'release/3.40'
published: false
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/3.40/sourcegraph-3-40-release.png
changelogItems:
  - description:
    url:
    category:
---

Sourcegraph 3.40 is now available! Here are some highlights from this release:

## Search your Python dependencies

Sourcegraph [dependencies search](https://docs.sourcegraph.com/code_search/how-to/dependencies_search) now supports python. You can now natively search your python dependencies to quickly determine if any dependency across your code has a security vulnerability. We currently have support for poetry.lock and pipfile.lock files. Check out [this example search on Sourcegraph Cloud](https://sourcegraph.com/search?q=context:global+repo:deps%28%5Egithub%5C.com/textualize/rich%24%29+&patternType=literal).
