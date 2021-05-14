# Batch Changes CE onboarding

Welcome to Batch Changes! This page is primarily for new members of the CE team, but it could be helpful to others, too! After going through these steps, you should:

- understand what Batch Changes is
- be able to present it to customers from a value, usage, and functional perspective
- be comfortable demoing Batch Changes to developers and answering questions

## Prerequisites
General [CE onboarding](../../ce/onboarding.md)

## Part 1: Discover Batch Changes
- Watch the [demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw) and checkout the [landing page](https://about.sourcegraph.com/batch-changes/)
- What is Batch Changes, and why does it matter to customers? Read about [product positioning and messaging](../../marketing/batch_changes_positioning.md)
- How to demo Batch Changes? Watch the [Batch Changes deep dive](https://docs.google.com/presentation/d/1CN3KQf1Hfdb4RO6FgBgKuiHK4ERcOAHPgVnOcBu-MPU/edit#slide=id.ga366db8d9b_0_116)
- How does Batch Changes work? Read the Batch Changes documentation section of the [Supporting Batch Changes guide](./supporting-batch-changes#batch-changes-documentation.md)


## Part 2: Use Batch Changes

- If you are blocked at any time during onboarding, ask for help in [#batch-changes](https://sourcegraph.slack.com/archives/CMMTWQQ49).
- Feel free to document your onboarding experience and share it back with the Bacth Changes team so that we can make this even better!
- In this tutorial, we will use [k8s.sgdev.org](https://k8s.sgdev.org) as our environment. You should have access by default using SSO.
- Tip: Use the docs extensively to complete the tutorial steps.

### Step 1: Quickstart
Let's start with a quick setup example to warm up: [Quickstart](https://docs.sourcegraph.com/batch_changes/quickstart).

Answer those questions:
- what does `on` do?
- what are `steps`?
- what is the difference between *apply* and *publish*?

### Step 2: comby
Let's use [comby](https://comby.dev/). Batch Changes can run any code change tool, but comby is great for structural-type change. See how it works with Batch Changes in this [tutorial](https://docs.sourcegraph.com/batch_changes/tutorials/refactor_go_comby). Don't publish your changesets yet!

### Step 3: The `on` attribute
Can you scope down your batch change to only a few repos? Look at the [`on`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on) attribute, and scope down your batch-change to <repo1> <repo2> <repo3>

### Step 4: Publishing
Sometimes you want to publish only _some_ but not all changesets to the codehosts and keep the others unpublished, for example to test out if the repository owners will merge the changesets. Find out how to publish only on <repo> using the [`published`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#changesettemplate-published) attribute

### Step 5: Templating
Can you use [templating](https://docs.sourcegraph.com/batch_changes/references/batch_spec_templating) to TODO:find an approachable use case compatible with the comby example

### Step 6: Tracking existing changesets
Batch Changes can track changesets that have been created manually. Create a new batch change to track the last 10 changesets opened on [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph).

## Part 3: Get feedback
Record yourself demo-ing Batch Changes, and send a link to your video to @malo to get feedback and fine tune your approach!

## There's always more!
Congrats!!! This is the end of the Batch Changes CE onboarding, we hope it was useful to you!

Feel free to continue exploring the docs, and check out our [Batch Changes examples](https://github.com/sourcegraph/batch-change-examples) (contributions welcome).
