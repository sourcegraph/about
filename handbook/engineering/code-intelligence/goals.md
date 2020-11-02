# Cloud goals and priorities

## Goals

Track our progress in our [Looker dashboard](https://sourcegraph.looker.com/dashboards/131).

### The majority of code intel results are precise (for languages we support fully)

_Languages we fully support currently include Go, TypeScript, C/C++, and Java._ Languages will be added to this list as we make progress toward our second goal, listed below.

It is imperative that we raise adoption *deeply* within a particular language and ecosystem. The goal of the code intelligence team is to provide fast and precise answers about a user's _universe of code_. This can only happen when that entire universe is indexed. We intend to provide an index for _all_ such universes of code by making progress on two fronts. First, we need to raise excitement for the opportunities adopting precise code intelligence makes possible. Once a user sees what is possible, they should have little reason not to put in the effort of adoption. Second, we need to reduce the friction felt during indexing (especially during adoption). Users tend to perceive only the work we ask them to do to set up precise code intelligence and do not perceive the full benefit of precise code intelligence. Reducing the friction of indexing is a critical step in growing support.

**Milestones:**

1. Update pings and dashboards to accurately reflect this goal's success criteria.
1. 🔄 Support incrementally indexing source code to reduce the time to useful intelligence.
1. 🔄 Support automatically indexing source code to reduce the amount of effort required from users.
1. 🔄 lsif-go provides results for 80% of Go code intelligence operations for three companies.
1. 🔄 lsif-clang provides results for 80% of Go code intelligence operations for three companies.
1. 🔄 lsif-java provides results for 80% of Go code intelligence operations for three companies.
1. lsif-node provides results for 80% of Go code intelligence operations for three companies.
1. Integrate with build tools to reduce the friction of indexing monorepos.
    - Support Bazel
    - Support Buck
    - Support Pants

### Increase the number of languages that we support fully

**Problem:** Our first goal increases adoption _deeply_ at companies whose core stack aligns with the set of languages we fully support. Unfortunately, this says nothing about enterprise customers who are _partially_ supported or _unsupportable_ because we lack support for a common language. There will always be a large pool of untapped users we can reach by adding support for additional languages.

**Milestones:**

1. Update pings and dashboards to accurately reflect this goal's success criteria.
1. Automatically maintain a list of languages unsupported by precise code intelligence ordered by that language's impact. Currently we gather data by hand from multiple sources, which is easy to get wrong and quick to become stale. We need to add additional ping data and find a way to automate customer surveys to correctly gauge a language's desire over time.
1. Build an indexer for the next highest-impact language/ecosystem. (TBD)
1. Go back to #3.
