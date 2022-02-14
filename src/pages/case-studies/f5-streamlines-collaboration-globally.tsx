import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection } from '@components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'F5 streamlines collaboration for global and distributed software teams',
            description:
                "With Sourcegraph, F5's global workforce can stay better connected and quickly solve problems across the entire codebase.",
            image: 'https://about.sourcegraph.com/external-logos/f5-logo.svg',
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyLayout
            customer="F5"
            title="F5 streamlines collaboration for global and distributed software teams"
            logo="/external-logos/f5-logo-white.svg"
            quote={{
                quote: 'Sourcegraph is our answer for sharing information and facilitating easy collaboration across teams, despite the boundaries of distance and time.',
                author: 'Satish Surapaneni, Senior Manager, Engineering, F5',
                image: '/case-studies/satish-surapaneni-f5.jpg',
            }}
        >
            <ContentSection color="white" className="col-md-6 pb-5">

                <div className="container">
                    <p>
                        F5 focuses on the development, delivery, security, performance, and availability of web
                        applications across any multi-cloud environment. The team behind its next-gen software
                        infrastructure project started with zero code a year and a half ago, and now has more than 350
                        repositories, multiple programming languages, and 125 developers across six different time
                        zones. This project will live for 10+ years, and the code will inevitably grow by orders of
                        magnitude during that time.
                    </p>

                    <h2 className="pt-5 pb-1">Knocking down silos</h2>
                    
                    <p>
                        Sourcegraph supports collaboration across F5's teams by indexing code so that developers can
                        easily find what they're looking for across the entire codebase.
                    </p>
                    
                    <h2 className="pt-5 pb-1">Overcoming API boundaries</h2>

                    <p>
                        Sourcegraph empowers teams across different API boundaries to communicate and work together more
                        effectively. Developers at F5 now have a common way to discuss their code, understand
                        dependencies, and see how one team is using the other team's APIs.
                    </p>
                    
                    <h2 className="pt-5 pb-1">Bringing teams together</h2>

                    <p>
                        F5 is comprised of teams that work more than 12 hours apart in different time zones. Sourcegraph
                        makes communication simple by enabling developers to read and understand each others' code.
                    </p>
                    
                    <p>
                        With Sourcegraph, F5's global workforce can stay better connected and quickly solve problems
                        across the entire codebase.
                    </p>
                </div>
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
