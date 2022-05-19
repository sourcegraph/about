---
title: 'Thunder Talks'
authors:
  - name: Speakers
publishDate: 2017-11-06T16:25+01:00
tags: [
  "dotGo"
]
slug: thunder-talks
heroImage: https://images.ctfassets.net/le3mxztn6yoo/40NFOZBGkgG6IyKoMgQIGg/c1626b318de4be28314cbdc989a01525/logo-dotgo-black-web.png
published: true
---

The thunder talks are the second round of lightning talks from many speakers.

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

## gocv.io

Ron Evans

* Creator of [gobot.io](https://gobot.io)
* New project: [gocv.io](https://gocv.io) OpenCV in Go!
* CV == Computer Vision
* Go -> CGO -> C -> C++
* Linux, Darwin and Windows.
* Live demo of face tracking.
* Live demo of rotating through several video filters with the webcam facing
  the audience.

## Using Go on Android and Python

Laurent Leveque

* From Go to Android - `gomobile bind`
  - Major downside is it only supports one type `byte[]`
* From Go to Python - `go build buildmode=c-shared`
* Will have to write C code to manage memory. This is tricky and repetitive,
  so you can just write it once and use go to generate the glue code.
  - Annotate your API methods
  - Write your own code generator: `go/parser` and `go/ast` to naviage your Go code programmatically
  - Construct your output with `text/template`
  - Use `//go:generate` to trigger your code generator
* You can easily combine this by serializing your inputs and outputs with Protobuf
  - No more limitation with Gomobile (only byte[])
  - Less C code (only one type to handle)
  - Protobuf is cross language.
  - You can also generate API stubs.
* Protobuf:
  - `protoc --go_out=plugins=myStubGenerator:$(pwd) *.proto`
  - `protoc-gen-go` is written in Go and has a plugin system.
* Conclusion:
  - Protobuf tools simplify cross-platform lib dev.
  - Go tools help to generate all the wrapping code.
  - This approach works with other languages (with C bindings)
* Example by speaker [goprotopy](https://github.com/lleveque/goprotopy)

## Go in Data Science

Diana Ortega

* Backend engineer working with data scientists
* Deep learning project - A lot of data from different sources and different types -> magic -> graphs
* Magic is dev and data scientists which massage and aggregate the data.
* Normalize data - normally use a pipeline, for example
  [pachyderm](http://www.pachyderm.io/). pachyderm is written in go but is
  language agnostic since the pipelines run on k8s and docker.
* notebook: [gophernotes](https://github.com/gopherdata/gophernotes) useful
  for testing hypothesis.
* [gonum](https://www.gonum.org/): libraries for matrices and linear algebra,
  statistics, prob distributions, etc
* For more information about go + datascience visit
  [gopherdata.io](http://gopherdata.io/).

## Go for real time streaming architectures

Mickael Remond

* What are straming archs? Use events rather than shared states.
* Streaming arch is often represented as pipelines.
* Also called reactive architectures
* Microservices are often using streaming, since it can be used as a glue between independent services.
* Central Realtime Engine, often Kafka
* Processing Frameworks: Streaming engines spark streaming, flink, kafka streams, akka streams.
* App --events-> Kafka --> Processing Framework
* Cloud-native way:
  - Use go services using sarama, Sarama cluster, and protobuf. Also can use Nats instead of Kafka (written in Go).
  - Packaging you can use Docker/k8s. Then you can scale horizontally by just adjusting the replica count of a deployment.
* Benefits
  - Simple/manageable code
  - Performance
  - Scalability
  - Workers themselves can also use Go concurrency for further performance

## Rethinking errors in Go

Marcel van Lohuizen

```go
func writeToGS(ctx context.Context, bucket, dst, src string) (err error) {
    client, err := storage.NewClient(ctx)
    if err != nil {
        return err
    }
    defer client.Close()

    w := client.Bucket(bucket).Object(dst).NewWriter(ctx)
    defer w.CloseWithError(err)

    _, err = io.Copy(w, r)
    return err
}
```

The above code handles some errors, but is not fully correct:
* It needs to handle panics
* It needs to return the error from Close

Putting it all together the code becomes very complicated:

```go
func writeToGS(ctx context.Context, bucket, dst string, r io.Reader) (err error) {
    client, err := storage.NewClient(ctx)
    if err != nil {
        return err
    }
    defer client.Close()

    w := client.Bucket(bucket).Object(dst).NewWriter(ctx)
    err = errPanicking
    defer func() {
        if err != nil {
            _ = w.CloseWithError(err)
        } else {
            err = w.Close()
        }
    }
    _, err = io.Copy(w, r) {
    return err
}
```

How to simplify? Semantics first. An error is recoverable, a panic is not
(sort of). Marcel created a burner package
[github.com/mpvl/errc](https://github.com/mpvl/errc) which unifies error panic
and defer. It funnel all errors, including panics, to a single error variable:

```go
func writeToGS(ctx context.Context, bucket, dst, src string) (err error) {
    e := errc.Catch(&err)
    defer e.Handle()

    client, err := storage.NewClient(ctx)
    e.Must(err)
    e.Defer(client.Close, errc.Discard)

    w := client.Bucket(bucket).Object(dst).NewWriter(ctx)
    e.Defer(w.CloseWithError)

    _, err = io.Copy(w, r)
    e.Must(err)
}
```
