import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import React from 'react'

const CASESTUDIES: {
    name: string
    logo: string
    title: string
    url: string
    external?: boolean
}[] = [
        {
            name: 'Workiva',
            logo: '/external-logos/workiva-vector-logo.svg',
            title: 'Workiva blah blah',
            url: '/case-studies/workiva-batch-changes',
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
            url:
                'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html#shipping-code-faster-with-sourcegraph',
            external: true,
        },
        {
            name: 'Thorn',
            logo: '/external-logos/thorn-logo.svg',
            title: 'Thorn deprecates legacy code safely',
            url: '/case-studies/we-are-thorn',
        },
    ]

export const CaseStudiesSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="customers" className={`case-studies-section container-fluid ${className}`}>
        <div className="card-deck">
            {CASESTUDIES.map((study, i) => (
                <div className="col-lg-4 mb-6">
                    <div key={i} className={`${study.name.replace(' ', '-').toLowerCase()} card`}>
                        <div className="card-body">
                            <img className="case-studies-section__item-logo " src={study.logo} alt="Card image cap" />
                            {study.external ? (
                                <a href={study.url} className="card-link" target="_blank" rel="nofollow noopener">
                                    <p className="card-text">{study.title}</p>
                                    <ExternalLinkIcon className="icon-inline ml-1" />
                                </a>
                            ) : (
                                <a href={study.url} className="card-link">
                                    <p className="card-text">{study.title}</p>
                                    <ArrowRightIcon className="icon-inline ml-1" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
