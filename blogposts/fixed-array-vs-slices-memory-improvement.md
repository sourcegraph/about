---
title: TITLE
description: DESCRIPTION (Displayed in Google Search Snippets)
author: AUTHOR
publishDate: yyyy-mm-ddT00:00-07:00
tags: [
  blog
]
slug: blogpost-slug-here
heroImage: /sourcegraph-mark.png
published: false
---

# Fixed array size vs slices for improved memory management in Go

WIP based off Keegan's post to Slack.

Fun fact. `[]int32` has size 24, `[2]int32` has size 8. We use the former in our search results struct for recording offsets on a line, which means it is one of the most common things in memory in the frontend and searcher. So just pushed a simple change which should have a nice change in our frontend memory usage. Came across this while refactoring for OSS.

```go
package main

import (
	"fmt"
	"unsafe"
)

type Location struct {
	offset int32
	line int32
}

func main() {
	a := []int32{1,2}
	fmt.Println("[]int32{}  ", unsafe.Sizeof(a))

	b := [2]int32{}
	fmt.Println("[2]int32{} ", unsafe.Sizeof(b))

	c := Location{}
	fmt.Println("Location{} ", unsafe.Sizeof(c))

}
```

Comment
This looks like a 3x improvement but it's more than that.
It's more like 4x:
- You're paying the price of the slice data strcuture becore any data is even used.
 a = 24
	data in array = 8. Total is 32 (a+b)
Diagram
