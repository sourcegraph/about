import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection } from '@components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Convoy improves developer onboarding',
            description:
                'Sourcegraph case study: At Convoy, Sourcegraph helps improves the developer on-boarding process.',
            image: 'https://about.sourcegraph.com/case-studies/convoy1-sourcegraph-case-study-og-embed.jpg',
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyLayout
            customer="Convoy"
            title="Convoy improves developer onboarding"
            logo="/external-logos/convoy-logo-white.svg"
            quote={{
                quote: 'Sourcegraph increases the efficiency and confidence of our entry level developers when they build features that touch different parts of our code base.',
                author: 'Brandon Bloom, Senior Software Engineer, Convoy',
                image: '/case-studies/brandon-bloom-convoy.jpg',
            }}
        >
            <ContentSection color="white" className="col-md-6">
                <div className="container">
                    <p>
                        Founded in 2015, Convoy has quickly grown to over 500 employees. However, their accelerated team
                        growth comes with challenges: new hires have to quickly learn how to contribute to a dynamic
                        system of microservices.
                    </p>

                    <h2 className="pt-5 pb-1">Onboarding new hires</h2>

                    <p>
                        For Brandon Bloom, a new hire who was eager to start contributing, using GitHub's native search
                        across Convoy's voluminous repositories rarely gave him the results he needed. His frustration
                        led him to Sourcegraph. As an{' '}
                        <a href="https://about.sourcegraph.com/blog/from-saas-to-on-premises">
                            on-prem and self-hosted product
                        </a>
                        , he could safely and independently set up a Sourcegraph instance locally, and was able to get
                        everything up and running within a matter of minutes. Suddenly, searching across hundreds of
                        repositories returned exact results and code affected by any changes became fully traceable
                    </p>

                    <p>
                        It didn't take long for other engineers in his team to realize the immense benefits Sourcegraph
                        provided when it came to understanding Convoy's growing code base.
                    </p>

                    <p>
                        The usage grew organically and so did the speed in which they were able to ship solutions for
                        complex logistical problems.
                    </p>

                    <br />
                </div>
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
