import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { BackButton, Background, ContentSection, TwoColumnSection } from '@components'

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
            className={classNames(product && product !== 'sourcegraph cloud' && 'tw-max-w-[700px] tw-w-full', {
                'md:tw-text-center md:tw-mx-auto': centerContent,
            })}
        >
            {backButton && <BackButton href={backButton.link} text={backButton.text} />}

            <div className="tw-flex tw-flex-col-reverse">
                <h1 className={`tw-whitespace-pre-line ${titleClassName}`}>{title}</h1>
                {product && <h6 className="mb-2">{product}</h6>}
            </div>

            {description && <p className="tw-max-w-xl tw-mt-sm tw-text-lg">{description}</p>}

            {subtitle && (
                <h3 className={classNames('tw-max-w-4xl tw-mt-sm', { 'tw-mx-auto tw-text-centeZ': centerContent })}>
                    {subtitle}
                </h3>
            )}

            {cta && (
                <div
                    className={classNames('tw-mt-md tw-flex tw-flex-col max-w-350', {
                        'tw-items-center tw-mx-auto': centerContent,
                    })}
                >
                    {cta}
                </div>
            )}
        </div>
    )

    return (
        <ContentSection
            background={variant}
            illustration={illustration}
            parentClassName={classNames({
                '-tw-mt-[68px] md:-tw-mt-[74px] tw-pt-5xl md:!tw-pt-[148px]': displayUnderNav,
            })}
            className="tw-flex tw-items-center"
        >
            {leftColumn ? (
                <TwoColumnSection leftColumn={leftColumn} rightColumn={mainContent} mergeColumns={mergeColumns} />
            ) : (
                mainContent
            )}
        </ContentSection>
    )
}
