# Sourcegraph Style Guide

The goal of our product and marketing copy is to create the best impression of Sourcegraph on our target users. This style guide describes how to do so.

Our copy should be:

- Accessible
- Clear
- Correct
- Consistent

## General

- Seek to make content available, and coherent, to all peoples.
- Use Title Case for headers, buttons, features, and short lists.
- Use sentence case for non-header text. When sentence case is used, full punctuation should be used.
- Render proper nouns as their creators prefer ("GitHub" not "Github").
- Punctuation goes outside of quotation marks, except in marketing when displaying a quote.
- Use the most popular US English spelling and phrasing.
- Prefer the serial comma in lists, except where ambiguity would be introduced by including it.

### Clarity

Assume the reader is a busy non-native English speaker.

- Assume copy will be read through a screen-reader, poor translation, and on a device/screen that is different than your own.
- Remove unnecessary words.
- Use simple sentence syntax.
- Avoid ambiguous verbs. For example, avoid using verbs like "cluster", "document", "label", "group", "admin", etc., because we commonly use those as nouns.
- Write robust sentences that can be understood even if the reader doesn't recognize all of the words.

### Referring to the Product and Features

- Sourcegraph: main product, prefer using this name unless you need to be more precise
  - Sourcegraph Server: the form of our product that ships as the `sourcegraph/server` Docker image and runs on a single node
  - Sourcegraph Data Center: the form of our product that runs on Kubernetes
  - Sourcegraph.com: the public instance of Sourcegraph for open-source code at https://sourcegraph.com
  - Sourcegraph integrations: the general term for our integrations
    - Sourcegraph['s] Phabricator integration
    - Sourcegraph['s] GitHub integration
    - Sourcegraph['s] browser extensions
      - Sourcegraph['s] Chrome extension
      - Sourcegraph['s] Firefox add-on
      - Sourcegraph['s] Safari extension

When specifically distinguishing between Server and Data Center, it might help to say "the [single-node] Server deployment option" and "the Data Center [cluster] deployment option".

You don't need to use the full name of the product each time you refer to it, but don't use a shortened name that could be confused with an official name. For example:

- Good: "Use the Phabricator integration to get Sourcegraph features in code review"
- Bad: "Use the Sourcegraph Phabricator integration to get Sourcegraph features in code review" (sounds repetitive and stilted)
- Bad: "Use the Phabricator Integration to..." (the capital "I" makes it into a proper noun, which implies it's a separate product from "Sourcegraph Phabricator integration")
- Bad: "Want to use this in your code review tool? Use [Sourcegraph for Phabricator](#_) or [Sourcegraph for GitHub](#_)." (This implies that "Sourcegraph for Phabricator" and "Sourcegraph for GitHub" are official product names.

Only use "our" (as in "our GitHub integration") in discussion threads; in documentation or marketing material, depending on the context, use "the" or "Sourcegraph".

## Conventions

### UX

- Prefer labels over placeholders to describe input fields.
- Use placeholders sparingly. Don't use them for examples or descriptions.

### Links

The text of a link should be a short and specific description of what you'll see/do when you click.

For example:

- Good: See [how to add repositories](#_).
- Bad: See [documentation](#_) for adding repositories.
- Bad: See [this page](#_) for how to add repositories.
- Bad: [Click here](#_) for documentation on adding repositories.

Another example:

- Good: [Edit site configuration](#_) to add a repository.
- Bad: Edit [site configuration](#_) to add a repository.
- Bad: [Go to the site configuration editor](#_) to add a repository.
- Bad: [Click here](#_) to add a repository.

Never use any of the following as link text:

- here
- click here
- this
- this page
- page
- instructions
- these instructions

### Instructions, References, and Citations

Render references to UI text in bold. Match the actual case of the UI text in other products even if it violates our style guide.

> Click **Add user**.

> In the \*_Single Sign On Url_ field, ...

Refer to and cite other documents by quoting and linking their title. The quotation marks are not linked, and the period goes outside the quotes.

> For more information, see "[Adapting an existing language server for use with Sourcegraph](https://about.sourcegraph.com/docs/code-intelligence/adapting-language-servers/)".

### Examples

- Don't use examples to compensate for poor documentation.
- Don't use "cutesy" examples.

For consistency, all examples should use the following names (as appropriate).

- People: Alice, Bob, Carol, David, Elizabeth, etc. (alphabetical first names)
- Usernames: `alice`, `bob`, etc.
- Hostnames: example.com and subdomains of example.com (avoid using real names such as `mycompany.com`)
- Email addresses: alice@example.com, bob@example.com, etc.
- URLs: https://sourcegraph.example.com (assume HTTPS)
- Organizations: ABC Organization (`abc-org`)

### Technical

- Treat all supported platforms equally. For example, don't give instructions for Chrome or GitHub in a way that implies they are the "default".
- Prefer linking to a 3rd-party tool's existing documentation over explaining it in our own documentation.

### Specific Terms in Prose

- Repository (not "repo")
- Organization (not "org")
- When referring to a user's assumed corporate entity or employer, prefer calling it an "organization" (not "company" or "team")
- Email address (not "email")
- Admin or Site admin (not "administrator" or "site administrator")
- Documentation not docs ("docs" is OK in paths and navigation links)
- Configuration not config ("config" is OK in paths and navigation links)
- Setup is a noun, "set up" is a verb ([see notaverb.com/setup](http://notaverb.com/setup), although see [note on descriptivism](#note))
- Prefer "sign in" to "log in" (also: "login" is a noun, "log in" is a verb)
- Sourcegraph (not "sourcegraph" or "SourceGraph")
- URL (not "url")
- OpenID Connect (not "OIDC")
- PostgreSQL (not any of: Postgres, postgres, PgSQL, Postgresql, PostGres, etc.)
- Go (not "Golang")
- macOS (not any of: OS X, OSX, MacOS, MacOSX, etc.)
- Capitalize as shown: Docker, Bitbucket, GitHub, React, JavaScript, TypeScript (all according to the intent of the creator)

### "Contact Us" Language

When letting users know they can contact us with questions, feedback, or issues, always use the phrasing below:

> Questions/feedback? Contact us at [@srcgraph](https://twitter.com/srcgraph) or <mailto:support@sourcegraph.com>, or file issues on our [public issue tracker](https://github.com/sourcegraph/issues/issues).

The `FeedbackText` component in the [Sourcegraph repository](https://github.com/sourcegraph/sourcegraph) should be used when possible.

If this is too long, simply direct users to our "Contact us" or "Contact sales" pages. For example:

> [Contact us](/contact) if you need a `sourcegraph-server-gen` version other than the newest release.

Or

> [Buy code intelligence](/contact/sales).

Finally, if this is too general, or not suited to the specific context, you can use more exact language. For example, in our security policy:

> If you have specific questions or concerns, contact us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>.

## Note

This style guide isn't about "correct" and "incorrect" writing. It is about effective writing (for our target users). Of course, effectiveness involves correctness to some degree, but only correctness as judged by the audience, not as judged by an appeal to authority.

Consider the common case of using "setup" as a verb, as in "To setup the cluster, ...". Many of our target users consider that usage incorrect and would think (slightly) less of us for using it. It doesn't matter if we think that usage is acceptable; the effect it has on our audience is negative, so we should not use it.

To dispute a guideline in this style guide, argue based on effectiveness, not correctness.

For further reading, see [linguistic prescription on Wikipedia](https://en.wikipedia.org/wiki/Linguistic_prescription) and [The Chicago Manual of Style](https://www.chicagomanualofstyle.org/).
