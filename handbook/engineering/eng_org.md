# Engineering org

This page documents our current and planned future engineering org structure. Plans can change!

## Philosophy

Our engineering organization is divided into mission based teams that contain the necessary cross-functional skillsets to achieve the desired mission. The leaders of each team (at every layer) is responsible for ensuring appropriate cross-team collaboration happens when necessary.

## Transferring teams

If you are already at Sourcegraph and see a current or future opportunity that you're interested in, please tell your manager. Your manager will chat with you to understand what you want and then propose next steps. Team transfers need to be approved by the [VP of Engineering](roles.md#vp-engineering).

## Current organization

- [Nick Snyder](index.md#nick-snyder-he-him), [VP Engineering](../../handbook/engineering/roles.md#vp-engineering) (reports to [Beyang Liu](index.md#beyang-liu), CTO)
    - Global code graph
        - [Search core](../../handbook/engineering/search/core.md)
        - [Search product](../../handbook/engineering/search/product.md)
        - [Code intelligence](../../handbook/engineering/code-intelligence/index.md)
        - [Batch Changes](../../handbook/engineering/batch-changes/index.md)
    - [Developer Insights](../../handbook/engineering/developer-insights/index.md)
        - [Frontend platform](../../handbook/engineering/developer-insights/frontend-platform/index.md)
        - [Extensibility](../../handbook/engineering/developer-insights/extensibility/index.md)
        - [Code insights](../../handbook/engineering/developer-insights/code-insights/index.md)
        - [API docs](../../handbook/engineering/developer-insights/api-docs/index.md)
    - Platform and infrastructure
        - [Security](../../handbook/engineering/security/index.md)
        - [Distribution](../../handbook/engineering/distribution/index.md)
        - [Core application](../../handbook/engineering/core-application/index.md)

## Planned organization

This is the current plan for our engineering organization and growth.

Plans can change given new information!

- [Nick Snyder](../../../company/team/index.md#nick-snyder-he-him), [VP Engineering](roles.md#vp-engineering) (reports to [Beyang Liu](index.md#beyang-liu), CTO)
    - Global code graph {#global-code-graph}
        - FQ2 [Director of Engineering](https://boards.greenhouse.io/sourcegraph91/jobs/4005231004). Nick acting director until then.
        - [Search core](search/core.md)
            - [Team: Search core](search/core.md#search-core-eng)
        - [Search product](search/product.md)
            - [Team: Search product](search/product.md#search-product-eng)
        - [Code intelligence](code-intelligence/index.md)
            - [Team: Code intelligence](code-intelligence/index.md#code-intelligence-eng)
        - [Batch Changes](batch-changes/index.md)
            - [Team: Batch Changes](batch-changes/index.md#batch-changes-eng)
    - Developer Insights {#developer-insights}
        - [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) ([Director of Engineering](roles.md#director-of-engineering))
        - [Code insights](developer-insights/code-insights/index.md)
            - [Team: Code insights](developer-insights/code-insights/index.md#code-insights-eng)
        - [Extensibility](developer-insights/extensibility/index.md)
            - [Team: Extensibility](developer-insights/extensibility/index.md#extensibility-eng)
        - [Frontend platform](developer-insights/frontend-platform/index.md)
            - [Team: Frontend platform](developer-insights/frontend-platform/index.md#frontend-platform-eng)
        - [API docs](developer-insights/api-docs/index.md)
            - [Team: API docs](developer-insights/api-docs/index.md#api-docs-eng)
    - Platform and infrastructure {#platform-and-infrastructure}
        - [Bill Creager](../../../company/team/index.md#bill-creager) ([Director of Engineering](roles.md#director-of-engineering))
        - [Security](security/index.md)
            - [Team: Security](security/index.md#security-eng)
        - [Distribution](distribution/index.md)
            - [Team: Distribution](distribution/index.md#distribution-eng)
        - [Core application](core-application/index.md)
            - [Team: Core application](core-application/index.md#core-application-eng)

[VP Eng team docs](vpe/index.md).

<script>
// This script injects the org chart content into each section of this page that links to a team page.
// It is similar to the script used to compile the goals in ../goals/index.md.

async function getPageOrgList(pageUrl) {
	const sectionId = pageUrl.replace(/^.*#/, '')

	const resp = await fetch(pageUrl)
	const doc = new DOMParser().parseFromString(await resp.text(), "text/html")
	const section = doc.getElementById(sectionId)
	if (!section) {
		const error = document.createElement('p')
		error.innerText = `Error generating org chart: page at ${pageUrl} has no section with ID ${sectionId}.`
		return error
	}
    return section.parentNode
}

const teamAnchors = Array.from(document.querySelectorAll('a')).filter(a => a.innerText.startsWith('Team: '))
Promise.all(
	teamAnchors.map(async a => ({
		anchor: a,
		content: await getPageOrgList(a.href),
	}))
).then(data => {
	for (const {anchor, content} of data) {
        // Replace the parent node list item
        anchor.parentNode.replaceWith(content)
	}
})
</script>
