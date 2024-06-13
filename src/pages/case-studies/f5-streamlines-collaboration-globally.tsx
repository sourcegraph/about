import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'F5 streamlines collaboration for global and distributed software teams',
            description:
                "With Sourcegraph, F5's global workforce can stay better connected and quickly solve problems across the entire codebase.",
        }}
        headerColorTheme="dark"
    >
        <CaseStudyLayout
            customer="F5"
            title="F5 streamlines collaboration for global and distributed software teams"
            logo="/external-logos/f5-logo-white.svg"
            quote={{
                text: 'Sourcegraph is our answer for sharing information and facilitating easy collaboration across teams, despite the boundaries of distance and time.',
                author: 'Satish Surapaneni, Senior Manager, Engineering, F5',
                image: '/case-studies/satish-surapaneni-f5.jpg',
            }}
        >
            <ContentSection background="white" slimWidth={true} className="pb-8">
                <p>
                    F5 focuses on the development, delivery, security, performance, and availability of web applications
                    across any multi-cloud environment. The team behind its next-gen software infrastructure project
                    started with zero code a year and a half ago, and now has more than 350 repositories, multiple
                    programming languages, and 125 developers across six different time zones. This project will live
                    for 10+ years, and the code will inevitably grow by orders of magnitude during that time.
                </p>
                <h2 className="pt-8 pb-1">Knocking down silos</h2>
                <Blockquote quote="Before Sourcegraph, each of our teams was siloed. Developers could understand their own codebase, but it was difficult for them to see and understand other team members' code." />
                <p>
                    Sourcegraph supports collaboration across F5's teams by indexing code so that developers can easily
                    find what they're looking for across the entire codebase.
                </p>
                <Blockquote quote="If I want to have a dialogue with a developer on a different team, it's as simple as pulling up Sourcegraph and walking through the code." />
                <h2 className="pt-8 pb-1">Overcoming API boundaries</h2>
                <p>
                    Sourcegraph empowers teams across different API boundaries to communicate and work together more
                    effectively. Developers at F5 now have a common way to discuss their code, understand dependencies,
                    and see how one team is using the other team's APIs.
                </p>
                <Blockquote quote="When implementing a feature and testing an API, we use Sourcegraph to go through the API and how it's implemented, see different parameters, read through the code around that API, and understand it better so that we can be better testers. If there are bugs, it's easy to understand the conditions around the error message and give meaningful feedback to our developers." />
                <h2 className="pt-8 pb-1">Bringing teams together</h2>
                <p>
                    F5 is comprised of teams that work more than 12 hours apart in different time zones. Sourcegraph
                    makes communication simple by enabling developers to read and understand each others' code.
                </p>
                <Blockquote quote="When I work with remote teams and I want to give them an example of a piece or pattern of code, I use Sourcegraph to find the code snippets I need and simply send them the links. This is especially helpful because I can see who wrote the code and find out their thinking behind it." />
                <Blockquote quote="We are developing software faster than ever, with aggressive schedules, and across boundaries. Things that used to be worked out in a closed room now need to be done while teams are spread out across the globe. Sourcegraph is essential in this environment, and I can't imagine being proficient at my job without it." />
                <p>
                    With Sourcegraph, F5's global workforce can stay better connected and quickly solve problems across
                    the entire codebase.
                </p>
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
