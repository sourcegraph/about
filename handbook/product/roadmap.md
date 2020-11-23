# Product roadmap

We strive for an outcome-based roadmap: each roadamp item should describe the problem we want to solve or outcome we want to achieve.

## Roadmap visualization

<!-- Gantt chart syntax documentation: https://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/gantt.html -->

<pre class="mermaid" data-rendered-width="150%" data-scroll-right="50%">
gantt
    title In progress work
    dateFormat YYYY-MM-DD
    axisFormat %b %d

section Milestones
    3.21 :active, release-3.21, 2020-09-21, 2020-10-20
    3.22 :        release-3.22, 2020-10-21, 2020-11-20

section Cloud
    User added code is indexed and searchable                 :done,   2020-09-23, 2020-10-07
    RFC 167 - Product license tiers                           :active, 2020-10-07, 14d
    Syncing repos is more scalable                            :active, 2020-10-07, 14d
    Metrics/monitoring in place                               :active, 2020-10-07, 14d
    GitHub app to simplify access to repositories (spike)     :        2020-10-21, 2d
    Webhooks to receive repo permissions and metadata (spike) :        2020-10-21, 2d

section Web
    Browser extension discoverability                         :done,    2020-09-28, 14d
    Build new and improved extensions                         :active,   2020-10-12, 14d
    Improve extensions development + docs                     :         2020-10-26, 14d
    Code insights TBD                                         :         2020-11-09, 14d
    Web nav updates                                           :         2020-11-09, 7d
    Breadcrumbs                                               :         2020-11-16, 7d
</pre>

<div id="roadmap-loading">
	Compiling roadmap...
	<br/>
	<small>If the roadmaps do not appear, please <a href="https://github.com/sourcegraph/about/issues">report this issue</a> and include the output from your browser's devtools JavaScript console.</small>
</div>

## [Campaigns roadmap](../engineering/campaigns/goals.md#roadmap)
## [Cloud roadmap](../engineering/cloud/goals.md#roadmap)
## [Code Intel roadmap](../engineering/code-intelligence/goals.md#roadmap)
## [Distribution roadmap](../engineering/distribution/goals.md#roadmap)
## [Search roadmap](../engineering/search/goals.md#roadmap)
## [Security roadmap](../engineering/security/goals.md#roadmap)
## [Web roadmap](../engineering/web/goals.md#roadmap)

---

## How to edit

This page is generated automatically based on the contents of other handbook pages.

1. To add a team's roadmap, [edit this page](https://github.com/sourcegraph/about/edit/main/handbook/product/roadmap.md) and add a link to the section of the team's page that lists the roadmap (such as `### [My team](../../handbook/myteam/goals.md#roadmap)`). If the entire page is about the rooadmap, omit the section from the URL (for example, omit `#roadmap`).
1. To edit a team's roadmap, edit the linked section on the team's page. In the example above, you'd edit the `Roadmap` section of `../../handbook/myteam/goals.md`. Everything in that section until the next same-level heading is displayed on this page.
1. To add any other text or structure to this page, just insert it as you would normally. Only 3rd-level heading links (lines that start with `###` and that have a link) are treated specially; all other content is preserved.

<script>
// This script injects the roadmap content into each section of this page that links to a team page.
// It is similar to the script used to generate the org chart in ../../company/team/org_chart.md and ../../company/goals/index.md

const getHeadingLevel = heading => heading instanceof HTMLHeadingElement ? parseInt(heading.tagName.slice(1), 10) : undefined

const cloneHeading = (origHeading, level) => {
	const newHeading = document.createElement(`h${level}`)
	newHeading.innerHTML = origHeading.innerHTML
	return newHeading
}

async function getPageSectionContent(pageUrl, level) {
	const sectionId = pageUrl.includes('#') ? pageUrl.replace(/^.*#/, '') : null

	const resp = await fetch(pageUrl)
	const doc = new DOMParser().parseFromString(await resp.text(), "text/html")
	const section = sectionId ? doc.getElementById(sectionId) : doc.querySelector('.markdown-body > h1')
	if (!section) {
		const error = document.createElement('p')
		error.innerText = `Error compiling roadmap: page at ${pageUrl} has no ${sectionId ? `section with ID ${sectionId}` : 'content'}.`
		return error
	}

	const wrapper = document.createElement('section')
	const iterator = doc.createNodeIterator(doc, NodeFilter.SHOW_ELEMENT, () => NodeFilter.FILTER_ACCEPT)
	let curNode
	let started = false
	let startLevel = undefined
	let demoteByLevels = undefined
	while (curNode = iterator.nextNode()) {
		if (curNode instanceof HTMLHeadingElement && sectionId ? curNode.id === sectionId : curNode === section) {
			started = true
			startLevel = getHeadingLevel(curNode)
			demoteByLevels = level - startLevel
			continue
		}
		if (started) {
			if (curNode instanceof HTMLHeadingElement) {
				const curNodeLevel = getHeadingLevel(curNode)

				if (curNodeLevel <= startLevel) {
					// End at next same-level heading.
					break
				}

				// Demote headings so that the injected content's headings are smaller.
				const demotedLevel = Math.min(curNodeLevel + demoteByLevels, 6)
				curNode = cloneHeading(curNode, demotedLevel)
			}

			wrapper.appendChild(curNode)
		}
	}

	return wrapper
}

const sectionHeaders = Array.from(document.querySelectorAll('h2,h3')).filter(section => Boolean(section.querySelector('a[href]:not([aria-hidden])')))
Promise.all(
	sectionHeaders.map(async sectionHeader => ({
		header: sectionHeader,
		content: await getPageSectionContent(
			sectionHeader.querySelector('a[href]:not([aria-hidden])').href,
			getHeadingLevel(sectionHeader)
		),
	}))
).then(sections => {
	const loading = document.getElementById('roadmap-loading')
	loading.innerHTML = '' // clear

	for (const {header, content} of sections) {
		header.parentNode.insertBefore(content, header.nextSibling)
	}
})
</script>
