import { FunctionComponent } from 'react'

import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

import { footerLinks, socialLinks, postscriptLinks } from './navLinks'

interface Props {
    minimal?: boolean
    className?: string
}

const Footer: FunctionComponent<Props> = ({ minimal, className }) => (
    <footer className={`${minimal ? '' : 'pt-6 pb-2'} ${className || ''}`}>
        <div className="container-xl">
            {!minimal && (
                <div className="row footer__nav-sections">
                    <div className="col-12 col-lg-3 mb-5">
                        <Link href="/" passHref={true}>
                            <a
                                href="#none"
                                className="row footer__logo ml-1"
                                title="Sourcegraph - Universal code search"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
                                <span role="img" aria-label="Sourcegraph - Universal code search">
                                    {' '}
                                </span>
                            </a>
                        </Link>

                        <ul className="nav footer__social mt-1">
                            {socialLinks.items.map(item => (
                                <li className="nav-item" key={item.title}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        aria-label={item.title}
                                        title={item.title}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {footerLinks.map(section => (
                        <div className="col-sm-6 col-md-3 col-lg-2 mb-3" key={section.section}>
                            <h3 className="footer__nav-header text-lg font-weight-bold">{section.section}</h3>
                            <ul className="nav flex-column">
                                {section.items.map(item => (
                                    <li className="nav-item" key={item.title}>
                                        {item.href.includes('http') ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                title={item.title}
                                                data-button-style={buttonStyle.text}
                                                data-button-location={buttonLocation.footer}
                                                data-button-type="cta"
                                            >
                                                {item.title}
                                            </a>
                                        ) : (
                                            <Link href={item.href} passHref={true}>
                                                <a
                                                    href="#none"
                                                    title={item.title}
                                                    data-button-style={buttonStyle.text}
                                                    data-button-location={buttonLocation.footer}
                                                    data-button-type="cta"
                                                >
                                                    {item.title}
                                                </a>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            <div
                className={`footer__postscript d-flex justify-content-between ${minimal ? 'py-3' : 'pt-4 pb-2'} small`}
            >
                <ul className="nav">
                    <li className="nav-item mr-3">&copy; {new Date().getFullYear()} Sourcegraph</li>

                    {postscriptLinks.items.map(item => (
                        <li className="nav-item" key={item.title}>
                            <Link href={item.href} passHref={true}>
                                <a
                                    href="#none"
                                    className="nav-link text-gray-5"
                                    title={item.title}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer
