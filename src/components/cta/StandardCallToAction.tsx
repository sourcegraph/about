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
    leftButtonClassName?: string
    rightButtonClassName?: string
    className?: string
}> = ({
    center,
    buttonLocation,
    dark = false,
    chevron = false,
    size = 'md',
    leftButtonClassName,
    rightButtonClassName,
    className,
}) => (
    <div
        className={classNames(className, 'mx-auto flex w-full flex-col items-center gap-4 sm:flex sm:flex-row', {
            'justify-center': center,
        })}
    >
        <TrySourcegraphForFreeButton
            buttonLocation={buttonLocation}
            dark={dark}
            size={size}
            customClassName={leftButtonClassName}
        />
        <MeetWithProductExpertButton
            buttonLocation={buttonLocation}
            dark={dark}
            chevron={chevron}
            size={size}
            customClassName={leftButtonClassName}
        />
    </div>
)
