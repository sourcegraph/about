# Wildcard Component Library (WCL)

Wildcard Component Library is a comprehensive collection of reusable, design-approved components that can be composed to quickly build out different user journeys across the web app. WCL is stored in its own [directory](https://github.com/sourcegraph/sourcegraph/tree/main/client/wildcard), owned by the [Fronted Platform Team](https://about.sourcegraph.com/handbook/engineering/web/frontend-platform) and contributed to by all Sourcegraph teammates. WCL is a part of the Wildcard Design System.

## WCL x Frontend Platform Team
- The Frontend Platform Team is the owner of the design system and Wildcard Component Library  and needs to be up-to-date with all the changes and needs of other teams
- The Frontend Platform Team should enable other teams to make changes to the Wildcard Component Library by keeping them up-to-date (see Sharing updates to the components system), helping them plan their work, providing expertise, and reviewing the changes
- The Frontend Platform team **shouldn't be responsible for implementing components for other teams**. Otherwise, we would create a bottleneck and FE Platform team wouldn’t have time to focus on their team goals.
- Other product teams should feel empowered to make changes and create components by themselves

## Changing and creating components
What steps to take when one of the teams needs to update or add a component in WCL?
1. The designer creates a Figma file with full specification regarding the component (separate from the general project file or general design system files) and a Github issue for a new component to track the implementation progress
2. The designer initiates the cross-team communication by marking as reviewers:
- Members of the engineering team who will be implementing the work
- At least one other Design Team member
- Members of other teams affected by the changes
3. After all the reviews are completed, the engineering team plans the implementation. The engineering lead should create a proposal for a new component on the [FE Platform Project board](https://github.com/orgs/sourcegraph/projects/144) using [Wildcard proposal template](https://github.com/sourcegraph/sourcegraph/blob/main/.github/ISSUE_TEMPLATE/wildcard_proposal.md).
4. During the implementation, the engineering team stays in constant communication with the Design Team members engaged in the project. Asks for review, if necessary.
5. The engineering team should ask for final reviews from:
- Members of the FE Platform team
- Members of the engineering team implementing the change
- Members of other teams affected by the changes (if applicable)
- Members of the Design Team engaged in the project
6. When changes are approved, the engineering team merges the PR

Important: we would like to avoid the situation where the FE Platform Team is engaged only at the end of the process or doesn’t know about the changes at all. During the implementation, please inform the FE Platform Team is about key milestones and any issues that occur. FE Platform engineers should be asked for a review in any of those key moments.

If the product team after having started working on a feature, identifies in a code review that a part of the UI should be extracted into a shared component (e.g., "This is very similar to the widget used in XYZ...can we make it a shared component?"), do not block the PR and kick off the "changing or creating a component" flow asynchronously.

## Definitions
### Full design specification should include:
- All variants of the component (ex. Filled/empty or for auth/unauth user)
- Clear descriptions of component behaviour added as notes on Figma
- Clear descriptions of specific changes added as notes on Figma. This is primarily for changes to a design which might not be immediately obvious to a viewer, like a small change in the positioning of a button, a wording change etc
- Designs or descriptions for different component states (e.g. hover/focus/animations). If it’s not possible to accurately represent an animation on Figma we should add a note to the design file explaining it (or linking to an example).
- Light/Dark mode designs (specially important when changing colours)
- Mobile/Desktop designs

### A component is deemed to be ready from an engineering perspective when effort has been made to ensure it is:
- Unit tested
- [Accessible](https://docs.sourcegraph.com/dev/background-information/web/accessibility)
- Documented textually, explaining when this component should be used and why
- In Storybook
- Built with a clear case for reusability

## Sharing updates to the component system
To keep other teams informed about the changes to the component system, we should share updates:
- In the FE Platform team [status update](../../../leadership.md#status-updates)
- In the #progress channel
- In a standalone documentation for the Wildcard Component Library (TODO)
- In the #component-system-updates channel
- Through generated changelogs (TODO)
