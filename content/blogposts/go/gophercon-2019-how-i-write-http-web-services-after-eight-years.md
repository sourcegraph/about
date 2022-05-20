---
title: "GopherCon 2019 - How I write HTTP web services after eight years"
description: "A look at how Mat Ryer builds web services after doing so for the past eight years. Extremely practical, tried and tested patterns that everybody can start using today."
authors:
  - name: Kenigbolo Meya Stephen for the GopherCon 2019 Liveblog
publishDate: 2019-07-26T00:00-14:55
tags: [
gophercon
]
slug: gophercon-2019-how-i-write-http-web-services-after-eight-years
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Mat Ryer

Liveblogger: [Kenigbolo Meya Stephen](https://twitter.com/expensivestevie)

## Overview

A look at how Mat Ryer builds web services after doing so for the past eight years. Extremely practical, tried and tested patterns that everybody can start using today.

---

## About Mat Ryer

Mat is an early go adopter. He started using go even before it hit it's first major version (v1). He currently works at Machine Box and Veritone. He is also and ardent believer in open source and can be found around the BitBar, Testify, Gopherize.me open source projects. He has been building https services in Go for a long time and has learnt a lot of things as well as changes a lot of things along the way. You can find him on twitter at @matryer

## Factors to consider when writing HTTP services

Mat highlights some very important factors to consider when writing http services. He reiterates that these factors are important and would help you in writing your https services to be clear and concise. The factors are as follows

* Maintainability

It is important to take into consideration the maintainability of any service you intend to write. The cost of maintaining can be bigger than the initial cost of creating the tool when not considered at the creation stage.

* Glaceability

How quickly can you understand the code when you read through it? How quickly can navigation around the codebase be done? This can also be seen as writing code in such a way that nothing whatsoever is complicated to find. This includes both naming of functions, namespaces, variable names, code structure, project structure, etc.

* Code should be boring

Code should be boring here refers to boring in the sense that everything about the codebase is obvious. It’s not about writing fancy but about writing for others to understand. It is important that we understand the code might be used by people with little or no experience.

* Self Similar code 

Writing code that is similar to other code in the codebase helps to increase familiarity for anyone who has to work on the code.

## Design Patterns/Decisions

After taking into consideration the different factors listed above, the next step is to make design decisions/patterns based on those considerations. While different use cases exists and it is important people use what works best for them, Mat believes in majority of the cases, the design patterns to be listed below, will actually be super useful for writing https services

###  Creating a tiny main abstraction

```go
func main () {
  if err := run(); err != nil {
      fmt.Fprintf(os.Stderr, “%s\n”, err)
      os.Exit(1)
  }
}

func run() error {
  db, dbtidy, err := setupDatabase()
  if err != nil {
      return errors.Wrap(err, “setup database”)
  }
  defer dbtidy()
  srv := &server{
      db: db,
  }
  //... more stuff

```

Mat believes such tiny abstractions like the one above allows him to return an error rather than having error handling specific code. This allows the run function to actually be responsible for running the https service i.e. just set the service up and call ListenAndServe

### Creating a server struct

```go
type server struct {
  db     *someDatabase
  router *someRouter
  email  EmailSender
}
```

Instead of having the code above in the package space you put this in the server (the code struct). Avoiding global state is good and having server struct helps in avoiding that. This makes what the server needs to be obvious.

### Creating a constructor for the server

```go
func newServer() *server {
s := &server{}
s.routes()
return s
}
```

It is important not to set up dependencies in the server constructor. If you need to set up dependencies then use the server struct for that.

### Make server an http.Handle

```go
func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
s.router.ServeHTTP(w, r)
}
```

The goal here is to pass execution to the router. Ideally you should never put logic here. If you have a desire to put any kind of logic in here then consider moving it into a middleware file.

### Default Routes file 

```go
package main

func (s *server) routes() {
  s.router.Get("/api/", s.handleAPI())
  s.router.Get("/about", s.handleAbout())
  s.router.Get(“/", s.handleIndex())
}
```

A single route file that maps out your different routing services is always useful. This is good because it is really glanceable. It gives you the advantage of seeing all the routes for your http service in one place.

### Handlers hang off the server

```go
func (s *server) handleSomething() http.HandlerFunc { 
  // put some programming here
}
```

Every https request that comes into your server has a go routine so be careful when using this. Since handlers are methods on the server, they invariably have acess to `s` hence it is imperative to be aware of cases such as data races, considering that the other handlers also have access to `s`.

### Naming Handler Methods

```go
handleTasksCreate
handleTasksDone
handleTasksGet

handleAuthLogin
handleAuthLogout
```

It is adviceable to group the names based on responsibility. It makes it easier to find functions as well as improve readability. Related functionality should ideally always be grouped together.

### Return the handler

```go
func (s *server) handleSomething() http.HandlerFunc {
  thing := prepareThing()
  return func(w http.ResponseWriter, r *http.Request) {
      // use thing        
  }
}
```
The handler gives you a closure environment where you can If you have your handler specific setup. 

### Take arguments for handler-specific dependencies

```go
func (s *server) handleGreeting(format string) http.HandlerFunc {
return func(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, format, r.FormValue(“name”))
}
}
s.router.HandleFunc(“/one”, s.handleGreeting(“Hello %s”))
s.router.HandleFunc(“/two”, s.handleGreeting(“Hola %s”))
```

if you have specific dependencies you do not want to keep on the server type, you can have them as arguments on this handler method instead. What that allows you to do is to access them inside the little handler function. This makes it very easy to see what exactly the handler needs to do it's job. Also, in terms of type safety, this is also very useful as you cannot get the handler if you do not provide it's dependencies.

Y

### Handler func over handler

```go
func (s *server) handleSomething() http.HandlerFunc {
  return func(w http.ResponseWriter, r *http.Request) {

  }
}
```

The main goal of using the handler function is to help with types. If you want to create a handler, with the handler function you do not have to create a type in order to do it since this gives you the option to use an annonymous function and cast it to the HTTP handler function as shown in the code above.

PS - If you find yourself switching often between handlers and handler func then maybe you are better off just sticking to handlers.

### Middleware are just Go functions

```go
func (s *server) adminOnly(h http.HandlerFunc) http.HandlerFunc {
return func(w http.ResponseWriter, r *http.Request) {
  if !currentUser(r).IsAdmin {
    http.NotFound(w, r)
    return
  }
h(w, r)
}
}
```

Middlewares are normal go functions which takes in a handler as an argument and returns a new handler that can do different things. It can do things before calling the original handler or after calling the original handler. In some cases it would not be required to call the original handler at all. You can use the middleware in logging, tracing, authentication e.t.c

### Wire up you midddleware to routes.go

```go
package main
func (s *server) routes() {
s.router.Get("/api/", s.handleAPI())
s.router.Get("/about", s.handleAbout())
s.router.Get("/", s.handleIndex())
s.router.Get(“/admin", s.adminOnly(s.handleAdminIndex()))
}
```

This allows you to make your `routes.go` file a high level map of the http service. This is also beneficial as you have a single place which has everything you need that explain the API footprint of the http service.

## Dealing with data

As developers we are always tempted to abstract functionality and keep our code as DRY as possible. However a lot of the times we abstract too early and this is mostly due to our obsession with DRY code however this is worth resisting. Dealing with data however requires some abstractions and we'll be looking and those that have been tried and tested over eight years.

### Respond helper

```go
func (s *server) respond(w http.ResponseWriter, r *http.Request, data interface{}, status int) {
w.WriteHeader(status)
if data != nil {
  err := json.NewEncoder(w).Encode(data)
  // TODO: handle err
}
}
```

A huge advantage of this abstraction is that with regards to the http service response, whenever a change needs to occur, it occurs at only one single point i.e giving you the ability to have more flexibility with less repetition. Respond helper usually starts very small and simple

### Decoding helper

```go
func (s *server) decode(w http.ResponseWriter, r *http.Request, v interface{}) error {
return json.NewDecoder(r.Body).Decode(v)
}
```

Just like the respond helper, this enables you to abstract the decoding functionality. This gives you the flexibility to also make changes in one place that affects your entire http service.

### Future proof helpers

You can future proof any helper you write with a simple rule of always taking both the response writer and the request. Even though you do not need them at the beginning, it is usually all you really need to deal with http in go

### Request and response data types

```go
func (s *server) handleGreet() http.HandlerFunc {
type request struct {
  Name string
}
type response struct {
  Greeting string `json:"greeting"`
}
return func(w http.ResponseWriter, r *http.Request) {
  ...
}
}
```

If an endpoint has its own request and response types, usually they’re only useful for that particular handler. If that’s the case, you can define them inside the function. This declutters your package space and allows you to name these kinds of types the same, instead of having to think up handler-specific versions.

Although it is very common to put the request and response type in the package space, putting them inside a little closure environment as shown in the code snippet above helps you in decluttering.

### Lazy setup with sync.Once

```go
func (s *server) handleTemplate(files string...) http.HandlerFunc {
var (
  init    sync.Once
  tpl     *template.Template
  tplerr  error
)
return func(w http.ResponseWriter, r *http.Request) {
  init.Do(func(){
    tpl, tplerr = template.ParseFiles(files...)
  })
  if tplerr != nil {
    http.Error(w, tplerr.Error(), http.StatusInternalServerError)
    return
  }
  // use tpl
}
}
```

Sync one gives you the ability to run the code when the given handler is first called as opposed to when the program first starts up. Expensive setup slows down the service start time hence running this only when it is called the first time greatly improves that.

## Testing

Testing is a great tool for maintainability and this is something needed in http services regardless of the language they are written in. You definitely need testing.

The `httptest` package should be your best friend and your default go to package for testing http services as it is insanely useful. You can create HTTP requests with it, however, unlike the HTTP.NewRequest function that can return an error, the `httptest` doesn't, hence making writing tests easier. The ability to simulate http request coming in is super useful


## Summary

This talk by Matt Ryer is based on a blog post he authored. The blogpost which can be found [here]( https://medium.com/statuscode/37c208122831) went viral. It is quite popular in the go community and definitely worth a read. The post was shared on reddit and resulted in a lot of questions, feedback as well as suggestions. This talk is a culmination of what he has learnt since that time. It is focused on the philosophy behind his thinking for his preferred approach as opposed to a hardline on some specific ruleset. 

He emphasizes that tech leads, engineering managers, CTO's, etc. should strive to create a buffer where engineers are allowed to trynew things within a reasonable scope. This talk isn't one to be followed blindly as different teams might have different needs and usecases/edgecases.

