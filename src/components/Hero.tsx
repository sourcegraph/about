import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { BackButton, Background, ContentSection, TwoColumnSection } from '.'

interface BackButton {
    text: string
    link: string
}

interface Hero extends Background {
    product?: 'code search' | 'batch changes' | 'code insights' | 'sourcegraph cloud'
    title: string | ReactNode
    titleClassName?: string
    subtitleClassName?: string
    backButton?: BackButton
    leftColumn?: ReactNode
    rightColumn?: ReactNode
    subtitle?: string
    description?: string
    cta?: ReactNode
    floatingImg?: string
    displayUnderNav?: boolean
    mergeColumns?: boolean
    centerContent?: boolean
    className?: string
    productUpperCase?: boolean
    columnClassName?: string
    contentSectionClassName?: string
    rightColumnClassName?: string
}

export const Hero: FunctionComponent<Omit<Hero, 'children' | 'illustration'>> = ({
    variant,
    product,
    productUpperCase,
    title,
    titleClassName,
    columnClassName,
    subtitleClassName,
    contentSectionClassName,
    backButton,
    leftColumn,
    description,
    subtitle,
    cta,
    floatingImg,
    displayUnderNav = false,
    mergeColumns = false,
    centerContent = false,
    className,
    rightColumn,
    rightColumnClassName,
}) => {
    let illustration: Background['illustration']
    if (product && product !== 'sourcegraph cloud') {
        const illustrationName: string = product.split(' ')[1]
        illustration = illustrationName as Background['illustration']
    }

    const mainContent = (
        <div
            className={classNames(product && product !== 'sourcegraph cloud' && 'w-full max-w-[700px]', {
                'md:mx-auto md:text-center': centerContent,
            })}
        >
            {backButton && <BackButton href={backButton.link} text={backButton.text} />}

            <div className={classNames('flex flex-col-reverse', rightColumnClassName)}>
                <h1
                    className={classNames(titleClassName, 'whitespace-pre-line', {
                        'mx-auto text-center': centerContent,
                    })}
                >
                    {title}
                </h1>
                {product && (
                    <h6
                        className={classNames('mb-2', {
                            'mx-auto text-center': centerContent,
                            'uppercase text-gray-700': productUpperCase,
                        })}
                    >
                        {product}
                    </h6>
                )}
            </div>

            {description && <p className="mt-6 max-w-xl text-lg">{description}</p>}

            {subtitle && (
                <h3
                    className={classNames(subtitleClassName, 'mt-6 max-w-4xl', {
                        'mx-auto text-center': centerContent,
                    })}
                >
                    {subtitle}
                </h3>
            )}

            {cta && (
                <div
                    className={classNames('mt-8 flex flex-col', {
                        'mx-auto items-center': centerContent,
                    })}
                >
                    {cta}
                </div>
            )}

            {floatingImg && (
                <img
                    src={floatingImg}
                    alt={floatingImg}
                    className="absolute bottom--80 left-0 hidden h-[450px] w-full bg-transparent md:block"
                />
            )}
        </div>
    )

    return (
        <ContentSection
            background={variant}
            illustration={illustration}
            parentClassName={classNames(className, {
                '-mt-[68px] md:-mt-[52px] pt-24 md:!pt-[148px]': displayUnderNav,
                'relative md:h-[750px] lg:mb-4 md:mb-16 mb-0': floatingImg,
            })}
            className={classNames('flex items-center', contentSectionClassName)}
        >
            {leftColumn && (
                <TwoColumnSection leftColumn={leftColumn} rightColumn={mainContent} mergeColumns={mergeColumns} />
            )}
            {rightColumn && (
                <TwoColumnSection
                    leftColumn={mainContent}
                    rightColumn={rightColumn}
                    mergeColumns={mergeColumns}
                    className={columnClassName}
                />
            )}
            {!leftColumn && !rightColumn && mainContent}
        </ContentSection>
    )
}
