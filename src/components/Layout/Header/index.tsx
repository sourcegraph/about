import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import Navbar from 'react-bootstrap/Navbar'

import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { NavLink, navLinks } from './navLinks'

interface Props {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
    hideGetStartedButton?: boolean
    navLinks: NavLink[]
}

const onRightClickLogo = (event: React.MouseEvent): void => {
    event.preventDefault()

    if (event.button === 3) {
        window.location.href =
            'https://f.hubspotusercontent20.net/hubfs/2762526/Brand%20assets/Sourcegraph%20Brand%20Kit%202.2%20-%20May%202021.zip'
    }
}

export const Header: FunctionComponent<Props> = props => {
    const [isOpen, setIsOpen] = useState(false)
    const windowWidth = useWindowWidth()
    const isLgOrDown = windowWidth < breakpoints.xl
    const isMdOrDown = windowWidth < breakpoints.lg

    const isDarkNav = props.className?.includes('navbar-dark')

    return (
        <nav className={`header navbar py-3 ${props.className || 'navbar-light'}`}>
            <div className={classNames('container-xl', isMdOrDown && 'px-0')}>
                <Navbar.Brand href="/" onContextMenu={onRightClickLogo} className="header mr-0 pt-0 pb-1 d-flex">
                    <img
                        src={isDarkNav ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                        height={isLgOrDown ? '35' : '26'}
                        className="min-w-150"
                        aria-label="Sourcegraph - Universal code search"
                        draggable={false}
                    />
                </Navbar.Brand>

                {!props.minimal && (
                    <>
                        <button
                            type="button"
                            className="navbar-toggler justify-content-end"
                            data-toggle="collapse"
                            data-target="#mobile-navbar"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon" />
                        </button>

                        <DesktopNav navLinks={navLinks} hideGetStartedButton={props.hideGetStartedButton} />

                        <MobileNav
                            navLinks={navLinks}
                            hideGetStartedButton={props.hideGetStartedButton}
                            isOpen={isOpen}
                        />
                    </>
                )}
            </div>
        </nav>
    )
}

export default Header
