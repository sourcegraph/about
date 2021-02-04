# Engineering org

This page documents our current and planned future engineering org structure. Plans can change!

## Philosophy

Our engineering organization is divided into mission based teams that contain the necessary cross-functional skillsets to achieve the desired mission. The leaders of each team (at every layer) is responsible for ensuring appropriate cross-team collaboration happens when necessary.

## Transferring teams

If you are already at Sourcegraph and see a current or future opportunity that you're interested in, please tell your manager. Your manager will chat with you to understand what you want and then propose next steps. Team transfers need to be approved by the [VP of Engineering](roles.md#vp-engineering).

## Organization

- [Beyang Liu](../../../company/team/index.md#beyang-liu), CTO
- [Nick Snyder](../../../company/team/index.md#nick-snyder-he-him), [VP Engineering](roles.md#vp-engineering)
    - Org: Search and replace (WIP name)
        - FQ3 Engineering director, Nick acting manager until then.
        - Team: Search core backend (currently [Search](search/index.md)) {#search-core-backend}
            - FQ2 [Engineering Manager](roles.md#engineering-manager), Loïc acting manager until then.
                - [Keegan Carruthers-Smith](../../../company/team/index.md#keegan-carruthers-smith)
                - [Stefan Hengl](../../../company/team/index.md#stefan-hengl-he-him)
                - FQ1 backend engineer
                - FQ3 backend engineer
        - Team: Search product (currently [Search](search/index.md)) {#search-product}
            - [Loïc Guychard](../../../company/team/index.md#loïc-guychard) ([Engineering Manager](roles.md#engineering-manager))
                - [Rijnard van Tonder](../../../company/team/index.md#rijnard-van-tonder)
                - [Juliana Peña](../../../company/team/index.md#juliana-peña-she-her)
                - [Rok Novosel](../../../company/team/index.md#rok-novosel-he-him)
                - [Camden Cheek](../../../company/team/index.md#camden-cheek-hehim)
                - FQ2 backend hire
                - FQ2 frontend hire
                - FQ3/4 TBD
        - Team: [Code intelligence](code-intelligence/index.md) {#code-intelligence}
            - [Owen Convey](../../../company/team/index.md#owen-convey-he-him) ([Engineering Manager](roles.md#engineering-manager))
                - [Eric Fritz](../../../company/team/index.md#eric-fritz-he-him)
                - [Garo Brik](../../../company/team/index.md#garo-brik-they-them)
                - [Noah Santschi-Cooney](../../../company/team/index.md#noah-santschi-cooney-he-him)
                - [Ólafur Páll Geirsson](../../../company/team/index.md#olafurpg)
                - T.J. Devries
                - FQ2 engineer
                - FQ3 engineer
                - FQ4 engineer
        - Team: [Campaigns](campaigns/index.md) {#campaigns}
            - [Chris Pine](../../../company/team/index.md#chris-pine-he-she-they-chris) ([Engineering Manager](roles.md#engineering-manager))
                - [Thorsten Ball](../../../company/team/index.md#thorsten-ball-he-him)
                - [Adam Harvey](../../../company/team/index.md#adam-harvey-he-him)
                - [Erik Seliger](../../../company/team/index.md#erik-seliger)
                - FQ1 [full-stack engineer](https://jobs.lever.co/sourcegraph/886e4343-6efc-4ab1-b204-f9115cfdeae3)
                - FQ2 engineer
                - FQ3/4 TBD
    - Org: Web (WIP name)
        - [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) ([Engineering Manager](roles.md#engineering-manager))
        - Team: Frontend platform (currently [web team](web/index.md)) {#frontend-platform}
            - FQ1 [Engineering Manager](roles.md#engineering-manager), Jean acting manager until then.
                - [Tom Ross](../../../company/team/index.md#tom-ross-he-him)
                - [Felipe Janer](../../../company/team/index.md#felipe-janer-he-him)
                - V.B.
                - FQ3 frontend engineer
                - FQ4 frontend engineer
        - Team: Extensibility (currently [web team](web/index.md) {#extensibility}
            - FQ3 [Engineering Manager](roles.md#engineering-manager), Jean acting manager until then.
                - [Marek Zaluski](../../../company/team/index.md#marek-zaluski)
                - [TJ Kandala](../../../company/team/index.md#tharuntej-kandala-he-him)
                - FQ1 frontend engineer
                - FQ2 frontend engineer
                - FQ4 frontend engineer
        - Team: [Code insights](code-insights/index.md) {#code-insights}
            - [Felix Becker](../../../company/team/index.md#felix-becker) ([Engineering Manager](roles.md#engineering-manager))
                - FQ1 [backend engineer](https://jobs.lever.co/sourcegraph/a0dba744-ed1d-4172-8a4a-0feb52609322)
                - FQ1 [frontend engineer](https://jobs.lever.co/sourcegraph/73fda68b-c821-4627-af07-41a0850072fb)
                - FQ2 [frontend engineer](https://jobs.lever.co/sourcegraph/73fda68b-c821-4627-af07-41a0850072fb)
                - FQ3 [frontend engineer](https://jobs.lever.co/sourcegraph/73fda68b-c821-4627-af07-41a0850072fb)
                - FQ4 [frontend engineer](https://jobs.lever.co/sourcegraph/73fda68b-c821-4627-af07-41a0850072fb)
    - Org: Platform and infrastructure {#platform-and-infrastructure}
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
