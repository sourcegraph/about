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
    backButton?: BackButton
    leftColumn?: ReactNode
    subtitle?: string
    description?: string
    cta?: ReactNode
    floatingImg?: string
    displayUnderNav?: boolean
    mergeColumns?: boolean
    centerContent?: boolean
    className?: string
}

export const Hero: FunctionComponent<Omit<Hero, 'children' | 'illustration'>> = ({
    variant,
    product,
    title,
    titleClassName,
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

            <div className="flex flex-col-reverse">
                <h1 className={classNames(titleClassName, 'whitespace-pre-line')}>{title}</h1>
                {product && <h6 className="mb-2">{product}</h6>}
            </div>

            {description && <p className="mt-sm max-w-xl text-lg">{description}</p>}

            {subtitle && (
                <h3 className={classNames('mt-sm max-w-4xl', { 'text-centeZ mx-auto': centerContent })}>{subtitle}</h3>
            )}

            {cta && (
                <div
                    className={classNames('mt-md flex flex-col', {
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
                '-mt-[68px] md:-mt-[74px] pt-5xl md:!pt-[148px]': displayUnderNav,
                'relative md:h-[750px] lg:mb-xs md:mb-4xl mb-0': floatingImg,
            })}
            className="flex items-center"
        >
            {leftColumn ? (
                <TwoColumnSection leftColumn={leftColumn} rightColumn={mainContent} mergeColumns={mergeColumns} />
            ) : (
                mainContent
            )}
        </ContentSection>
    )
}
