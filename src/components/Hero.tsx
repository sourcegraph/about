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
}

export const Hero: FunctionComponent<Omit<Hero, 'className' | 'children' | 'illustration'>> = ({
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
}) => {
    let illustration: Background['illustration']
    if (product && product !== 'sourcegraph cloud') {
        const illustrationName: string = product.split(' ')[1]
        illustration = illustrationName as Background['illustration']
    }

    const mainContent = (
        <div
            className={classNames(product && product !== 'sourcegraph cloud' && 'max-w-[700px] w-full', {
                'md:text-center md:mx-auto': centerContent,
            })}
        >
            {backButton && <BackButton href={backButton.link} text={backButton.text} />}

            <div className="flex flex-col-reverse">
                <h1 className={classNames(titleClassName, 'whitespace-pre-line')}>{title}</h1>
                {product && <h6 className="mb-2">{product}</h6>}
            </div>

            {description && <p className="max-w-xl mt-sm text-lg">{description}</p>}

            {subtitle && (
                <h3 className={classNames('max-w-4xl mt-sm', { 'mx-auto text-centeZ': centerContent })}>
                    {subtitle}
                </h3>
            )}

            {cta && (
                <div
                    className={classNames('mt-md flex flex-col', {
                        'items-center mx-auto': centerContent,
                    })}
                >
                    {cta}
                </div>
            )}

            {floatingImg && (
                <img
                    src={floatingImg}
                    alt={floatingImg}
                    className="hidden md:block absolute bottom--80 left-0 w-full bg-transparent h-[450px]"
                />
            )}
        </div>
    )

    return (
        <ContentSection
            background={variant}
            illustration={illustration}
            parentClassName={classNames({
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
