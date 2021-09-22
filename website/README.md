# Sourcegraph website

This repository contains source code for the Sourcegraph website, ([https://about.sourcegraph.com](https://about.sourcegraph.com)). The site is built using the [GatsbyJS](https://gatsbyjs.org) static site generator.

## Development

`npm install`

`npm start` - Start development server on http://localhost:8000.

## Building

Generate production build:

`npm run build`

Generate a production build of the site and serve it locally on http://localhost:9000. Use this when doing a final review:

`npm run serve`

## Blog

Blog posts live in [`../blogposts`](../blogposts) directory. The following frontmatter is required for a blog post:

```
---
title: Example blog post
author: Your Name
publishDate: yyyy-mm-ddT00:00-07:00
tags: [
  blog
]
slug: url-pathname-to-your-blog-post
heroImage: path or url to image file
published: boolean
---
```

There are two optional frontmatter fields used to specify meta-specific title and description:

```
seoTitle: Example title
seoDescription: Example description
```

If these are not present, the `title` and `description` are used for these meta tags.

Blog posts are visible on if published is set to `true`.

**Important:** when creating hyperlinks to pages within https://about.sourcegraph.com, never link with the base URL https://about.sourcegraph.com.

Correct: \[example\]\(/example)

Incorrect: \[example\]\(https://about.sourcegraph.com/example).

### Blog post images

Blog post images (both hero and inline) belong in the `/website/static/blog/` directory, and the path to the image in your post is `/blog/your-image.png`.

Images should be sized and compressed appropriately to optimize the file size without noticeably degrading the image quality. [ImageOptim](https://imageoptim.com/) is a good (and free) image compression tool.

### Previewing blog post drafts

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
