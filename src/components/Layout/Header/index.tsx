import { FunctionComponent, useState, useEffect } from 'react'

import classNames from 'classnames'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'

import { NavLink, navLinks } from '../navLinks'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

interface Props {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
    navLinks: NavLink[]
}

const onRightClickLogo = (event: React.MouseEvent): void => {
    event.preventDefault()

    if (event.button === 2) {
        window.location.href =
            'https://f.hubspotusercontent20.net/hubfs/2762526/Brand%20assets/Sourcegraph%20Brand%20Kit%202.2%20-%20May%202021.zip'
    }
}

export const Header: FunctionComponent<Props> = props => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
    const [sticky, setSticky] = useState<boolean>(false)

    const isDarkNav = props.className?.includes('navbar-dark')

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

    const navStyle = classNames('header navbar py-3 w-100 fixed-top', props.className, {
        'bg-white shadow-sm': !isDarkNav && (sticky || isOpen),
        'tw-bg-black shadow-sm': isDarkNav && (sticky || isOpen),
    })

    return (
        <nav className={navStyle}>
            <div className="container-xl tw-px-0">
                <Navbar.Brand href="/" onContextMenu={onRightClickLogo} className="tw-mr-0 header tw-flex">
                    <Image
                        src={isDarkNav ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                        width={150}
                        height={26}
                        className="tw-max-w-[150px] tw-w-full"
                        aria-label="Sourcegraph - Universal code search"
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

                        <DesktopNav navLinks={navLinks} />

                        <MobileNav navLinks={navLinks} isOpen={isOpen} />
                    </>
                )}
            </div>
        </nav>
    )
}

export default Header
