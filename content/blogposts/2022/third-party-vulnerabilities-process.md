---
title: 'The real weakest link in software supply chain security (it's not open source)'
description: 'When a critical security vulnerability is identified, your response time is everything. There are probably shortcomings in your response process itself that are slowing you down—find out where they are and how you can be better prepared for the next third-party vulnerability.'
authors:
  - name: Rebecca Dodd
    url: https://handbook.sourcegraph.com/team/#rebecca-dodd
  - name: André Eleuterio
    url: https://handbook.sourcegraph.com/team/#andr%C3%A9-eleuterio
publishDate: 2022-03-21T18:00+02:00
tags: [blog]
slug: real-weakest-link-in-software-supply-chain-security
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/third-party-open-source-vulnerabilities.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/third-party-open-source-vulnerabilities.png
published: true
---

![Vulnerabilities in open source packages](https://storage.googleapis.com/sourcegraph-assets/blog/third-party-open-source-vulnerabilities.png)

Open source code is both treasure chest and Pandora's Box. Instead of starting from scratch when building an application or program, software developers can draw from third-party libraries and packages to jump-start development. These shortcuts come with risk though, as packages often contain yet more packages within, and these dependencies could harbor malicious code planted by bad actors, or vulnerabilities that leave your code open to exploitation. The [node-ipc malware/protestware incident](https://gist.github.com/MidSpike/f7ae3457420af78a54b38a31cc0c809c) surfaced in early March and the [Lodash](https://dev.to/jmimoni/lodash-understanding-the-recent-vulnerability-and-how-we-can-rally-behind-packages-48kc) and [log4j](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/) vulnerabilities are more examples from recent memory. According to the [2021 Open Source Security and Risk Analysis report](https://www.synopsys.com/blogs/software-security/open-source-trends-ossra-report/), “An alarming 91% of the codebases contained open source dependencies that had no development activity in the last two years—meaning no code improvements and no security fixes.” 85% of audited codebases contained open source dependencies more than _four years_ out of date.

These unmaintained open source components pose a risk to the company and your end users if vulnerabilities are discovered, but it's time consuming and unrealistic for developers to vet every bit of third-party code in the codebase. Bluntly, it's a pain for developers to keep track of all dependencies, keep them up to date, and when vulnerabilities are identified, even more of a pain for security teams to comb the codebase to determine if the vulnerability is even relevant to their code and then apply fixes across multiple repositories.

It's easy to blame poorly maintained open source projects and make that [random person in Nebraska](https://xkcd.com/2347/) the scapegoat here, but don't write off third-party code. The alternative is reinventing the wheel every time and is likely to be frustrating for your engineering teams as they work on solving problems they know someone else has fixed already instead of writing new code. So, how do you balance the velocity unlocked by using third-party libraries with the risk posed by unaudited code? The answer is in your vulnerability management process.

## 1. You lack visibility into your dependencies

You can't change what you don't acknowledge. Dr Phil isn't known for thought leadership on software supply chains, but he has a point here. Let's imagine it's December 2021 and you've just raised the alarm about the Log4Shell vulnerability. It's most likely that your security team is now scrambling to figure out if and where you're using log4j. Security engineers often have to dive into parts of the codebase they're unfamiliar with because they didn't write the code themselves, which limits their ability to act quickly. They will likely check the lock files in your repositories for instances of the vulnerable package using your code host's native search, an IDE, or a tool like grep or [Sourcegraph](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/#Find-everywhere-log4j-is-used-across-all-your-code). Dependencies can go many layers deep though, so security engineers need to be careful they don't miss a vulnerable sub-dependency (referred to as transitive or indirect dependencies).

### How to fix it

In an ideal state, your engineering teams have been keeping thorough documentation of the open source software you're using (also known as a software bill of materials) and updating it whenever they add a new dependency, so you already know if and where you're using log4j. This isn't consistently practiced though, so making sure your response team has access to robust code search to scour your repositories efficiently is critical. Some engineering orgs use dependency management software such as Snyk, Sonatype, or GitHub's Dependabot to proactively alert you when you're on a vulnerable version.

## 2. It takes too long to understand if you're affected by a vulnerability

The next step is to determine if you're actually using the dangerous code. You might be on a different, safe version of Log4j, or simply not using the affected code within the compromised version. It can be painfully time consuming to confirm if you're impacted by a third-party vulnerability. In cases where you use the third-party code, but the vulnerability doesn't affect your codebase, you have a false positive. This is ideal because no patching is required, but it's hard to have full confidence in a false positive _and_ communicate that confidently to your users and customers.

Again, the teams tasked with mitigation will need to watch out for those pesky transitive dependencies. This might require combing through an open source project's repository in addition to your own.

### How to fix it

The solutions here will be largely the same as those for #1, with thorough code search playing a key role in sweeping your codebase or that of your dependencies for instances of the vulnerable code. [Nutanix](https://www.nutanix.com/) used Sourcegraph for its Log4Shell management process: “Isn't it nice, when you can just run a report and say, ‘Here it is' or ‘Here it isn't'?” said Jon Kohler, Technical Director of Solution Engineering. Much better than having to say “‘Well, boss, I think we got it all.'”

<Alert>
  Keep reading: <a href = "/case-studies/nutanix-fixed-log4j-with-sourcegraph">Nutanix fixed Log4j quickly and confidently with Sourcegraph</a>
</Alert>

There's also a cultural shift you can make: making fixing vulnerabilities an engineering-wide effort instead of the burden of a small team or lone security engineer can exponentially speed up your response time, as in addition to more people tackling the problem, the developers themselves may be able to work faster as they're more familiar with the parts of the codebase they're investigating.

## 3. Mitigation is too time consuming

If you _do_ have exploitable code, you'll need to upgrade to the next safe version as soon as possible. If doing so is going to introduce breaking changes though, you may need more fine-grained mitigation that refactors the vulnerable code, wherever it's being used. In either case, this can be a tedious, manual process involving dozens of pull requests across multiple repositories.

### How to fix it

The cultural shift of making remediation everyone's responsibility can drastically speed up your response time here too. You can also programmatically create GitHub pull requests or GitLab merge requests with your mitigations using Sourcegraph Batch Changes, reducing the manual effort of creating and applying individual fixes. You can see [how this worked for Log4j mitigation here](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/#Automate-PRs-to-fixmitigate-the-log4j-0-day-across-all-your-code).

## 4. You're not prepared for future vulnerabilities

Vulnerabilities in third-party code are inevitable, but stripping your codebase of open source software isn't the answer, unless you want to stifle innovation and frustrate all your developers. The challenge is in keeping dependencies manageable and up to date and ensuring consistency in your use of shared libraries. If left unchecked, you're in for [dependency hell](https://about.sourcegraph.com/blog/nine-circles-of-dependency-hell/): package bloat, circular dependencies, and reckless monkey-patching are just some of the symptoms.

### How to fix it

You can proactively reduce your dependencies by committing to a culture of code reuse in your engineering organization. Code reuse doesn't just narrow the scope of your dependencies, but reduces time spent on writing duplicative code and streamlines maintenance of shared code. Code search can help engineers discover reliable, reusable code already in your codebase. Using code notebooks to document how and where code is used in your organization also makes it easier for developers to reuse shared libraries confidently, reducing your overall dependency burden.

### More posts like this

- [How to remove secrets from your codebase](https://about.sourcegraph.com/blog/eliminate-secrets-from-codebase-with-universal-code-search/)
- [The Nine Circles of Dependency Hell (and a roadmap out)](https://about.sourcegraph.com/blog/nine-circles-of-dependency-hell/)
- [Log4j Log4Shell 0-day: find, fix, and track affected code](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/)
