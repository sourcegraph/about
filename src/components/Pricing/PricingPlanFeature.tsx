import { FunctionComponent } from 'react'

import classNames from 'classnames'
import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'

import { Tooltip } from '@components'
import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'

import { FeatureInfo } from './data'
interface Props {
    feature: FeatureInfo
    tag: 'li' | 'h5'
    className?: string
}

export const PricingPlanFeature: FunctionComponent<Props> = ({ feature, tag: Tag = 'li', className }) => {
    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    return (
        <Tag className={classNames(Tag === 'li' && 'tw-text-sm')}>
            <div className="tw-flex tw-my-xxs">
                <div className={classNames('tw-text-lg', className)}>{feature.label}</div>

                {feature.description && (
                    <Tooltip text={feature.description} position="bottom">
                        <InformationCircleOutlineIcon className="tw-ml-xxs tw-text-gray-300" size={isMdOrDown ? 25 : 19} />
                    </Tooltip>
                )}
            </div>
        </Tag>
    )
}
