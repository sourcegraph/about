# Roadmap

This document contains the search team's current roadmap. 

1. 🔄 Enterprise homepage
       - **Owner:** Farhan, Juliana
          - **Status:** In progress
         - **Estimated completion**: 3.21
1. 🔄 Search tour
    - **Owner:** Farhan
          - **Status:** In progress
          - **Estimated completion**:
              - ~~3.20~~ 2020-09-22 update: not all bugs found during the initial round of user testing were fixed in 3.20
              - 3.21
1. 🔄 Search expressions
1. 🔄 Scaling indexed text search to 500k repositories
   - **Plan:** Incrementally add repositories to Sourcegraph.com until searches get slow or start breaking. Fix those things. Then continue adding repositories.
   - **Owners:** Keegan/Stefan
   - **Status:** [In progress](perf.md)
   - Planned work
    -- code monitoring -- description
    -- diff/commit search --- 
   - **Estimated completion**: 3.23 (End of December 2020)
1. 🔄 Streaming search 
 - **Plan:** Streaming search
  - **Owners:** Keegan, Juliana
  - **Status:** In progress
  - **Estimated completion:**
    - ~~3.21~~ 2020-09-23 update: We revised this estimate after discussing needed work on the design & frontend side.
    - 3.22
1. Code monitoring v1
      - **Plan**
          - Private / Individual code monitors
          - Email and Webhooks Support
      - **Owner:** Juliana, Stefan
      - **Status:** Not started
      - **Estimated start:** 2020-11-02
      - **Estimated effort:** 4 weeks
1. Performance at scale: follow-up to “scale indexed text search to 500k repositories”, focus and scope TBD
1. As a user, I can create a scope of code I want to search across as a list of repositories (consolidate repogroups + search scopes)
1. As a user, I can create a scope of code I want to search across as a list of repositories + branches (better version contexts 1/2)
1. Search language rules engine
  - **Owner:** Rijnard
  - **Status:** In progress
  - **Plan**
      - Implement a query language extension to express relations (i.e., rules) on code, files, repositories, and commits. This replaces awkward one-off filters like `repohasfile`, `repohascommitafter` that do not generalize.
      - Prototype semantic search functionality that combines text search and LSIF data
      - Implement quality-of-life features for search: syntax highlighting, multiline queries, improve structural search performance
  - **Owner:** Rijnard/Stefan
  - **Status:** Not started
  - **Estimated start:** 3.21
  - **Estimated effort:** 4 months
1. Saved searches without monitoring
1. Search results redesign
1. Diff/commit search performance
1. Search input redesign
1. Structural search performance
1. As a user, I can create a scope of code I want to search across as a list of repositories + branches that should be indexed (better version contexts 2/2)
1. Code monitoring v2
       - Learn from user testing private monitors
       - Diff/commit search performance, 
       - Sharing monitors in organization, 
       - Improve notification message 
1. Semantic search: prototype validation
1. External search result providers
1. Semantic search: implementation

