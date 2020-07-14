# Product documents

A Product Document (PD)'s purpose is to communicate the high level product problem that needs to be solved. It is the one place where ongoing research and information can be aggregated around a particular problem statement. Product documents exist to encourage quick iteration, the ability to fail fast, and multiple efforts to be combined towards a singular problem statement.

These documents were created out of a need to orient around a particular problem statement, and the realization that it sometimes takes multiple [RFCs](../communication/rfcs.md) to fully solve a problem. This helps to aggregate the motivations and learnings around a problem, so that individual RFCs can focus on a particular proposed solution.

_All PDs are in a [public Google Drive folder](https://drive.google.com/drive/folders/1Wd-Xx2wNbFtSzeJwbZqMOxdbFDUFxlyR)._

## PDs have similar properties to RFCs

They are:

- [Sequentially numbered](../communication/rfcs.md#rfcs-are-sequentially-numbered)
- [Google Docs](../communication/rfcs.md#rfcs-are-google-docs)
- [Public](../communication/rfcs.md#rfcs-are-public)
- [Open to external contributions](../communication/rfcs.md#external-contributors)

## Status

Each PD has a status that is in the title of the PD (e.g. "PD 1 WIP: Title"). The author is responsible for keeping the status updated.

| Status | Description |
|-------|-------------|
| WIP | The author is still drafting the PD and it is not ready for review. |
| REVIEW | The PD is ready to be reviewed. The PD explicitly lists whose reviews are requested and deadline for receiving those reviews. |
| DEFINED | The problem statement defined and agreed upon, and is locked to changes. This is to ensure that anyone involved in solving the problem statement defined within the PD does not need to worry about changing scope. A change to the problem statement likely requires a new PD to be created to define the new problem statement. If the update is minor enough, all interested parties should be notified. |
| ABANDONED | There are no plans to move forward with solving the problem statement defined in the PD. The particular reason is communicated in the metadata section of the PD. For example, the PD may have failed to get the necessary approvals, it may be been superseded by another PD, priorities may have changed, or we may not have resources to work on this PD in the foreseeable future. |
| SOLVED | The problem statement defined in the PD has been solved. |

## PD structure

Effective PDs contain the following information. The below might feel like a heavy structure, this is intentional to help ensure all important considerations and context has been written down. Many sub-sections are very short, and some can be omitted if not relevant to the specific PD.

_For convenience, there is a [Google Docs Template](https://docs.google.com/document/d/1MBZxnRlDG69Fyvzpai5rBqxizvX5zVeZiUe6z7VZrjk/edit?usp=sharing) that can be used when creating new PDs. The template format should help clarify the below structure._

- Title that includes the PD number.
  - The title is inlined in the Google Doc so that it is more visible and will not disappear if exported to a different format.
- Metadata about the state of the PD. Including but not limited to:
  - **Editor:** The person responsible for iterating on the content of the PD.
  - **Status:** A description of the current state or outcome of the PD.
  - **Requested approvers:** The list of people that the PD author is requesting a review from and a requested deadline for those reviews.
  - **Approved by:** A list of people who approve the problem statement defined in the PD.
- **Purpose:** All of the information needed to communicate why this problem statement is important.
  - **Background:** Background or historical information that is relevant and helpful for understanding the problem context.
  - **Target audience:** Who cares about this problem, what customers are impacted, what persona is this solution for?
  - **Problem to solve:** Describe the problem that needs to be solved. This is the central section to the entire document, everything else is written in support of this problem statement.
  - **Business and user value:** Why is solving this problem important to the business? Why do we need to solve it now? How does solving this problem help the user?
  - **Outcomes:** What will the outcome of the solution be? What metric(s) will you track to validate these outcomes?
- **Scope:** What are the different ways in which we are scoping down this problem?
  - **Assumptions:** What assumptions are being made, and how will we validate those assumptions? What hypotheses do we need to validate?
  - **Constraints:** Are there any constraints this problem needs to be solved within? Are there constraints that can be put in place to help reduce scope?
  - **Dependencies:** Are there any other projects or dependencies for this project?
  - **Timing/appetite:** When does this need to be delivered by? What is the urgency? Are there any hard deadlines? What is our appetite for implementation?
- **Discovery:** What are the many solutions to this problem? How can we quickly validate the solutions we think are best? The goal should be to fail fast and iterate until a viable solution is found. Be cautious not to get stuck in a single solution. How do we validate the solution is viable?
  - List of Analogous experiences
  - List of ideas to explore
  - Links to RFCs
- **Design:** Describe the interaction and user experience of the feature.
- **Analytics:** What data point are we looking to move the needle on? What will constitute success for this metric? Describe or create a mock chart or table you’d like to look at to evaluate this. Is this being tracked currently or will additional tracking need to be included in the development?

## How are PDs different from RFCs?

In an RFC, the background and problem sections become links to the associated PD. The PD becomes the place where all context, customer data, and learnings are aggregated for the problem statement. PDs keep track of all of the proposed solutions, ideas, and plans for solving a particular problem. The RFC is a single proposed solution.

In the past, we have simply elevated an RFC to be a "parent RFC", though it didn't quite help orient the team around a problem, and we found that in the RFC format it was easy to fall into "solution or feature blindness" rather than focusing on all the possible things that can be done to solve a particular problem.
