# Core application team

<img width="70%" height="70%" src="logo.jpg" alt="Sourcegraph Cloud team logo">

While you could think this is an angry cloud, it's actually a fierce and determined one 😃.

The core application team owns a number of [fundamental areas](#areas-of-ownership) in our product and code base.

Our current work-streams are:

1. **Core application**: Building, securing and scaling our multi-tenant hosted version of Sourcegraph for customers that do not want to deploy Sourcegraph on-premise. Also meeting the needs of larger and larger enterprises to support those deals (e.g. Perforce support)
2. **Backend platform**: Make it easy for teammates of different experience levels to onboard and contribute to backend code. Hide and remove non essential complexity from engineers working on new product features and use cases. Promote and champion consistency and simplicity across all backend code by building shared tools, libraries and infrastructure for common use cases. Scale and maintain said infrastructure. Create leverage for and accelerate other teams.

## Areas of ownership

- Authorization and authentication
- Repository management (gitserver, repo-updater, src-expose)
- Data storage and access libraries
- GraphQL API
- License generation and enforcement
- Admin and user settings
- Analytics

## [Goals](goals.md)

See [goals](goals.md)

## Contact

- #core-application channel or @core-app in Slack
- [team/core-application](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/core-application) label in GitHub.

- #backend-platform channel in Slack
- [team/backend-platform](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/core-application) label in GitHub.

## Resources

- [Cloud roadmap](https://sourcegraph.productboard.com/feature-board/2119755-cloud)
- [GitHub Projects](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Cloud+OR+Core+OR+Backend)
- [Manual migrations](manual_migrations.md)

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+monitoring.ObservableOwnerCoreApplication&patternType=literal)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/01b8adfc-9b85-462b-a841-945791c17e9e/main)

## Processes

We have two week cycles starting on Wednesdays. We do a sync planning the day before (Tuesday) where we determine what each teammate works on. We use GitHub projects to track that work. We do a sync retrospective on Mondays, before planning, and a general team sync meeting every other Monday. We use Geekbot in the #core-application-sync channel for daily updates and weekly digests.

## Team norms

### Code reviews

- **Post-merge feedback:** It is important to make progress while getting feedback from other teammates in code reviews. On the one hand, the pull request author doesn't have to be blocked by all reviewers who the author intends to get feedback from; on the other hand, reviewers can still focus on their work on hands and leave feedback at their convenience. The pull request author should use their best judgement to decide if a pull request should wait (for high-risk changes) or simply rely on post-merge feedback.
- **Approve to unblock:** When the reviewer thinks there are no obvious blockers and trusts the pull request author will take care of comments/questions/concerns (e.g. answer to questions, explain rationale, act on code suggestions) before merging the pull request.
- **Request for changes:** When the reviewer believes it is important to get another round of review from the person before merging the pull request. This situation often happens when there is a significant design change.

## Members

<!-- Due to the markdown renderer that we use, the indentation here is sensitive. If you want to change the indentation, check that it renders correctly locally with `make serve` -->
- We're hiring a [Product Manager](../../product/roles/index.md#product-manager) ([apply here](https://jobs.lever.co/sourcegraph/254299f5-f91b-43e2-aa1a-3732963dd296)) for this role. [Christina Forney](../../../company/team/index.md#christina-forney-she-her) is involved in the meantime.
- [Quinn Keast](../../../company/team/index.md#quinn-keast-he-him) ([Product Designer](../../product/roles/index.md#product-designer))
- [Core application](index.md) {#core-application-eng}
    - [FQ1 Engineering Manager](https://jobs.lever.co/sourcegraph/95ad534f-8724-45dc-9b50-291c5926a7dc), Tomás acting manager until then.
        - [Joe Chen](../../../company/team/index.md#joe-chen)
        - [Ryan Slade](../../../company/team/index.md#ryan-slade-he-him)
        - [Alan Harris](../../../company/team/index.md#alan-harris-he-him)
        - [Artem Ruts](../../../company/team/index.md#artem-ruts-he-him)
        - [Alex Russell-Saw](../../../company/team/index.md#alex-russell-saw-he-him)
        - I. G. estimated start date is March 1st 2021
        - FQ2 frontend engineer
- [Backend platform](index.md) {#backend-platform-eng}
    - FQ2 [Engineering Manager](../roles.md#engineering-manager), Tomás acting manager until then.
        - [Tomás Senart](../../../company/team/index.md#tomás-senart)
        - [Asdine El Hrychy](../../../company/team/index.md#asdine-el-hrychy)
        - FQ2 backend engineer
        - FQ3 backend engineer
        - FQ4 backend engineer
