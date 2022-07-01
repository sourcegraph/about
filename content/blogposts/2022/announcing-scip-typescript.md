---
title: 'scip-typescript: a new TypeScript and JavaScript indexer'
description: We are excited to announce the release of scip-typescript, a new indexer that allows you to navigate TypeScript and JavaScript codebases on Sourcegraph with compiler-accurate precision.
authors:
  - name: Ólafur Páll Geirsson
    url: https://twitter.com/olafurpg
publishDate: 2022-06-08T18:00+02:00
tags: [blog]
slug: announcing-scip-typescript
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-typescript-2.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-typescript-2.png
published: true
---

![scip-typescript: a new TypeScript and Javascript indexer](https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-typescript.png)

We are excited to announce the release of scip-typescript, a new indexer that allows you to navigate TypeScript and JavaScript codebases on Sourcegraph with compiler-accurate precision. Key features of scip-typescript include:

- **Performance:** scip-typescript is almost as fast as the TypeScript typechecker, indexing 1k-5k lines per second depending on the usage of types in your codebase. If you’re migrating from lsif-node, our older TypeScript indexer, you can expect to see 3-10x speedups after migrating to scip-typescript.
- **Cross-repository navigation:** scip-typescript is designed from the ground up to support navigating between multiple repositories. You can follow symbols between multiple TypeScript projects, or even between your codebase and package.json dependencies.
- **Find implementations:** You can navigate from an interface, interface property, abstract class, or abstract method to its concrete implementations.

The name “scip-typescript” is derived from SCIP, a new code indexing format that we are using at Sourcegraph. You can learn about SCIP by reading the [announcement here](announcing-scip).

## Get started with scip-typescript

Use the `scip-typescript index` command to index a TypeScript codebase.

```bash
yarn global add @sourcegraph/scip-typescript @sourcegraph/src
cd my-typescript-project
yarn install          # Or npm install
scip-typescript index # Optionally include --yarn-workspaces
src lsif upload       # Upload the index to Sourcegraph
```

Use the `--infer-tsconfig` flag for pure JavaScript projects. Optionally, to improve the quality of the indexed data, add `@types/*` `devDependencies` for JavaScript dependencies that have available TypeScript definitions.

```bash
scip-typescript index --infer-tsconfig
```

## Performance

Indexing a codebase with scip-typescript should have roughly similar performance as type checking the codebase with `tsc`. We built scip-typescript with the TypeScript type checker and our benchmarks indicate that indexing performance is largely bottlenecked by type checking performance.

We benchmarked scip-typescript by running it against several open source codebases to measure the indexing performance. The numbers are measured with a 2019 MacBook Pro with a 2.6 GHz 6-Core Intel Core.

<div style={{overflowX: 'auto'}}>
<table>
    <tr>
        <th></th>
        <th>Lines of code</th>
        <th>scip-typescript index (s)</th>
        <th>loc/s</th>
        <th>Size (gzip, MB)</th>
    </tr>
    <tr>
        <td>coder/code-server</td>
        <td>6,545</td>
        <td>6,4</td>
        <td>1,023</td>
        <td>2,1</td>
    </tr>
     <tr>
        <td>sunflower-land/sunflower-land</td>
        <td>20,824</td>
        <td>11,6</td>
        <td>1,795</td>
        <td>0, 4</td>
    </tr>
     <tr>
        <td>react-navigation/react-navigation</td>
        <td>36,024</td>
        <td>14,5</td>
        <td>2,484</td>
        <td>0,6</td>
    </tr>
    <tr>
        <td>vercel/next.js</td>
        <td>68,107</td>
        <td>14,3</td>
        <td>4,763</td>
        <td>9,3</td>
    </tr>
    <tr>
        <td>typeorm/typeorm</td>
        <td>81,087</td>
        <td>27,9</td>
        <td>2,906</td>
        <td>3,4</td>
    </tr>
    <tr>
        <td>Microsoft/TypeScript/src/compiler</td>
        <td>111,155</td>
        <td>22,7</td>
        <td>4,897</td>
        <td>3,2</td>
    </tr>
    <tr>
        <td>sourcegraph/sourcegraph</td>
        <td>263,010</td>
        <td>154,35</td>
        <td>1,704</td>
        <td>6,2</td>
    </tr>
</table>
</div>

The indexing performance varies from codebase to codebase, ranging anywhere between 1k-5k lines of code per second. Given the large variation in indexing performance, the best way to understand real-world scip-typescript performance is to run it against your codebase.

Our experience is that the `scip-typescript index` command is not always a bottleneck in a CI pipeline when you take into account all steps such as `git clone` to checkout the source code and `yarn install` to download external dependencies.

## Cross-repository navigation

The actions “Go to definition” and “Find references” work across your codebase and package.json dependencies. Try this out yourself by opening the [github.com/vendure-ecommerce/vendure repository](https://sourcegraph.com/github.com/vendure-ecommerce/vendure@0dfa9d0b4b7f9f6af1c6406d44b096543c28db3e/-/blob/packages/create/src/create-vendure-app.ts?L39:6&subtree=true#tab=references) and navigating to the definition of the `arguments()` method that’s defined by the `commander` npm package.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-typescript/navigate-to-arguments.png"
  alt="Navigate to arguments() method defined in commander npm"
/>

Likewise, trigger “Find references” on the `action()` method to get real-world examples of that symbol across multiple repositories and packages.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-typescript/trigger-find-references.png"
  alt="Trigger Find references on action() method"
/>

Observe that the results come from both GitHub repositories and npm packages. The code from npm packages is the same source code that’s typically installed under the `node_modules/` directory.

Read more in our docs, [here](https://docs.sourcegraph.com/integration/npm), on how to set up the same npm package support on a self-hosted Sourcegraph instance.

## Find implementations

Use the new “Find implementations” button to navigate from an abstract class, interface, interface property, or abstract class method to their concrete implementations. For example, trigger “Find implementations” on the [`QuickPickItem.label`](https://sourcegraph.com/npm/types/vscode@b309120c719af01453d6df4a7f82902c22b1afb3/-/blob/index.d.ts?L1678:9&subtree=true#tab=implementations_typescript) property from the `@types/vscode` npm package.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/announcing-scip-typescript/find-implementations-feature.png"
  alt="Navigation with Find Implementations feature"
/>

Observe that the implementation in the screenshot is a property on an object literal with type `ProcessInfoItem`, which is an interface that extends `QuickPickItem`.

```ts
interface QuickPickItem {
  label: string
  …
}
interface ProcessInfoItem extends QuickPickItem {
  pid: number
}
const extractItem: IExpressionItem = {
  label: string, // implements `QuickPickItem.label`
  pid: 42 // implements `ProcessInfoItem.pid`
  …
}
``` 

This is a good example of the kind of static analysis that scip-typescript is able to perform. We are excited to extend the functionality of scip-typescript to include related navigation actions like “Go to type definition.”

## Migrating from lsif-node to scip-typescript

Before creating scip-typescript, we used another TypeScript indexer called [lsif-node](https://github.com/sourcegraph/lsif-node). We recommend migrating to scip-typescript if you are using lsif-node.

Follow the steps below to migrate from lsif-node to scip-typescript:

- Replace usages of the `lsif-tsc -p ARGUMENTS` command with `scip-typescript index ARGUMENTS`. 
- Upgrade to the latest version of the `src` command-line interface, which you can install via `yarn global add @sourcegraph/src`. It’s okay if the version of your `src` command-line interface does not match the version of your Sourcegraph instance.

You can expect to see 3-10x speedup improvements by migrating to scip-typescript. The actual speedup varies from codebase to codebase. When we migrated from lsif-node to scip-typescript in the Sourcegraph codebase, the indexing job in our CI went from ~40 minutes (12 parallel jobs) down to ~5 minutes (1 job).

Give scip-typescript a try and don’t hesitate to [open an issue](https://github.com/sourcegraph/lsif-typescript) if you have questions or need help.
