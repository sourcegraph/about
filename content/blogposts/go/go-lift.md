---
title: 'Go  Lift'
authors:
  - name: John Cinnamond (speaker)
publishDate: 2017-11-06T11:30+01:00
tags: [
  "dotGo"
]
slug: go-lift
heroImage: https://images.ctfassets.net/le3mxztn6yoo/1BO7zPl9haGeiWKoeMsuMq/5b02056f1204f5f115e43f5636bbd77c/Screen_Shot_2017-11-06_at_15.26.47.png
published: true
---

This talk is about how Category Theory can help you write better code, but without using the words "Category" or "Theory" (or monad or functor or any of the scary terminology). We'll look at how the idea behind "Errors are Values" from the Go blog can be applied to different kinds of programming problems, and how we can make our code easier to compose by moving units of control flow into types. (That sounds a bit fancy, but it's much more straightforward than it sounds.)

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

## Part 1: Constant Interruptions

* Connect to the server
* Send first command
* Wait for ok
* Send second command


`conn := net.Dial("tcp", "server:9876")`

What if this goes wrong?

`conn, err := net.Dial("tcp", "server"9876")`

... John goes through several more examples of function calls where you could easily forget to handle an error, and would have to interrupt your development to handle the error. Instead of understanding what the code does, he sees this instead:

![Cinnamond-5](//images.contentful.com/le3mxztn6yoo/6c8Ni49C1yuEqgm84E4KCg/2e63b7e9c307ada2fc3f4601cfd70665/Screen_Shot_2017-11-06_at_11.09.27.png)

## Error handling is a good thing, but it shouldn't get in the way.

## Part 2: `if err != nil`

[Errors are values](http://blog.golang.org/errors-are-values)

`conn.Write(command1)`

* Not really the network
* An abstraction
* A value
* ...containing data about the connection
* ...and behavior to use it
* Determined by the _type_

Let's add to the behavior of `net.Conn` to handle errors => create a new type

```go
type SafeConn struct {
  conn net.Conn
  err error
}

f(c *SafeConn) write(b []byte) {
  c.conn.Write(b)
}
```

Add error handling:
```go
func (c* SafeConn) write(b []byte) {
  if c.err != nil {
    return
  }
  _, c.err := c.conn.Write(b)
}

c:= SafeConn{conn, nil}
c.write(command1) // if this has an error
c.write(command2) // then this does nothing

if c.err != nil {
  panic("omg")
}
```

Repeat for other errors

```go
conn, err := net.Dial("tcp", "server:9876")
if err != nil {
  panic(err)
}

func safeDial(network, address string) SafeConn {
  conn, err := net.Dial(network.address)
  return SafeConn{conn ,err}
}


c:= safeDial("tcp", "server:9876") // if this fails
c.write(command1) // then this does nothing
c.write(command2) // same for this
if err != nil {
  panic("gonna")
}
```

We still handle the error, but the error handling doesn't get in the way.

But, we introduced a new abstraction. Abstractions have costs.  Some details are hidden, but this is nothing new as we use abstractions all the time. Is this abstraction appropriate?

## Part 3: Division

Given 3 numbers (a,b,c) => a/b/c

```go
func divide(a, b, c int) {
  answer := a / b / c
  fmt.Println(answer)
}

divide(100, 10, 2) // 5
divide(100, 10, 0) // panic: runtime error: integer divide by zero
```

Let's solve this badly.

```go
func divide(a, b, c int) {
  if b == 0 || c == 0 {
    fmt.Printf("Can't divide by zero")
    return
  }
  answer = a / b / c
  fmt.Println(answer)
}
```

`if b == 0` and `if c == 0` resembles `err != nil`.

To solve this in a better way:
* Create a new type
* Wrap the initial value
* Wrap the behaviour
* Wrap the conditionals

Create a new type:

```go
type Divideinator struct {
  answer int
}
```

Wrap the initial value:

```go
d := Divideinator{a}
```

Wrap the behaviour:

```go
func (d *Divideinator) divide(X int) {
  d.answer = d.answer/x
}
```

Wrap the conditional:

```go
func (d *Divideinator) divide(x int) {
  if x == 0 {
    d.isZero = true
    return
  }
  d.answer = d.answer / x


func (d Divideinator) String() string {
  if d.isZero {
    return fmt.Sprintf("Can't divide by zero")
  }

  return fmt.Sprintf("%d", d.answer)
```

Put it all together
```go
func divide(a, b, c int) {
  d := Divideinator{a}
  d.divide(b)
  d.divide(c)
  fmt.Println(d)
}

divide(100, 10, 2)
// 5
divide(100, 0, 2)
// Can't divide by zero
divide(100, 10, 0)
// Can't divide by zero
```
This is the same approach as error handling:
* Create a new type
* Wrap the initial value
* Wrap the behavior
* Wrap the conditional

To understand this let's look at the shape of the code.

![Cinnamond-1](//images.contentful.com/le3mxztn6yoo/1A5LJ10wBeGGG8SUkoyK0E/89724b388f35c00fee0ac37c94ed7095/Screen_Shot_2017-11-05_at_7.54.42_PM.png)


Lift the initial value into a new type

![Cinnamond-2](//images.contentful.com/le3mxztn6yoo/4Ai7YjgJg48ycOQQUOEOMA/086d382ea7e9c6e11ca6e9fda77af6c7/Screen_Shot_2017-11-05_at_7.54.50_PM.png)

Lift the behavior

![Cinnamond-3](//images.contentful.com/le3mxztn6yoo/vUspCqo3FAiYo8Ms4qOwu/d18409b0052f4a53ac8f097f55f7a929/Screen_Shot_2017-11-05_at_7.55.19_PM.png)


Lift the conditionals.

The key insight is that we can write our code as a simple composition of steps.


## Part 4: Building a webapp

John has been working on a new project http://doesgohavegenericsyet.com

```go
func signupHandler(w http.ResponseWriter, r *http.Request) {
  email := r.FormValue("email")

  if !validateEmail(email) {
    logRequest("invalid email", r)
    htpp.Error(w, ...)
    return
  }

  if alreadyRegistered(email) {
    sellEmailToRecruiters(email)
    logRequest("already registered", r)
    http.Error(w, ...)
    return
  }

  if err := register(email); err != nil {
    sellEmailToRecruiters(email)
    logRequest("registration failed", r)
    http.Error(w, ...)
    return
  }
}
```

We know how to do this

![Cinnamond-4](//images.contentful.com/le3mxztn6yoo/3IRlteNaOccymkEYWIsEm4/f3f8d017d596b38d9255006dc7f3b3ce/Screen_Shot_2017-11-05_at_8.02.22_PM.png)

* Create a new type
* Lift initial data
* Lift behavior
* Lift control flow

Create a new type
```go
type SignupRequest struct {
}
```

Lift initial data
```go
type SignupRequest struct {
  w http.ResponseWriter
  r *http.Request
}
```

Lift behaviour
```go
func (s *SignupRequest) validate() {
  if s.email == "" || ... {
    s.err = "invalid email"
  }
}

func (s *SignupRequest) checkNewRegistration() {
  if existingEmails.Contain(s.email) {
    s.err = "already registereD"
  }
}
```

Lift control flow
```go
func (s *SignupRequest) checkNewRegistration() {
  if existingEmails.Contains(s.email) {
    s.err = "already registered"
  }
}

func (s *SignupRequest) checkNewRegistration() {
  if s.err != nil {
    return
  }

  if existingEmails.Contain(s.email) {
    s.err = "already registered"
  }
}
```

Compose the functions
```go
func signupHandler(w http.ResponseWriter, r *http.Request) {
  s := newSignupRequest(w, r)
  s.validate()
  s.checkNewRegistration()
  s.register()
  s.sellEmailToRecruiter()
  s.log()
  s.respond()
}
```

Maybe don't rewrite your request handlers like this. John is not trying to tell you how to write code. He is trying to give you something new to think about. Think about the shape of the code. Think about using types. John wants to give you new tools to cope with complex code. It's up to _you_ to decide how to use them.

## Epilogue

On further thought this talk isn't about introducing a new tool to use, it is more about having a deeper understanding of the theory behind the talked about tool.

We solve problems by breaking them into smaller pieces, but the we need to join the pieces back together again. We need to understand the forces at play. Mathematics gives us this understanding. Mathematics lets us achieve more. Mathematics is pretty useful.
