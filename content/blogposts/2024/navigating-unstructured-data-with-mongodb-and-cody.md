---
title: "Navigating unstructured data with MongoDB and Cody"
publishDate: 2024-10-14T19:00-07:00
authors:
  - name: Megan Grant
    url: https://x.com/MeganGrant333
  - name: Ado Kukic
    url: https://twitter.com/adocomplete
tags: [blog]
slug: 'navigating-unstructured-data-with-mongodb-and-cody'
published: true 
description: "Unlock the power of unstructured data with MongoDB and Cody. Learn how you can use Cody to help you write, debug, and understand MongoDB queries, aggregation pipelines, and more."
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/navigating-unstructured-data-with-mongodb-and-cody/navigating-unstructured-data-with-mongodb-and-cody-og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/navigating-unstructured-data-with-mongodb-and-cody/navigating-unstructured-data-with-mongodb-and-cody-og.png
---

If you're a developer, you may have experienced the overwhelming responsibility of managing a large collection of information. For instance, imagine you have a database that holds tens of thousands of movies. Each movie has its own set of attributes, such as title, description, release year, cast, awards, and genre.

Different stakeholders want to use this data in different ways. For example, you may need to display the movie information on your streaming website, or the data team may want to run an analysis to see which actor groupings gross higher at the box office, and everything in between.

How can you efficiently structure such a vast dataset, while ensuring that your queries are performant, accurate, and can scale as your dataset and use cases grow?

[MongoDB](https://mdb.link/atlas-sourcegraph) is a time-tested powerhouse for handling unstructured, semi-structured, and fully structured data. In this post, we'll take a look at the MongoDB document model, how to query it, the challenges and strengths of working with unstructured data, and how an AI coding assistant like [Cody](https://sourcegraph.com/cody) can revolutionize your development workflow.

## The MongoDB document model

MongoDB's [document model](https://mdb.link/document-database-sourcegraph)represents a substantial departure from traditional relational database systems. Instead of normalizing your data into tables, which can be difficult to scale and complex to query as your data needs change, MongoDB stores data in flexible, JSON-like documents called [BSON](https://mdb.link/bson-sourcegraph) (Binary JSON). This approach offers several advantages:

1.  The schema is more flexible: Unlike rigid table structures in relational databases, MongoDB allows each document to have a unique structure. This is particularly useful for datasets where attributes may vary significantly between entries.

1.  The data structures are nested: Documents can contain complex nested structures, such as arrays and sub-documents. This allows for a more natural representation of hierarchical or complex data.

1.  It's easier to scale: The document model facilitates horizontal scaling through sharding, allowing MongoDB to handle massive datasets across distributed systems.

Let's look at a document from a sample movie database called [mflix](https://mdb.link/sourcegraph-mflix):

```js
{

  "_id": ObjectId("5f50c31e1c4d7500991d930a"),
  "title": "Inception",
  "year": 2010,
  "director": "Christopher Nolan",
  "genres": ["Sci-Fi", "Action", "Thriller"],
  "cast": [
    {"name": "Leonardo DiCaprio", "role": "Cobb"},
    {"name": "Ellen Page", "role": "Ariadne"},
    {"name": "Joseph Gordon-Levitt", "role": "Arthur"}
  ],
  "ratings": {
    "imdb": 8.8,
    "rottenTomatoes": 87,
    "metacritic": 74
  },
  "plot": "A thief who enters the dreams of others to steal secrets from their subconscious.",
  "awards": [
    {"name": "Academy Award", "category": "Best Visual Effects", "year": 2011},
    {"name": "BAFTA Award", "category": "Best Production Design", "year": 2011}
  ]
}
```

This single document encapsulates a wealth of information about the movie Inception, demonstrating the power and flexibility of MongoDB's document model. In a traditional RDBMS, this information would very likely be spread across multiple tables, such as movies, awards, actors, and so on. Combining all of these tables to get the above view would require a complex query consisting of multiple JOINs that could get computationally expensive. With MongoDB's query engine, you can access all of this data effortlessly. 

### The power of MongoDB queries

Working with your MongoDB data is done through the MongoDB query language. The query language's capabilities are immensely powerful while the developer experience is simple and easy to pick up and master. MongoDB offers the base CRUD operators you'd expect but also boasts an array of complex operators to work with queries, [geospatial data](https://mdb.link/sourcegraph-geospatial), text search, and if that's not enough, a powerful aggregation engine to process your MongoDB data in any way you see fit.

Let's look at a simple query that demonstrates some of these capabilities. We'll assume you are using the MongoDB Node.js driver that you have already set up in a function like this:

```js
async function query(){

const database = client.db("sample_mflix")
const collection = database.collection("movies")

// Our query here

}
```

For our first MongoDB query, let's write a function to retrieve a list of all the movies that contain the word "Cody" in the title:

```js
const results = await collection.find({ title: { $regex: ".*Cody.*" } }).toArray()
```

We used the `.find()` method and searched the title key for a regular expression that contained the word "Cody." We got a few results back, such as Agent Cody Banks and Fetching Cody.

Let's do a more complex query. I want to retrieve the list of movies with an IMDb rating greater than 9 that have only won a single award. I'll ask Cody to generate this query for us.

<Video
  source={{
    mp4: 'blog/navigating-unstructured-data-with-mongodb-and-cody/mongodb-movies'
  }}
  loop={true}
  caption="Cody inline edit to generate a MongoDB query"
/>

If we run this function, we will only get one movie that matches this criteria: Hollywood, from our mflix dataset. Cody can be an awesome pair programmer when it comes to generating MongoDB queries as the syntax can get complex quickly.

Let's take a look at another example. MongoDB has a powerful aggregation framework that allows you to transform your data through as many stages as you need to get the outcome you want. Writing aggregation queries can quickly get unwieldy. For example, let's take a look at a MongoDB aggregation pipeline query and try to understand what it does.

```js
const pipeline = [
      {
        $match: {
          year: { $gte: 2000, $lte: 2020 },
          genres: { $all: ["Drama", "Thriller"] }
        }
      },
      {
        $unwind: "$cast"
      },
      {
        $group: {
          _id: "$cast",
          movieCount: { $sum: 1 },
          averageRating: { $avg: "$imdb.rating" }
        }
      },
      {
        $sort: { movieCount: -1, averageRating: -1 }
      },
      {
        $limit: 5
      }
]
```

This aggregation pipeline finds drama/thriller movies from 2000 to 2020. Then, it calculates the number of such movies and the average rating for each actor, sorting the results to find the top 10 actors in the category. The results can be seen here:

```js
[
  {
    "_id": "Naomi Watts",
    "movieCount": 7,
    "averageRating": 7.057142857142857
  },
  {
    "_id": "Nicole Kidman",
    "movieCount": 7,
    "averageRating": 6.214285714285714
  },
  {
    "_id": "Ben Affleck",
    "movieCount": 6,
    "averageRating": 7.583333333333333
  },
  {
    "_id": "Ethan Hawke",
    "movieCount": 6,
    "averageRating": 6.55
  },
  {
    "_id": "Matthew McConaughey",
    "movieCount": 6,
    "averageRating": 6.516666666666667
  }
]
```

## Leveraging Cody for MongoDB

As databases grow in complexity and scale, AI-powered coding assistants become more valuable for developers than ever before. Cody can significantly enhance your MongoDB development experience in a number of ways:

With its autocomplete feature, Cody can help you construct syntactically correct queries. This reduces errors and saves you time on consulting documentation. Cody will infer what you are trying to do based on the code around it, but sometimes it can be helpful to also give Cody guidance in the form of comments.

<Video
  source={{
    mp4: 'blog/navigating-unstructured-data-with-mongodb-and-cody/write-query-with-cody'
  }}
  loop={true}
  caption="Cody autocomplete to generate MongoDB query"
/>

By analyzing your query and gaining a better understanding of your data model, Cody will also suggest ways to better optimize your queries to improve their performance.

<Video
  source={{
    mp4: 'blog/navigating-unstructured-data-with-mongodb-and-cody/simplify-aggregation'
  }}
  loop={true}
  caption="Cody chat to optimize MongoDB query"
/>

Cody not only provides helpful feedback on potential issues with your queries but also offers alternatives to help you improve your query performance and efficiency.

### Practical examples with Cody

Let's take a look at some examples of where Cody can assist with common MongoDB tasks:

#### 1. Constructing a complex query

Suppose you want to find all movies directed by Christopher Nolan after 2010 that have won at least one Academy Award. You might tell Cody:

"Cody, help me write a MongoDB query to find movies directed by Christopher Nolan after 2010 that have won at least one award."

Cody might respond with:

```js
const pipeline = [
      {
        $match: {
          directors: "Christopher Nolan",
          year: { $gt: 2010 },
          awards: { $exists: true, $ne: null }
        }
      },
      {
        $project: {
          _id: 0,
          title: 1,
          year: 1,
          awards: 1
        }
      }
    ];
```

#### 2. Optimizing a query

You might then ask Cody to optimize this query:

"Cody, how can I optimize this query for better performance?"

The current query is:

```js
const pipeline = [
      {
        $match: {
          "tomatoes.viewer.rating": { $exists: true },
          "tomatoes.critic.rating": { $exists: true }
        }
      },
      {
        $project: {
          title: 1,
          viewerScore: "$tomatoes.viewer.rating",
          criticScore: "$tomatoes.critic.rating",
          scoreDifference: { $subtract: ["$tomatoes.viewer.rating", "$tomatoes.critic.rating"] }
        }
      },
      {
        $match: {
          scoreDifference: { $gt: 0 }
        }
      },
      {
        $sort: { scoreDifference: -1 }
      }
    ];
```

And what it does is return a list of movies in descending order based on the delta between the Rotten Tomatoes viewer and critic score.

Cody could suggest:

```js
    // Create a compound index for better performance
    await collection.createIndex({ 
      "tomatoes.viewer.rating": 1,
      "tomatoes.critic.rating": 1
    });

    const pipeline = [
      {
        $match: {
          "tomatoes.viewer.rating": { $exists: true, $type: "number" },
          "tomatoes.critic.rating": { $exists: true, $type: "number" }
        }
      },
      {
        $project: {
          title: 1,
          viewerScore: "$tomatoes.viewer.rating",
          criticScore: "$tomatoes.critic.rating",
          scoreDifference: { 
            $subtract: [
              { $ifNull: ["$tomatoes.viewer.rating", 0] },
              { $ifNull: ["$tomatoes.critic.rating", 0] }
            ]
          }
        }
      },
      {
        $match: {
          scoreDifference: { $gt: 0 }
        }
      },
      {
        $sort: { scoreDifference: -1 }
      },
      {
        $limit: 100
      }
    ];

    // Provide hints to the query

    const results = await collection.aggregate(pipeline, { 
      allowDiskUse: true,
      hint: { "tomatoes.viewer.rating": 1, "tomatoes.critic.rating": 1 }
    }).toArray();
```

Cody would explain that this compound index covers all fields used in the query, potentially improving performance significantly.

#### 3. Deciphering aggregation pipelines

Developers rarely work in silos and you may need to look at another developer's aggregation pipelines. Depending on the use case, you could spend a great deal of time trying to understand what an aggregation pipeline does, or you can ask Cody and get an overview in seconds.

Let's assume you have this aggregation pipeline:

```js
const pipeline = [
      { $match: { year: { $gte: 2000 } } },
      { $unwind: "$genres" },
      {
        $group: {
          _id: "$genres",
          avgRating: { $avg: "$imdb.rating" },
          count: { $sum: 1 },
          movies: { $push: { title: "$title", year: "$year", rating: "$imdb.rating" } }
        }
      },
      { $sort: { avgRating: -1 } },
      { $limit: 5 },
      {
        $project: {
          _id: 0,
          genre: "$_id",
          avgRating: { $round: ["$avgRating", 2] },
          count: 1,
          topMovies: {
            $slice: [
              {
                $sortArray: {
                  input: "$movies",
                  sortBy: { rating: -1 }
                }
              },
              3
            ]
          }
        }
      }
    ];
```

Trying to read through it to figure out what it's doing can be cumbersome. Asking Cody, we get:

![MongoDB aggregation query explanation with Cody](https://storage.googleapis.com/sourcegraph-assets/blog/navigating-unstructured-data-with-mongodb-and-cody/mongodb-with-cody.png)

## Conclusion

MongoDB's document model offers unparalleled flexibility when it comes to storing and querying unstructured data. While this power does introduce some degree of complexity, Cody is completely changing how developers interact with databases. By leveraging Cody, you can navigate the intricacies of MongoDB queries with greater ease and efficiency, unlocking the full potential of your data.

With practice and Cody by your side, you'll be writing sophisticated, performant queries that extract powerful insights from your data, no matter how unstructured or complex it may be.

Want to learn more from MongoDB? Head to [Developer Center](https://mdb.link/sourcegraph-developer-center) to read their latest tutorials, or visit the [Developer Community](https://mdb.link/sourcegraph-forums) to see what other people are building.