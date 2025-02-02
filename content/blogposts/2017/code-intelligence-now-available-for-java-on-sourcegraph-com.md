---
title: 'Code Intelligence now available for Java on Sourcegraph.com'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2017-03-01T00:00-07:00
tags: [
  "blog"
]
slug: code-intelligence-now-available-for-java-on-sourcegraph-com
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---



Today, we're enabling Code Intelligence on Sourcegraph.com for Java projects that use Maven. Our preview release of Java means you can jump to definition, find references, and hover over for docs on many of your favorite Java repositories — all without configuring a single editor plugin or cloning a single line of code to your local machine. Try it now on these repositories:

*   [Guava](https://sourcegraph.com/github.com/google/guava@379757e3b1c22fef4b19181e404c6abb7ad58d50/-/blob/guava/src/com/google/common/collect/ImmutableList.java#L80:38-80:40)
*   [Apache Commons](https://sourcegraph.com/github.com/apache/commons-io@8b9fe1b01ce21003f6a6ff8391ad2a64f4d21030/-/blob/src/main/java/org/apache/commons/io/FilenameUtils.java#L82:14-82:27)
*   [Dropwizard](https://sourcegraph.com/github.com/dropwizard/dropwizard@857cb187e6f882cb2d05b6ba8291a99861165b81/-/blob/dropwizard-example/src/main/java/com/example/helloworld/HelloWorldApplication.java#L1:1)
*   [JUnit](https://sourcegraph.com/github.com/junit-team/junit@cebbf5e15725b4dc247ac0557f6fa63f475b15af/-/blob/src/main/java/org/junit/Test.java#L66:19-66:23)
*   [Java Design Patterns](https://sourcegraph.com/github.com/iluwatar/java-design-patterns@cca4760f6990886c0dd47dea93a6c0d359917073/-/blob/visitor/src/main/java/com/iluwatar/visitor/Commander.java#L30:14-30:23)
*   [OkHttp](https://sourcegraph.com/github.com/square/okhttp@89621df62dda5cf73726ce2d5410c82c6f760f00/-/blob/okhttp/src/main/java/okhttp3/OkHttpClient.java#L121:14-121:26)
*   [Retrofit](https://sourcegraph.com/github.com/square/retrofit@39fcdb46e07f2f14319a4031d86bf8f3dbd1d405/-/blob/retrofit/src/main/java/retrofit2/Retrofit.java#L59:20-59:28)
*   [Twilio Java Client](https://sourcegraph.com/github.com/twilio/twilio-java@34de1d5789022a8b1332464c689dd6ef2a2b597f/-/blob/src/main/java/com/twilio/Twilio.java#L1:1)

This is a preview, so coverage isn't perfect. Java repositories with `pom.xml` that build with `mvn install` (without additional steps) should now have Code Intelligence on Sourcegraph. Support is coming soon for Android and Gradle projects. We will be incredibly responsive to feedback, so please send us bug reports to [hi@sourcegraph.com](mailto:hi@sourcegraph.com).

#### Code Intelligence superpowers

Tons of developers already use Sourcegraph.com for Go and TypeScript, and all the same features are now available for Java. You can now hop across repository boundaries in Java code and find global usage examples drawn from other projects.

Cross-repository jump-to-definition lets you dive right into dependency source code without the context switch of checking out and building the dependency source repository:

[![](https://cdn-images-1.medium.com/max/1000/1*X-QMOEV8WaL-wcgJ9-SLDQ.png)](https://sourcegraph.com/github.com/square/okhttp@89621df62dda5cf73726ce2d5410c82c6f760f00/-/blob/okhttp-tests/src/main/java/okhttp3/AutobahnTester.java#L24:13-24:23)Seamless cross-repo jump-to-def

Global usage examples show you how other repositories use a given class or method. They let you learn from the best examples in open source. And on private code, they let you see how code in other repositories (e.g., microservices) relies on the code you're currently viewing.

[![](https://cdn-images-1.medium.com/max/1000/1*i2SxWzW9rKWM6C9DzYjJjQ.png)](https://sourcegraph.com/github.com/junit-team/junit@cebbf5e15725b4dc247ac0557f6fa63f475b15af/-/blob/src/main/java/org/junit/Test.java#L66:19-66:23)Global usage examples

#### Code Intelligence in your GitHub pull requests

Java Code Intelligence on Maven-based projects is now also available in the Sourcegraph [GitHub Chrome extension](https://docs.sourcegraph.com/integration/browser_extension?hl=en). That means hover tooltips and jump-to-definition in GitHub pull requests and the code browser:

[![](https://cdn-images-1.medium.com/max/800/1*F-6teGnQ7HMFjAkSKwtf8Q.png)](https://docs.sourcegraph.com/integration/browser_extension)Doc tooltips and jump-to-definition on GitHub

#### Available in the cloud and on-premises

Sourcegraph will index any open source or authorized private repository hosted on GitHub.com. For enterprise customers, we also support GitHub Enterprise, Bitbucket, GitLab, and Phabricator. [Read more about our enterprise offering here](https://sourcegraph.com/pricing) or sign up for free on [Sourcegraph.com](https://sourcegraph.com).

[![](https://cdn-images-1.medium.com/max/800/1*FjQjUq7Pvoy-0dKvR4fJ5Q.png)](https://sourcegraph.com/login)

#### About the author

_Beyang Liu is the CTO and co-founder of Sourcegraph. Beyang studied Computer Science at Stanford, where he published research in probabilistic graphical models and computer vision at the Stanford AI Lab. You can chat with Beyang on Twitter [@beyang](https://twitter.com/beyang) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._
