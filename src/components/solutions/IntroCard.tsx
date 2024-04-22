import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Heading, ContentSection } from '..'
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
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    return (
        <ContentSection
            parentClassName='!py-md !px-sm md:!py-3xl md:!px-20 overflow-hidden'
            className='flex flex-col justify-between gap-6 md:flex-row xl:px-sm'
        >
            <div className='flex flex-col gap-0 overflow-visible md:flex-row md:gap-2xl'>
                <div className={classNames('relative w-full md:w-[51%]', textColor ?? '!text-gray-700')}>
                    <Heading
                        size='h1'
                        className='max-w-[404px] !font-["Source_Sans_Pro"] !text-5xl !font-semibold !leading-[58px] !-tracking-[1px] md:max-w-full md:w-full md:!text-[52px] md:!leading-[62px] md:-tracking-[0.06rem]'
                    >
                        {title}
                    </Heading>
                    <p className='text-wrap !mb-0 pb-md text-2xl font-normal !leading-[30px] -tracking-[0.25px] md:mt-2.5'>
                        {description}
                    </p>
                    <Link
                        className='absolute z-10 -bottom-[32px] md:relative btn btn-primary flex w-3/4 justify-center bg-violet-500 xs:w-1/2 mdi:w-fit'
                        href='/contact/request-info?form_submission_source=solutions-gitlab'
                        title='Contact us'
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
                    <div className='mb-0 w-full md:-mb-[42px] md:w-1/2'>
                        <img className='w-full md:w-[664px]' src={mainImageUrl} alt={alt} />
                    </div>
                )}
            </div>
        </ContentSection>
    )
}
