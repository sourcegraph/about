---
title: 'Google I/O talk: Building Sourcegraph, a large-scale code search & cross-reference engine in Go'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-05-30T00:00-07:00
tags: [
  "blog"
]
slug: google-i-o-talk-building-sourcegraph
description: 'Unlike other code search engines, Sourcegraph actually analyzes and understands code like a compiler, instead of just indexing the raw text of the code.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3ayCsUlsBiAM2wsu0Ioc6M/93ceb6323af51a6c0eb49d1e2c8422ae/0_DJYjK6JTlwcaMvH4.png
published: true
---



_This was originally a talk at_ [_Google I/O 2014_](https://www.google.com/events/io)_. Check out the_ [_slides_](http://go-talks.appspot.com/github.com/sourcegraph/talks/google-io-2014/gio2014.slide#1) _and_ [_YouTube video_](https://www.youtube.com/watch?v=-DpKaoPz8l8)_. Thanks to the_ [_Go team_](http://golang.org/) _for inviting us!_

#### What is Sourcegraph?

[Sourcegraph](https://sourcegraph.com/) is a large-scale, multi-language code search and cross-reference engine that indexes hundreds of thousands of open source repositories. Sourcegraph lets developers:

*   Search for functions, types, and other definitions across code on the web
*   See real usage examples for any function (taken from other projects that use it)
*   Browse source code files, with jump-to-definition and instant mouseover docs

![0*DJYjK6JTlwcaMvH4](//images.contentful.com/le3mxztn6yoo/3ayCsUlsBiAM2wsu0Ioc6M/93ceb6323af51a6c0eb49d1e2c8422ae/0_DJYjK6JTlwcaMvH4.png)

Unlike other code search engines, Sourcegraph actually analyzes and understands code like a compiler, instead of just indexing the raw text of the code. (This is what enables the features above.)

**If you haven’t used** [**Sourcegraph**](https://sourcegraph.com)**,** check out [the homepage](https://sourcegraph.com/) and then come back here. Since the rest of this post is about how we built Sourcegraph, it’s important for you to know what it is.

<div className="d-flex align-items-center justify-content-center">
    <iframe width="640" height="480" src="https://www.youtube-nocookie.com/embed/-DpKaoPz8l8"frameBorder="0"allowFullScreen></iframe>
</div>

### Building Sourcegraph with Go

Sourcegraph has two main parts:

1.  A large Go web app with an HTML frontend, JSON API, and SQL DB
2.  A language analysis toolchain that uses Docker to build and analyze projects

We’ll start with the web app. Next week we’ll cover Part 2 and discuss how we designed and built our language analysis toolchain.

### Part 1: Structure of a large Go web app

Our web app has 3 layers:

*   the web frontend, which returns HTML;
*   the HTTP API, which returns JSON; and
*   the data store, which runs SQL queries against our database and returns the results as Go structs or slices.

Basically, our frontend is just another API client to our own API. (We dogfood our own API.)

Here’s what it looks like:

![1*M99o63WSIzIzh86uZdTveA](//images.contentful.com/le3mxztn6yoo/7riB8h6i2cu8SyAAIKY40Y/d2231703aa0ae3d6de4aae9516e9ec9a/1_M99o63WSIzIzh86uZdTveA.png)

For example, if you go to a [repository’s page on Sourcegraph](https://sourcegraph.com/github.com/gorilla/mux), our web frontend will make a bunch of calls to our API to gather the data it needs. The API will in turn call into the data store, which queries the database. The API turns the results into JSON and sends them back to the web frontend, which renders an HTML template using the data.

This structure is pretty common for large web apps, and there are some nice ways Go makes it super simple to implement.

### Implementing our web app: avoiding complexity and repetition

We made several deliberate choices that have helped simplify the development of our web app:

*   No web framework
*   Unified interfaces for API client and data store
*   Unified URL routing and generation
*   Shared parameter structs

Our goal, based on our experience with similar systems, was to avoid complexity and repetition. Large web apps can easily become complex because they almost always need to twist the abstractions of whatever framework you’re using. And “service-oriented” architectures can require lots of repetitive code because not only do you have a client and server implementation for each service, but you often find yourself representing the same concepts at multiple levels of abstraction.

Fortunately, Go and a few libraries make it relatively simple to avoid these issues. Let’s run through each point and see how we achieve it and how it helps us.

(Side note: When we were thinking about how to build our web app, we looked around for examples of large Go web apps and couldn’t find many good examples. One notable good example was [godoc.org’s source code](https://github.com/golang/gddo), which we learned a lot from.)

### No web framework

We don’t use a web framework because we found we didn't need one in Go. Go’s [net/http](https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/net/http/-/DefaultClient) and a few wrapper/helper functions suffice for us. Here are the techniques and glue code we use to make it all work in the absence of a framework.

**Handler functions:** We define our handlers with an error return value, and we use a simple wrapper function to make them implement [http.Handler](https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/net/http/-/Handler). This means we can centralize error handling instead of having to format error messages and pass them to the [http.Error](https://sourcegraph.com/github.com/golang/go/-/def/GoPackage/net/http/-/Error) func for each possible error. Our handler functions look like:

```go
func serveXYZ(w http.ResponseWriter, r *http.Request) error { ... }
```

**Global variables:** For virtually all request “context”, such as DB connections, config, etc., we use global variables. We chose this simple solution instead of relying on a framework to inject context for the request.

**Router:** We use [gorilla/mux](https://sourcegraph.com/github.com/gorilla/mux) for routing.

**Rendering HTML:** We use html/template and a simpler helper function to render the template:

```go
func executeTemplate(req *http.Request, resp http.ResponseWriter, tmplName string, status int, header http.Header, tmplData interface{}) error { ... }
```

**Returning JSON:** We just use a simpler helper function:

```go
// writeJSON writes a JSON Content-Type header and a JSON-encoded object to the
// http.ResponseWriter.
func writeJSON(w http.ResponseWriter, v interface{}) error {
	data, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return &httpError{http.StatusInternalServerError, err}
	}
    w.Header().Set("content-type", "application/json; charset=utf-8")
        _, err = w.Write(data)
        return err
}
```

### Unified API client and data store interfaces

We have one “service” interface for each noun in our system: repositories, users, code definitions, etc. Our HTTP API client and data store both implement the same interfaces. That is:

*   API client methods fetch from HTTP API
*   Data store methods fetch from the DB

Here’s a simplified version of our repositories interface.

```go
type RepositoriesService interface {
    Get(name string) (*Repo, error)
    List() ([]*Repo, error)
    Search(opt *SearchOptions) ([]*Repo, error)
    // ...
}
```

When we began, the client and data store implementations were a bit different, but they basically accomplished the same thing. They accepted different (but similar) parameters and returned different types that represented the same nouns. These differences were initially motivated by the need for greater performance (in the data store) and user-friendliness (in the API client). For example, the API client methods returned structs with some additional fields populated (which required a few additional queries), for greater convenience.

Unifying the sets of interfaces took away a tiny bit of performance and user-friendliness but made our API way cleaner and simpler overall. We now have a single set of interfaces that runs through our entire system, with a single set of method behaviors, parameters, return values, error behaviors, etc., no matter whether you’re using our API client or data store.

#### An example data store method

Here’s a (simplified) example of one of those data store methods, to make it concrete. This method implements the RepositoriesService.Get method described above.

```go
type repoStore struct{ db *db }

func (s *repoStore) Get(name string) (*Repo, error) {
    var repo *Repo
    return repo, s.db.Select(&repo, "SELECT * FROM repo WHERE name=$1", name)
}
```

#### An example API client method

And here’s a (simplified) example of a method implementation in our HTTP API client library. Again, this is the same RepositoriesService.Get method.

```go
type repoClient struct{ baseURL string }

func (s *repoClient) Get(name string) (*Repo, error) {
    resp, err := http.Get(fmt.Sprintf("%s/api/repos/%s", s.baseURL, name))
    if err != nil {
  return nil, err
    }
    defer resp.Body.Close()

var repo Repo
    return &repo, json.NewDecoder(resp.Body).Decode(&repo)
}
```

(Notice that we’ve hardcoded the URL here. We’ll revisit that soon and find a better solution.)

#### Frontend and API http.Handlers

Initially our frontend web app just called the data store functions directly. This meant that each handler mixed HTTP and database code in ad-hoc ways. It was messy. This messiness made it hard to correctly implement HTTP caching and authorization because our handlers were already very complex.

Now our handlers have very clearly delineated responsibilities. The frontend handlers do HTML templating and call an API client method. The API handlers do HTTP authentication/authorization/caching and then call a data store method. In all cases, our HTTP handlers are concerned with HTTP (which is exactly as it should be) and they delegate the rest of the work.

For example, here’s what a (simplified) frontend handler looks like. It reads the HTTP request parameters, calls the API client (to do the real work), and renders the HTTP (HTML) response.
```go
var repoAPIClient RepositoriesService = &repoClient{"http://localhost:7777"}

func handleRepoPage(w http.ResponseWriter, r *http.Request) {
    name := mux.Vars(r)["Name"]
    repo, _ := repoAPIClient.Get(name)
    fmt.Fprintf(w, "<h1>%s</h1><p>Clone URL: %s</p>", repo.Name, repo.CloneURL)
}
```
And here’s what a (simplified) API handler looks like. Again, it reads the HTTP request parameters, calls the data store (to do the real work), and renders the HTTP (JSON) response with a cache header.

```go
var repoStore RepositoriesService = &repoStore{dbh}

func serveRepository(w http.ResponseWriter, r *http.Request) error {
    repo := mux.Vars(r)["Repo"]
    rp, err := repoStore.Get(repo)
    if err != nil {
  return repositoryError(err)
    }
    writeLastModifiedHeader(rp.UpdatedAt)
    return writeJSON(w, rp)
}
```

The key point here is that our HTTP handlers are concerned with handling HTTP, and they call out to implementations of our API to do the real work. This greatly simplifies our HTTP handling code.

#### Other benefits of a separate, dogfooded API

*   Dogfooding our API means it will probably be higher quality since we’re forced to use it 24/7.
*   We can use standard HTTP load balancing, caching, and authorization schemes in our API when communicating between layers. We don’t need to invent our own RPC protocol and schema.

### Unifying URL routing and generation

Remember back to our API client implementation? We used Sprintf to construct the URL string. And here in the router definition (below), we repeat the same URL pattern. This is bad because we have more than 75 routes, some with fairly complex matching logic, and it’s easy to get them out of sync.

To solve this, we use a router package (such as [gorilla/mux](https://sourcegraph.com/github.com/gorilla/mux)) that lets us define routes and mount handlers separately. Our server mounts handlers by looking up named routes we’ve defined, but our API client will just use the route definitions to generate URLs.

```go
const (
    RepoGetRoute    = "repo"
    RepoListRoute   = "repo.list"
)

func NewAPIRouter() *mux.Router {
    // Define the routes but don't attach handlers.
    m := mux.NewRouter()
    m.Path("/api/repos/{Name:.*}").Name(RepoGetRoute)
    m.Path("/api/repos").Name(RepoListRoute)
    return m
}

// init is called at server startup.
func init() {
    m := NewAPIRouter()
    // Attach handlers to the routes.
    m.Get(RepoGetRoute).HandlerFunc(handleRepoGet)
    m.Get(RepoListRoute).HandlerFunc(handleRepoList)
    m.Get(RepoSearchRoute).HandlerFunc(handleRepoSearch)
    http.Handle("/api/", m)
}
```

Then to generate URLs in our HTTP API client using the router, we use the existing route definition:

```go
var apiRouter = NewAPIRouter()

func (s *repoClient) List() ([]*Repo, error) {
    url, _ := apiRouter.Get(RepoListRoute).URL()
    resp, err := http.Get(s.baseURL + url.String())
    if err != nil {
  return nil, err
    }
    defer resp.Body.Close()

var repos []*Repo
    return repos, json.NewDecoder(resp.Body).Decode(&repos)
}
```

Notice that we’re no longer hardcoding URLs, so if we update the route definitions, our generated URLs will automatically be updated as well.

We’ve actually made our route definitions open source, as part of our open source client library. Our API server imports the client library, which is where the route definitions live, and just mounts handlers as we saw on the previous slide. So, it’s much easier for us to keep our API client library in sync with our servers. (In fact, we think all web services should open source their routing! It would make building API clients much easier.)

### Sharing parameter structs

Most of the methods in our API take some main arguments and some extra parameters. In URLs, the parameters are encoded in the querystring; in Go function calls, they’re just a final struct pointer argument.

Initially we had 3 different parameter sets for each logical interface method:

1.  the frontend querystring parameters: /repos?Owner=alice&Language=go
2.  the API querystring parameters: /api/repos?OwnerUserID=123&Lang=go
3.  the data store method parameters: SearchOptions{123, "go"}

This was needlessly complex and required a lot of code to convert among the various forms. Thankfully, because the structs were very similar, it was easy to agree on a single struct that all implementations could use. Doing this simplified our code quite a bit.

To do this, we defined the querystring as a Go struct, like SearchOptions here. In each HTTP handler, we use [gorilla/schema](https://sourcegraph.com/github.com/gorilla/schema) to decode the querystring into the Go struct. And in the API client, we use Will Norris’ [go-querystring](https://sourcegraph.com/github.com/google/go-querystring) to convert a Go struct back into a querystring. These two libraries perform essentially the inverse operations. And in our data store, of course, we still get the parameters as a Go struct.

Having a single definition of each parameter set is much simpler _and_ it lets us rely on the Go compiler’s type checker to warn us if we make mistakes (unlike the non-type-checked querystring map[string]strings we used to use).

Here’s an example parameter struct that is shared by all implementations (frontend and backend):

```go
// this is the options struct for the method: Search(opt *SearchOptions) ([]*Repo, error)
type SearchOptions struct {
    Owner    string
    Language string
}
```

To decode the parameter struct from a querystring like ?Owner=alice&Language=go, in the API HTTP handler:

```go
import ["github.com/gorilla/schema"](https://sourcegraph.com/github.com/gorilla/schema)

var d = schema.NewDecoder()

func handleRepoSearch(w http.ResponseWriter, r *http.Request) {
    var opt SearchOptions
    d.[Decode](https://sourcegraph.com/github.com/gorilla/schema/.GoPackage/github.com/gorilla/schema/.def/Decoder/Decode)(&opt, r.URL.Query()) // decode querystring with github.com/gorilla/schema
    // now opt is populated with values from the querystring
```

And to encode a parameter struct like SearchOptions{"alice", "go"} back into ?Owner=alice&Language=go, in the HTTP API client:

```go
import ["github.com/google/go-querystring/query"](https://sourcegraph.com/github.com/google/go-querystring)

func (s *repoClient) Search(opt *SearchOptions) ([]*Repo, error) {
    url, _ := apiRouter.Get(RepoSearchRoute).URL()
    q, _ := query.[Values](https://sourcegraph.com/github.com/google/go-querystring/.GoPackage/github.com/google/go-querystring/query/.def/Values)(opt)
    resp, err := http.Get(s.baseURL + url.String() + "?" + q.Encode())
    // ...
}
```

### Other things we did

We do a few other things to make it easier to build our web app:

*   Instrument http.Handlers and API client http.Transports to track timing info using [Appdash](https://github.com/sourcegraph/appdash)
*   Pass along typed error values from the data store to the frontend
*   Define a common interface for response pagination
*   Consolidate caching logic in the API
*   Make test mocks of the interfaces

### Conclusion

We’ve used Go to build a large-scale code search engine that compiles and indexes hundreds of thousands of repositories. We hope that we’ve conveyed some of the ways we use Go’s features and that these patterns will be useful you when building large Go apps.

#### Questions/comments?

Follow [me (@sqs)](https://twitter.com/sqs) and [@sourcegraph](https://twitter.com/sourcegraph) on Twitter. And **check out** [**Sourcegraph**](https://sourcegraph.com)!
