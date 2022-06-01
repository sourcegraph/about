---
title: 'How we used Notebooks to make our CI more accessible and understandable'
description: 'The Sourcegraph CI is complex and customized. To make it more accessible, software engineer Robert Lin used the new Sourcegraph feature, Notebooks, to make living documentation.'
authors:
  - name: Robert Lin
    url: https://handbook.sourcegraph.com/company/team#robert-lin
publishDate: 2022-04-28T18:00+02:00
tags: [blog]
slug: notebooks-ci
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/Notebooks/sg-notebooks-landingpage-desktop%20copy.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/Notebooks/sg-notebooks-landingpage-desktop%20copy.jpg
published: true
---

Today, Sourcegraph is announcing the general availability of Notebooks. Notebooks allows developers to integrate code search queries with text, so you can create living documentation that always references live code. I remember when I first tried Notebooks shortly after it was announced internally. My reaction was something along the lines of “I didn’t know I needed this!” Now, it’s a vital part of my collaborative workflow.

In this post, I’m going to walk through two ways I use Notebooks here at Sourcegraph. In both cases, I’m using Notebooks to capture and share code examples but in one, I’m embedding Sourcegraph search queries into documentation and in the other, I’m assembling code examples on the fly to make parts of our codebase more understandable to other developers.

## Our continuous integration pipeline and the tradeoffs of complexity

The advantage of customization is flexibility but the tradeoff is complexity–complexity that we can combat with live documentation using Notebooks.

Typically, continuous integration (CI) pipelines are specified by committing a YAML file to your repository that CI services pick up and run. This YAML file will specify what commands should get run over your codebase and will usually support some simple conditions, and is an easy way to get started. However, running certain tasks or combinations of checks based on whether particular sets of files have been changed or other complex conditions can quickly become quite gnarly to describe in YAML–especially in a large monorepo. So instead, we generate the entire Sourcegraph pipeline on the fly, allowing us to easily customize builds based on an array of conditions such as diffs, branch names, and commit messages, and hook into what developers provide the pipeline generator in interesting ways.

Customizability has advantages and disadvantages: the major advantage is that you can build precisely what you want and the major disadvantage is that the more unique something is, the harder you have to work to explain it.

Notebooks fit into this gap perfectly, and it naturally became very important to my workflow.

## Notebooks augment documentation with live code examples

Documentation can easily go stale and lag behind the code it documents, especially for internal tools and libraries where APIs can change liberally. Example code is especially at risk unless special care is taken to ensure documentation is updated in lock-step with your code.

With Notebooks, you can embed code directly into your documentation (and other internal knowledge management systems) and run Sourcegraph searches without having to leave whatever page you’re on. Notebooks augment our existing documentation, allowing developers to read static, explanatory text as well as run searches that return live code results. Developers can read _about_ code and then see the actual code with just a click.

Take a look at the [CI pipeline development documentation](https://docs.sourcegraph.com/dev/background-information/ci/development), where I've embedded notebooks that further explain, and demonstrate, the [Run types](https://docs.sourcegraph.com/dev/background-information/ci/development#run-types) and [Diff types](https://docs.sourcegraph.com/dev/background-information/ci/development#diff-types) used internally by the pipeline generator.

<video loop autoplay muted playsinline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/Notebooks/embedded_notebooks.mp4" type="video/mp4" />
</video>

You can read about these in detail in the docs, but the idea is that the pipeline generator primarily determines what gets run over contributions based on:

1. Run types, which are determined by branch naming conventions, tags, and environment variables; and
2. Diff types, which are determined by what files have been changed in a given branch.

I created notebooks for Run types and Diff types so that Sourcegraph developers can see them in action and in the code. The notebook for Run types includes both a search that shows Run types in the codebase and a search for RunTypeMatcher, which further shows how each RunType declares the conditions under which it should be used.

Our static CI documentation now contains living documentation–code pulled directly from the current state of the codebase, complete with hover tooltips and jump-to-definition for an IDE-like experience–enabling developers to understand these concepts in theory and in practice. The end result is that our developers will spend fewer hours onboarding and combing through documentation for up-to-date information.

## Notebooks provide a place for on-the-fly, ephemeral documentation

I spend a lot of time explaining code and having code explained to me. One brain can’t hold an entire codebase so we’re always reliant on other developers to know, explain, and document other parts of a codebase. Documentation is rarely sufficient, however, and that often means a call with a shared screen is most effective as one of us walks through code and the other listens.

The trouble with this workflow is that it typically leaves no trace and must happen synchronously, which goes against [Sourcegraph’s async-first aspirations](https://handbook.sourcegraph.com/company-info-and-process/communication/asynchronous-communication/). That’s why I started using Notebooks to build code walkthroughs on the fly.

I found this really useful because it fills a gap I noticed between permanent documentation, which tends to take a while to produce, and synchronous discussions, which can be tough to arrange in a globally remote team. I call it ephemeral documentation.

Let’s walk through a couple of examples. In this notebook, [Usages of soft failures in Buildkite pipelines](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6NzU1), you can see a brief explanation of soft failures (basically, soft failures don’t cause the entire build to fail) and searches that show soft failures in the Sourcegraph pipeline generator and soft failures in our Buildkite YAML pipelines.

This notebook came about because a coworker was asking about how we use soft failures in our pipelines, and how they work. Rather than try to list out their usages, I simply wrote a notebook with some searches that easily captured all usages. From this notebook, you can use these two searches and see live code that shows exactly what we mean by soft failures.

<video loop autoplay muted playsinline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/Notebooks/soft_fails.mp4" type="video/mp4" />
</video>

Another example: I created this notebook, [Buildkite command tracing](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6NzU0), when a coworker asked how our CI command tracing worked. This coworker was on another team and only knew, vaguely, that we had some sort of command tracing. They knew how they might implement command tracing in code but didn’t know how we had implemented it in the pipeline, especially considering things are typically scripted as shell commands in a pipeline.

I walked through the code myself to jog my memory, and, along the way, using the notepad, collected links and added comments.

<video loop autoplay muted playsinline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/Notebooks/Notepad_final.mp4" type="video/mp4" />
</video>

With a single click, I was able to create a notebook that hooked up to live code from my collected links and comments. I could then share the notebook with my teammate and they could refer to it whenever they wanted to.

Codebases often have lots of levels to them and each feature can be a vertical that touches many different levels of abstraction. With Notebooks, you can easily enable someone, even if they’re unfamiliar with that part of the codebase, to drill down through these layers of abstraction.

## No more band-aids

Our CI pipeline generator is a good example of what happens to code as a company grows up. It was once owned by a team that has since been reshaped and looks different today. Along the way, the pipeline generator has received numerous band-aids over the years to accommodate various use cases. Until I refactored it, the pipeline generator was both messy and inaccessible. Developers struggled to understand and extend it.

Now, the pipeline generator is much cleaner, functional, and extensible. I used notebooks throughout the refactor because they made that work more accessible and easier to understand, the result being a project that receives many more internal contributions than it used to. Teams are now customizing CI pipelines for their needs and making improvements.

As time goes on, I expect the benefits of creating notebooks to compound. Now, when someone refers to the CI documentation, they can see Run types and Diff types in action. Or, when someone else needs to understand soft failures or command tracing, I can just send them the relevant notebooks.

All in all, I’m excited to create and share more notebooks, and excited to see how other developers use them. I think it’s the kind of feature that reveals more power and more use cases as time goes on and more people use it. I can’t wait to see what you create.

Notebooks is now available on Sourcegraph 3.39. If you'd like to try out Notebooks on Sourcegraph Cloud, [you can try them here](https://sourcegraph.com/notebooks).

### More posts like this

- [How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights](https://about.sourcegraph.com/blog/migrating-to-css-modules-with-codemods-and-code-insights/)
- [Broken database migrations: How we finally fixed an embarrassing problem](https://about.sourcegraph.com/blog/introducing-migrator-service/)
- [How I use the Sourcegraph extension for VS Code](https://about.sourcegraph.com/blog/ways-to-use-sourcegraph-extension-for-vs-code/)
