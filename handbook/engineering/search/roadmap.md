# Roadmap

This document contains the search team's current roadmap. 

#### 1. 🔄 Enterprise homepage
- **Owner:** Farhan, Juliana
- **Estimated completion**: 3.21
         
#### 2. 🔄 Search tour
- **Owner:** Farhan
- **Estimated completion**:
       - ~~3.20~~ 2020-09-22 update: not all bugs found during the initial round of user testing were fixed in 3.20
       - 3.21
#### 3. 🔄 Search expressions
#### 4. 🔄 Scaling indexed text search to 500k repositories
   - **Plan:** Incrementally add repositories to Sourcegraph.com until searches get slow or start breaking. Fix those things. Then continue adding repositories.
   - **Owners:** Keegan/Stefan
   - **Status:** (perf.md)
   - Planned work
    -- code monitoring -- description
    -- diff/commit search --- 
   - **Estimated completion**: 3.23 (End of December 2020)
#### 5. 🔄 Streaming search 
 - **Plan:** Streaming search
  - **Owners:** Keegan, Juliana
  - **Estimated completion:**
    - ~~3.21~~ 2020-09-23 update: We revised this estimate after discussing needed work on the design & frontend side.
    - 3.22
#### 6. Code monitoring v1
      - **Plan**
          - Private / Individual code monitors
          - Email and Webhooks Support
      - **Owner:** Juliana, Stefan
      - **Status:** Not started
      - **Estimated start:** 2020-11-02
      - **Estimated effort:** 4 weeks
#### 7. Performance at scale: follow-up to “scale indexed text search to 500k repositories”, focus and scope TBD
#### 8. As a user, I can create a scope of code I want to search across as a list of repositories (consolidate repogroups + search scopes)
#### 9. As a user, I can create a scope of code I want to search across as a list of repositories + branches (better version contexts 1/2)
#### 10. Search language rules engine
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
#### 11. Saved searches without monitoring
#### 12. Search results redesign
      - 
#### 13. Diff/commit search performance
      - requested by customers -  issue
      - important for code monitors
      - security use case search over code history / commits
#### 14. Search input redesign

#### 15. Structural search performance

#### 16. As a user, I can create a scope of code I want to search across as a list of repositories + branches that should be indexed (better version contexts 2/2)
#### 17. Code monitoring v2
       - Update based on learnings gained from user testing v1
       - Sharing monitors within an organization 
#### 18. Semantic search: prototype validation
       - Reference precise code intelligence data in search
#### 19. External search result providers
       - Ability to search over issue trackers, internal tools, etc.
       - First set of providers is likely extensions 
#### 20. Semantic search: implementation
       - Reference precise code intelligence data in search

