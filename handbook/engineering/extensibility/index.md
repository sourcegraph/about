# Extensibility team

The extensibility team owns our code host and third-party integrations (including our browser extension) and our [Sourcegraph extensions](https://docs.sourcegraph.com/extensions).

## Contact

- [#extensibility-chat](https://app.slack.com/client/T02FSM7DL/C01LZKLRF0C) channel or @extensibility on Slack
- On GitHub, mention or assign issues to the [@sourcegraph/extensibility](https://github.com/orgs/sourcegraph/teams/extensibility) team.

## Ownership

This team is responsible for:

1. Bringing the value of Sourcegraph to other developer tools
1. Bringing the value of other developer tools into Sourcegraph

The team's areas of responsibility include:

- Sourcegraph extensions
  - Providing a Sourcegraph extension API that enables developers to bring data from their favorite developer tools into their Sourcegraph workflow.
  - Building and maintaining useful Sourcegraph extensions on top of the Sourcegraph extension API ([Sourcegraph-maintained extensions](https://docs.sourcegraph.com/dev/background-information/sourcegraph_extensions)).
  - Documentation and tutorials that enable third party developers to create extensions that are actively used.
  - Building and maintaining the extensions registry and discovery paths to create a community around Sourcegraph extensions.
- Code host integrations
  - Surface code intelligence (and other Sourcegraph data) in code hosts through user installed browser extensions.
  - Add native support for Sourcegraph in code hosts (for example: GitLab) or popular sites where developers look at code examples (e.g. https://reactjs.org, https://pkg.go.dev/) so users don't have to install our browser extension to get code intelligence.

[List of Sourcegraph-maintained extension repositories](https://docs.sourcegraph.com/dev/background-information/sourcegraph_extensions)

## Tech stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/) + [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## Processes

For now, we participate in [Web team processes](../web/index#processes) with the following additions:

### Pair programming

We use pair programming extensively. We're huge believers in pair programming in remote work contexts, so we aim to pair for 15 hours a week.

- TODO

### Weekly Sync

The extensibility team holds weekly syncs.

The meeting notes of extensibility team syncs can be found [in this doc](https://docs.google.com/document/d/1apinxDIp2PdyDHjkr_nBuD7ykfzItVuTvWejiA66sjY/edit?ts=5fb7fd29#).

Before web team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

## Members

- [Joel Kwartler](../../../company/team/index.md#joel-kwartler-he-him) ([Product Manager](../../product/roles/index.md#product-manager)) is the acting PM for this team until we can hire a dedicated PM for it ([apply here](https://jobs.lever.co/sourcegraph/254299f5-f91b-43e2-aa1a-3732963dd296)). Once that happens, Joel will focus entirely on code insights.
- FQ3 [Engineering Manager](../roles.md#engineering-manager), Jean acting manager until then.
  - [Marek Zaluski](../../../company/team/index.md#marek-zaluski)
  - [TJ Kandala](../../../company/team/index.md#tharuntej-kandala-he-him)
  - [Murat Sutunc](../../../company/team/index.md#murat-sutunc-he-him)
  - FQ2 frontend engineer
  - FQ4 frontend engineer
