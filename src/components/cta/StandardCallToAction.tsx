import React from 'react'

import classNames from 'classnames'

import { MeetWithProductExpertButton } from './MeetWithProductExpertButton'
import { TrySourcegraphForFreeButton } from './TrySourcegraphForFreeButton'

export const StandardCallToAction: React.FunctionComponent<{ center?: boolean; buttonLocation: number }> = ({
    center,
    buttonLocation,
}) => (
    <div
        className={classNames('tw-mx-auto tw-w-full tw-flex-col sm:tw-flex-row sm:tw-flex tw-items-center', {
            'tw-justify-center': center,
        })}
    >
        <div className="mb-3 sm:tw-px-0 mb-sm-0 mr-sm-3">
            <TrySourcegraphForFreeButton buttonLocation={buttonLocation} />
        </div>
        <div>
            <MeetWithProductExpertButton buttonLocation={buttonLocation} />
        </div>
    </div>
)
