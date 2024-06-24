import { FunctionComponent } from 'react'

import classNames from 'classnames'

interface CodyCardProps {
    title: string
    icon?: string
    description: string
    className?: string
    titleTextColor?: string
    subTitleTextColor?: string
}

export const CodyCard: FunctionComponent<CodyCardProps> = ({
    title,
    description,
    icon,
    className,
    titleTextColor,
    subTitleTextColor,
}) => (
    <div className={classNames('flex w-full flex-col gap-4 xl:w-[410.6px]', className)}>
        {icon && <img src={icon} alt="Search" className="h-6 w-6" />}
        <h5 className={classNames(titleTextColor ?? '!text-gray-700')}>{title}</h5>
        <p
            className={classNames(
                'mb-0 text-2xl font-normal leading-[30px] -tracking-[0.25px] text-gray-500',
                subTitleTextColor ?? '!text-gray-700'
            )}
        >
            {description}
        </p>
    </div>
)
