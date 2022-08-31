import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

import { footerLinks, socialLinks, postscriptLinks } from './navLinks'

interface Props {
    minimal?: boolean
    className?: string
}

const Footer: FunctionComponent<Props> = ({ minimal, className }) => {
    const isDarkNav = className?.includes('navbar-dark')

    return (
        <footer
            className={classNames(className, { 'tw-pt-16 tw-pb-2': !minimal, 'tw-bg-black tw-text-white': isDarkNav })}
        >
            <div className="tw-max-w-screen-xl tw-mx-auto tw-px-4">
                {!minimal && (
                    <div className="tw-mb-8 tw-grid tw-grid-cols-6 md:tw-grid-cols-5">
                        <div className="tw-col-span-5 md:tw-col-span-2">
                            <Link href="/" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    title="Sourcegraph - Universal code search"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    <img
                                        src={isDarkNav ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                                        alt="Sourcegraph - Universal code search"
                                        className="tw-max-w-[200px] tw-max-h-[40px] tw-w-full"
                                        draggable={false}
                                    />
                                </a>
                            </Link>

                            <ul className="tw-mx-0 tw-mt-3 tw-list-none tw-flex">
                                {socialLinks.items.map(item => (
                                    <li className="tw-mr-3" key={item.title}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            aria-label={item.title}
                                            title={item.title}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.footer}
                                            data-button-type="cta"
                                            className={classNames('tw-mr-3', {
                                                'tw-text-gray-300 hover:tw-text-white': isDarkNav,
                                                'tw-text-gray-400 hover:tw-text-black': !isDarkNav,
                                            })}
                                        >
                                            {item.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {footerLinks.map(section => (
                            <div
                                className="tw-mb-3 lg:tw-mb-0 tw-col-span-6 sm:tw-col-span-2 md:tw-col-span-1"
                                key={section.section}
                            >
                                <h3 className="tw-text-lg tw-font-semibold">{section.section}</h3>
                                <ul className="tw-ml-0 tw-list-none">
                                    {section.items.map(item => (
                                        <li className="tw-mb-2 tw-text-sm" key={item.title}>
                                            {item.href.includes('http') ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    title={item.title}
                                                    data-button-style={buttonStyle.text}
                                                    data-button-location={buttonLocation.footer}
                                                    data-button-type="cta"
                                                    className={classNames('tw-font-medium', {
                                                        'tw-text-gray-300': isDarkNav,
                                                        'tw-text-gray-500': !isDarkNav,
                                                    })}
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
                                                        className={classNames('tw-font-medium', {
                                                            'tw-text-gray-300': isDarkNav,
                                                            'tw-text-gray-500': !isDarkNav,
                                                        })}
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

                <div className={classNames('tw-text-sm', { 'tw-py-4': minimal, 'tw-pt-6 tw-pb-2': !minimal })}>
                    <ul className="tw-ml-0 tw-list-none tw-flex">
                        <li className="tw-mr-4">&copy; {new Date().getFullYear()} Sourcegraph</li>
                        <li className="tw-mr-4">-</li>

                        {postscriptLinks.items.map(item => (
                            <li key={item.title}>
                                <Link key={item.title} href={item.href} passHref={true}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        className={classNames('tw-p-0 tw-mr-4', {
                                            'tw-text-gray-300': isDarkNav,
                                            'tw-text-gray-500': !isDarkNav,
                                        })}
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
}

export default Footer
