import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading } from '../Heading'

interface Props {
    name: string
    title: string
    company?: string
    image: string
    className?: string
}

export const FeatureUser: FunctionComponent<Props> = ({ className, name, title, company = '', image }) => (
    <div className={classNames(className, 'flex flex-col gap-x-sm gap-y-4 md:min-w-[459px] md:flex-row')}>
        {image && <img src={image} className="h-[100px] w-[100px] rounded-[90px] md:h-[85px] md:w-[85px]" alt="User" />}
        <div className="flex-col gap-y-4 md:gap-y-3">
            <Heading size="h3" className="leading-[42px] text-white md:text-2xl md:font-semibold md:leading-[34px]">
                {name}
            </Heading>

            {title && (
                <p className="text-lg leading-[27px] text-gray-200">{`${title}${company ? `, ${company}` : ''}`}</p>
            )}
        </div>
    </div>
)
