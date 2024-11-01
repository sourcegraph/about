import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const BentoWithMockup: FunctionComponent<{
    href?: string
    hrefLabel?: string
    isDarkBorder?: boolean
    isVariantTitle?: boolean
    isVariantImage?: boolean
    isVariantStyle?: boolean
    label?: string
    customTitle?: string
    imgSrc?: string
}> = ({
    href,
    hrefLabel,
    imgSrc,
    isVariantStyle,
    isVariantTitle,
    isDarkBorder,
    isVariantImage,
    label,
    customTitle,
}) => (
    <Link
        href={href ?? '#'}
        className={classNames('flex flex-col overflow-hidden rounded-2xl bg-violet-700 md:flex-row', [
            { 'border border-gray-500': isDarkBorder },
            { 'light-metallic-gradient-to-r w-fit': isVariantStyle },
            { 'pointer-events-none': !href }, // Disable clicking if no href provided
        ])}
    >
        <span className={classNames('block h-full px-6 md:pl-16', [{ 'md:py-3': href }, { 'md:py-9': !href }])}>
            <span className={classNames('block w-full md:max-w-[738px]', { 'pt-11': href }, { 'py-11': !href })}>
                <span
                    className={classNames('mb-6 block font-mono text-lg leading-[27px] text-[#A884F6]', {
                        '!text-blurple-500': isVariantStyle,
                    })}
                >
                    {label ?? 'Analyst Report'}
                </span>
                <span
                    className={classNames('block text-5xl font-semibold leading-[48px] tracking-tighter text-white  ', [
                        { 'md:pr-[114px] md:text-[32px] md:leading-[38.4px]': isVariantTitle },
                        { 'md:text-6xl  md:leading-[57.6px] md:tracking-tightest': !isVariantTitle },
                        { 'text-gray-700': isVariantStyle },
                    ])}
                >
                    {!customTitle &&
                        (isVariantTitle
                            ? 'Sourcegraph is named a Visionary in the 2024 Gartner® Magic Quadrant™ for AI Code Assistants'
                            : '2024 Gartner® Magic Quadrant™ for AI Code Assistants')}
                    {customTitle}
                </span>

                {href && (
                    <span className="btn btn-link-icon mb-11 mt-6 flex w-max items-center p-0 tracking-tight">
                        {hrefLabel ?? 'Download the report'}
                        <ChevronRightIcon className="link-icon" />
                    </span>
                )}
            </span>
        </span>
        <span
            className={classNames('relative flex h-[330px] w-full  overflow-hidden md:h-auto md:w-auto', {
                'items-end justify-end': !isVariantImage,
                'justify-center md:items-end': isVariantImage,
            })}
        >
            <img
                src={imgSrc ?? '/assets/resources/reportMockup.svg'}
                className={classNames(
                    ' h-[330px] min-h-[330px] w-[458px] min-w-[458px] md:relative md:right-0 md:h-min md:min-h-min md:w-auto md:min-w-full',
                    { 'absolute bottom-0 -right-[114px]': !isVariantImage, relative: isVariantImage }
                )}
            />
        </span>
    </Link>
)
