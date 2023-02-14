---
title: 'Change a single character in hundreds of GitHub repos while staying in control'
authors:
  - name: Dax McDonald 
    url: https://twitter.com/cloudmarooned 
publishDate: 2023-02-15T10:00-07:00
description: 'How we upgraded from actions/checkout@v2 to actions/checkout@v3 for GitHub Actions across all our repositories.'
tags: [blog]
slug: 'change-a-single-character-in-hundreds-of-github-repos-while-staying-in-control'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/sg-og-Image-batch-changes-dax.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/sg-og-Image-batch-changes-dax.png
---

**Sourcegraph is a code intelligence tool that goes far beyond search. In this post, we'll look at how we can update a single character across hundreds of repositories using Sourcegraph's [Batch Changes](https://about.sourcegraph.com/batch-changes) feature.**

First, here's _why_ we're updating a single character across almost all of our repositories and why you might want to do the same.

## The most common GitHub action is about to be deprecated

Back in September 2022, GitHub sent a gentle reminder: Node 12 reached end-of-life in April 2022, and by the way, [GitHub Actions running on Node 12 will stop working at some point in "Summer 2023"](https://github.blog/changelog/2022-09-22-github-actions-all-actions-will-begin-running-on-node16-instead-of-node12/).

No big deal, right? Let's all just update our GitHub Actions that use Node 12 to run on Node 16.

Do you know how many GitHub Actions use Node 12?

**All of them.**

Well, _almost_ all of them. The most common step across _all_ public GitHub Actions is to start by checking out the repository using `actions/checkout`. The most common _version_ of this action, version 2, runs on Node 12.

That is why you may have noticed a deprecation warning from GitHub below each of your actions' output recently:

> Node.js 12 actions are deprecated. Please update the following actions to use Node.js 16: actions/checkout@v2. For more information see: https://github.blog/changelog/2022-09-22-github-actions-all-actions-will-begin-running-on-node16-instead-of-node12/.

## How many repos are we talking about here?

Searching the open-source repositories indexed by Sourcegraph, we see that at least 520k actions in about 200k repositories use `actions/checkout@v2`. You can also [search Sourcegraph](https://sourcegraph.com/search?q=context:global+actions/checkout%40v2+count:600000&patternType=standard&sm=0&groupBy=repo) to see for yourself.

![Screenshot of Sourcegraph interface showing search results for files containing "uses: actions/checkout@v2". The result count, 521.0k, is highlighted.](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image2.png)

Even if GitHub were to publish a point release of `actions/checkout@v2`, tens of thousands of actions still use specific versions of `checkout@v2.*`.

![Screenshot of Sourcegraph interface showing search results for files containing "uses: actions/checkout@v2.". The result count shows 12.2k.](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image4.png)

Updating a small dependency like this might not be a problem if you maintain only a handful of repositories, but we've seen the numbers: Even the most staunch monorepo proponents have dozens of supporting repositories.

And solo open-source maintainers will need to update hundreds of repos, like [here](https://sourcegraph.com/search?q=context%3Aglobal+repo%3Agithub.com%2Fgeerlingguy%2F*+actions%2Fcheckout%40v2+lang%3Ayaml&groupBy=repo), [here](https://sourcegraph.com/search?q=context:global+repo:github.com/sindresorhus/*+actions/checkout%40v2+lang:yaml&patternType=standard&sm=0&groupBy=repo), [and here](https://sourcegraph.com/search?q=context:global+repo:github.com/simonw/*+actions/checkout%40v2+lang:yaml&patternType=standard&sm=0&groupBy=repo)—and that's only counting their public repositories.

Is this continuous integration's Y2K moment? Will half a million GitHub Actions fail all at once sometime in 2023?

Unlikely. We tested `actions/checkout@v2` on Node 16 and the action seems to work as expected. We'd still like to silence the deprecation warnings, though, and keep our dependencies up to date.

## How to update GitHub's checkout action

This is the easy part: Replace `actions/checkout@v2` with `actions/checkout@v3`. In other words, replace a `2` with a `3`.

The hard part: Do this for each workflow in each of your repositories.

## Finding the right tool to update hundreds of repositories

This kind of dependency update is clearly a feather in the monorepo's cap but let's not get into that. One thing both sides of that argument agree on is that *with the right tooling, either monorepo or polyrepo can work*.

Whenever we see this argument crop up and we hear "…although, with the right tooling…", we're sitting here going: "Hey! That's us! We are the right tooling!".

![Leonardo DiCaprio as Rick Dalton from Once Upon a Time In Hollywood, pointing at something he recognized on the TV](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image3.jpg)

Because we know Sourcegraph is the best tool for this job, we'll eat our own dog food. Updating multiple repos at once is nothing new, though, so let's look at some other options at our disposal.

The most basic version of this would be to write a shell script to:

1. Clone each of your repositories to a local machine.
2. Run something like `sed -i -e 's|actions/checkout@v2|actions/checkout@v3|'` for each YAML file in your `.github/workflows` folder.
3. Commit the change on a new branch.
4. Git push the branch to GitHub.
5. Log in to GitHub and merge each repository's new branch.

This script could be simplified by adding in the GitHub CLI, which would enable us to open a pull request for each repository and merge the changes on our `main` branches.

Even more useful than the GitHub CLI is [multi-gitter](https://github.com/lindell/multi-gitter), a Golang program purpose-built to update multiple repositories from a single machine using the command line. Multi-gitter provides some feedback on how an update is progressing and has a dry-run option—super helpful! This would work well if you're a solo developer or if your team is happy to entrust this task to a single person.

We've also heard of closed-source solutions to this problem. For instance, Lyft is said to have had an internal tool called "[refactorator](https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b#:~:text=tool%20internally%20called%20%E2%80%9C-,refactorator,-%E2%80%9D%20which%20does%20just)", which managed changes on multiple repositories. This tool also opened pull requests and tracked the merge status of changes. It is worth noting that [Lyft now uses Sourcegraph](https://about.sourcegraph.com/case-studies/lyft-monolith-to-microservices) instead.

On to our tool of choice: Sourcegraph Batch Changes.

## Sourcegraph Batch Changes

Sourcegraph's [Batch Changes](https://about.sourcegraph.com/batch-changes) feature offers a declarative tool to find and modify code across all of your repositories.

You describe a batch change as a YAML file, called the Batch Spec, and match this specification with a code search across your repositories. Sourcegraph then executes your changes by running the Docker containers of your choice.

Sourcegraph Batch Changes includes all the conveniences you'd expect, including dry runs, opening or auto-merging pull requests, status tracking, notifications, and even burndown charts. All of this can be shared within a team, to keep everyone in the loop.

We have comprehensive [documentation](https://docs.sourcegraph.com/batch_changes/explanations/introduction_to_batch_changes) on how to use Batch Changes and a library of [tutorials](https://docs.sourcegraph.com/batch_changes/tutorials).

The GitHub Actions update makes an excellent example, so if you'd like a quick overview of how to use this feature, follow along below and update your actions while you're at it.

## How to use Sourcegraph Batch Changes to update GitHub's checkout action

The rest of this guide assumes that you already use [Sourcegraph cloud](https://about.sourcegraph.com/cloud) or that you have Sourcegraph [installed](https://docs.sourcegraph.com/). You should also have [Docker](https://docs.docker.com/get-docker/) and the [Sourcegraph CLI](https://docs.sourcegraph.com/cli) installed locally.

![A screenshot of the Sourcegraph UI, highlighting the Batch Change menu item, and the button to create a batch change.](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image6.png)

In Sourcegraph, click on **Batch Changes** in the top menu, then on **Create batch change**.

![A screenshot of the Sourcegraph UI, showing the configuration page for a new batch change.](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image5.png)

Select your namespace and enter a descriptive name for this batch change (use only letters, numbers, \_, and -).

Set the visibility for this batch change (for now, as of January 2023, all batch changes are visible to your workspace).

Click **Create**.

![A screenshot of the Sourcegraph UI, showing the batch spec page for a new batch change, with the spec field highlighted.](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image8.png)

Now we'll update the batch spec, a YAML file that specifies exactly what a batch change should do.

Start your batch change by searching for the repositories in your Sourcegraph account that need to be updated.

You can filter repositories using a query for matching files.

In our case, we'll filter repositories with `repo:^github\.com/sourcegraph/.*$` to make sure we're only changing repositories in the Sourcegraph organization on GitHub.

We'll further filter these repositories to only include repos that have at least one YAML file in the `.github/workflows/` directory that matches the pattern `actions/checkout@v2`.

Our Batch Change will work on repositories that match this query: `repo:^github.com/sourcegraph/.*$ file:^.github/workflows/.*\.y[a]?ml$ actions/checkout@v2`.

We'll add this to our Batch Change spec as:

```yaml
on:
  - repositoriesMatchingQuery: repo:^github.com/sourcegraph/.*$ file:^.github/workflows/.*\.y[a]?ml$ actions/checkout@v2
```

We can test our search on Sourcegraph by entering the query in the search box. You can see this search on the public index by following this link: [Batch Change repo filter search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub.com/sourcegraph/%5B%5Cw%5C-%5D%2B%24+file:%5E.github/workflows/%5B%5Cw%5C-%5D%2B.y%5Ba%5D%3Fml%24+actions/checkout%40v2&patternType=standard&sm=0&groupBy=repo).

Next, we'll need to tell Sourcegraph how to make the change. For this dependency update, we'll use the [`comby/comby` Docker image](https://hub.docker.com/r/comby/comby) to start a container that runs the [comby](https://comby.dev/) pattern matching and code refactoring tool.

Earlier, in our basic example, we mentioned using sed.

While sed would have been up to this particular task, we prefer to use comby when making large-scale code changes. For YAML, comby works as a pattern matcher (much like sed), but when dealing with most [popular programming languages](https://comby.dev/docs/overview#:~:text=Does%20it%20work%20on%20my%20language%3F), comby provides language-aware search. For instance, comby knows how to parse comments when doing code searches. If you're interested in learning more about structural code search, see our blog post about [Going beyond regular expressions with structural code search](https://about.sourcegraph.com/blog/going-beyond-regular-expressions-with-structural-code-search) by comby creator Rijnard van Tonder.

We'll use comby to replace any line that contains `uses: actions/checkout` with `uses: actions/checkout@v3`. This will capture cases where a point release of checkout version 2 was used too.

As with the rest of the change spec, this section accepts [variables](https://docs.sourcegraph.com/batch_changes/references/batch_spec_templating) from the changeset. We'll use the variable `${{ join repository.search_result_paths " " }}` to list all the files in our search result.

Here's the `run` command for our comby container as part of the change spec's `steps` section:

```yaml
steps:
  # In each repo, iterate over search results files using templating
  # https://docs.sourcegraph.com/batch_changes/references/batch_spec_templating
  - run: |
      for file in "${{ join repository.search_result_paths " " }}";
      do
        comby 'uses: :[x~actions\/checkout.*]' 'uses: actions/checkout@v3' -in-place $file
      done
    container: comby/comby
```

We'll also need to tell Sourcegraph what to name the new branch for our change, what to enter for the commit message and pull request description, and to add a title to the pull requests.

Sourcegraph Batch Changes accepts a [changeset template](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#changesettemplate) to specify these details. This template also takes [variables](https://docs.sourcegraph.com/batch_changes/references/batch_spec_templating) from the batch change.

The changeset template for this update could look like this:

```yaml
changesetTemplate:
  title: |
    ci: update to actions/checkout@v3
  body: |
    Update to actions/checkout@v3 to avoid deprecation warning

    ### Test plan
    Created as part of batch change: ${{ batch_change_link }}
  branch: batch-changes/update-checkout-v3
  commit:
    message: batch changes - update checkout v2 to v3
```

This is the complete change spec we'll use:

```yaml
name: Upgrade_actions_checkout_v2-v3
description: Apply comby to multiple files to update to actions/checkout@v3

on:
  - repositoriesMatchingQuery: repo:^github.com/sourcegraph/.*$ file:^.github/workflows/.*\.y[a]?ml$ actions/checkout@v2

steps:
  # In each repo, iterate over search results files using templating
  # https://docs.sourcegraph.com/batch_changes/references/batch_spec_templating
  - run: |
      for file in "${{ join repository.search_result_paths " " }}";
      do
        comby 'uses: :[x~actions\/checkout.*]' 'uses: actions/checkout@v3' -in-place $file
      done
    container: comby/comby

changesetTemplate:
  title: |
    ci: update to actions/checkout@v3
  body: |
    Update to actions/checkout@v3 to avoid deprecation warning

    ### Test plan
    Created as part of batch change: ${{ batch_change_link }}
  branch: batch-changes/update-checkout-v3
  commit:
    message: batch changes - update checkout v2 to v3
```

Test the search by clicking **Preview workspaces**.

If your search correctly matches the repositories you'd like to update, click on **Download for src-cli**.

![Sourcegraph UI with the Download spec button highlighted](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image7.png)

In the popup, click **Download spec** to download the change spec and save it on your local machine.

You can preview your changeset by running the following command in the terminal: 
`src batch preview -f upgrade-actions-checkout-v-2-v-3.batch.yaml`.

This command will download the necessary Docker images and start a local container to test the change for your repositories. The command's output includes a link to a changeset preview on Sourcegraph. Follow this link to preview your batch change.

If the change looks correct and you would like to proceed, click on **Apply** or run `src batch apply` in the terminal. Your local machine will now commit and push the changes, then open pull requests to merge your changes into your main branch.

![Sourcegraph UI showing change sets for a batch change](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image1.png)

While the change is being applied and after Sourcegraph opens pull requests, you can visit the batch change work page in Sourcegraph to check on progress.

![Sourcegraph UI showing a burn-down chart for a batch change](https://storage.googleapis.com/sourcegraph-assets/blog/dax-feb-2023/image11.png)

Click on **Burndown chart** to see progress as a chart indicating how your change is being merged across repositories.

If like us, you're updating hundreds of repositories, this will take some time to complete.

With Sourcegraph saving you countless hours of development time, this is the perfect opportunity to catch up on White Lotus, practice some ukulele, [or both](https://www.youtube.com/watch?v=CZgxjsk_COk)!

## Where to find more information about Batch Changes

- [Quickstart for Batch Changes](https://docs.sourcegraph.com/batch_changes/quickstart) from our documentation is the best place to get started.

- Read [Saving dozens of engineering hours by batch-changing hundreds of repositories at a time](https://about.sourcegraph.com/blog/batch-changing-hundreds-of-repositories-at-typeform) to learn how Typeform used Sourcegraph Batch Changes.

- Find [detailed how-tos](https://docs.sourcegraph.com/batch_changes/how-tos) in the Sourcegraph Batch Changes documentation.

- The [Batch Changes FAQ](https://docs.sourcegraph.com/batch_changes/references/faq) covers some common questions.
