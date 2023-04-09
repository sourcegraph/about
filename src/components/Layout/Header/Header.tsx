import { FunctionComponent, useState, useEffect, useRef } from 'react'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { buttonLocation } from '../../../data/tracking'
import { MeetWithProductExpertButton } from '../../cta/MeetWithProductExpertButton'

import { NavItems } from './NavItems'

export type HeaderColorTheme = 'purple' | 'dark' | 'white'

interface Props {
    minimal?: boolean
    colorTheme: HeaderColorTheme
}

export const Header: FunctionComponent<Props> = ({ minimal, colorTheme }) => {
    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
    const [sticky, setSticky] = useState<boolean>(false)
    const router = useRouter()
    const { pathname } = router

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
    Record<'container' | 'item' | 'menu' | 'menuItem' | 'menuItemActive' | 'divider' | 'button' | 'panel', string>
> = {
    white: {
        container: 'bg-white',
        item: 'text-black hover:bg-violet-200 focus:ring-black',
        menu: 'bg-white ring-black',
        menuItem: 'text-black',
        menuItemActive: 'bg-violet-200',
        divider: 'border-black/25',
        button: 'text-gray-500 hover:bg-violet-200 hover:text-black focus:ring-black',
        panel: 'border-black/25',
    },
    dark: {
        container: 'bg-black',
        item: 'text-white hover:bg-white/25 focus:ring-white',
        menu: 'bg-gray-700 ring-white',
        menuItem: 'text-white',
        menuItemActive: 'bg-gray-600',
        divider: 'border-white/25',
        button: 'text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-white',
        panel: 'border-white/25',
    },
    purple: {
        container: 'bg-violet-750',
        item: 'text-white hover:bg-violet-600 focus:ring-white',
        menu: 'bg-violet-750 ring-white',
        menuItem: 'text-white',
        menuItemActive: 'bg-violet-600',
        divider: 'border-white/25',
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
    const callToAction = (
        <>
            <MeetWithProductExpertButton
                buttonLocation={buttonLocation.nav}
                buttonClassName={classNames(
                    '!font-semibold',
                    dark ? 'btn-outline-white text-white hover:text-violet-300' : 'btn-link',
                    'border-0'
                )}
                requestInfo={true}
            />
            <Link
                href="/get-started"
                className={classNames(
                    'btn min-w-fit px-6 font-normal lg:px-4',
                    dark ? 'btn-inverted-primary' : 'btn-primary'
                )}
                title="Download Sourcegraph"
            >
                Download Sourcegraph
            </Link>
        </>
    )

    return (
        <>
            <div
                className={classNames(
                    'transition',
                    (sticky || open) && HEADER_CONTENT_THEME_CLASS[colorTheme].container
                )}
            >
                <div className="mx-auto max-w-7xl px-2 md:px-6">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center md:items-stretch md:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link
                                    href="/"
                                    className={classNames(
                                        'block rounded-md py-1 px-2 focus:outline-none focus:ring-2 md:-ml-2',
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
                                    <div className="hidden flex-1 md:ml-4 lg:block">
                                        <div className="flex space-x-3">
                                            <NavItems
                                                classes={{
                                                    ...classes,
                                                    item: classNames(
                                                        'whitespace-nowrap rounded-md p-2 font-medium text-sm focus:outline-none focus:ring-2',
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
                                    <div className="hidden items-center space-x-3 pr-2 md:ml-6 md:pr-0 lg:ml-0 lg:flex">
                                        {callToAction}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button
                                className={classNames(
                                    'inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset',
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
                        linkElement={DisclosureButton}
                        classes={{
                            ...classes,
                            item: classNames('block rounded-md px-3 py-2 text-base font-medium', classes.item),
                        }}
                    />
                    <div className="ml-3 !mt-2 flex flex-col items-start space-y-4">{callToAction}</div>
                </div>
            </Disclosure.Panel>
        </>
    )
}

const DisclosureButton: React.FunctionComponent<
    Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'>
> = props => <Disclosure.Button as={Link} {...props} />
