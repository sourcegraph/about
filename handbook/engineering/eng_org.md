# Engineering org

This page documents our current and planned future engineering org structure. Plans can change!

## Philosophy

Our engineering organization is divided into mission based teams that contain the necessary cross-functional skillsets to achieve the desired mission. The leaders of each team (at every layer) is responsible for ensuring appropriate cross-team collaboration happens when necessary.

## Transferring teams

If you are already at Sourcegraph and see a current or future opportunity that you're interested in, please tell your manager. Your manager will chat with you to understand what you want and then propose next steps. Team transfers need to be approved by the [VP of Engineering](roles.md#vp-engineering).

## Organization

- [Beyang Liu](../../../company/team/index.md#beyang-liu), CTO
- [Nick Snyder](../../../company/team/index.md#nick-snyder-he-him), [VP Engineering](roles.md#vp-engineering)
    - Search and replace (WIP name)
        - FQ3 Engineering director, Nick acting manager until then.
        - [Team: Search core backend](search/index.md#search-core-backend-eng)
        - [Team: Search product](search/index.md#search-product-eng)
        - Code intelligence
            - [Team: Code intelligence](code-intelligence/index.md#code-intelligence-eng)
        - Campaigns
            - [Team: Campaigns](campaigns/index.md#campaigns-eng)
    - Org: Web (WIP name)
        - [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) ([Engineering Manager](roles.md#engineering-manager))
        - [Team: Frontend platform](web/index.md#frontend-platform-eng)
        - [Team: Extensibility](web/index.md#extensibility-eng)
        - [Team: Code insights](code-insights/index.md#code-insights-eng)
    - Platform and infrastructure {#platform-and-infrastructure}
        - FQ1 [director of engineering](https://jobs.lever.co/sourcegraph/8fcbaade-e511-4d93-bd9b-9cc7ec3438af), Nick acting manager until then.
        - Team: [Security](security/index.md) {#security}
            - FQ1 [Engineering Manager](roles.md#engineering-manager), Nick acting manager until then.
                - [Elizabeth Stirling](../../../company/team/index.md#elizabeth-stirling-she-her)
                - [André Eleuterio](../../../company/team/index.md#andré-eleuterio-hehim)
                - FQ1 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
                - FQ2 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
                - FQ3 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
                - FQ4 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
        - Team: [Distribution](distribution/index.md) {#distribution}
            - [Gonzalo Peci](../../../company/team/index.md#gonzalo-peci-hehim) ([Engineering Manager](roles.md#engineering-manager))
                - [Geoffrey Gilmore](../../../company/team/index.md#geoffrey-gilmore)
                - [Dave Try](../../../company/team/index.md#dave-try)
                - [Robert Lin](../../../company/team/index.md#robert-lin) (on leave, return TBD)
                - [Dax McDonald](../../../company/team/index.md#dax-mcdonald-he-him)
                - [Stephen Gutekanst](../../../company/team/index.md#stephen-gutekanst)
                - FQ1 [distribution engineer](https://jobs.lever.co/sourcegraph/ddef3b91-ce19-4b22-8db4-65e159d7ff2b)
                - FQ1 [distribution engineer](https://jobs.lever.co/sourcegraph/ddef3b91-ce19-4b22-8db4-65e159d7ff2b)
        - Team: Core application (currently [Cloud team](cloud/index.md)) {#core-application}
            - FQ1 [Engineering Manager](roles.md#engineering-manager), Tomás acting manager until then.
                - [Joe Chen](../../../company/team/index.md#joe-chen)
                - [Ryan Slade](../../../company/team/index.md#ryan-slade-he-him)
                - [Alan Harris](../../../company/team/index.md#alan-harris-he-him)
                - [Artem Ruts](../../../company/team/index.md#artem-ruts-he-him)
                - [Alex Russell-Saw](../../../company/team/index.md#alex-russell-saw-he-him)
                - I. G. estimated start date is February 1st 2021
                - FQ1 [frontend engineer](https://jobs.lever.co/sourcegraph/b2f9a8b0-cc06-4629-81a0-0f2fa64271c7)
        - Team: Backend platform (currently [Cloud team](cloud/index.md)) {#backend-platform}
            - FQ2 [Engineering Manager](roles.md#engineering-manager), Tomás acting manager until then.
                - [Tomás Senart](../../../company/team/index.md#tomás-senart)
                - [Asdine El Hrychy](../../../company/team/index.md#asdine-el-hrychy)
                - FQ2 backend engineer
                - FQ3 backend engineer
                - FQ4 backend engineer

<script>
// This script injects the org chart content into each section of this page that links to a team page.
// It is similar to the script used to compile the goals in ../goals/index.md.

async function getPageOrgChart(pageUrl) {
    console.log(pageUrl)
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
console.log(teamAnchors)
Promise.all(
	teamAnchors.map(async a => ({
		anchor: a,
		content: await getPageOrgChart(a.href),
	}))
).then(data => {
	for (const {anchor, content} of data) {
        // Replace the parent node list item
        anchor.parentNode.replaceWith(content)
	}
})
</script>
