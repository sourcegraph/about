# Sourcegraph projects and content repository

We're trying something new with this repository, capturing current projects and blog posts as Open Source code in Markdown using embedded YAML for metadata (front matter).

The publishing of these blog posts is automatic, using the value of the `published` front matter key.

## Why we're doing this

Sourcegraph is committed to Open Source and developing in the open as much as possible. While we currently do our iteration planning in Google docs, we can't use the tools we know and love as Developers. We want to be in a terminal or editor writing code, not a web browser writing a document.

We also want more transparency in what we're working on (projects) and what we're writing about (blogs), so we can get as much feedback as possible during the creation and review process outside of just the Sourcegraph team.

## What we hope to get out of this

We build tools to help developers write better quality code, and we want those same developers to tell us what would make them more productive and successful.

We want feedback while we're working on features and creating content to ensure everything we release and publish is incredibly high quality and meets the needs of our developer audience.

## For non-Sourcegraph Team members. How you can contribute

- Watch this repository for updates to see what's happening. Share your thoughts with us here on [on Twitter](http://twitter.com/srcgraph).
- Create issues for features or content you want to see.
- Create issues telling us how we can improve our project and content sharing process.

It's early days so consider this a work in progress. Thanks for joining us on our mission to help everyone write better code, to build better software and therefore, bring the future sooner.

## Why a public project planning and blog post repository?

The assertion is that each project is significant enough to deserve a dedicated blog post. Instead of doing this at the end of the iteration in a separate document, the project plan is now also the blog post about your project. Writing it may be tough but has enormous benefits:

- As it's a blog post (not just an internal document), it has an external audience which forces a higher quality of content.
- Distributing the responsibility of blog post creation to team members means more content for our developer audience and more engagement on our blog.
- You'll improve your writing and communication skills.

## Adding your project or blog post

Copy the contents of `TEMPLATE.md` into a new file in either `projects` or `blogposts`.

## Writing your project post

Quinn, Ryan and Francis will pair with you to write the first version of your post as this is where the scope of features for the project are defined.

## Publishing your post

Set `published` to `true` and presuming you've configured the frontmatter correctly, your post will be live a few minutes after your commit is merged into the master branch.
