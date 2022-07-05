---
title: 'Precise Code Intelligence for Java, Scala, and Kotlin'
description: 'We are excited to announce that Sourcegraph now supports precise Code Intelligence for Java, Scala, and Kotlin, enabling compiler-accurate “Go to definition” and “Find references” within a Git repository and all transitive dependencies of your codebase.'
authors:
  - name: Ólafur Páll Geirsson
publishDate: 2021-12-20T00:00-07:00
tags: [blog]
slug: java-scala-kotlin-code-intelligence
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://about.sourcegraph.com/blog/java-cross-language-example.png
published: true
---

We are excited to announce that Sourcegraph now supports precise Code Intelligence for Java, Scala, and Kotlin.
More precisely, this means you can get compiler-accurate “Go to definition” and “Find references” within a Git repository and all transitive dependencies of your codebase. Dependencies can come from any Maven repository, such as Maven Central, Artifactory or Sonatype Nexus. The versions Java 8, Java 11, Java 17, Scala 2, Scala 3, and Kotlin 1.x are supported.

Cross-repository navigation on Sourcegraph makes it possible to find usages of symbols across thousands of repositories–unlike a local IDE that only shows usages in your own project. For example, in the image below, we find usages of the `java.util.Iterator.forEachRemaining()` method in the repositories apache/kafka and quarkus/quarkus ([try it yourself](https://sourcegraph.com/jdk@v11/-/blob/java.base/java/util/Iterator.java?L130:18#tab=references)).

![](/blog/java-cross-repo-example.png)

Cross-language navigation between Java, Scala, and Kotlin languages works as you would expect: You can find Kotlin or Scala usages from Java code and vice versa. For example, below we find usages of `java.util.concurrent.atomic.AtomicBoolean.get()` in a Kotlin file from the kotest/kotest repo and get Scala examples in the apache/kafka repository ([try it yourself](https://sourcegraph.com/github.com/kotest/kotest@7ccb6ef/-/blob/kotest-assertions/kotest-assertions-core/src/jvmMain/kotlin/io/kotest/matchers/atomic/AtomicBooleanMatchers.kt?L77:40#tab=references)).

![](/blog/java-cross-language-example.png)

For Gradle, Maven, and sbt users, the easiest way to get started is to run the `sourcegraph/lsif-java` Docker container.

```shell
docker run -v $(pwd):/home/gradle sourcegraph/lsif-java lsif-java index
src lsif upload
```

For optimal performance, we recommend using the Java-based launcher with a pre-populated build cache to minimize the overhead from downloading dependencies. Check out the [lsif-java website](https://sourcegraph.github.io/lsif-java) for more detailed installation instructions. Note that it’s possible to integrate lsif-java with other build tools like Bazel, but doing so requires manual configuration.

Don’t hesitate to open an issue or start a discussion at [sourcegraph/lsif-java](https://github.com/sourcegraph/lsif-java/) to get help with using lsif-java.

For now, you need to manually configure your CI to run the indexing step to benefit from precise Code Intelligence for Java, Scala, and Kotlin. We recommend running the indexing step on every commit so that you get precise Code Intelligence even during code review. For large codebases, it might make sense to index less frequently. We’re working on a new auto-indexing system to reduce the need for manual CI configuration.

This milestone is only the beginning of expanding our robust Code Intelligence support for JVM languages. In the near future, we plan to add support for “Find implementations” to navigate class hierarchies. We also plan to support Protobuf so that you can navigate to the Protobuf source instead of auto-generated code. There is so much valuable information that we can surface from the compiler, your build tool, and your dependencies, and we’re excited to make this Code Intelligence available for all Sourcegraph users.
