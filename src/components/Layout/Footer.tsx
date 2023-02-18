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
        <footer className={classNames(className, { 'pt-16 pb-2': !minimal, 'bg-black text-white': dark })}>
            <div className="mx-auto max-w-screen-xl px-4">
                {!minimal && (
                    <div className="mb-8 flex flex-col-reverse sm:grid sm:grid-cols-12">
                        <div className="col-span-12 mt-xl sm:mt-0 sm:mb-sm lg:col-span-5 lg:mb-0">
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
                                    className="h-auto w-full max-w-[264px]"
                                    draggable={false}
                                    width={264}
                                    height={48}
                                />
                            </Link>

                            <ul className="mx-0 mt-3 flex list-none">
                                {socialLinks.items.map(item => (
                                    <li className="mr-5" key={item.title}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            aria-label={item.title}
                                            title={item.title}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.footer}
                                            data-button-type="cta"
                                            className={classNames('mr-3', {
                                                'text-gray-300 hover:text-white': dark,
                                                'text-gray-400 hover:text-black': !dark,
                                            })}
                                        >
                                            {item.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-12 sm:grid sm:grid-cols-12 lg:col-span-7">
                            {footerLinks.map(section => (
                                <div className="mb-md sm:col-span-4 sm:mb-0" key={section.section}>
                                    <Heading size="h5" as="h2" className="mb-xs">
                                        {section.section}
                                    </Heading>
                                    <ul className="ml-0 list-none">
                                        {section.items.map(item => (
                                            <li className="mb-xs text-sm" key={item.title}>
                                                {item.href.includes('http') ? (
                                                    <a
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        title={item.title}
                                                        data-button-style={buttonStyle.text}
                                                        data-button-location={buttonLocation.footer}
                                                        data-button-type="cta"
                                                        className={classNames('font-medium', {
                                                            'text-gray-300': dark,
                                                            'text-gray-500': !dark,
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
                                                        className={classNames('font-medium', {
                                                            'text-gray-300': dark,
                                                            'text-gray-500': !dark,
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

                <div className={classNames('text-sm', { 'py-4': minimal, 'pt-sm pb-2': !minimal })}>
                    <ul className="ml-0 list-none">
                        <li className="mr-lg text-gray-500 sm:inline">&copy; {year} Sourcegraph, Inc.</li>

                        {postscriptLinks.items.map(item => (
                            <li key={item.title} className="mt-xxs inline-block sm:mt-0">
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={classNames('mr-5 p-0', {
                                        'text-gray-300': dark,
                                        'text-gray-500': !dark,
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
