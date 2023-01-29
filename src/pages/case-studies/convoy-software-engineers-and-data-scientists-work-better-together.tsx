import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Convoy adopts Sourcegraph Universal Code Search so software engineers and data scientists work better together',
            description:
                'Sourcegraph case study: At Convoy, Sourcegraph is transforming how engineers and data scientists collaborate, resulting in greater efficiency and improved data integrity.',
            image: '/case-studies/convoy2-sourcegraph-case-study-og-embed.jpg',
        }}
        className="navbar-dark tw-bg-black"
    >
        <CaseStudyLayout
            customer="Convoy"
            title="Convoy adopts Sourcegraph Universal Code Search so software engineers and data scientists work better together"
            logo="/external-logos/convoy-logo-white.svg"
            quote={{
                text: "Now that we are using Sourcegraph, we don't need to worry about data being out of date.",
                author: 'Owen Kim, Senior Software Engineer, Convoy',
                image: '/case-studies/owen-kim-convoy.jpg',
            }}
            pdf="https://sourcegraphstatic.com/convoy_software_engineers_and_data_scientists_work_better_together.pdf"
        >
            <ContentSection background="white">
                <div className="container">
                    <p>
                        Sourcegraph is transforming how engineers and data scientists collaborate, resulting in greater
                        efficiency and improved data integrity. Sourcegraph's multi-repository company-wide code search
                        and navigation enables data scientists to analyze and verify data transformation code
                        independently, and at any time.
                    </p>
                    <p>
                        With Sourcegraph, Convoy's data scientists can trace back how and when data is written to the
                        databases and model endpoints are invoked. They can keep track of Convoy's ever-transforming
                        data warehouse.
                    </p>
                    <Blockquote
                        quote="As a data scientist, it allows me to find code in repos that are owned by engineers. I am able to make sure that the engineers are invoking the logic for my machine learning model correctly or verify how data is created or stored in our database."
                        author="Michael Frasco, Data Scientist, Convoy"
                    />
                    <h2 className="tw-pt-md tw-pb-1">Avoiding expensive mistakes</h2>
                    <p>
                        Prior to using Sourcegraph, Convoy's engineers had to clone repos locally in order to find
                        necessary data. This would cause problems, as Owen, a Senior Software Engineer, recalls:
                    </p>
                    <Blockquote quote="I was asked to provide the max size of our database connection pulls from our clients. To get this number I used my IDE to search through a repository I had cloned locally before. I didn't notice that the repository was outdated and the data I was providing was already a few days old. It consisted of only half of the actual amount which led to a wrong estimation, overprovisioning of a fleet, and messed up database connections. An expensive mistake." />
                    <Blockquote quote="Now that we are using Sourcegraph, we don't need to worry about data being out of date." />
                    <Blockquote
                        quote="Sourcegraph helps you find out who is using what, making it much easier to deprecate, update or iterate on it. You can easily find who to talk to about the use of a certain component. To be able to answer this question in code is extremely powerful and people call it out all the time."
                        author="Owen Kim - Senior Software Engineer, Convoy"
                    />
                    <br />
                </div>
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
