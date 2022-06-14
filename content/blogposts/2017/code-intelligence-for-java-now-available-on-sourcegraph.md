---
title: 'Code Intelligence for Java now available on Sourcegraph'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-04-11T00:00-07:00
tags: [
  "blog"
]
slug: code-intelligence-for-java-now-available-on-sourcegraph
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



Today, we announce general availability for Java on Sourcegraph. If you write Java, this means that you can now use Sourcegraph to:

*   Explore code without losing your place in your editor
*   Get IDE-like functionality to your code review tool
*   Learn from usage examples drawn from across the open source world
*   Have more efficient code discussions by linking directly to the code in question
*   Make every piece of code easily searchable and accessible for every member of your team

Every feature mentioned in this post is available now for Java on Sourcegraph.com and Sourcegraph Enterprise. Scroll down for the detailed feature list.

[![](https://cdn-images-1.medium.com/max/1000/1*rSP9kiAtj1vksGMCKFb8BQ.png)](https://sourcegraph.com/github.com/Sberned/kafka-logback@582266a6ad00fd878315f4f3ff983900f04e7c1f/-/blob/src/test/java/ru/sberned/kafkalogback/KafkaAppenderTest.java#L115:28-115:38)Seamless, zero-config code exploration in your web browser. An easy-to-use HUD for code understanding.

### Detailed feature list

(Refer to the screenshot above)

1.  Documentation tooltips
2.  Jump to definition
3.  Find references
4.  External usage examples
5.  Symbol search
6.  Text search
7.  Authorship (Git blame)

#### Performance

Sourcegraph works within seconds on any revision of code and scales to large repositories. It even works for newly pushed revisions such as those submitted for code review.

[![](https://cdn-images-1.medium.com/max/1000/1*qgqyqzpJlLKgacUx-5QGwA.png)](https://docs.sourcegraph.com/integration/browser_extension?hl=en)Sourcegraph integrates with code review tools like GitHub pull requests.

#### Code review integration

Sourcegraph integrates with code review tools including:

*   GitHub pull requests (GitHub.com, GitHub Enterprise)
*   Phabricator (Enterprise-only)

If your favorite code review tool is not yet supported, please let us know!

#### Have more fruitful conversations around code

Because Sourcegraph is just a web app, you can link to any location in your codebase. Our users have found this useful as a starting point for **code discussions**. Sharing a link is easy and doesn't require the person on the other end to go through the annoying exercise of opening up a new editor or stashing their work-in-progress changes to check out your branch.

This addresses a critical communication bottleneck in software development and makes it easier to disseminate knowledge across your team. (Hint hint: if you want to give the management a good reason to try Sourcegraph, we’ve found “addresses a critical communication bottleneck” and “disseminate knowledge across our team” to be persuasive lines). Here’s how it looks in action:

![1*6Pz64YShQ4WJlEevH6H Pw](//images.contentful.com/le3mxztn6yoo/5Q82DtqkSIyo2QYIMCsyYW/94add6469dc8833e55d5676874b5005c/1_6Pz64YShQ4WJlEevH6H_Pw.png)

Using Sourcegraph, I was easily able to identify the author of a piece of code and start a conversation in chat by linking him directly to the code in question.

#### Link together your team’s code

Do you rely heavily on open source libraries? Or does your team have multiple microservices versioned in separate repositories? Sourcegraph lets you trace state changes and control flow logic across repository boundaries:

[![](https://cdn-images-1.medium.com/max/1000/1*utBisaCtaS1qtRPtHwtXpw.png)](https://sourcegraph.com/github.com/Sberned/kafka-logback@582266a6ad00fd878315f4f3ff983900f04e7c1f/-/blob/src/test/java/ru/sberned/kafkalogback/KafkaAppenderTest.java#L118:21-118:29)Sourcegraph’s jump-to-definition works even if the definition is in a separate repository or an open source library. Because it’s all on the web, there's no need to check out code to your local machine.

#### Supported Java project types

Sourcegraph now supports the following types of Java repositories:

*   Projects built with **Maven**
*   Projects built with **Gradle**
*   **Android** applications and libraries
*   Any combination of the above

![1*wWLDvGcSf4L6huAxbPYQcw](//images.contentful.com/le3mxztn6yoo/MZ0YbODtKuYSOIoKKuiws/9c0c79f42a2c4a1b8a929135bd3667aa/1_wWLDvGcSf4L6huAxbPYQcw.png)

We offer support for additional build systems to enterprise customers. Please email hi@sourcegraph.com for more info.

**Programmer’s note:** we support the common case for the build systems above, but now and then we encounter a corner case that isn’t yet supported. If you try out Sourcegraph on your repository and find jump-to-definition or hover tooltips do not work, please let us know via the “Feedback” button at the bottom of the screen. We are incredibly responsive.

![1*eDAtE4xe-dQ24UqMqoiVeg](//images.contentful.com/le3mxztn6yoo/3u49lC2kaIIa0MoQYw6uoo/18ccea0ee192a5208a8fb60b6cfa7a4b/1_eDAtE4xe-dQ24UqMqoiVeg.png)

### Try it out now

See Sourcegraph in action now on some popular open source Java projects:

*   [Mockito](https://sourcegraph.com/github.com/mockito/mockito@ccd5e85a0c60e7f3ae10ac86db1e5110966e9d41/-/blob/src/main/java/org/mockito/stubbing/OngoingStubbing.java#L48:24-48:34)
*   [Butter Knife](https://sourcegraph.com/github.com/JakeWharton/butterknife@acf8957801c66d4aaa75084fc0c5c28ba84d3918/-/blob/butterknife-compiler/src/main/java/butterknife/compiler/ButterKnifeProcessor.java#L143:17-143:25)
*   [OkHttp](https://sourcegraph.com/github.com/square/okhttp@2fa94d3f356a7a9e33456bac4ab345ebef9ae346/-/blob/okhttp/src/main/java/okhttp3/Request.java#L27:20-27:27)
*   [Android Universal Image Loader](https://sourcegraph.com/github.com/nostra13/Android-Universal-Image-Loader@4c728792d73e964f6d8501f742cda57dd56731c6/-/blob/library/src/main/java/com/nostra13/universalimageloader/core/ImageLoader.java#L49:14-49:25)
*   [Dropwizard](https://sourcegraph.com/github.com/dropwizard/dropwizard@04490cb148003b011efe5fa045e9af2811b8a764/-/blob/dropwizard-core/src/main/java/io/dropwizard/Application.java#L24:23-24:34)

Or you can test it out on your [private repositories on GitHub.com](https://sourcegraph.com/pricing). We also do [on-premises deployments for enterprise software teams](https://sourcegraph.com/pricing). Contact us for more info!

### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
