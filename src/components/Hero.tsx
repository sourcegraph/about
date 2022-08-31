import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { BackButton, Background, ContentSection, TwoColumnSection } from '@components'

interface BackButton {
    text: string
    link: string
}

interface Hero extends Background {
    product?: 'code search' | 'batch changes' | 'code insights'
    title: string | ReactNode
    backButton?: BackButton
    leftColumn?: ReactNode
    subtitle?: string
    description?: string
    cta?: ReactNode
    displayUnderNav?: boolean
    mergeColumns?: boolean
}

export const Hero: FunctionComponent<Omit<Hero, 'className' | 'children' | 'illustration'>> = ({
    variant,
    product,
    title,
    backButton,
    leftColumn,
    description,
    subtitle,
    cta,
    displayUnderNav = false,
    mergeColumns = false,
}) => {
    let illustration: Background['illustration']
    if (product) {
        const illustrationName: string = product.split(' ')[1]
        illustration = illustrationName as Background['illustration']
    }

    const mainContent = (
        <div className={classNames(product && 'tw-max-w-[700px] tw-w-full')}>
            {backButton && <BackButton href={backButton.link} text={backButton.text} />}

            <div className="tw-flex tw-flex-col-reverse">
                <h1 className="tw-whitespace-pre-line">{title}</h1>
                {product && <h6 className="mb-2">{product}</h6>}
            </div>

            {description && <p className="tw-max-w-xl tw-mt-sm tw-text-lg">{description}</p>}

            {subtitle && <h3 className="tw-max-w-3xl tw-mt-sm">{subtitle}</h3>}

            {cta && <div className="tw-mt-md tw-flex tw-flex-col max-w-400">{cta}</div>}
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
