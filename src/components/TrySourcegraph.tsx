import { FunctionComponent } from 'react'

import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

interface Props {
    demoFormURL?: string
    className?: string
}

export const TrySourcegraph: FunctionComponent<Props> = ({ demoFormURL = '/demo', className = '' }) => (
    <div className={`${className} tw-py-24 tw-max-w-screen-lg sm:tw-grid sm:tw-grid-cols-2 tw-mx-auto tw-px-4`}>
        <div className="sm:mb-0 sm:tw-pr-4">
            <h3 className="font-weight-bold">Try Sourcegraph for free today</h3>
            <p className="tw-max-w-md">
                You'll be searching your own code in 10 minutes. You can run it self-hosted (all of your code stays
                local and secure).
            </p>
        </div>

        {/*  */}

        <div className="tw-flex tw-flex-col md:tw-items-center md:tw-flex-row md:tw-justify-center">
            <Link href="/get-started/self-hosted" passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    className="tw-mb-4 btn btn-primary md:tw-mr-4 md:tw-mb-0"
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
                        className="btn btn-outline-primary"
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
