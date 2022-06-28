---
title: 'Advanced Testing in Go'
authors:
  - name: Mitchell Hashimoto
publishDate: 2017-07-14T00:00-07:00
tags: [
  "gophercon"
]
slug: advanced-testing-in-go
heroImage: https://assets.ctfassets.net/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp
published: true
---

Go is used everywhere at Hashicorp. It has been the primary language for the past 5 years.

Their projects have a number of properties that make testing "interesting":

- Deployed by millions, plus significantly in enterprise
- Distributed systems (Consul, Serf, Nomad, etc.)
- Extreme performance (Consul, Nomad)
- Security (Vault)
- Correctness (Terraform, but also Consul, Nomad, Vault)

There are two parts to testing:

1. Test methodology
1. Writing testable code

Test Methodology:

- Methods to test specific cases
- Techniques to write better tests
- A lot more to testing than “assert(func() == expected)”

Testable code:

- How to write code that can be tested well and easily
- Just as important as writing good tests is
  writing code that can be tested well
- Many developers that tell me “this can’t be tested” aren’t wrong, they
  just wrote the code in a way that made it so. We very rarely see cases
  at HashiCorp that truly can’t be tested [well].
- Rewriting existing code to be testable is a pain, but worth it

The topics in this talk cover both of these parts. From here on out, we're just going to dive into a bunch of test examples. Topics are roughly ordered from "beginner" topics to "advanced" topics at the end.

## Subtests

```go
func TestAdd(t *testing.T) {
  a := 1

  t.Run(“+1”, func(t *testing.T) {
     if a + 1 != 2 { t.Fatal("fail!") }
  })
  t.Run(“+2”, func(t *testing.T) {
    if a + 2 != 3 { t.Fatal("fail!") }
  })
}
```

Subtests are built-in to Go. You can target subtests and can nest subtests further if necessary.

```go
$ go test -run=TestAdd/+1
```

It's hard to explain the value of subtests without talking about table-driven tests.

## Table driven tests

Table tests are a way to build a table of data within a test and run through the table. Hashicorp uses table-driven tests everywhere. Mitchell defaults to table-driven tests since there might be other parameters you want to test later.

```go
func TestAdd(t *testing.T) {
    cases := []struct{ A, B, Expected int }{
	{ 1, 1, 2 },
	{ 1, -1, 0 },
	{ 1, 0, 1 },
	{ 0, 0, 0 },
    }
    for _, tc := range cases {
	t.Run(fmt.Sprintf("%d + %d", tc.A, tc.B), func(t *testing.T) {
            actual := tc.A + tc.B
            if actual != expected { t.Fatal("failure") }
	})
    }
}
```

- Low overhead to add new test cases
- Makes testing exhaustive scenarios simple. It's easy to see visually if you've covered all cases.
- Makes reproducing reported issues simple
- Do this pattern a lot
- Follow pattern even for single cases, if its possible to grow

Consider naming the cases in a table-driven test:

```go
func TestAdd(t *testing.T) {
    cases := []struct{
	Name string
	A, B, Expected int
    }{
      	{“foo”, 1, 1, 2 },
	{“bar”, 1, -1, 0 },
    }
    for k, tc := range cases {
	t.Run(tc.Name, func(t *testing.T) {
            ...
	})
    }
}
```

The first place Mitchell saw table-driven tests was in the Go standard library. A lot of these patterns come from the standard library or other popular Go open source libraries.

## Test fixtures

```go
func TestAdd(t *testing.T) {
    data := filepath.Join(“test-fixtures”, “add_data.json”)
    // ... Do something with data
}
```

- “go test” sets pwd as package directory
- Use relative path “test-fixtures” directory as a place to store test data
- Very useful for loading config, model data, binary data, etc.

## Golden files (also test flags)

- Test complex output without manually hardcoding it
- Human eyeball the generated golden data. If it is correct, commit it.
- Very scalable way to test complex structures (write a String() method)

```go
var update = flag.Bool(“update”, false, “update golden files”)
func TestAdd(t *testing.T) {
    // ... table (probably!)
    for _, tc := range cases {
	actual := doSomething(tc)
	golden := filepath.Join(“test-fixtures”, tc.Name+”.golden”)
	if *update {
            ioutil.WriteFile(golden, actual, 0644)
	}
        expected, _ := ioutil.ReadFile(golden)
	if !bytes.Equal(actual, expected) {
            // FAIL!
	}
    }
}
```

Then you can run

```go
$ go test
...
$ go test -update
...
```

## Global state

- Avoid it as much as possible.
- Instead of global state, try to make whatever is global a configuration
  option using global state as the default, allowing tests to modify it.
- If necessary, make global state a var so it can be modified. This is a last
  case scenario, though.

```go
// Not good on its own
const port = 1000
// Better
var port = 1000
// Best
const defaultPort = 1000
type ServerOpts {
    Port int // default it to defaultPort somewhere
}
```

## Test helpers

```go
func testTempFile(t *testing.T) string {
    t.Helper()
    tf, err := ioutil.TempFile(“”, “test”)
    if err != nil {
	t.Fatalf(“err: %s”, err)
    }
    tf.Close()
    return tf.Name()
}
```

- Never return errors. Just pass in \*testing.T and fail.
- By not returning errors, usage is much prettier, since you don't have a bunch of visual overhead from error handling code in your tests
  since error checking is gone.
- Used to make tests clear on what they’re testing vs what is boilerplate
- Call `t.Helper()` for cleaner failure output (Go 1.9)

```go
func testTempFile(t *testing.T) (string, func()) {
    t.Helper()
    tf, err := ioutil.TempFile(“”, “test”)
    if err != nil {
	t.Fatalf(“err: %s”, err)
    }
    tf.Close()
    return tf.Name(), func() { os.Remove(tf.Name()) }
}
func TestThing(t *testing.T) {
    tf, tfclose := testTempFile(t)
    defer tfclose()
}
```

```go
func testChdir(t *testing.T, dir string) func() {
    t.Helper()
    old, err := os.Getwd()
    if err != nil {
	t.Fatalf(“err: %s”, err)
    }
    if err := os.Chdir(dir); err != nil {
	t.Fatalf(“err: %s”, err)
    }
    return func() { os.Chdir(old) }
}
func TestThing(t *testing.T) {
    defer testChdir(t, “/other”)()
}
```

- Returning a func() for cleanup is an elegant way to hide that
- The func() is a closure that can have access to \*testing.T to also fail
- Example: testChdir proper setup/cleanup would be at least 10 lines
  without the helper. Now avoids that in all our tests.

## Repeat yourself

This will be a little controversial. Some experienced Go devs disagree with this, but over time, this has proven effective at Hashicorp.

- Localized logic is more important than test lines of code. It's much easier to have a huge test file so you don't have to go searching for relevant logic elsewhere.
- When a test fails, you very often don't remember the details of the
  test. It is very cumbersome to have logic spread across multiple call
  sites.
- Limit helpers to very reused logic that doesn't fail often (example:
  changing a directory) or fails all at once (creating a test server).
- Helpers only help the person who knows they exist and what they do
- Copy and paste.
- We prefer a 200 line test to a 20 line test with abstracted helpers

## Package/functions

- Break down functionality into packages/functions judiciously
- NOTE: Don’t overdo it. Do it where it makes sense.
- Doing this correctly will aid testing while also improving organization.
  Over-doing it will complicate testing and readability.
- Qualitative, but practice will make perfect.
- Unless the function is extremely complex, we try to test only the
  exported functions, the exported API.
- We treat unexported functions/structs as implementation details: they
  are a means to an end. As long as we test the end and it behaves within
  spec, the means don’t matter.
- Some people take this too far and choose to only integration/
  acceptance test, the ultimate “test the end, ignore the means.” We
  disagree with this approach.

### Internal packages

- Use internal packages to safely "over-package"
- Under-packaging is very hard to refactor out in small pieces due to
  import cycles. You really have to do a major refactor.
- We prefer to create too many packages (many only export a single
  function) and hide them under "internal" just in case.

## Networking

If you're testing networking, make a real network connection. Don’t mock `net.Conn`, no point.

```go
// Error checking omitted for brevity
func TestConn(t *testing.T) (client, server net.Conn) {
    t.Helper()
    ln, err := net.Listen(“tcp”, “127.0.0.1:0”)
    var server net.Conn
    go func() {
	defer ln.Close()
	server, err = ln.Accept()
    }()
    client, err := net.Dial(“tcp”, ln.Addr().String())
    return client, server
}
```

- This was a one-connection example. Easy to make an N-connection.
- Easy to test any protocol.
- Easy to return the listener as well.
- Easy to test IPv6 if needed.
- Why ever mock net.Conn? (Rhetorical, for readers)

## Configurability

- Unconfigurable behavior is often a point of difficulty for tests.
  - Example: ports, timeouts, paths
- Over-parameterize structs to allow tests to fine-tune their behavior
- It is okay to make these configurations unexported so only tests can set
  them.

```go
// Do this, even if cache path and port are always the same
// in practice. For testing, it lets us be more careful.
type ServerOpts struct {
    CachePath string
    Port
    int
}
```

- Test fields for test-specific behavior. This can be used as an escape
  hatch for hard-to-test behavior.
- Example: web application can mock OAuth to just work with static
  credentials in "test mode"
- Can export it or can unexport it and require access via a helper

```go
type ServerOpts struct {
    // ...
    // Enables test mode which changes the behavior by X, Y, Z.
    Test bool
}
```

## Complex structs

```go
type ComplexThing struct { /* ... */ }
func (c *ComplexThing) testString() string {
    // produce human-friendly output for test comparison
}
//---------------------------------------------------------------
func TestComplexThing(t *testing.T) {
    c1, c2 := createComplexThings()
    if c1.testString() != c2.testString() {
	t.Fatalf("no match:\n\n%s\n\n%s", c1.testString(), c2.testString())
    }
}
```

- Useful for trees, linked lists, etc. Example: Terraform graphs!
- Can use reflect.DeepEqual, but failures are often difficult to debug. There are also great 3rd party libraries for doing struct comparisons that address the issues with reflect.DeepEqual.
- Can sometimes produce better output and test more specific
  functionality with a `testString()` method, which just converts structs to strings and tests for string equality. This method is a bit blunt, but we've had good results, because string diffs are easy to read.

```go
const testSingleDepStr = `
root: root
aws_instance.bar
  aws_instance.bar -> provider.aws
aws_instance.foo
  aws_instance.foo -> provider.aws
provider.aws
root
  root -> aws_instance.bar
  root -> aws_instance.foo
```

## Subprocessing

Subprocessing is typically a point of difficult-to-test behavior.

You have two options:

1. Actually do the subprocess
2. Mock the output or behavior

### Subprocessing: real

- Actually executing the subprocess is nice
- Guard the test for the existence of the binary
- Make sure side effects don’t affect any other test

```go
var testHasGit bool
func init() {
    if _, err := exec.LookPath("git"); err == nil {
	testHasGit = true
    }
}
func TestGitGetter(t *testing.T) {
    if !testHasGit {
	t.Log("git not found, skipping")
	t.Skip()
    }
    // ...
}
```

### Subprocessing: mock

- You still actually execute, but you’re executing a mock!
- Make the \*exec.Cmd configurable, pass in a custom one
- Found this in the stdlib, it is how they test os/exec!
- How HashiCorp tests go-plugin and more

Get the `*exec.Cmd`:

```go
func helperProcess(s ...string) *exec.Cmd {
    cs := []string{"-test.run=TestHelperProcess", "--"}
    cs = append(cs, s...)
    env := []string{
	"GO_WANT_HELPER_PROCESS=1",
    }
    cmd := exec.Command(os.Args[0], cs...)
    cmd.Env = append(env, os.Environ()...)
    return cmd
}
```

What it executes:

```go
func TestHelperProcess(*testing.T) {
    if os.Getenv("GO_WANT_HELPER_PROCESS") != "1" {
	return
    }
    defer os.Exit(0)
    args := os.Args
    for len(args) > 0 {
	if args[0] == "--" {
            args = args[1:]
            break
	}
        args = args[1:]
    }

    ...

    cmd, args := args[0], args[1:]
    switch cmd {
    case “foo”:
	// ...

```

## Interfaces

- Interfaces are mocking points.
- Behavior can be defined regardless of implementation and exposed via
  custom framework or testing.go (covered elsewhere)
- Similar to package/functions: do this judiciously, but overdoing it will
  complicate readability.
- Use smaller interfaces where they make sense
- If you have a big interface that is also an io.Closer but for a function
  you only need the Close function, take only the io.Closer.
- Simplifies testing since a smaller mock interface can be implemented

```go
func ServeConn(rwc io.ReadWriteCloser) error {
    // ...
}
func main() {
    conn, err := net.Dial("tcp", "127.0.0.1")
    ServeConn(conn)
}
```

## Testing as a public API

- Newer HashiCorp projects have adopted the practice of making a
  “testing.go” or “testing\_\*.go” files.
- These are part of the package, itself (unlike regular test files). These are exported APIs for the sole purpose of providing mocks, test
  harnesses, helpers, etc.
- Allows other packages to test using our package without reinventing
  the components needed to meaningful use our package in a test.

Example: config file parser

- TestConfig(t) => Returns a valid, complete configuration for tests
- TestConfigInvalid(t) => Returns an invalid configuration

Example: API server

- TestServer(t) (net.Addr, io.Closer) => Returns a fully started in-
  memory server (address to connect to) and a closer to close it.

Example: interface for downloading files

- TestDownloader(t, Downloader) => Tests all the properties a
  downloader should have.
- struct DownloaderMock{} => Implements Downloder as a mock,
  allowing recording and replaying of calls.
- github.com/mitchellh/go-testing-interface for "testing.T" interface
- Using the real "testing" package will modify global state (adds flags to
  the global flag), and allows testing your test APIs!

```go
import "github.com/mitchellh/go-testing-interface"
// NOTE: non-pointer, cause its not the real "testing" package
func TestConfig(t testing.T) {
    t.Fatal("fail!")
}
```

## Custom frameworks

- `go test` is an incredible workflow tool
- Complex, pluggable systems? Write a custom framework within 
  `go test`, rather than a separate test harness.
- Example: Terraform providers, Vault backends, Nomad schedulers

```go
// Example from Vault
func TestBackend_basic(t *testing.T) {
    b, _ := Factory(logical.TestBackendConfig())
    logicaltest.Test(t, logicaltest.TestCase{
	PreCheck: func() { testAccPreCheck(t) },
	Backend: b,
	Steps: []logicaltest.TestStep{
            testAccStepConfig(t, false),
            testAccStepRole(t),
            testAccStepReadCreds(t, b, "web"),
            testAccStepConfig(t,false),
            testAccStepRole(t),
            testAccStepReadCreds(t, b, "web"),
	},
    })
}
```

- “logicaltest.Test” is just a custom harness doing repeated setup/
  teardown, assertions, etc.
- Other examples: Terraform provider acceptance tests
- We can still use `go test` to run them

## Timing-dependent tests

```go
func TestThing(t *testing.T) {
    // ...
    select {
    case <-thingHappened:
    case <-time.After(timeout):
	t.Fatal(“timeout”)
   }
}
```

- We don’t use “fake time”
- We just have a multiplier available that we can  
  set to increase timeouts
- We have a lot of eventual behavior in our systems and we haven't had a
  need for fake time for any of them while maintaining strong test
  coverage

```go
func TestThing(t *testing.T) {
    // ...
    timeout := 3 * time.Minute * timeMultiplier
    select {
    case <-thingHappened:
    case <-time.After(timeout):
	t.Fatal(“timeout”)
    }
}
```

- Better: make the test non-dependent on time except for a generous
  timeout.
- Consul has a `WaitForLeader` helper that uses APIs to check for
  leadership vs. assuming that after some period of time that we have a
  leader.

## Parallelization

Test helpers:

```go
func TestThing(t *testing.T) {
  t.Parallel()
}
```

- Don’t do it. Run multiple processes.
- Makes test failures uncertain: is it due to pure logic but, or race?
- OR: Run tests both with `-parallel=1` and `-parallel=N`
- We’ve preferred to just not use parallelization. We use multiple
  processes and unit tests specifically written to test for races.
- Except: really, really slow tests.
- Consul tests make use of Parallel because they actually create a Consul
  cluster in-memory, perform leader election, etc. Not terribly slow but
  compounded by hundreds of tests. Test times went down from a few
  minutes to ~10 seconds.

## Testing in production\*

- "Shadow mode" - run new code alongside old code to verify behavior
- Doesn't work for all features or changes, but consider if it would be
  useful for your use case.
- High engineering cost, has to be worth it. Not usually as simple as "run
  both" in most cases.
- Example: new execution engine in Terraform
- We had failures just dump to the console in yellow text at the end of a
  run. Yellow to mean "warning, not fatal".
- Very annoying for the user, but far less annoying than the consequences
  of shipping something broken.
- Would've preferred to ship shadow mode failures quietly via a phone-
  home service but we didn't have the infrastructure in place and we had
  privacy concerns.

## Beyond Go

- Code scan for license compliance
- Audits for security double, triple-check
- QA teams for "manual" (though very automated still) testing

Liveblog by Beyang Liu ([@beyang](https://twitter.com/beyang))

![Selection 012](//assets.contentful.com/le3mxztn6yoo/4ODIg0jhskgiuQ0SgmaMsm/addc509ab1dff98eb6864bcee1740aad/Selection_012.bmp)

[Mitchell Hashimoto](https://twitter.com/mitchellh) is the founder of [HashiCorp](https://www.hashicorp.com/) and creator of popular DevOps tools such as Vagrant, Packer, Terraform, Consul, Vault, and more. Mitchell is an O'Reilly author and one of the top GitHub users by followers, activity, and contributions. He has been using Go since prior to Go 1.0, and he is obsessed with automation.
