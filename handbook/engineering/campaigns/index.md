# Campaigns team

<img src="https://storage.googleapis.com/sourcegraph-assets/campaigneros.png"  align=right alt="Campaigñeros Logo">

User-facing documentation: https://docs.sourcegraph.com/user/campaigns

Developer documentation: https://docs.sourcegraph.com/dev/campaigns_development

### New, work-in-progress UX

We're working on a new flow and a new way for people to create campaigns based on the beta feedback. See [#10921](https://github.com/sourcegraph/sourcegraph/pull/10921) and the following new doc pages (which are "pre-written" prior to being implemented to get us all on the same page about the changes we'll be making):

- [Campaigns main doc page](https://docs.sourcegraph.com/@campaigns-new-flow/user/campaigns)
- [Hello World Campaign guide](https://docs.sourcegraph.com/@campaigns-new-flow/user/campaigns/hello_world_campaign)
- [Campaigns design doc](https://docs.sourcegraph.com/@campaigns-new-flow/dev/campaigns_design)

## Vision

**Find code that needs to be changed and change it by running code**.

## Contact

- #campaigns-chat channel or @campaigns on Slack.
- [@sourcegraph/campaigns](https://github.com/orgs/sourcegraph/teams/campaigns) team or [team/campaigns label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fcampaigns+) on GitHub.

## Mission

Users can focus on changing their code because campaigns provides the plumbing:

* Finding the correct repositories in which to run code
* Fetching the newest version of each repository
* Running code in each repository
* Turn the result into patches
* Create pull requests from patches
* Draft, keep track of and update a large number of pull requests
* Re-running code when the base branch changes

Users provide the code to make the change, we provide the plumbing to turn it into a large-scale change and monitor its progress.

* We take care of all the bits and pieces that would rob users of their time and that are not essential to the change they want to make.
* We don't try to come up with fancy and seemingly magic ways of changing code (i.e. high-level tools to refactor code) before we get the fundamentals right (running users' code in thousands of repositories and turning that into thousands of pull requests).
* We don't interfere with the code that produces a change. We provide the infrastructure to run it across all of your repositories and turn it into a large-scale code change.

## Goals

### Build a base of three customers who regularly use campaigns

We want to get a solid set of customers who regularly use and rely on campaigns. “Regularly” means at least one campaign per month.

What will get us there?

- **Smoother on-ramp:** Internal testing has revealed that using campaigns for the first time is not as easy as it could be. A frictionless initial experience is critical to adoption and a delightful user experience.
- **Better debugging experience:** It can be challenging to debug a more complex campaign. Figuring out what went wrong and how to fix it is a slow iterative loop.
- **User validation:** The above issues were revealed by user testing. Once we believe we have fixed them, we need to validate this with further user testing.

### Grow adoption of campaigns

Once we’re out of beta, we want everyone to start using campaigns!

We need to follow-up with customers who are already using campaigns to make sure that we’re taking their input into consideration when prioritizing new features.

We need to make it as easy as possible for new customers to try out campaigns:

- **Even smoother on-ramp:** Minimize the number of steps it takes a user to go from “found Campaigns in the Sourcegraph menu” to “has created a pull request, making a meaningful change”.
- **Easy to try:** Allow users to run campaigns on sourcegraph.com to try them out (requires user-specific tokens).
- **Examples:** Document as many meaningful example campaigns as possible.
- **More examples:** Provide ready-to-go campaign specs that users can easily run.

[Looker dashboard with usage metrics (internal only)](https://sourcegraph.looker.com/dashboards/136)

### Make it easier for customers to change the code they want to change in their preferred way

As we learn how people use Campaigns, we also need to focus on _how they wish they could use_ Campaigns.

For example, Campaigns run on _repositories_ vs. on specific search results. When running a campaign, the code that’s being run to change code doesn’t have access to the specific search results (i.e. file + line number), only to the repository. That makes it hard to make really granular changes based on search results. (A possible solution would be a more refined interface between search results and user-supplied code. For example: we could pass lines of _<filename>:<lineno>_ on stdin to each command that’s executed in a repository.)

Another example: in some cases, it’s cumbersome to first search code in the browser and then have to copy the query to a campaign-spec file and run the campaign. (A possible solution would be an implementation of the prototype that generates patches in the browser.)

### Perform actions beyond creating/merging changesets

Our users use more than just their code host and Sourcegraph. They use ticket trackers, review systems, and time trackers.

We want to discover what external systems our users want to use campaigns with, and ensure that we can integrate with them. For example, an organization that uses JIRA will likely want to be able to link tickets to campaigns and have the state updated as the campaign is executed.

## Analogies

Netlify and AWS Lambda solve difficult, repeatable problems for developers, removing overhead and enabling them to focus on the problems they are solving. In that regard, campaigns are to large-scale code changes what Netlify is to static site generation and AWS Lambda is to handling HTTP requests.

When I write an AWS Lambda function I want to focus on which requests it receives and what response to send out. I don't want to worry about which server to run it on, how to scale it, secure it, add logging, keep track of its usage.

When I deploy a static site on Netlify I want to focus on my site — its content and design — and not think about where it's deployed, how to get new SSL certificates, how to install dependencies to run the static site generator on a server, how to preview the site in a pull request.

When I create a campaign to make large-scale code changes I want to _focus on the specific change I want to make across all of the code at my organization_. I don't want to worry about all of the overhead associated with execution, code hosts, and management of all things listed above.

## Process

For each iteration (currently one month long), we follow this process:

* Before the iteration begins, each team member prepares for the iteration planning meeting by considering what they would like to see in the next iteration, and by looking over [our backlog](https://github.com/sourcegraph/sourcegraph/labels/team%2Fcampaigns) and setting the Milestone for issues we'd like to include.
* We then have our planning meeting to determine our common goals for the iteration. We create a [tracking issue](https://about.sourcegraph.com/handbook/engineering/tracking_issues) for the iteration which will hold our goals and plans, in addition to tracking the issues we intend to address.
* Each Monday, the team meets with stakeholders to stay in sync, and to set our personal goals for the week. We record these goals, and the previous week's progress, as status update comments on the tracking issue. The engineering manager then compiles these into a summary which is sent to the team and stakeholders.
* Each day, Slack reminds us to do our stand-up, which consists of a *short* message (it shouldn't take longer than 30s to write) in the reminder's thread. As we are a globally distributed team, this can be a statement of intent for the day, or a recap of what we have finished that day.
* After the release branch has been cut for the iteration, the team has a retro to discuss how the iteration went, and what changes we might want to our working agreements.

## Working Agreements

* To avoid siloing of knowledge and to keep teammates happy, we make sure that everyone gets a chance to work in different areas of the codebase. In particular, we don't want tasks in area X to always default to person P.
* If a process isn't serving us, we are quick to shut it down.
* We do not schedule team meetings on Fridays. (Folks are free to pair on Fridays if they want.)

## Team Communication

Our team has two Slack channels, one public (#campaigns-chat) and one private (#campaigns-team). _Our default is to use the public channel._

The private channel is for communications that would be of no interest to someone not on the team. Things like (re-)scheduling of team meetings, vacation scheduling, reminders about tasks that need completing, etc. Keeping these out of the public channel raises the signal-to-noise ratio for folks interested in Campaigns, but not interested in who will be 10 minutes late to our sync meeting today due to the fact that their cat knocked over a jar of pickles and now there's glass everywhere and everything smells like vinegar and now you wish you hadn't read this sentence to the end.

## Stewardship of src-cli

The Campaigns team is the current owner of [src-cli](https://github.com/sourcegraph/src-cli), due to the fact that most of the src-cli work in recent months has been related to Campaigns. We do not expect to be the permanent owners of src-cli; when another team becomes the main contributor, we will transfer ownership to them.

## Members

- We're hiring a [Product Manager](../../product/roles/product_manager.md) for this role. [Quinn Slack](../../../company/team/index.md#quinn-slack) is involved in the meantime.
- [Chris Pine](../../../company/team/index.md#chris-pine-he-she-they-chris) ([Engineering Manager](../roles.md#engineering-manager))
   - [Thorsten Ball](../../../company/team/index.md#thorsten-ball-he-him)
   - [Adam Harvey](../../../company/team/index.md#adam-harvey-he-him)
   - [Erik Seliger](../../../company/team/index.md#erik-seliger)

## Hiring status

No open positions at this time.
