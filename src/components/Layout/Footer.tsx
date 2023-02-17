import { FunctionComponent, useMemo } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Heading } from '..'
import { buttonStyle, buttonLocation } from '../../data/tracking'

import { footerLinks, socialLinks, postscriptLinks } from './navLinks'

interface Props {
    minimal?: boolean
    dark?: boolean
    className?: string
}

export const Footer: FunctionComponent<Props> = ({ minimal, dark, className }) => {
    const year = useMemo(() => new Date().getFullYear(), [])
    return (
        <footer className={classNames(className, { 'tw-pt-16 tw-pb-2': !minimal, 'tw-bg-black tw-text-white': dark })}>
            <div className="tw-max-w-screen-xl tw-mx-auto tw-px-4">
                {!minimal && (
                    <div className="tw-mb-8 tw-flex tw-flex-col-reverse sm:tw-grid sm:tw-grid-cols-12">
                        <div className="tw-col-span-12 lg:tw-col-span-5 tw-mt-xl sm:tw-mt-0 sm:tw-mb-sm lg:tw-mb-0">
                            <Link
                                href="/"
                                title="Sourcegraph - Universal code search"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
                                <img
                                    src={dark ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                                    alt="Sourcegraph - Code Intelligence Platform"
                                    className="tw-max-w-[264px] tw-w-full tw-h-auto"
                                    draggable={false}
                                    width={264}
                                    height={48}
                                />
                            </Link>

                            <ul className="tw-mx-0 tw-mt-3 tw-list-none tw-flex">
                                {socialLinks.items.map(item => (
                                    <li className="tw-mr-5" key={item.title}>
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
                                                'tw-text-gray-300 hover:tw-text-white': dark,
                                                'tw-text-gray-400 hover:tw-text-black': !dark,
                                            })}
                                        >
                                            {item.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="tw-col-span-12 lg:tw-col-span-7 sm:tw-grid sm:tw-grid-cols-12">
                            {footerLinks.map(section => (
                                <div className="tw-mb-md sm:tw-mb-0 sm:tw-col-span-4" key={section.section}>
                                    <Heading size="h5" as="h2" className="tw-mb-xs">
                                        {section.section}
                                    </Heading>
                                    <ul className="tw-ml-0 tw-list-none">
                                        {section.items.map(item => (
                                            <li className="tw-mb-xs tw-text-sm" key={item.title}>
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
                                                            'tw-text-gray-300': dark,
                                                            'tw-text-gray-500': !dark,
                                                        })}
                                                    >
                                                        {item.title}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        title={item.title}
                                                        data-button-style={buttonStyle.text}
                                                        data-button-location={buttonLocation.footer}
                                                        data-button-type="cta"
                                                        className={classNames('tw-font-medium', {
                                                            'tw-text-gray-300': dark,
                                                            'tw-text-gray-500': !dark,
                                                        })}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={classNames('tw-text-sm', { 'tw-py-4': minimal, 'tw-pt-sm tw-pb-2': !minimal })}>
                    <ul className="tw-ml-0 tw-list-none">
                        <li className="tw-text-gray-500 tw-mr-lg sm:tw-inline">&copy; {year} Sourcegraph, Inc.</li>

                        {postscriptLinks.items.map(item => (
                            <li key={item.title} className="tw-inline-block tw-mt-xxs sm:tw-mt-0">
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={classNames('tw-p-0 tw-mr-5', {
                                        'tw-text-gray-300': dark,
                                        'tw-text-gray-500': !dark,
                                    })}
                                    title={item.title}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
