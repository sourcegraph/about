import * as React from 'react'
import { CaseStudyPage, CaseStudyRequestDemoForm, InContentBlockquote } from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Convoy improves developer onboarding',
            description:
                'Since 2015, Convoy has quickly grown to over 500 employees. Sourcegraph helps them improve their developer on-boarding process.',
            image: 'https://about.sourcegraph.com/case-studies/convoy1-sourcegraph-case-study-og-embed.jpg',
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyPage
            customer="Convoy"
            title="Convoy improves developer onboarding"
            logo="/external-logos/convoy-logo-white.svg"
            quote={{
                quote:
                    'Sourcegraph increases the efficiency and confidence of our entry level developers when they build features that touch different parts of our code base.',
                author: 'Brandon Bloom, Senior Software Engineer, Convoy',
                image: '/case-studies/brandon-bloom-convoy.jpg',
            }}
            pdf="https://sourcegraphstatic.com/convoy_improved_on_boarding.pdf"
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
                        For Brandon Bloom, a new hire who was eager to start contributing, using GitHub’s native search
                        across Convoy’s voluminous repositories rarely gave him the results he needed. His frustration
                        led him to Sourcegraph. As an{' '}
                        <a href="https://about.sourcegraph.com/blog/from-saas-to-on-premises">
                            on-prem and self-hosted product
                        </a>
                        , he could safely and independently set up a Sourcegraph instance locally, and was able to get
                        everything up and running within a matter of minutes. Suddenly, searching across hundreds of
                        repositories returned exact results and code affected by any changes became fully traceable
                    </p>
                    <p>
                        It didn’t take long for other engineers in his team to realize the immense benefits Sourcegraph
                        provided when it came to understanding Convoy’s growing code base.
                    </p>
                    <InContentBlockquote
                        quote="It's helped me out a lot. Made going through other people's code much easier and was better for learning different patterns used in other repos."
                        author="Aamir Jawaid, Software Engineer, Convoy"
                    />
                    <InContentBlockquote
                        quote="For our new developers, Sourcegraph has been invaluable to get to know the repository structure, to track down where code lives, and self-service during their investigations."
                        author="Owen Kim, Senior Software Engineer, Convoy"
                    />
                    <p>
                        The usage grew organically and so did the speed in which they were able to ship solutions for
                        complex logistical problems.
                    </p>

                    <InContentBlockquote
                        quote="Fast, org-wide code search is a necessity in any organization, and tooling for this is especially necessary when we’ve chosen a multi-repo approach to code organization.
                        The time I would otherwise spend using either GitHub’s slow search or finding and cloning repos is worth a lot more than $20 / month."
                        author="James Reggio, Principal Engineer, Convoy"
                    />
                    <InContentBlockquote
                        quote="It’s fast, which is super nice. It’s faster than any other tool I’ve ever used for code search. I’ve become more productive with Sourcegraph."
                        author="Ethan Hall, Senior Software Engineer, Convoy"
                    />
                    <br />
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm />
    </Layout>
)) as React.FunctionComponent<any>
