import React, { useCallback } from 'react'

import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import ChevronUpIcon from 'mdi-react/ChevronUpIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Badge, BadgeColor } from '../../Badge'

interface NavLink {
    name: string
    href: string
}

interface NavSection {
    name: string
    links: ((NavLink & { badge?: 'beta' }) | { divider: true })[]
}

type NavItem = NavLink | NavSection

const NAV_ITEMS: NavItem[] = [
    {
        name: 'Product',
        links: [
            { name: 'Code Search', href: '/code-search' },
            { name: 'Batch Changes', href: '/batch-changes' },
            { name: 'Code Insights', href: '/code-insights' },
            { name: 'Cody (AI)', href: '/code-insights', badge: 'beta' },
            { name: 'Own', href: '/code-insights', badge: 'beta' },
        ],
    },
    {
        name: 'App',
        href: '/app',
    },
    {
        name: 'Enterprise',
        links: [
            { name: 'Pricing', href: '/pricing' },
            {
                name: 'Enterprise Cloud',
                href: '/cloud',
            },
            { name: 'Customers', href: '/case-studies' },
            { divider: true },
            { name: 'Platform/infra teams', href: 'TODO' },
            { name: 'Security teams', href: 'TODO' },
            { divider: true },
            { name: 'Contact sales', href: '/contact/request-info' },
        ],
    },
    {
        name: 'Search public code',
        href: 'https://sourcegraph.com',
    },
    { name: 'Docs', href: 'https://docs.sourcegraph.com' },
    { name: 'Blog', href: '/blog' },
]

interface Props {
    linkElement?: React.ComponentType<
        Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'>
    >
    classes: Record<'item' | 'menu' | 'menuItem' | 'menuItemActive' | 'divider', string> & { menuItemBadge: BadgeColor }
}

export const NavItems: React.FunctionComponent<Props> = ({ linkElement: LinkElement = Link, classes }) => {
    const router = useRouter()
    const isCurrentLink = useCallback((href: string): boolean => router.asPath === href, [router.asPath])
    return (
        <>
            {NAV_ITEMS.map(item =>
                'href' in item ? (
                    <LinkElement
                        key={item.name}
                        href={item.href}
                        className={classNames('flex items-center', classes.item)}
                        aria-current={isCurrentLink(item.href) ? 'page' : undefined}
                    >
                        {item.name}
                    </LinkElement>
                ) : (
                    <NavItemMenu
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
        isCurrentLink: (href: string) => boolean
        className: string
        classes: Record<'menu' | 'menuItem' | 'menuItemActive' | 'divider', string> & { menuItemBadge: BadgeColor }
    }
> = ({
    name,
    links,
    isCurrentLink,
    className,
    classes: {
        menu: menuClassName,
        menuItem: menuItemClassName,
        menuItemActive: menuItemActiveClassName,
        menuItemBadge: menuItemBadgeColor,
        divider: dividerClassName,
    },
}) => (
    <Menu as="div" className="relative">
        {({ open }) => (
            <>
                <div>
                    <Menu.Button className={classNames('flex items-center', className)}>
                        {name}
                        {open ? (
                            <ChevronUpIcon className="ml-[1px] w-xs" />
                        ) : (
                            <ChevronDownIcon className="ml-[1px] w-xs" />
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
                                        <Link
                                            href={link.href}
                                            className={classNames(
                                                'flex items-center px-4 py-2 text-sm',
                                                menuItemClassName,
                                                active && menuItemActiveClassName
                                            )}
                                            aria-current={isCurrentLink(link.href) ? 'page' : undefined}
                                        >
                                            {link.name}
                                            {link.badge && (
                                                <Badge
                                                    size="xs"
                                                    color={menuItemBadgeColor}
                                                    text={link.badge}
                                                    className="ml-2"
                                                />
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
