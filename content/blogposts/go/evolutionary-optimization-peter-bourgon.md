---
title: 'Evolutionary optimization'
authors:
  - name: Peter Bourgon
publishDate: 2017-07-14T00:00-07:00
tags: [
  "gophercon"
]
slug: evolutionary-optimization-peter-bourgon
heroImage: https://assets.ctfassets.net/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp
published: true
---

## Background
[Peter](https://twitter.com/peterbourgon) was at a Prometheus meetup in San Francisco and he lamented on the lack of logging.
That lamentation made him wonder why there wasn't a Prometheus buffer log, so he decided to take on the challenge, why not?

In this talk, he chronicles the building of "OK Log" https://github.com/oklog/oklog, a distributed
and coordination-free log management system.

oklog is the vehicle that helps drive home his thesis about how evolutionary optimizations made by an iterative cycle of designing and planning first, then implementing code, make optimizations trivial and help him easily build production-ready code.


## Design phase:
The important part for him about using Prometheus is operational simplicity, because each node is independent. Logs from distributed systems are usually not aggregatable so the goal is to be able to handle.

Contextual problem:
Despite a proper technical description and expertise, we need to define a good product and market fit. "Weeks of programming can you save you hours of planning" -- Hackernews
1. Design instead of Make decisions

2. Build instead of type:
It took the form of a Dropbox paper, shared with colleagues and friends. Talked it over drinks and hanging out, made state machines etc.

At the highest levels decided:
Behaviors --> Components --> Implementation and then iterate
as per "The design thinking process"

#### Actual Build cycle:
95% of the work has already been done as of now, but that came after at least an entire month of planning.

### Review phase:
Review the design plan, make the implementation, identify problems and improvements, plan changes and then more reviews.
They started with a Filesystem interface definition, and then virtual filesystem definitions then combined all the
commonly used disk operations into methods. The fs package is at https://github.com/oklog/oklog/pkg/fs

#### Instrumentation > Logs

Metrics in his opinion are more superior than logs.
Instrumenting using principles USE and RED --> Update dashboard --> Inspect to see what's missing -->

![USE RED](https://user-images.githubusercontent.com/4898263/28233377-959f3162-68b3-11e7-910d-1cc4938a5d60.png)

Basic instrumentation helps figure out exactly what actually needs to be optimized.

![instrumentation helps figure out exactly what actually needs to be optimized](https://user-images.githubusercontent.com/4898263/28233366-841c0dc0-68b3-11e7-943e-a2b8226370a7.png)


#### Problems noticed through instrumentation:
The log generating service was burning a lot of CPU ~48.3% because the log service generates logs at a constant frequency.
Profiling revealed that this section was hot:
```go
hz := float64(time.Second) / float64(rate)
for range time.Tick(time.Duration(hz)) {
  fmt.Fprintf(os.Stdout, "%s %s\n", time.Now().Format(time.RFC3339), records[rant.Intn(len(records))])
}
```

which was then turned into:
```go
var (
  recordsPerCycle = 1
  timePerCycle = time.Second / *rate
)


for timePerCycle < 50*time.Millisecond {
  recordsPerCycle *= 2
  timePerCycle *= 2
}

var count int
for range time.Tick(timePerCycle) {
  for i := 0; i < recordsPerCycle; i++ {
    fmt.Fprintf(os.Stdout, "%s %s\n", time.Now().Format(time.RFC3339), records[count%len(records)])
    count++
  }
}
```

The above changes cut CPU usage from ~48.3% to ~33.9%

#### Profiling:
He exposed "net/http/pprof" in his source code. According to him, it's not necessarily always that unsafe to expose
pprof in their production code.
After profiling, they noticed a lot of CPU burn from strings.Field to extract ulid which are just 26 bytes long.
After seeing the call graph, the fix was to replace
```go
record[i] = scanner[i].Bytes()
id[i] = strings.Fields(record[i][0])
```

with

```go
record[i] = scanner[i].Bytes()
id[i] = record[i][:ulid.EncodedSize]
```
which cut down time spent in the offending function from  31.10 seconds to 2.49 seconds.

![cut down time spent in the offending function from 31.10 seconds to 2.49 seconds](https://user-images.githubusercontent.com/4898263/28233404-ded12c82-68b3-11e7-895f-6436a14558f6.png)


Another profile taken from a higher level provided information to remove and optimize more code related to queries, as you'll see below.

#### Optimizing queries:
The target was to optimize querying corpra at a target rate of mean = 1m10s ==> ~299Mbps given:

![Optimizing queries](https://user-images.githubusercontent.com/4898263/28233433-11adadc4-68b4-11e7-8444-cda7ee34f16a.png)


##### Review of how each segment is stored on disk:
When a query comes in, it's always bounded by a time range e.g T1 to T6. One can select a bunch of segments, merge them
into memory and then filter on them.

![Review of how each segment is stored on disk](https://user-images.githubusercontent.com/4898263/28233320-34751410-68b3-11e7-8825-a357bd4bf5ba.png)

The program also has a compactor always running, which has the ability to merge segments into one.
For non overlap segments, we do a careful merge --> fast merge and then filter.

![Careful Merge](https://user-images.githubusercontent.com/4898263/28233347-62755640-68b3-11e7-8008-0414f61b10dd.png)


They then noticed that time was wasted merging records that will never be returned to anyone.
Therefore the solution was to implement filtering before the fast merge to gut out a lot of the work.

![Filtering merge](https://user-images.githubusercontent.com/4898263/28233339-51a1ebf8-68b3-11e7-9709-117a837321ab.png)

They then made regex usage opt-in, otherwise use a simple bytes.Contains/bytes.Index as the default checker. Even better, bytes.Index has a very fast assembly implementation in Go thus
getting a new mean of 25.81s which translates to a throughput of ~821MBps.

![Index has a very fast assembly implementation in Go](https://user-images.githubusercontent.com/4898263/28233569-ed21b40e-68b4-11e7-9207-7996e513a5e3.png)


### Conclusions:
* Please first think about your design, plan and then act: writing production quality code can be helped by this systematic design process. The process doesn't have to be linear, but as long as you can make more iterations and improvements.
* Write in cycles: I demonstrated usage of cycles and iterations, Russ' talk also demonstrated cycles of work and so have many. Cycles refine the design process for which this process isn't linear
* NIH isn't a 4-letter word

In conclusion, the lessons learned and the results seen while building oklog are hopefully a case to show that without planning and careful examination, they would have spent a lot of time building, but with diminishing returns.
Evolutionary design involves revisiting and examining work that was done in the previous cycle. It involves
reiterating and revisions of previous, which still enables them to ship a product, yet with continual improvements.

Liveblog by Emmanuel Odeke ([@odeke_et](https://twitter.com/odeke_et))

![Selection 012](//assets.contentful.com/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp)