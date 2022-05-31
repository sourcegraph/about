---
title: "Strange Loop 2019 - Explainable AI: the apex of human and machine learning"
description: "Black Box AI technologies like Deep Learning have seen great success in domains like ad delivery, speech recognition, and image classification; and have even defeated the world's best human players in Go, Starcraft, and DOTA. As a result, adoption of these technologies has skyrocketed. But as employment of Black Box AI increases in safety-intensive and scientific domains, we are learning hard lessons about their limitations: they go wrong unexpectedly and are difficult to diagnose."
authors:
  - name: Simeon Adebola
    url: https://twitter.com/funmilore
publishDate: 2019-09-14T00:00-13:30
tags: [
  strange-loop
]
slug: strange-loop-2019-explainable-ai-the-apex-of-human-and-machine-learning
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Baxter Eaves</span>
        <a href="https://github.com/BaxterEaves" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Black Box AI technologies like Deep Learning have seen great success in domains like ad delivery, speech recognition, and image classification; and have even defeated the world's best human players in Go, Starcraft, and DOTA. As a result, adoption of these technologies has skyrocketed. But as employment of Black Box AI increases in safety-intensive and scientific domains, we are learning hard lessons about their limitations: they go wrong unexpectedly and are difficult to diagnose.

---


This talk is about safe AI

AI has become ubiquitous in our lives.

It takes on tasks : Ads, Recommendations, Image processing and Games. Common features of these tasks are that data are nearly free and unlimited , action takes priority over learning, and there is little/no cost of failure. AI used for these is  inefﬁcient(requires incredible amounts of data), opaque (hides its knowledge away), and brittle (can fail unexpectedly and catastrophically).

For tasks in Biotech, Public Health, Agriculture and Defense/Intelligence , the common features are that data are scarce and expensive, action is dependent on learning, and failure costs lives.

**However,  AI meant for benign tasks is being adapted for high risk tasks.**

Baxter gave recent examples from Uber's self driving car and IBM Watson

![Uber halts self driving tests after pedestrian killed in Arizona](/blog/strange-loop-2019/uber.jpg)
![IBM watson supercomputer recommended unsafe and incorrect cancer treatments](/blog/strange-loop-2019/ibm.jpg)



How do we make Ai safe when safety matters?

One possible way is Explainable AI (XAI)

![Xai](/blog/strange-loop-2019/xai.jpg)
![Darpa](/blog/strange-loop-2019/darpa.jpg)

There are questions we need to be ask the Ai.

So we need an Explanation Interface

Explainable AI has been around long before it became a buzz word. Baxter shows a Nomogram image from years before. Another example are Expert systems. They became popular starting from the 80s.

![Nomogram](/blog/strange-loop-2019/nomogram.jpg)
![Expert systems](/blog/strange-loop-2019/expert.jpg)

**Recent examples of explainable AI**:  Most of the work has been in deep learning focused on image classification. Baxter discussed examples from recent papers. There are also approaches using heat maps. We can also do the same thing with text

![Deep](/blog/strange-loop-2019/deep.jpg)


XAI work is mostly focused on explanation but there are problems with explanation.

1. XAI is (mostly) built for computer scientists by computer scientists . Most explanation is written by computer scientists
![inmates](/blog/strange-loop-2019/inmates.jpg)

![miller](/blog/strange-loop-2019/miller.jpg)

1. Explanation does not actually solve the problem. Explanations don’t prevent problems, they offer excuses as to why they happen
1. Explanation is not really knowledge.
interpretable > explainable
1. Explanation makes 'inappropriate trust' worse.
However people are biased to trust. Because more trust means faster learning. However DNNs are brittle and unpredictable and we really should not be trusting them.

How do we fix these problems?
Baxter says he does not know how to solve all of the problems but we can solve most by : **Embed machine knowledge into the human mind**

How do we do this? Teach!

Baxter talks about the Rectangle Game and another experiment teaching image categories

![pedagogy](/blog/strange-loop-2019/pedagogy.jpg)

We did have some success in transferring some knowledge that was machine knowledge in to humans.

The problem with this is that its's is recursive maths and teaching is harder than learning.

## This sort of teaching helps people recover machine knowledge but only if the knowledge is a psychologically valid format

- There is scaling work to do
- Baxter wraps up
- XAI encompasses more than explanation, it is about making things safer. We need to focus more on interpretable models
- There is still a long way to go.
- DARPA alone has dedicated 1. illion Dollars to work in this area.

## Q&A

1. **How do with XAI if it is performing worse than non-explainable AI?**<br/>
There have been ways of adding uncertainty to Deep Learning. Sometimes it might be better to just admit you do not know that pretend you use. Of course it is on a case-by case basis.<br/><br/>
1. **Since you said uncertainty is quantifiable, is there any more work being done in AI in terms of making it more resilient, more fragile?**<br/>
I think it is more abort become more aware of the uncertainty and know what to do.<br/><br/>
1. **Are there other methods to achieve safe AI apart from XAI?**<br/>
 I think one other method is responsibility. However that has ethical considerations.<br/><br/>
1. **Is there any research into having AI introspect about its decision and use that instead of having humans introspect based on learning about how the AI work?**<br/>
Baxter discussed an upcoming DARPA project that might be focusing on that.<br/><br/>
1. **Is part of the problem that we are not treating this as the statistical process that they are?**<br/>
You can get uncertainty from a neural network but it does not really make sense. We need to have systems that there uncertainty kind of maps what is going on in the world.
