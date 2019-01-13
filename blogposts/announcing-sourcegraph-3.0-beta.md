# Announcing Sourcegraph 3.0-beta

We're excited to announce a big update: Sourcegraph 3.0. Searching, reading, and reviewing code well is crucial to being a good developer. This release means Sourcegraph brings these capabilities to every developer and team with code in Git, with:

- Go-to-definition and find-references for all programming languages:
- More 3rd-party tools for useful context in your code:
- Any Docker-based cluster deployment:
- Sourcegraph is now open source

for all programming languages, preferred deployment methods, and necessary , . a platform that gives you code intelligence and other helpful integrations in code search, browsing, code hosts, and review tools (and, soon, editors). It includes:

For developers: When you're coding and get blocked by something, we want Sourcegraph to be the fastest way to unblock you. This release makes it so

> TODO: The bullets below will link to the docs for each feature (which exist as PRs at https://github.com/sourcegraph/about/pulls).

- The ability to create and use Sourcegraph extensions, which are like editor extensions but run in all of your dev tools.
- TODO: All code intelligence (hovers, definitions, references, etc.) is provided via Sourcegraph extensions, which means increased coverage, more language-specific features, and greater configurability.
- TODO: Basic code intel
- Search supports language-specific query keywords, such as searching for JavaScript files that depend on a library (with `js.depends:`) or Go files that import a package (with `go.imports:`).
- Repository permissions on your code host (starting with GitHub and GitLab) are now respected, so users can only search/view code in authorized repositories.
- Faster search on the single-node Docker image deployment option when indexed search is enabled.
- Deploying and managing a Sourcegraph cluster for high-scale and high-availability is easier, with fewer services to run and online configuration updating.

This 3.0 release is recommended for all new Sourcegraph instances. If you're currently running Sourcegraph 2.x, contact us for customized advice on how to upgrade to 3.0.
