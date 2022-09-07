import { FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'
import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { Feature } from './interfaces'

interface Props {
    feature: Feature
    isEnterprise: boolean
}

export const PricingPlanFeature: FunctionComponent<Props> = ({ feature, isEnterprise }) =>
    <div className="tw-px-0 bg-transparent border-0 tw-text-xl list-group-itemtw-justify-between">
        <div className="tw-text-xl tw-font-semibold">
            <CheckIcon className={`mr-2 icon-inline ${isEnterprise ? 'tw-text-violet-400' : 'tw-text-vermillion-300'} tw-inline`} /> {feature.title}
        </div>

        <ul className="tw-list-disc">
            {feature.subFeatures.map(subF => (
                <li key={subF.title} className="tw-flex">
                    <>
                        <div className="tw-text-lg">{subF.title}</div>

                        {subF.tooltip && (
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
                        )}
                    </>
                </li>
            ))}
        </ul>
    </div>
