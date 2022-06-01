import { FunctionComponent, useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'

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

    return (
        <nav className={`header navbar py-3 ${props.className || 'navbar-light'}`}>
            <div className="container-xl">
                <Navbar.Brand className="header__logo" href="/" onContextMenu={onRightClickLogo}>
                    <span role="img" aria-label="Sourcegraph - Universal code search">
                        {' '}
                    </span>
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
