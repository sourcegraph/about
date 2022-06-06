---
title: 'scip-typescript: a new TypeScript and JavaScript indexer'
description: ''
authors:
  - name: Olaf Geirsson
publishDate: 2022-06-08T18:00+02:00
tags: [blog]
slug: announcing-scip-typescript
heroImage: blog/announcing-scip.png
socialImage: blog/announcing-scip.png
published: true
---

![Vulnerabilities in open source packages](https://storage.googleapis.com/sourcegraph-assets/blog/third-party-open-source-vulnerabilities.png)

We are excited to announce the release of scip-typescript, a new indexer allowing you to navigate TypeScript and JavaScript codebases on Sourcegraph with compiler-accurate precision. Key features of scip-typescript include:

- **Performance:** scip-typescript is almost as fast as the TypeScript typechecker, indexing 1k-5k lines per second depending on the usage of types in your codebase. If you’re migrating from lsif-node, our older TypeScript indexer, you can expect to see 3-10x speedups after migrating to scip-typescript.
- **Cross-repository navigation:** scip-typescript is designed from the ground up to support navigating between multiple repositories. You can follow symbols between multiple TypeScript projects, or even between your codebase and package.json dependencies.
- **Find implementations:** You can navigate from an interface, interface property, abstract class, or abstract method to its concrete implementations.

The name “scip-typescript” is derived from SCIP, a new code indexing format that we are using at Sourcegraph and you can learn about by reading the [announcement here](LINK).

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

### Performance

Indexing a codebase with scip-typescript should have roughly similar performance as type checking the codebase with `tsc`. We built scip-typescript with the official TypeScript type checker and our benchmarks indicate that indexing performance is largely bottlenecked by type checking performance. We ran scip-typescript against several open source codebases to measure the indexing performance. The numbers are measured with a 2019 MacBook Pro with a 2,6 GHz 6-Core Intel Core.

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

The indexing performance varies from codebase to codebase, ranging anywhere between 1k-5k lines of code per second. Given the large variation in indexing performance, the best way to understand real-world scip-typescript performance is to run it against your codebase. Our experience is that `scip-typescript` is not always a bottleneck in a CI pipeline when compared to other steps such as `git clone` to checkout the source code and `yarn install` to download external dependencies.

## Cross-repository navigation

The actions “go to definition” and “find references” work across your codebase and your package.json dependencies.

### Migrating from lsif-node to scip-typescript

Before scip-typescript …, we have used [lsif-node](LINK). Started as a fork, …, extended with new features, performance improvements. Link to [SCIP announcement](LINK).


We recommend migrating to scip-typescript if you are using lsif-node, our former TypeScript indexer. To migrate, replace `lsif-tsc -p .` invocations with the command `scip-typescript index`. You can read more in our docs, [here](https://docs.sourcegraph.com/code_intelligence/how-to/index_a_typescript_and_javascript_repository).

When we migrated from lsif-node to scip-typescript in the Sourcegraph codebase, the indexing job in our CI went from ~40 minutes (12 parallel jobs) down to ~5 minutes (1 job).

Give scip-typescript a try and don’t hesitate to open an issue if you have questions or need help.

