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

### Feature mapping

How do Search, Understand, and Automate map to Sourcegraph product features?

- Search: code search, plus all the work to sync code and permissions across many different code hosts and other sources
- Understand: all the contextual information we can provide: code intelligence, extensions (both the extensions API and specific extensions, such as Datadog), code insights (which is a way to model higher-level concepts in code; currently we think of it as "dashboards and charts" but I would like us to shift to thinking of code insights as a way to model concepts such as "this is a unit test vs. slow e2e test" or "this React component is using the new good API, not the bad old API", and the dashboards/charts would just be one of many ways that these concepts are exhibited); plus bringing all these things into the editor (not just on the web and code host)
- Automate: batch changes (fka campaigns), code monitoring, the future server-side execution to fulfill the promise of "set an invariant and uphold it across all your code forever", and more ways that these kinds of fixes/edits can be made without heavy user involvement (such as subscribing to batch changes from all OSS projects your company depends on, suggesting that a change applied to 1 project be applied to all (eg upgrading a dependency version), and supporting extensions that make certain kinds of refactors easy and 1-click from the Sourcegraph file view)

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

Compared to standalone code search tools (OpenGrok, Grep.app, Hound, Livegrep, FishEye): These tools just provide Search, not Understand or Automate. Their search is much less intuitive, useful, and powerful. And it's not universal in all of the ways that Sourcegraph search is universal (see "[Universal](#universal)" section).

Compared to GitHub (similar applies to other code hosts): GitHub provides some Search (less intuitive, useful, and powerful), minimal Understand (basic code navigation only), and minimal Automate (Dependabot and CodeQL let you monitor and fix a tiny subset of things). Also, GitHub is not universal; in particular, it only helps with code that lives on that  GitHub instance, which for many companies is a fraction of their code. Even companies whose code is all on GitHub today should be mindful to avoid vendor lock-in and ensure they're using the best tools for the job by not just relying on GitHub's built-in tools.

Compared to editors and IDEs: Editors and IDEs are optimized for editing, not for Search/Understand/Automate. Their Search is not as intuitive or powerful compared to Sourcegraph. Their Understand doesn't incorporate context from outside the editing environment (such as runtime information). And editors and IDEs aren't universal: they only search/understand/automate on your local copy of code, not across all code.

## What's different about selling Sourcegraph

Selling Sourcegraph is different from selling other kinds of enterprise software in several important ways.

### Code search has no compelling event / TODO "Creating a compelling event"

An organization--and our buyer--generally doesn't feel acute, quantifiable pain if they roll out code search next month instead of today. There are almost never any important projects or deadlines for which an organization needs code search by a specific date. Even if the buyer sees evidence of code search boosting dev productivity and happiness, it's tough to quantify the cost of waiting a few more days or weeks.

Code search is not seen as adding a brand new capability, only enhancing existing workflows.

We are mitigating this by: TODO

### Sourcegraph is not (really) a system of record

Most enterprise software is a "system of record", which means that it's where certain important data lives. For example, Salesforce is the system of record for our customer/sales data. Google Workspace is the system of record for our email.

Here's a quick test for whether something is a system of record. If you got rid of it and completely deleted your accounts on it, would you lose any data? For Salesforce and Google Workspace, the answer is yes. For Google web search (which isn't a system of record), the answer is no (ignoring secondary data like your search history).

#### Pros and cons of being a system of record

Being a system of record confers some benefits. Generally, everyone at a company *must* use (and have a paid account on) the same system of record. Also, it's hard to rip out a system of record, because of lock-in: you need to migrate the data, integrations, and user behavior/workflows to something else. Think of how hard it would be for us to switch from Salesforce to another CRM.

But being a system of record also has drawbacks, especially for new entrants. All of the obvious systems of record have already been built, so if a product intends to be a system of record on day 0, it will need to rip-and-replace an existing product (and migrate data, integrations, and user behavior/workflows). That means it has to face more competition and a much higher bar to meet before it's viable. For these reasons, new systems of record usually target underserved market segments instead of competing head-on with the incumbents. For example, HubSpot built its CRM for smaller companies, where Salesforce was not as well established.

#### Factors that weaken systems of record

Not all systems of record enjoy the benefits mentioned above to the same degree. There are 3 important factors determine the degree of lock-in that a system of record exerts: fragmentation, overlap, and open standards. (NOTE: Weak systems of record are usually good for customers and consumers! Maybe rethink the weak/strong terms used here?)

**Fragmentation:** If most people and companies necessarily use many different systems of record for the same kind of data, each system of record is weaker. For example, consider email, which is fragmented in multiple ways. Most people have (at least) 2 email accounts: work and personal. The decision of which system of record to use for each is independent from the other and based on different criteria, so there's room for competitors to grow (and eventually become strong enough to invade each other's territory). Also, many people will want a single place to view all of their email accounts, which gives rise to email clients that aren't the system of record (such as iOS Mail), which reduce the switching cost to a different system of record because the end users won't even notice.

**Overlap:** A system of record can be threatened by a successful product suite in an adjacent space whose sphere of influence overlaps with the system of record's. Considering the email example again, most iOS users will use the default iOS Mail app because Apple's influence is strong. That means that Google's user behavior/workflow lock-in over email is reduced (and this effect is separate from and in addition to that from fragmentation).

**Open standards:** If a system of record stores data, but that data is actually stored in an open standard, then there's much less lock-in. For example, consider e-mail. We use Google Workspace as our email system of record; it runs our email servers and provides Gmail as a web email client. But email is built on open standards (DNS, IMAP, SMTP, etc.). We could easily switch to another email provider with minimal disruptions. Migrating the data would be easy. And because Gmail itself supports the same open standard protocols whether the servers are Google's or some other provider's, everyone could even keep using Gmail. Therefore, Google Workspace exerts very little lock-in over our email.

These 3 factors feed each other. For example, in a domain where fragmentation and overlap is high (such as email), there is more demand for open standards (and for those standards to be respected). In a domain that happened to start with open standards (such as email, because the protocols were created by people who weren't thinking of email server business models), fragmentation is higher.

The most important predictor of a domain having weak systems of record is whether *both* individuals and organizations adopt and use it separately. That is the case for email (you chose your personal email provider independently of your work IT department's choice) but not for CRMs (you go along with whatever your company chose).

#### What this means for Sourcegraph

Today, Sourcegraph is a "system of engagement", not a system of record. The systems of record that we integrate most closely with are the code hosts (such as GitHub and GitLab).

Code hosts are relatively weak systems of record:

- Fragmentation is high, both in the overall market and within individual large enterprises.
  - Overall market fragmentation: GitHub, GitLab, and Bitbucket have roughly equal market shares, and they're all fiercely competitive. Few people expect any single one to become dominant. (GitHub has the vast majority of open-source code, but for this analysis, it makes sense to consider all code, including organizations' code.)
  - Large enterprises' code is scattered across many code hosts. It's very rare for a large enterprise to have all of their code on a single code host. We often see dozens of code hosts, such as a large US bank with 40+ instances of Bitbucket, many newer instances of GitLab in early-adopter business units, some code on GitHub.com, some instances of GitHub Enterprise Server, plus legacy code in numerous other systems. It'd be a massive effort to centralize all code in one place, and for these large enterprises, no single code host instance could support the necessary scale or requirements. Even if all code could be centralized, rogue dev teams or M&A would likely introduce other places where code lives.
- Overlap: Atlassian's strong product suite besides Bitbucket (Jira, Confluence, etc.), Microsoft's enterprise install base and strong product suite, and GitLab's broad feature set all create reasons for customers to choose a code host not *just* because of how good it is as a code host, but rather how well it meets other requirements that vary widely from customer to customer.
- Open standards enable easy portability and less data lock-in. Code hosts generally serve Git repositories, and Git is an open standard. A Git repository is easily portable from one code host to another. Code hosts only truly own the repository metadata (such as repository/user permissions, issues, and pull requests).

Let's see how the pros/cons mentioned above apply to Sourcegraph today:

- No mandated usage. Using Sourcegraph code search is generally optional (not mandated) for users at a company. It doesn't really make sense to *mandate* use of a search product for all employees, because search helps with many different workflows and not just one specific, clearly defined workflow. So, just like Google web search, our product needs to be *so* good that users affirmatively decide to use it (and remember it) each time they have a problem it can solve. (I like to think that this makes us [try harder](https://slate.com/business/2013/08/hertz-vs-avis-advertising-wars-how-an-ad-firm-made-a-virtue-out-of-second-place.html) to build a great product.)
- No data lock-in. Sourcegraph doesn't exert data lock-in, because there isn't really much data that lives in Sourcegraph. Some vendors might like exerting data lock-in on their customers, but we're quite okay with lacking this "advantage".
- No rip-and-replace needed. Sourcegraph doesn't *replace* any existing system of record, so it's much easier to deploy (with respect to both organizational buy-in and technical complexity). The other code search tools that Sourcegraph sometimes replaces are not systems of record and have few integrations that rely on them, so they are relatively easy to rip out.

Our future roadmap will bring us closer to being a system of record in 2 ways:

- We'll become a system of record, not for code but for Automate (batch code changes and code monitoring). For example, in a company with 200 batch changes in the past year and 50 ongoing patterns being monitored, all that data is important. There are no existing systems of record for these kinds of things because the capabilities are novel.
- We'll become a "system of integration", the sole place inside a company where *every* dev goes to find things across *all* the code and can better understand code because *all* the context is there. Sourcegraph will be exhaustive and comprehensive. While most of the underlying data will be stored on other systems, in large companies there are so many other systems that the one system that brings them all together has many of the benefits of being a system of record.

### Users take a while to become accustomed to using search / TODO "Winning over devs who haven't used code search before"

It's one thing to win over a dev who's a regular user of OpenGrok (or some other existing code search tool). It's another thing to win over devs who haven't used any kind of code search tool.

## Resources

- [Product and category positioning](https://docs.google.com/document/d/10pEDD_J5GJ8SvXb7OWpCYf_CkmJhyXEfWptg4unVQTo/edit)
- New slides
  - [SQS slides 2021-02](https://docs.google.com/presentation/d/1U2CLjasEhhGrhvCI5eDIPj-MR_kXiRyhZXUJ_ooBCFA/edit)
  - [AS slides 2021-02-25](https://docs.google.com/presentation/d/1-LW97oT-VU4Zu3MXB1Wgbu_bSoAkdfOCfUfx7MWO9lo/edit)
  - [(prospect) 2021-02-25](https://docs.google.com/presentation/d/1_4LXbYu4gBwE32GDFtEGpytYGw7xrV-jq6hQmIyXE40/edit)
  