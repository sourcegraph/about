import { FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'
import QuestionMarkCircleOutlineIcon from 'mdi-react/QuestionMarkCircleOutlineIcon'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { Feature } from './interfaces'

interface Props {
    feature: Feature
    className?: string
}

export const PricingPlanFeature: FunctionComponent<Props> = ({
    feature,
    className = '',
}) =>
    <div className={`${className} tw-justify-between`}>
        <div className="tw-text-xl tw-font-semibold">
            <CheckIcon className="mr-2 icon-inline text-success tw-inline" /> {feature.title}
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
                                    <span {...triggerHandler} ref={ref} className="ml-2 tw-text-gray-400">
                                        <QuestionMarkCircleOutlineIcon />
                                    </span>
                                )}
                            </OverlayTrigger>
                        )}
                    </>
                </li>
            ))}
        </ul>
    </div>
