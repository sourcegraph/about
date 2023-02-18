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
            className={classNames('mb-4', {
                'font-semibold text-blurple-400': !small,
                'text-black': small,
                'md:mx-auto md:max-w-xs': typeof text === 'string' && text.length > 20,
            })}
        >
            {text}
        </Tag>
    )
}

export const ThreeUpText: FunctionComponent<ThreeUpText> = ({ title, subTitle, items, fullWidthTitle = false }) => (
    <div className="sm:text-center">
        {title && (
            <h2
                className={classNames('md:text-center', {
                    'mx-auto max-w-2xl': !fullWidthTitle,
                    'mb-16': !subTitle,
                    'mb-4': subTitle,
                })}
            >
                {title}
            </h2>
        )}

        {subTitle && <p className="mb-16">{subTitle}</p>}

        <div className="sm:mx-auto sm:max-w-md lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-8">
            {items.map((item, index) => (
                <div
                    key={`item-${index + 1}-${item.description}`}
                    className="col-span-12 mb-8 sm:w-full sm:max-w-md lg:col-span-4 lg:mb-0 lg:max-w-none"
                >
                    {item.icon && <div className="mb-sm">{item.icon}</div>}
                    <ItemTitle text={item.subtitle} small={!!item.icon} />
                    <p className="lg:px-sm">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
)
