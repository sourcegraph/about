---
title: "How Silicon Valley buys software
(hint: engineers have all the power)"
author: Dan Adler
publishDate: 2018-11-14T00:00-07:00
tags: [
  blog
]
slug: how-silicon-valley-buys-software
heroImage: /blog/xkcd-is_it_worth_the_time_2x.png
published: true
---

<img src="/blog/xkcd-is_it_worth_the_time_2x.png">

Source: https://xkcd.com/1205/

At times, [XKCD](https://xkcd.com) can teach us a lot about how the world works. This simple chart above — often called a sensitivity analysis in accounting and finance (or a `Data Table` in Microsoft Excel) — simply and clearly illustrates the impact of changes to independent variables or input assumptions on an outcome. 

In this case: you'd better not waste much time writing a script to mail out your leap year party invitations...

This same analysis can serve as a convenient way to evaluate the tradeoffs of pursuing a project or using a new tool. At Sourcegraph, we share the table below with customers whenever they are considering purchasing or upgrading, whether we are talking to a CTO or engineering lead, or to a procurement (or "sourcing", "purchasing", etc.) team. We know that _someone_ internally is making the case for "developer experience" to be a line item in their budget.

## Value of Sourcegraph per developer per month

<img src="/blog/sensitivity-Sourcegraph-value-add.png">

A user can find their internal numbers/estimates on the two axes, and see how much value they get from Sourcegraph. If that number is <span style="color:red">red</span>, then they couldn't justify purchasing our [Enterprise Starter](/pricing) tier (which costs $4/user/month). Similarly, if it is <span style="color:green">green</span>, they can easily justify deploying our high-availability [Enterprise](/pricing) tier (at $19/user/month). 

Of course, this is only a crude, incomplete way for us to talk about Sourcegraph:

* It is really hard to estimate these inputs;
* Long-term time savings — e.g., the impact of shipping fewer bugs — are hard to capture in a "minutes saved per day" metric;
* And most importantly, using Sourcegraph to build better products shows up in happier customers, faster releases, and higher sales, **not** in lower costs

## Play the game, do the math

But still, we have to play the game when our customers kick us the ball. If someone internally needs to see an ROI (return on investment) calculation — and they _always_ do at large companies — we want to be completely open about our pricing and our value. 

What we have been most surprised by in these discussions is that most engineers have no idea how much influence they have inside of a large organization. Your boss, your boss's boss, and the entire procurement and finance organization is doing the math above. 

**If they can pay $60+ per year to save you _30 seconds per working day_, they will always do it.**

And if you can cut an hour of downtime out of your week (from, e.g., searching for error messages, waiting for CI builds, or reviewing complex code), the value easily gets above $1,500 per year for you alone. 

(And this math doesn't even include the benefit of having a happier team, easier recruiting, or encouraging creativity, rather than staring at the screen or re-implementing the same code for the 100th time.)

## You have the power to use the tools you want

Engineers, from the newest interns to the 40-year veterans, have enormous influence in software purchasing — you are critical to the company, there are a lot of you, and you are often (on average) well-compensated. It's the same reason that the _basic_ Salesforce CRM software goes up to [$300/salesperson/month](https://www.salesforce.com/editions-pricing/sales-cloud/): sales people are critical to a company's success, so buying them the best tools is a no-brainer. 

So the next time you see JIRA priced at [$2+/user/month](https://www.atlassian.com/software/jira/pricing), or GitHub for Teams priced at [$9/user/month](http://github.com/pricing), or Sourcegraph Enterprise at [$19/user/month](https://about.sourcegraph.com/pricing), check out our XKCD-like table above (it works for any of them)...

**...And realize that you hold all the power in deciding what your company uses. You just have to ask for it.**

