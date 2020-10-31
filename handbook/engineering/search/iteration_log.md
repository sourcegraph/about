# Iteration log

This document contains the goals and work log for the search team's [2-week iterations](./index.md#iterations).

## YYYY-MM-DD to YYYY-MM-DD

### $GOAL_OR_THEME

- **Owner(s):** $OWNER
- **Outcomes:**
    - $DESIRED_OUTCOME
- **Work log:**
    - YYYY-MM-DD: $UPDATE
    
## 2020-10-19 to 2020-10-30

### Featureful frontend query parser

- **Owner(s):** Rijnard
- **Outcomes:**
    - We need a proper frontend query parser for syntax highlighting, hover hints, and consistent UI state (toggle activation) of search expressions and future query syntax extensions. See [14016](https://github.com/sourcegraph/sourcegraph/issues/14016).
- **Work log:**
    - 2020-10-23: Started with this implementation. Have the basic recursive descent parsing down but didn't quite get as far as I wanted, mostly because I spent some time reading up about TypeScript, looking at other TS parser/visitor implementations, and getting pretty deep into Monaco API to understand how our parser/tree output could be used in the context of highlighting and smart editing _and_ serve the role for validating toggle state, etc. I have a good picture of how things could fit together now and will probably get this finished this week.
    
### Quality-of-life search code improvements

- **Owner(s):** Rijnard
- **Outcomes:**
    - We have a huge debt in parts of our search code and the state is unhealthy. I have been tracking a backlog of issues to refactor and fix re: deleting old parser code, fixing commit search issues. I will be selectively tackling [bug](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+author%3Arvantonder+label%3Ateam%2Fsearch+label%3Abug) and [refactor](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+author%3Arvantonder+label%3Ateam%2Fsearch+label%3Arefactor) issues to make things more sane.
- **Work log:**
    - 2020-10-23: Did a pretty hefty parser pass to clean up debt and make it simpler to connect frontend parser work with backend parser [#15042](https://github.com/sourcegraph/sourcegraph/pull/15042). Small bug fixes and fixed search doc theming (not really part of this goal but work worth mentioning).

### Code monitoring

- **Owner(s):** Stefan, Juliana, Farhan
- **Outcomes:**
    - We have a GraphQL schema for code monitoring, with a stubbed out implementation on the backend, allowing us to decouple backend and frontend development.
    - SMTP is tracked in pings [#14115](https://github.com/sourcegraph/sourcegraph/issues/14115).
- **Work log:**
    - 2020-10-23: Finished v1 of GraphQL schema for code monitoring (Google drive > Sourcegraph shared > Search > Code Monitor GraphQL Design). Next step: Review together with Juliana.
    - 2020-10-30: Juliana and I agreed on the first version of the GraphQL schema. I have put up a PR that covers 80% of it. It will probably take another 2 days to finish the stub mutations and the rest of the schema. The stubs will not be connected to the DB yet.

### Scale indexed search to 500k repositories
- **Owner(s):** Stefan, Keegan
- **Outcomes:**
    - We have a similar performance for simple regex searches and their literal equivalents (EG `config overall`) on indexed repositories.
- **Work log:**
    - 2020-10-23: Created a patch for google/zoekt with performance improvements for searches s uch as `(field)(?-s:.)*?(bar)`. Depending on the relation between the search terms (how frequent they are and how frequently they appear on the same line) we see reduced latencies between 86% (best case) and -3.5% (worst case). This change is motivated by https://github.com/sourcegraph/sourcegraph/issues/14351.
    - 2020-10-30: I worked extensively on the patch this week. We probably still have to iron out some kinks, but I feel confident that we are converging on a good solution.

### Streaming search

- **Owner(s):** Keegan, Juliana, Rob
- **Outcomes:**
    - We have high-fidelity designs for streaming search.
    - High-fidelity designs are implemented (TODO: assess viability of this outcome when Juliana is back).
    - API: statistics for designs.
    - Backend: true streaming for text search with stats.
- **Work log:**
    - 2020-10-30: Basic integration tests have been added for streaming search, including mocking the server sent events. [#15122](https://github.com/sourcegraph/sourcegraph/pull/15122)

### Search Tour
- **Owner(s):** @farhan
- **Outcomes:**
    - Search field is no longer focused by default for users who haven't searched yet [#14783](https://github.com/sourcegraph/sourcegraph/issues/14783).
    - Search tour is re-enabled by default for enterprise customers.
    - Search tour usage is tracked in pings [#14781](https://github.com/sourcegraph/sourcegraph/issues/14781).
- **Work log:**
    - 2020-10-30: [#14783](https://github.com/sourcegraph/sourcegraph/issues/14783) is fixed. PRs are open to get search tour usage in pings; awaiting review from the BizOps team, who are also working on cleaning up existing pings before merging PRs that add more data to pings. [#15113](https://github.com/sourcegraph/sourcegraph/pull/15113), [#63](https://github.com/sourcegraph/analytics/pull/63).

### Improve tracking of search onboarding on enterprise instances
- **Owner(s):** @farhan
- **Outcomes:**
    - Total number of unique searchers is tracked in pings [#14575](https://github.com/sourcegraph/sourcegraph/issues/14575).
    - Weekly retention is tracked in pings [#13636](https://github.com/sourcegraph/sourcegraph/issues/13636).
- **Work log:**
    - 2020-10-30: [#14575](https://github.com/sourcegraph/sourcegraph/issues/14575) was closed due to the data already existing. PRs are open to add weekly retention to pings. [#15199](https://github.com/sourcegraph/sourcegraph/pull/15199), [#65](https://github.com/sourcegraph/analytics/pull/65)

## 2020-10-5 to 2020-10-16

### Enterprise homepage
- **Owner(s):** Juliana
- **Outcomes:**
    - Replace saved searches panel with a new repogroup panel on Cloud.
- **Work log:**
    - 2020-10-07: The repogroup panel has been completed and checked in. We will consider turning the feature flag on by default in Cloud next week after getting feedback from internal users.
    - 2020-10-13: The footer UI from the original designs for the home panels has been implemented.
    - 2020-10-13: Panels have now been enabled for everyone in Cloud.
    
### Search tour
- **Owner(s):** Juliana
- **Outcomes:**
    - Do not show the Tour to users who have already searched.
- **Work log:**
    - 2020-10-08: The tour has been modified to only show to users on their first day of using Sourcegraph, based on the same data we already use to determine when to show user other notifications ([See PR](https://github.com/sourcegraph/sourcegraph/pull/14535)).
    - 2020-10-15: We had originally enabled the search tour everywhere on 2020-10-13, but on 2020-10-15 we decided to disable it for the 3.21 release since there are still some issues regarding new user experience that came in from feedback. We plan to address these issues before turning the feature on definitely.

### Scale indexed search to 500k repositories
- **Owner(s):** Stefan, Keegan
- **Outcomes:**
    - (done) gap in tracing is explained
    - (in progress) zoekt scaled-out by factor 2 => observe change in latency
    - (done) search-blitz runs structural search queries
    - (done) identify pieces of code that don't scale -> repoSearch -> speed-up repoSearch
- **Work log:**
    - 2020-10-07: We improved tracing and closed  many of the gaps we prevously had. For example, with the new spans we found that `logSearchLatency` (which was previously untracked) was on the criticial path and took a significant amount of time [#14433](https://github.com/sourcegraph/sourcegraph/pull/14433). Search-blitz now tracks 1 structual query from Rynards blog post. I will align with Rijnard which additional queries are useful to add. After Bejang increased the global index, the latencies for global queries increased as expected. Surprisingly, the performance did not improve after we scaled out Zoekt. Right now, the assumption is that the performance of frontend degraded offsetting the gains by the scale out. For example the increase of the global index revealed that repo search is a bottleneck. It relies on resolved repositories and generally runs after file/path search. For the global query `context.WithValue`, repo search can take up to 200ms. We evaluated different options (leverage Cgo to call out to more performant Rust regex engine, offload matching to zoekt, and concurrency). In the end we went with concurrency, because calling out to Rust comes with an additional burden for deployments, and calling out to zoekt brings complexity while just benefiting the global queries (although we might want to come back to that idea later). Concurrency seemed to be a good tradeof of performance/effort for now.
    
### Search expressions & blog post

- **Owner(s):** Rijnard
- **Outcomes:**
    - (1) Make search expressions available under feature flag (merge WIP PR) & (2) Raise visibility on the topic/capability of code search as lightweight analysis. Inform relevant customer contacts about these capabilities.
- **Work log:**
    - 2020-10-07: I did some prep work to get search expressions ready ([related to how queries are evaluated](https://github.com/sourcegraph/sourcegraph/pull/14461)). Added functionality where search expressions merge repo results, and added integration tests. The PR is now [up for review](https://github.com/sourcegraph/sourcegraph/pull/13907). For the blog post, I added C-style comments and a cmd+enter shortcut for the search console page. I came up with some compelling examples that address blog post feedback, and will put up the blog post for review and publish it next week.
    - 2020-10-15: Search expressions are merged in [#13907](https://github.com/sourcegraph/sourcegraph/pull/13907). We need to do follow up work in the UI + document to advertise the new features. The blog post is ready to ship, but depends on [#14816](https://github.com/sourcegraph/sourcegraph/pull/14816) for performant queries that was introduced by search expressions.
    

### Streaming search

- **Owner(s):** Keegan, Juliana
- **Outcomes:**
    - API: fully working v0 of API covering all types.
    - Backend: true streaming for text search with stats.
    - Webapp: TODO
- **Work log:**
    - 2020-10-16: API is fully functional except for statistics. The nuts and bolts of that need some input. Will be working with Loic 2020-10-20 to help define that.
    - 2020-10-09: (Keegan) Low productivity Mon-Wed, didn't feel well. Thu/Fri worked on a customer P0 related to Zoekt creating too many HTTP connections and exhausting socket limits. https://github.com/sourcegraph/customer/issues/111

## 2020-09-21 to 2020-10-02

### Scale indexed search to 500k repositories

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
    - Zoekt is called before we resolve repositories in global search. The outcome of this is a faster global search.
    - Improved tracing for indexed search.
- **Work log:**
  - 2020-10-02: 
    - Added more tracing [#14335](https://github.com/sourcegraph/sourcegraph/pull/14335), [#14296](https://github.com/sourcegraph/sourcegraph/pull/14296), [#14371](https://github.com/sourcegraph/sourcegraph/pull/14371)
    - Insights from new spans helped us to identify redudant calls to the DB [#14367](https://github.com/sourcegraph/sourcegraph/pull/14367)
    - [#14093](https://github.com/sourcegraph/sourcegraph/pull/14093) was merged and reduces latency of global searches: Comparing traces of the same query before and after showed that the change reduced latency by 25% (400-> 300ms). The 100ms are important because they would have scaled with the number of indexed repositories.
  - 2020-09-25: Important parts of the code path had not been instrumented with tracing. To pinpoint the performance issue, we added tracing to `newIndexSearchRequest` [#13949](https://github.com/sourcegraph/sourcegraph/pull/13949) and the RPC layer [#13951](https://github.com/sourcegraph/sourcegraph/pull/13951). Based on the improved tracing, we chose to focus our efforts on global queries first, IE queries without `repo:` or `file:` filters. Traces of global queries show that we spend a significant amount of time (O(#indexed repos)) on assembling, splitting, and serializing lists of repo revisions. With [#14093](https://github.com/sourcegraph/sourcegraph/pull/14093) we resolve repositories and query zoekt concurrently (limited to global, literal content searches). We plan to measure the impact of [#14093](https://github.com/sourcegraph/sourcegraph/pull/14093) with help of selected traces and search-blitz.

### Streaming search

- **Owner(s):** Keegan, Juliana
- **Outcomes:**
    - Make a decision on whether to integrate with existing search results components or write a new set of components to show streamed results.
    - Identify which metatada we want to display while streaming results, and define corresponding API contract.
    - Define experience for large result sets (how many results are displayed initially, "show more" versus infinite scrolling).
    - Define experience for dynamic filters.
    - We have a project board representing remaining design + implementation work for future iterations.
- **Work log:**
    - 2020-10-02: Repository search results added to streaming API. In progress work for commit. Remaining is symbols, alerts and stats (to be tackled next).
    - 2020-09-25: Exploratory work has been made to understand how the search results page currently works and how the streaming search POC has been built. [Notes](https://docs.google.com/document/d/1ApXqBr9tasltKPvV9KHp64VzPekH5vCKOcAWz6Am6Ng/edit#heading=h.q8u68shhkq3i)
    - 2020-10-02: There is now an initial design ([Figma link](https://www.figma.com/file/IyiXZIbPHK447NCXov0AvK/13928-Streaming-search?node-id=25%3A451)]. More functionality has been added to the existing streaming search POC: repository searcha and dynamic filters.

### Enterprise homepage

- **Owner(s):** Juliana, Farhan
- **Outcomes:**
    - The feedback resulting from [design QA](https://www.figma.com/file/sPRyyv3nt5h0284nqEuAXE/%2312192-Sourcegraph-server-page-v1?node-id=2274%3A21539) has been implemented.
    - The feature has been QA'd internally.
    - If all feedback resulting from internal QA can be integrated during the iteration, the feature flag is turned on by default so that server users see it in 3.21.
    - Metrics collection will be reviewed
    - Survey is sent to internal users to gauge the response
- **Work log:**
    - 2020-09-25: Feedback from design QA has been implemented and merged. Telemetry logging has been added. This feature is now also available for Sourcegraph.com behind a feature flag.
    - 2020-10-02: All outcomes were met, and the enterprise homepage has been turned on by default.

### Search tour

- **Owner(s):** Farhan
- **Outcomes:**
    - The [feedback from the first round of user testing](https://github.com/sourcegraph/sourcegraph/issues/13944) has been implemented.
    - The design team is able to run subsequent rounds of user testing for feedback.
    - If user testing is completed, and feedback is addressed, the tour is turned on for all Sourcegraph.com new users by default.
    - Metrics logging is reviewed and approved by @ebrodymoore and @rrhyne.
- **Work log:**
    - 2020-09-25: Fixes for the first round of user testing have been implemented in a [PR](https://github.com/sourcegraph/sourcegraph/pulls/attfarhan), approved by @limitedmage and awaiting review from @rrhyne and @lguychard. Metrics have been reviewed and approved by @ebrodymoore and rrhyne.
    - 2020-10-02: All outcomes were met. Design has and continues to run more user testing, and there have not been additional changes requested.
    
### Search expressions

- **Owner(s):** Rijnard
- **Outcomes:**
    - Make search expressions available under feature flag (merge WIP PR) 
- **Work log:**
    - 2020-09-25: Not working on this this week. Next week.
    - 2020-10-02: Didn't get a chance to do work on it this week.

### Blog post: Turning code search into on-demand lightweight analysis

- **Owner(s):** Rijnard
- **Outcomes:**
    - Raise visibility on the topic/capability of code search as lightweight analysis. Inform relevant customer contacts about these capabilities.
- **Work log:**
    - 2020-09-25: Want to get the multiline search query page onto Sourcegraph.com for the blog post, so I worked on that a bit. It doesn't have to be perfect, but it can't be a mess either, so I've been working on polishing up the [PR#14147](https://github.com/sourcegraph/sourcegraph/pull/14147). Debugged/fixed a major regression affecting repogroups, a setback for progress on this blog post. Also got sidetracked by an important customer issue about large files not being indexed, and debugged/reproduced the issue to help next steps. Will continue with this work item next week, should be ok to get things done in time.
    - 2020-10-02: Finished the main blog post content. Got some valuable feedback and I'm going to do another pass to address that next week before publishing. The multiline editor page does need a bit more work (see [PR description](https://github.com/sourcegraph/about/pull/1618).
    
### Code Monitoring
- **Owner(s):** Juliana
- **Outcomes:**
    - Work with product and design to understand the scope of the work. Based on this, start work on a dev implementation plan.
- **Work log:**
    - 2020-09-25: Initial meeting took place between Pooja, Quinn Keast and Juliana to understand the scope of the work. [Meeting notes](https://docs.google.com/document/d/1EG42dM1old49uPXpGAqL7b9k95bWpM0Zcu0JM5gXtOQ/edit?ts=5f6dac2c)
    - 2020-10-02: More offline discussions have been completed to clarify the scope of the work. An initial [dev implementation plan](https://docs.google.com/spreadsheets/d/1IP9XS3JAd-ulxi2WTqqDFs1KimtyHsb1HbBMQxk6abw/edit#gid=0) has been drafted.
