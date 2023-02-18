import { FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import Navbar from 'react-bootstrap/Navbar'

import { NavLink, navLinks } from '../navLinks'

import { DesktopNav } from './DesktopNav'
import styles from './Header.module.css'
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
        styles.container,
        'navbar py-4 w-full !fixed top-0 right-0 left-0 z-[1030]',
        props.className,
        colorTheme === 'white' && 'bg-white',
        isPurpleNav && 'navbar-purple',
        isDarkNav && 'navbar-dark',
        {
            'bg-white': !isDarkNav && !isPurpleNav && (sticky || isOpen),
            'bg-violet-750': isPurpleNav && (sticky || isOpen),
            'bg-black': colorTheme === 'dark',
        }
    )

    return (
        <nav className={navStyle}>
            <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 xl:container">
                <Navbar.Brand href="/" className="header mr-0 flex">
                    <img
                        src={isDarkNav || isPurpleNav ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                        width={150}
                        height={26}
                        className="w-full max-w-[150px]"
                        aria-label="Sourcegraph - Code Intelligence Platform"
                        alt="Sourcegraph - Code Intelligence Platform"
                        draggable={false}
                    />
                </Navbar.Brand>

                {!props.minimal && (
                    <>
                        <button
                            type="button"
                            className={classNames('navbar-toggler justify-end', { ['isOpen']: isOpen })}
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

                        {false && <MobileNav navLinks={navLinks} isOpen={isOpen} />}
                    </>
                )}
            </div>
        </nav>
    )
}
