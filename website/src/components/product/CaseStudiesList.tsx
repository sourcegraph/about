import React from 'react'
import { Link } from 'gatsby'

const CASESTUDIES: {
    name: string
    logo: string
    title: string
    url: string
    external?: boolean
}[] = [
    {
        name: 'FactSet',
        logo: '/external-logos/factset-logo.svg',
        title: 'FactSet migrates from Perforce to GitHub.',
        url: '/case-studies/factset-migrates-from-perforce-to-github',
    },
    {
        name: 'Cloudflare',
        logo: '/external-logos/cloudflare-color-logo.svg',
        title: 'Cloudflare accelerates debugging and improves security.',
        url: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
    },
    {
        name: 'Indeed',
        logo: '/external-logos/indeed-logo.svg',
        title: 'Indeed keeps code up to date and accelerates development velocity.',
        url: '/case-studies/indeed-accelerates-development-velocity',
    },
    {
        name: 'Workiva',
        logo: '/external-logos/workiva-vector-logo.svg',
        title: 'Workiva reduces the time it takes to make large-scale code changes by 80%.',
        url: '/case-studies/workiva-automates-large-scale-code-changes',
    },
    {
        name: 'CERN',
        logo: '/external-logos/cern-name-logo.svg',
        title: 'Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications.',
        url: '/case-studies/cern-reduces-technical-debt',
    },
    {
        name: 'Criteo',
        logo: '/external-logos/criteo-logo.svg',
        title: 'Criteo uses Sourcegraph universal code search to tackle Big Code.',
        url: '/case-studies/criteo-tackles-big-code',
    },
    {
        name: 'F5',
        logo: '/external-logos/f5-logo.svg',
        title: 'F5 streamlines collaboration for global and distributed software teams.',
        url: '/case-studies/f5-streamlines-collaboration-globally',
    },
    {
        name: 'Convoy',
        logo: '/external-logos/convoy-logo.svg',
        title: 'Convoy improves developer onboarding.',
        url: '/case-studies/convoy-improved-on-boarding',
    },
    {
        name: 'Lyft',
        logo: '/external-logos/lyft-logo.svg',
        title: 'Lyft ensures production stability during monolith to microservices transition.',
        url: '/case-studies/lyft-monolith-to-microservices',
    },
    {
        name: 'Quantcast',
        logo: '/external-logos/quantcast-logo.svg',
        title: 'Quantcast accelerates large scale refactoring.',
        url: '/case-studies/quantcast-large-scale-refactoring',
    },
    {
        name: 'Sofi',
        logo: '/external-logos/sofi-logo.svg',
        title: 'SoFi manages hundreds of microservices.',
        url: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
    },
    {
        name: 'Yelp',
        logo: '/external-logos/yelp.svg',
        title: 'Sourcegraph empowers developers at Yelp to ship code faster and more reliably than ever before.',
        url: 'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html#shipping-code-faster-with-sourcegraph',
        external: true,
    },
    {
        name: 'Thorn',
        logo: '/external-logos/thorn-logo.svg',
        title: 'Thorn deprecates legacy code safely.',
        url: '/case-studies/we-are-thorn',
    },
    {
        name: 'Nutanix',
        logo: '/external-logos/nutanix-logo.svg',
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph.',
        url: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
    },
]

export const CaseStudiesList: React.FunctionComponent<{ className?: string; listLength?: number }> = ({
    className = '',
    listLength = CASESTUDIES.length,
}) => (
    <div id="customers" className={`case-studies-section container-fluid ${className}`}>
        <div className="card-deck">
            {CASESTUDIES.slice(0, listLength).map((study, i) => (
                // 3 Cards per row if this is the Case Study index pg, otherwise it's being re-used as a preview w/ 2 Cards per row
                <div key={i} className={`col-lg-${listLength === CASESTUDIES.length ? 4 : 6} mb-6`}>
                    <div key={i} className={`${study.name.replace(' ', '-').toLowerCase()} card`}>
                        <div className="card-body">
                            <img className="case-studies-section__item-logo " src={study.logo} alt="Card image cap" />
                            <p className="card-text">
                                {study.title}{' '}
                                <span>
                                    {study.external ? (
                                        <a
                                            href={study.url}
                                            className="card-link"
                                            target="_blank"
                                            rel="nofollow noopener"
                                        >
                                            Learn more.
                                        </a>
                                    ) : (
                                        <Link to={study.url}>Learn more.</Link>
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
