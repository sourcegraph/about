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
        className={classNames('mx-auto flex w-full flex-col items-center gap-4 sm:flex sm:flex-row', {
            'justify-center': center,
        })}
    >
        <TrySourcegraphForFreeButton buttonLocation={buttonLocation} dark={dark} size={size} />
        <MeetWithProductExpertButton buttonLocation={buttonLocation} dark={dark} chevron={chevron} size={size} />
    </div>
)
