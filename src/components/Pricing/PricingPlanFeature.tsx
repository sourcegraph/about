import { FunctionComponent } from 'react'

import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

interface Props {
    feature: string
}

export const PricingPlanFeature: FunctionComponent<Props> = ({ feature }) =>
    <li key={feature} className="tw-flex">
        <>
            <div className="tw-text-lg">{feature}</div>

            {/* {subF.tooltip && (
                <OverlayTrigger
                    placement="auto"
                    flip={true}
                    transition={false}
                    overlay={<Tooltip id="tooltip">{subF.tooltip}</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <span {...triggerHandler} ref={ref} className="tw-ml-2 tw-my-auto tw-text-gray-400">
                            <InformationCircleOutlineIcon size={15} />
                        </span>
                    )}
                </OverlayTrigger>
            )} */}
        </>
    </li>
