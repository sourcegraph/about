import React from 'react'

import classNames from 'classnames'

import { MeetWithProductExpertButton } from './MeetWithProductExpertButton'
import { TrySourcegraphForFreeButton } from './TrySourcegraphForFreeButton'

export const StandardCallToAction: React.FunctionComponent<{
    center?: boolean
    buttonLocation: number
    dark?: boolean
    chevron?: boolean
    size?: 'md' | 'lg'
}> = ({ center, buttonLocation, dark = false, chevron = false, size = 'md' }) => (
    <div
        className={classNames('tw-mx-auto tw-w-full tw-flex-col sm:tw-flex-row sm:tw-flex tw-items-center', {
            'tw-justify-center': center,
        })}
    >
        <div className="mb-3 sm:tw-px-0 mb-sm-0 mr-sm-3">
            <TrySourcegraphForFreeButton buttonLocation={buttonLocation} dark={dark} size={size} />
        </div>
        <div>
            <MeetWithProductExpertButton buttonLocation={buttonLocation} dark={dark} chevron={chevron} size={size} />
        </div>
    </div>
)
