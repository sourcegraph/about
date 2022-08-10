import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

interface Props {
    demoFormURL?: string
    className?: string
    stackedButtons?: boolean
}

export const TrySourcegraph: FunctionComponent<Props> = ({
    demoFormURL = '/demo',
    className = '',
    stackedButtons = false,
}) => (
    <div className={`${className} tw-grid sm:tw-grid-cols-12 tw-max-w-screen-lg tw-mx-auto`}>
        <div className="tw-mb-4 sm:mb-0 sm:tw-pr-4 tw-col-span-7 md:tw-col-span-6">
            <h3 className="tw-pr-16">Try Sourcegraph for free today</h3>
            <p className="tw-max-w-md tw-ml-0">
                You'll be searching your own code in 10 minutes. You can run it self-hosted (all of your code stays
                local and secure).
            </p>
        </div>

        <div
            className={classNames('tw-flex md:tw-items-center sm:tw-justify-center tw-col-span-5 md:tw-col-span-6', {
                'tw-flex-col': stackedButtons,
                'tw-flex-col lg:tw-flex-row': !stackedButtons,
            })}
        >
            <Link href="/get-started/self-hosted" passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    className={classNames('btn btn-primary tw-max-w-[200px] tw-w-full', {
                        'tw-mb-4': stackedButtons,
                        'tw-mb-4 lg:tw-mb-0 lg:tw-mr-4': !stackedButtons,
                    })}
                    title="Try Sourcegraph now"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.trySourcegraph}
                    data-button-type="cta"
                >
                    Try Sourcegraph now
                </a>
            </Link>

            {demoFormURL && (
                <Link href={demoFormURL} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="btn btn-outline-primary tw-max-w-[200px] tw-w-full"
                        title="Schedule a demo"
                        data-button-style={buttonStyle.outline}
                        data-button-location={buttonLocation.bodyDemo}
                        data-button-type="cta"
                    >
                        Schedule a demo
                    </a>
                </Link>
            )}
        </div>
    </div>
)
