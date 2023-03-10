import { FunctionComponent } from 'react'

import classNames from 'classnames'

interface Props {
    title: string
    description: string
    image: string
    className?: string
}

export const TwoRowWithImage: FunctionComponent<Props> = ({ className, description, image, title }) => (
    <div className={classNames(className, 'mx-auto flex max-w-[1061px] flex-col gap-y-12')}>
        <div className="flex flex-col gap-y-10 border-t border-gray-500 pt-[48px] md:flex-row md:gap-x-10">
            {title && (
                <p className="min-w-fit font-grotesk text-[48px] font-medium leading-[67px] tracking-[-1px] text-white md:max-w-[444px] md:text-[52px] md:leading-[73px]">
                    {title}
                </p>
            )}
            {description && <p className="text-lg leading-[27px] text-gray-200 md:max-w-[577px]">{description}</p>}
        </div>
        {image && (
            <img
                src={image}
                className="mx-auto h-[246px] w-[100%] md:h-[368px] md:w-[737px] lg:h-[478px] lg:w-[937px]"
                alt="Sourcegraph"
            />
        )}
    </div>
)
