---
title: 'Sourcegraph for non-devs'
description: "Sourcegraph isn't just for software developers. Learn how product managers and analytics/business operations teammates use Sourcegraph as a powerful timesaver and cheat sheet that saves them 20-60 minutes multiple times per week."
author: Eric Brody-Moore, Joel Kwartler
publishDate: 2022-02-17T00:00-07:00
tags: [blog]
slug: sourcegraph-for-non-devs
heroImage:
socialImage:
published: true
---

Sourcegraph is an extremely powerful developer tool used by engineers at top companies, from Uber and Lyft to Amazon and SoFi. But we’ve also discovered it’s a powerful timesaver and cheat sheet for teams across an organization, such as Product Management, Business Operations, Analytics, and Marketing.

Sourcegraph saves our Product Managers and Analytics/Business Operations teammates 20-60 minutes a few times a week, and provides definitive answers to a surprising range of questions.

The difference between “I can figure this out in five minutes with a Sourcegraph search” versus “I can ask someone on another team in another timezone, and if they don’t know, follow up with a third person in a third timezone” is often the difference between taking care of something versus letting that task die on a todo list backlog.

## Product Managers

_This section is written by, the Product Manager for Code Insights. He’s a brilliant, genuinely kind human being who’s being played by Brad Pitt in an upcoming HBO biopic._

As a product manager at a fast growing startup, I frequently need to know how our features interact, which analytics metrics other teammates have already built, and which product team processes or standards exist versus those that haven’t been built out yet. I use Sourcegraph to help me quickly answer these types of questions.

### What actions do our metrics track?

I’d just joined Sourcegraph in September 2020 as the first PM for the extensibility team. I went through our Business Intelligence platform but didn’t know what “ViewRegistryExtensionManage” meant or how it was different than “ViewRegistryExtensionContributions.” I turned to Sourcegraph.

**Search:** First, I [ran this search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+viewRegistryExtensionManage&patternType=regexp), got no results, [ran this search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+view+RegistryExtensionManage&patternType=regexp), got results, and then [ran this search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+logViewEvent%28%27RegistryExtension&patternType=literal), which gave me a quick reference for the pages all the events fired on. From there, I could glance through the strings and comments on the page to map them back to states in our app.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MjAz?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 200px;"></iframe>
</p>

**Impact:** I didn’t need to ask a teammate or pull the repo(s) and search it locally. The latter means I also didn’t have to clutter my desktop with yet another open application window.

**Time Saved:** 10 minutes (20 if we had multiple repos) and I didn’t need another open desktop application.

**Follow-up situation:** We can quickly see the names of all of our view analytics events and be able to go to what page they’re triggered on with [this search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+logViewEvent%28%27...%27%29+count:all&patternType=structural). (Bonus: with the [Open-in-Figma extension](https://sourcegraph.com/extensions/Joelkw/open-in-figma) I can then 1-click open a mockup of the page to get an immediate understanding of “what page fires this event” without reading the code to figure out what page it renders.)

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTc4?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 225px;"></iframe>
</p>

### I’m mid-conversation with a customer. Is another team’s feature affecting our feature?

A customer was seeing incomplete result counts for the search results returned for a Code Insights feature, making it impossible to reason about their code based on these incomplete results.

**Search:** A term like “limit 5000” is likely to bring up many hits throughout our codebase, so I used [a diff search with a timeframe](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+type:diff+limit+5000+after:%22five+months+ago%22&patternType=regexp) to scope my search to the time the behavior started appearing.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTc5?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 190px;"></iframe>
</p>

I quickly found [our search team had changed a limit](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/commit/326d250079b789ca716878c6d2e5bc694b4ea97a?visible=1) that affected one of my team’s features. I was able to understand who made the change and why they made it in a few seconds.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTgw?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

**Impact:** We could immediately respond to the customer and confirm the behavior as well as provide more context for the estimated time to fix.

**Time Saved:** 18 hours waiting for a teammate to answer my question – hours that were especially important given we were actively working with a customer

### What's the Sourcegraph standard for error message syntax?

I needed to finish writing the error messages that display to users for a major new feature. We have [error message guidelines](https://about.sourcegraph.com/handbook/communication/content_guidelines/actionable_language#error-messages) in our handbook, but it’s easier to quickly learn something with an example.

**Search:** [This search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+error+try&patternType=regexp) quickly gave me dozens of in-product examples.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTgx?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

**Impact:** I was able to produce more unified product messaging.

**Time Saved:** I saved 10 minutes I would have spent clicking through the product and avoided causing errors I would have otherwise needed to cause so I could find live examples.

### Situation: Determine the different [blank]@sourcegraph emails we direct users to across our entire user-facing codebase

I needed to add a contact email to some new documentation, but wasn’t sure what email addresses we’d already set up and which would be the best to reuse.

**Search:** [This search](https://sourcegraph.com/search?q=context:global+r:sourcegraph/+mailto:...%40sourcegraph.com+-file:test+count:all&patternType=structural) showed me what email addresses were already in use.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTgy?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 190px;"></iframe>
</p>

**Impact:** We learned we have a “feedback@sourcegraph” email that was better than the “support@” email I was about to use.

**Time Saved:** We saved hours or even days. The alternative solution would have involved searching every single repository or asking every long-tenured teammate to list what emails they recall seeing used.

**Follow-up situation:** What anchor text do we generally use for the email link, or do we display the direct email? [Search](https://sourcegraph.com/search?q=context:global+r:sourcegraph/+mailto:feedback%40sourcegraph.com&patternType=literal):

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTg0?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

### Should we use “prototype” or “experimental” for early-stage product features?

[Feature classifications are important](https://handbook.sourcegraph.com/departments/product-engineering/product/process/beta_and_experimental_feature_labels#why-we-use-these-labels) because they help us set user expectations, classify support SLAs and ownership, and communicate internally about the maturity of a feature. In choosing what to call our pre-beta feature level, we wanted to quickly see what teammates had already gravitated towards.

**Searches:**

[Search one](https://sourcegraph.com/search?q=context:global+r:sourcegraph/sourcegraph%24+experimental+count:all&patternType=regexp)

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTg1?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

[Search two](https://sourcegraph.com/search?q=context:global+r:sourcegraph/sourcegraph%24+prototype+count:all&patternType=regexp)

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTg2?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

**Impact:** In 60 seconds, we determined we used “experimental” fives times as often as “prototype.” Given that already existing, informal tendency, we [codified “experimental” in our handbook](https://handbook.sourcegraph.com/departments/product-engineering/product/process/beta_and_experimental_feature_labels) as the official Sourcegraph label.

## Analytics and Business Operations

_This section was written by a member of the Business Operations team. He can give other teammates demos of Sourcegraph, but they’re generally prefaced with “Joel can do this better than me.”_

### How has the Sourcegraph product data architecture changed over time?

The architecture of our internally-facing data is ever-changing, so it’s critical we’re able to keep up with it so our data models are up-to-date and accurate.

**Searches:**

[This search](https://sourcegraph.com/search?q=context:%40ericbm+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:%5Einternal/database/schema%5C.md+type:diff&patternType=literal) shows how our Postgres db structure changes over time.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTg3?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

[This search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph+eventLogger.log%28+type:diff&patternType=literal) helps us stay on top of which events. Our Data team has [code monitors](https://docs.sourcegraph.com/code_monitoring/how-tos/starting_points) set up so we get real-time notifications when individual events are added or removed.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTg4?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

**Impact:** These searches put the information that analysts need in their hands so that they can understand our backend data structures when they create reports. We can click through the PRs that make these changes to understand the full context behind why a change was made and what it means.

**Time saved:** In most cases, these searches remove the need to talk to the teams who maintain our database schemas, a process that can take days, especially in an asynchronous environment.

### How can I monitor our self-hosted telemetry infrastructure to get ahead of potential bugs?

Our data warehouse schemas need to mirror schemas in our telemetry code. If it doesn’t, it isn’t able to receive data coming from self-hosted instances. This gap can lead to data losses, which have ramifications on our ability to inform decisions with data.

**Search**: [This search](https://sourcegraph.com/search?q=context:global+repo:%5Egitlab%5C.com/sourcegraph/sourcegraph%24+file:%5Ecmd/frontend/internal/app/updatecheck/handler%5C.go+json+type:diff&patternType=literal) checks for schema mirroring.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTg5?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 190px;"></iframe>
</p>

**Impact:** Telemetry sometimes breaks – this is a reality for most data teams. At Sourcegraph, it used to take days to realize something was broken. It then took hours to search through logs to determine which change was made to our telemetry and how to fix it. Now, Sourcegraph code monitoring immediately alerts us when a change goes in and what it was, so we can minimize data loss.

**Time saved:** Code monitoring saves us the 30 minutes required to get up to speed on what is leading to broken data pipelines, and saves us even more time and resources we’d otherwise spend minimizing data loss (and explaining to the company why data was lost and what the consequences of that loss will be).

### Which Google Analytics tags are used on our various web properties?

“Which Google Analytics account should I even be using?” was a frequent question over the first few months we had a marketing team.

**Search**: [This search](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/about+UA-40540747-20+type:diff&patternType=literal) finds which Google Analytics tags were in use on our site.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTkw?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

**Impact:** Our Google Analytics had inconsistent data from historical changes in our web properties and nobody quite knew which web property to use within Google Analytics because they all had different numbers. I did a diff search for which tags were actually on our site and the history of changes and the search above came back with results. I was able to see which tag was in production, [when it was added](https://sourcegraph.com/github.com/sourcegraph/about/-/commit/2b60ef75c86b97bd27c8901c7ff55aadafc55d42), and who to talk to about the history of our Google Tag Manager (spoiler: it was our CEO @sqs – I decided not to bother him with it and just move forward!)

**Time saved:** Exploring Google Analytics with Sourcegraph saved us a couple hours we’d have otherwise spent tracking down who might have historical knowledge of our Google Tag Manager configuration. It likely saved us even more time too, since we needed to investigate past changes in Google Analytics.

### Where do we need to update our contact information and address on our web properties?

When Sourcegraph decided to go [fully remote](https://about.sourcegraph.com/blog/our-journey-to-all-remote/), we changed our permanent office location. Doing this has legal and HR ramifications, so we had to update all our web properties to stay in compliance.

**Search**: [This search](https://sourcegraph.com/search?q=context:%40sourcegraph/all+142+Minna&patternType=literal) helped us update our web properties when we went fully remote.

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTkx?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 175px;"></iframe>
</p>

**Impact:** We were able to maintain consistency among documents and information required by law to keep us out of trouble.

**Time saved:** We saved 10 minutes (and a lot of stress). The alternative would have been searching repo-by-repo and hoping we found everything.

### Where do fields in HubSpot forms come from and how should we implement new ones?

We use HubSpot forms for all of our opt-in form submissions. These forms are coded into our web properties by the software engineering teams, so it’s essential that the communication about what is being collected is seamless between the marketing, data, and engineering teams.

**Searches**:

We used [this search](https://sourcegraph.com/search?q=context:%40sourcegraph/all+hubspot&patternType=literal) to start the process, then:

- HubSpot -> Find references on [hubspot util](https://sourcegraph.com/gitlab.com/sourcegraph/sourcegraph@04a9ed224cd9887f54040c0ee388074df345c7df/-/blob/cmd/frontend/graphqlbackend/survey_response.go?L113:12#tab=references) or [SubmitForm](https://sourcegraph.com/gitlab.com/sourcegraph/sourcegraph@04a9ed224cd9887f54040c0ee388074df345c7df/-/blob/cmd/frontend/graphqlbackend/survey_response.go?L113:33#tab=references)
- [This search ](https://sourcegraph.com/gitlab.com/sourcegraph/sourcegraph/-/blob/cmd/frontend/graphqlbackend/survey_response.go#L107:20) to figure out which fields we’re sending back and the data type
- Send this to a dev to understand how we implement forms and who to talk to if needed
- Give [this link](https://sourcegraph.com/gitlab.com/sourcegraph/sourcegraph/-/blob/cmd/frontend/graphqlbackend/survey_response.go?L112:20) example to developers when understanding how to implement a new in-product survey
- We were wondering if is_server_admin in HubSpot was populating from our code or HubSpot workflow, so I searched [this](https://sourcegraph.com/search?q=context:global+repo:%5Egitlab%5C.com/sourcegraph/sourcegraph%24%4004a9ed2+isServerAdmin&patternType=literal)

<p>
    <iframe src="https://sourcegraph.com/embed/notebooks/Tm90ZWJvb2s6MTky?theme=light" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups" style="width: 100%; height: 750px;"></iframe>
</p>

**Impact**: I was able to give our software engineers a clear requirements document on which fields they should pull from when implementing a new HubSpot field. I was also able to include best practices for adding HubSpot forms in our code based on previous PRs we had committed.

**Time saved**: I saved a few async hours going back and forth with a software engineer to answer a question from our marketing team, and saved any time I would’ve gone back and forth with our software engineering team on building new forms into product.
