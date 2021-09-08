# Product

Product at Sourcegraph consists of [product management](product_management/index.md), [product design](design/index.md), and [technical writing](technical_writing/index.md)

## Org chart

- [How product is organized](product_org.md)
- [Roles and responsibilities](roles/index.md) of the product team

## Planning

- [Product team goals](goals.md)
- [Special initiatives](initiatives.md)
- [Roadmap](roadmap.md)

## Resources

- [Sourcegraph's product design principles](./design_principles.md)
- [Demo day](./demo_day.md)

### References

- [Beta and experimental feature labels](./beta_and_experimental_feature_labels.md)
- [Onboarding to the product team](./onboarding/index.md)
- [Personas](../marketing/personas.md)
- The [Sourcegraph workflow](../workflow/index.md) describes how our product fits into the developer workflow.
- Product documents (PDs)
  - [All PDs](https://drive.google.com/drive/folders/1UbuN9izpTj7ppJiduKI5tid8GEFuAiEx) (Google Drive)
  - [How we use PDs](product_documents.md)
- RFCs (requests for comment)
  - [All RFC documents](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa) (Google Drive)
  - [How we use RFCs](../communication/rfcs/index.md)
- [Product learnings](product_learning.md)
- [Working with BizOps](../ops/bizops/index.md#how-to-work-with-us)
- [User research](./user_research/index.md)
- [Recommended reading](./onboarding/recommended_reading.md)
- [Product licensing](licensing.md)

### Metrics

- [Product metrics dashboard](https://sourcegraph.looker.com/dashboards/127)
- [How to add metrics](../ops/bizops/analytics.md#How-to)

### Tools

- [Figma](https://www.figma.com/files/team/438792081639669302/Sourcegraph)
- [Productboard](https://sourcegraph.productboard.com/)
- [Amplitude](../ops/bizops/amplitude.md)

## Release early, release often

Each project, no matter how long-running, needs to plan to ship _something_ in each release. The "something" depends on the project. We strongly prefer for it to be a minimal viable feature that is enabled by default. The next best thing is to ship something that is feature-flagged off by default. When possible, larger features should be merged mid-cycle to solicit feedback from the team and customers before the release is cut.

The reason for this is to avoid going for too long without customer feedback (from customers trying it) or even technical/product feedback (from performing the diligent work of polishing it to be ready to release). Lacking these critical checks means we will end up building something that doesn't solve people's problems or that is over-built.

When we have relaxed this in the past, the results have been bad and the overwhelming feedback from retrospectives has been to release regularly.
