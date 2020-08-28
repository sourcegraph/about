# Search team

We own the end-to-end Sourcegraph search experience.

The search team's current focus is documented in the [tracking issue for the current milestone](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Atracking+label%3Ateam%2Fsearch).

## Vision

Sourcegraph search is:
- Fast: Performance of showing results is fast, I can get to what I’m looking for quickly
- Expressive: It is possible to construct a search query to find exactly the results I’m looking for. The tools, syntax, filters, are provided to construct the queries I want to write.
The answer to “Can I do ‘X’ with Sourcegraph?” will always be yes.
- Easy to use: Users can figure out how to find what they are looking for, the syntax is clear, new users understand what options they have for searching.
- Sharable: Sourcegraph search creates network effects that provide compounding value with scale. 

## Goals
_Updated 2020-08-27_

## Long term (1 year)
Sourcegraph search is far and away the best code search solution, search results are fast, and I can find what I’m looking for quickly.

## Medium term (3-6 months)
In the next 6 months we want to be halfway to the long term goal. To achieve this, we need to accomplish the following outcomes:

- Getting to search results faster through a better search experience.
- What do we need to do to get to the speed of grep.app?
- Scale fast search to 500k repositories.

## Short term (1-3 months)

- Fast
  - Streaming search
    - Problem: We want to make significant improvements to search that are blocked by not having the infrastructure needed.
    - Owner: Keegan
    - Status: In progress
- Expressive
  - Expressive search syntax
    - Hierarchical search (AND/OR/NOT)
        - Problem: We have customers who want to migrate from OpenGrok and other search tools, and they want to be able to do searches that are available in those tools.
        - Outcomes: Users can run complex searches on Sourcegraph.
        - Owner: Rijnard
        - Status: In progress
    - Improve syntax for existing filters like `repohasfile`
        - Problem: Creating a custom filter name for every permutation of search use does not scale (existing filter examples: `repohasfile`, `hascommitafter`).
        - Outcomes: We have an expressive syntax that scales and effectively leverages existing filters to achieve searches that previously would have required a custom/new filter.
        - Owner: Rijnard/Stefan
        - Status: Not started
    - Revision search
        - Problem: Users want to search across branches with the same ease as searching across repositories, and are currently unable to do so.
        - Owner: Stefan
        - Status: In progress
- Easy to use
  - Get to files and repositories more quickly
    - Problem: Finding files and repositories often takes multiple tries to get the syntax correct or creative solutions to get the result users are looking for.
    - Outcomes: Users leverage file and repo filters to quickly get to the code they are searching for.
    - Owner: Stefan
    - Status: In progress
  - Improve search experience
    - Problem: 
      - New users who are trying Sourcegraph for the first time have trouble learning the syntax and breadth of Sourcegraph features.
        - Owner: Farhan
        - Status: In progress
      - It is hard for users to quickly get to code they care about.
        - Owner: Farhan, Juliana
        - Status: In progress
    - Outcomes: 
        - New users are introduced to Sourcegraph and are able to more quickly see the value and run searches more quickly.
        - Users can run searches over code they care about more quickly.
        - Sourcegraph surfaces code and searches users care about.
- Sharable
  - Code monitoring ([RFC 227](https://docs.google.com/document/d/1_R5DgpUkxyZilsJ9vBQm5cvRPT2udc3tZIPg2q3cnZU/edit))
    - Problem: Users want to be notified about important things going on in their code.
    - Outcome: Notifications create a shared understanding and raise awareness of what’s going on in the code.
    - Plan
        - Improved diff search performance
        - Webhooks on search results
          - Slack integration
          - Zapier integration
          - Email
    - Owner: TBD
    - Status: Not started



## Contact

- #search channel or @searchers on Slack.
- [@sourcegraph/search](https://github.com/orgs/sourcegraph/teams/search) team or [team/search label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fsearch+) on GitHub.

## Members

- [Farhan Attamimi](../../../company/team/index.md#farhan-attamimi)
- [Rijnard van Tonder](../../../company/team/index.md#rijnard-van-tonder)
- [Stefan Hengl](../../../company/team/index.md#stefan-hengl-he-him)
- [Juliana Peña](../../../company/team/index.md#juliana-peña-she-her)
- [Loïc Guychard](../../../company/team/index.md#loic-guychard) is interested in being the [engineering manager](../roles.md#engineering-manager) for this team but is currently focusing his efforts on the [web team](../web/index.md). [Nick Snyder](../../../company/team/index.md#nick-snyder-he-him) will be more involved in the meantime.

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo%3A%5Egithub.com%2Fsourcegraph%2Fsourcegraph%24+file%3Amonitoring%2F.*+%7B%3A%5B_%5D%2C+Owner%3A+ObservableOwnerSearch%2C+%3A%5B_%5D%7D+OR+%28%3A%5B_%5D%2C+ObservableOwnerSearch%29+count%3A1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/f482ef3e-f5dc-4bef-b7c4-307e0ad30d6a)

## Growth plan

_Updated 2020-07-22_

We would like to grow this team to ~6-8 engineers and we expect the right split of skills to be roughly 50%/50% between [frontend](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-frontend.md) and [backend](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-backend.md). This growth is contingent upon having a dedicated engineering manager for this team.
