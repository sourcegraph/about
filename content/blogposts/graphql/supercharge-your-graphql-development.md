---
title: 'Supercharge your GraphQL Development'
authors:
  - name: '@attfarhan'
publishDate: 2017-10-26T22:28-07:00
tags: [
  "graphql"
]
slug: supercharge-your-graphql-development
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3Bcsa30hcciOAS6sq68CQg/4c138e6a9f868828c82341cf0b9338a6/Wong-1.png
published: true
---


Supercharge your GraphQL Development

Jon Wong is a Frontend Infrastructure Engineer at Coursera.  He thinks a lot about developer productivity, and recently has been thinking often about how people use GraphQL.

Today, Jon claims he'll teach us how to supercharge our GraphQL development faster than Lee Byron can tie a bowtie.

There are 3 tools he'll teach us today that'll help supercharge your GraphQL development:
* eslint-plugin-graphql
* apollo-codegen
* prettier

![Wong-1](//images.contentful.com/le3mxztn6yoo/3Bcsa30hcciOAS6sq68CQg/4c138e6a9f868828c82341cf0b9338a6/Wong-1.png)

Why are these tools important and useful to learn?

1. The tools are simple to setup: each tool takes between 30 seconds to 30 minutes to set up
1. They have a high impact on developer experience
1. They help scale GraphQL across your org: make writing GraphQL fun and safe.

Before we begin... you need your GraphQL schema:

```bash
yarn add graphql-cli
graphql-init
graphql get-schema
```

## eslint-plugin-graphql

eslint-plugin-graphql can be used to check the validity of your GraphQL queries.  To add a rule, add a rule to your .graphql config file.

Jon gives us a quick demo that shows us how the `graphql/template-string` rule will warn you when you try to use a field that doesn't exist.

Other rules that eslint-plugin-graphql provides include:

* `graphql/named-operations`: enforce operation names to make queries easier to debug and trace
* `graphql/required-fields`: enforce presence of particular fields
* validate schema changes in product code. Figure out exactly what code in your production app will break when your schema changes.

## Apollo-codegen

Apollo-codegen is a tool to generate API code or type annotations based on a GraphQL schema and query documents. It supports Flow, TypeScript, Swift, and Scala targets

Apollo-codgen ensures that:
* the data you get from the server can be used
* you use your API data correctly
* wont have to manually type your queries - manually creating types results in losing valuable information and specificity

Using apollo-codegen with queries and fragments is useful. Attempting to use an undeclared field from a fragment declaration won't get caught by a linter, but will get caught by types.

## Prettier

While many of us know Prettier for use with JavaScript, it also has GraphQL support.  Prettier is an opinionated code formatter. It has an opinion about GraphQL too.  It even works on .graphql files.  Prettier lets the computer take care of how GraphQL looks, and makes sure you avoid wasting time arguing on how GraphQL should look.
