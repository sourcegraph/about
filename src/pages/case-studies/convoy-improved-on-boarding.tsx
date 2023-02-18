import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Convoy improves developer onboarding',
            description:
                'Sourcegraph case study: At Convoy, Sourcegraph helps improves the developer on-boarding process.',
        }}
        headerColorTheme="dark"
    >
        <CaseStudyLayout
            customer="Convoy"
            title="Convoy improves developer onboarding"
            logo="/external-logos/convoy-logo-white.svg"
            quote={{
                text: 'Sourcegraph increases the efficiency and confidence of our entry level developers when they build features that touch different parts of our code base.',
                author: 'Brandon Bloom, Senior Software Engineer, Convoy',
                image: '/case-studies/brandon-bloom-convoy.jpg',
            }}
        >
            <ContentSection background="white" slimWidth={true}>
                <p>
                    Founded in 2015, Convoy has quickly grown to over 500 employees. However, their accelerated team
                    growth comes with challenges: new hires have to quickly learn how to contribute to a dynamic system
                    of microservices.
                </p>
                <h2 className="pt-md pb-1">Onboarding new hires</h2>
                <p>
                    For Brandon Bloom, a new hire who was eager to start contributing, using GitHub's native search
                    across Convoy's voluminous repositories rarely gave him the results he needed. His frustration led
                    him to Sourcegraph. As an{' '}
                    <a
                        href="https://about.sourcegraph.com/blog/from-saas-to-on-premises"
                        title="on-prem and self-hosted product"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
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
                <Blockquote
                    quote="It's helped me out a lot. Made going through other people's code much easier and was better for learning different patterns used in other repos."
                    author="Aamir Jawaid, Software Engineer, Convoy"
                />
                <Blockquote
                    quote="For our new developers, Sourcegraph has been invaluable to get to know the repository structure, to track down where code lives, and self-service during their investigations."
                    author="Owen Kim, Senior Software Engineer, Convoy"
                />
                <p>
                    The usage grew organically and so did the speed in which they were able to ship solutions for
                    complex logistical problems.
                </p>

                <Blockquote
                    quote="Fast, org-wide code search is a necessity in any organization, and tooling for this is especially necessary when we've chosen a multi-repo approach to code organization.
                    The time I would otherwise spend using either GitHub's slow search or finding and cloning repos is worth a lot."
                    author="James Reggio, Principal Engineer, Convoy"
                />
                <Blockquote
                    quote="It's fast, which is super nice. It's faster than any other tool I've ever used for code search. I've become more productive with Sourcegraph."
                    author="Ethan Hall, Senior Software Engineer, Convoy"
                />
                <br />
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
