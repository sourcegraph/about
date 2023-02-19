import { FunctionComponent } from 'react'

import classNames from 'classnames'
import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'

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
        <Tag className={classNames(Tag === 'li' && 'text-sm')}>
            <div className="my-xxs flex" title={feature.description}>
                <div className={classNames('text-lg', className)}>{feature.label}</div>

                {feature.description && isSmOrUp && (
                    <span className="my-auto ml-xxs text-gray-300">
                        <InformationCircleOutlineIcon size={isMdOrDown ? 25 : 19} />
                    </span>
                )}
            </div>
        </Tag>
    )
}
