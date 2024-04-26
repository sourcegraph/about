---
title: "Enhancing OpenRCT2 Performance: A Journey with Cody and SIMD"
authors:
  - name: Michał Janiszewski
    url: https://github.com/janisozaur
  
publishDate: 2024-04-25T10:00-07:00
description: "Learn how Michał Janiszewski used SIMD to optimize the OpenRCT2 project. With the help of Cody, Michał was able to achieve a 5% performance improvement."
tags: [blog, guest-post]
slug: "enhancing-openrct2-performance-a-journey-cody-simd"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/enhancing-openrct2-performance-a-journey-cody-simd-og.jpg
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/enhancing-openrct2-performance-a-journey-cody-simd-og.jpg
---

<Alert type="secondary">This is a guest blog post from our community. <a href="https://discord.com/servers/sourcegraph-969688426372825169" target="_blank">Join our Discord</a> to meet the author and connect with other developers passionate about Code Search and AI!</Alert>

SIMD, Single Instruction Multiple Data, is a way of speeding up computationally intensive tasks by applying the same operation to multiple data items in one go. For this to be applicable, some requirements need to be met, such as data layout or access patterns.

In OpenRCT2 we care a lot about performance and there’s long been a piece of code I suspected could be improved by applying the SIMD approach. I’ve been putting it off due to having to write a lot of code that probably wouldn’t make it to the repository, but I found Cody doesn’t complain about any of that and it dutifully came to help.

The code in question is used for arranging paint order and implements checking of bounding box intersections. At a single click of `Explain Code`, Cody explains in detail the responsibilities of this function:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_001.png"
/>

Before we start changing anything, let's generate some tests. With the function still highlighted, that's just one more click on `Generate Unit Tests`.

Cody explained it didn’t know what testing framework I used and assumed (correctly, as many C++ projects do) that I use [GoogleTest](https://google.github.io/googletest/). It then proceeded to generate test cases for all available scenarios. After a minor cleanup from the comments left in the code, I had my tests ready. The template was correctly recognized and had tests generated. The inclusion of a `.cpp` file instead of `.h` surprised me, but it was the correct approach for testing a `static` function without having to remove the modifier.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_002.png"
/>

Helpful instructions on how to set up the tests with my project are easily provided

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_003.png"
  caption="Prompt: How do I compile tests in TestPaint.cpp"
/>

The first rule of performance tuning is you need to have data to verify your assumptions and measure any gains or losses. Using the prompt `Please write Google Benchmark for highlighted code` opened a new file filled with a simple benchmark I could use as a starting point.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_004.png"
  caption="Prompt: Please write Google Benchmark for highlighted code"
/>

With all the tests and benchmarks at the ready, let’s actually apply some SIMD. `Rewrite selected function with x86 SIMD intrinsics` implemented what I long had in mind.

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_005.png"
/>

Cody delivers:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_006.png"
/>

With tests passing, let’s see what kind of performance improvements this delivers:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_007.png"
/>

That doesn’t look quite right. 3x slower than original code. Let’s have Cody explain what’s wrong with this approach: `Can you explain why the highlighted SIMD code is slower than its scalar equivalent in function CheckBoundingBoxScalar?`

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_008.png"
/>

OK, that’s a lot of useful information. It seems the code isn’t bottlenecked on the ALU (arithmetic logic unit), but on memory instead. But then again, Cody mentioned the prefetch effectiveness depends on various factors and I’ve decided to test if moving the prefetch to a place earlier in the paint ordering loop would improve performance.

Using another benchmark implemented earlier and a known performance-sensitive map, the code with no prefetch results are

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_009.png"
/>

And with prefetch implemented:

<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/enhancing-openrct2-performance-a-journey-cody-simd/image_010.png"
/>

A ~5% win, for something that initially seemed 3x slower! I’m happy with that result. Cody helped me finally find the bottleneck and implement a decent improvement. You can [check the merged PR here](https://github.com/OpenRCT2/OpenRCT2/pull/21894).

## Conclusion

SIMD optimizations can be a powerful tool for improving performance, but it's crucial to understand the underlying bottlenecks and test assumptions thoroughly. With the assistance of AI tools like Cody, developers can streamline the process of writing tests, benchmarks, and optimized code, ultimately leading to better performance gains.

---

Cody can help you code faster, improve your productivity, and unlock new knowledge. Give [Cody](https://sourcegraph.com/cody) a try today!
