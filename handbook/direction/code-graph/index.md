# Code Graph

The Code Graph org builds and scales the Code Graph and how our users interact with it. We are responsible for search (the user experience as well as performance), insights, code intelligence, and batch changes. This page describes overarching initiatives that tie multiple teams and milestones within Code Graph together.

Individual team direction pages within Code Graph can be found on our [direction home page](../index.md#code-graph). For details on how the themes here become reality, as well as what each team is working on next for their individual visions, take a look there.

## Mission

What is the team's reason for existing? What is the fundamental value they aim to provide? Who are your key customers/stakeholders and why, and are there any customers/stakeholders that you're explicitly choosing not to address that people might have expected you to?

## Vision

### 1 Year vision

> Add a sentence or two here indicating what the most important things you want to achieve/problems you want to solve in the next year are. These should in most cases move your three and ten year visions forward.

### 3 Year vision

> Add a sentence or two here describing what your product will be like in three years, also focusing on the problems you'll solve and the value you'll deliver. This should be grounded in reality, but three years is a lot of time - be ambitious!

### 10 year vision

> A sentence or two on your ten year vision is where you can really go wild and describe the problems you want to solve and solutions you want to deliver unbound by limitations of technology or scope. Be inspiring and look to the our [10 and 30 year strategies](../../company/strategy.md#sourcegraph-strategy) for ideas.

## Themes

### Provide value quickly to all developers via the Code Graph

Learning what's possible and how to get the most out of Code Graph tends to be trial and error, especially for an individual developer who might have a unique set of use cases and interests that they would search for.

We're introducing a new feature called Insights that brings interesting things to the forefront, and serve as a jumping off point for easily using more advanced features. For example, we could offer an insight that tells you that you have repositories using out of date versions of libraries that you create. This could have a jumping off point to search, allowing the user to learn more about how and where it is being used, as well as a jumping off point for batch changes, if they want to go ahead and update all of them. We could provide a one-click button to subscribe to an alert when they become out of date again in the future.

Insights like these can also be a way to help people learn that features exist and how to use them, allowing them to adapt something that's already set up to their other use cases. This should [help people onboard](https://docs.google.com/document/d/1xF1Fp2y0hxY_CrXMsRbJlWCOI8XHBceiUdivNmh8SlQ/edit#) and see the value of the Code Graph more quickly than just showing them a search bar with syntax and hoping they'll make the leaps.

### Grow product maturity for the unified Code Graph experience

The Code Graph solves real problems today, and beyond getting quickly to value, we can invest in the polish, user experience, and cross-feature functionality within our product area to really make the experience lovable. Some examples of improvements here are:

- Commit and diff search remain un-indexed, thus:
  - performance suffers
  - code monitors are limited to 50 repositories, where companies want to monitor their entire code base.
- Structural search does not function at scale
- Contexts are not yet discoverable
- Notebooks show great promise but require polish

### Unlock opportunities and win in the enterprise market via improving the Code Graph and how our users interact with it

- Move batch changes functionality server-side to simplify editing the Code Graph
- Invest in differentiated features in searching and navigating the Code Graph. e.g. Better hover navigation, Search contexts, Code Monitoring, Advanced Search, ...
- Improve onboarding and collaboration working on the Code Graph. e.g. Notebooks
- Bring the experience of tracking insights on the Code Graph into beta

### Scale the Code Graph to ultimately meet the scale needs of our enterprise customers

- Scale our search index to 5.5M repos in OSS
- Enable auto-indexed code intelligence on the Code Graph at scale
