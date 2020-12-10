# Campaigns goals and priorities

## Goals

### Build a base of 10 customers who have created 80 campaigns and made 4000 changesets in Q4

We want to get a solid set of customers who regularly use and rely on campaigns. 

What will get us there?

- **Proactive outreach** Campaigns is new and transformative software. Many companies are not yet aware they need large scale code modifications. We need to find those companies within our customer base and introduce them to campaigns. This process will also teach us about marketing campaigns.
- **Smoother on-ramp:** Internal testing has revealed that using campaigns for the first time is not as easy as it could be. A frictionless initial experience is critical to adoption and a delightful user experience.
- **Better debugging experience:** It can be challenging to debug a more complex campaign. Figuring out what went wrong and how to fix it is a slow iterative loop.
- **User validation:** The above issues were revealed by user testing. Once we believe we have fixed them, we need to validate this with further user testing.


### Design and build the best solution for changing code across many repositories
  * How do we do this:
    * Expressive syntax
    * Clean conceptual model
    * Best debugging experience
    * Excellent docs/tutorials, demos/training
  * Our Success Metrics
    * tbd

### Build the best solution for managing changesets
  * Much of the work in completing a large scale change is performed in the gap between changesets created and changesets merged
  *	How do we do this:
  * Helping users understand the overall status of their campaign
  * Provide tools to find and resolve problematic changesets
  * Providing flexible tools to help users, prompt reviewers and owners, to merge the created changesets
  * Our Success Metrics
    * Seconds to merge

### Increase the scope of campaigns 
  * Monorepo support
  * Open source projects
  
### Improve quality and stability 


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
