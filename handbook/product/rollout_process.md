# Rollout Process

The rollout process consists of *Pre-Launch* phase and *Deployment* phase. We can push changes to Sourcegraph.com when we
want as we own the deployment process. For enterprise instances of Sourcegraph.com, we push a new release monthly and our
clients decide to upgrade to the latest release when they want.

## Sourcegraph.com

### Pre-Launch
**User Testing** 
- Hallway test with internal users.
- Open the feature to internal users by turning it on for the Sourcegraph organization. Make sure it's opened with enough
time left before planned launch date to receive and address all the feedback received. 

**Design** 
(skip if it doesn't apply)
- Test the feature for both themes, Light and Dark. Check for icon consistency across themes.
* Test on small, medium, large and extra-large screen sizes.
  * Small screens are important to consider for a good experience when the window is resized or in side-by-side mode.
* Code examples in design
  * Font should be "code font" or monospace.
  * Easy to copy and paste (no fancy quotes).

**Analytics** 
- Add and test logging for critical flows.

**Approvals**
- Receive approval from engineering, design, data, product and other stakeholders before launch. 

**Bug Tracking**
- Track and ensure high priority bugs in GitHub issues. Ensure they are closed before launch.
- Track all lower priority bugs that have to be fixed soon.

### Deployment
**Push to Sourcegraph.com**
- Follow this [document](https://about.sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website) to enable your feature in global settings and to push it to all users on Sourcegraph.com.
- In the PR that pushes changes live, add everyone who gave appproval for launch as reviewers.

**Metrics**
Share analytics for monitoring the feature shipped. Track metrics for regressions. 

### Post-Launch
**Marketing**
Share update with marketing.

## TODO: Enterprise instances of Sourcegraph.com

