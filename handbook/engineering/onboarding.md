# Engineering onboarding

Welcome! We're excited to have you join the team. This document outlines the structure of your first few weeks at Sourcegraph.

## Getting set up

You'll have to get some basics set up in your first few days:

- Complete [general onboarding](../people-ops/onboarding/index.md#general-onboarding-checklist)
- [Configure your GitHub notifications.](./github-notifications/index.md)
- Join #dev-announce, #dev-chat, and your team's channel on Slack, as well as any other channels you find interesting. [Team chat documentation](../communication/team_chat.md#engineering)
- Set up your [local development environment](https://github.com/sourcegraph/sourcegraph/blob/master/doc/dev/local_development.md#step-1-install-dependencies). If you encounter any issues, ask for help in Slack and then update the documentation to reflect the resolution (so the next engineer that we hire doesn't run into the same problem).
- [Add Sourcegraph as a browser search engine](https://docs.sourcegraph.com/integration/browser_search_engine). Add another entry for our internal instance: `https://sourcegraph.sgdev.org/search?q=%s`. This also ensures you have access to our internal instance.
- Read through your team's handbook page, to learn about the team and its internal processes.

### Manager checklist

Your manager should complete the following steps when you join:

- Schedule a recurring [1-1](../leadership/1-1.md).
- Grant access to necessary services.
  - [Sourcegraph organization on GitHub](https://github.com/orgs/sourcegraph/people)
    - Invite to relevant GitHub teams, including [@sourcegraph/everyone](https://github.com/orgs/sourcegraph/teams/everyone).
  - [Sourcegraph organization on Sourcegraph.com](https://sourcegraph.com/organizations/sourcegraph/members)
  - [LSIF organization on GitHub](https://github.com/orgs/lsif/people) (optional; recommended for Code Intelligence team members)
  - [Buildkite](https://buildkite.com/organizations/sourcegraph/users/new)
  - Add the user to the `gcp-engineering` [group](https://console.cloud.google.com/iam-admin/groups?orgonly=true&project=&folder=&organizationId=1006954638239&supportedpurview=organizationId) so they have access to our [Google Cloud Platform](./environments.md).
  - [Opsgenie](https://sourcegraph.app.opsgenie.com/settings/users/)
  - [Docker Hub](https://hub.docker.com/orgs/sourcegraph)
  - [Site24x7](https://www.site24x7.com) (optional; recommended for Distribution team members)
  - [HoneyComb.io](https://www.honeycomb.io/)
  - Ask Christina to send an invite to [Productboard](https://sourcegraph.productboard.com)
  - Ask a member of the Design team to invite as "Viewer" to [Figma](https://figma.com)
  - Ask on `dev-chat` for access to [Percy](https://percy.io/) which we use for visual testing.

## Weeks 1-3

### Starter tasks

Your manager will assign to you three starter tasks that you should aim to complete in your first three weeks. These tasks are small, atomic, and intended to expose you to different parts of our codebase and product: it's important that you build the flexibility to fix any problem you'll be faced with at Sourcegraph, and don't narrow down your comfort zone to a certain part of our codebase or product.

As you're working on these tasks:

- Optimize for learning: your priority is to soak up as much context as possible, not to ship something as fast as possible.
- Aim to be as incremental as possible:
    - Open a pull request as soon as you feel like you're ready for feedback or input on your code — you can make it a draft pull request if your code is still a work in progress.
    - Favour splitting up your work in multiple pull requests every time it makes sense — shipping frequently is important.
    - Ask yourself what tests are appropriate for the change you're tackling, and add them!
- If you need help, remember everyone is here to [answer any question](../people-ops/onboarding/index.md#everyone-is-here-to-support-you-as-you-onboard) — ask for help in your team's channel (or any appropriate channel), and add the answer to our docs or the handbook if you feel like it can help future teammates.

As you complete these tasks, share your accomplishments in #progress 🙂

### Pairing sessions

Reach out to every member of your direct team, and set up a two-hour pairing session with them. These sessions will be an opportunity to get to know your teammates, understand what they're working on and why, and learn more about our codebase and development flows!

Take the first 20-30 minutes of the session to have an unstructured, introductory chat. Then, start hacking! Your teammate will set up a [live share](https://visualstudio.microsoft.com/services/live-share/) and walk you through what they're currently working on. Ask as many questions as possible, to try to understand:

- What problem is your teammate trying to solve?
- Why is that problem important? What team goal does it fit under?
- What are relevant [RFCs](https://about.sourcegraph.com/handbook/communication/rfcs), [PDs](https://about.sourcegraph.com/handbook/product/product_documents), GitHub issues or documentation pages?
- What parts of our codebase need to be changed to solve this problem?
- How will the code being changed be tested?
- Will there be future work needed after solving this problem? How could you contribute?

**Teammates** should prepare these pairing sessions so that they bring you the most value, and allow you to quickly ramp up on what the team is working on and why.

### Reading material

There will be plenty for you to read and learn about when you're not working on your starter tasks:

- Read through our [architecture overview](https://docs.sourcegraph.com/dev/architecture).
- Read through the rest of the engineering handbook to learn more about how we operate.
- Read how we choose and continually update our [goals](../../company/goals/index.md).
- Read how we plan and keep each other up to date with [tracking issues](./tracking_issues.md).
- Frontend engineers should watch [Figma for Sourcegraphers](https://drive.google.com/file/d/1zzUKDJN5XUwvKF8LfKZqQb7gK9NpK1Wx/view?usp=sharing) to learn about how design and engineering work together

## Weeks 4-6

### Start contributing to your team's goals

By now, you'll have shipped multiple improvements, paired with all members of your immediate team to understand what they were working on, and learned a lot about Sourcegraph. It'll be time for you to start contributing to your team's goals! It'll be up to you to define how you'll accomplish this:

- Pick a current iteration goal you'd like to start contributing to (or work with your team to define these iteration goals if the team is in planning phase).
- Chat with the teammates currently working on that goal, and relevant stakeholders (product, design, CE) to understand the problem being solved.
- Prepare a proposal for how you'll work with the team solving that problem in the following three weeks. Your work may include:
    - Working on previously identified GitHub issues
    - Doing spikes to solve unknowns and learn more about the problem
    - Writing RFCs to propose solutions, and planning resulting development work
- Discuss your plan with the team and your manager.
- Get hacking!

At Sourcegraph, you'll be expected to own the problems your team is solving, and work with the team to define solutions and plan your work — we think it's important that you start doing this early on!

### Give feedback on your onboarding

At the end of week 6 at Sourcegraph, your manager will send you a survey to learn more about what worked and what didn't during your onboarding. Take your time to answer this thoughtfully — your answers will be very important to make sure our onboarding process is even better for future hires!
