import React, { FunctionComponent } from 'react'

import { Layout, ContentSection, CaseStudyCard, TrySourcegraph } from '@components'

interface CaseStudiesHomeProps {
    slugs: string[]
}

interface CaseStudies {
    name: string
    logo: string
    title: string
    url: string
}

// TODO: This data will eventually live in our CMS
const CASESTUDIES: CaseStudies[] = [
    {
        name: 'FactSet',
        logo: '/external-logos/factset-logo.svg',
        title: 'FactSet migrates from Perforce to GitHub',
        url: '/case-studies/factset-migrates-from-perforce-to-github',
    },
    {
        name: 'Cloudflare',
        logo: '/external-logos/cloudflare-color-logo.svg',
        title: 'Cloudflare accelerates debugging and improves security',
        url: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
    },
    {
        name: 'Indeed',
        logo: '/external-logos/indeed-logo.svg',
        title: 'Indeed keeps code up to date and accelerates development velocity',
        url: '/case-studies/indeed-accelerates-development-velocity',
    },
    {
        name: 'Workiva',
        logo: '/external-logos/workiva-vector-logo.svg',
        title: 'Workiva reduces the time it takes to make large-scale code changes by 80%',
        url: '/case-studies/workiva-automates-large-scale-code-changes',
    },
    {
        name: 'CERN',
        logo: '/external-logos/cern-name-logo.svg',
        title: 'Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications',
        url: '/case-studies/cern-reduces-technical-debt',
    },
    {
        name: 'Criteo',
        logo: '/external-logos/criteo-logo.svg',
        title: 'Criteo uses Sourcegraph universal code search to tackle Big Code',
        url: '/case-studies/criteo-tackles-big-code',
    },
    {
        name: 'F5',
        logo: '/external-logos/f5-logo.svg',
        title: 'F5 streamlines collaboration for global and distributed software teams',
        url: '/case-studies/f5-streamlines-collaboration-globally',
    },
    {
        name: 'Convoy',
        logo: '/external-logos/convoy-logo.svg',
        title: 'Convoy improves developer onboarding',
        url: '/case-studies/convoy-improved-on-boarding',
    },
    {
        name: 'Lyft',
        logo: '/external-logos/lyft-logo.svg',
        title: 'Lyft ensures production stability during monolith to microservices transition',
        url: '/case-studies/lyft-monolith-to-microservices',
    },
    {
        name: 'Quantcast',
        logo: '/external-logos/quantcast-logo.svg',
        title: 'Quantcast accelerates large scale refactoring',
        url: '/case-studies/quantcast-large-scale-refactoring',
    },
    {
        name: 'Sofi',
        logo: '/external-logos/sofi-logo.svg',
        title: 'SoFi manages hundreds of microservices',
        url: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
    },
    {
        name: 'Yelp',
        logo: '/external-logos/yelp.svg',
        title: 'Sourcegraph empowers developers at Yelp to ship code faster and more reliably than ever before.',
        url: 'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html#shipping-code-faster-with-sourcegraph',
    },
    {
        name: 'Thorn',
        logo: '/external-logos/thorn-logo.svg',
        title: 'Thorn deprecates legacy code safely',
        url: '/case-studies/we-are-thorn',
    },
]

const CaseStudiesHome: FunctionComponent<CaseStudiesHomeProps> = () => (
    <>
        <Layout
            meta={{
                title: 'Sourcegraph - Case studies',
                description: 'Learn how engineering teams use Sourcegraph Universal Code Search.',
                image: 'https://about.sourcegraph.com/sourcegraph-og.png',
            }}
        >
            <div className="mt-2">
                <ContentSection className="hero-section text-center py-5">
                    <h1 className="display-2 font-weight-bold">Sourcegraph case studies</h1>
                    <h2>Learn how engineering teams use Universal Code Search</h2>
                </ContentSection>

                <ContentSection>
                    <div className="container">
                        <div className="d-flex flex-wrap">
                            {CASESTUDIES.map(study => (
                                <div className="d-flex col-lg-4 mb-6" key={study.name}>
                                    <CaseStudyCard
                                        name={study.name}
                                        logo={study.logo}
                                        title={study.title}
                                        url={study.url}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ContentSection>

                <TrySourcegraph className="my-6" />
            </div>
        </Layout>
    </>
)

export default CaseStudiesHome
