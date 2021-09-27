# Sourcegraph about.sourcegraph.com website

Uses Gatsby for rendering a static site that is built and deployed with Netlify.

## Quick start

| What                               | Command                                    |
| ---------------------------------- | ------------------------------------------ |
| Auto-preview about.sourcegraph.com | `cd website && yarn install && yarn start` |
| Final review about.sourcegraph.com | `cd website && yarn install && yarn serve` |
| Preview handbook                   | `make serve`                               |
| Check for broken links             | `make docsite-check`                       |

## Requirements

Gatsby requires Node.js, and we recommend using [yarn](https://yarnpkg.com/en/) for installing packages.

## Developing locally

Developing the static site locally is separate from developing the handbook. [Read the Handbook section](#Handbook) to learn how to develop the handbook locally.

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

We want and encourage everyone at Sourcegraph to contribute to the blog. If you'd like to write for the blog, please check out how to [propose a blog post](https://about.sourcegraph.com/handbook/marketing/content/editorial#editorial-process) in the Editorial handbook.

## Handbook

The [Sourcegraph handbook](https://about.sourcegraph.com/handbook) also lives in this repository. This is currently deployed in GCP.

The handbook uses [docsite](https://github.com/sourcegraph/docsite).

- To preview changes to handbook content locally, run `make serve` from the root of the about repository (`/about`), and open http://localhost:5082.
- To check for broken links and other lint problems, run `make docsite-check`.
- See [detailed `docsite` instructions](handbook/editing.md#running-a-local-handbook-site).
