---
title: "Accelerate a pnpm migration with Issues, Epics, and Batch Changes"
authors:
  - name: Chris Concannon
    url: https://handbook.sourcegraph.com/team/#sts=Chris%20Concannon
publishDate: 2023-09-19T10:00-07:00
description: "Integrating Batch Changes with GitLab Issues and Epics, provides a complementary set of features to manage massive code-based changes for large organizations."
tags: [blog]
slug: 'accelerate-migrations-with-batch-changes'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/batch-changes-gitlab-sg-blog.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/batch-changes-gitlab-sg-blog.png
---

Large-scale migration efforts are challenging for even the most sophisticated organizations: how do you identify, track, update, and validate all of the changes that need to be made? Seemingly straightforward projects can become logistical nightmares. In this case, we’ll use the example of migrating to pnpm.  

For an organization with hundreds or thousands of repositories that use yarn or npm, the task of migrating to pnpm can take a lot of precious time and resources! Commands need to be run to install pnpm, substitute pnpm commands, re-import packages, commit the changes, and open merge requests. On top of this, you may need to manage rate limits at the code host which might slow you down when downloading the code, pushing commits, and opening merge requests. 

Such a large migration project, which touches hundreds or thousands of repositories, could benefit from some automation and project management tools. The steps to perform the migration are similar for every repository, which makes the migration a _perfect_ candidate for Sourcegraph’s Batch Changes. In this post, we’ll show how you can make API calls to integrate Sourcegraph’s Batch Changes with GitLab Issues and Epics.

The combination of Batch Changes with project-management tools like Issues and Epics provide an effective way to not only jump-start such a massive migration project, but create a space for teams to collaborate when  handling the intricacies and nuances that inevitably arise once the work has begun.


### pnpm

[pnpm](https://pnpm.io/) is a fast, disk-space-efficient package manager that has quickly become a favored alternative to yarn and npm. At the time of this writing, there are dozens of blog posts by individuals and organizations that have migrated from npm or yarn to begin using pnpm.


### Sourcegraph Batch Changes

[Batch changes](https://docs.sourcegraph.com/batch_changes) are used to make large-scale changes across many repositories, and even across multiple code hosts. This can be extremely useful when, for example, you want to kick-start a huge initiative to make a change to hundreds, or even thousands, of repositories. 

A huge benefit of batch changes is that they run in a modular container architecture. This lets you run multiple containers, stepwise, over the repository files in a completely isolated virtual environment.

Batch changes will:
* Run your migration script(s) via auto-scaling executors in the cloud
* Preview the changesets
* Automate the creation of merge requests
* Allow the use of template language for titles, descriptions, and commit messages
* Provide a clear interface which displays the status of each changeset
* Allow bulk edits


### GitLab Issues & Epics

[GitLab Issues](https://docs.gitlab.com/ee/user/project/issues/) are used to collaborate on ideas, solve problems, and plan work. When issues share a theme across projects and milestones, you can manage them by using Epics.

[GitLab Epics](https://docs.gitlab.com/ee/user/group/epics/) serve as the parent of one or more issues, and/or of one or more child epics.

In our example today, we’ll use a parent epic to track the pnpm migration at the organization level, and we’ll create one issue per merge request to perform each repository-level pnpm migration.

Sourcegraph Batch Changes, used in conjunction with GitLab Issues and Epics, allows an organization to programmatically and efficiently execute a large — or a not so large — migration project. 


## Implementation Details

At a high level, [this working example](https://gitlab.com/developers6370122/sourcegraph-batch-pnpm-examples/batch-change/-/tree/main?ref_type=heads) has a few key files:
* batch-spec.yaml
* createIssue.js
* gitlab-script.Dockerfile
* node-pnpm.Dockerfile


### batch-spec.yaml

The batch spec file is the most important part of this process, because it ties everything together. This is where the steps of the change are defined, in the following format:

```yaml

steps:
* run: # The command to run when the container starts

    container: # The container to use


    env: # Environment variables and secrets that are needed by the container


    outputs: # Any outputs to use in the changeset template or in future run commands


# Additional steps can be defined in sequence:

#    - run:

# container:

```


### createIssue.js

This is the script that calls the GitLab API to create an Issue as part of a changeset, and assigns the created Issue to the parent Epic.


### Dockerfiles

The gitlab-script.Dockerfile and node-pnpm.Dockerfile are example Dockerfiles to demonstrate building containers to do specific tasks - in this case, one to copy the createIssue.js script, and another to install pnpm so that pnpm commands can be run in the container. You don’t _need_ these to run the batch spec file as-is, but you _will_ need to write similar Dockerfiles if you want to update the GitLab script, add additional packages to help with your migration needs, use a different version of pnpm, etc.


## Putting it all together

The [example batch-spec.yaml](https://gitlab.com/developers6370122/sourcegraph-batch-pnpm-examples/batch-change/-/blob/main/batch-spec.yaml?ref_type=heads) has 3 steps:
1. Use Ruby scripting to update package.json files in the repository
2. Run “pnpm import” and delete lockfiles
3. Run the createIssue.js script (which requires environment variables) and output the issue link to be used in the merge request description

Batch changes can be run locally (for faster iteration during development/testing) or on a Sourcegraph Enterprise instance with cloud executors. Once the changesets are applied, Sourcegraph uses the configured user access tokens to open the merge requests.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/CC%20blog%201.png"
/>

Since we linked the issue in the merge request description of each changeset, GitLab links all the merge requests to their associated issues, and all the issues to the parent Epic. 

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/GitLab%20BC%20blog/CC%20blog%201.png"
/>

### Tips

This example was created as a minimum viable example to demonstrate this integration, and I’d like to give the following tips to anyone who tries to adapt it for their own use:
* If it’s your first time using Batch Changes, run through our[ Quickstart guide](https://docs.sourcegraph.com/batch_changes/quickstart)
* Refer to the Batch Changes[ reference docs](https://docs.sourcegraph.com/batch_changes/references)
* Don’t forget to set the required environment variables and[ executor secrets](https://docs.sourcegraph.com/admin/executors/executor_secrets)!
* Build any Docker images for amd64 architecture, which is what the executors need
* Update the Ruby scripting of the first change step to do string replacement for “npm” or “yarn” commands to use the “pnpm” equivalents, according to your needs


## Conclusion

Integrating Sourcegraph Batch Changes with GitLab Issues and Epics, provides a complementary set of features to manage massive code-based changes for large organizations. Organizations with dozens or hundreds of developers might find themselves in gridlock when faced with a migration of this magnitude. Using Batch Changes to jump-start the migration, followed by issues and epics to track progress, and collaborate while navigating the complexities that arise at the individual repository level, is an efficient and effective way to execute such complex migrations.
