import { FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import Navbar from 'react-bootstrap/Navbar'

import { NavLink, navLinks } from '../navLinks'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export type HeaderColorTheme = 'purple' | 'dark' | 'white' | 'default'

interface Props {
    minimal?: boolean
    colorTheme?: HeaderColorTheme
    className?: string
    navLinks: NavLink[]
}

export const Header: FunctionComponent<Props> = ({ colorTheme = 'default', ...props }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
    const [sticky, setSticky] = useState<boolean>(false)

    const isDarkNav = colorTheme === 'dark'
    const isPurpleNav = colorTheme === 'purple'

    const dark = isDarkNav || isPurpleNav

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

    /**
     * This sets a top buffer for the sticky nav's main position by using
     * the height of the navbar.
     */
    useEffect(() => {
        const nav = document.querySelector('.navbar')
        const navHeight = nav?.getBoundingClientRect().height || 74
        const parentElement = nav?.parentElement
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        parentElement!.style.paddingTop = `${navHeight}px`
    })

    const navStyle = classNames(
        'header navbar tw-py-4 tw-w-full tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-z-[1030]',
        props.className,
        colorTheme === 'white' && 'tw-bg-white',
        isPurpleNav && 'navbar-purple',
        isDarkNav && 'navbar-dark',
        {
            'tw-bg-white': !isDarkNav && !isPurpleNav && (sticky || isOpen),
            'tw-bg-violet-750': isPurpleNav && (sticky || isOpen),
            'tw-bg-black': colorTheme === 'dark',
        }
    )

    return (
        <nav className={navStyle}>
            <div className="xl:tw-container tw-flex tw-w-full tw-mx-auto tw-flex-wrap tw-items-center tw-justify-between tw-px-0">
                <Navbar.Brand href="/" className="tw-mr-0 header tw-flex">
                    <img
                        src={isDarkNav || isPurpleNav ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                        width={150}
                        height={26}
                        className="tw-max-w-[150px] tw-w-full"
                        aria-label="Sourcegraph - Code Intelligence Platform"
                        alt="Sourcegraph - Code Intelligence Platform"
                        draggable={false}
                    />
                </Navbar.Brand>

                {!props.minimal && (
                    <>
                        <button
                            type="button"
                            className={classNames('navbar-toggler tw-justify-end', { ['isOpen']: isOpen })}
                            data-toggle="collapse"
                            data-target="#mobile-navbar"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            {[0, 1, 2].map(key => (
                                <div key={key} className="nav-line" />
                            ))}
                        </button>

                        <DesktopNav navLinks={navLinks} dark={dark} />

                        <MobileNav navLinks={navLinks} isOpen={isOpen} />
                    </>
                )}
            </div>
        </nav>
    )
}
