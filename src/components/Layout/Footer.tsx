import { useMemo, FunctionComponent, ReactSVG } from 'react'

import classNames from 'classnames'
import { ExternalLink } from 'lucide-react'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import Link from 'next/link'
import { FaDiscord as DiscordIcon } from 'react-icons/fa'

import { Badge } from '..'
import { buttonLocation, buttonStyle } from '../../data/tracking'
import { Icon } from '../icon'

const ExternalLinkIcon: FunctionComponent = () => <ExternalLink className="h-3 w-3" />

interface Link {
    name: string
    href: string
    badgeText?: string
}

interface LinkWithIcon extends Link {
    icon?: JSX.Element
}

const FOOTER_LINK_SECTIONS: { name: string; items: LinkWithIcon[] }[] = [
    {
        name: 'Products',
        items: [
            {
                name: 'Cody',
                href: '/cody',
            },
            {
                name: 'Code Search',
                href: '/code-search',
            },
            {
                name: 'OpenCtx',
                href: 'https://openctx.org/docs/clients/sourcegraph',
                icon: <ExternalLinkIcon />,
            },
        ],
    },
    {
        name: 'Solutions',
        items: [
            {
                name: 'Enterprise',
                href: '/enterprise',
            },
            {
                name: 'Batch Changes',
                href: '/batch-changes',
            },
            {
                name: 'Code Insights',
                href: '/code-insights',
            },
            {
                name: 'Unit testing',
                href: '/solutions/build-unit-tests',
            },
        ],
    },
    {
        name: 'Resources',
        items: [
            {
                name: 'Documentation',
                href: 'https://docs.sourcegraph.com',
            },
            {
                name: 'Resource library',
                href: '/resources',
            },
            {
                name: 'Blog',
                href: '/blog',
            },
            {
                name: 'Changelog',
                href: 'https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md',
            },
            {
                name: 'Community',
                href: '/community',
            },
            {
                name: 'Cody comparisons',
                href: '/compare',
            },
            {
                name: 'Customer stories',
                href: '/case-studies',
            },
            {
                name: 'Search public code',
                href: '/search',
                icon: <ExternalLinkIcon />,
            },
            {
                name: 'Support forum',
                href: 'https://community.sourcegraph.com',
                icon: <ExternalLinkIcon />,
            },
            {
                name: 'Sourcegraph Labs',
                href: 'https://s0.dev',
                icon: <ExternalLinkIcon />,
            },
        ],
    },
    {
        name: 'Company',
        items: [
            {
                name: 'Pricing',
                href: '/pricing',
            },
            {
                name: 'About',
                href: '/about',
            },
            {
                name: "Careers - We're hiring!",
                href: '/jobs',
            },
            {
                name: 'Contact',
                href: '/contact',
            },
            {
                name: 'Handbook',
                href: 'https://handbook.sourcegraph.com',
                icon: <ExternalLinkIcon />,
            },
            {
                name: 'Sourcegraph strategy',
                href: 'https://handbook.sourcegraph.com/company/strategy',
            },
        ],
    },
]

const getSocialLinks = (dark: boolean): LinkWithIcon[] => [
    {
        name: 'GitHub',
        href: 'https://github.com/sourcegraph',
        icon: <GithubIcon className="h-[24px] w-[24px]" />,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/sourcegraph',
        icon: (
            <Icon
                fill="currentColor"
                color="none"
                className={classNames('', dark ? 'text-gray-200 hover:text-white' : 'text-gray-400 hover:text-black')}
                iconNode={twitterIconDefinition}
            />
        ),
    },
    {
        name: 'Discord',
        href: 'https://discord.gg/s2qDtYGnAE',
        icon: <DiscordIcon className="h-[24px] w-[24px]" />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/4803356/',
        icon: <LinkedinIcon className="h-[24px] w-[24px]" />,
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/c/Sourcegraph/featured',
        icon: <YouTubeIcon className="h-[24px] w-[24px]" />,
    },
]

const POSTSCRIPT_LINKS: Link[] = [
    {
        name: 'Terms',
        href: '/terms',
    },
    {
        name: 'Security',
        href: '/security',
    },
    {
        name: 'Privacy',
        href: '/terms/privacy',
    },
]

interface Props {
    minimal?: boolean
    dark?: boolean
    className?: string
}

const twitterIconDefinition: [keyof ReactSVG, Record<string, string>][] = [
    ['svg', { viewBox: '0 0', fill: 'currentColor' }],
    [
        'path',
        {
            d: 'M18.2439 2.25H21.5519L14.3249 10.51L22.8269 21.75H16.1699L10.9559 14.933L4.98991 21.75H1.67991L9.40991 12.915L1.25391 2.25H8.07991L12.7929 8.481L18.2439 2.25ZM17.0829 19.77H18.9159L7.08391 4.126H5.11691L17.0829 19.77Z',
        },
    ],
]

export const Footer: React.FunctionComponent<Props> = ({ minimal, dark, className }) => {
    const year = useMemo(() => new Date().getFullYear(), [])
    const socialLinks = useMemo(() => getSocialLinks(!!dark), [dark])
    return (
        <footer
            className={classNames(
                className,
                !minimal && 'pt-16 pb-2',
                dark ? 'bg-gray-700 text-gray-50' : 'bg-gray-50 text-gray-700',
                'z-10'
            )}
        >
            <div className="mx-auto max-w-screen-xl px-4">
                {!minimal && (
                    <div className="mb-8 flex flex-col-reverse sm:grid sm:grid-cols-12">
                        <div className="col-span-12 mt-12 sm:mt-0 sm:mb-6 lg:col-span-4 lg:mb-0">
                            <Link
                                href="/"
                                title="Sourcegraph - Universal code search"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
                                <img
                                    src={dark ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                                    alt="Sourcegraph - Code Intelligence Platform"
                                    className="h-auto w-full max-w-[264px]"
                                    draggable={false}
                                    width={264}
                                    height={48}
                                />
                            </Link>

                            <ul className="mx-0 mt-3 flex list-none">
                                {socialLinks.map(({ name, href, icon: Icon }) => (
                                    <li className="mr-5" key={name}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            aria-label={name}
                                            title={name}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.footer}
                                            data-button-type="cta"
                                            className={classNames(
                                                'mr-3',
                                                dark
                                                    ? 'text-gray-200 hover:text-white'
                                                    : 'text-gray-400 hover:text-black'
                                            )}
                                        >
                                            {Icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-12 sm:grid sm:grid-cols-12 lg:col-span-8">
                            {FOOTER_LINK_SECTIONS.map(({ name, items }) => (
                                <div className="mb-8 sm:col-span-3 sm:mb-0" key={name}>
                                    <h5 className="mb-4">{name}</h5>
                                    <ul className="ml-0 list-none">
                                        {items.map(({ name, href, icon: Icon, badgeText }) => (
                                            <li className="mb-4 max-w-[176px]" key={name}>
                                                <Link
                                                    href={href}
                                                    title={name}
                                                    data-button-style={buttonStyle.text}
                                                    data-button-location={buttonLocation.footer}
                                                    data-button-type="cta"
                                                    className={classNames(
                                                        'flex items-center  gap-2 text-sm font-normal',
                                                        dark
                                                            ? 'text-gray-100 hover:text-white'
                                                            : 'text-gray-500 hover:text-black'
                                                    )}
                                                >
                                                    {name}
                                                    {Icon}
                                                    {badgeText && (
                                                        <Badge className="ml-4" size="small" text={badgeText} />
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={classNames('text-sm', { 'py-4': minimal, 'pt-6 pb-2': !minimal })}>
                    <ul className="ml-0 list-none">
                        <li
                            className={classNames('mr-10 sm:inline', {
                                'text-gray-200': dark,
                                'text-gray-500': !dark,
                            })}
                        >
                            &copy; {year} Sourcegraph, Inc.
                        </li>

                        {POSTSCRIPT_LINKS.map(({ name, href }) => (
                            <li key={name} className="mt-2 inline-block sm:mt-0">
                                <Link
                                    key={name}
                                    href={href}
                                    className={classNames('mr-5 p-0', {
                                        'text-gray-200': dark,
                                        'text-gray-500': !dark,
                                    })}
                                    title={name}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
