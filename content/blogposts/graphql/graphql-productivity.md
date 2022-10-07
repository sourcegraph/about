---
title: ' GraphQL Productivity'
authors:
  - name: '@bdougieYO'
publishDate: 2017-10-25T00:00-07:00
tags: [
  "graphql"
]
slug: graphql-productivity
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1AloAOmXha8oKe0EkcISKC/a14414add35b3879f02aa3331e70cc4a/abhi-aiyer.jpg
published: true
---


Abhi Aiyer [@abhiaiyer](https://twitter.com/abhiaiyer) Senior Software Engineer @ Workpop

Abhi is a life architect, but has mainly used his talents for technology. He used to love Object Oriented Problem Solving, but now finds himself in the functional world…"Schemin". Technology is not only a passion but an outlet for creative lateral thinking. Abhi is JavaScript developer with growing experience in Node.js, React, and GraphQL. He currently hosts of GraphQL Radio and contributes tutorial content for How To GraphQL.

Stages of Schema First DevelopmentLast year Daniel talks about these 3 things that looks like this![](https://d2mxuefqeaa7sj.cloudfront.net/s_8BA9FC874D3E7ED0D40192D2B2970C884F13EC0698D6926808459705F453E563_1508967501600_Screenshot\+2017-10-25\+14.37.44.png)But it really looks like this.![](https://d2mxuefqeaa7sj.cloudfront.net/s_8BA9FC874D3E7ED0D40192D2B2970C884F13EC0698D6926808459705F453E563_1508967519947_Screenshot\+2017-10-25\+14.37.49.png)\
**Types & Codegen & Review**\
You should organize your types into its own code structure and take time to review the structure.\
**Mocking**You should be able to provide fake data wit Mock. A Mock is something that intercepts the network interface.\
**Better mocking on the web with these tools**![](https://d2mxuefqeaa7sj.cloudfront.net/s_8BA9FC874D3E7ED0D40192D2B2970C884F13EC0698D6926808459705F453E563_1508965712837_Screenshot\+2017-10-25\+14.08.22.png)\*\*Build User interfaces in isolation [Apollo storybook decorator](https://github.com/abhiaiyer91/apollo-storybook-decorator) to mock build, and integrate into your project.

Define your schema

```js
    import faker from 'faker';

    export const typeDefs = `
      type Query {
        name: String
      }
      schema {
        query: Query
      }
    `;

    export const mockResolvers = {
      Query: () => {
        return {
          name: () => {
            return faker.name.findName();
          }
        };
      }
    }
```
* decorator

```js

    import { configure, addDecorator } from '@storybook/react';
    import apolloStorybookDecorator from 'apollo-storybook-decorator';

    addDecorator(
      apolloStorybookDecorator({
        typeDefs,
        mocks,
      })
    );

    function loadStories() {
      require('../stories/index.js');
    }

    configure(loadStories, module);

```
* write a storybook story.

```js
    import React from 'react';
    import { graphql } from 'react-apollo';
    import gql from 'graphql-tag';
    import { storiesOf } from '@storybook/react';

    let HelloWorld = function HelloWorld({ data }) {
      const name = data && data.name;
      if (data && data.loading) {
        return <h1>Loading one second please!</h1>;
      }
      return (
        <h1>
          Hello {name}, welcome from GraphQL Summit!
        </h1>
      );
    };

    const query = gql`
      query hello {
        name
      }
    `;

    HelloWorld = graphql(query)(HelloWorld);

    storiesOf('Apollo Storybook Example', module)
      .add('A simple component for GraphQL Summit', () => {
        return <HelloWorld />;
      });

```
