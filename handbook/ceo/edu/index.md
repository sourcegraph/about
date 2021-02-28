devs need a way to understand code. What's this API? Who owns it? Who last touched it? Who's calling it? Is it running in production? Throwing errors? All of this, and more, needs to be accessible to every dev. It needs to be so easy and fast that they won't lose flow. And it needs to be comprehensive and accurate across all of your code, or else innovation slows because nobody will really, truly know how to safely remove code, change an API, or make big improvements without breaking other teams.# Product education

NOTE: This entire document should be considered a brain dump. It often breaks the 4th wall and cycles often without delination among (1) describing the situation dryly and factually, (2) analyzing the situation critically, and (3) suggesting or speaking in the messaging we might use with an external audience. The section structure of this doc is mostly arbitrary. It is far from being ready as an immediately useful sales enablement doc!


## Who we target

There are a few ways we categorize organizations and people.

### Organization categories


### People categories

- Champions: [Personas](https://about.sourcegraph.com/handbook/marketing/personas): the roles of the people 

## Big Code (the problem)

<!-- TODO(sqs): insert [Big Code cycle](https://docs.google.com/presentation/d/1_4LXbYu4gBwE32GDFtEGpytYGw7xrV-jq6hQmIyXE40/edit#slide=id.gbea2b2251e_0_94) -->

Big Code is the vicious cycle: **more devs** leads to **more code**, which creates **more complexity**, which requires **more devs**, and so on. This makes it so much harder to innovate and ship great products to your customers. Every successful and growing organization faces this Big Code problem.

Proof points of Big Code being a valid and important problem:

- Sequoia led Sourcegraph's $50M Series C fundraising round in December 2020 because they see Big Code as the defining challenge for the top 2000 companies in the world.
- Our customer logos show that the leading companies across many industries and continents see Big Code as a problem. TODO: Convey that the Big Code problem is actually even worse in the kind of company that isn't an early adopter of Sourcegraph.
- More press coverage of Big Code: TODO
- Big Code survey: TODO
- TODO: software engineer YoY career growth ~8% and nobody expects that is going to dip
- TODO: something like: The entire field of software development has only been around for a few decades. Most of the world's code was written in the last 5 years (NOTE: made-up placeholder number). If you think you're already dealing with a lot of code and a lot of legacy code, you won't know what hits you in the next 10 years.

## Business value proposition

- What specific problems and pains (within Big Code) do we address?
- What is the business value of addressing these pains?

NOTE: This section describes the value prop of Sourcegraph in a way that's similar to the popular "Value Drivers" framework. I (@sqs) don't have a lot of experience with it, and I just used it as advisory. I don't mean to force us to use that framework if we don't want to, and I may have misunderstood parts of it.

### Boost dev productivity

With Big Code, everything your devs do takes longer and longer. They lose flow more often and get frustrated. No matter how fast your builds are, how good your deployment system is, etc., if there's a lot of code and complexity, developers will struggle to understand the code and their productivity will suffer.

Pains:

- Poor developer onboarding (for new employees and when existing employees switch projects)
- Loss of flow
- Knowledge silos
- Unclear ownership of code
- Code duplication
- Poor code quality
- Dev frustration
- Manual processes

Benefits:

- Get more from your existing dev team
- Attract, retain, and leverage top talent

What's required to solve it:

- A way for devs to find and understand all code:
  - Intelligent and intuitive for every dev to use many times daily
  - Deeply integrated with other dev tools
  - Scalable and secure for the largest enterprises

Resources:

- TODO can use the [75% of a developer's time is spent understanding code](https://docs.google.com/presentation/d/1_4LXbYu4gBwE32GDFtEGpytYGw7xrV-jq6hQmIyXE40/edit#slide=id.gbfe7309889_0_102) as a proof point

### Ease innovation

Low dev productivity may seem like "just" a developer issue, but it leads to the company-wide problem of it being harder to innovate, to ship new things, deprecate old things, or make any big improvements. You get to the end of the year and you wonder, "What did we do? How did we make so little progress on the roadmap?" That's scary to everyone at the company because you're counting on these new products and features to increase revenue.

Pains:

- Slow new product development
- Tech debt
- Process-heavy
- Backcompat consumes inordinate amount of time
- Afraid to break things
- Risky releases
- Legacy code pileup

Benefits:

- Increase revenue by shipping better products sooner

What's required to solve it:

- A way to make big improvements more quickly and safely
  - Promote reuse and refactoring of existing code and APIs
  - Faster deprecation of old code and APIs without breaking things
  - Visibility into usage trends, dependencies, ownership, etc.

### Reduce security risk

Your security risks grow as your code expands and ages. It's not just forward progress that's slowing, but also your devs experience huge setbacks whenever there are incidents, and your company faces existential threats if you leak sensitive data. You're already mitigating this, but that inevitably means lower productivity and slower innovation as devs are interrupted for incident response and more manual security/compliance processes.

Pains:

- Weeks (not hours) to fix critical bugs
- Unmaintained, decaying code
- Ad-hoc incident response
- Devs interrupted frequently

Benefits:

- Reduce disruptions to dev teams (to boost dev productivity and ease innovation)
- Reduce existential threat to business

What's required to solve it: (NOTE: this part I am least confident in being the right way to frame)

- A way to fix and monitor problems across all code
  - Powerful and flexible to solve novel and complex issues
  - Centralized, well-integrated workflow that security and devs both love

## Product description

> NOTE: The way we talk about Sourcegraph (the product) should be consistent with the value drivers above, so that it's clear how our product addresses those things. It's also important that we lay it out in a way that makes our differentiation really easy to understand.

What's required to make Big Code work? What is Sourcegraph? These 3 things:

- **Search:** Devs need a way to find code across all repositories, versions, history, both internal and open-source, all languages. If it takes more than 10 seconds to search and find code, that's a very bad developer experience. They'll lose flow, and velocity and happiness comes to a crashing halt.
- **Understand:** Devs need a way to understand code. What's this API? Who owns it? Who last touched it? Who's calling it? Is it running in production? Throwing errors? All of this, and more, needs to be accessible to every dev. It needs to be so easy and fast that they won't lose flow. And it needs to be comprehensive and accurate across all of your code, or else innovation slows because nobody will really, truly know how to safely remove code, change an API, or make big improvements without breaking other teams.
- **Automate:** Devs need a way to automate large-scale code refactors, security fixes, and migrations across hundreds or thousands of repositories. To automate, of course, you need a system that searches and understands all of your code. At Google, for example, 70% of code changes are automated, which gives the human developers tremendous leverage and happiness/flow. NOTE: See [Product positioning](https://docs.google.com/document/d/10pEDD_J5GJ8SvXb7OWpCYf_CkmJhyXEfWptg4unVQTo/edit?disco=AAAALisusMk) for a discussion of whether "Automate" is the right word. Another possibility is "Act".

This is not a "pyramid" (i.e., Search is not the base). Any of these components can be the entry point (the first thing that a customer wants to do) or hook (the most compelling reason to bring Sourcegraph in). We don't want to imply that you need to start with Search because that might turn off a VP Engineering who finds Understand most compelling and who doesn't see the value of code search. Different personas will likely find different components most interesting.

### Universal

We use the term "universal" frequently because it's a useful descriptor and differentiator for Sourcegraph.

Every product component (Search, Understand, Automate) is universal. What does this mean?

- *Search* is universal because it covers all code anywhere, regardless of code host, repository type, language, branch, etc. It also searches through all history and supports many kinds of queries.
- *Understand* is universal because it brings together all context about code from any tool, including language features (definitions, references, documentation), static analysis (SonarQube and others), runtime information (Datadog, Sentry, and others), and higher-level concepts (such as modeling what kind of tests you're writing, or whether you're using an old or new React API).
- *Automate* is universal because it lets you make any kind of change and monitor any kind of issue across all code. It's not limited to a specific type of change or problem.

### Differentiation

Our differentiation is:

1. Search, Understand, *and* Automate in a single seamless workflow and product.
1. Each of those 3 components is universal.

Compared to standalone code search tools (OpenGrok, Hound, Livegrep, FishEye): These tools just provide Search, not Understand or Automate. Their search is much less intuitive, useful, and powerful. And it's not universal in all of the ways that Sourcegraph search is universal.

Compared to GitHub (similar applies to other code hosts): GitHub provides some Search (less intuitive, useful, and powerful), minimal Understand (basic code navigation only), and minimal Automate (Dependabot and CodeQL let you monitor and fix a tiny subset of things). Also, GitHub is not universal; in particular, it only helps with code that lives on that  GitHub instance, which for many companies is a fraction of their code. Even companies whose code is all on GitHub today should be mindful to avoid vendor lock-in and ensure they're using the best tools for the job by not just relying on GitHub's built-in tools.

Compared to editors and IDEs: Editors and IDEs are optimized for editing, not for Search/Understand/Automate. Their Search is not as intuitive or powerful compared to Sourcegraph. Their Understand doesn't incorporate context from outside the editing environment (such as runtime information). And editors and IDEs aren't universal: they only search/understand/automate on your local copy of code, not across all code.

## What's different about selling Sourcegraph

Selling Sourcegraph is different from selling other kinds of enterprise software in several important ways.

### Code search has no compelling event / TODO "Creating a compelling event"

An organization--and our buyer--generally doesn't feel acute, quantifiable pain if they roll out code search next month instead of today. There are almost never any important projects or deadlines for which an organization needs code search by a specific date. Even if the buyer sees evidence of code search boosting dev productivity and happiness, it's tough to quantify the cost of waiting a few more days or weeks.

Code search is not seen as adding a brand new capability, only enhancing existing workflows.

We are mitigating this by: TODO

### Sourcegraph is not (really) a system of record

Most enterprise software is a "system of record", which means that it's where certain important data originates and lives. For example, Salesforce is the system of record for our customer/sales data.

#### Pros and cons of being a system of record

Being a system of record confers some benefits. Generally, everyone at a company *must* use (and have a paid account on) the same system of record. Also, it's hard to rip out a system of record, because you need to migrate the data, integrations, and user behavior/workflows to something else. Think of how hard it would be for us to switch from Salesforce to another CRM.

But being a system of record also has drawbacks, especially for new entrants. All of the obvious systems of record have already been built, so if a product intends to be a system of record on day 0, it will need to rip-and-replace an existing product (and migrate data, integrations, and user behavior/workflows). That means it has to face more competition and a much higher bar to meet before it's viable. For these reasons, new systems of record usually target underserved market segments instead of competing head-on with the incumbents. For example, HubSpot built its CRM for smaller companies, where Salesforce was not as well established.

#### Factors that weaken systems of record

Not all systems of record enjoy the benefits mentioned above, because 3 important factors determine the degree of lock-in over the data they hold: fragmentation, overlap, and open standards.

**Fragmentation:** If most people and companies necessarily use many different systems of record for the same kind of data, each system of record is weaker. For example, consider email, which is fragmented in multiple ways. Most people have (at least) 2 email accounts: work and personal. The decision of which system of record to use for each is independent from the other and based on different criteria, so there's room for competitors to grow (and eventually become strong enough to invade each other's territory). Also, many people will want a single place to view all of their email accounts, which gives rise to email clients that aren't the system of record (such as iOS Mail), which reduce the switching cost to a different system of record because the end users won't even notice.

**Overlap:** A system of record can be threatened by a successful product in an adjacent space whose sphere of influence overlaps with the system of record's. Considering the email example again, most iOS users will use the default iOS Mail app because Apple's influence is strong. That means that Google's user behavior/workflow lock-in over email is reduced (and this effect is separate from and in addition to that from fragmentation).

**Open standards:** If a system of record stores data, but that data is actually stored in an open standard, then there's much less lock-in. For example, consider e-mail. We use Google Workspace as our email system of record; it runs our email servers and provides Gmail as a web email client. But email is built on open standards (DNS, IMAP, SMTP, etc.). We could easily switch to another email provider with minimal disruptions. Migrating the data would be easy. And because Gmail itself supports the same open standard protocols whether the servers are Google's or some other provider's, everyone could even keep using Gmail. Therefore, Google Workspace exerts very little lock-in over our email.

These 3 factors feed each other. For example, in a domain where fragmentation and overlap is high (such as email), there is more demand for open standards.

The most important predictor of a domain having weak systems of record is whether *both* individuals and organizations 

So, where does Sourcegraph fit in?

, and Google Workspace is the system of record for our email

Spreading adoption to all code-adjacent users in a company

### Users take a while to become accustomed to using search / TODO "Winning over devs who haven't used code search before"

It's one thing to win over a dev who's a regular user of OpenGrok (or some other existing code search tool). It's another thing to win over devs who haven't used any kind of code search tool.

## Resources

- [Product and category positioning](https://docs.google.com/document/d/10pEDD_J5GJ8SvXb7OWpCYf_CkmJhyXEfWptg4unVQTo/edit)
- New slides
  - [SQS slides 2021-02](https://docs.google.com/presentation/d/1U2CLjasEhhGrhvCI5eDIPj-MR_kXiRyhZXUJ_ooBCFA/edit)
  - [AS slides 2021-02-25](https://docs.google.com/presentation/d/1-LW97oT-VU4Zu3MXB1Wgbu_bSoAkdfOCfUfx7MWO9lo/edit)
  - [(prospect) 2021-02-25](https://docs.google.com/presentation/d/1_4LXbYu4gBwE32GDFtEGpytYGw7xrV-jq6hQmIyXE40/edit)
  