import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection } from '@components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Convoy adopts Sourcegraph Universal Code Search so software engineers and data scientists work better together',
            description:
                'Sourcegraph case study: At Convoy, Sourcegraph is transforming how engineers and data scientists collaborate, resulting in greater efficiency and improved data integrity.',
            image: 'https://about.sourcegraph.com/case-studies/convoy2-sourcegraph-case-study-og-embed.jpg',
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyLayout
            customer="Convoy"
            title="Convoy adopts Sourcegraph Universal Code Search so software engineers and data scientists work better together"
            logo="/external-logos/convoy-logo-white.svg"
            quote={{
                quote: 'Now that we are using Sourcegraph, we don\'t need to worry about data being out of date.',
                author: 'Owen Kim, Senior Software Engineer, Convoy',
                image: '/case-studies/owen-kim-convoy.jpg',
            }}
            pdf="https://sourcegraphstatic.com/convoy_software_engineers_and_data_scientists_work_better_together.pdf"
        >
            <ContentSection color="white" className="col-md-6">
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
            
                    <h2 className="pt-5 pb-1">Avoiding expensive mistakes</h2>

                    <p>
                        Prior to using Sourcegraph, Convoy's engineers had to clone repos locally in order to find
                        necessary data. This would cause problems, as Owen, a Senior Software Engineer, recalls:
                    </p>

                    <br />
                </div>
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
