import React, { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { TwoColumnSection } from '../TwoColumnSection'

const CodyTwoColumnSection: FunctionComponent<{
    title: string
    description: string
    subTitle?: string
    extraContent?: ReactNode
    imgSrc: string
    leftClassName?: string
}> = ({ title, description, subTitle, extraContent, imgSrc, leftClassName }) => (
    <TwoColumnSection
        className="!mt-0"
        centerContent={false}
        leftColumn={
            <div className={classNames('mb-6 w-full', leftClassName)}>
                <div className="mb-6 mt-6 w-full font-mono text-lg text-gray-700 opacity-70">{subTitle}</div>
                <h2 className="mb-10 w-full text-gray-700 lg:max-w-[493px]">{title}</h2>
                <h5 className="!w-full text-gray-700 opacity-70 lg:max-w-[493px]">{description}</h5>
                {extraContent}
            </div>
        }
        rightColumn={
            <div className="mt-0 h-auto max-h-[700px] w-full overflow-hidden rounded-none md:h-full md:rounded-2xl lg:max-w-[628px]">
                <img src={imgSrc} className="h-full w-full md:h-auto lg:w-auto" alt="" />
            </div>
        }
    />
)

export default CodyTwoColumnSection
