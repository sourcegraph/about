import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Quantcast adopts Sourcegraph Universal Code Search for large scale refactoring',
            description:
                'Learn how after discovering and deploying Sourcegraph, Quantcast was able to do major refactors with confidence.',
        }}
        headerColorTheme="dark"
    >
        <CaseStudyLayout
            customer="Quantcast"
            title="Quantcast adopts Sourcegraph Universal Code Search for large scale refactoring"
            logo="/external-logos/quantcast-logo-white.svg"
            quote={{
                text: "Sourcegraph's search gave us confidence because we knew we wouldn't overlook anything.",
                author: 'Simon Law, Staff Software Engineer, Quantcast',
                image: '/case-studies/simon-law-quantcast.jpg',
            }}
            pdf="https://sourcegraphstatic.com/Quantcast-Sourcegraph-case-study.pdf"
        >
            <ContentSection background="white" slimWidth={true}>
                <p>
                    Quantcast uses machine-learning-driven, real-time audience insights to radically simplify
                    advertising for brands and customers such as BuzzFeed, Dell, and Fiat Chrysler. Quantcast is the
                    pulse of the open Internet, measuring billions of pseudonymized interactions per day so brands can
                    deeply understand and reach their audiences, all while protecting consumer privacy.
                </p>

                <p>
                    Founded in 2006, Quantcast's engineering team had amassed thousands of repositories. This growth
                    made refactoring a difficult and time-consuming task for an unaided engineer to tackle. After
                    discovering and deploying Sourcegraph, Quantcast was able to do major refactors with confidence.
                </p>

                <h2 className="pt-8 pb-1">GDPR readiness though organization-wide code search</h2>
                <p>
                    May 2018 was the deadline for the EU General Data Protection Regulation, a law that provides
                    widespread protections for users and their personal data. Quantcast saw it as an opportunity to
                    strengthen their position as a privacy-first organization.
                </p>

                <p>
                    Quantcast created a tiger-team to not only meet GDPR compliance, but exceed the requirements. They
                    analyzed what services ought to handle GDPR-defined personal data, and used Sourcegraph to discover
                    which actually did. Personal data, such as IP addresses, can be identified within source code by
                    using Sourcegraph's regular expression search. Searching for{' '}
                    <code className="language-text">"ip"</code> would return too many results.
                </p>

                <div>
                    Instead, Sourcegraph can search for fields within objects with:
                    <br />
                    <br />
                    <pre className="language-regex border border-gray-200">
                        <code className="language-regex">{'\\w+\\.ip(addr)?\\b'}</code>
                    </pre>
                    or addresses themselves with:
                    <br />
                    <br />
                    <pre className="language-regex border border-gray-200">
                        <code className="language-regex">{'\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b'}</code>
                    </pre>
                </div>

                <Blockquote quote="Unlike other tools, Sourcegraph doesn't just search for keywords, it searches for regular expressions. This familiar query language allowed us to zero-in on exactly what we wanted and filter out false matches." />

                <p>
                    For every project, the team created a burndown list of issues and provided links to Sourcegraph
                    search results to the code owners. Since Sourcegraph searches every repository, a single engineer
                    took only a few days to analyze thousands of them, which would have taken months if they were each
                    examined individually.
                </p>

                <Blockquote quote="Sourcegraph's search gave us confidence because we knew we wouldn't overlook anything: Sourcegraph returns all search results, it doesn't drop or elide them, unlike GitHub Enterprise." />

                <p>
                    Each team was able to use the Sourcegraph searches to confirm that all of their outstanding issues
                    were addressed. Because Sourcegraph uses regular-expressions, familiar to most engineers, these
                    engineers easily adopted Sourcegraph to learn more about how their projects interacted with other
                    projects. As they fixed or addressed each issue, these Sourcegraph searches returned fewer and fewer
                    results.
                </p>

                <h2 className="pt-8 pb-1">Preventing future issues with code monitoring and notifications</h2>

                <p>
                    With more data privacy laws on the horizon (such as California's Consumer Privacy Act), Quantcast
                    can navigate the shifting regulatory landscape. Using Sourcegraph's saved searches, senior engineers
                    have an easy way to define patterns, set up ownership, and get early warning alerts before any
                    changes that affect personal data are merged.
                </p>

                <Blockquote quote="Saved searches allow us to constantly monitor code that manages personal data, organization wide, before changes land in production." />

                <h2 className="pt-8 pb-1">
                    Large scale refactoring is now possible without risking production stability
                </h2>

                <p>
                    Multi-repository code search makes large scale refactoring at Quantcast systematic, safe, and
                    efficient: enabling massive projects like GDPR compliance while saving hundreds of developer hours
                    without risking production stability.
                </p>

                <p className="pb-8">
                    Saved searches with email notifications empower teams to continuously monitor changes to code
                    handling personal information which mitigates compliance risk without distracting developers from
                    delivering business value.
                </p>
            </ContentSection>
        </CaseStudyLayout>
    </Layout>
)

export default CaseStudy
