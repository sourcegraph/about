---
title: 'How we added backend integration testing to our CI pipeline'
externalTitle: 'Adding backend integration testing to our CI'
description: "Here's the story, and the lessons learned, from our work to remove all existing backend-related end-to-end tests and reliably run their corresponding unit and/or integration tests as part of our CI pipeline on all branches."
externalDescription: "Integration testing isn't glamorous work, but it is impactful. Here's a behind-the-scenes look at how we worked toward a more reliable, less flaky testing suite."
authors:
  - name: Joe Chen
publishDate: 2022-01-13T18:00+02:00
tags: [blog]
slug: integration-testing
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/backend-integration-testing/backend-integration-testing.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/backend-integration-testing/backend-integration-testing.png
published: true
---

<video loop autoplay muted playsinline>
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/backend-integration-testing/backend-integration-testing.webm" type="video/webm" />
  <source src="https://storage.googleapis.com/sourcegraph-assets/blog/backend-integration-testing/backend-integration-testing.mp4" type="video/mp4" />
</video>

My name is Joe Chen and I was on the Core Application team at Sourcegraph (before it split into Repo Management and Cloud SaaS––I'm on the latter at the time of writing). Our responsibility was to build and maintain the infrastructure of the Sourcegraph application for other teams. Some of our previous work includes licensing enforcement, background permissions syncing, and explicit permissions APIs.

In April of 2020, we decided to tackle integration testing. Although integration testing wasn’t something any single team could own, it involved code-based infrastructure and naturally fell on the Core Application team.

The goal was to remove all existing backend-related end-to-end tests and reliably run their corresponding unit and/or integration tests as part of our CI pipeline on all branches––the end result being a more reliable, less flaky testing suite.

Integration testing isn't glamorous work, but it's necessary and, most importantly, impactful. Inspired by a previous post, [How not to break a search engine or: What I learned about unglamorous engineering](https://about.sourcegraph.com/blog/how-not-to-break-a-search-engine-unglamorous-engineering/), I wanted to share another piece of unglamorous engineering that, despite its lack of glamor, made a big impact.

## Before backend integration testing

Our work started with an [RFC](https://handbook.sourcegraph.com/company-info-and-process/communication/rfcs) (Request For Comment) that you can see [on our public RFCs folder](https://docs.google.com/document/d/1LfCDPZZAkP4gFB0no-0Hb90EqMItnzv3YEb07B7WtrM/edit#heading=h.trqab8y0kufp).

Before having the backend integration testing, we were relying entirely on end-to-end tests written in JavaScript. These tests would boot up a virtual browser, move the cursor, and click buttons to simulate a real user using the Sourcegraph application.

The problem with this approach is that it's not always stable and it's easy to either time out or miss the button. The CI pipeline ends up becoming undependable, incurring a loss of trust in the end-to-end tests. Instead, we wanted to remove the browser manipulation layer and hit the APIs directly for most parts of the tests in the end-to-end test suite.

Instead of booting up a virtual browser, moving the cursor around and clicking buttons that are hard to predict when will be available, our backend intergration testing gets rid of the UI and hits the same GraphQL API endpoints that our web app would. Integration tests pretend our client is the browser and the user, and do all the steps necessary to simulate what a user does. They can then verify that a function is working as expected.

## Discovery process

Work like this is too complex to simply assign to an engineer and ask them to handle it.

We need to do discovery and lay out the steps, as well as try to estimate the amount of effort it will likely take. We also need to propose a solution, ask people to review the proposal, and incorporate their feedback.

We learned in this process, for instance, that if we aren't running tests against a live Sourcegraph instance, then those search tests won't be valuable. Those search tests will be a waste of CPU and a waste of machine power. That realization led us to booting up a live Sourcegraph machine that we could use for testing and cloning. We could then pull everything together and do the search tests there to make sure they're valuable.

## Four stages to adding integrating testing

There were four stages in the process for adding backend integration testing.

### Stage one: Audit existing end-to-end tests

The first stage to adding backend integration testing is to audit existing end-to-end tests and determine whether they're valuable to keep in the first place.

If they are, determine whether we can replace them with unit tests that have the same level of confidence. If we can't cover a test with just unit tests, we put it in a list of backend integration testing to implement.

We used a simple spreadsheet to track things, which includes columns that ask questions like: Is it necessary to replicate? Is it covered by unit tests? Does it need to be put into backend integration testing?

### Stage two: Build the backend integration testing infrastructure

One of the important goals of the backend integration testing infrastructure was to make it easy to run in both local and CI environments. We reused the Go test infrastructure (`go test`), so engineers can write regular Go tests, and run these tests as integration tests. All the pre-steps and clean-up steps are done, then anyone can fill in all the tests that bring value to the codebase.

As a result, the Search team are currently using the backend integration testing to validate and/or add new tests to the test suite. They can do so in a local environment and then push to the CI such that these two environments don't diverge.

### Stage three: Migrate existing end-to-end tests

Depending on the audit spreadsheet from stage one and infrastructure made in step two, the next stage is to migrate end-to-end tests to their corresponding unit tests, backend integration tests, or leave the end-to-end tests as they are.

There are two important parts of this migration process:

1. **Research test purposes**: Ask teammates who previously worked on or contributed to the tests in question to explain what their intentions were with these tests. Otherwise, it's easy to misunderstand the purposes of each test.
2. **Decouple the tests**: Decouple the setup and teardown process of each test. The goal of doing so is to avoid cases where tests pass because of side effects. If some tests pass only because of side effects, then they could cause some huge headaches when they don't work.

The migration process is as much about shared consensus as sheer migration. Make sure we understand what the purpose of each test is and check that we're avoiding unintentionally passing a test that won't work independently.

### Stage four: Remove migrated tests from the end-to-end test suite

Remove the corresponding unit tests or backend integration tests from the end-to-end test suite–but only when we've first proven them to be working and stable. Although the end-to-end test suite may be slow or sometimes flaky, it's still a valuable part of our CI because it helps us validate the correctness of our application that can't be done in any other ways.

Reducing the total number of end-to-end tests greatly reduces the chances our test suite will be flaky and also reduces the time necessary for a single run of the test suite.

End-to-end testing is not absolutely bad. Unit tests, integration tests, and end-to-end tests all have their strengths and weaknesses; examining and understanding each requires a holistic view of them all.

## Our 3 goals for adding backend integration testing

When we implement projects like these, we like to state goals outright and check that we've achieved them.

### 1. Simplicity

Our primary goal during this project, and beyond, was to provide integration testing as a service to Sourcegraph users as well as team members within Sourcegraph.

Ideally, integration tests should be easy to maintain and easy to extend. Our integration tests are sophisticated, homemade integration test suites. Our team has to take the time to learn how to add new tests, how to fix broken tests, and more.

But doing so should be as familiar as writing any other Go code. Here at Sourcegraph, that's a pretty accessible measure because we mostly write Go code.

### 2. Stability

A major need is for integration testing to be dependable and reliable. When I first pushed the CI to set up this workflow, I ensured it was non-blocking.

If it failed, I aggressively reverted and reworked. I monitored the first 100 builds and they were all green. Now, it's live and it's proven to be dependable.

### 3. Invisibility

Integration testing, and all the work that went into it, should be invisible to people most of the time. Integration testing should just work. Users shouldn't have to interact with it at all because the tests should be passing. We designed it so it wasn't flashy for that reason.

Sometimes, especially on a team like mine, the best work is invisible.

## Making reliability a reality

The implementation of integration testing was the culmination of a long-running discussion about reliability.

When we initiated this project, we realized we had needed to make the shift from talking _about_ reliability to truly making things reliable.

It's easy to talk a big game, to talk about writing clean code or writing code that is easy to fix or delete, but it's harder to put these ideas into practice. It's especially hard to do so in a CI environment.

Integration testing is a major step toward better reliability and one that teams and users at Sourcegraph will benefit from for a long time. If you're wondering whether it's time to improve reliability, scope the effort needed to implement integration testing. We found it worthwhile.

## More posts like this

- [How not to break a search engine or: What I learned about unglamorous engineering](https://about.sourcegraph.com/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
- [The Nine Circles of Dependency Hell (and a roadmap out)](https://about.sourcegraph.com/blog/nine-circles-of-dependency-hell/)
