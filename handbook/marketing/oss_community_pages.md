# Adding a community landing page

Sourcegraph hosts community landing pages to help open source community members discover, onboard, and search their code. Good examples include the [kubernetes](https://sourcegraph.com/kubernetes) and [stanford](https://sourcegraph.com/stanford) landing pages. The pages are based on search contexts (a named collection of repositories and revisions).

## How to create a community landing page on Sourcegraph Cloud

- Make sure you are a site-admin on Cloud
- Identify the requirements for the community search contexts page. What repos should be included in the search context? What examples would be worth highlighting?
- Create a new search context: https://sourcegraph.com/contexts/new
  - Select the "Global owner" option from the Owner dropdown (this will make the context available to all users on Cloud)
  - Enter the context name (e.g. `stanford`, `cncf`)
  - Enter a description (Markdown is supported)
  - Select the "Public" visiblity
  - Enter the repositories as a JSON config (see https://sourcegraph.com/contexts/stanford/edit for example configuration)
  - Click "Test configuration" to check if the configuration is in the correct format and that all of the entered repositories exist
  - Finally, you can create the search context

<!-- - Create the page ([example](https://github.com/sourcegraph/sourcegraph/commit/576318e4dff2a3ecc8002ebea2b490b8ee99fc31)) and open a PR. Tag the search-product team for review. -->
- TODO: Creating a page

