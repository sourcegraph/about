import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

interface IntroCardProps {
    title: string
    description: string
    mobileImageUrl?: string
    mainImageUrl: string
    alt: string
    contactButtonLabel: string
    scaleMobileImage?: boolean
    textColor?: string
    buttonHref?: string
}

export const IntroCard: FunctionComponent<IntroCardProps> = ({
    title,
    description,
    mobileImageUrl,
    mainImageUrl,
    contactButtonLabel,
    alt,
    scaleMobileImage = false,
    textColor,
    buttonHref,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    return (
        <ContentSection
            parentClassName="!py-8 !px-6 md:!py-16 md:!px-20 overflow-hidden"
            className="flex flex-col justify-between gap-6 md:flex-row xl:px-6"
        >
            <div className="flex flex-col gap-0 overflow-visible md:flex-row md:gap-14">
                <div className={classNames('relative w-full md:w-[51%]', textColor ?? '!text-gray-700')}>
                    <h1 className="max-w-[404px] md:w-full md:max-w-full">{title}</h1>
                    <p className="text-wrap !mb-0 pb-8 text-2xl font-normal !leading-[30px] -tracking-[0.25px] md:mt-2.5">
                        {description}
                    </p>
                    <Link
                        className={classNames(
                            'btn btn-primary absolute z-10 flex w-3/4 justify-center bg-violet-500 md:relative xs:w-1/2 mdi:w-fit',
                            { '-bottom-[32px]': !buttonHref }
                        )}
                        href={buttonHref ?? '/contact/request-info-gitlab?form_submission_source=solutions-gitlab'}
                        title="Contact us"
                    >
                        {contactButtonLabel}
                    </Link>
                </div>
                {isMobile ? (
                    <div className={classNames(scaleMobileImage ? 'mt-12 xs:mt-0' : 'mt-0')}>
                        <img
                            className={classNames('w-full', scaleMobileImage && 'scale-[1.60] xs:scale-[1.10]')}
                            src={mobileImageUrl ?? mainImageUrl}
                            alt={alt}
                        />
                    </div>
                ) : (
                    <div className="mb-0 w-full md:-mb-[42px] md:w-1/2">
                        <img className="w-full md:w-[664px]" src={mainImageUrl} alt={alt} />
                    </div>
                )}
            </div>
        </ContentSection>
    )
}
