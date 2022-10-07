---
title: 'How we migrated entirely to CSS Modules using codemods and Sourcegraph Code Insights'
authors:
  - name: Valery Bugakov
description: 'How our Frontend Platform team used codemods to automate a challenging global migration to CSS modules, and Code Insights to track and communicate progress.'
publishDate: 2022-03-10T00:00-07:00
tags: [blog]
slug: migrating-to-css-modules-with-codemods-and-code-insights
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migrating-to-css-modules.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migrating-to-css-modules.png
published: true
---

![Migrating to CSS modules with codemods and Code Insights](https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migrating-to-css-modules.png)

In Spring 2021, the Sourcegraph team [overhauled the design system and UI of our web application](/blog/introducing-sourcegraphs-new-ui/). It was an ambitious project because, along with improving the UX, we strove to make web interfaces more consistent, which required the collaboration of most product teams. The task was also challenging from a technical perspective because the application styles were implemented using global CSS rules with Bootstrap as a foundation. Our UI components were typically styled in three different ways:

1. Using a combination of [Bootstrap utility classes](https://getbootstrap.com/docs/4.0/layout/utilities-for-layout/).
2. Using a custom class specific to the element.
3. Using global styles inherited from the global scope.

It was hard to change individual UI components because engineers needed to keep in mind the whole stylesheet to avoid colliding styles in the global scope:

1. When adding a new class name to the stylesheet, engineers needed to ensure no other component already used it. [The BEM methodology](https://en.bem.info/methodology/) helped with this a lot, but we still bumped into issues from time to time. These issues were incredibly difficult to debug as global styles can be used in so many different ways.
2. Global CSS rules depend on the order of the code, and it's difficult to ensure that the order is preserved when implementing global changes like the application redesign. Moving files around could result in a slightly different import order that affects a tiny bit of UI. Debugging such small changes can significantly slow teams down and makes DX a nightmare.
3. There was no robust and configured way to identify unused CSS code not linked to any HTML elements. In the process of the redesign, we occasionally uncovered such styles. These styles added no value to our codebase or our product.

To overcome these issues, we decided that, before diving into the redesign, we should find a way to embrace scoped styles instead of adding new styles to the global scope. At the same time, we needed to ensure that this solution could be integrated with the current approach effectively. The definition of success was a combination of the following outcomes:

1. Modular CSS is enforced for new design system components.
2. It works well with existing global styles and UI elements.
3. We have a clear migration path that doesn’t interfere with feature development.

## CSS Modules solution

We researched popular solutions available in the open source universe: trade-offs between CSS in JS, regular CSS, and hybrid solutions. Some offered more powerful features, but we decided to use a solution that we knew we could easily adopt—CSS modules.

### What are CSS Modules?

CSS modules are great because they help you write reusable components with isolated styles. According to the [repo](https://github.com/css-modules/css-modules), CSS modules are:

“CSS files in which all class names and animation names are scoped locally by default.”

With CSS modules, CSS classes should be referenced in the JavaScript file via explicit binding to the styles file:

```jsx
import styles from './styles.css'

const Title = () => <h1 class={styles.title}>Heading!</h1>
```

The compiler would update the CSS file during the build step by replacing the CSS selector class referenced in the markup with a unique character set. And the JavaScript file would be updated by replacing the CSS class with the new inlined string. The final HTML markup might look like this:

```html
<h1 className="module__title__2QcnY">Heading!</h1>
```

This approach is designed to fix the problem of the global scope in CSS. Engineers can happily name their CSS selectors whatever they want, without worrying about unintended consequences in other areas of the code. Creating a CSS module is ultimately very similar to creating a typical CSS file. Maintaining this flow ensured we could easily start adopting this approach without interfering with our developer experience too much. After we updated documentation on how to use CSS modules, teams adopted this approach for new features immediately.

## Migration tracking challenges

[The Frontend Platform team](https://handbook.sourcegraph.com/departments/product-engineering/engineering/enablement/frontend-platform/) started the migration by manually converting global styles to CSS modules for a single, recently developed feature. We quickly noticed that despite some initial progress, we had some questions that slowed us down:

1. How can we know whether CSS Modules are continuously used for new features added to the project?
2. What’s our current progress? What percentage of global styles have already been converted to CSS Modules?
3. Given the current rate of changes, how much time will it take to migrate all remaining styles to CSS Modules?

We knew we could search the codebase manually for relevant files and make conclusions based on that, or we could write a script to do it for us. But an ideal solution would give a clear, at-a-glance indication of where we were at the moment, and be easy for us to maintain. Thankfully, another product team at Sourcegraph had developed the exact solution to our problem!

“Code Insights reveals high-level information about your codebase, based on both how your code changes over time and its current state.” – [source](https://docs.sourcegraph.com/code_insights).

Code Insights entered Beta in August 2021, and we happily started using it to track the migration progress. As of today, [Code Insights is now Generally Available](/blog/announcing-code-insights/).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migration-to-css-modules-insight.png"
  alt="Count of CSS files that are global vs module files."
  caption="Count of CSS files that are global vs module files."
/>

We used a few simple search queries to create the code insight, and immediately got answers to all the questions important for migration tracking in one picture. It was a crucial tool in communicating where we were with the migration progress to the engineering organization going forward. Code Insights can be especially helpful for platform teams like ours, which do a lot of invisible work and can struggle to make the case for dedicating time to initiatives like tackling tech debt. Being able to communicate progress visually to stakeholders outside engineering or in leadership is really persuasive. Teams that typically manage large parts of a codebase can find it difficult to get insight into what is happening, and Code Insights makes that really easy.

The migration that we started working on didn’t have any hard deadlines, so getting sidetracked with new shiny initiatives was easy. Also, multiple modules were a bit harder to rewrite, and we subconsciously delayed refactoring them. These factors contributed to slowing down, but having a code insight as a map of planned work with a clear destination was motivating to push the migration to 100% completion. It kept reminding us that we were close to our goal and helped us close this chapter without any leftover work.

## Migration execution challenges

Global migrations are challenging for platform teams. After spending time to migrate another feature to CSS Modules, we discovered some execution obstacles in our way:

1. The migration work is quite repetitive, and we had to do a ton of it because the size of the codebase is pretty significant: ~400 files to migrate.
2. We wanted to make the migration as smooth as possible for product teams. Asking them to allocate a substantial amount of their time to work on the migration was an option but not ideal.
3. It's not very exciting to work on for an extended period of time, but dragging out the migration would mean leaving the codebase inconsistent for too long. New engineers might be confused about which approach to use, even if we document it.

## Codemods to the rescue

A codemod is an automated change to source code, which helps platform teams execute global refactorings faster and with higher confidence. Because codemods are usually written in the same language as the project, they can understand its subtleties and complexities. It makes them perfect for executing large-scale migration where find-and-replace functionality is insufficient. A codemod generally includes the following steps:

1. Generate an Abstract Syntax Tree (AST) from a source file.
2. Traverse the AST looking for nodes to transform.
3. Make changes to the AST where appropriate.
4. Regenerate the source file based on the new AST.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/abstract-syntax-tree.svg"
  alt="High-level visual representation of the codemod."
  caption="High-level visual representation of the codemod."
/>

On the technical side: most of the changes required for CSS Modules migration are mechanical and can be automated with the information available in CSS and Typescript abstract syntax trees. But most importantly, the codemod approach allows us to overcome all the challenges we encountered working on the migration manually:

1. ⚡️Instead of pouring time into mindless repetition of migrating global styles to CSS modules, we put effort into building a robust script that does that for us. It is a much more engaging task because it gives the team knowledge and experience that can be used for future migrations.
2. 🥷 Having a way to migrate 95% of use cases automatically greatly reduces the time commitment needed and allows the platform team to complete the refactoring behind the scenes without asking product teams for help.
3. 🏎 Faster migration means that the codebase stays inconsistent for much less time.

## Codemod implementation

To programmatically migrate global styles to CSS modules, codemod script does three major things:

### 1. Find pairs of files to transform.

Finding a React component file with the corresponding global-styles file is easy in the Sourcegraph codebase because React components have colocated styles with a predictable filename. E.g., styles for `Button.tsx` are defined in `Button.scss` in the same folder.

### 2. Convert global styles file into a CSS module.

It’s a multistep operation:

- First, get rid of the BEM notation used for CSS selectors and remove redundant nesting required to ensure selector uniqueness.

```css
.insights-dashboard {
  flex: none;

  &__wrapper {
    display: flex;
  }
}
```

<div className="d-flex justify-content-center my-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="29" className="snippet-arrow" xmlSpace="preserve"><path fill="#223" d="M44.78.03 24.511 20.516 4.241.03.066 4.253l24.446 24.71L48.957 4.251 44.78.029zM1.685 4.39l2.626-2.79 20.2 20.764L44.85 1.532l2.555 2.65-22.961 23.21-22.758-23z"></path></svg>
</div>

```css
.insights-dashboard {
  flex: none;
}

.wrapper {
  display: flex;
}
```

- To achieve this, we used [PostCSS](https://github.com/postcss/postcss) — a ​tool for transforming styles with JS plugins. The resulting script is similar to [the postcss-nested plugin](https://github.com/postcss/postcss-nested), with some adjustments to remove the BEM notation.
- Save a list of CSS Module classes in memory for later reference in the React component. It is done by using utility functions provided by [the css-modules-loader-core package](https://github.com/css-modules/css-modules-loader-core). They give us a list of classes available in a CSS Module that we can map ourselves to global CSS classes that we just transformed. For our toy example, it would look like this:

```js
const classMapping = {
  'insights-dashboard': 'insights-dashboard',
  'insights-dashboard__wrapper': 'wrapper',
}
```

- As a final touch, add `.module.scss` to the filename required for [build-tools to interpret this file as a CSS Module](https://webpack.js.org/loaders/css-loader/#modules).

### 3. Replace references to global classes in the React component using a list of CSS Modules classes preserved from the previous step.

To manipulate Typescript AST, we used [ts-morph](https://github.com/dsherret/ts-morph) — TypeScript Compiler API wrapper for static analysis and programmatic code changes. Relying on this package API, the codemod script iterates over all string literals in the React component AST and searches for global classes processed in the previous step.

Here’s the AST generated for our small example. Explore it yourself using [AST Explorer](https://astexplorer.net/#/gist/eca630c9f5464e6b027ec13aac91711a/4295e325b8cdad474f9d4f559248f534e709356e).

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/insights-dashboard-ast.png"
  alt="Insights dashboard AST"
/>

Codemod replaces every string literal match with reference to the corresponding CSS Module class.

```jsx
<div className="insights-dashboard__wrapper" />
```
<div className="d-flex justify-content-center my-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="29" className="snippet-arrow" xmlSpace="preserve"><path fill="#223" d="M44.78.03 24.511 20.516 4.241.03.066 4.253l24.446 24.71L48.957 4.251 44.78.029zM1.685 4.39l2.626-2.79 20.2 20.764L44.85 1.532l2.555 2.65-22.961 23.21-22.758-23z"></path></svg>
</div>

```jsx
<div className={styles.wrapper} />
```

At this point, the transformation is complete, and the script outputs information about CSS classes not used in the React component. It allowed us to remove dead code in the migration process.

The codemod script can be used as a CLI tool by supplying a list of files to transform:

```shell
$ yarn transform --transform ./globalCssToCssModule.ts ./sourcegraph/**/*.tsx
```

## First codemod results

We developed [the proof of concept codemod](https://github.com/sourcegraph/codemod/tree/92d5088106a81247a997c52577b0cb5749fc1082/src/transforms/globalCssToCssModule) for the migration in a separate repo at the end of September 2021 and spent a couple of days applying it to the codebase. The code insights created to track the migration readily showed a spike in the migration progress that we happily shared with other teams in Slack:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migration-progress.svg"
  alt="Intermediate migration progress"
/>

## Collaboration with contractors

Another challenge we faced was that we kept breaking our own rules: In quite a few places, we found we were using styles scoped outside of the respective component. Handling those cases required manual intervention from the engineers after applying the codemod.

To keep executing the migration behind the scenes, we started working with contractors to help us handle cases that the codemod could not address. It was another productivity lever akin to the codemod that immensely helped us to focus on critical problems while keeping the migration process going in the background.

<blockquote className="twitter-tweet tw-align-center"><p lang="en" dir="ltr">Nothing like using <a href="https://twitter.com/sourcegraph?ref_src=twsrc%5Etfw">@sourcegraph</a> to build <a href="https://twitter.com/sourcegraph?ref_src=twsrc%5Etfw">@sourcegraph</a>—we&#39;re migrating from global CSS to CSS Modules and our frontend platform team is using Code Insights to track migration progress: <a href="https://t.co/1lRqYjLiwz">pic.twitter.com/1lRqYjLiwz</a></p>&mdash; Beyang Liu (@beyang) <a href="https://twitter.com/beyang/status/1454937232368832522?ref_src=twsrc%5Etfw">October 31, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

## Overview of the outcome

We successfully migrated to CSS Modules behind the scenes, delivering on the “frictionless developer experience” goal set for our team:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/migration-completion.svg"
  alt="Completed migration"
/>

We're relying on the same combination of Code Insights and codemods in our subsequent significant migration from global Bootstrap classes to our new Wildcard design system. We find this approach is more than just automating some simple tasks and speeding up the development work, as it helps keep engineers happy by reducing manual labor when upgrading their projects' dependencies, refactoring legacy patterns, or fixing bugs if the next version of a public API has breaking changes. As a next step, we plan to make codemods useful for engineers outside of the Frontend Platform team by developing [a higher-level toolkit for creating codemods](https://github.com/sourcegraph/codemod) that will eventually make it as simple as writing a regex find-and-replace.

We hope you found this account of our migration useful and will consider trying codemods and [Code Insights](/blog/announcing-code-insights/) in your work.
