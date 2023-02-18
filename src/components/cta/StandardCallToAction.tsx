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
        className={classNames('mx-auto w-full flex-col sm:flex-row sm:flex items-center', {
            'justify-center': center,
        })}
    >
        <div className="mb-4 sm:px-0 sm:mb-0 sm:mr-4">
            <TrySourcegraphForFreeButton buttonLocation={buttonLocation} dark={dark} size={size} />
        </div>
        <div>
            <MeetWithProductExpertButton buttonLocation={buttonLocation} dark={dark} chevron={chevron} size={size} />
        </div>
    </div>
)
