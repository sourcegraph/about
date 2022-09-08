import { FunctionComponent } from 'react'

import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FeatureInfo } from './data'

interface Props {
    feature: FeatureInfo
    tag: 'li' | 'h5'
}

export const PricingPlanFeature: FunctionComponent<Props> = ({ feature, tag: Tag = 'li' }) => (
    <Tag>
        <div className="tw-flex tw-my-xxs">
            <div className="tw-text-lg">{feature.label}</div>

            {feature.description && (
                <OverlayTrigger
                    placement="auto"
                    flip={true}
                    transition={false}
                    overlay={<Tooltip id="tooltip">{feature.description}</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <span {...triggerHandler} ref={ref} className="tw-ml-xxs tw-my-auto tw-text-gray-400">
                            <InformationCircleOutlineIcon size={15} />
                        </span>
                    )}
                </OverlayTrigger>
            )}
        </div>
    </Tag>
)
