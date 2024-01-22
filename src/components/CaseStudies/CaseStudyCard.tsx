import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '../../data/tracking'

interface CaseStudy {
    name: string
    logo: string
    title: string
    altTitle?: string
    url: string
    linkText?: string
}

// TODO: This data will eventually live in our CMS
export const CASESTUDIES: CaseStudy[] = [
    {
        name: 'Nine',
        logo: '/case-studies/nine-logo.svg',
        title: 'Nine empowers productivity and enhances security with Sourcegraph.',
        url: '/case-studies/how-sourcegraph-transformed-nine-development-workflow',
    },
    {
        name: 'HashiCorp',
        logo: '/external-logos/hashicorp-logo.svg',
        title: 'HashiCorp streamlines cross-repository code search and fixes with Sourcegraph.',
        url: '/case-studies/hashicorp-uses-sourcegraph-to-streamline-cross-repository-code-search',
    },
    {
        name: 'Nutanix',
        logo: '/external-logos/nutanix-logo.svg',
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph.',
        url: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
    },
    {
        name: 'FactSet',
        logo: '/external-logos/factset-logo.svg',
        title: 'FactSet migrates from Perforce to GitHub.',
        url: '/case-studies/factset-migrates-from-perforce-to-github',
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
    },
    {
        name: 'Thorn',
        logo: '/external-logos/thorn-logo.svg',
        title: 'Thorn deprecates legacy code safely.',
        url: '/case-studies/we-are-thorn',
    },
]

export const CaseStudyCard: FunctionComponent<{
    study: CaseStudy
    bwLogo?: boolean
    logoClassName?: string
    titleClassName?: string
    linkClassName?: string
    icon?: React.ReactNode
}> = ({
    study: { name, logo, altTitle, title, url, linkText = 'Read the case study' },
    bwLogo,
    logoClassName,
    titleClassName,
    linkClassName,
    icon = <ArrowRightIcon size={20} className="ml-1 inline" />,
}) => (
    <div className="grow">
        <div className="md:pr-12">
            <img
                className={classNames('mb-6 max-h-[60px] max-w-[135px]', { 'brightness-0': bwLogo }, logoClassName)}
                src={logo}
                alt={`${name} logo`}
            />

            {altTitle && <h5>{altTitle}</h5>}

            <p className={titleClassName}>{title}</p>

            {url.includes('http') ? (
                <a
                    href={url}
                    target="_blank"
                    rel="nofollow noreferrer"
                    title={linkText + ': ' + title}
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                    className={classNames('font-bold no-underline hover:text-violet-300', linkClassName)}
                >
                    {linkText}
                    {icon}
                </a>
            ) : (
                <Link
                    href={url}
                    title={linkText + ': ' + title}
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                    className={classNames('font-bold no-underline hover:text-violet-300', linkClassName)}
                >
                    {linkText}
                    {icon}
                </Link>
            )}
        </div>
    </div>
)
