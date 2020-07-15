# Org chart

The org chart is generated automatically. [Need to edit it?](#how-to-edit)

<div id="org-chart-loading">
	Generating org chart...
	<br/>
	<small>If the org chart does not appear, please <a href="https://github.com/sourcegraph/about/issues">report this issue</a> and include the output from your browser's devtools JavaScript console.</small>
</div>

## Engineering
<!-- When updating the engineering team list below, please also update handbook/index.md. -->
### [Engineering: Distribution team](../../handbook/engineering/distribution/index.md#members)
### [Engineering: Campaigns team](../../handbook/engineering/campaigns/index.md#members)
### [Engineering: Cloud team](../../handbook/engineering/cloud/index.md#members)
### [Engineering: Code intelligence team](../../handbook/engineering/code-intelligence/index.md#members)
### [Engineering: Search team](../../handbook/engineering/search/index.md#members)
### [Engineering: Security team](../../handbook/engineering/security/index.md#members)
### [Engineering: Web team](../../handbook/engineering/web/index.md#members)

## Other teams: TODO

Not all teams are listed here yet.

---

## How to edit

This org chart is generated automatically based on the contents of other handbook pages.

1. To add a team, [edit this page](https://github.com/sourcegraph/about/edit/master/company/team/org_chart.md) and add a link to the section of the team's page that lists the members (such as `### [My team](../../handbook/myteam/index.md#members)`).
1. To edit a team, edit the linked section on the team's page. In the example above, you'd edit the `Members` section of `../../handbook/myteam/index.md`. Everything in that section until the next heading is displayed on this page.
1. To add any other text or structure to this page, just insert it as you would normally. Only 3rd-level heading links (lines that start with `###` and that have a link) are treated specially; all other content is preserved.

<script>
// This script injects the org chart content into each section of this page that links to a team page.

async function getPageOrgChart(pageUrl) {
	const sectionId = pageUrl.replace(/^.*#/, '')

	const resp = await fetch(pageUrl)
	const doc = new DOMParser().parseFromString(await resp.text(), "text/html")
	const section = doc.getElementById(sectionId)
	if (!section) {
		const error = document.createElement('p')
		error.innerText = `Error generating org chart: page at ${pageUrl} has no section with ID ${sectionId}.`
		return error
	}

	const wrapper = document.createElement('section')
	const iterator = doc.createNodeIterator(doc, NodeFilter.SHOW_ELEMENT, () => NodeFilter.FILTER_ACCEPT)
	let curNode
	let orgChartStarted = false
	while (curNode = iterator.nextNode()) {
		if (curNode instanceof HTMLHeadingElement && curNode.id === sectionId) {
			orgChartStarted = true
			continue
		}
		if (orgChartStarted) {
			// End at next heading.
			if (curNode instanceof HTMLHeadingElement) {
				break
			}

			wrapper.appendChild(curNode)
		}
	}
	return wrapper
}

const sectionHeaders = Array.from(document.querySelectorAll('h3')).filter(section => Boolean(section.querySelector('a[href]:not([aria-hidden])')))
Promise.all(
	sectionHeaders.map(async sectionHeader => ({
		header: sectionHeader,
		content: await getPageOrgChart(sectionHeader.querySelector('a[href]:not([aria-hidden])').href),
	}))
).then(sections => {
	const loading = document.getElementById('org-chart-loading')
	loading.innerHTML = '' // clear

	for (const {header, content} of sections) {
		header.parentNode.insertBefore(content, header.nextSibling)
	}
})
</script>
