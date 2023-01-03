import { FunctionComponent, ReactElement, ReactHTML, ReactNode } from 'react'

import classNames from 'classnames'

interface Item {
    icon?: ReactNode
    subtitle?: string | ReactNode
    description: string
}

interface ThreeUpText {
    title?: string | ReactNode
    fullWidthTitle?: boolean
    subTitle?: string | ReactNode
    items: Item[]
    centerContent?: boolean
}

interface ItemTitle {
    text: string | ReactNode
    small?: boolean
}

const ItemTitle = ({ text, small }: ItemTitle): ReactElement => {
    const TagName = small ? 'h4' : 'h2'
    const Tag = TagName as keyof ReactHTML

    return (
        <Tag
            className={classNames('tw-mb-4', {
                'tw-text-blurple-400 tw-font-semibold': !small,
                'tw-text-black': small,
                'md:tw-max-w-xs md:tw-mx-auto': typeof text === 'string' && text.length > 20,
            })}
        >
            {text}
        </Tag>
    )
}

export const ThreeUpText: FunctionComponent<ThreeUpText> = ({ title, subTitle, items, fullWidthTitle = false }) => (
    <div className="sm:tw-text-center">
        {title && (
            <h2
                className={classNames('md:text-center', {
                    'tw-max-w-2xl tw-mx-auto': !fullWidthTitle,
                    'tw-mb-16': !subTitle,
                    'tw-mb-4': subTitle,
                })}
            >
                {title}
            </h2>
        )}

        {subTitle && <p className="tw-mb-16">{subTitle}</p>}

        <div className="sm:tw-max-w-md sm:tw-mx-auto lg:tw-max-w-none lg:tw-grid lg:tw-grid-cols-12 lg:tw-gap-8">
            {items.map((item, index) => (
                <div
                    key={`item-${index + 1}-${item.description}`}
                    className="tw-col-span-12 lg:tw-mb-0 tw-mb-8 sm:tw-max-w-md sm:tw-w-full lg:tw-col-span-4 lg:tw-max-w-none"
                >
                    {item.icon && <div className="tw-mb-sm">{item.icon}</div>}
                    <ItemTitle text={item.subtitle} small={!!item.icon} />
                    <p className="lg:tw-px-sm">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
)
