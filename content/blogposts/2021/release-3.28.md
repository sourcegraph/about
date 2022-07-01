---
title: 'Sourcegraph 3.28 release'
publishDate: 2021-05-24T10:00-07:00
description: 'The Sourcegraph 3.28 release includes new security enhancements and the redesigned extensions registry.'
tags: [blog, release]
slug: 'release/3.28'
published: true
changelogItems:
  - description: 'Added security enhancements, including 1) only site admins can list users on an instance, 2) repository permissions can now be enabled for site admins via the `authz.enforceForSiteAdmins` setting, 3) site admins can no longer view user added code host configuration, and 4) site admins cannot add access tokens for any user by default.'
    url: 'https://github.com/sourcegraph/sourcegraph/pull/20619'
    category: Admin
  - description: 'Bulk comments on many changesets are now available in Batch Changes.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20361
    category: Batch Changes
  - description: 'Steps in batch specs can now have an `if:` attribute to enable conditional execution of different steps.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20701
    category: Batch Changes
  - description: 'Default reviewers are now added to Bitbucket Server PRs opened by Batch Changes.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20551
    category: Batch Changes
  - description: 'The extension registry main page has a new visual design that better conveys the most useful information about extensions, and individual extension pages have better information architecture.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20822
    category: Extensions
  - description: 'Added `select:commit.diff.added` and `select:commit.diff.removed` for `type:diff` search queries. These selectors return commit diffs only if a pattern matches in `added` (respectively, `removed`) lines.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20328
    category: Search
  - description: 'Added 15 additional language autocompletions for the `lang:` filter in the search bar.'
    url: https://github.com/sourcegraph/sourcegraph/pull/20535
    category: Search
---

Sourcegraph 3.28 is now available! For this release, we added new security enhancements and redesigned the extensions registry.

## Extensions registry update

<Figure
  src="https://sourcegraphstatic.com/blog/3.28/before_after_extensions_registry_redesign.jpg" 
  alt="before and after screenshot of the registry redesign"
/>

Extensions allow you to connect all your other tools to get functionality like test coverage, 1-click open file in editor, custom highlighting, and information from your other favorite services all in one place on Sourcegraph. The [extensions registry main page](https://sourcegraph.com/extensions?category=All) has a new visual design that better conveys the most useful information about extensions. Individual extension pages now have better information architecture.

## Batch changes

### Introducing bulk actions

Managing large number of changesets requires a lot of manual work. Having to manually comment, close or merge hundreds of changesets takes time: spending 15 seconds adding a comment on 500 changesets manually would result in 2 hours of work (and killing your motivation for the day).

Bulk actions allow users to automate taking an action on many changesets at a time. In this release, we are introducing a first bulk action: **comments**. Common use cases include:

- nudge repository owners to merge starving changesets "This batch change is now 54% merged, consider merging yours!"
- add links to docs, or add instructions to all the changesets in a batch change
- [Read more](https://docs.sourcegraph.com/batch_changes/how-tos/bulk_operations_on_changesets)

<p><video autoPlay loop muted playsInline style={{width:'600px'}}>
  <source src="https://sourcegraphstatic.com/blog/3.28/batch-changes-bulk-action-comment.mp4" type="video/mp4" data-cookieconsent="ignore"/>
 </video></p>

In future releases we will add other bulk actions: merge, close and more.

Bulk actions makes Batch Changes very convenient for tracking and managing changesets, including for changesets that have not been created with Batch Changes. To manage a large number of existing changesets, you could [import them into a batch change](https://docs.sourcegraph.com/batch_changes/how-tos/tracking_existing_changesets), and use bulk actions.

### Conditional execution in batch specs

Our philosophy is that the easier it is to automate complex cases, the more the default behaviour will be to automate changes instead of defaulting to "it's too complex, I'll do it manually". By making things easy and clean, we encourage automation.

Sometimes you need to run different batch changes steps depending on the repository, to take edge cases into account or make complex changes. For example:

- step 1: do something on some repositories, do something else on others
- step 2: run a linter, except on a specific repository

Conditional execution of steps was already possible to some extent by passing `steps.repository.name` to the container in a step, having the container handle the logic, and exit if no change was needed on that repository. It was clumsy, though (the repository filtering logic is hidden in the container's code) and unnecessarily slow (the container would have to run to execute the if, even if it would then just exit and produce no diff).

In this release, we are introducing [`steps.if`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#steps-if) to allow for `steps` to run conditionally.

```text
steps:
  - if: ${{ eq repository.name "github.com/sourcegraph/automation-testing" }}
    run: echo "this container starts only on a specific repository!" >> message.txt
    container: alpine:3
```

This is much cleaner: what step will run is explicit in the spec, and the container is started only if the condition is true, saving time and allowing for better caching.
We introduced helper functions to use in the if statement, see the docs to learn about `eq` and `matches`.

### Cheatsheet and examples

- We added a [cheatsheet](https://docs.sourcegraph.com/batch_changes/references/batch_spec_cheat_sheet) highlighting commonly used batch spec patterns
- We added a new batch change example: [changing YAML files](https://github.com/sourcegraph/batch-change-examples/tree/main/modify-yaml). Feedback welcome on what examples we should build next ([project](https://github.com/sourcegraph/batch-change-examples/projects/1))
