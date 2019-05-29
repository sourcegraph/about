# Sourcegraph about.sourcegraph.com website

Uses Gatsby for rendering a static site that is built and deployed with Netlify.

## Requirements

Gatsby requires Node.js and we recommend using [yarn](https://yarnpkg.com/en/) for installing packages.

## Developing locally

In a terminal, change into the `website` directory, then run:

```shell
yarn install
```

Then to serve the site, you have a two options.

To serve the static (built) version of the site (good for final review):

```shell
yarn serve
```

To serve the site using the development server with auto-compiling and page reloading:

```shell
yarn start
```

## Adding a blog post

Add a blog post by creating a new Markdown file in the `blogposts` directory. Front matter is used to provide metadata about the post, as well determining whether the blog post is rendered or not (`published`).

The recommended flow for publishing a blog post is:

 - Create a PR with the new blog post Markdown file, setting `published` to `true`
 - Get your PR reviewed and approved
 - Once the PR is merged, Netlify will build and deploy the new static site which takes around 5 minutes.
