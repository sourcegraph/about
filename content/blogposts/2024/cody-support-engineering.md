---
title: "Cody: The AI-powered tool helping support engineers unblock themselves"
authors:
  - name: Noah Berman
    url: https://handbook.sourcegraph.com/team/#noah-berman
publishDate: 2024-03-29T10:00-01:00
description: "Cody empowers support engineers to unblock themselves and solve complex issues autonomously. By leveraging Cody's capabilities for documentation retrieval, error detection, script writing, and infrastructure explanation."
tags: [blog]
slug: "cody-the-ai-powered-tool-helping-support-engineers-unblock-themselves"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/helping-support-engineers-unblock-themselves/image_og.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/helping-support-engineers-unblock-themselves/image_og.png
--- 

One of the [core values](https://handbook.sourcegraph.com/company-info-and-process/values/) at Sourcegraph is **Dev Love**, or ensuring that our company’s operations are centered around the experience and enablement of anyone who codes. The Sourcegraph team, similar to many other tech organizations, consists of individuals with diverse levels of engagement with coding. As we build [Cody](https://sourcegraph.com/cody) into the most effective AI assistant for developer enablement, we constantly improve its utility for all coding roles within a tech organization.

One of those roles we focus on improving is Support Engineering (sometimes called Customer / Sales / Solutions / Forward Deployed Engineering). Tasked more specifically with addressing customers' current product use instead of developing new features, these teams provide subject matter expertise, tech support, integration design, and more. They achieve these varied functions by maintaining domain knowledge and working closely with code covering the entire product stack…

…sounds like a perfect use for Cody!

In this post, we will share examples showcasing how Cody has significantly boosted the productivity and effectiveness of Sourcegraph’s Support Engineering team. We aim to illustrate how, when combined with the Sourcegraph code intelligence platform, Cody can similarly enhance the efficiency of your customer-facing engineering teams.

_You can demo these Cody prompts by creating a free account at sourcegraph.com. All Cody chats asked within the Sourcegraph mono-repo using the Visual Studio Code Cody extension._


<Video
  source={{ 
    mp4: 'blog/helping-support-engineers-unblock-themselves/image_001'
  }}
  loop={true}
/>

## Read Documentation

_Does Sourcegraph monitor persistent volumes for blobstore?_


![](https://storage.googleapis.com/sourcegraph-assets/blog/helping-support-engineers-unblock-themselves/image_002.png)


One of the Support team's primary responsibilities involves efficiently managing a vast array of product documentation, and Cody adeptly retrieves such context-sensitive information. As an indexed repository in our internal Sourcegraph instance, the public [Sourcegraph docs repository](https://github.com/sourcegraph/docs) is frequently a source of the [context](https://sourcegraph.com/docs/cody/core-concepts/context) we provide to Cody.

Cody provides a great sanity check for our internal knowledge-sharing processes. If a core product feature or concept isn’t available to Cody when prompted, it’s likely not sufficiently discoverable. 

## Find Errors

_Find all instances of an http.Redirect() being invoked and explain what each one does._


![](https://storage.googleapis.com/sourcegraph-assets/blog/helping-support-engineers-unblock-themselves/image_003.png)


Many of the Support team’s workflows start with a broad check with Cody for clues on where to start looking for a bug. Cody’s capacity for an intelligent [code search](https://sourcegraph.com/docs/code-search) bypasses tedious trial-and-error keyword searches for potential symbols or unknown method invocations, which can save precious time uncovering the root of the issue. 

## Writing scripts

_Create a script to find the number of errored code intelligence jobs._


![](https://storage.googleapis.com/sourcegraph-assets/blog/helping-support-engineers-unblock-themselves/image004.png)


Some of our more complex tasks may require automation, and writing these jobs is an excellent Cody use case. With the proper prompt engineering, Cody can write automated functions that can handle complex data manipulation and multi-step database retrieval flows and automate repetitive tasks within a specific domain space. With the proper context into our platform, Cody has made client-tailored solution engineering at Sourcegraph significantly faster. 

## Explain Platform Infrastructure

_Assuming Sourcegraph is deployed via Docker compose, what is the difference between Redis cache and Redis store containers?_


![](https://storage.googleapis.com/sourcegraph-assets/blog/helping-support-engineers-unblock-themselves/image_005.png)


One of the most valued skills for the Sourcegraph Support team is the ability to unblock ourselves. Using Cody’s blend of general DevOps knowledge and context in our platform documentation and configuration settings makes quick answers to somewhat nuanced questions more accessible than ever before. 

---

Thanks to [Justin Dorfman](https://handbook.sourcegraph.com/team/#justin-dorfman) for his help with this post.