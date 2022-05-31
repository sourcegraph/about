---
title: 'GopherCon 2018 - gRPC, State Machines, and ... Testing?'
authors:
  - name: Larry Clapp for the Gophercon Liveblog
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-grpc-state-machines-and-testing
description: 'Amy walks us through her usage of a Finite State Machine to implement automatic upgrades of clients running in a Kubernetes (k8s) cluster, also touching on gRPC, and testing of the FSM.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Amy Codes](https://www.gophercon.com/agenda/speakers/279038), [@TheAmyCode](https://twitter.com/theamycode)

Liveblogger: [Larry Clapp](https://twitter.com/readcodesing)

Introduction to Finite State Machines (FSMs), touching on gRPC, and testing of the FSM.

## Summary

Amy walks us through her usage of a Finite State Machine to implement automatic upgrades of clients running in a Kubernetes (k8s) cluster, also touching on gRPC, and testing of the FSM.

---

Finite State Machines: Use them if they work for you.

## What's an FSM?

An abstract machine that can be in one of a finite number of states, which changes state in response to external inputs.  The "one" and the "finite" are important.  If the situation you're modeling can have multiple simultaneous states, or an infinite number of states (or even just a really large number), FSMs may be the wrong tool.

There are two classes of FSM: Deterministic & non-deterministic.  In a deterministic FSM, a given input will make the machine transition to exactly one new state (which may be the same as the current state).  In a non-deterministic FSM, the same input can cause transitions to different states.  (Thus the non-determinism.)

Amy discusses deterministic FSMs.

## Sample uses

* Modeling UI states
* Games / game theory
* tcp network stacks
* parsing
* pattern matching
* automata / machine learning

## When might they be useful?

1. finite states, small # (large #'s can be really complicated)
2. sequence of events matters
3. well-defined inputs

If any of these are not true, FSMs may be the wrong tool to model your problem.

## Her problem: auto-updating a client in a k8s cluster

She needed to automatically update a client running in a Kubernetes cluster.  For reasons involving the client configuration xml, k8s's native auto-update was insufficient

![Server side / client side](https://user-images.githubusercontent.com/2324697/44757213-29325100-aaeb-11e8-8884-34afe314bbdc.png)

![Auto updating old to new](https://user-images.githubusercontent.com/2324697/44757332-c2616780-aaeb-11e8-8915-8cb477f4a167.png)

## Sidebar: designing an fsm

Some important points to remember:

* don't get stuck in a state
    * if you are, you may need retry loops, timeouts, error thresholds, reverting to old states
* remember to consider failure states & error states

## The state machine

![The state machine](https://user-images.githubusercontent.com/2324697/44757385-ffc5f500-aaeb-11e8-9d7c-22f2cb8bb1c5.png)

Each client has config stored in etcd

Green: new client state transitions
Red: current client state transitions

**current client**: starts in start state
start -> processed
processed -> updating (this means: apply next version of client; health check it; if healthy, set old client to be condemned; new client will clean it up)
updating -> condemned

**new client**:
start -> updating
updating -> processed | failed
* Can transition to one of two different states, depending on the health-check mentioned above

Failed updates are tracked and not re-applied if they come in again.

## Server / Client gRPC

Client asks server: Is there a new version?  (gRPC request)
Server says: Yes, here it is (gRPC response)

# Code

Code was pseudo-code.  "Which works with my pseudo-compiler!"  :)

To be posted on GitHub & Twitter later.

## Client

### Define states as constants

### main
* gRPC client
    * what's the new version?
* k8s crd client
    * what's the current config & current FSM state?
    * These are the two inputs mentioned previously
* create Client struct
* Poll every 5s till stop channel closed
    * here's where fsm happens
    * get new state, process it, close old state

### Client struct
* version string
* newVersion *proto.Package
* localState []Package

### func stateMachine()
* get input # 1: new version from server
* input # 2: get local version from CRD
* determine current state of client
* switch on state

```go
switch state {
case START:
    state = c.startState()
case PROCESSED:
    state = c.processedState()
case UPDATING:
    state = c.updatingState()
case CONDEMNED:
    state = c.condemedState()
case FAILED:
    state = c.failedState()
}
```

### The startState() function

```go
func (c *Client) startState() string {
    // This is the first client
    if len(c.localState) == 0 {
        // Create CRD
        // State of client is PROCESSED
        return PROCESSED
    }

    return UPDATING
}
```

That is:

* first client?
    * create crd
    * return "processed" as next state
* else return "updating" as next state

## Server

In the server, the GetVersion func returns the current version specification, with config yaml.  To upgrade, update the server code & redeploy it.

## Protobuf definition

(Briefly: protobuf defines a "Service" with various functions, which becomes an interface you have to implement, and then each "Message" is a struct.  An RPC function takes a struct as input, and returns a struct as output.  If you want multiple inputs / outputs, you have to wrap them all in the struct.)

service VersionService, with single GetVersion rpc call defined
message GetVersionRequest
message Package
message GetVersionResponse

gRPC generates the Go code from the protobuf definition

# Review

* client
    * grpc client
    * k8s client to look at local state
* server
    * new versions & packages
* protobuf — defines the api itself

# Testing the FSM

Mock the server — mock the func the client calls
* run EXPECT & give responses you want

Testing
* make sure state transitions happen the way you expect

e.g. test given "start" state, transition to "processed" state

She doesn't really trust this test.  Too much is mocked.

So: mock the server more accurately, set it up so it can return arbitrary version transitions, and then test various state transitions, using real client code.

## Summary
* She learned a lot, both writing the code and prepping for the talk.  Hopes we did too!
* Uses for FSMs, e.g. UIs, etc
