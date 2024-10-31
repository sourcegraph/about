import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

const stripeIcon = {
    src: '/assets/icons/stripe-violet.svg',
    className: 'h-[40px]',
}

const sofiIcon = {
    src: '/assets/icons/sofi-logo-violet.svg',
    className: 'h-[35px]',
}

const icons = [
    {
        src: '/assets/icons/dropbox-logo.svg',
        className: 'h-[32px]',
    },
    {
        src: '/home/carousel/leidos-logo.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/siriusxm-logo.svg',
        className: 'h-[32px]',
    },
    {
        src: '/assets/icons/uber-logo.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/general-mills-logo.svg',
        className: 'h-[30px]',
    },
    {
        src: '/assets/icons/mercado-libre-logo.svg',
        className: 'h-[30px]',
    },
    {
        src: '/assets/icons/scotiabank-logo.svg',
        className: 'h-[32px]',
    },
    {
        src: '/home/carousel/reddit-logo.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/tesla-logo.svg',
        className: 'h-[35px]',
    },
    {
        src: '/home/carousel/palo-alto-logo.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/atlassian-logo.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/tripadvisor-logo.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/lyft-logo.svg',
        className: 'h-[35px] hidden md:block',
    },
    {
        src: '/assets/icons/amplitude-logo.svg',
        className: 'h-[30px]',
    },
]

interface LogoGridProps {
    mainLogo?: 'stripe' | 'sofi'
    showCta?: boolean
    header?: string | null
}

export const LogoGrid: FunctionComponent<LogoGridProps> = ({
    mainLogo = 'stripe',
    showCta = true,
    header = "Trusted by the world's largest dev teams",
}) => {
    // depending on the mainLogo, add the mainLogo as the 4th logo
    const iconsWithMainLogo =
        mainLogo === 'stripe'
            ? [...icons.slice(0, 3), stripeIcon, ...icons.slice(3)]
            : [...icons.slice(0, 3), sofiIcon, ...icons.slice(3)]

    return (
        <div>
            {/* header */}
            {header && <p className="mg:text-base mb-6 text-center font-mono text-sm text-gray-400">{header}</p>}

            {/* icon grid */}
            <div className="mx-auto max-w-7xl space-y-4 md:space-y-8">
                {/* top icon row of 8 */}
                <div className="grid grid-cols-2 flex-wrap justify-center gap-x-14 gap-y-4 sm:grid-cols-3 md:flex">
                    {iconsWithMainLogo.slice(0, 8).map((icon, index) => (
                        <div
                            key={icon.src}
                            className={classNames('flex w-auto items-center justify-center', icon.className)}
                        >
                            <img
                                src={icon.src}
                                alt={`Partner logo ${index + 1}`}
                                className="opacity-85 max-h-full w-auto"
                            />
                        </div>
                    ))}
                </div>

                {/* bottom icon row of 7 */}
                <div className="grid grid-cols-2 flex-wrap justify-center gap-x-14 gap-y-4 sm:grid-cols-3 md:flex">
                    {iconsWithMainLogo.slice(8).map((icon, index) => (
                        <div
                            key={icon.src}
                            className={classNames('flex w-auto items-center justify-center', icon.className)}
                        >
                            <img
                                src={icon.src}
                                alt={`Partner logo ${index + 9}`}
                                className="opacity-85 max-h-full w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* call to action */}
            {showCta && (
                <div className="mg:text-base mt-8 flex items-center justify-center text-sm">
                    <Link
                        href="https://sourcegraph.com/case-studies"
                        className="flex items-center gap-x-1.5 text-gray-400 hover:underline"
                    >
                        <span>Learn how teams are using Sourcegraph</span>
                        <ChevronRightIcon className="link-icon h-4 w-4" />
                    </Link>
                </div>
            )}
        </div>
    )
}
