# Sourcegraph about.sourcegraph.com website

Uses Gatsby for rendering a static site that is built and deployed with Netlify.

## Requirements

Gatsby requires Node.js, and we recommend using [yarn](https://yarnpkg.com/en/) for installing packages.

## Developing locally

In a terminal, change into the `website` directory, and run:

```shell
yarn install
```

Then to serve the site, you have two options:

1. To serve the static (built) version of the website (good for final review):

```shell
yarn serve
```

2. To serve the site using the development server with auto-compiling and page reloading:

```shell
yarn start
```

## Publishing a blog post

We want and encourage everyone at Sourcegraph to contribute to the blog and publishing a blog post is as simple as merging an approved pull request with your blog content.

The process for publishing a blog post is:

1. Create the blog post file
1. Create a pull request
1. Confirm via the preview deployment site that everything is looking good (the `deploy/netlify — Deploy preview ready!` link in the checks section)
1. Get your pull request approved (preferably by someone on the marketing team)
1. Merge your pull request which will trigger an automatic production build and deploy

> NOTE: This documentation covers only the mechanics of adding a blog post, not considerations such as who needs to approve your post or when it should be published. As a general rule, reach out to the marketing team to give them a heads-up and use a Google doc to refine the content before adding it here.

### Adding a blog post

Add a blog post by creating a Markdown file in one of the `blogposts` child directories using the following template as a starting point:

```markdown
---
title: The title
description: A 300 character limit field for describing your post. Use this is you want to specially craft the excerpt shown on the index page. Uses the first 300 characters of text from your post if this field does not exist.
author: The author name
authorUrl: https://example.com/
publishDate: YYYY-MM-DDT10:00-07:00
tags: [blog]
slug: the-blog-slug
heroImage: /blog/thumbnail-image.jpg
published: true
---

Your markdown content goes here
```

The data between the `---` is called front matter and is used to provide post metadata. Important to note about this metadata, is that:

- The `description` field is optional and only needed if you want to craft the description for your post on the blog the index page
- The `authorUrl` field is optional but recommended
- The `tags` field should be left as `blog` until we incorporate filtering posts va tags
- The `publishDate` field must be in the exact format above. Don't worry about the time, just change the date.
- As long as `published` is true, your post will be visible, even if the value of `publishDate` is set in the future.

### Adding images

- Small images can be placed in the `website/static/blog` directory and have the url of `/blog/example-image.jpg` in your markdown.
- Large images, GIFs, and other binary assets should be uploaded to the `sourcegraph-assets` Google Cloud Storage bucket with `gsutil cp -a public-read local/path/to/myasset.png gs://sourcegraph-assets/`, with the image `src` being `https://storage.googleapis.com/sourcegraph-assets/myasset.png`.
- Make images as small as possible (aim for less than 200Kb).
- Images should be no larger than 1600px wide (if you want @2x retina quality) but often, this isn't needed and 800px is fine.
- JPEG images should be compressed at no larger than 80% quality to reduce file size.
- The [ImageOptim](https://github.com/ImageOptim/ImageOptim) app and CLI is great for significantly reducing the size of PNG files and JPEG files.

### Previewing your blog post

It's recommended to run the development site to preview your blog post locally.

Once your pull request is created, the last link in the checks list is a link to the preview deploy on Netlify which you use as the authoritative site to review your blog post.

### Getting your blog post live

Once your pull request has been approved and merged, a new build of the production site will be triggered and your post will be live in 5 minutes.

### Troubleshooting: If your blog post is not appearing on the blog index page

If you're not seeing your blog post on the index page, check that:

- Your blog post file has a `.md` file extension
- That it's in a child directory of the `blogposts` directory
- That your frontmatter data matches that of the template, e.g., make sure the `publishDate` format is correct

## Handbook

The [Sourcegraph handbook](https://about.sourcegraph.com/handbook) also lives in this repository. Soon it will be deployed together with the rest of the about.sourcegraph.com site.

The handbook uses [docsite](https://github.com/sourcegraph/docsite).

- To preview changes to handbook content locally, run `make serve`, and open http://localhost:5082.
- To check for broken links and other lint problems, run `make docsite-check`.
- See [detailed `docsite` instructions](handbook/editing.md#running-a-local-handbook-site).
