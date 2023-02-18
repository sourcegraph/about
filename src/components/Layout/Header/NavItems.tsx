import React, { useCallback } from 'react'

import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import ChevronUpIcon from 'mdi-react/ChevronUpIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavLinkSection } from './Header'

interface Props {
    items: NavLinkSection[]

    linkElement?: React.ComponentType<
        Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'>
    >
    classNames: Record<'item' | 'menu' | 'menuItem' | 'menuItemActive', string>
}

const useIsCurrentLink = (): ((href: string) => boolean) => {
    const router = useRouter()
    const isCurrentLink = useCallback((href: string): boolean => router.asPath === href, [router.asPath])
    return isCurrentLink
}

export const NavItems: React.FunctionComponent<Props> = ({ items, linkElement = Link, classNames }) => {
    const isCurrentLink = useIsCurrentLink()
    return (
        <>
            {items.map(item => (
                <NavItem
                    key={item.name}
                    {...item}
                    isCurrentLink={isCurrentLink}
                    linkElement={linkElement}
                    className={classNames.item}
                    classNames={classNames}
                />
            ))}
        </>
    )
}

const NavItem: React.FunctionComponent<
    NavLinkSection & {
        isCurrentLink: (href: string) => boolean
        linkElement: React.ComponentType<
            Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'>
        >
        className: string
        classNames: Record<'menu' | 'menuItem' | 'menuItemActive', string>
    }
> = ({ name, items, isCurrentLink, linkElement: LinkElement, className, classNames }) =>
    items.length === 1 ? (
        <LinkElement
            key={items[0].name}
            href={items[0].href}
            className={className}
            aria-current={isCurrentLink(items[0].href) ? 'page' : undefined}
        >
            {items[0].name}
        </LinkElement>
    ) : (
        <NavItemMenu
            name={name}
            items={items}
            isCurrentLink={isCurrentLink}
            className={className}
            classNames2={classNames}
        />
    )

const NavItemMenu: React.FunctionComponent<
    NavLinkSection & {
        isCurrentLink: (href: string) => boolean
        className: string
        classNames2: Record<'menu' | 'menuItem' | 'menuItemActive', string>
    }
> = ({
    name,
    items,
    isCurrentLink,
    className,
    classNames2: { menu: menuClassName, menuItem: menuItemClassName, menuItemActive: menuItemActiveClassName },
}) => (
    <Menu as="div" className="relative">
        {({ open }) => (
            <>
                <div>
                    <Menu.Button className={classNames('flex', className)}>
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
                        {items.map(item => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            'block px-4 py-2 text-sm',
                                            menuItemClassName,
                                            active && menuItemActiveClassName
                                        )}
                                        aria-current={isCurrentLink(item.href) ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </>
        )}
    </Menu>
)
