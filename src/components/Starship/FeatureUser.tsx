import { FunctionComponent } from 'react'

import classNames from 'classnames'

interface Props {
    name: string
    title: string
    company?: string
    image: string
    className?: string
}

export const FeatureUser: FunctionComponent<Props> = ({ className, name, title, company = '', image }) => (
    <div className={classNames(className, 'flex flex-col gap-x-6 gap-y-4 md:min-w-[459px] md:flex-row')}>
        {image && <img src={image} className="h-[100px] w-[100px] rounded-[90px] md:h-[85px] md:w-[85px]" alt="User" />}
        <div className="flex-col gap-y-4 md:gap-y-3">
            <h3 className="text-white">{name}</h3>
            {title && (
                <p className="text-lg leading-[27px] text-gray-200">{`${title}${company ? `, ${company}` : ''}`}</p>
            )}
        </div>
    </div>
)
