import { FunctionComponent, useState, useEffect, useRef } from 'react'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Link from 'next/link'

import { buttonLocation } from '../../../data/tracking'
import { TrySourcegraphForFreeButton } from '../../cta/TrySourcegraphForFreeButton'

import { NavItems } from './NavItems'

export type HeaderColorTheme = 'purple' | 'dark' | 'white'

interface Props {
    minimal?: boolean
    colorTheme: HeaderColorTheme
}

export const Header: FunctionComponent<Props> = ({ minimal, colorTheme }) => {
    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
    const [sticky, setSticky] = useState<boolean>(false)

    /**
     * This checks the scroll position to see if the viewport has been
     * scrolled past the last scroll position.
     */
    const handleScroll = (): void => {
        const scrollPosition = window.scrollY

        if (scrollPosition > lastScrollPosition && scrollPosition > 1) {
            setSticky(true)
        } else if (scrollPosition === 0) {
            setSticky(false)
        }

        setLastScrollPosition(scrollPosition)
    }

    // This listens for scroll events to handle the sticky nav
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    })

    const navRef = useRef<HTMLElement>(null)

    /**
     * This sets a top buffer for the sticky nav's main position by using
     * the height of the navbar.
     */
    useEffect(() => {
        if (navRef.current) {
            const navHeight = navRef.current.getBoundingClientRect().height || 74
            const parentElement = navRef.current.parentElement
            if (parentElement) {
                parentElement.style.paddingTop = `${navHeight}px`
            }
        }
    }, [])

    return (
        <Disclosure as="nav" className={classNames('fixed top-0 left-0 right-0 z-[1030]')} ref={navRef}>
            {({ open }) => <HeaderContent colorTheme={colorTheme} minimal={minimal} open={open} sticky={sticky} />}
        </Disclosure>
    )
}

const HEADER_CONTENT_THEME_CLASS: Record<
    HeaderColorTheme,
    Record<'container' | 'item' | 'menu' | 'menuItem' | 'menuItemActive' | 'button' | 'panel', string>
> = {
    white: {
        container: 'bg-white',
        item: 'text-black hover:bg-violet-200 focus:ring-black',
        menu: 'bg-white ring-black',
        menuItem: 'text-black',
        menuItemActive: 'bg-violet-200',
        button: 'text-gray-500 hover:bg-violet-200 hover:text-black focus:ring-black',
        panel: 'border-black/25',
    },
    dark: {
        container: 'bg-black',
        item: 'text-white hover:bg-[#ffffff33] focus:ring-white',
        menu: 'bg-gray-700 ring-white',
        menuItem: 'text-white',
        menuItemActive: 'bg-gray-600',
        button: 'text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-white',
        panel: 'border-white/25',
    },
    purple: {
        container: 'bg-violet-750',
        item: 'text-white hover:bg-violet-600 focus:ring-white',
        menu: 'bg-violet-750 ring-white',
        menuItem: 'text-white',
        menuItemActive: 'bg-violet-600',
        button: 'text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-white',
        panel: 'border-white/25',
    },
}

const HeaderContent: FunctionComponent<Props & { open: boolean; sticky: boolean }> = ({
    colorTheme,
    open,
    sticky,
    ...props
}) => {
    const dark = colorTheme === 'dark' || colorTheme === 'purple'
    const classes = HEADER_CONTENT_THEME_CLASS[colorTheme]
    return (
        <>
            <div
                className={classNames(
                    'transition',
                    // TODO(sqs): dont special-case colorTheme==='dark'
                    (sticky || open || colorTheme === 'dark') && HEADER_CONTENT_THEME_CLASS[colorTheme].container
                )}
            >
                <div className="mx-auto max-w-7xl px-2 lg:px-6">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button
                                className={classNames(
                                    'inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset',
                                    HEADER_CONTENT_THEME_CLASS[colorTheme].button
                                )}
                            >
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link
                                    href="/"
                                    className={classNames(
                                        '-ml-2 block rounded-md py-1 px-2 focus:outline-none focus:ring-2',
                                        dark ? 'focus:ring-white' : 'focus:ring-black'
                                    )}
                                >
                                    <img
                                        src={dark ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                                        width={150}
                                        height={26}
                                        className="block"
                                        aria-label="Sourcegraph - Code Intelligence Platform"
                                        alt="Sourcegraph - Code Intelligence Platform"
                                    />
                                </Link>
                            </div>
                            {!props.minimal && (
                                <>
                                    <div className="hidden flex-1 lg:ml-4 lg:block">
                                        <div className="flex space-x-3">
                                            <NavItems
                                                items={NAV_LINK_SECTIONS}
                                                classNames={{
                                                    ...classes,
                                                    item: classNames(
                                                        'whitespace-nowrap rounded-md p-2 font-medium focus:outline-none focus:ring-2',
                                                        classes.item
                                                    ),
                                                    menu: classNames(
                                                        'absolute right-0 z-10 w-48 origin-top-right shadow-lg',
                                                        classes.menu
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                                        <TrySourcegraphForFreeButton buttonLocation={buttonLocation.nav} dark={dark}>
                                            Start for free
                                        </TrySourcegraphForFreeButton>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Disclosure.Panel
                className={classNames(
                    'border-b lg:hidden',
                    HEADER_CONTENT_THEME_CLASS[colorTheme].container,
                    HEADER_CONTENT_THEME_CLASS[colorTheme].panel
                )}
            >
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <NavItems
                        items={NAV_LINK_SECTIONS}
                        linkElement={DisclosureButton}
                        classNames={{
                            ...classes,
                            item: classNames('block rounded-md px-3 py-2 text-base font-medium', classes.item),
                        }}
                    />
                </div>
            </Disclosure.Panel>
        </>
    )
}

const DisclosureButton: React.FunctionComponent<
    Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'>
> = props => <Disclosure.Button as={Link} {...props} />

export interface NavLinkSection {
    name: string
    items: { name: string; href: string }[]
}

const NAV_LINK_SECTIONS: NavLinkSection[] = [
    {
        name: 'Product',
        items: [
            {
                name: 'Code Search',
                href: '/code-search',
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
                name: 'Cloud',
                href: '/cloud',
            },
        ],
    },
    {
        name: 'Resources',
        items: [
            {
                name: 'All resources',
                href: '/resources',
            },
            {
                name: 'Blog',
                href: '/blog',
            },
            {
                name: 'Podcast',
                href: '/podcast',
            },
            {
                name: 'Case studies',
                href: '/case-studies',
            },
            {
                name: 'All use cases',
                href: '/use-cases',
            },
            {
                name: 'Code security',
                href: '/use-cases/code-security',
            },
            {
                name: 'Developer onboarding',
                href: '/use-cases/onboarding',
            },
            {
                name: 'Incident response',
                href: '/use-cases/incident-response',
            },
            {
                name: 'Code reuse',
                href: '/use-cases/code-reuse',
            },
            {
                name: 'Code health',
                href: '/use-cases/code-health',
            },
        ],
    },
    {
        name: 'Pricing',
        items: [
            {
                name: 'Pricing',
                href: '/pricing',
            },
        ],
    },
    {
        name: 'Docs',
        items: [
            {
                name: 'Docs',
                href: 'https://docs.sourcegraph.com',
            },
        ],
    },
    {
        name: 'Sourcegraph',
        items: [
            {
                name: 'Search code',
                href: 'https://sourcegraph.com/search',
            },
        ],
    },
]
