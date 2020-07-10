# Rollout Process

The rollout process consists of *Pre-Launch* phase and *Deployment* phase. We can push changes to Sourcegraph.com when we
want as we own the deployment process. For enterprise instances of Sourcegraph.com, we push a new release monthly and our
clients decide to upgrade to the latest release when they want.

### Sourcegraph.com

#### Pre-Launch
1. User testing
- Hallway test with internal users.
- Open the feature to internal users by turning it on for the Sourcegraph organization. Make sure it's opened with enough
time left before planned launch date to receive and address all the feedback received. 
2. Design Checklist
- Test the feature for both themes, Light and Dark. Check for icon consistency across themes.
* Test on small, medium, large and extra-large screen sizes.
  * Small screens are important to consider as window resizing and side-by-side mode is common.
3. Analytics Checklist
- Add and test logging for critical flows.
4. Approvals
- Receive approval from engineering, design, data, product and other stakeholders before launch. 
5. QA Checklist
- Track and ensure high priority bugs in GitHub issues. Ensure they are closed before launch.
- Track all lower priority bugs that have to be fixed soon.

#### Deployment
1. Follow this [document](https://about.sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website) to enable your feature in global settings and to push it to all users on Sourcegraph.com.
- In the PR that pushes changes live, add everyone who gave appproval for launch as reviewers.
2. Share analytics for monitoring the feature shipped. Track metrics for regressions. 


## TODO: Enterprise instances of Sourcegraph.com

