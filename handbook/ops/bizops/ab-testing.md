# A/B testing

## Why A/B testing
A/B testing is a great way to test out which of two or more variants (A or B) of a website or product perform better. It’s frequently used as an experimentation methodology because it allows us to get rid of a number of statistical biases, and isolate the signal (an increase in a metric) from the noise (random fluctuations in the metric). The power of A/B testing comes from randomization: users are allocated randomly to the control group or A (no change) and a proposed improvement (B).

Measuring a metric before/after a change (pre/post) sometimes doesn’t work, because many things are happening at the same time. If we launch a marketing campaign AND a feature to improve retention, and we see retention decrease, how do we know if it’s caused by poorly qualified traffic from the marketing campaign or by the feature not performing? Recently, retention was cut by half, for a yet unknown reason that we guess is a change in the nature of the traffic. If we had A/B tested that week, we could have measured the impact of new features, since both cohorts would have seen, on average, the same amount of “normal” and “weird” traffic.

## When to A/B test

A/B testing is a good fit when there are several competing valid options with no clear answer, a clear metric to measure success, and a large enough number of users to test on. Evaluate:

#### Impact

A/B tests take time and resources, and we can only run a few A/B tests at a time to avoid interferences between tests. We should keep A/B testing for high-impact metrics optimization, that match the other conditions here.

#### Uncertainty

A/B testing is useful when there are several options to choose from, possibly with competing explanations on why they would work, but no clear winner.

It’s no use A/B testing versions if we already know the result with high probability. Sometimes though, we will want to use A/B testing for things we know are important just to *quantify* impact (is it worth maintaining this?), as opposed to just *validate* (yes/no) impact.

#### Measurement

A/B testing requires a clear quantitative way to measure what is "better". A common advise is to pick a single, clear metric so that there is no ambiguity in deciding if the change `passed` or `failed`.


#### Volume of users to reach statistical significance

A/B testing requires a large enough number of users to get statistically significant results. The smaller the number of users in the A/B testing cohort, the more the change needs to have a big impact on the metric to be measurable. This is because the signal (the impact of the change) needs to be higher than the noise (the random fluctuation in a metric).

For example, retention fluctuates week over week for "random" reasons we don't understand. The more users, the smaller those "random" fluctuations will be: this will make it possible to decide wether a change caused by an experiment was likely random, or likely caused by the experiment.

Running A/B tests on a number of users that is too small is inefficient (waste time to setup the A/B test), inconclusive (the result will be that no conclusion can be made) and sometimes counterproductive (miscommunicated, an insignificant A/B test leads teammates to draw conclusions that aren't valid and can be hard to debunk). In that case, it's better to choose another method, such as user interviews.

### Examples

#### Good A/B test candidates

- Evaluating signup flows, or any flow that result in a measurable action
- Evaluating versions of button placement, CTAs, landing pages

#### Bad A/B test candidates

- Launching a new key feature backed by product and UX research: success can be measured directly with an adoption metric (there is an easier way)
- Fixing a frequently reported bug likely does not require A/B testing (no uncertainty)
- Changing the design to build brand trust (no metric)

## How to run an A/B test

After you identify a good A/B test candidate:

### Define the A/B test

- Define the target metric
- Define the A, B (and more) versions
- Define the length of the test, depending on the number of users you need, and check for statistical significance with a calculator ([example](https://www.optimizely.com/sample-size-calculator/))
- Pick a feature flag name for your A/B test (eg. `w0-signup-optimization`)
- Document that in an issue, you can use this [issue template](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=AB-test&template=ab-test.md&title=A%2FB+test%3A+%3Cname%3E). Make the title explicit so that others know it's an A/B test.
- Label all the issues that will go into that A/B test with `AB-test/<flag-name>`. That way anyone can see what change are in a given A/B test, and what the name of the feature flag is. It will also make it easier to cleanup the flag when the test ends. [Example](https://github.com/orgs/sourcegraph/projects/181?card_filter_query=label%3Aab-test%2Fw0-signup-optimisation).


### Setup the A/B test

- Add your A/B test to the [tracker](https://docs.google.com/spreadsheets/d/1BSLrcvnhq-7X9XrsM81MQePYBVjozxB2GWgNmOUdyeI/edit) and sync with BizOps to make sure it will not conflict with other A/B tests.
- [Use a feature flag](https://docs.sourcegraph.com/dev/how-to/use_feature_flags) to setup and rollout the A/B test

### Analyze the A/B test
Analyze and write a report in a source of truth. Link to that in the original A/B test ticket.

### Cleanup
You should book some time for cleaning up after the A/B test. That can be either [removing the flag](https://docs.sourcegraph.com/dev/how-to/use_feature_flags#disable-or-delete-the-feature-flag) and rolling out the changes, or removing the changes altogether. You can create a ticket for this when defining the test if useful.

## Resources

- [How to do A/B testing](https://docs.google.com/document/d/1UheKgsOGSDQRFPjsoYpKismnKeqU_ANX7PRHs8uIQCE/edit#)
- Why you shouldn't call experiments early [video](https://www.youtube.com/watch?v=AJX4W3MwKzU)
