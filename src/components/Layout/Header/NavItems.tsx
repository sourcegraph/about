import React, { ReactNode, useCallback } from 'react'

import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import {
    ChevronDownIcon,
    ChevronUpIcon,
    Building2,
    HelpCircle,
    BookText,
    Newspaper,
    UsersRound,
    TestTube,
    HandshakeIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Badge } from '../../Badge'

interface NavLink {
    text: string
    subText?: string
    sectionHeader?: string
    href: string
    badgeText?: string
    id?: string
    icon?: string | JSX.Element
    iconPosition?: 'top' | 'left'
}

interface NavSection {
    id?: string
    text: string
    links: (NavLink | { divider: true } | { sectionHeader: string })[]
    badgeText?: string
}

type NavItem = NavLink | NavSection

const iconWrapper = (iconContent: ReactNode): JSX.Element => (
    <div className="hidden w-fit rounded-lg border-1 border-gray-200 bg-white p-2 lg:block">{iconContent}</div>
)

const NAV_ITEMS: NavItem[] = [
    {
        id: 'topnav',
        text: 'Products',
        links: [
            {
                text: 'Cody',
                href: '/cody',
                icon: iconWrapper(
                    <img src="/assets/navigation/cody-icon.svg" alt="" className="h-4 w-4 !bg-transparent text-black" />
                ),
                subText: 'AI coding assistant with deep codebase context',
                iconPosition: 'top',
            },
            {
                text: 'Code Search',
                href: '/code-search',
                icon: iconWrapper(
                    <img
                        src="/assets/navigation/code-search-icon.svg"
                        alt=""
                        className="h-4 w-4 !bg-transparent text-black"
                    />
                ),
                subText: 'Advanced codebase search, batch changes, and insights',
                iconPosition: 'top',
            },
            { sectionHeader: '' },
            {
                text: 'Features',
                href: '/features',
            },
            {
                text: 'Changelog',
                href: '/changelog',
            },
        ],
    },
    {
        id: 'topnav',
        text: 'Solutions',
        links: [
            {
                text: 'Enterprise',
                subText: 'Scale and security for any size team',
                href: '/enterprise',
                icon: iconWrapper(<Building2 className="h-4 w-4 !bg-transparent text-black" />),
                iconPosition: 'top',
            },
            { sectionHeader: 'Use Cases' },
            {
                text: 'Unit testing',
                href: '/solutions/build-unit-tests',
            },
            {
                text: 'Batch Changes',
                href: '/batch-changes',
            },
            {
                text: 'Code Insights',
                href: '/code-insights',
            },
            { sectionHeader: 'Integrations' },
            {
                text: 'GitLab',
                href: '/solutions/gitlab',
            },
            {
                text: 'Bitbucket',
                href: '/solutions/bitbucket',
            },
        ],
    },
    {
        id: 'topnav',
        text: 'Resources',
        links: [
            {
                text: 'Support Forum',
                subText: 'Questions and feedback',
                href: 'https://community.sourcegraph.com',
                iconPosition: 'left',
                icon: <HelpCircle className="h-[14px] w-[14px]" />,
            },
            {
                text: 'Resources',
                subText: 'Videos, guides, content, and more',
                href: '/resources',
                iconPosition: 'left',
                icon: <BookText className="h-[14px] w-[14px]" />,
            },
            {
                text: 'Blog',
                subText: 'The latest posts and updates',
                href: '/blog',
                iconPosition: 'left',
                icon: <Newspaper className="h-[14px] w-[14px]" />,
            },
            {
                text: 'Customer Stories',
                subText: 'Success stories, case studies',
                href: '/case-studies',
                iconPosition: 'left',
                icon: <HandshakeIcon className="h-[14px] w-[14px]" />,
            },
            {
                text: 'Community',
                subText: 'Dev community, open source',
                href: '/community',
                iconPosition: 'left',
                icon: <UsersRound className="h-[14px] w-[14px]" />,
            },
            {
                text: 'Sourcegraph Labs',
                subText: 'AI experiment playground',
                href: 'https://s0.dev/',
                iconPosition: 'left',
                icon: <TestTube className="h-[14px] w-[14px]" />,
            },
        ],
    },
    {
        id: 'topnav',
        text: 'Docs',
        href: 'https://docs.sourcegraph.com',
    },
    {
        id: 'topnav',
        text: 'Pricing',
        href: '/pricing',
    },
    {
        id: 'topnav',
        text: 'Search public code',
        href: 'https://sourcegraph.com/search',
    },
]

interface Props {
    linkElement?: React.ComponentType<
        Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'> & {
            close: () => void
        }
    >
    classes: Record<
        | 'item'
        | 'menu'
        | 'menuItem'
        | 'menuItemActive'
        | 'divider'
        | 'icon'
        | 'sectionHeader'
        | 'subText'
        | 'arrowIcon',
        string
    >
    close: () => void
}

export const NavItems: React.FunctionComponent<Props> = ({ close, linkElement: LinkElement = Link, classes }) => {
    const router = useRouter()
    const isCurrentLink = useCallback((href: string): boolean => router.asPath === href, [router.asPath])
    return (
        <nav className="flex flex-col gap-4 pl-3 pb-1 lg:flex-row lg:pl-0 lg:pb-0">
            {NAV_ITEMS.map(item =>
                'href' in item ? (
                    item.text === 'Docs' ? (
                        <a
                            id={item.id ?? 'topnav'}
                            key={item.text}
                            href={item.href}
                            className={classNames('flex items-center', classes.item)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={close}
                        >
                            {item.text}
                            {item.badgeText && (
                                <Badge className="ml-2" size="small" text={item.badgeText} color="blurple" />
                            )}
                        </a>
                    ) : (
                        <LinkElement
                            id={item.id ?? 'topnav'}
                            key={item.text}
                            href={item.href}
                            className={classNames('flex items-center', classes.item)}
                            aria-current={isCurrentLink(item.href) ? 'page' : undefined}
                            close={close}
                        >
                            {item.text}
                            {item.badgeText && (
                                <Badge className="ml-2" size="small" text={item.badgeText} color="blurple" />
                            )}
                        </LinkElement>
                    )
                ) : (
                    <NavItemMenu
                        id={item.id ?? 'topnav'}
                        key={item.text}
                        text={item.text}
                        links={item.links}
                        isCurrentLink={isCurrentLink}
                        className={classes.item}
                        classes={classes}
                    />
                )
            )}
        </nav>
    )
}

const NavItemMenu: React.FunctionComponent<
    NavSection & {
        id: string
        isCurrentLink: (href: string) => boolean
        className: string
        classes: Record<
            'menu' | 'menuItem' | 'menuItemActive' | 'divider' | 'icon' | 'sectionHeader' | 'subText' | 'arrowIcon',
            string
        >
    }
> = ({
    id,
    text,
    links,
    isCurrentLink,
    className,
    classes: {
        menu: menuClassName,
        menuItem: menuItemClassName,
        menuItemActive: menuItemActiveClassName,
        divider: dividerClassName,
        arrowIcon: arrowClassName,
        sectionHeader: sectionHeaderClassName,
        subText: menuItemSubTextClassName,
    },
}) => (
    <Menu as="div" className="relative">
        {({ open }) => (
            <>
                <div>
                    <Menu.Button
                        id={id}
                        className={classNames('flex items-center', className, {
                            'lg:bg-violet-100': open && className.includes('text-gray-500'),
                            'lg:bg-gray-500': open && className.includes('text-white'),
                            'lg:bg-violet-500': open && className.includes('hover:bg-violet-600'),
                        })}
                    >
                        {text}
                        {open ? (
                            <ChevronUpIcon className="ml-1 h-6 w-6 lg:h-3 lg:w-3" />
                        ) : (
                            <ChevronDownIcon className="ml-1 h-6 w-6 lg:h-3 lg:w-3" />
                        )}
                    </Menu.Button>
                </div>
                <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={classNames(menuClassName, 'mt-2 rounded-md lg:p-1', {
                            '!pb-2': text === 'Solutions',
                        })}
                    >
                        <div
                            className={classNames(
                                arrowClassName,
                                'absolute left-2.5 -top-[5.5px] hidden h-[10px] w-[10px] rotate-45 rounded-tl-sm border-t border-l lg:block'
                            )}
                        />
                        {links.map((link, index) =>
                            'divider' in link ? (
                                // eslint-disable-next-line react/no-array-index-key
                                <Menu.Item key={index} disabled={true}>
                                    <hr className={classNames('my-1', dividerClassName)} />
                                </Menu.Item>
                            ) : 'sectionHeader' in link ? (
                                <div
                                    key={index}
                                    className={classNames('hidden px-4 pb-1 lg:block', {
                                        'pt-4': index === 1,
                                        'pt-5': index === 5,
                                    })}
                                >
                                    <div className={sectionHeaderClassName}>
                                        {link.sectionHeader}
                                        <hr className={classNames(dividerClassName, 'my-2 mr-[6px]')} />
                                    </div>
                                </div>
                            ) : (
                                <Menu.Item key={link.text}>
                                    {({ active }) => (
                                        <Link
                                            className={classNames(
                                                'relative z-10 block rounded-md px-6 py-4 lg:px-4 lg:py-2',
                                                menuItemClassName,
                                                active && menuItemActiveClassName
                                            )}
                                            id={id}
                                            href={link.href}
                                            aria-current={isCurrentLink(link.href) ? 'page' : undefined}
                                        >
                                            <div
                                                className={`${
                                                    link.iconPosition === 'top'
                                                        ? 'flex flex-col lg:py-3'
                                                        : 'flex items-baseline gap-3'
                                                }`}
                                            >
                                                {link.icon && (
                                                    <div
                                                        className={`hidden lg:block ${
                                                            link.iconPosition === 'top' ? 'mb-3' : 'relative top-[2px]'
                                                        }`}
                                                    >
                                                        {typeof link.icon === 'string' ? (
                                                            <img
                                                                src={link.icon}
                                                                className="h-8 w-8 lg:block"
                                                                alt={link.text}
                                                            />
                                                        ) : (
                                                            link.icon
                                                        )}
                                                    </div>
                                                )}
                                                <div>
                                                    <p
                                                        className={classNames(
                                                            'mb-0 text-sm font-medium tracking-tight',
                                                            menuItemClassName
                                                        )}
                                                    >
                                                        {link.text}
                                                    </p>

                                                    {link.subText && (
                                                        <p
                                                            className={classNames(
                                                                'mb-0 hidden align-bottom text-xs text-gray-500 lg:block',
                                                                menuItemSubTextClassName
                                                            )}
                                                        >
                                                            {link.subText}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            {link.badgeText && (
                                                <Badge className="ml-4" size="small" text={link.badgeText} />
                                            )}
                                        </Link>
                                    )}
                                </Menu.Item>
                            )
                        )}
                    </Menu.Items>
                </Transition>
            </>
        )}
    </Menu>
)
