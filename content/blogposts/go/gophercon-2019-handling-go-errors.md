---
title: "GopherCon 2019 - Handling Go errors"
description: "Let's talk about programmable errors and how you can design your own architecture that allows you to legibly master your system failures."
authors:
  - name: Marvin Guerra for the GopherCon 2019 Liveblog
publishDate: 2019-07-25T00:00-11:55
tags: [
  gophercon
]
slug: gophercon-2019-handling-go-errors
heroImage: https://about.sourcegraph.com/gophercon2019.png
published: true
---

Presenter: Marwan Sulaiman

Liveblogger: [Marvin Guerra](https://twitter.com/senorllama)

## Overview

Let's talk about programmable errors and how you can design your own architecture that allows you to legibly master your system failures.

---

## Summary

1. Errors are `i/o`:
   - Sometimes you need to read an error
   - Sometimes you need to write an error
   - How can this be improved?
2. Don't just check errors => Handle them gracefully
3. Stack traces are for disasters: Decorate errors for better tracing

How to improve error tracing?

- Categorize errors by severity
- Categorize errors by type
- Add application specific data
- You can query all of the above

## Learning concepts vs. Learning syntax

Assuming `Go` isn't your first programming language, there are two ways to approach diving into a new language, Marwan explains. When learning syntax, one can ask:

> How do I parse a JSON string in Go?

If on other hand, we are learning the concept, the question is:

> What is data serialization?

Another example:

> Syntax: How do I import a library in Go?

> Concept: What are dependencies?

And with regards to errors:

> Syntax: How do I catch an error in Go?

> Concept: What is error handling?

![Learn Like a Beginner](/gophercon-2019/handling-go-errors-learn-like-beginner.png)

Let's focus on concepts and use the flexibility of Go to create better tooling for error handling and tracing.

## Concept of Errors

Errors are values:

- PRO: You get to define the importance of errors
- CON: You get to define the importance of errors

We can furthermore think of errors as just `i/o`:

- Sometimes you need to read an error
- Sometimes you need to write an error

But when reading or writing an error, context matters in understanding what caused the error as well as how to address it. e.g.:

- Is your program a CLI tool?
- Is your program a library?
- Is your program a long running system?
- Who is consuming your program? And How?

#### Example: Make a sandwich

![make a sandwich](/gophercon-2019/handling-go-errors-make-sandwich.png)

Let's pretend we are designing a service that fetches ingredients from different sources and then returns a slice of ingredients. Our code may look like:

```go
package main

import (
    "markets/wholefoods"
    "markets/traderjoes"
    "markets/shoppers"
)

func getIngredients() ([]Ingredient, error) {
    avocados, err := wholefoods.BuyAvocados()

    boiledEggs, err := traderjoes.BuyEggs()

    bread, err := shoppers.BuyBread()

    return []Ingredient{avocados, boiledEggs, bread}, nil
}

```

Now the above code assumes there are no errors. So how do we handle errors? Well we can rewrite `getIngredients` to actually return an error when they are returned from an upstream module:

```go
func getIngredients() ([]Ingredient, error) {
    avocados, err := wholefoods.BuyAvocados()
    if err != nil {
        return nil, err
    }

    boiledEggs, err := traderjoes.BuyEggs()
    if err != nil {
        return nil, err
    }

    bread, err := shoppers.BuyBread()
    if err != nil {
        return nil, err
    }

    return []Ingredient{avocados, boiledEggs, bread}, nil
}
```

So what would we see now if we ran the above?

```go
func main() {
    ingredients, err := getIngredients()
    if err != nil {
        panic(err)
    }

    makeSandwich(ingredients)
}
```

![stacktrace](/gophercon-2019/handling-go-errors-stacktrace-incomplete.png)

As we can see the default behavior leaves out a lot of information about the context of the error. "Don't just check errors, handle them gracefully" - Marwan

Let's now discuss how we can decorate errors in go:

- Can use `fmt` to create a new error with more context:

```go
return fmt.Errorf("unique error message: %w", err)
```

- Alternatively can `import "github.com/pkg/errors"` and use this module's wrapping ability:

```go
return errors.Wrap(err, "unique error message")
```

Let's look at the `getIngredients` function now:

```go
import "github.com/pkg/errors"

func getIngredients() ([]Ingredient, error) {
    avocados, err := wholefoods.BuyAvocados()
    if err != nil {
        return nil, errors.Wrap(err, "could not buy avocados")
    }

    boiledEggs, err := traderjoes.BuyEggs()
    if err != nil {
        return nil, errors.Wrap(err, "could not buy eggs")
    }

    bread, err := shoppers.BuyBread()
    if err != nil {
        return nil, errors.Wrap(err, "could not buy bread")
    }

    return []Ingredient{avocados, boiledEggs, bread}, nil
}
```

Now we have additional context in our error log and no longer need stacktrace:

![bye stacktrace](/gophercon-2019/handling-go-errors-stacktrace-bye.png)

#### Stacktraces are for disasters

- They're hard to read
- They're hard to parse
- At best, they say where an error went wrong, and not why

#### What if we want to act on an error?

Since errors are values we can create specific ones and compare to take specific actions:

```go
import "github.com/pkg/errors"

func getIngredients() ([]Ingredient, error) {
    avocados, err := wholefoods.BuyAvocados()
    if err != nil {
        return nil, errors.Wrap(err, "could not buy avocados")
    }

    boiledEggs, err := traderjoes.BuyEggs()
    if err == tradejoes.ErrNotAvailable {
        boiledEggs, err = wholefoods.BuyEggs()
    }

    if err != nil {
        return nil, errors.Wrap(err, "could not buy eggs")
    }

    bread, err := shoppers.BuyBread()
    if err != nil {
        return nil, errors.Wrap(err, "could not buy bread")
    }

    return []Ingredient{avocados, boiledEggs, bread}, nil
}
```

Now we can handle errors gracefully, trace the error back to the code and act upon an error. What more can we do?

- Categorize errors by severity.
- Categorize errors by type.
- Add application specific data.
- Query all of the above.

Let's take a look at how this relates to The New York Times. Like many companies, The New York Times has several services that talk to each other:

![nyt architecture](/gophercon-2019/handling-go-errors-nyt-architecture.png)

Not much different from making sandwiches:

- One service that talks to a bunch of other services
- Instead of panicking, we log and monitor

```go
func getUser(userID string) (Subscription, time.Time, error) {
    err := loginService.Validate(userID)
    if err != nil {
        return err
    }

    subscription, err := subscriptionService.Get(userID)
    if err != nil {
        return err
    }

    deliveryTime, err := deliveryService.GetTodaysDeliveryTime(userID)
    if err != nil {
        return err
    }

    return subscription, deliveryTime, nil
}
```

and in an http handler:

```go
func getUserHandler(w http.ResponseWriter, r *http.Request) {
	// set up handler
	sub, deliveryTime, err := getUser(user)
	if err != nil {
		logger.Error(err)
                fmt.Fprint(w, "something went wrong")
		return
	}
	// return info to client
}
```

Now our errors are logged and we have some context:

![nyt logs](/gophercon-2019/handling-go-errors-logs.png)

However, we are still missing severity as well as types of errors so how can this be improved?

- Can filter unexpected errors
- Group by error types
- Be able to answer specific questions
- Inspiration:
  - [Error Handling In Upsin - Andrew Gerrand/Rob Pike](https://commandcenter.blogspot.com/2017/12/error-handling-in-upspin.html)
  - [Failure Is Your Domain - Ben Johnson](https://middlemost.com/failure-is-your-domain/)

Let's create our own error struct:

```go
package errors

type Error struct {
    Op Op // operation
    Kind Kind // category of errors
    Err error // the wrapped error
    //... application specific fields
}
```

How do we use?

```go
if err != nil {
    return &errors.Error{
        Op: "getUser",
        Err: err,
    }
}
```

Alternatively, can use a helper function:

```go
package errors

func E(args ...interface{}) error {
	e := &Error{}
	for _, arg := range args {
		switch arg := arg.(type) {
		case Op:
			e.Op = arg
		case error:
			e.Err = arg
		case Kind:
			e.Kind = arg
		default:
			panic("bad call to E")
		}
	}

	return e
}
```

```go
if err != nil {
    return errors.E(op, err, errors.KindUnexpected)
}
```

#### What is an Operation?

```go
type Op string
```

- A unique string describing a method or a function
- Multiple operations can construct a friendly stack trace.

```go
// app/account/account.go
package account

func getUser(userID string) (*User, err) {
    const op errors.Op = "account.getUser"
    err := loginService.Validate(userID)
    if err != nil {
        return nil, errors.E(op, err)
    }
    ...
}


// app/login/login.go
package login

func Validate(userID string) err {
    const op errors.Op = "login.Validate"
    err := db.LookUpUser(userID)
    if err != nil {
        return nil, errors.E(op, err)
    }
}
```

```go
// app/errors/errors.go
package errors

// Ops returns the "stack" of operations
// for each generated error.
func Ops(e *Error) []Op {
	res := []Op{e.Op}

	subErr, ok := e.Err.(*Error)
	if !ok {
		return res
	}

	res = append(res, Ops(subErr)...)

	return res
}

```

What does our stacktrace look like now?

```go
// errors.Ops stack trace
["account.GetUser", "login.Validate", "db.LookUp"]
```

vs.

```bash
// classic stacktrace
goroutine 19 [running]:
net/http.(*conn).serve.func1(0xc0000928c0)
	/usr/local/go/src/net/http/server.go:1746 +0xd0
panic(0x12459c0, 0x12eb450)
	/usr/local/go/src/runtime/panic.go:513 +0x1b9
db.LookUp(...)
	/Users/208581/go/src/app/db/lookup.go:25
login.Validate(...)
	/Users/208581/go/src/app/login/login.go:21
account.getUser(...)
	/Users/208581/go/src/app/account/account.go:17
main.getUserHandler(0x12ef4e0, 0xc000118000, 0xc000112000)
	/Users/208581/go/src/app/account/account.go:17
net/http.HandlerFunc.ServeHTTP(0x12bc838, 0x12ef4e0, 0xc000118000, 0xc000112000)
	/usr/local/go/src/net/http/server.go:1964 +0x44
net/http.(*ServeMux).ServeHTTP(0x149f720, 0x12ef4e0, 0xc000118000, 0xc000112000)
	/usr/local/go/src/net/http/server.go:2361 +0x127
net/http.serverHandler.ServeHTTP(0xc000098d00, 0x12ef4e0, 0xc000118000, 0xc000112000)
	/usr/local/go/src/net/http/server.go:2741 +0xab
net/http.(*conn).serve(0xc0000928c0, 0x12ef6e0, 0xc00009e240)
	/usr/local/go/src/net/http/server.go:1847 +0x646
created by net/http.(*Server).Serve
	/usr/local/go/src/net/http/server.go:2851 +0x2f5
```

#### Benefits of errors.Op

- A custom stack of your code only
- Easier to read
- Parsable and queryable.
- Not only can you know where something went wrong, but the impact it had on your entire application.

#### Query your stack trace

```SQL
SELECT * FROM logs WHERE operations.include("login.Validate")

["account.getUser"],

["account.resetPassword"],

["homeDelivery.changeAddress"]
```

#### Kind

- Groups all errors into smaller categories
- Can be predefined codes (http/gRPC)
- Or it can be your own defined codes

```go
const (
    KindNotFound = http.StatusNotFound
    KindUnauthorized = http.StatusUnauthorized
    KindUnexpected = http.StatusUnexpected
)
```

#### Extracting a Kind from an error

```go
func Kind(err error) codes.Code {
	e, ok := err.(*Error)
	if !ok {
		return KindUnexpected
	}

	if e.Kind != 0 {
		return e.Kind
	}

	return Kind(e.Err)
}
```

Let's add severity to our errors:

```go
type Error struct {
    ...
    Severity logrus.Level
}
```

```go
func getUser(userID string) (*User, err) {
    const op errors.Op = "account.getUser"
    err := loginService.Validate(userID)
    if err != nil {
        return nil, errors.E(op, err, logrus.InfoLevel)
    }
    ...
}

func getUserHandler(w http.ResponseWriter, r *http.Request) {
	// set up handler
	sub, deliveryTime, err := getUser(user)
	if err != nil {
		logger.SystemErr(err)
                http.Error(w, "something went wrong", errors.Kind(err))
		return
	}
	// return info to client
}

func SystemErr(err error) {
	sysErr, ok := err.(*errors.Error)
	if !ok {
		logger.Error(err)
		return
	}

	entry := logger.WithFields(
		"operations", errors.Ops(sysErr),
		"kind", errors.Kind(err),
		// application specific data
	)

	switch errors.Level(err) {
	case Warning:
		entry.Warnf("%s: %v", sysErr.Op, err)
	case Info:
		entry.Infof("%s: %v", sysErr.Op, err)
	case Debug:
		entry.Debugf("%s: %v", sysErr.Op, err)
	default:
		entry.Errorf("%s: %v", sysErr.Op, err)
	}
}
```

#### What can we do with this?

- Show me all paper delivery errors in zip code 22434
- Show me all food delivery errors by seafood restaurants
- Show me all errors that happened while trying to stream the latest Beyonce album

## Takeaways:

- The error interface is intentionally simple.
- Design an errors package that makes sense to your application, and no one else

## Conclusion

> A big part of all programming, for real, is how you handle errors - Rob Pike
