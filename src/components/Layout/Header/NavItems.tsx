import React, { useCallback } from 'react'

import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import ChevronUpIcon from 'mdi-react/ChevronUpIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Badge } from '../../Badge'

interface NavLink {
    name: string
    href: string
    badgeText?: string
    id?: string
}

interface NavSection {
    id?: string
    name: string
    links: (NavLink | { divider: true })[]
    badgeText?: string
}

type NavItem = NavLink | NavSection

const NAV_ITEMS: NavItem[] = [
    {
        id: 'topnav',
        name: 'Products',
        links: [
            {
                name: 'Cody',
                href: '/cody',
            },
            {
                name: 'Code Search',
                href: '/code-search',
            },
        ],
    },
    {
        id: 'topnav',
        name: 'Pricing',
        href: '/pricing',
    },
    {
        id: 'topnav',
        name: 'Enterprise',
        href: '/enterprise',
    },
    {
        id: 'topnav',
        name: 'Resources',
        links: [
            {
                name: 'Resources library',
                href: '/resources',
            },
            {
                name: 'Customer stories',
                href: '/case-studies',
            },
            {
                name: 'Blog',
                href: '/blog',
            },
            {
                name: 'Docs',
                href: 'https://sourcegraph.com/docs',
            },
            {
                name: 'Cody comparisons',
                href: '/compare',
            },
            {
                name: 'Support forum',
                href: 'https://community.sourcegraph.com',
            },
            {
                name: 'Webinars',
                href: '/webinars',
            },
        ],
    },
    {
        id: 'topnav',
        name: 'Search public code',
        href: 'https://sourcegraph.com/search',
    },
]

interface Props {
    linkElement?: React.ComponentType<
        Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'> & {
            close: () => void
        }
    >
    classes: Record<'item' | 'menu' | 'menuItem' | 'menuItemActive' | 'divider', string>
    close: () => void
}

export const NavItems: React.FunctionComponent<Props> = ({ close, linkElement: LinkElement = Link, classes }) => {
    const router = useRouter()
    const isCurrentLink = useCallback((href: string): boolean => router.asPath === href, [router.asPath])
    return (
        <>
            {NAV_ITEMS.map(item =>
                'href' in item ? (
                    <LinkElement
                        id={item.id ?? 'topnav'}
                        key={item.name}
                        href={item.href}
                        className={classNames('flex items-center', classes.item)}
                        aria-current={isCurrentLink(item.href) ? 'page' : undefined}
                        close={close}
                    >
                        {item.name}
                        {item.badgeText && (
                            <Badge className="ml-2" size="small" text={item.badgeText} color="blurple" />
                        )}
                    </LinkElement>
                ) : (
                    <NavItemMenu
                        id={item.id ?? 'topnav'}
                        key={item.name}
                        name={item.name}
                        links={item.links}
                        isCurrentLink={isCurrentLink}
                        className={classes.item}
                        classes={classes}
                    />
                )
            )}
        </>
    )
}

const NavItemMenu: React.FunctionComponent<
    NavSection & {
        id: string
        isCurrentLink: (href: string) => boolean
        className: string
        classes: Record<'menu' | 'menuItem' | 'menuItemActive' | 'divider', string>
    }
> = ({
    id,
    name,
    links,
    isCurrentLink,
    className,
    classes: {
        menu: menuClassName,
        menuItem: menuItemClassName,
        menuItemActive: menuItemActiveClassName,
        divider: dividerClassName,
    },
}) => (
    <Menu as="div" className="relative">
        {({ open }) => (
            <>
                <div>
                    <Menu.Button id={id} className={classNames('flex items-center', className)}>
                        {name}
                        {open ? (
                            <ChevronUpIcon className="ml-[1px] w-4" />
                        ) : (
                            <ChevronDownIcon className="ml-[1px] w-4" />
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
                        className={classNames(
                            menuClassName,
                            'mt-2 rounded-md py-1 ring-1 ring-opacity-25 focus:outline-none'
                        )}
                    >
                        {links.map((link, index) =>
                            'divider' in link ? (
                                // eslint-disable-next-line react/no-array-index-key
                                <Menu.Item key={index} disabled={true}>
                                    <hr className={classNames('my-1', dividerClassName)} />
                                </Menu.Item>
                            ) : (
                                <Menu.Item key={link.name}>
                                    {({ active }) => (
                                        <div>
                                            <Link
                                                id={id}
                                                href={link.href}
                                                className={classNames(
                                                    'block px-4 py-2 text-base',
                                                    menuItemClassName,
                                                    active && menuItemActiveClassName
                                                )}
                                                aria-current={isCurrentLink(link.href) ? 'page' : undefined}
                                            >
                                                {link.name}
                                                {link.badgeText && (
                                                    <Badge className="ml-4" size="small" text={link.badgeText} />
                                                )}
                                            </Link>
                                        </div>
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
