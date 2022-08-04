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
                    <div className="mb-5 col-12 col-lg-3">
                        <Link href="/" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="ml-1 row footer__logo"
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

                        <ul className="mx-0 mt-1 nav footer__social">
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
                        <div className="mb-3 col-sm-6 col-md-3 col-lg-2" key={section.section}>
                            <h3 className="text-lg footer__nav-header font-weight-bold">{section.section}</h3>
                            <ul className="mx-0 nav flex-column">
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
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a
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
                    <li className="mr-3 nav-item">&copy; {new Date().getFullYear()} Sourcegraph</li>

                    {postscriptLinks.items.map(item => (
                        <li className="nav-item" key={item.title}>
                            <Link href={item.href} passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
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
