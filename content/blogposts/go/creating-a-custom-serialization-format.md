---
title: 'Creating a Custom Serialization Format'
authors:
  - name: Scott Mansfield
publishDate: 2017-07-13T00:00-07:00
tags: [
  "gophercon"
]
slug: creating-a-custom-serialization-format
heroImage: https://images.ctfassets.net/le3mxztn6yoo/3elFLYsyUouIS0Cci8iyk4/207db7cd751cd19a631e9ad6fa9284e9/DEogyASVoAEn0jj.jpg
published: true
---


Liveblog by Renfred Harper ([@renfredxh](https://twitter.com/renfredxh))

**Update:** slides for this talk have been posted [here](https://www.slideshare.net/ScottMansfield3/creating-a-custom-serialization-format-gophercon-2017).


![DEogyASVoAEn0jj](//images.contentful.com/le3mxztn6yoo/3elFLYsyUouIS0Cci8iyk4/207db7cd751cd19a631e9ad6fa9284e9/DEogyASVoAEn0jj.jpg)

Scott Mansfield ([@sgmansfield](https://twitter.com/sgmansfield)) is a Senior Software Engineer at Netflix. He works on EVCache, a high-performance, low latency persistence system. He is the primary author of Rend, an open source memcached proxy as a part of EVCache. He talked at [GopherCon 2017](https://gophercon.com/speakers/19) about a custom data serialization format he developed at Netflix.

*Note: This post was best-effort live-blogged at the conference. Let me know on Twitter ([@renfredxh](https://twitter.com/renfredxh)) if I missed anything!

---

## Why serialization?

Serialization is _everywhere_. From high-level applications such as serializing metadata as JSON objects, to the lowest level of encoding binary instructions into electrical voltages a CPU can understand, serialization plays a huge role in transcoding data everywhere in-between. Some interesting examples include:

- HTTP/2 headers (HTTP headers serialized into a binary format)
- Hard drive communication (SATA interfaces)
- Video display (serializing color and timing information into formats are encoded and transmitted across VGA)

Frameworks such as GRPC/protofbuf already define existing formats and methods for serializing data, so why create something new? Scott mentions a universal truth- that is we can always look to Hacker News for inspiration:

> "The field is too in love with horribly inefficient frameworks. Writing network code and protocols is now considered too low level for people."
>
> - jnordwick (Hacker News)

People are often afraid of peeking under the covers to both understand the underlying formats, and if necessary create their own that's suited to a specific need. Scott has taken this challenge head on and developed a custom data serialization format that best suits the requirements at Netflix which includes the ability to be self-describing, storage efficiency, performance, and flexible querying.

The following is a summarized overview of Netflix's format, which is powered by Go.

## The document

JSON is a unanimously known data format. By using JSON as a starting point, Netflix has created an augmented format that is both familiar yet optimized for in areas that are important to them such as performance and querying capability. They've also ironed out some ambiguities in the JSON format such as the byte-size of the number type by supporting 64-bit integers and floats.

So that's the document format, but how do we interact with the data? A common pattern for accessing JSON documents is:

1. Get entire document
2. Inflate serialized data
3. Walk data structure

This requires fetching all of the data in the document, and walking over it in an often inefficient (or random) way.

By adding additional querying capabilities over JSON document, we can leverage a new and improved pattern:

1. Ask for data you need
2. Get only the data you need
3. Still need to inflate

These JSON-like documents are stored as byte array for maximum flexibility and efficiency, in a way that supports these queries.

## The queries

The syntax to query fields within these JSON documents is designed to only request the specific data a user needs, and returns only that data.

A value of single field can be accessed as follows:

```go
Query: .foo

{"foo": 3, "bar": 4}
   ↑
Key foo

Result: 3
```

Multiple fields can be accessed in a similar way:

```go
Query:  .foo|bar

{"foo":3, "bar":4, "baz":5}
   ↑        ↑
Key foo  Key bar

Result: {"foo":3, "bar":4}
```

More complex querying capabilities include fully recursive nesting and array slicing:

```go
Query:  .m[] .k1 [0]

{"foo": {"k1": [3,4]},
 "bar": {"k1": [5,6]}}
                 ↑
Index 0 of each array value in k1

Result: {"foo": 3, "bar": 5}
```

## Performance

Netflix operates at massive scale. For this reason their query syntax is not only designed to be flexible, but to work in a way that leverages the internal format of the document to efficiently return data. Offsets and data lengths are included in header fields for composite types (arrays and maps) which allows constant time access for array slicing.

Below is a diagram that depicts the anatomy of the resulting byte-array that a JSON array is serialized into, including a type field, the header information mentioned above, followed by the data itself.

Formatting example - *image no longer available*

For map types, keys are stored as interned strings. This means that each string-represented key is assigned an integer which prevents the issue of storing duplicate copies of potentially long string keys. For example, if there's a key named "Orange Is the New Black", this would be assigned an ID such as "1", and each subsequent reference to that key is stored as "1" in the database and translated back into the original string during deserialization.

Additionally, keys and their associated offsets are stored in sorted order. This means for a given key, binary search can be used to efficiently lookup the desired value. Scott's talk included several benchmark results that verify the performance assumptions (I've decided to spare the details of the benchmark tests here, but those who are curious can check out [Scott's slides for more](https://www.slideshare.net/ScottMansfield3/creating-a-custom-serialization-format-gophercon-2017)).

## Key takeaways

Now that I have a better idea behind the motivations and design decisions that influenced Netflix's new serialization format, an obvious question arises: was the design of a new, custom format worth it?

It's difficult to answer this without more data surrounding the practical applications of this format in Netflix's infrastructure. Scott's talk served as a satisfactory explanation for the necessity of opting to roll your own protocol over choosing a 3rd party framework.

One of the key takeaways of Scott's talk for me was not necessarily a recipe for constructing a well-designed serialization format. Instead, the option to develop custom infrastructure that is well-suited to your requirements should not be immediately dismissed because an existing framework exists, no matter how low-level. Understanding the underlying details can inform an potentially better solution, one that can be verified by measuring results.
