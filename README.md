# Sourcegraph about.sourcegraph.com website

Uses Gatsby for rendering a static site that is built and deployed with Netlify.

## Quick start

| What                               | Command                                    |
| ---------------------------------- | ------------------------------------------ |
| Auto-preview about.sourcegraph.com | `cd website && yarn install && yarn start` |
| Final review about.sourcegraph.com | `cd website && yarn install && yarn serve` |

## Requirements

Gatsby requires Node.js, and we recommend using [yarn](https://yarnpkg.com/en/) for installing packages.

## Developing locally

Developing the static site locally is separate from developing the handbook. [Read the Handbook section](#Handbook) to learn how to develop the handbook locally.

In a terminal, change into the `website` directory, and run the install script:

```shell
./script/install.sh
```
This will check that you have the correct version of Node installed, and install the dependeny versions pinned in the lockfile.

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

We want and encourage everyone at Sourcegraph to contribute to the blog. If you'd like to write for the blog, please check out how to [propose a blog post](https://handbook.sourcegraph.com/marketing/content/editorial#editorial-process) in the Editorial handbook.

## Handbook

The Sourcegraph handbook now lives in https://github.com/sourcegraph/handbook and is hosted under https://handbook.sourcegraph.com.
