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

## Adding a blog post

Add a blog post by creating a new Markdown file in the `blogposts` directory. Front matter is used to provide metadata about the post, as well as determining whether the blog post is rendered or not (`published`).

The recommended flow for publishing a blog post is:

 - Create a PR with the new blog post Markdown file, setting `published` to `true`
 - Get your PR reviewed and approved
 - Once the PR is merged, Netlify will build and deploy the new static site, which takes around 5 minutes.

## Handbook

The [Sourcegraph handbook](https://about.sourcegraph.com/handbook) also lives in this repository. Soon it will be deployed together with the rest of the about.sourcegraph.com site.

The handbook uses [docsite](https://github.com/sourcegraph/docsite).

- To preview changes to handbook content locally, run `make serve`, and open http://localhost:5082.
- To check for broken links and other lint problems, run `make docsite-check`.
- See [detailed `docsite` instructions](handbook/editing.md#running-a-local-handbook-site).