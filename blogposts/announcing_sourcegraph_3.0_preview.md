# Announcing Sourcegraph 3.0-preview

We're excited to announce a big update, Sourcegraph 3.0-preview. This major release makes Sourcegraph into a platform that gives you code intelligence and other helpful integrations in code search, browsing, code hosts, review tools, and (soon) editors. It includes:

> TODO: The bullets below will link to the docs for each feature (which exist as PRs at https://github.com/sourcegraph/about/pulls).

- The ability to create and use Sourcegraph extensions, which are like editor extensions but run in all of your dev tools.
- All code intelligence (hovers, definitions, references, etc.) is provided via Sourcegraph extensions, which means increased coverage, more language-specific features, and greater configurability.
- Search supports language-specific query keywords, such as `js.depends:` and `go.imports:` for finding where a package is used.
- Repository permissions on your code host (starting with GitLab) are now respected, so users can only search/view code in authorized repositories.
- Faster search on the single-node deployment option (`sourcegraph/server` Docker image) when indexed search is enabled.
- Deploying and managing a Sourcegraph cluster for high-scale and high-availability is easier, with fewer services to run and online configuration updating.

This 3.0-preview release is recommended anyone who wants to try these new features and anyone setting up a new Sourcegraph instance. If you're currently running Sourcegraph 2.x, we recommend you wait to upgrade until Sourcegraph 3.0 (non-preview) is released in early December 2018.