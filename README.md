# Sourcegraph about.sourcegraph.com website

Uses Gatsby for rendering a static site that is built and deployed with Netlify.


## Quick start

| What                                 | Command                                    |
| ------------------------------------ | ------------------------------------------ |
| Auto-preview about.sourcegraph.com   | `cd website && yarn install && yarn start` |
| Final review about.sourcegraph.com   | `cd website && yarn install && yarn serve` |
| Preview handbook                     | `make serve`                               |
| Check for broken links               | `make docsite-check`                       |

## Requirements

Gatsby requires Node.js, and we recommend using [yarn](https://yarnpkg.com/en/) for installing packages.

## Developing locally

[Click here to develop the handbook locally](#Handbook)

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

Learn how to [create and publish a blog post](https://about.sourcegraph.com/handbook/marketing/creating_blog_posts).

## Handbook

The [Sourcegraph handbook](https://about.sourcegraph.com/handbook) also lives in this repository. Soon it will be deployed together with the rest of the about.sourcegraph.com site.

The handbook uses [docsite](https://github.com/sourcegraph/docsite).

- To preview changes to handbook content locally, run `make serve`, and open http://localhost:5082.
- To check for broken links and other lint problems, run `make docsite-check`.
- See [detailed `docsite` instructions](handbook/editing.md#running-a-local-handbook-site).
