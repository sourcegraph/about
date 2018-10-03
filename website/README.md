# Sourcegraph website

Test commit

This repository contains source code for the Sourcegraph marketing website, ([https://about.sourcegraph.com](https://about.sourcegraph.com)). The site is built using the [GatsbyJS](https://gatsbyjs.org) static site generator.

### Development

`npm install`

`npm start` - Start development server on http://localhost:8000.

### Building

Generate production build:

`npm run build`

Generate a production build of the site and serve it locally on http://localhost:9000:

`npm run serve`

## Documentation pages

Currently, all our documentation pages live in the `../docs` directory.

When writing documentation and website copy, please refer to the [styleguide](STYLEGUIDE.md).

Checklist for docs adding a docs page:

- [ ] Create Markdown file in `docs/`, with the frontmatter filled out appropriately.
  - [ ] Title
  - [ ] Permalink -- this is the exact path which will
- [ ] If necessary, add your new page to the appropriate sidebar by adding a DocsSidebarItem to `ServerSidebar.tsx`, `DataCenterSidebar.tsx`, or `IntegrationsSidebar.tsx`.

To update the site configuration documentation, copy the [site.schema.json](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/schema/site.schema.json) file from the sourcegraph/sourcegraph repository into [/utils/](/utils). The relevant markdown file will be generated as part of the build step during deployment. There is no need to run `npm run config-docs` manually.

Currently, the site settings docs ([/data/docs/server/config/settings.md](/data/docs/server/config/site-settings.md)) are manually created/edited.

```
cp $GOPATH/src/github.com/sourcegraph/sourcegraph/schema/site.schema.json utils/
```

**Important:** when creating hyperlinks to pages within https://about.sourcegraph.com, never link include the base url.

Correct: \[example\]\(/example)

Incorrect: \[example\]\(https://about.sourcegraph.com/example).

### Blog

Blog posts live in [`../blogposts`](../blogposts) directory. The following frontmatter is required for a blog post:

```
---
title: 'Example blog post'
author: 'Your Name'
publishDate: 2016-05-30T00:00-07:00
tags: [
  "blog"
]
slug: url-pathname-to-your-blog-post
heroImage: path or url to image file
published: boolean
---
```

Blogposts will appear on our site if published is set to true.

**Important:** when creating hyperlinks to pages within https://about.sourcegraph.com, never link with the base URL https://about.sourcegraph.com.

Correct: \[example\]\(/example)

Wrong: \[example\]\(https://about.sourcegraph.com/example).

#### Previewing blog post drafts

If you want to preview a blog post as it would appear on our site, set `published` to `true`, and run `npm serve` to view your blog post locally.

## Markdown pages

Simple markdown-based pages such as [security](https://about.sourcegraph.com/security), [terms](https://about.sourcegraph.com/terms), and [privacy](https://about.sourcegraph.com/privacy) live in the [`/data`](./data directory.

## Site structure

[GatsbyJS docs on site structure and React components](https://www.gatsbyjs.org/docs/building-with-components/)

Gatsby builds our site into the `/public` folder, which is the directory that gets pushed to the `gh-pages` branch and gets deployed.

- All website pages are in `/pages`. Adding a TypeScript file under `/pages` will create a page at a route equivalent to the filename (ex: `/pages/example.tsx` will create `https://about.sourcegraph.com/example`).

- `gatsby-config` contains all the [gatsby plugins](https://www.gatsbyjs.org/docs/plugins/) that are used in the site.

- `gatsby-node` handles all logic for generating blog and content pages.

- `html.tsx` wraps the entire Gatsby body. This generally does not need to be changed other than to add global elements to the site `<head>`.

- `/layouts` hold layouts that wrap all page components. `/layouts/index.tsx` is the default layout. You can specify the layout to use for generated pages in `gatsby-node.js`.

- `/components` holds reusabel React components.

- `/static` holds all static assets (images, gifs, scripts). These get moved into `/public` at build time. Because these are moved into `/public`, when calling these static items (for example, in blog posts or other js files), the import path will be at the root (ex: `/static/blog-images/FileTree.gif` is loaded by calling `/blog-images/FileTree.gif`).
