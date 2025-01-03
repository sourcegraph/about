import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
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
        name: 'Coinbase',
        logo: '/case-studies/coinbase-logo.png',
        title: 'Coinbase developers improve productivity and satisfaction using Cody while meeting strict security requirements.',
        url: '/case-studies/coinbase-speeds-up-financial-systems-innovation/',
    },
    {
        name: 'Booking.com',
        logo: '/case-studies/booking-logo.svg',
        title: 'Booking.com reports a measurable impact of developer productivity, time savings, and employee satisfaction by utilizing Sourcegraph.',
        url: '/blog/announcing-our-partnership-with-dx',
    },
    {
        name: 'Palo Alto Networks',
        logo: '/home/carousel/palo-alto-logo.svg',
        title: 'Palo Alto Networks boosts productivity for 2,000 developers by up to 40% using a secure Sourcegraph deployment.',
        url: 'https://aws.amazon.com/partners/success/palo-alto-networks-anthropic-sourcegraph/',
    },
    {
        name: '1Password',
        logo: '/case-studies/1password-logo.png',
        title: '1Password uses Code Search and Cody to increase productivity while working in a distributed codebase.',
        url: '/case-studies/1password-increases-productivity-in-a-distributed-codebase',
    },
    {
        name: 'Qualtrics',
        logo: '/case-studies/qualtrics-logo.png',
        title: 'Qualtrics uses Cody to speed up code understanding and write unit tests in minutes.',
        url: '/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody',
    },
    {
        name: 'Leidos',
        logo: '/case-studies/leidos-logo.svg',
        title: 'Leidos uses Cody for its security, context-awareness, and interoperability with the latest LLMs.',
        url: '/case-studies/cody-leidos-maximizing-efficiency-heightened-security-ai-race',
    },
    {
        name: 'Nine',
        logo: '/case-studies/nine-logo.svg',
        title: 'Nine empowers productivity and enhances security with Sourcegraph.',
        url: '/case-studies/how-sourcegraph-transformed-nine-development-workflow',
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
    {
        name: 'Reddit',
        logo: '/external-logos/reddit-logo.png',
        title: 'Read how the Reddit team wrangles code across 2,000+ repos with the help of Sourcegraph',
        url: 'https://www.reddit.com/r/RedditEng/comments/1bdtrjq/wrangling_2000_git_repos_at_reddit/',
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
    icon = <ChevronRightIcon className="link-icon" />,
}) => (
    <div className="grow">
        <div className="md:pr-12">
            {/* company logo */}
            {url.includes('http') ? (
                <a href={url} target="_blank" rel="nofollow noreferrer" title={linkText + ': ' + title}>
                    <img
                        className={classNames(
                            'mb-6 max-h-[60px] max-w-[135px]',
                            { 'brightness-0': bwLogo },
                            logoClassName
                        )}
                        src={logo}
                        alt={`${name} logo`}
                    />
                </a>
            ) : (
                <Link href={url} title={linkText + ': ' + title}>
                    <img
                        className={classNames(
                            'mb-6 max-h-[60px] max-w-[135px]',
                            { 'brightness-0': bwLogo },
                            logoClassName
                        )}
                        src={logo}
                        alt={`${name} logo`}
                    />
                </Link>
            )}

            {altTitle && <h5>{altTitle}</h5>}

            <p className={titleClassName}>{title}</p>

            {/* link to read case study */}
            {url.includes('http') ? (
                <a
                    href={url}
                    target="_blank"
                    rel="nofollow noreferrer"
                    title={linkText + ': ' + title}
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                    className={classNames('btn-link btn-link-icon', linkClassName)}
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
                    className={classNames('btn-link btn-link-icon', linkClassName)}
                >
                    {linkText}
                    {icon}
                </Link>
            )}
        </div>
    </div>
)
