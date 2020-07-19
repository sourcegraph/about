# Feature rollout process

The rollout process consists of *Pre-Launch* phase and *Deployment* phase. We can push changes to Sourcegraph.com when we
want as we own the deployment process. For enterprise instances of Sourcegraph.com, we push a new release monthly and our
clients decide to upgrade to the latest release when they want.

## Sourcegraph Cloud

Sourcegraph Cloud is continuously deployed with all new updates to master. We maintain a [releasability contract](../engineering/continuous_releasability.md) and require all new features to be released behind a feature flag to ensure that functionality can be turned off if a problem arises.

### Before merge

- Run hallway tests with internal users
- Complete a final [design review](design/design_process.md#final-review)
- Review documentation
- Review analytics and ensure desired metrics have been added to the feature
- Confirm feature flag functionality

### After merge, before launch

1. **Gather internal feedback:** Enable the feature flag in the [Sourcegraph organization settings](https://sourcegraph.com/organizations/sourcegraph/settings) to enable your feature for all Sourcegraph team members. Be sure to leave enough time for folks to experience the feature in their workflows and provide feedback.
1. **Analytics:** Validate logging is working for critical flows
1. **Approvals:** Recieve approval from key stakeholders.
1. **Bug Tracking:** Keep track of all feedback.
   - Track and ensure high priority bugs in GitHub issues. Ensure they are closed before launch.
   - Track all lower priority bugs that have to be fixed soon.

### Deployment
**Push to Sourcegraph.com**
- Follow the steps in this [document](https://about.sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website) to enable your feature in global settings and to push it to all users on Sourcegraph.com.
- In the PR that pushes changes live, add everyone who gave appproval for launch as reviewers.

**Metrics**
- Share analytics for monitoring the feature shipped. Track metrics for regressions. 

### Post-Launch
**Marketing**
- Share update with marketing.

## TODO: Enterprise instances of Sourcegraph.com
