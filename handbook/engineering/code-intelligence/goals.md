# Code Intelligence goals and priorities

## Goals

### Expand language support and adoption of precise code intelligence

Progress on adoption and usage is tracked in our [Looker dashboard](https://sourcegraph.looker.com/dashboards/131).

**Problem:** Adoption of precise code intelligence comes with a cost. This cost often exceeds a customers's expectation of the benefits precise code intelligence may provide to their organization. Sales, marketing, and the CE teams do not have access to a large open source corpus to demonstrate the possible benefit.

**Outcome:**

- Precise code intel reaches [*N<sub>0</sub>*][N0] precise code intel operations a month.
- CE and Sales have a significant amount of open source repos to showcase and can easily demonstrate the value of setting up precise code intelligence.
- For languages that are particularly subject to unusual setups and tooling, our indexed open source showcase helps us determine if setup issues are caused by an unusual customer dev environment.




- Customers are able to easily set up precise code intel for our supported languages.
- [*N<sub>x</sub>*][Nx] popular open source repos are indexed on Sourcegraph Cloud.
- Users on Sourcegraph Cloud get precise code intelligence results for the most popular repos in each of the languages we support.


**Milestones:**

1. 🔄 Sourcegraph Cloud has precise code intelligence for 200 C++ repositories.
    - 🔄 Improve stability and observability in lsif-clang
    - 🔄 Improve stability and observability in the code intel executor (the auto-indexer)
    - Support Bazel projects
    - Auto-detect common C++ project configurations and enable auto-indexing for C++ projects
    - Fix broken auto-index configurations for high-profile projects

1. Deliver precise code intel for C++ to three customers.
    - Deliver to [*N<sub>1</sub>*][N1]
    - Deliver to [*N<sub>2</sub>*][N2]
    - Deliver to [*N<sub>3</sub>*][N3]

1. Sourcegraph Cloud has precise code intelligence for 200 Java repositories.
    - Finish lsif-java
    - Support Gradle projects
    - Auto-detect common Java project configurations and enable auto-indexing for Java projects
    - Fix broken auto-index configurations for high-profile projects

1. Deliver precise code intel for Java to three customers.
    - Deliver to [*N<sub>4</sub>*][N4]
    - Deliver to [*N<sub>5</sub>*][N5]
    - Deliver to [*N<sub>6</sub>*][N6]

## Roadmap

The code intel team roadmap is tracked in [productboard](https://sourcegraph.productboard.com/feature-board/1825051-code-intel)

[N0]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.63lmpljtve9f
[N1]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.lgv97p81ib7i
[N2]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.7vmkcs91o3z1
[N3]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.77q74hyj1vt7
[N4]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.dody7tmh0cys
[N5]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.yaz1er2nj6qx
[N6]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.vu3qkq4e0r70
[N7]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.22p5u8gdheua
[N8]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.wugsa2bws90r
[N9]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.xq968uve0czg
