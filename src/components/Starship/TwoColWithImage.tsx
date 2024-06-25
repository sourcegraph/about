import { FunctionComponent } from 'react'

import classNames from 'classnames'

interface Props {
    title: string
    description: string
    image: string
    className?: string
}

export const TwoColWithImage: FunctionComponent<Props> = ({ className, description, image, title }) => (
    <div
        className={classNames(
            className,
            'mx-auto flex max-w-[1061px] flex-col justify-between gap-y-6 md:flex-row md:gap-x-[3px]'
        )}
    >
        <div className="flex flex-col gap-y-[30px] border-t border-gray-500 md:max-w-[572px]">
            {title && <h2 className="mt-12 min-w-fit !font-display text-white">{title}</h2>}
            {description && <p className="min-w-fit text-lg leading-[27px] text-gray-200">{description}</p>}
        </div>
        {image && <img src={image} className="w-[100%] md:w-[42.5%]" alt="Sourcegraph" />}
    </div>
)
