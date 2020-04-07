import * as React from 'react'
import { CaseStudyPage, CaseStudyRequestDemoForm, InContentBlockquote } from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title:
                'Convoy adopts Sourcegraph Universal Code Search so software engineers and data scientists work better together',
            description:
                'At Convoy, Sourcegraph is transforming how engineers and data scientists collaborate, resulting in greater efficiency and improved data integrity.',
            image: 'https://about.sourcegraph.com/case-studies/convoy2-sourcegraph-case-study-og-embed.jpg',
        }}
    >
        <CaseStudyPage
            customer="Convoy"
            title="Convoy adopts Sourcegraph Universal Code Search so software engineers and data scientists work better together"
            logo="/external-logos/convoy-logo-white.svg"
            quote={{
                quote: 'Now that we are using Sourcegraph, we don’t need to worry about data being out of date.',
                author: 'Owen Kim, Senior Software Engineer, Convoy',
                image: '/case-studies/owen-kim-convoy.jpg',
            }}
            pdf="https://storage.googleapis.com/sourcegraph-assets/convoy_software_engineers_and_data_scientists_work_better_together.pdf"
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
                        With Sourcegraph, Convoy’s data scientists can trace back how and when data is written to the
                        databases and model endpoints are invoked. They can keep track of Convoy’s ever-transforming
                        data warehouse.
                    </p>
                    <InContentBlockquote
                        quote="As a data scientist, it allows me to find code in repos that are owned by engineers. I am able to make sure that the engineers are invoking the logic for my machine learning model correctly or verify how data is created or stored in our database."
                        author="Michael Frasco, Data Scientist, Convoy"
                    />
                    <h2 className="pt-5 pb-1">Avoiding expensive mistakes</h2>
                    <p>
                        Prior to using Sourcegraph, Convoy’s engineers had to clone repos locally in order to find
                        necessary data. This would cause problems, as Owen, a Senior Software Engineer, recalls:
                    </p>
                    <InContentBlockquote quote="I was asked to provide the max size of our database connection pulls from our clients. To get this number I used my IDE to search through a repository I had cloned locally before. I didn’t notice that the repository was outdated and the data I was providing was already a few days old. It consisted of only half of the actual amount which led to a wrong estimation, overprovisioning of a fleet, and messed up database connections. An expensive mistake." />
                    <InContentBlockquote
                        quote="
                        Now that we are using Sourcegraph, we don’t need to worry about data being out of date."
                    />
                    <InContentBlockquote
                        quote="Sourcegraph helps you find out who is using what, making it much easier to deprecate, update or iterate on it. You can easily find who to talk to about the use of a certain component. To be able to answer this question in code is extremely powerful and people call it out all the time."
                        author="Owen Kim - Senior Software Engineer, Convoy"
                    />
                    <br />
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm />
    </Layout>
)) as React.FunctionComponent<any>
