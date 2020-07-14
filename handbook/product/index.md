# Product

## [Roles and responsibilites](roles.md)

- [Product manager](roles.md#product-manager)
- [Product designer](roles.md#product-designer)

## Team

The product team is newly growing, and consists of all product managers and product designers on the team. We will consider splitting into separate teams only when size necessitates it.

## [Product management](product_management/index.md)

- [Product process](product_management/product_process.md)

## [Design](design/index.md)

- [Design process](design/design_process.md)

## Resources

### References

- [Onboarding to the product team](./onboarding/index.md)
- [Personas](personas.md)
- The [Sourcegraph workflow](../../workflow/index.md) describes how our product fits into the developer workflow.
- Product documents (PDs)
  - [All PDs](https://drive.google.com/drive/folders/1Wd-Xx2wNbFtSzeJwbZqMOxdbFDUFxlyR) (Google Drive)
  - [How we use PDs](product_documents.md)
- RFCs (requests for comment)
  - [All RFC documents](https://drive.google.com/drive/folders/1bip_pMeWePyNNdCEETRzoyMdLtntcNKR) (Google Drive)
  - [How we use RFCs](../communication/rfcs/index.md)

### Metrics

- [Product metrics dashboard](https://sourcegraph.looker.com/dashboards/127)

### Tools

- [Figma](https://www.figma.com/files/team/438792081639669302/Sourcegraph)
- [Productboard](https://sourcegraph.productboard.com/)

## Release early, release often

Each project, no matter how long-running, needs to plan to ship _something_ in each release. The "something" depends on the project. We strongly prefer for it to be a minimal viable feature that is enabled by default. The next best thing is to ship something that is feature-flagged off by default. When possible, larger features should be merged mid-cycle to solicit feedback from the team and customers before the release is cut.

The reason for this is to avoid going for too long without customer feedback (from customers trying it) or even technical/product feedback (from performing the diligent work of polishing it to be ready to release). Lacking these critical checks means we will end up building something that doesn't solve people's problems or that is over-built.

When we have relaxed this in the past, the results have been bad and the overwhelming feedback from retrospectives has been to release regularly.
