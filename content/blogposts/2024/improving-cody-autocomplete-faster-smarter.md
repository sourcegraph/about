---
title: "Improving Cody Autocomplete: Faster and Smarter"
authors:
  - name: Chris Sev
    url: https://twitter.com/chris__sev
publishDate: 2024-08-21T10:00-01:00
description: "We're excited to announce a new release of Cody that includes faster autocomplete and smarter code suggestions."
tags: [blog]
slug: "improving-cody-autocomplete-faster-smarter"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/faster-autocomplete/autocomplete-cover.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/faster-autocomplete/autocomplete-cover.png
--- 

We just wrapped up our Faster Autocomplete project and now Cody is faster and smarter for more of your coding tasks. The big changes that happened under the hood are that we switched from Starcoder to DeepSeek v2 for our autocomplete model leading to improvements across the board.

Cody is built on model interoperability and promises to always provide the best, latest-gen models for every given task to help speed up devs and reduce toil. This update delivers on that promise by bringing a cutting-edge model to autocomplete, speeding up completions while increasing quality and accuracy.

The big benefits are a **350ms reduction in autocomplete speeds along with a 58% increase in the number of accepted characters per user**. Let’s dive into some numbers and see how these changes are going to help Cody help you write code faster.

## Speed Boost: 350ms Faster

Cody’s response time is down by a whopping 350ms. This means that our P75 latency (the time it takes for 75% of completions to appear) have decreased by 350ms for single-line completions, which represents 87% of all suggestions. Single-line completions have gone from 900ms to 690ms.

- Single line: 900ms -> 690ms
- 2-5 lines: 1100ms -> 850ms
- 6-10 lines: 1450ms -> 1100ms

<Video
  source={{
    mp4: 'blog/faster-autocomplete/autocomplete%20faster'
  }}
  controls={true}
  loop={true}
  title="Faster autocomplete"
/>

The speed improvements are gained not only from switching to DeepSeek v2, but from by adding two features: Hot Streak and Smart Throttle.

### Implementing Hot Streak

Hot Streak is a client-side optimization technique implemented in Cody to enhance autocomplete efficiency and responsiveness. It works by caching subsequent completion lines, anticipating that a user might continue with a particular coding pattern.

Unlike traditional caching that might only store single-line completions, Hot Streak proactively caches multiple lines of potential completions. This allows for faster suggestion delivery of multi-line code snippets without the need to make additional server requests.

The implementation of Hot Streak contributed significantly to Cody's performance improvements. While not explicitly quantified in isolation, it was part of the improvements that led to:

1. A reduction in P75 latency by approximately 110ms across all line-count groups.
2. A 24% increase in the number of suggested characters.
3. A 10% increase in the total number of accepted characters, indicating that Cody wrote more code for users.
4. Approximately 35% increase in completions served from cache (in combination with Smart Throttle prefetching).

<Figure 
    src="https://storage.googleapis.com/sourcegraph-assets/blog/faster-autocomplete/autocomplete-hotstreak.png"
    caption="Faster completions served from cache"
/>

### Implementing Smart Throttle

Smart Throttle is a client-side optimization technique implemented in Cody to improve autocomplete responsiveness. It works by intelligently reducing the debounce interval between user input and completion requests.

Unlike traditional fixed debounce timers, Smart Throttle dynamically adjusts its timing based on typing patterns and context. This allows for faster suggestion delivery without overwhelming the server with excessive requests.

The implementation of Smart Throttle contributed significantly to Cody's performance improvements. It helped reduce overall client-side latency by about 110ms across all line-count groups. Additionally, it played a role in **increasing the number of suggested characters by 24% and boosting cache utilization by 35%**.

## Smarter Suggestions: 58% More Accepted Code

Not only is Cody faster, but it's also getting better at suggesting code you actually want to use. The DeepSeek v2 model has significantly improved the quality of suggestions. 

We’ve seen a **58% increase** in the number of accepted characters per user. This means that the suggestions provided by Cody are more likely to be relevant and accepted. In practical terms, if you're writing a 1000-line program, Cody is now potentially writing 580 of those lines for you, up from about 367 before.

- Suggested characters per user increased from 1,600 to 2,500.
- Accepted characters per user increased from 600 to 950.

Here’s our analytics tracking suggested characters and accepted characters:

<Figure 
    src="https://storage.googleapis.com/sourcegraph-assets/blog/faster-autocomplete/autocomplete-characters.png"
    caption="Suggested and accepted characters per user"
/>

## Better Multi-Line Completions

Our A/B testing showed significant improvements for multi-line completions, thanks to DeepSeek v2's enhanced ability to understand context:

For 2-5 line completions:

### Completion Acceptance Rate (CAR) improved by 4.24%

CAR is the percentage of suggested completions that are accepted by the user. It's calculated by dividing the number of accepted completions by the total number of suggested completions. 

An improvement of 4.24% means that users are accepting a higher proportion of Cody’s multi-line suggestions.

### 30-second Persistence Rate improved by 2.53%

A 30-second Persistence Rate specifically looks at whether the accepted completion is still present in the code 30 seconds after it was inserted. An improvement of 2.53% suggests that more of Cody's multi-line completions are being kept by users.

## Improvements for Cody Enterprise Users

For our Cody Enterprise users, we've also made significant improvements, though the exact numbers differ slightly from our PLG users due to the unique requirements of enterprise environments. 

The current improvements are from algorithmic updates and client-side improvements:

- Latency reduction
- Increase in code written
- Improvements in caching
- Changes in CAR and wCAR

More significant improvements are coming shortly in the coming weeks when enterprise customers are migrated to DeepSeek and enable Hot Streak and Smart Throttle.

### Speed and Efficiency

P75 latency decreased by 200ms for 87% of completions suggested. There has also been a 38% increase in completions served from the client cache. These improvements mean less waiting time for suggestions, allowing development teams to maintain their coding flow and boost overall productivity.

### More Helpful Suggestions

25% more code is written by Cody's improved autocomplete and accepted characters per user increased from 600 to 750.

### Coming Soon for Enterprise

We're working on bringing enterprise performance more in line with PLG improvements. Here's what's coming:

- Migration to our recommended autocomplete provider/model combo
- Enabling Hot Streak and Smart Throttle features by default

These upcoming changes will further boost team productivity and code quality for our enterprise users.

## Wrapping Up

These improvements, powered by our switch to DeepSeek v2 and our custom optimizations, represent real time saved and frustration avoided in your daily coding life. Cody's getting faster and smarter, all to help you write better code more quickly.

We'd love to hear how these changes are affecting your work. Are you noticing the speed improvements? Finding Cody's suggestions more useful? Drop us a line and let us know!