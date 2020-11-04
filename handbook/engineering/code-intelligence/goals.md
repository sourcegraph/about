# Code Intelligence goals

Progress on adoption and usage is tracked in our [Looker dashboard](https://sourcegraph.looker.com/dashboards/131).

### Grow LSIF adoption and usage reaching 10k precise code intel WAUs

**Problem:** By default, users get basic code intel results which are often incorrect for tokens with common names (such as Get). This is solved by enabling precise code intel, which gives users faster, 100% accurate results for a definition or reference for a symbol they hover over. 

**Strategy:** It is imperative that we raise adoption *deeply* within a particular language and ecosystem. We want to provide fast and precise answers about a user's _universe of code_. This can only happen when that entire universe is indexed. We intend to provide an index for _all_ such universes of code by making progress on two fronts. First, we need to raise excitement for the opportunities adopting precise code intelligence makes possible. Once a user sees what is possible, they should have little reason not to put in the effort of adoption. Second, we need to reduce the friction felt during indexing (especially during adoption). Users tend to perceive only the work we ask them to do to set up precise code intelligence and do not perceive the full benefit of precise code intelligence. Reducing the friction of indexing is a critical step in growing support. It is also necessary to raise adoption *widely* across companies. Until we have support for a set of indexers that aligns closely with a company's tech stack, we cannot pursue those companies for adoption. There will always be a large pool of untapped users we can reach by adding support for additional languages.

**Milestones:**

1. Validate Go support: 80% of Go code intel queries are precise within 3 customers.
    - ✅ [Deliver to $U](https://github.com/sourcegraph/customer/issues/78)
    - 🔄 [Deliver to $S](https://github.com/sourcegraph/customer/issues/77)
    - [Deliver to $C](https://github.com/sourcegraph/customer/issues/76)
1. Validate C++ support: Reach 80% precise code intelligence for C++ within 3 organizations.
    - [Deliver to $H](https://github.com/sourcegraph/customer/issues/86)
    - [Deliver to $F](https://github.com/sourcegraph/customer/issues/87)
    - [Deliver to $I](https://github.com/sourcegraph/customer/issues/88)
1. 🔄 Support automatically indexing source code within Sourcegraph.
1. 🔄 Support incremental indexing of Go source code.
1. Validate Java support: Reach 80% precise code intelligence for Java within 3 organizations.
    - Deliver to $C1 (TBD)
    - Deliver to $C2 (TBD)
    - Deliver to $C3 (TBD)
1. Validate TypeScript support: Reach 80% precise code intelligence for TypeScript within 3 organizations.
    - Deliver to $C1 (TBD)
    - Deliver to $C2 (TBD)
    - Deliver to $C3 (TBD)
1. Automatically maintain a list of languages unsupported by precise code intelligence ordered by that language's impact. Currently we gather data by hand from multiple sources, which is easy to get wrong and quick to become stale. We need to add additional ping data and find a way to automate customer surveys to correctly gauge a language's desire over time.
1. Integrate with build tools to reduce the friction of indexing monorepos.
    - Support Bazel
    - Support Buck
    - Support Pants
1. Build indexers for high-impact language/ecosystems
    - Support Python
    - Support Scala
    - Support C#
