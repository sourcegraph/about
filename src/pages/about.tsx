import { FunctionComponent } from 'react'

import { BoardSection, ContentSection, Layout, LeadershipSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const INVESTORS: {
    name: string
    image: string
}[] = [
    {
        name: 'Andreessen Horowitz',
        image: '/about/sg-andreessen-horowitz.png',
    },
    {
        name: 'Sequoia',
        image: '/about/sg-sequoia.png',
    },
    {
        name: 'Felicis Ventures',
        image: '/about/sg-felicis.png',
    },
    {
        name: 'Redpoint',
        image: '/about/sg-redpoint.png',
    },
    {
        name: 'Craft Ventures',
        image: '/about/sg-craftventures.png',
    },
    {
        name: 'Goldcrest Capital',
        image: '/about/sg-goldcrest.png',
    },
]

const About: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - About',
            description:
                'The pace at which humans can write code is the main thing that stands between us and flying cars, a habitat on Mars, and a cure for cancer.',
        }}
    >
        <div className="content-page bg-white text-dark">
            <ContentSection className="hero-section py-6">
                <h1>About Sourcegraph</h1>
                <p className="h4 font-weight-normal">
                    Sourcegraph builds universal code search for every developer and company so they can innovate
                    faster. We help developers and companies with billions of lines of code create the software you use
                    every day.
                </p>
            </ContentSection>
            <div className="sg-bg-gradient-venus mb-5">
                <ContentSection className="container py-6">
                    <h2>Learn all about Sourcegraph</h2>
                    <p>
                        The{' '}
                        <a
                            href="https://handbook.sourcegraph.com"
                            title="Sourcegraph handbook"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Sourcegraph handbook
                        </a>{' '}
                        has everything from our high-level{' '}
                        <a
                            href="https://handbook.sourcegraph.com/strategy-goals/strategy"
                            title="Strategy"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            strategy
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://handbook.sourcegraph.com/company/values"
                            title="Values"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            values
                        </a>
                        , to documentation of business processes including{' '}
                        <a
                            href="https://handbook.sourcegraph.com/marketing/messaging"
                            title="Messaging"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            messaging
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://handbook.sourcegraph.com/departments/product-engineering/engineering/process/principles-and-practices"
                            title="Engineering principles"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            engineering principles
                        </a>
                        . It's public for everyone to read because we are{' '}
                        <a
                            href="https://handbook.sourcegraph.com/company/values#open-and-transparent"
                            title="open and transparent"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            open and transparent
                        </a>
                        .
                    </p>
                </ContentSection>
            </div>
            <ContentSection className="container py-5 mb-5">
                <h2>Sourcegraph team</h2>
                <p>
                    Sourcegraph is an{' '}
                    <a
                        href="https://handbook.sourcegraph.com/company/remote"
                        title="All remote"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        all-remote
                    </a>{' '}
                    company, working asynchronously across time zones and continents. Meet our{' '}
                    <a
                        href="https://handbook.sourcegraph.com/company/team"
                        title="Team members"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        team members
                    </a>{' '}
                    and learn about our commitment to{' '}
                    <a
                        href="https://handbook.sourcegraph.com/communication/code_of_conduct#our-standards"
                        title="Inclusion"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        inclusion
                    </a>
                    .
                </p>
                <a
                    className="btn btn-primary mt-3"
                    href="https://boards.greenhouse.io/sourcegraph91"
                    title="Open roles - we're hiring!"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Open roles - we're hiring!
                </a>
            </ContentSection>
            <ContentSection>
                <LeadershipSection />
            </ContentSection>
            <ContentSection>
                <BoardSection />
            </ContentSection>
            <ContentSection className="px-0 py-3">
                <div className="container mb-5">
                    <h2>Investors</h2>
                    <div className="row align-items-center mx-5">
                        {INVESTORS.map(investor => (
                            <div key={investor.image} className="col-md-4 my-5 mx-auto">
                                <img src={investor.image} alt={investor.name} className="w-100 py-0 px-2 my-1 mx-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </ContentSection>
        </div>
    </Layout>
)

export default About
