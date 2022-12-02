---
title: 'Sourcegraph and Backstage: Using the Sourcegraph Search API to create an entity provider for your Backstage catalog'
description: How to create a light, fast, and reliable Backstage ingestion provider for all your code hosts using the Sourcegraph API
authors:
  - name: Taras Mankovski
    url: https://frontside.com
  - name: Min Kim
    url: https://frontside.com
  - name: Joel Kwartler 
    url: https://sourcegraph.com
publishDate: 2022-12-05T00:00
tags: [blog]
slug: sourcegraph-backstage-search-api-create-entity-provider-for-backstage
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

Backstage Catalog has a concept called discovery. One way to think about discovery is that it's the opposite of manually registering components to the software catalog. 

Instead of a user going to the catalog and pasting the URL of a `catalog-info.yaml` file, the discovery ingestion finds those files in a repository hosting service like GitHub, GitHub Enterprise, BitBucket or GitLab. Discovery is performed by entity providers. The role of an entity provider is to read external sources like repositories and extract catalog information. 

In this blog post, we'll show you how to create a custom entity provider that uses the direct ingestion strategy to create a very light, very fast and reliable ingestion system for any hosting provider using Sourcegraph's `Code Search`.

## Backstage discovery ingestion system strategies: intermediate locations or direct

There are two strategies for building an ingestion system in Backstage - using intermediate locations or direct.

Intermediate location strategy involves creating a `Location` entity that targets a URL of a `catalog-info.yaml` file in a repository hosting platform. For example, a location of a `catalog-info.yaml` file for GitHub could be `https://github.com/myorg/myrepo/blob/master/catalog-info.yaml`. An entity provider that uses the intermediate location strategy emits locations that represent possible locations of `catalog-info.yaml` files. Those locations are added to the catalog and the catalog later attempts to read the `catalog-info.yaml` file. If the file exists, the catalog will parse and extract the metadata then add it to the catalog.

Direct strategy skips creating those locations entities. An entity providers that follow the direct strategy reads the contents of the `catalog-info.yaml` files during ingestion and creates catalog entries directly without creating intermediate locations.

Each strategy has its advantages and disadvantages. The intermediate location strategy emerged from manual registration use cases. The intermediate location is used to store errors that prevented the catalog from updating an entity after a `catalog-info.yaml` file was changed. 

The direct strategy is faster, lighter, and gives you more control over the ingestion process. There is simply less work to do with the direct strategy; you control how frequently `catalog-info.yaml` files are updated, and there are no location entities to process.

There are about fifteen different entity providers in Backstage which follow one of these two strategies. Which strategy they use depends on the API provided by the hosting platform for finding and reading files in a repository. Each repository hosting platform has a different way of programmatically reading the files stored in their repositories. For example, GitHub search only supports searching contents of default branches. GitHub Enterprise allows you to query all organizations via GraphQL but GitHub does not.

This makes it very difficult to create a consistently performant ingestion system that will scale to match the growing adoption of Backstage within an organization. As Backstage gets traction within an engineering organization, developers come to rely on Backstage and add more content to the catalog. When there is increased attention to the catalog, that is when the catalog should shine and not slow down.

## Direct ingestion using Sourcegraph 

Here's how to create a custom entity provider that uses the direct ingestion strategy to create a very light, very fast and reliable ingestion system for any hosting provider, using Sourcegraph's code search.

### Custom Entity Provider

To get started, here is a barebone structure of a custom entity provider:

```js
// packages/backend/src/sourcegraphEntityProvider.ts
import {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-backend';
import { Config } from '@backstage/config';
export class SourcegraphEntityProvider implements EntityProvider {
  private connection?: EntityProviderConnection;
  private readonly config: Config;
  static create(config: Config) {
    return new SourcegraphEntityProvider(config);
  }
  private constructor(
    config: Config
  ) {
    this.config = config;
  }
  getProviderName(): string {
    return `sourcegraph-entity-provider`;
  }
  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
  }
}
```

When you are writing your own entity provider, there are only three required components:

1. It must implement the `EntityProvider` interface from the `@backstage/plugin-catalog-backend` package
2. It must have a `getProviderName()` function that returns a unique ID
3. It must also have a `connect()` function - as the name suggests, it _connects_ your entity provider to the database when you start up your Backstage backend

Next, you need to add the new entity provider to your catalog:

```diff
# packages/backend/src/plugins/catalog.ts
+ import { SourcegraphEntityProvider } from "../sourcegraphEntityProvider.ts
...
+  const sourcegraphProvider = SourcegraphEntityProvider.create(env.config);
+  builder.addEntityProvider(sourcegraphProvider);
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}
```
### Integrating Sourcegraph

We are going to use [Sourcegraph's GraphQL API](https://docs.sourcegraph.com/api/graphql) to call queries from the new entity provider, but in order to do so you will need an access token from your Sourcegraph instance. You can generate one by going to `https://{org}.sourcegraph.com/user/settings/tokens`. Once you have an access token, add your Sourcegraph configuration to the `app-config.yaml` file of your Backstage app:

```diff
+ sourcegraph:
+   orgId: my-sourcegraph-org
+   token: ${SOURCEGRAPH_TOKEN}
```

In the code snippet below, we're using [`graphql-request`](https://github.com/prisma-labs/graphql-request) for our GraphQL client and creating a `full_mutation` function to try out a request:

```diff
...
+ import { GraphQLClient, gql } from "graphql-request";
...
export class SourcegraphEntityProvider implements EntityProvider {
+  private graphQLClient?: GraphQLClient;
  ...
  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
+    const endpoint = `https://${this.config.getString("sourcegraph.orgId")}.sourcegraph.com/.api/graphql`
+    this.graphQLClient = new GraphQLClient(endpoint, {
+      headers: {
+        authorization: `token ${this.config.getString("sourcegraph.token")}`
+      }
+    })
  }
+  async full_mutation() {
+    if (!this.connection) throw new Error('Not initialized');
+    if (!this.graphQLClient) throw new Error('GraphQL client not initialized');
+    const data = await this.graphQLClient.request(gql`
+      query {
+        currentUser {
+          username
+        }
+      }
+    `)
+    console.log(`Username: ${data.currentUser.username} ✅`);
+  }
}
```

The `full_mutation` function needs to be called so you can do that right after the catalog is built:

```diff
# packages/backend/src/plugins/catalog.ts
export default async function createPlugin(
...
  const sourcegraphProvider = SourcegraphEntityProvider.create(env.config);
  builder.addEntityProvider(sourcegraphProvider);
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
+  await sourcegraphProvider.full_mutation();
  return router;
}
```

At this point if you start up your Backstage backend, you should be able to see your Sourcegraph username printed in the console.

### Query and parse catalog-info into entities

Now that we know our authenticated queries can reach Sourcegraph's GraphQL API, you can run a Sourcegraph search to get the data you need to populate your software catalog. Here is the query we are going to use to get every repository that has a `catalog-info.yaml`:

```diff
  async full_mutation() {
    if (!this.connection) throw new Error('Not initialized');
    if (!this.graphQLClient) throw new Error('GraphQL client not initialized');
    const data = await this.graphQLClient.request(gql`
-      query {
-        currentUser {
-          username
-        }
-      }
-    `)
-    console.log(`Username: ${data.currentUser.username} ✅`);
+      query ($search: String!) {
+        search(query: $search) {
+          results {
+            results {
+              __typename
+              ... on FileMatch {
+                repository {
+                  name
+                }
+                file {
+                  content
+                }
+              }
+            }
+          }
+        }
+      }
+    `, {
+      search: "file:^catalog-info.yaml$"
+    });
  }
```
The response to that query will look something like this:

```
"data": {
  "search": {
    "results": {
      "results": [
        {
          "__typename": "FileMatch",
          "repository": {
            "name": "github.com/my_org/my_repo"
          },
          "file": {
            "content": "---\napiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n
              name: backstage\n  description: my backstage app\n type: website\n  owner: 
              john@example.com\n  lifecycle: production "
          }
        },
        ...
      ]
    }
  }
}
```

The file content will need to be parsed before it is transformed into an entity that can be fed into the catalog. Backstage provides a function for converting a `catalog-info.yaml` file into an entity:

```diff
+ import {
+   ANNOTATION_LOCATION,
+   ANNOTATION_ORIGIN_LOCATION,
+ } from '@backstage/catalog-model';
import {
  EntityProvider,
  EntityProviderConnection,
+  DeferredEntity,
+  parseEntityYaml,
} from '@backstage/plugin-catalog-backend';
...
+ const parseSourcegraphSearch = (data, providerName) => {
+   const parseResults: DeferredEntity[] = [];
+   data.search.results.results.forEach(result => {
+     const location = {
+       type: "url",
+       target: `${result.repository.name}/catalog-info.yaml`,
+     };
+     const catalogInfoYamlContent = Buffer.from(result.file.content, "utf8");
+     for (const parseResult of parseEntityYaml(catalogInfoYamlContent, location)) {
+       const annotated: DeferredEntity = {
+         entity: {
+           ...parsed.entity,
+           metadata: {
+             ...parsed.entity.metadata,
+             annotations: {
+               ...parsed.entity,metadata.annotations,
+               [ANNOTATION_LOCATION]: `url:${parsed.location.target},
+               [ANNOTATION_ORIGIN_LOCATION]: providerName,
+             }
+           }
+         },
+         locationKey: parsed.location.target,
+       }
+     }
+   });
+   return parseResults;
+ }
```

The [`parseEntityYaml` function](https://sourcegraph.com/github.com/backstage/backstage@8db366cc4ceb0fe6e10de81b8ba2277a350a3729/-/blob/plugins/catalog-backend/src/modules/util/parse.ts?L28-31) takes two arguments: a buffer of a `catalog-info.yaml` file and a [LocationSpec](https://sourcegraph.com/github.com/backstage/backstage@8db366cc4ceb0fe6e10de81b8ba2277a350a3729/-/blob/plugins/catalog-common/src/common.ts?L28-32). In the code snippet above, we're creating a function that takes the response from the Sourcegraph search query and converts the file content into an entity. And for each entity, it is attaching some additional annotations.

### Insert entities into the database

With your new list of entities, you can proceed to getting them into the database of your software catalog. The way to do this is by invoking `this.connection.applyMutation()` in the entity provider:

```diff
export class SourcegraphEntityProvider implements EntityProvider {
  ...
  async full_mutation() {
    ...
    const data = await this.graphQLClient.request(gql`...`, {...})
+    const parsedEntities = parseSourcegraphSearch(data, this.getProviderName());
+    await this.connection.applyMutation({
+      type: 'full',
+      entities: parsedEntities.map(parsed => ({
+        entity: parsed.entity,
+        locationKey: parsed.locationKey,
+      })),
+    })
  };
}
```

In the `full_mutation` function, we are now parsing the response from the Sourcegraph search query and then passing it into the `applyMutation` function.

Earlier we ran `full_mutation` from `backend/src/api/catalog.ts` to confirm that the custom entity provider is working. If you leave it as is, the entity provider will retrieve and populate the database only once until the backend needs to restart again. In order for it to continually update, we can use the Backstage Task Scheduler to have it trigger once a day:

```diff
# backend/src/api/catalog.ts
export default async function createPlugin(
...
  const sourcegraphProvider = SourcegraphEntityProvider.create(env.config);
  builder.addEntityProvider(sourcegraphProvider);
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
-  await sourcegraphProvider.full_mutation();
+  await env.scheduler.scheduleTask({
+    id: "sourcegraph-full-mutation-task-scheduler",
+    frequency: { cron: '0 0 * * *' },
+    timeout: { minutes: 30 },
+    fn: async () => await sourcegraphProvider.full_mutation();
+  });
  return router;
}
```

### Result: one single API call for everything

And there you have it! Using Sourcegraph search we were able to write a custom entity provider that queries all the relevant data that we require with one single API call to Sourcegraph - as opposed to making individual API calls to, say GitHub, for every single one of your repositories of your organization each time.

This is a great starting point, but one way we could make this even better is to have the catalog be able to perform live updates. You could shorten the frequency of the task scheduler, but the `full` mutation will overwrite the entire bucket so it's not ideal. Instead, you can utilize webhooks and Sourcegraph's [code monitoring](https://docs.sourcegraph.com/code_monitoring) to apply efficient, incremental changes to your catalog.

<div className="mt-6" />
## About the authors

_Taras Mankovski and Min Kim are respectively the CEO and technical fellow at [The Frontside Software, Inc](https://frontside.com/), a Backstage Professional Services Partner and DX Consulting Company. Joel is a product manager at Sourcegraph._