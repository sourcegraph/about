import React from 'react'

import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import ChevronUpIcon from 'mdi-react/ChevronUpIcon'
import TriangleSmallUpIcon from 'mdi-react/TriangleSmallUpIcon'
import Link from 'next/link'

import { buttonStyle } from '../data/tracking'

export const GetStartedLinkButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    size?: 'md' | 'lg'
    children?: string
    className?: string
}> = ({ buttonLocation, dark = false, size = 'md', children = 'Get started', className }) => (
    <Link
        className={classNames(
            'btn whitespace-nowrap',
            dark ? 'btn-inverted-primary' : 'btn-primary',
            size === 'lg' && 'py-xs',
            className
        )}
        href="/get-started"
        title={children}
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        {children}
    </Link>
)

const BUTTON_CLASS_NAME = 'btn btn-primary py-xxs px-xs'

export const GetStartedButton: React.FunctionComponent<{
    buttonLocation: number
    minimal?: boolean
    className?: string
    buttonGroupClassName?: string
    otherVariantsClassName: { container: string; triangle: string }
}> = ({ buttonLocation, minimal = false, className, buttonGroupClassName, otherVariantsClassName }) => (
    <Disclosure as="div" className={className}>
        {({ open }) => (
            <>
                <div className={classNames('btn-group', buttonGroupClassName)}>
                    {VARIANTS.map(variant => (
                        <VariantButton
                            key={variant.name}
                            variant={variant}
                            minimal={minimal}
                            buttonLocation={buttonLocation}
                            className="flex-1"
                        />
                    ))}
                    <Disclosure.Button
                        type="button"
                        className={classNames(BUTTON_CLASS_NAME, 'flex-none')}
                        title="Other downloads"
                    >
                        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </Disclosure.Button>
                </div>
                {open && (
                    <OtherVariants
                        className={otherVariantsClassName.container}
                        triangleClassName={otherVariantsClassName.triangle}
                    />
                )}
            </>
        )}
    </Disclosure>
)

interface Variant {
    name: string
    href: string
    caption?: string
}

const VARIANTS: Variant[] = [
    {
        name: 'Cloud',
        href: '/get-started?t=enterprise',
        caption: 'Start free',
    },
    {
        name: 'Self-hosted',
        href: '/get-started?t=enterprise',
        caption: 'AMI, Docker, Kubernetes',
    },
]

const VariantButton: React.FunctionComponent<{
    variant: Variant
    minimal?: boolean
    buttonLocation: number
    className?: string
}> = ({ variant: { name, href, caption }, minimal = false, buttonLocation, className }) => (
    <Link
        className={classNames(BUTTON_CLASS_NAME, 'text-center', className)}
        href={href}
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        <div className="-mb-1.5 flex items-center justify-center whitespace-nowrap">{name}</div>
        {!minimal && <span className="truncate text-xs font-normal text-white/80">{caption}</span>}
    </Link>
)

const OtherVariants: React.FunctionComponent<{ className?: string; triangleClassName?: string }> = ({
    className,
    triangleClassName,
}) => (
    <div className={classNames('rounded bg-violet-800 p-xxs text-sm text-white/70', className)}>
        <TriangleSmallUpIcon className={classNames('text-violet-800', triangleClassName)} />
        <Link
            href="https://sourcegraph.com/search"
            className="font-normal text-violet-300 no-underline hover:text-white hover:underline"
        >
            Sourcegraph.com
        </Link>{' '}
        (public code only),{' '}
        <Link
            href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph"
            className="font-normal text-violet-300 no-underline hover:text-white hover:underline"
        >
            build from source
        </Link>
        , or{' '}
        <Link
            href="https://docs.sourcegraph.com"
            className="font-normal text-violet-300 no-underline hover:text-white hover:underline"
        >
            other deployment methods
        </Link>
        .
    </div>
)
