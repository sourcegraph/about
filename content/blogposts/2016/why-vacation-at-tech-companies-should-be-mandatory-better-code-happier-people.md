---
title: 'Why vacation at tech companies should be mandatory: better code, happier people'
authors:
  - name: Quinn Slack
    url: https://twitter.com/sqs
publishDate: 2016-05-29T00:00-07:00
tags: [
  "blog"
]
slug: why-vacation-at-tech-companies-should-be-mandatory-better-code-happier-people
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5ZsfNz62fCCaswwyMEEWGw/03c4d56925f5843f6bc439b78dfadb72/0_oDIH90jQ4ZzUANWM.jpg
published: true
---



**Can a policy that banks use to combat insider fraud also make tech companies produce better products and happier employees?** Sure. At [Sourcegraph](https://sourcegraph.com/), our mandatory vacation policy requires everyone to completely disconnect from work for _at least_ 2 weeks each year — no exceptions.

![0*oDIH90jQ4ZzUANWM](//images.contentful.com/le3mxztn6yoo/5ZsfNz62fCCaswwyMEEWGw/03c4d56925f5843f6bc439b78dfadb72/0_oDIH90jQ4ZzUANWM.jpg)

Photo credit: <a href='http://www.flickr.com/photos/70140013@N07/7424536244/in/photolist-cj5FXA-bUG5st-c6aH6C-bHX2KF-brUvps-aNmpsp-avHsjZ-amUqaA-amec93-a3jT9b-9X1mSz-9HWzdA-9CEhwb-9zzcs9-9tYroR-9rupvz-9eLbD2-8RL5R1-8FDVWz-8BxJ82-8khuM4-7W24wP-7yGf3Z-c45AQJ-boYsyx-dNQA1i-cKZzjs-bgjgdM-8mbr5L-7T9jGT-kaCA5j-joSrXi-j9e1WM-iQpr7E-iC6BY5-iBKw4u-iirP8z-hKcWT5-hDJsbZ-hqSmkJ-gXeDvR-gPCSXb-gPBCZU-gJPzQA-gBiBgn-gvcsRz-gqreCv-gpQAcQ-goSdo9-gnudMC-gaydvZ'>Darren Johnson</a>

We've instituted this policy for 2 reasons:

1.  If you know your team will have to maintain your work while you're gone, you'll produce better systems and code.
2.  Requiring vacation conveys that it's OK to take time off; nobody feels guilt or resentment.

First, here's why mandatory vacation likely saves the banking industry billions of dollars. Then I'll explain how this applies to [Sourcegraph](https://sourcegraph.com/) and other tech companies.

#### A brief history of mandatory vacation

Mandatory vacation policies began in the banking world as a way to uncover fraudulent schemes perpetrated by employees. Committing fraud requires the perpetrator to produce fake records and reconcile them with the bank's legitimate daily operations, a task that requires near-constant attention. With a mandatory vacation policy, the fraudster is required to take time off and temporarily pass their duties to their co-workers. Unless their co-workers are all complicit in the scheme, the fraud is likely to be detected.

Mandatory vacation is recommended by the U.S.'s F.D.I.C. (the deposit insurer):

> _All banks should have a vacation policy, which provides that officers and employees be absent from their duties for an uninterrupted period of not less than two consecutive weeks. Such a policy is considered an important internal safeguard largely because perpetration of an embezzlement of any substantial size usually requires the constant presence of the embezzler in order to manipulate records, respond to inquiries from customers or other employees, and otherwise prevent detection.
>  — _[Section 4.2, Internal Routine and Controls](http://www.fdic.gov/regulations/safety/manual/section4-2.html) (FDIC Risk Management Manual)

And stricter enforcement could have prevented some well-known cases of insider fraud:

> _The French bank said that it tried on several occasions to make Mr. Kerviel take a few weeks off, but that it ultimately went along with his excuses for staying at work. If he had been gone, his frauds would probably have been spotted. The cost of Mr. Kerviel's extra days on the job: $7.2 billion.
>  — _[Would a vacation for Kerviel have prevented SocGen's woes?](http://online.wsj.com/news/articles/SB120155809623923355) (The Wall Street Journal, January 29, 2008)

Also see [_Workaholics Aren't the Only Ones Who Hate Vacations_](http://www.nytimes.com/1995/12/03/business/earning-it-workaholics-aren-t-the-only-ones-who-hate-vacations.html) _(The New York Times, December 3, 1995)_ about a similar Japanese fraud scheme.

So, a few banks could have saved billions of dollars by enforcing mandatory vacations. The same policy can also benefit tech companies. Here's why.

### Benefit 1: easier to maintain systems and codebases


![0*Xasx9qL4vx2KuSFL](//images.contentful.com/le3mxztn6yoo/6uTLNSuWKkGCS6S4qKCGIu/8aeb7543fcd8c08349c23125828be3ec/0_Xasx9qL4vx2KuSFL.jpg)

Photo credit: <a href='http://www.flickr.com/photos/pedrosz/4088820782/'>Pedro Szekely</a>

Coming up with a simple, maintainable system design and writing good code takes more time initially, but it's usually worthwhile. Developers understand this trade-off in theory, but in practice our judgment is clouded by 2 biases.

**Bias #1: short-term thinking.** Developers often only think ahead to the next release and forget about the legions of future programmers (including their future selves) who will need to maintain their code. _In reality, code is written once, maintained 10 times, read 100 times, and executed 1000 times._

**Bias #2: continuity of role.** Developers often assume they'll still be present, at the same company in the same role, to fix their code if it breaks. _What percentage of your lifetime code output actually occurred in your current role?_

The mandatory vacation policy corrects these biases by guaranteeing that in the near future each developer's code will be maintained by other people while they're away and unable to assist. Let every developer imagine their team puzzling through their system design and debugging their messy code, silently cursing them all the while. And let every developer experience what it's like to maintain unfamiliar code written by a teammate who's out of town and unreachable. Nobody likes these outcomes, and making them more palpable early on effectively aligns incentives so they're less likely to occur.

### Benefit 2: guilt-free vacations

It's a common refrain: “I have so many vacation days but no time to take a vacation.” At least in the U.S., people often accumulate (or forego) vacation days because they're too busy. When they do take a vacation, it's common to feel a sense of guilt (for making their team cover for them) and fear (that they're hurting their career). Even worse, sometimes their team will resent them for taking time off.

Some companies try to send the message that vacations are OK by publicizing the vacations of executives and managers (to set an example from the top), but that can backfire if people below them still don't feel comfortable taking time off.

Tech companies are notorious for having cultures that frown upon taking vacations, as well as employees that actually aren't interested in taking vacations. This sentiment often causes ruinous internal politics at startups.

Having a mandatory vacation policy helps solve these issues. It clearly communicates that vacation is OK and actually benefits the team and company. Nobody resents a teammate who is forced to take a vacation, and you're not going to feel guilty taking time off if everybody else must do the same. On top of all this, guilt-free vacations are far more enjoyable, so you'll get more rejuvenation from each day you're away.

### Details & next steps

Our current policy is that Sourcegraphers have unlimited vacation days and must take at least 2 weeks of vacation annually without access to work email, servers, or code. Critical external emails (e.g., with customers, users, advisors, and investors) are exempt from this policy out of necessity, but that's a small part of our total workload (and does not apply to most folks here).

If you're interested in building [a better way for developers to discover and understand code](https://sourcegraph.com)—and you enjoy some guilt-free time in the sun — [we'd love to hear from you](https://sourcegraph.com/contact).

_Our mandatory vacation policy was also featured by the_ [_BBC_](http://www.bbc.com/capital/story/20140903-relax-or-else)_._

### About the author

_Quinn Slack is the CEO and co-founder of Sourcegraph, the code intelligence platform for dev teams and making coding more accessible to more people. Prior to Sourcegraph, Quinn co-founded Blend Labs, an enterprise technology company dedicated to improving home lending and was an egineer at Palantir, where he created a technology platform to help two of the top five U.S. banks recover from the housing crisis. Quinn has a BS in Computer Science from Stanford, you can chat with him on Twitter [@sqs](https://twitter.com/sqs)._
