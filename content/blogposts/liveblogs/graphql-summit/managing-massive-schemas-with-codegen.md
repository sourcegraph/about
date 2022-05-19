---
title: 'Managing Massive Schemas with Codegen'
authors:
  - name: Adam Kramer
publishDate: 2017-10-26T00:00-07:00
tags: [
  "graphql"
]
slug: managing-massive-schemas-with-codegen
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2YBGlmUKd2YI20SKKaQk4U/96abd1cef08936f9fec31818980516a3/graphql.png
published: true
---


Adam Kramer has been a software engineer at Facebook since 2008, working on the largest GraphQL server in the world for the last a year and a half. In addition to an engineering career, he holds a Ph.D. in Psychology and is interested in developing highly usable engineering systems to make software engineering more accessible to human beings. His three top hobbies include refereeing roller derby, karaoke, and explaining jokes.

## Abstract

At Facebook, our GraphQL schema has over 10,000 object types. How do we manage such a massive, rapidly-changing schema with a team of just 5 engineers? The secret is writing code to write code, providing cleaner schemas, safer typing, and faster execution times.

## Defining a schema

Adam is arguing that there doesn't need to be a big debate or discussion over what the schema looks like.

Adam starts by asking: "What's your server language?"

Facebook uses Hack, and the principles of the server language should translate to the schema language.

Most languages have "classes" and "methods". Analogously GraphQL has "types" and "fields".

Adam suggests that these concepts are similar, and we should consider that.


Below is an example GraphQL schema and abbreviated Hack class describing the same type.

![Screen Shot 2017-10-26 at 2.30.02 PM](//images.contentful.com/le3mxztn6yoo/57MGTecbNeOIY8gKyKs2Ae/cf253c8b7990bc13b66698d6748fd314/Screen_Shot_2017-10-26_at_2.30.02_PM.png)

Notice some similarities between the GraphQL schema `User` and the Hack class `FBUser`.

### Schemas are a type system

GraphQL is strongly typed. Types have fields, fields have types.

Your language might be strongly typed too.

Your schema definition is the bridge between GraphQL and your language.

Your server's implementation matters. _Do not_ abstract away from this blindly.


### Data layers vs. implementation layers

Even though client engineers operate above the data layer, as API engineers we should care how the server is executing requests.

At Facebook, server APIs usually expose the right data. Adam uses this to tie the Hack type system and the GraphQL type systems together as cleanly as possible.

## Don't write your own schema


Below is a new schema definition language previously presented at a different (???) conference.


![Screen Shot 2017-10-26 at 2.35.31 PM](//images.contentful.com/le3mxztn6yoo/4VqEzNBbrWSkyuiEs0AwA/57a62f0767263bbc8c5db75938fa3740/Screen_Shot_2017-10-26_at_2.35.31_PM.png)

Adam suggests that the internal server API should inform the external server API.

He suggests you indicate in your server language what the schema should look like.


### Codegen to save us from ourselves

But happens if the implementation changes?

Assume a tight coupling, but don't tie the two together... _then_ abstract away.

Runtime artifacts map between systems.

This makes the runtime safe, efficient, and disconnected.

![Screen Shot 2017-10-26 at 2.39.02 PM](//images.contentful.com/le3mxztn6yoo/a6b9v3MQDYsQ4Oao0OgOg/810a9520b0aeedcf35c6baf5222a9b33/Screen_Shot_2017-10-26_at_2.39.02_PM.png)

Code on the bottom is generated code, from the code on the top.

![Screen Shot 2017-10-26 at 2.39.10 PM](//images.contentful.com/le3mxztn6yoo/ZyrHeyTPq0iSgSo6WwssM/e5018b371d2fe32e1c0e984085863ba9/Screen_Shot_2017-10-26_at_2.39.10_PM.png)

### Compile time vs. build time vs. run time

This lets you ensure at compile time, your native code is sound. And also at build time, your generated code is sound.

The hard work has been done by code generation.

As a result, your schema and queries are sound.

... so your type systems match at runtime!

## Summary

Suggesting you just write good APIs for your server, annotate the server code with hints on how to generate the schema, and then generate the schema from there.
