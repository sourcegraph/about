---
title: 'Saving dozens of engineering hours by batch-changing hundreds of repositories at a time'
authors:
  - name: Javi Gómez
    url: https://medium.com/@javi_p_t
publishDate: 2022-11-11T07:00
description: 'Have you ever needed to change many repositories at once? How about 271 of them? It usually takes hours, probably even days, to update all repositories to the new version or a library or add a new security check to all Continuous Integration pipelines. In a world of automation, we can do better than that.'
tags: [blog]
slug: 'batch-changing-hundreds-of-repositories-at-typeform'
canonical: https://medium.com/typeforms-engineering-blog/saving-dozens-of-engineering-hours-by-batch-changing-hundreds-of-repositories-at-a-time-e4c5a454df2d
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/typeform-x-batch-changes.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/typeform-x-batch-changes.png
---

<p
className="max-w-lg text-center"
>
<Figure
src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-batch-changes-typeform-001.jpg"
/>

*Saving time. Photo by [Djim Loic](https://unsplash.com/@loic?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)*

</p>

Have you ever needed to change many repositories at once? How about 271 of them? It usually takes hours, probably even days, to update all repositories to the new version or a library or add a new security check to all Continuous Integration pipelines. In a world of automation, we can do better than that.

In theory, it should be relatively straightforward to create a script to modify the same line across different repositories. But what if the line that needs to be changed is not in the same place everywhere? What if all these hundreds of Pull Requests need to be reviewed and merged by others?

The challenge is to find a tool capable of doing both an intelligent *search & replace* but also monitoring for introduced changes until they finally merge. Not easy. Luckily, we recently discovered the **Batch Changes** feature in [Sourcegraph](https://sourcegraph.com/) (Sourcegraph is the code intelligence tool we use daily to support our [Standards Adoption Tool](https://medium.com/typeforms-engineering-blog/adoption-of-engineering-standards-at-typeform-f17f2b61bd39#8301)).

Here at Typeform, we own more than four hundred active git repositories, and with this size, we need to be able to perform batch changes. Especially for the teams focused on supporting other teams like Architecture, Developer Tools, DevOps, Security, or Quality. Let’s dive in our first use case using Batch Changes:

## **Modifying 271 CI Pipelines with Bruno**

<p
className="max-w-md text-center"
>
<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-batch-changes-typeform-002.png"
/>

*Bruno Ferreira, Senior DevOps Engineer at Typeform*

</p>

>***1. Hi, Bruno. Tell us a little bit about your role at Typeform.***
>
>I am a Senior DevOps Engineer. I joined the company in July 2021. Our team’s mission is to keep improving resilience, efficiency, automation, monitoring, and the overall availability of Typeform products. Our primary responsibility is to manage the platform infrastructure, which includes working with multiple Kubernetes clusters, different types of data storage, and other AWS services.
>
>***2. What project did you work on that required changes in many repositories?***
>
>We currently use GitHub actions with self-hosted runners as our main (CI/CD) platform to automate our build, test, and deployment pipelines. Recently, to support ephemeral (i.e., single job) runners and enable auto-scaling for our self-hosted runners, we had to make some changes to the base docker image used for the runners.
>
>We wanted to shift our pipelines to the new runners incrementally, ensuring every pipeline on every repository worked without issues and avoiding interrupting developers’ workflows. It was essential for us to that Developers keep deploying to production multiple times a day while we were pushing those changes.
>
>The solution with Sourcegraph was to trigger a batch change that updated every label on every workflow to start pointing to the new ephemeral runners. Since we had different labels, Sourcegraph allowed us to search for the runs-on key on all the workflow’s YAML files and then just append the ephemeral suffix.
>
>Here’s an example of one of the changes in one of the changesets for this batch change:

<Figure
src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-batch-changes-typeform-003.png"
/>

>*And here’s the spec we used for the batch change:*

```yml
name: migrate-gha-runners-to-ephemeral
description: This batch change migrates GHA runners to ephemeral
on:
  # Find all repositories that contain [self-hosted, {runner}] without -ephemeral suffix
  - repositoriesMatchingQuery: context:global content:"runs-on:" NOT content:"-ephemeral" lang:yaml file:.github/workflows/* patternType:literal
# Describe the changeset (e.g., GitHub pull request) you want for each repository.
changesetTemplate:
  title: 'build(NOJIRA-1234): migrate GHA runners to ephemeral'
  body: Updates GHA runners to ephemeral runners. For more info check [this](https://www.notion.so/typeform/Migration-to-Ephemeral-runners-ffd85bafaed44cfd8a0c135701c4a6a7)
  branch: NOJIRA-1234-ephemeral-runners
  commit:
    message: 'build(NOJIRA-1234): migrate GHA runners to ephemeral'
  published: true
steps:
  - run: |
      comby \
        -in-place \
        'runs-on::[~\s?][:[~\s?]self-hosted,:[~\s?]:[runner]:[~\s?]]' \
        'runs-on: [self-hosted, :[runner]-ephemeral]' \
        .github/workflows/*.yml || true
    container: comby/comby
  - run: |
      comby \
        -in-place \
        'runs-on::[~\s?][:[~\s?]self-hosted,:[~\s?]:[runner]:[~\s?]]' \
        'runs-on: [self-hosted, :[runner]-ephemeral]' \
        .github/workflows/*.yaml || true
    container: comby/comby
```

>***3. How did Sourcegraph Batch Changes help to achieve your goal?***
>
>We created a **Batch Change** that made 271 changesets. We could easily track which Pull Requests failed the workflow on GitHub Actions. We tackled the ones that failed individually and applied the required fixes on the workflow or the runner’s base docker image. The ones that passed were merged by the service owners.
>
>We were able to track the overall progress by checking just one dashboard. In just 48 hours, more than 55% of the pull requests were already merged. We were able to apply all the changesets and complete the migration to the new ephemeral runners in less than a week. Doing this change across all the organization's repositories would be hard to track without a tool like Sourcegraph.

<Figure 
src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-batch-changes-typeform-004.png" 
/>

>***4. What other options apart from Sourcegraph did you consider to do the job, and why did you choose Sourcegraph?***
>
>In the past, for similar situations, we would use [auto-pr](https://github.com/getyourguide/auto-pr/#auto-pr).
>
>However, dealing with permissions across repositories, taking care of the different scenarios for a specific change, and keeping track of the pull requests’ progress were the most significant pain points. Sourcegraph solved these three issues for us.

Our second experience with the Batch Changes feature was led by David Salvador:

## **Improving overall security with David**

<p
className="max-w-lg text-center"
>
<Figure
src="https://storage.googleapis.com/sourcegraph-assets/blog/blog-batch-changes-typeform-005.jpg"
/>

*David Salvador, Platform Security Engineer at Typeform*

</p>

>***1. Hi, David. Tell us a little bit about your role at Typeform***
>
>Hello! I joined Typeform in March 2020 as a Platform Security Engineer. Since then, my job has been to help our engineers to deliver secure software by creating an *Application Security Program* at Typeform. This program adds a security layer to every step of the software development lifecycle. In the Security team, we believe in not being blockers but enablers. We do this by providing tools and checks and making them as developer-friendly as possible. Examples include checking that no vulnerable dependencies are being used, a safe CI/CD setup is in place, or that no secrets are being uploaded to our repositories.
>
>***2. What was the project you were working on that required changes in many repositories?***
>
>All of Typeform’s repositories have a GitHub Action that performs secrets detection: it checks whether a secret (API token, password, key, etc.) has been uploaded to the git repository. For this, we use a wrapper of the open-source tool [Gitleaks](https://github.com/zricethezav/gitleaks).
>
>The secrets detection check runs using a set of custom rules maintained by the Security team ([read more on the blog](https://medium.com/typeforms-engineering-blog/prevent-secrets-leaks-at-scale-in-repositories-e785b96e8244)). Even though the rules have gone through several tuning iterations, every once in a while, a false positive might appear. The secrets detection check identifies something as a secret, but it’s not. To not interrupt the developer’s flow, we added an easy way to exclude false positives from the check. Every repository has a _.gitleaks.toml_file where files, paths, commits, and certain regular expressions can be added to exclude such false positives.
>
>We are currently using Gitleaks version 7. The Security team wanted to update it to version 8. However, version 8’s allowlist file has some incompatibilities with version 7. All the existing allowlist files in all Typeform’s organizations with such incompatibilities must be updated. This change impacted 44 files across the organization.
>
>***3. How did Sourcegraph Batch Changes help to achieve your goal?***
>
>Before pushing the changes, I wanted to run a sanity check on five selected repositories. I was able to submit PRs to only the five test repositories.
>
>My search request was challenging: I needed to find repos that use a beta version of a specific GitHub Action and, from those, find which ones had a Gitleaks allowlist file. I could not pipe searches between the features. However, I quickly found a workaround: I created a context (a subset of repositories) and then ran the last query against them. Solved in a breeze!
>
>After verifying that the changes made in the five repos were successful and compatible with the new Gitleaks version, I proceeded to update the rest. The Batch Changes performed on the 44 repos left were successful, and most of the PRs were approved and merged hours later.

## What is next?

We don’t have many cases for a batch change yet, but we have already received the following request from the Frontend Architecture team to use the tool to update the tracing library on all frontends.

Overall, pushing changes in a batch is an opportunity to transform the organization faster in companies with many repositories. We found Sourcegraph Batch Changes an excellent tool to offer to our engineering enablers to transform the organization planned and consistently.

### More posts like this

* [Introducing Batch Changes](https://about.sourcegraph.com/blog/introducing-batch-changes)
* [Quickstart for Batch Changes](https://docs.sourcegraph.com/batch_changes/quickstart)
* [Original post on Medium](https://medium.com/typeforms-engineering-blog/saving-dozens-of-engineering-hours-by-batch-changing-hundreds-of-repositories-at-a-time-e4c5a454df2d)

<p class="mt-3 mb-3">
  <a href="https://sourcegraph.substack.com/p/subscribe" class="btn btn-primary mr-1 mb-1">Subscribe to technical posts</a>
  &nbsp;
  <a href="https://discord.gg/ZSt5Kr3tpw" class="btn btn-primary">Join our Discord</a>
</p>
