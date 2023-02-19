import React from 'react'

import Link from 'next/link'

import { buttonStyle } from '../../data/tracking'

import { TrySourcegraphForFreeButton } from './TrySourcegraphForFreeButton'

export const UseCasePageCallToAction: React.FunctionComponent<{
    header?: string
    text: string
    buttonLocation: number
}> = ({ header = 'Get started with Sourcegraph', text, buttonLocation }) => (
    <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-1">{header}</h2>
        <p className="mb-8">{text}</p>
        <div className="mb-4">
            <TrySourcegraphForFreeButton buttonLocation={buttonLocation} />
        </div>
        <div>
            <Link
                href="/use-cases"
                className="mt-6"
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
