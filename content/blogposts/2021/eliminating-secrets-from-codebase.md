---
title: How to remove secrets from your codebase
description: 'We used to store secrets in our source code. Here’s how we used code search to help us find, remove, and rotate all secrets in our codebase.'
authors:
  - name: André Eleuterio
    url: https://handbook.sourcegraph.com/team/#andr%C3%A9-eleuterio
publishDate: 2021-09-27T10:00-07:00
tags: [blog]
slug: eliminate-secrets-from-codebase-with-universal-code-search
heroImage: https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png
socialImage: https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.png
published: true
---

<video loop autoPlay muted playsInline width="1200" height="626">
  <source src="https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.webm" type="video/webm" data-cookieconsent="ignore" />
  <source src="https://sourcegraphstatic.com/blog/securing-sourcegraph-eliminating-secrets.mp4" type="video/mp4" data-cookieconsent="ignore" />
</video>

_Sourcegraph provides universal code search: a navigation engine for understanding your code._

With most early-stage startups some security concerns are deprioritized in favor of speed and getting to a functioning product. That was the case with Sourcegraph—in the beginning we didn’t have enough bandwidth to handle all secrets automatically in our source code. Since our infrastructure is fully managed through code, most of our infrastructure and service account passwords were stored in private repositories. We always saw this as a big risk for the organization, so we tackled it earlier this year. We relied heavily on Sourcegraph and its incredible search capabilities to reassure us that we weren’t missing anything.

We broke the effort down into three parts:

- Finding all secrets in our codebase
- Removing the secrets from code and storing them in a secret vault
- Rotating the secrets

## Searching for secrets in our codebase

To get started and properly estimate the work, we needed to find all secrets in our codebase. We had an idea of where most secrets would be: Kubernetes (`.yaml`) and Terraform (`.tf`) files. That served as a starting point, but we needed to be very thorough.

There is no industry-standard tool for finding secrets in source code, but there are a few that aim to help. [truffleHog](https://github.com/trufflesecurity/truffleHog) and [Gitrob](https://github.com/michenriksen/gitrob) are popular OSS tools for this purpose. They all have strengths and weaknesses, usually a balance between:

- Searching for patterns that look dangerous, such as a `password=` string. This approach usually leads to more findings but less precision.
- Searching for known patterns, such as a GitHub or AWS token that have particular patterns. This approach identifies all instances of that given token but fails to be comprehensive.

To ensure we were thoroughly covered we combined automated tooling (truffleHog), manual reviews, and (especially) Sourcegraph searches. truffleHog also served as a great [source of patterns to search for](https://github.com/dxa4481/truffleHogRegexes/blob/master/truffleHogRegexes/regexes.json).

We started with a high-precision search targeting known patterns. This search was developed targeting secrets we already knew were in our source code and had an identifiable pattern. We were able to find many secrets with a low number of false positives:

```regex
repo:[our targeted repos]$
patterntype:regex

// ===== PATTERNS (or-delimited) =====

// Strings longer than 32 characters, possibly base-64 encoded
("[a-z0-9+/]{32,}=?"|'[a-z0-9+/]{32,}=?'|`[a-z0-9+/]{32,}=?`) or

// Private keys
-----BEGIN (RSA )?PRIVATE KEY----- or

// Lines ending with "=" (likely base64 values)
[a-z0-9+/]+==?(['"],?)?\n or

// Lines containing a significant number of base64 characters,
// but not necessarily ending with "=",
// (acknowledging that not all base64 strings end with "="),
// prefixed with a keyword indicating that they are sensitive
(token|secret|password|credential|key|private|sensitive)[^a-z0-9+/\n]+[a-z0-9+/]{16,}(['"],?)?\n or

// Likely k8s secrets
(kind: secret|kind secret|kubectl create secret) or

//Slack
(xox[pborsa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32}) or

// GitHub
[gG][iI][tT][hH][uU][bB].*['|\"][0-9a-zA-Z]{35,40}['|\"]

// Google, GCP, GSuite
AIza[0-9A-Za-z\\-_]{35} or
[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com or
ya29\\.[0-9A-Za-z\\-_]+

```

We then moved to searches with a wider scope and, as a result, more false positives to be triaged. These searches look for keywords with the added power of regular expressions:

```regex
r:[our targeted repositories]$
patterntype:regex

private[\s_-]?key or
api[\s_-]?key or
secret[\s_-]?key or
session[\s_-]?id or
auth[\s_-]?token or
license[\s_-]?key or

```

```regex
r:[our targeted repositories]$
patterntype:regex

(credential|secret|private|\Wkey\W|token|sensitive|password|session|auth|license|\Wid\W) or
[sS][eE][cC][rR][eE][tT].*['|\"][0-9a-zA-Z]{32,45}['|\"]
```

We combed through false positives manually and also cross-checked them against results from truffleHog. truffleHog is a great tool but led to a very high number of false positives and duplicate results. One problem we ran into was that container image shasums were picked up as secrets. Using truffleHog to cross-check results proved very valuable.

As we found more secrets we searched those patterns individually for further coverage. We confirmed around 150 secrets that needed to be removed from our code.

## Removing secrets from code

The goal was to remove all secrets from our source code and store them in GCP Secret Manager, our secret vault of choice for this project. We use Terraform to manage our cloud assets, which allows us to fetch secrets from GCP and inject them into Kubernetes Secrets in our clusters. After this initial setup and writing some Terraform modules, we were ready to start moving secrets to the Secret Manager.

Sourcegraph was very valuable in situations where the same secret was used in multiple places, such as service accounts. With Sourcegraph we can search code across multiple repositories, giving us certainty that we weren't missing any places where it was used. Sourcegraph allowed us to run wide-ranging searches instead of targeting specific folders or files. Finding all instances of a specific secret allowed us to organize our work better and tackle types of secrets in batches. At this point we didn’t find any secrets our initial searches had missed, reassuring us that we were fully covered.

This was the longest part of the work. Many, many PRs later we had all secrets moved to the Secret Manager. This was a big accomplishment and our team celebrated!

## Rotating secrets

It felt great to have these secrets removed from our repositories but they were all in our Git history. We needed to rotate all these secrets now that they were in the Secret Manager. Rotating the secrets varied greatly depending on what we were rotating—anything that allowed us to create a new credential/token/key, deploy it, and then invalidate the old value was prioritized.

For our services to pick up changes to the Kubernetes Secret we needed to reroll those pods. Sourcegraph providing complete searches across multiple repositories was once again invaluable in ensuring that we were restarting all instances where a secret was used and none was missed. Not having this would have likely led to some services not being properly restarted and later failing with invalid credentials. Sourcegraph combined with infrastructure-as-code proved to be immensely helpful.

## Try it yourself!

The searches above targeted our own code, and we wanted to make sure you can use Sourcegraph to search for secrets in your own code.

Using sourcegraph.com and adding your private repositories is the quickest way to try out these searches on your code. You can also run Sourcegraph locally on your computer and run the searches, although it can be resource intensive if targeting many repositories.

[Click on this link to open the search on sourcegraph.com](<https://sourcegraph.com/search/console?q=%2F%2F%20We%27re%20using%20Sourcegraph%20as%20an%20example%20but%20make%20sure%20to%0A%2F%2F%20add%20your%20own%20repositories%20with%20the%20repo%20filter!%0Arepo%3Asourcegraph%2Fsourcegraph%24%0A%0A%2F%2F%20Filter%20out%20any%20files%20you%20don%27t%20want%2C%20perhaps%20test%20files%3F%0A-file%3Atest%0A%0Apatterntype%3Aregex%0A%0A%2F%2F%20Use%20this%20list%20of%20known%20patterns%20(from%20truffleHog)%20and%20add%20your%20own!%0A%2F%2F%20Slack%20Token%0A(xox%5Bpborsa%5D-%5B0-9%5D%7B12%7D-%5B0-9%5D%7B12%7D-%5B0-9%5D%7B12%7D-%5Ba-z0-9%5D%7B32%7D)%20or%0A%0A%2F%2F%20RSA%20private%20key%0A-----BEGIN%20RSA%20PRIVATE%20KEY-----%20or%0A%0A%2F%2F%20SSH%20(DSA)%20private%20key%0A-----BEGIN%20DSA%20PRIVATE%20KEY-----%20or%0A%0A%2F%2F%20SSH%20(EC)%20private%20key%0A-----BEGIN%20EC%20PRIVATE%20KEY-----%20or%0A%0A%2F%2F%20PGP%20private%20key%20block%0A-----BEGIN%20PGP%20PRIVATE%20KEY%20BLOCK-----%20or%0A%0A%2F%2F%20AWS%20API%20Key%0A((%3F%3AA3T%5BA-Z0-9%5D%7CAKIA%7CAGPA%7CAIDA%7CAROA%7CAIPA%7CANPA%7CANVA%7CASIA)%5BA-Z0-9%5D%7B16%7D)%20or%0A%0A%2F%2F%20Amazon%20MWS%20Auth%20Token%0Aamzn%5C%5C.mws%5C%5C.%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%20or%0A%0A%2F%2F%20AWS%20API%20Key%0AAKIA%5B0-9A-Z%5D%7B16%7D%20or%0A%0A%2F%2F%20AWS%20AppSync%20GraphQL%20Key%0Ada2-%5Ba-z0-9%5D%7B26%7D%20or%0A%0A%2F%2F%20Facebook%20Access%20Token%0AEAACEdEose0cBA%5B0-9A-Za-z%5D%2B%20or%0A%0A%2F%2F%20Facebook%20OAuth%0A%5BfF%5D%5BaA%5D%5BcC%5D%5BeE%5D%5BbB%5D%5BoO%5D%5BoO%5D%5BkK%5D.*%5B%27%7C%5C%22%5D%5B0-9a-f%5D%7B32%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20GitHub%0A%5BgG%5D%5BiI%5D%5BtT%5D%5BhH%5D%5BuU%5D%5BbB%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B35%2C40%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20Generic%20API%20Key%0A%5BaA%5D%5BpP%5D%5BiI%5D_%3F%5BkK%5D%5BeE%5D%5ByY%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B32%2C45%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20Generic%20Secret%0A%5BsS%5D%5BeE%5D%5BcC%5D%5BrR%5D%5BeE%5D%5BtT%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B32%2C45%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20Google%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Cloud%20Platform%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Cloud%20Platform%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Google%20Drive%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Drive%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Google%20(GCP)%20Service-account%0A%5C%22type%5C%22%3A%20%5C%22service_account%5C%22%20or%0A%0A%2F%2F%20Google%20Gmail%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Gmail%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Google%20OAuth%20Access%20Token%0Aya29%5C%5C.%5B0-9A-Za-z%5C%5C-_%5D%2B%20or%0A%0A%2F%2F%20Google%20YouTube%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20YouTube%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Heroku%20API%20Key%0A%5BhH%5D%5BeE%5D%5BrR%5D%5BoO%5D%5BkK%5D%5BuU%5D.*%5B0-9A-F%5D%7B8%7D-%5B0-9A-F%5D%7B4%7D-%5B0-9A-F%5D%7B4%7D-%5B0-9A-F%5D%7B4%7D-%5B0-9A-F%5D%7B12%7D%20or%0A%0A%2F%2F%20MailChimp%20API%20Key%0A%5B0-9a-f%5D%7B32%7D-us%5B0-9%5D%7B1%2C2%7D%20or%0A%0A%2F%2F%20Mailgun%20API%20Key%0Akey-%5B0-9a-zA-Z%5D%7B32%7D%20or%0A%0A%2F%2F%20Password%20in%20URL%0A%5Ba-zA-Z%5D%7B3%2C10%7D%3A%2F%2F%20%5B%5E%2F%5C%5Cs%3A%40%5D%7B3%2C20%7D%3A%5B%5E%2F%5C%5Cs%3A%40%5D%7B3%2C20%7D%40.%7B1%2C100%7D%5B%5C%22%27%5C%5Cs%5D%20or%0A%0A%2F%2F%20PayPal%20Braintree%20Access%20Token%0Aaccess_token%5C%5C%24production%5C%5C%24%5B0-9a-z%5D%7B16%7D%5C%5C%24%5B0-9a-f%5D%7B32%7D%20or%0A%0A%2F%2F%20Picatic%20API%20Key%0Ask_live_%5B0-9a-z%5D%7B32%7D%20or%0A%0A%2F%2F%20Slack%20Webhook%0Ahttps%3A%2F%2F%20hooks%5C%5C.slack%5C%5C.com%2Fservices%2FT%5Ba-zA-Z0-9_%5D%7B8%7D%2FB%5Ba-zA-Z0-9_%5D%7B8%7D%2F%5Ba-zA-Z0-9_%5D%7B24%7D%20or%0A%0A%2F%2F%20Stripe%20API%20Key%0Ask_live_%5B0-9a-zA-Z%5D%7B24%7D%20or%0A%0A%2F%2F%20Stripe%20Restricted%20API%20Key%0Ark_live_%5B0-9a-zA-Z%5D%7B24%7D%20or%0A%0A%2F%2F%20Square%20Access%20Token%0Asq0atp-%5B0-9A-Za-z%5C%5C-_%5D%7B22%7D%20or%0A%0A%2F%2F%20Square%20OAuth%20Secret%0Asq0csp-%5B0-9A-Za-z%5C%5C-_%5D%7B43%7D%20or%0A%0A%2F%2F%20Telegram%20Bot%20API%20Key%0A%5B0-9%5D%2B%3AAA%5B0-9A-Za-z%5C%5C-_%5D%7B33%7D%20or%0A%0A%2F%2F%20Twilio%20API%20Key%0ASK%5B0-9a-fA-F%5D%7B32%7D%20or%0A%0A%2F%2F%20Twitter%20Access%20Token%0A%5BtT%5D%5BwW%5D%5BiI%5D%5BtT%5D%5BtT%5D%5BeE%5D%5BrR%5D.*%5B1-9%5D%5B0-9%5D%2B-%5B0-9a-zA-Z%5D%7B40%7D%20or%0A%0A%2F%2F%20Twitter%20OAuth%0A%5BtT%5D%5BwW%5D%5BiI%5D%5BtT%5D%5BtT%5D%5BeE%5D%5BrR%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B35%2C44%7D%5B%27%7C%5C%22%5D%22>), then follow along the comments to tune the search for your repositories. You can also [request a demo](/demo?utm_campaign=demorequest-awareness-tofu-fy22-q4&utm_medium=direct-traffic&utm_source=blog&utm_term=null&utm_content=demorequest).

This project highlights just one of the ways Sourcegraph can be used to help support security efforts across a large codebase with a lot of history. Keep an eye out for future blog posts of other ways to use Sourcegraph to protect your business, or [let us know](mailto:security@sourcegraph.com?subject=Using%20Sourcegraph%20for%20security) if you’ve found any ways of your own!

### More posts like this

- [How not to break a search engine or: What I learned about unglamorous engineering](/blog/how-not-to-break-a-search-engine-unglamorous-engineering/)
- [Optimizing a code intelligence commit graph](/blog/optimizing-a-code-intel-commit-graph/)
- [A 5x reduction in RAM usage with Zoekt memory optimizations](/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/)
