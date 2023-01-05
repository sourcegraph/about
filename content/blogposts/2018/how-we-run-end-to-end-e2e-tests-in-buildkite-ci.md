---
title: 'How we run end-to-end tests in Buildkite CI'
externalTitle: 'End to end tests in Buildkite CI'
authors:
  - name: Felix Becker
    url: https://github.com/felixfbecker
publishDate: 2018-09-14T09:00-07:00
description: Here’s how we run end-to-end tests, an important part of Sourcegraph’s testing infrastructure, in Buildkite CI. 
externalDescription: Here’s how we run end-to-end tests, an important part of Sourcegraph’s testing infrastructure, in Buildkite CI. 
tags: [
  "blog"
]
slug: how-we-run-end-to-end-e2e-tests-in-buildkite-ci
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2z90IVNXxWqQgGggq4sOeO/399539c22c100b1797fa71026114bdd8/Screen_Shot_2018-09-10_at_4.46.47_PM.png
published: true
---

End-to-end tests are an important part of our testing infrastructure at Sourcegraph. At the top of the [testing pyramid](https://docs.google.com/presentation/d/15gNk21rjer3xo-b1ZqyQVGebOp_aPvHU3YH7YnOMxtE/edit#slide=id.g437663ce1_53_98), end-to-end testing ensures key user flows work properly from the user interacting with the browser all the way to backend services that work behind the scenes. However, end-to-end tests pose a couple of unique challenges. If not done right, these lead to flakiness and developers learn not to trust test failures when they happen - resulting in real bugs going unfixed. How do we prevent this?

## A good end-to-end testing system

When a commit causes an end-to-end test to fail, we need to make sure the developer who caused the failure is notified, has the confidence that the failed test identified a real problem and has enough insight into the issue to solve it. For example, we would want to show which **commit** caused the failure (including the message), **which test** is failing, and **why** it is failing.
Before the redesign of our end-to-end testing system, we had a custom service that ran the test suite periodically and posted to a Slack channel when a run failed. This wasn’t a good experience for a number of reasons:

* The failure could not be mapped back easily to a commit and author.
* There was no UI to retry a run.
* If the tests kept failing, the bot would keep spamming the Slack channel.
* There wasn’t a good way to see if the end-to-end tests were already failing before.
* The Slack UI wasn’t a good display for test results. For example, it couldn’t show CLI colors, and it wasn’t easy to add screenshots to a webhook payload.
* There was no clear way to run end-to-end tests on branches/PRs while still delivering notifications only to the relevant person.
* Logs were not streamed.

Some of these issues could have been solved by investing time to make our end-to-end bot smarter, but it would have added more complexity.

We were already using [Buildkite](https://buildkite.com/) for other continuous integration tasks and knew that it already provided these features and much more:

* Every failure is linked to a commit and author.
* Builds and steps can be rerun.
* UI for seeing recent runs.
* CLI colors.
* Streamed logs.
* Customizable email notifications.
* Integration into notification tools like [CCMenu](http://ccmenu.org/).
* Prevents deploys while tests are running.
* My favorite feature: Screenshots in CLI output.

## Defining a Buildkite pipeline for end-to-end tests

To accomplish testing Sourcegraph truly “end-to-end”, the tests are run against a real deployment. At Sourcegraph, we use Docker and Kubernetes to deploy our application. Our pipeline builds the images for the current commit, then the `deploy` step in the pipeline deploys the fresh images with `kubectl set-image` to a dedicated staging cluster and waits for the rollout to finish with `kubectl rollout status`.

The YAML pipeline definition looks similar to this:
```yaml
env:
 FORCE_COLOR: '1'


steps:
 # ... omitted: running unit tests etc ...


 - label: ':rocket:'
   branches: master
   concurrency_group: deploy
   concurrency: 1
   artifact_paths: *.png
   env:
     # Tell end-to-end tests which endpoint to hit
     SOURCEGRAPH_URL=https://staging.sourcegraph.com
   command: |
     docker build -t sourcegraph/frontend:$BUILDKITE_COMMIT .
     docker push sourcegraph/frontend:$BUILDKITE_COMMIT
     docker tag sourcegraph/frontend:$BUILDKITE_COMMIT sourcegraph/frontend:latest
     docker push sourcegraph/frontend:latest
     kubectl --context=staging set image frontend frontend=sourcegraph/frontend:$BUILDKITE_COMMIT
     kubectl --context=staging rollout status deployment/frontend
     npm ci
     npm run test-e2e
     kubectl --context=production set image frontend frontend=sourcegraph/frontend:$BUILDKITE_COMMIT
     kubectl --context=production rollout status deployment/frontend
```

The `concurrency_group` and `concurrency_limit` settings here prevent other deploys from running at the same time and ensures they are run in order of creation. It acts like a “lock” on the staging cluster - no other build (not even from a different pipeline) can touch the staging cluster until the end-to-end test run of this build completed.

## Writing an end-to-end test suite

For the actual tests, we use [Puppeteer](https://github.com/GoogleChrome/puppeteer) - a lightweight library by Google to control a headless Google Chrome instance. It will navigate to pages, click elements, and assert that certain elements appear or have the right content.   Together with a test runner like [Mocha](https://mochajs.org/) that supports `async`/`await` in tests, it enables tests that are both easy to read and write.

### Making assertions

Being run against an actual deployment, end-to-end tests are subject to latency, so most actions and assertions need to account for variable loading times. That means it is not possible to, for example, programmatically click an element and directly assert that the desired effect occurred. Adding an artificial timeout between the action and the assertion doesn't work well because the time that needs to be waited for can vary. If the delay is too short, then the test will fail when it should pass, but if the delay is too long then it slows down the entire test suite. A better approach is to retry every assertion a fixed number of times, with a small delay between every retry. The [`p-retry`](https://www.npmjs.com/package/p-retry) module from npm makes this very easy.

Mocha’s `--retries` option is also helpful to prevent flakiness, but be aware that this might hide actual failures that only happen a fraction of the time.

To make sure end-to-end tests are not accidentally broken, we use special CSS classes prefixed with `e2e` for elements that are asserted on in tests.

## Giving insight into failures with screenshots

If a test fails, we tell Puppeteer to save a screenshot to disk named after the test name:
```js
afterEach(function () {
    if (this.currentTest && this.currentTest.state === 'failed') {
        const fileName = this.currentTest.fullTitle().replace(/\W/g, '_') + '.png'
        await page.screenshot({ path: fileName })
        if (process.env.CI) {
            console.log(`\u001B]1338;url="artifact://${fileName}";alt="Screenshot"\u0007`)
        }
    }
})
```

In the pipeline, we defined that all .png files are uploaded as artifacts to Buildkite. We then use [Buildkite’s special ANSI escape sequence](https://buildkite.com/docs/pipelines/images-in-log-output) to make it display the screenshot right in the log output of the test failure.

![buildkitelog](//images.ctfassets.net/le3mxztn6yoo/2z90IVNXxWqQgGggq4sOeO/399539c22c100b1797fa71026114bdd8/Screen_Shot_2018-09-10_at_4.46.47_PM.png)

This is incredibly valuable to reveal why a test might have failed - for example, did only a button not appear, or is its whole parent component not rendered? Another benefit is that real failures are less likely to be dismissed as flakiness because the screenshot serves as a proof that something is truly wrong.

## Conclusion

So far, this new end-to-end testing system works well for us - confidence in tests has increased, and engineers feel more responsible to fix failures quickly.

Do you have interesting end-to-end testing stories? Tweet us [@sourcegraph](https://twitter.com/sourcegraph)!

## More posts like this

- [How we used universal code search to eliminate secrets from our codebase](https://about.sourcegraph.com/blog/eliminate-secrets-from-codebase-with-universal-code-search/)
- [How not to break a search engine or: What I learned about unglamorous engineering](https://about.sourcegraph.com/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
