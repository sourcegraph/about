import { FunctionComponent, ReactElement, ReactHTML, ReactNode } from 'react'

import classNames from 'classnames'

interface Item {
    icon?: ReactNode
    subtitle: string
    description: string
}

interface ThreeUpText {
    title: string
    subTitle?: string | ReactNode
    items: Item[]
}

interface ItemTitle {
    text: string
    small?: boolean
}

const ItemTitle = ({ text, small }: ItemTitle): ReactElement => {
    const TagName = small ? 'h4' : 'h3'
    const Tag = TagName as keyof ReactHTML

    return (
        <Tag
            className={classNames('tw-mb-4', {
                'tw-text-blurple-400': !small,
                'tw-text-black': small,
                'md:tw-max-w-xs md:tw-mx-auto': text.length > 20,
            })}
        >
            {text}
        </Tag>
    )
}

export const ThreeUpText: FunctionComponent<ThreeUpText> = ({ title, subTitle, items }) => (
    <div className="sm:tw-text-center">
        <h2
            className={classNames('md:text-center tw-max-w-2xl tw-mx-auto', {
                'tw-mb-16': !subTitle,
                'tw-mb-4': subTitle,
            })}
        >
            {title}
        </h2>
        {subTitle && <p className="tw-mb-16">{subTitle}</p>}

        <div className="sm:tw-max-w-md sm:tw-mx-auto lg:tw-max-w-none lg:tw-grid lg:tw-grid-cols-12 lg:tw-gap-8">
            {items.map((item, index) => (
                <div
                    key={`item-${index + 1}-${item.description}`}
                    className="tw-col-span-12 sm:tw-max-w-md sm:tw-w-full tw-mb-8 lg:tw-col-span-4 lg:tw-max-w-none"
                >
                    {item.icon && item.icon}
                    <ItemTitle text={item.subtitle} small={!!item.icon} />
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
)
