import { FunctionComponent, useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'

import DesktopNav from './navigation/DesktopNav'
import MobileNav from './navigation/MobileNav'

interface Props {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
    hideGetStartedButton?: boolean
    navLinks: NavLinks
}

interface NavLink {
    section: string
    items: {
        title: string
        href: string
    }[]
}

export type NavLinks = NavLink[]

const onRightClickLogo = (event: React.MouseEvent): void => {
    event.preventDefault()

    if (event.button === 3) {
        window.location.href =
            'https://f.hubspotusercontent20.net/hubfs/2762526/Brand%20assets/Sourcegraph%20Brand%20Kit%202.2%20-%20May%202021.zip'
    }
}

export const navLinks = [
    {
        section: 'Product',
        items: [
            {
                title: 'Code Search',
                href: '/code-search',
            },
            {
                title: 'Batch Changes',
                href: '/batch-changes',
            },
            {
                title: 'Code Insights',
                href: '/code-insights',
            },
            {
                title: 'Code Intelligence',
                href: 'https://docs.sourcegraph.com/code_intelligence',
            },
        ],
    },
    {
        section: 'Resources',
        items: [
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Learn',
                href: 'https://learn.sourcegraph.com/',
            },
            {
                title: 'Dev Tool Time',
                href: 'https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF',
            },
            {
                title: 'Sourcegraph Podcast',
                href: '/podcast',
            },
            {
                title: 'Case Studies',
                href: '/case-studies',
            },
        ],
    },
    {
        section: 'Use Cases',
        items: [
            {
                title: 'All Use Cases',
                href: '/use-cases',
            },
            {
                title: 'Code Security',
                href: '/use-cases/code-security',
            },
            {
                title: 'Developer Onboarding',
                href: '/use-cases/onboarding',
            },
            {
                title: 'Incident Response',
                href: '/use-cases/incident-response',
            },
            {
                title: 'Code Reuse',
                href: '/use-cases/code-reuse',
            },
            {
                title: 'Code Health',
                href: '/use-cases/code-health',
            },
        ],
    },
    {
        section: 'Pricing',
        items: [
            {
                title: 'Pricing',
                href: '/pricing',
            },
        ],
    },
    {
        section: 'Docs',
        items: [
            {
                title: 'Docs',
                href: 'https://docs.sourcegraph.com',
            },
        ],
    },
]

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
