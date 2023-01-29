import { FunctionComponent } from 'react'

import classNames from 'classnames'
import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

import { FeatureInfo } from './data'

interface Props {
    feature: FeatureInfo
    tag: 'li' | 'h5'
    className?: string
}

export const PricingPlanFeature: FunctionComponent<Props> = ({ feature, tag: Tag = 'li', className }) => {
    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg
    const isSmOrUp = windowWidth > breakpoints.xs

    return (
        <Tag className={classNames(Tag === 'li' && 'tw-text-sm')}>
            <div className="tw-flex tw-my-xxs">
                <div className={classNames('tw-text-lg', className)}>{feature.label}</div>

                {feature.description && isSmOrUp && (
                    <OverlayTrigger
                        placement="auto"
                        flip={true}
                        transition={false}
                        overlay={
                            <Tooltip id="tooltip" placement="right" className="tw-shadow-lg tw-opacity-100">
                                {feature.description}
                            </Tooltip>
                        }
                    >
                        {({ ref, ...triggerHandler }) => (
                            <span {...triggerHandler} ref={ref} className="tw-ml-xxs tw-my-auto tw-text-gray-300">
                                <InformationCircleOutlineIcon size={isMdOrDown ? 25 : 19} />
                            </span>
                        )}
                    </OverlayTrigger>
                )}
            </div>
        </Tag>
    )
}
