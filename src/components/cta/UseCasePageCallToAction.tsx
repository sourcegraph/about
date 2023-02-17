import React from 'react'

import Link from 'next/link'

import { buttonStyle } from '../../data/tracking'

import { TrySourcegraphForFreeButton } from './TrySourcegraphForFreeButton'

export const UseCasePageCallToAction: React.FunctionComponent<{
    header?: string
    text: string
    buttonLocation: number
}> = ({ header = 'Get started with Sourcegraph', text, buttonLocation }) => (
    <div className="tw-mx-auto tw-max-w-lg tw-text-center">
        <h2 className="tw-mb-1">{header}</h2>
        <p className="tw-mb-8">{text}</p>
        <div className="tw-mb-4">
            <TrySourcegraphForFreeButton buttonLocation={buttonLocation} />
        </div>
        <div>
            <Link
                href="/use-cases"
                className="tw-mt-6"
                title="Explore other use cases"
                data-button-style={buttonStyle.text}
                data-button-location={buttonLocation}
                data-button-type="cta"
            >
                Explore other use cases
            </Link>
        </div>
    </div>
)
