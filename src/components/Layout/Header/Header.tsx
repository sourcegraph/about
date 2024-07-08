import { FunctionComponent, useState, useEffect, RefObject } from 'react'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuthModal } from '../../../context/AuthModalContext'
import { breakpoints } from '../../../data/breakpoints'
import { buttonLocation } from '../../../data/tracking'
import { useWindowWidth } from '../../../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../../../lib/utils'
import { Banner } from '../../Banner'
import { MeetWithProductExpertButton } from '../../cta/MeetWithProductExpertButton'

import { NavItems } from './NavItems'

export type HeaderColorTheme = 'purple' | 'dark' | 'white'

interface Props {
    minimal?: boolean
    colorTheme: HeaderColorTheme
    navRef?: RefObject<HTMLElement>
}

export const Header: FunctionComponent<Props> = ({ minimal, colorTheme, navRef }) => {
    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
    const [sticky, setSticky] = useState<boolean>(false)
    const router = useRouter()
    const { pathname } = router
    /**
     * Determines whether the banner component should be displayed in the header.
     * useState(true) for on, useState(false) for off.
     */
    const [showBanner, setShowBanner] = useState(false)

    const source = pathname.slice(1) || 'about-home'

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

    return (
        <Disclosure as="nav" className={classNames('fixed top-0 left-0 right-0 z-[1030]')} ref={navRef}>
            {({ open, close }) => (
                <>
                    {showBanner && <Banner />}
                    <HeaderContent
                        colorTheme={colorTheme}
                        minimal={minimal}
                        open={open}
                        sticky={sticky}
                        source={source}
                        close={close}
                    />
                </>
            )}
        </Disclosure>
    )
}

const HEADER_CONTENT_THEME_CLASS: Record<
    HeaderColorTheme,
    Record<
        | 'container'
        | 'item'
        | 'menu'
        | 'menuItem'
        | 'menuItemActive'
        | 'divider'
        | 'button'
        | 'panel'
        | 'icon'
        | 'decoratedText'
        | 'subText'
        | 'arrowIcon',
        string
    >
> = {
    white: {
        container: 'bg-gray-50',
        item: 'text-gray-500 hover:bg-gray-200 focus:ring-black',
        menu: 'bg-white border-gray-200',
        menuItem: 'text-gray-700',
        menuItemActive: 'bg-gray-100',
        divider: 'border-black/25',
        button: 'text-gray-500 hover:bg-violet-200 hover:text-black focus:ring-black',
        panel: 'border-black/25',
        icon: 'border-black/25 bg-white',
        decoratedText: 'text-gray-300',
        subText: 'text-gray-400',
        arrowIcon: 'bg-white border-gray-200',
    },
    dark: {
        container: 'bg-gray-700',
        item: 'text-white hover:bg-gray-600 focus:ring-white',
        menu: 'bg-gray-700 border-gray-600',
        menuItem: 'text-white',
        menuItemActive: 'bg-white/10',
        divider: 'border-white/25',
        button: 'text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-white',
        panel: 'border-white/25',
        icon: 'border-white/25 bg-black/25',
        decoratedText: 'text-gray-400',
        subText: 'text-gray-200',
        arrowIcon: 'bg-gray-700 border-gray-600',
    },
    purple: {
        container: 'bg-violet-750',
        item: 'text-white hover:bg-violet-600 focus:ring-white',
        menu: 'bg-violet-750 border-gray-600',
        menuItem: 'text-white',
        menuItemActive: 'bg-violet-600',
        divider: 'border-white/25',
        button: 'text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-white',
        panel: 'border-white/25',
        icon: 'border-white/25 bg-violet-700',
        decoratedText: 'text-gray-400',
        subText: 'text-gray-200',
        arrowIcon: 'bg-violet-750 border-gray-600',
    },
}

const HeaderContent: FunctionComponent<
    Props & {
        open: boolean
        sticky: boolean
        source: string
        close: () => void
    }
> = ({ colorTheme, open, sticky, source, close, ...props }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (eventName: string, initiateOpenModal: boolean): void => {
        captureCustomEventWithPageData(eventName)
        if (initiateOpenModal) {
            openModal(source)
        }
    }
    const dark = colorTheme === 'dark' || colorTheme === 'purple'
    const classes = HEADER_CONTENT_THEME_CLASS[colorTheme]

    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const getButtonClasses = (isDark: boolean, isMobile: boolean): string => {
        const baseClasses = 'w-full flex justify-center !font-semibold'
        const darkClasses = isMobile ? 'btn-secondary-dark text-gray-200 hover:bg-gray-500' : 'btn-link-dark'
        const lightClasses = `!text-violet-700 ${isMobile ? 'btn-secondary' : 'btn-link'}`

        return classNames(baseClasses, isDark ? darkClasses : lightClasses)
    }

    const callToAction = (
        <span className="flex w-full flex-col items-center gap-4 lg:flex-row">
            <MeetWithProductExpertButton
                handleEventSubmission={handleOpenModal}
                id="topnav"
                buttonLocation={buttonLocation.nav}
                buttonClassName={`order-2 lg:order-1 py-3 lg:py-2 px-5 lg:px-4 ${getButtonClasses(dark, isMobile)}`}
                requestInfo={true}
            >
                Contact
            </MeetWithProductExpertButton>
            <Link
                onClick={() => handleOpenModal('login_click', false)}
                id="topnav"
                href="https://sourcegraph.com/sign-in?returnTo=/cody/manage"
                title="Get started with Cody"
                className={classNames(
                    'btn order-3 flex w-full justify-center py-3 px-5 lg:order-2  lg:py-1.5 lg:px-4 ',
                    dark ? 'btn-secondary-dark hover:bg-gray-500' : 'btn-secondary '
                )}
                type="button"
            >
                Login
            </Link>
            <button
                id="topnav"
                type="button"
                className={classNames(
                    'btn order-1 w-full min-w-fit py-3 px-5 lg:order-3 lg:py-1.5 lg:px-3',
                    dark ? 'btn-primary-dark' : 'btn-primary'
                )}
                title="Download Sourcegraph"
                onClick={() => handleOpenModal('get_cody_nav_click', true)}
            >
                Get Cody for free
            </button>
        </span>
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
                                    <div className="hidden flex-1 items-center self-center md:ml-4 lg:block">
                                        <div className="flex space-x-3">
                                            <NavItems
                                                close={close}
                                                classes={{
                                                    ...classes,
                                                    item: classNames(
                                                        'whitespace-nowrap rounded-2xl py-0 px-2 font-medium text-sm leading-normal tracking-normal focus:outline-none focus:ring-2',
                                                        classes.item
                                                    ),
                                                    menu: classNames(
                                                        'absolute left-0 z-10 w-48 border-1 origin-top-right shadow-lg sg-navbar-menu  lg:w-[274px]',
                                                        classes.menu
                                                    ),
                                                    icon: classes.icon,
                                                    decoratedText: classNames(
                                                        'text-xs leading-normal tracking-wide uppercase',
                                                        classes.decoratedText
                                                    ),
                                                    subText: classNames(
                                                        'text-xs leading-normal tracking-normal',
                                                        classes.subText
                                                    ),
                                                    arrowIcon: classes.arrowIcon,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden pr-2 md:pr-0 lg:flex">{callToAction}</div>
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
                    'max-h-[calc(100vh-64px)] overflow-y-auto border-b lg:hidden',
                    HEADER_CONTENT_THEME_CLASS[colorTheme].container,
                    HEADER_CONTENT_THEME_CLASS[colorTheme].panel
                )}
            >
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <div className="ml-3 mb-10 mt-8 flex flex-col items-start space-y-4 lg:my-0">{callToAction}</div>
                    <NavItems
                        close={close}
                        linkElement={DisclosureButton}
                        classes={{
                            ...classes,
                            item: classNames(
                                'w-full flex justify-between rounded-md px-3 py-2 text-base font-normal leading-normal tracking-normal',
                                classes.item
                            ),
                        }}
                    />
                </div>
            </Disclosure.Panel>
        </>
    )
}

const DisclosureButton: React.FunctionComponent<
    Pick<React.ComponentProps<typeof Link>, 'href' | 'className' | 'aria-current' | 'children'> & {
        close: () => void
    }
> = ({ close, ...props }) => <Link id="topnav" {...props} onClick={() => close()} />
