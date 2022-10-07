---
title: 'GopherCon 2018 - Implementing a Network Protocol in Go'
authors:
  - name: Beyang Liu for the GopherCon Liveblog
    url: https://twitter.com/beyang
publishDate: 2018-08-29T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-implementing-a-network-protocol-in-go
description: 'A very detailed walkthrough of implementing a networking protocol (NDP in IPv6) in Go, with many, many code snippets.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5Oj3acpp7yysQg04W2AW4A/a93d79c10ad903d3902f6b6d8707973a/mechanic-tire-2.jpg
published: true
---

Presenter: [Matt Layher](https://twitter.com/mdlayher)

Liveblogger: [Beyang Liu](https://twitter.com/beyang)

A very detailed walkthrough of implementing a networking protocol (NDP in IPv6) in Go, with many, many code snippets.

---

Matt Layher ([@mdlayher](https://twitter.com/mdlayher), [talks](https://github.com/mdlayher/talks)) is an engineer at Digital Ocean.

## Intro

* The IPv6 Neighbor Discovery Protocol (NDP) is our focus for today
* IPv6 is an important step for the Internet
* Go can be used for many low-level networking applications

Outline:
* Introduction to IPv6 and NDP
* Using NDP with Go: github.com/mdlayher/ndp
* Building and testing network protocol packages

## Intro to IPv6

IPv6 adoption:

![image](https://user-images.githubusercontent.com/1646931/44633783-6d372180-a944-11e8-8539-4a3ed4c62fae.png)

What is IPv6?
* The next generation of the Internet Protocol
* Draft standard in RFC 2460 (December 1998!)
* 128 bit IP addresses, huge improvement over 32 bit IPv4 addresses:
    * IPv6: 2^128 addresses, but not all used for hosts
    * IPv4: 2^32 addresses

How is IPv6 different from IPv4?
* Wire format simplified, more extensible
* Residential ISPs can offer entire IPv6 prefixes instead of 1 IPv4 address:
  * IPv6: 2001:db8:abcd:ffff::/64: 2^64 addresses
  * IPv4: 192.0.2.10/32: 1 address

IPv6 tips and tricks

* Many shell utilities have a “-6” flag to use IPv6
* A useful website for testing IPv6 configuration: ipv6-test.com
* My favorite ping target:
```
$ ping6 2600::
PING 2600::(2600::) 56 data bytes
64 bytes from 2600::: icmp_seq=1 ttl=48 time=56.9 ms
```

## Intro to NDP

What is NDP?

* Effectively the IPv6 equivalent to IPv4’s ARP
* Runs on top of IPv6 + ICMPv6 with link-local addresses: fe80::/10
* Used to ask a network neighbor for its MAC address using IPv6 address
  * A: Who has “B”? Tell “A”.
  * B: “B” is at “04:18:d6:a1:ce:b7”.

![image](https://user-images.githubusercontent.com/1646931/44633790-7cb66a80-a944-11e8-8ce3-894ede2436d6.png)

![image](https://user-images.githubusercontent.com/1646931/44633795-88099600-a944-11e8-9766-995897b0d9c9.png)

IPv6 and NDP’s big advantage:
* DHCP is not usually necessary to configure globally-routable IPv6 addresses:
  * Stateless Address Autoconfiguration (SLAAC) via NDP
    * No DHCPv6 required whatsoever
  * SLAAC + Stateless DHCPv6
    * Addresses via SLAAC, more configuration via DHCPv6
  * Stateful DHCPv6
    * All addresses and information from DHCPv6

SLAAC via NDP
* SLAAC uses NDP router advertisements to provide IPv6 prefix information
  * “A” sends a router solicitation
  * “R” sends a router advertisement:
    * Prefix “P::/64”, use SLAAC, valid for 24 hours
  * “P:76d4:35ff:fee7:cbc4” computed and assigned

## NDP and Go

* Your operating system usually handles NDP; why is it useful for Go programs?
* [github.com/mdlayher/ndp](https://github.com/mdlayher/ndp): Go package for using NDP
  * [MetalLB](https://github.com/google/metallb): implements IPv6 Layer 2 mode for Kubernetes load balancer
  * [cmd/ndp](https://github.com/mdlayher/ndp#examples): tool for generating and capturing NDP traffic
  * DigitalOcean internal use: responding to neighbor/router solicitations

Package ndp overview

* Primary types:
  * `ndp.Message` interface: marshaling/unmarshaling of NDP messages
  * `ndp.Option` interface: marshaling/unmarshaling of NDP options
  * `ndp.Conn` struct: manage ICMPv6 connection, read/write `ndp.Message`s

## How do we go from bytes to a complete NDP package?

### From bytes to messages

NDP message basics:

* ICMPv6 header determines which NDP message is used
  * Type specifies NDP message, Code always 0
* Initial NDP messages and options defined in [RFC 4861](https://tools.ietf.org/html/rfc4861)
  * Fixed length messages, variable options

Parsing bytes:

* An ICMPv6 header will always precede an NDP message
* NDP messages on their own are not useful without the ICMPv6 header
* Exporting marshal/unmarshal methods bloats the API and GoDoc
  * **Solution:** add functions which always add/remove the ICMPv6 header

#### `ndp.Message` interface

```go
// A Message is a Neighbor Discovery Protocol message.
type Message interface {
	// Type specifies the ICMPv6 type for a Message.
	Type() ipv6.ICMPType

	// Called via MarshalMessage and ParseMessage.
	marshal() ([]byte, error)
	unmarshal(b []byte) error
}
```
* Exported Type method for documentation, but other methods unexported

#### `ndp.ParseMessage`

`ndp.ParseMessage` function does bounds checking validation, determines concrete type, continues parsing:

```go
func ParseMessage(b []byte) (Message, error) {
	// Bounds check!!!

	// Determine ndp.Message from ICMPv6 type.

	// Unmarshal ICMPv6 data into ndp.Message implementation.
}
```

Bounds checking: when using slice elements, you must perform bounds checks to avoid panics:
```go
// The ICMPv6 header is fixed length.
const icmpLen = 4
if len(b) < icmpLen {
	return nil, io.ErrUnexpectedEOF
}
```

Determining `ndp.Message` type: use a switch to choose the right interface implementation:
```go
// Select the correct ndp.Message type based on ICMPv6 header.
var m Message
switch t := ipv6.ICMPType(b[0]); t {
case ipv6.ICMPTypeNeighborSolicitation:
	m = new(NeighborSolicitation)
default:
	return nil, fmt.Errorf("ndp: unrecognized ICMPv6 type: %d", t)
}
```


Unmarshal the `ndp.Message` implementation: call into the type’s methods to do the rest of the work, skipping the header
```go
// Unmarshal remaining bytes into correct ndp.Message type.
if err := m.unmarshal(b[icmpLen:]); err != nil {
	return nil, err
}
```

A couple of comments on the parsing logic:
* Using `ndp.ParseMessage`, it’s easy to parse `ndp.Message` types
* Concise API: one parsing function
* Correctness and simplicity first, performance optimizations later


#### Our first `ndp.Message` implementation

* Neighbor Solicitation (NS) messages ask a machine for its MAC address
* For now, `ndp.Option` is unimplemented
```go
// An Option is a Neighbor Discovery Protocol option.
type Option interface {
	// TODO!
}
```

What an ICMPv6 + NDP NS message looks like:

![image](https://user-images.githubusercontent.com/1646931/44690095-ed2dbc00-aa16-11e8-925c-98f01269ee14.png)

The `ndp.NeighborSolicitation` type mimics the structure defined by the RFC, using doc comments to provide references:

```go
Mimic structure defined by RFC, use doc comments to provide references

// A NeighborSolicitation is a Neighbor Solicitation message as
// described in RFC 4861, Section 4.3.
type NeighborSolicitation struct {
	TargetAddress net.IP
	Options       []Option
}
```

(Neat godoc feature: it will automatically hyperlink to the RFC as defined above in the comments.)

Checking for IPv4 and IPv6 addresses:
* net.IP can contain IPv4, IPv6, or totally invalid IP addresses
  * A combination of To4 and To16 methods determine the actual type
  * Don't think this is the friendlies API. Something I’d love to see improved upon in Go 2
    * net.IP interface?  net.IPv4 and net.IPv6 types?

`checkIPv6` function:
```go
// checkIPv6 verifies that ip is an IPv6 address.
func checkIPv6(ip net.IP) error {
	// To16 returns nil when ip is not a valid IPv4/IPv6 address.
//
// To4 returns non-nil when ip is an IPv4 address.
	if ip.To16() == nil || ip.To4() != nil {
		return fmt.Errorf("ndp: invalid IPv6 address: %q",
ip.String())
	}

	return nil
}
```

`ndp.NeighborSolicitation` unmarshaling validates incoming bytes and replaces the structure all at once:

```go
func (ns *NeighborSolicitation) unmarshal(b []byte) error {
        // Bounds checking!!! (don't want to get paged at 3am in the morning because your code panicked)

	// Validation

	// Replacing contents of the NeighborSolicitation
}
```

To validate byte inputs, ensure that field values make sense, typically using rules defined by RFC. I.e., verify that we don't have any sneaky IPv4 addresses:
```go
// Skip reserved area.
addr := b[4:nsLen]
if err := checkIPv6(addr); err != nil {
	return err
}
```

To replace the structure while unmarshaling, (1) dereference the pointer and replace contents with completed structure. (2) Always make a copy of data from the input slice; don’t assume it’s safe to retain:

```go
*ns = NeighborSolicitation{
	TargetAddress: make(net.IP, net.IPv6len),
	Options:       options,
}

copy(ns.TargetAddress, addr)
```

### From messages to bytes

Things to remember when marshaling messages:
* An ICMPv6 header will always precede an NDP message
* NDP messages on their own are not useful without the ICMPv6 header
* Do the parsing operation in reverse

#### `ndp.MarshalMessage` function

Marshal an ndp.Message into binary, prepend ICMPv6 header

```go
func MarshalMessage(m Message) ([]byte, error) {
	// Call m’s marshal method

	// Pack bytes into an ICMPv6 header
}
```

When marshaling `ndp.Messages`, simplicity wins. Allocating is okay until your performance needs are not met:
```go
mb, err := m.marshal()
if err != nil {
	return nil, err
}
```

Same goes for ICMPv6 messages:
```go
im := icmp.Message{
	Type: m.Type(),
	Body: &icmp.DefaultMessageBody{
		Data: mb,
	},
}

return im.Marshal(nil)
```

#### `ndp.NeighborSolicitation` marshaling
Validate before you allocate:
```go
func (ns *NeighborSolicitation) marshal() ([]byte, error) {
	// Validation

	// Allocation
}
```
Don’t bother allocating memory until you've checked your inputs:
```go
// Only accept IPv6 target.
if err := checkIPv6(ns.TargetAddress); err != nil {
	return nil, err
}
```
Allocate once, if possible (allocating once is ideal for speed, but keep it simple):
```go
// Allocate enough space for base message.
b := make([]byte, nsLen)
copy(b[4:], ns.TargetAddress)

// Append any option bytes.
ob, err := marshalOptions(ns.Options)
if err != nil {
	return nil, err
}
b = append(b, ob...)
```

When allocating memory...
* **Simplicity wins** - allocating is okay!
* **Write comprehensive unit tests** to lock in your behavior
* **Measure** for bottlenecks using Go benchmarks and pprof
* **Optimize** only after finding evidence of performance issues


### `ndp.Message` API

`ndp.Message` types:

![image](https://user-images.githubusercontent.com/1646931/44690504-5235e180-aa18-11e8-888a-74ba31fb4f43.png)

`ndp.Message` usage:

```go
m := &ndp.NeighborSolicitation{
	TargetAddress: target,
	Options: []ndp.Option{&ndp.LinkLayerAddress{
		Direction: ndp.Source,
		Addr:      addr,
	}},
}

b, err := ndp.MarshalMessage(m)
if err != nil {
	return fmt.Errorf("failed to marshal: %v", err)
}
```

```go
m, err := ndp.ParseMessage(b[:n])
if err != nil {
	return fmt.Errorf("failed to parse: %v", err)
}

switch m := m.(type) {
case *ndp.NeighborAdvertisement:
	printNA(m)
case *ndp.NeighborSolicitation:
	printNS(m)
default:
		log.Printf("%#v", m)
}
```

### From bytes to options

#### NDP option basics

Options are encoded in type, length, value (TLV) format:
* Fixed length: type
* Fixed length: length
* Variable length: value/data

TLV options:
![image](https://user-images.githubusercontent.com/1646931/44690755-3ed74600-aa19-11e8-9c54-41f90ba4eb87.png)

#### ndp.Option interface
```go
// An Option is a Neighbor Discovery Protocol option.
type Option interface {
	// Code specifies the NDP option code for an Option.
	Code() uint8

	// Called when dealing with a Message's Options.
	marshal() ([]byte, error)
	unmarshal(b []byte) error
}
```

Parsing options:
* An NDP message will always precede options
* NDP options on their own are not useful without an NDP message
* Exporting marshal/unmarshal methods bloats the API and GoDoc
  * Solution: use unexported functions with `ndp.ParseMessage` and `ndp.MarshalMessage`

#### marshalOptions function

```go
// marshalOptions marshals Options into a single byte slice.
func marshalOptions(options []Option) ([]byte, error) {
	// For each option…

		// Marshal the option

		// Append it to the output
}
```

#### parseOptions function

Parsing is just a little trickier:

```go
// parseOptions parses a slice of Options from a byte slice.
func parseOptions(b []byte) ([]Option, error) {
	// Iterate until no bytes remain…

		// Bounds check!!!

// Read 2 bytes: type/length

// Determine if option is known

// Append to output slice
}
```

`ndp.Option` types include the following:
* Source/target link-layer address
* MTU
* Prefix information
* Recursive DNS server
* … and more! If we implemented all of them, our API could bloat quickly!

Tips for implementing options:
* Consider only implementing the most common options in your package
  * Prevent API bloat, support 90% of use cases
* Tip: add a “raw option” type or similar to enable further extension

#### ndp.RawOption type

It directly exposes the TLV fields, so code outside this package can pass options that aren't defined in this package. If a particular type of option is used often enough, we can add first-class support for it later.

```go
// A RawOption is an Option in its raw and unprocessed format.
// Unknown Options can be represented using a RawOption.
type RawOption struct {
	Type   uint8
	Length uint8
	Value  []byte
}


// Code implements Option.
func (r *RawOption) Code() byte { return r.Type }
```


`ndp.Option` types:
![image](https://user-images.githubusercontent.com/1646931/44690869-a5f4fa80-aa19-11e8-9bd0-3561de1a1525.png)

`ndp.Option` usage:
```go
var ra ndp.RouterAdvertisement
ra.Options = []ndp.Option{
&ndp.LinkLayerAddress{
		Direction: ndp.Source,
	Addr:      addr,
},
ndp.NewMTU(1500),
	&ndp.PrefixInformation{
		PrefixLength: 32,
		Prefix:       net.ParseIP("2001:db8::"),
		SLAAC:        true,
	},
}
```

## Fuzzing byte parsers

Fuzzing lets you catch and prevent errors arising from unexpected and unhandled input cases. E.g., avoid errors like this one:

```
panic: runtime error: slice bounds out of range

goroutine 127 [running]:
testing.tRunner.func1(0xc4201453b0)
        /usr/local/go/src/testing/testing.go:742 +0x29d
panic(0x5dd240, 0x7378d0)
        /usr/local/go/src/runtime/panic.go:502 +0x229
github.com/mdlayher/ndp.(*NeighborAdvertisement).unmarshal(0xc42013d280, 0xc4200dd924, 0x10, 0x1c, 0xc4200dd920, 0x10)
        /home/matt/src/github.com/mdlayher/ndp/message.go:149 +0x2b1
github.com/mdlayher/ndp.ParseMessage(0xc4200dd920, 0x14, 0x20, 0x4, 0x14, 0xc4200dd920, 0x4)
        /home/matt/src/github.com/mdlayher/ndp/message.go:85 +0x168
github.com/mdlayher/ndp_test.TestParseMessageError.func1.1(0xc4201453b0)
        /home/matt/src/github.com/mdlayher/ndp/message_test.go:176 +0xd3
testing.tRunner(0xc4201453b0, 0xc420141440)
        /usr/local/go/src/testing/testing.go:777 +0xd0
created by testing.(*T).Run
        /usr/local/go/src/testing/testing.go:824 +0x2e0
```

Enter Dmitry Vyukov's `go-fuzz`. If you’re parsing raw bytes, there's a high potential for unexpected behavior:
* Bad input causing application problems
* Possibility of a panic taking down your program!

[github.com/dvyukov/go-fuzz](https://github.com/dvyukov/go-fuzz) address this problem:
* Throws arbitrary bytes at your parser and finds crashers!
* Mark inputs as “interesting” or not to guide fuzzer

go-fuzz setup:
```go
//+build gofuzz

package ndp

// Fuzz is an entry point for go-fuzz.
func Fuzz(data []byte) int {
	return fuzz(data)
}

func fuzz(data []byte) int {
	m, err := ParseMessage(data)
	if err != nil {
		return 0 // Invalid, not interesting!
	}
	b2, err := MarshalMessage(m)
	if err != nil {
		panic(err)
	}
	if _, err := ParseMessage(b2); err != nil {
		panic(err)
	}
	return 1 // Valid, interesting!
}
```


go-fuzz usage:
* Prepare the fuzzer by building an instrumented test program:
  ```bash
  $ CGO_ENABLED=0 go-fuzz-build github.com/mdlayher/ndp
  ```
* Run go-fuzz with multiple CPU's and output results to ./fuzz/
  ```bash
  $ go-fuzz -bin ./ndp-fuzz.zip -procs 16 -workdir ./fuzz/
  … workers: 16, corpus: 78 (0s ago), crashers: 5
  ^C
  ```
* Inspect the resulting crasher inputs
  ```bash
  $ cat fuzz/crashers/4c24217a9963fae05ea48d657c342549a731989.quoted
        "\x860000000000000000\x05"
  ```
* Write a test, fix the bug, and repeat!
  ```bash
  fuzz([]byte("\x860000000000000000\x05"))
  ```

go-fuzz conclusions: Use it! Use go-fuzz on ALL byte parsers: [github.com/dvyukov/go-fuzz](https://github.com/dvyukov/go-fuzz)
* Find parsing problems now, not during a 3am outage
* A multi-worker mode is available for use with clusters of machines
* Submit “trophies” to the go-fuzz README


## ndp.Conn

Let's implement the struct that represents an NDP connection.

“Conn” types represent network connections. They typically have the following:
* “Dial” and/or “Listen” constructors
* “Close” to free resources
* “Read” and “Write” to pass messages

`net` vs `x/net`
* NDP is transported over IPv6 + ICMPv6
* Standard library net doesn't quite provide all the functionality we need
  * golang.org/x/net is designed for advanced use-cases!

ICMPv6 networking packages in Go:
* golang.org/x/net/icmp
* golang.org/x/net/ipv6
* Huge shout-out to Mikio Hara for his work on these packages and countless other low-level networking packages for Go

Here's how you create a ICMPv6 listener (this is a privileged operation, usually requires root):
```go
// Open raw ICMPv6 listener on eth0’s link-local address.
addr := "fe80::7d64:35ff:fee7:cbc4%eth0"
ic, err := icmp.ListenPacket("ip6:ipv6-icmp", addr)
if err != nil {
	return err
}
```

Reading ICMPv6 messages is similar to standard APIs, but also returns IPv6 control messages:
```go
b := make([]byte, 1024)
n, cm, src, err := c.pc.ReadFrom(b)
if err != nil {
	return nil, nil, nil, err
}

return b[:n], cm, src.IP, nil
```

Writing ICMPv6 messages is similar to standard APIs, but you can specify IPv6 control messages:
```go
// Write bytes to the specified target.
_, err := c.pc.WriteTo(b, cm, &net.IPAddr{
	IP:   ip,
	Zone: c.ifi.Name,
})
return err
```

ndp.Conn usage:

Create an ndp.Conn by selecting an interface, dialing ICMPv6, and specifying an address to listen on:
```go
ifi, err := net.InterfaceByName("eth0")
if err != nil {
	log.Fatalf("failed to get interface: %v", err)
}

// Dial IPv6 + ICMPv6 connection.
c, ip, err := ndp.Dial(ifi, ndp.LinkLocal)
if err != nil {
	log.Fatalf("failed to dial NDP: %v", err)
}
```


How to read messages? Here's a code snippet to keep reading and printing messages until an error occurs:
```go
for {
msg, _, from, err := c.ReadFrom()
if err != nil {
	return nil, err
}

printMessage(msg, from)
}
```

Writing ndp.Messages: Send a router solicitation to trigger router advertisements on the network:
```go
m := &ndp.RouterSolicitation{
	Options: []ndp.Option{&ndp.LinkLayerAddress{
			Direction: ndp.Source, Addr: addr,
	}},
}

dst := net.IPv6linklocalallrouters
if err := c.WriteTo(m, nil, dst); err != nil {
	return nil, err
}
```


## Build a tool to test your package

Add a cmd/ directory with a testing utility during development
  * Consider building it out to become a useful tool
  * cmd/ndp: tool for generating and capturing NDP traffic

Introducing the ndp tool:
```bash
$ ndp [listen]
# Listens for any NDP messages that pass through the interface
$ ndp rs
# Sends a router solicitation; wait for a router advertisement
$ ndp -t fd00::1 ns
# Sends a neighbor solicitation; wait for a neighbor advertisement
```

Easier to use than `tcpdump`. E.g., here's the `tcpdump` command and output to watch for NDP packets:
```bash
$ sudo tcpdump -i enp4s0 'icmp6 && (ip6[40] == 133 or ip6[40] == 134)'
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on enp4s0, link-type EN10MB (Ethernet), capture size 262144 bytes
16:02:42.774725 IP6 nerr-2 > ip6-allrouters: ICMP6, router solicitation, length 16
16:02:42.777116 IP6 _gateway > ip6-allnodes: ICMP6, router advertisement, length 88
```

Compare that with `ndp`:

```bash
$ sudo ./bin/ndp rs
ndp> interface: enp4s0, link-layer address: 74:d4:35:e7:cb:c4, IPv6 address: fe80::e563:9887:3aca:e01e
ndp rs> router solicitation:
    - source link-layer address: 74:d4:35:e7:cb:c4

ndp rs> router advertisement from: fe80::618:d6ff:fea1:ceb7:
    - hop limit:        64
    - router lifetime:  30m0s
    - options:
        - prefix information: 2600:6c4a:787f:d200::/64, flags: [OA], valid: 24h0m0s, preferred: 4h0m0s
        - prefix information: fd00::/64, flags: [OA], valid: 24h0m0s, preferred: 4h0m0s
        - source link-layer address: 04:18:d6:a1:ce:b7
```

## Troubleshooting your ISP’s equipment with Go

You can also use Go to troubleshoot any difficulties your ISP has with IPv6.

Ubiquiti EdgeRouter Lite can run Go programs:
```bash
desktop $ GOARCH=mips64 go build -o ndp_mips64
desktop $ scp ndp_mips64 router:~/ndp
 router $ sudo ./ndp -i eth1 rs
```

```bash
$ sudo ./ndp -i eth1 rs
ndp> interface: eth1, link-layer address: 04:18:d6:a1:ce:b7, IPv6 address: fe80::618:d6ff:fea1:ceb7
ndp rs> router solicitation:
    - source link-layer address: 04:18:d6:a1:ce:b7
..............................................................................................^C
ndp rs> sent 95 router solicitation(s)
```

* No luck with tech support: “your WiFi router isn’t working”
* … a modem swap during an upgrade made the problem disappear

## Conclusions

* IPv6 is great, check out ipv6-test.com to see if you’re using it
* Network protocols are powerful building blocks
* Go is an excellent language for exploring low-level network protocols
* Build tools to solve real problems on your network!


Resources:
* [github.com/mdlayher/ndp](https://github.com/mdlayher/ndp)
* [Network Protocol Breakdown: NDP and Go](https://medium.com/@mdlayher/network-protocol-breakdown-ndp-and-go-3dc2900b1c20)
* [RFC 4861](https://tools.ietf.org/html/rfc4861)

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
