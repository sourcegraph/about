import React from 'react'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

const CASESTUDIES: {
    name: string
    logo: string
    title: string
    url: string
}[] = [
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
                        <a href={study.url} className="card-link">
                            <div className="card-body">
                                <img
                                    className="case-studies-section__item-logo "
                                    src={study.logo}
                                    alt="Card image cap"
                                />
                                <p className="card-text">{study.title}</p>
                                <ArrowRightIcon className="icon-inline ml-1" />
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
