---
title: 'Building a Go Web Application with Gin, MongoDB, and Cody AI'
description: Learn how to build a web application with the Gin framework for Go and MongoDB with the help of Cody AI.
authors:
  - name: Ado Kukic
    url: https://twitter.com/adocomplete
publishDate: 2023-10-22T12:00
tags: [blog]
slug: building-a-go-web-app-with-gin-mongodb-cody-ai
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/building-go-web-app-with-cody.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/building-go-web-app-with-cody.png
---

**Note:** This tutorial was originally published on the [MongoDB Developer Center](https://www.mongodb.com/developer/products/mongodb/build-go-web-application-gin-mongodb-help-ai/).

Building applications with [Go](https://go.dev/) provides many advantages. The language is fast, simple, and lightweight while supporting powerful features like concurrency, strong typing, and a robust standard library. In this tutorial, we'll use the popular [Gin web framework](https://github.com/gin-gonic/gin) along with [MongoDB](https://www.mongodb.com/) to build a Go-based web application.

Gin is a minimalist web framework for Golang that provides an easy way to build web servers and APIs. It is fast, lightweight, and modular, making it ideal for building microservices and APIs, but can be easily extended to build full-blown applications.

We'll use Gin to build a web application with three endpoints that connect to a MongoDB database. MongoDB is a popular document-oriented NoSQL database that stores data in JSON-like documents. MongoDB is a great fit for building modern applications.

Rather than building the entire application by hand, we'll leverage [Cody](https://about.sourcegraph.com/cody?utm_source=blog&utm_medium=devrel) to help us build our Go application. Cody is the only AI assistant that knows your entire codebase and can help you write, debug, test, and document your code. We'll use many of these features as we build our application today.

## Prerequisites

Before you begin, you'll need:

-   Go installed on your development machine. [Download it](https://go.dev/dl/) on their website.
-   A MongoDB Atlas account. [Sign up for free](https://www.mongodb.com/cloud/atlas/register).
-   Basic familiarity with Go and MongoDB syntax.
-   Cody AI installed in your favorite IDE. (For this tutorial, I'll be using [VS Code](https://code.visualstudio.com/)). [Get Cody for your IDE here](https://about.sourcegraph.com/cody?utm_source=blog&utm_medium=devrel).

Once you meet the prerequisites, you're ready to build. Let's go.

## Getting started

We'll start by creating a new Go project for our application. For this example, we'll name the  project `mflix`, so let's go ahead and create the project directory and navigate into it:

```bash
mkdir mflix
cd mflix
```

Next, initialize a new [Go module](https://go.dev/blog/using-go-modules), which will manage dependencies for our project:

```bash
go mod init mflix
```

Now that we have our Go module created, let's install the dependencies for our project. We'll keep it really simple and just install the gin and mongodb libraries.

```bash
go  get  github.com/gin-gonic/gin
go  get  go.mongodb.org/mongo-driver/mongo
```

With our dependencies fetched and installed, we're ready to start building our application.

## Gin application setup with Cody

To start building our application, let's go ahead and create our entry point into the app by creating a main.go file. Next, while we can set up our application manually, we'll instead leverage Cody to build out our starting point. In the Cody chat window, we can ask Cody to create a basic Go Gin application.

<Video 
  source={{
    mp4: 'blog/build-go-web-app-gin-mongodb-cody/go-gin-setup'
  }}
  loop={true}
  title="Using Cody AI to scaffold a Go Gin application"
/>

Cody generated a good starting point for us. It imported the Gin framework, created a main function, and instantiated a basic Gin application with a single route that prints the message Hello World. Good start.

```go
package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
    r.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Hello World",
        })
    })

    r.Run()
}
```

Let's make sure this code runs. Start up the server by running go run main.go in your terminal window inside the mflix directory and then navigate to `localhost:8080`, which is the default port for a Gin application. Our code works and the result we should see is:

![A Gin route that responds with Hello World](https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/gin-hello-world.png)

We have a great starting point now. Next, let's add our MongoDB client to our Gin application. We could use Cody again, but for this one, let's write it ourselves. We'll update the code to the following:

```go
package main

import (
    // Add required Go packages
    "context"
    "log"

    "github.com/gin-gonic/gin"

       // Add the MongoDB driver packages 
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

// Your MongoDB Atlas Connection String
const uri = "YOUR-CONNECTION-STRING-HERE"

// A global variable that will hold a reference to the MongoDB client
var mongoClient *mongo.Client


// The init function will run before our main function to establish a connection to MongoDB. If it cannot connect it will fail and the program will exit.
func init() {
    if err := connect_to_mongodb(); err != nil {
        log.Fatal("Could not connect to MongoDB")
    }
}

func main() {
    r := gin.Default()
    r.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Hello World",
        })
    })

    r.Run()
}

// Our implementation logic for connecting to MongoDB
func connect_to_mongodb() error {
    serverAPI := options.ServerAPI(options.ServerAPIVersion1)
    opts := options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)

    client, err := mongo.Connect(context.TODO(), opts)
    if err != nil {
        panic(err)
    }
    err = client.Ping(context.TODO(), nil)
    mongoClient = client
    return err
}
```

Be sure to set your MongoDB Atlas connection string on line 12 in the `const uri` variable. Otherwise, the program will not run. You can get your MongoDB Atlas connection string by navigating to the Atlas dashboard, clicking the "Connect" button on your database cluster, and selecting the driver you are using.

![MongoDB Atlas connection details](https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/atlas-connection-details.png)

If you need more help setting up your MongoDB Atlas cluster and loading in the sample data, check out the ["How to Use a Sample Database with MongoDB"](https://www.mongodb.com/basics/sample-database) guide. The database that we will work with is called `sample_mflix` and the collection in that database we'll use is called movies. This dataset contains a list of movies with various information like the plot, genre, year of release, and much more.

![MongoDB Atlas in-browser document viewer.](https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/atlas-document-viewer.png)

Now that we have our MongoDB database set up in our Go application, we are ready to start building our additional endpoints. Since we'll be working out of the sample dataset that contains movie information, we'll create three endpoints based on working with movie data:

-   An endpoint to get a list of all the movies.

-   An endpoint to get a single movie based on a provided id.

-   An endpoint to run an aggregation on the movies collection.

We can either do this manually or if you're new to writing Go applications, you can ask Cody. Let's ask Cody.

<Video 
  source={{
    mp4: 'blog/build-go-web-app-gin-mongodb-cody/cody-create-endpoints'
  }}
  loop={true}
  title="Using Cody AI to create Gin endpoints"
/>

Cody gave us three ready-to-go endpoints.

### Get movies

This endpoint will go into the sample_mflix database, and then into the movies collection, and it'll retrieve all of the movies.

```go
//  GET  /movies  -  Get  all  movies
func  getMovies(c  *gin.Context) {
    //  Find  movies
    cursor, err := mongoClient.Database("sample_mflix").Collection("movies").Find(context.TODO(), bson.D{{}})

    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    //  Map  results
    var movies []bson.M

    if err = cursor.All(context.TODO(), &movies); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    //  Return  movies
    c.JSON(http.StatusOK, movies)

}
```

### Get movie by ID

The second endpoint will return a specific movie based on the id provided from the movies collection in the sample_mflix database.

```go
//  GET  /movies/:id  -  Get  movie  by  ID
func  getMovieByID(c  *gin.Context)  {

    //  Get  movie  ID  from  URL
    id  :=  c.Param("id")

    //  Find  movie  by  ID
    var  movie  bson.M

    err  :=  mongoClient.Database("sample_mflix").Collection("movies").FindOne(context.TODO(),  bson.D{{"_id",  id}}).Decode(&movie)
    if  err  !=  nil  {
        c.JSON(http.StatusInternalServerError,  gin.H{"error":  err.Error()})
        return
    }

    //  Return  movie
    c.JSON(http.StatusOK,  movie)
}
```

### Aggregate movies

The third and final endpoint will allow us to run [aggregations](https://www.mongodb.com/docs/manual/aggregation/) on the movies collection. Aggregation operations process multiple documents and return computed results. So with this endpoint, the end user could pass in any valid MongoDB aggregation pipeline to run various analyses on the movies collection.

Note that aggregations are very powerful and in a production environment, you probably wouldn't want to enable this level of access through HTTP request payloads. But for the sake of the tutorial, we opted to keep it in. As a homework assignment for further learning, try using Cody to limit the number of stages or the types of operations that the end user can perform on this endpoint.

```go
//  POST  /movies/aggregations  -  Run  aggregations  on  movies

func  aggregateMovies(c  *gin.Context)  {
    //  Get  aggregation  pipeline  from  request  body
    var  pipeline  interface{}

    if  err  :=  c.ShouldBindJSON(&pipeline);  err  !=  nil  {
        c.JSON(http.StatusBadRequest,  gin.H{"error":  err.Error()})
        return
    }

    //  Run  aggregations
    cursor,  err  :=  mongoClient.Database("sample_mflix").Collection("movies").Aggregate(context.TODO(),  pipeline)

    if  err  !=  nil  {
        c.JSON(http.StatusInternalServerError,  gin.H{"error":  err.Error()})
        return
    }

    //  Map  results
    var  result  []bson.M

    if  err  =  cursor.All(context.TODO(),  &result);  err  !=  nil  {
        c.JSON(http.StatusInternalServerError,  gin.H{"error":  err.Error()})
        return
    }

    //  Return  result
    c.JSON(http.StatusOK,  result)
}
```

Now that we have our endpoints implemented, let's add them to our router so that we can call them. Here again, we can use another feature of Cody, called autocomplete, to intelligently give us statement completions so that we don't have to write all the code ourselves.

<Video 
  source={{
    mp4: 'blog/build-go-web-app-gin-mongodb-cody/cody-routes'
  }}
  loop={true}
  title="Using Cody AI autcomplete to register Gin routes"
/>

Our main function should now look like:

```go
func  main()  {
    r  :=  gin.Default()

    r.GET("/",  func(c  *gin.Context)  {
        c.JSON(200,  gin.H{
            "message":  "Hello  World",
        })
    })
    r.GET("/movies",  getMovies)
    r.GET("/movies/:id",  getMovieByID)
    r.POST("/movies/aggregations",  aggregateMovies)

    r.Run()
}
```

Now that we have our routes set up, let's test our application to make sure everything is working well. Restart the server and navigate to `localhost:8080/movies`. If all goes well, you should see a large list of movies returned in JSON format in your browser window. If you do not see this, check your IDE console to see what errors are shown.

![A browser window showing JSON results of all movies in the movies collection.](https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/movies.png)

Let's test the second endpoint. Pick any id from the movies collection and navigate to `localhost:8080/movies/{id}` -- so for example, `localhost:8080/movies/573a1390f29313caabcd42e8`. If everything goes well, you should see that single movie listed. But if you've been following this tutorial, you actually won't see the movie.

![A browser window showing that no documents were found.](https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/no-movie-found.png)

The issue is that in our getMovie function implementation, we are accepting the id value as a string, while the data type in our MongoDB database is an ObjectID. So when we run the FindOne method and try to match the string value of id to the ObjectID value, we don't get a match.

Let's ask Cody to help us fix this by converting the string input we get to an ObjectID.

<Video 
  source={{
    mp4: 'blog/build-go-web-app-gin-mongodb-cody/cody-convert-string-to-object-id'
  }}
  loop={true}
  title="Using Cody AI to convert string to ObjectId"
/>

Our updated getMovieByID function is as follows:

```go
func  getMovieByID(c  *gin.Context)  {

    //  Get  movie  ID  from  URL
    idStr  :=  c.Param("id")

    //  Convert  id  string  to  ObjectId
    id,  err  :=  primitive.ObjectIDFromHex(idStr)
    if  err  !=  nil  {
        c.JSON(http.StatusBadRequest,  gin.H{"error":  err.Error()})
        return
    }

    //  Find  movie  by  ObjectId
    var  movie  bson.M

    err  =  mongoClient.Database("sample_mflix").Collection("movies").FindOne(context.TODO(),  bson.D{{"_id",  id}}).Decode(&movie)

    if  err  !=  nil  {
        c.JSON(http.StatusInternalServerError,  gin.H{"error":  err.Error()})
        return
    }

    //  Return  movie
    c.JSON(http.StatusOK,  movie)
}
```

Depending on your IDE, you may need to add the primitive dependency in your import statement. The final import statement looks like:

```go
import  (
    "context"
    "log"
    "net/http"

    "github.com/gin-gonic/gin"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)
```

If we examine the new code that Cody provided, we can see that we are now getting the value from our id parameter and storing it into a variable named `idStr`. We then use the primitive package to try and convert the string to an ObjectID. If the `idStr` is a valid string that can be converted to an ObjectID, then we are good to go and we use the new id variable when doing our `FindOne` operation. If not, then we get an error message back.

Restart your server and now try to get a single movie result by navigating to `localhost:8080/movies/{id}`.

![A browser window showing details of a single movie.](https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/single-movie.png)

For our final endpoint, we are allowing the end user to provide an aggregation pipeline that we will execute on the mflix collection. The user can provide any aggregation they want. To test this endpoint, we'll make a POST request to `localhost:8080/movies/aggregations`. In the body of the request, we'll include our aggregation pipeline.

![A Postman screenshot showing the results of a running an aggregation query.](https://storage.googleapis.com/sourcegraph-assets/blog/build-go-web-app-gin-mongodb-cody/postman.png)

Let's run an aggregation to return a count of comedy movies, grouped by year, in descending order. Again, remember aggregations are very powerful and can be abused. You normally would not want to give direct access to the end user to write and run their own aggregations ad hoc within an HTTP request, unless it was for something like an internal tool. Our aggregation pipeline will look like the following:


```json
[
  {"$match":  {"genres":  "Comedy"}},
  {"$group":  {
    "_id":  "$year", 
    "count":  {"$sum":  1}
  }},
  {"$sort":  {"count":  -1}}
]
```

Running this aggregation, we'll get a result set that looks like this:

```json
[
    {
        "_id":  2014,
        "count":  287
    },
    {
        "_id":  2013,
        "count":  286
    },
    {
        "_id":  2009,
        "count":  268
    },
    {
        "_id":  2011,
        "count":  263
    },
    {
        "_id":  2006,
        "count":  260
    },

    ...
]
```

It seems 2014 was a big year for comedy. If you are not familiar with how aggregations work, you can check out the following resources:

-   [Introduction to the MongoDB Aggregation Framework](https://www.mongodb.com/developer/products/mongodb/introduction-aggregation-framework/)
-   [MongoDB Aggregation Pipeline Queries vs SQL Queries](https://www.mongodb.com/developer/products/mongodb/sql-to-aggregation-pipeline/)
-   [A Better MongoDB Aggregation Experience via Compass](https://www.mongodb.com/developer/products/compass/mongodb-compass-aggregation-improvements/)

Additionally, you can ask Cody for a specific explanation about how our aggregateMovies function works to help you further understand how the code is implemented using the Cody `/explain` command.

<Video 
  source={{
    mp4: 'blog/build-go-web-app-gin-mongodb-cody/explain-cody'
  }}
  loop={true}
  title="Using Cody AI to explain code"
/>

## Final code

We wrote a Go web server using Gin, MongoDB, and Cody today. While the application may not be the most complex piece of code, we learned how to:

-   Build routes and endpoints using the Gin web framework.
-   Implement MongoDB in our Gin application.
-   Make MongoDB queries to retrieve data.
-   Execute MongoDB aggregations.
-   Leverage Cody to help us write, debug, and explain code.

The final documented output of all the code we've written in this post is below for your reference:

```go
// Declare the entry point into our application
package  main

// Add our dependencies from the standard library, Gin, and MongoDB
import  (
    "context"
    "fmt"
    "log"
    "net/http"

    "github.com/gin-gonic/gin"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

// Define your MongoDB connection string
const  uri  =  "{YOUR-CONNECTION-STRING-HERE}"

// Create a global variable to hold our MongoDB connection
var  mongoClient  *mongo.Client

// This function runs before we call our main function and connects to our MongoDB database. If it cannot connect, the application stops.
func  init()  {
    if  err  :=  connect_to_mongodb();  err  !=  nil  {
        log.Fatal("Could  not  connect  to  MongoDB")
    }
}

// Our entry point into our application
func  main()  {

    // The simplest way to start a Gin application using the frameworks defaults
    r  :=  gin.Default()

    // Our route definitions
    r.GET("/",  func(c  *gin.Context)  {
        c.JSON(200,  gin.H{
            "message":  "Hello  World",
        })
    })
    r.GET("/movies",  getMovies)
    r.GET("/movies/:id",  getMovieByID)
    r.POST("/movies/aggregations",  aggregateMovies)

    // The Run() method starts our Gin server
    r.Run()
}

// Implemention of the /movies route that returns all of the movies from our movies collection.
func  getMovies(c  *gin.Context)  {

    //  Find  movies
    cursor,  err  :=  mongoClient.Database("sample_mflix").Collection("movies").Find(context.TODO(),  bson.D{{}})

    if  err  !=  nil  {
        c.JSON(http.StatusInternalServerError,  gin.H{"error":  err.Error()})
        return
    }

    //  Map  results
    var  movies  []bson.M

    if  err  =  cursor.All(context.TODO(),  &movies);  err  !=  nil  {
        c.JSON(http.StatusInternalServerError,  gin.H{"error":  err.Error()})
        return
    }

    //  Return  movies
    c.JSON(http.StatusOK,  movies)
}

// The implementation of our /movies/{id} endpoint that returns a single movie based on the provided ID
func  getMovieByID(c  *gin.Context)  {

    //  Get  movie  ID  from  URL
    idStr  :=  c.Param("id")

    //  Convert  id  string  to  ObjectId
    id,  err  :=  primitive.ObjectIDFromHex(idStr)

    if  err  !=  nil  {
        c.JSON(http.StatusBadRequest,  gin.H{"error":  err.Error()})
        return
    }

    //  Find  movie  by  ObjectId
    var  movie  bson.M

    err  =  mongoClient.Database("sample_mflix").Collection("movies").FindOne(context.TODO(),  bson.D{{"_id",  id}}).Decode(&movie)

    if  err  !=  nil  {
        c.JSON(http.StatusInternalServerError,  gin.H{"error":  err.Error()})
        return
    }

    //  Return  movie
    c.JSON(http.StatusOK,  movie)
}

// The implementation of our /movies/aggregations endpoint that allows a user to pass in an aggregation to run our the movies collection.
func aggregateMovies(c *gin.Context) {

    // Get aggregation pipeline from request body
    var pipeline interface{}

    if err := c.ShouldBindJSON(&pipeline); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    // Run aggregations

    cursor, err := mongoClient.Database("sample_mflix").Collection("movies").Aggregate(context.TODO(), pipeline)

    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    // Map results
    var result []bson.M

    if err = cursor.All(context.TODO(), &result); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }

    // Return result
    c.JSON(http.StatusOK, result)

}

// Our implementation code to connect to MongoDB at startup
func  connect_to_mongodb()  error  {
    serverAPI  :=  options.ServerAPI(options.ServerAPIVersion1)
    opts  :=  options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)
    client,  err  :=  mongo.Connect(context.TODO(),  opts)

    if  err  !=  nil  {
        panic(err)
    }

    err  =  client.Ping(context.TODO(),  nil)
    mongoClient  =  client

    return  err
}
```

## Conclusion

Go is an amazing programming language and Gin is a very powerful framework for building web applications. Combined with MongoDB and the native MongoDB driver, and with a little help from Cody, we were able to build this app in no time at all.

Cody is the only AI assistant that knows your entire codebase. In this tutorial, we barely scratched the surface of what's possible. Beyond autocomplete and the commands we showed today, Cody can identify code smells, document your code, create unit tests, and supports the creation of custom commands to extend it to whatever use case you have. Give Cody a try for free at [cody.dev](https://about.sourcegraph.com/cody?utm_source=blog&utm_medium=devrel).

The entire code for our application is above, so there is no GitHub repo for this simple application. Happy coding.
