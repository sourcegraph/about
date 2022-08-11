import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { useRouter } from 'next/router'

import { ContentSection, HubSpotForm } from '@components'
import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'

interface Customer {
    name: string
    logo: string
}

interface Speaker {
    name: string
    title: string
    img: string
    bio: string
}

interface Props {
    title: string
    subtitle?: string
    customer?: Customer
    description?: ReactNode
    formLabel?: string
    onFormSubmitted?: () => void
    inlineMessage?: string
    learnMoreCTA?: ReactNode
    videoSrc?: string
    speakers?: Speaker[]
    children?: ReactNode
    resource?: string
}

export const GatedResourceLayout: FunctionComponent<Props> = ({
    title,
    subtitle,
    customer,
    description,
    formLabel,
    onFormSubmitted,
    inlineMessage,
    learnMoreCTA,
    videoSrc,
    speakers,
    children,
    resource,
}) => {
    const router = useRouter()
    const { pathname, query } = router

    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    const isWebinarPg = pathname.split('/').slice(1)[0] === 'webinars'
    const isGuidePg = pathname.split('/').slice(1)[0] === 'guides'
    const hasWatchNowQuery = Object.keys(query).includes('watch-now')

    const heroImage = (): string => {
        if (isWebinarPg) {
            // Webinars
            return isMdOrDown ? '/bg-images/bg-code-mars-mobile.png' : '/bg-images/bg-code-mars.png'
        }
        if (isGuidePg) {
            // Guides
            return isMdOrDown ? '/bg-images/bg-code-aquamarine-mobile.png' : '/bg-images/bg-code-aquamarine.png'
        }
        return '/bg-images/bg-code-venus.svg'
    }

    return (
        <>
            <section
                // Hero bg differs if Guide vs. Webinar vs. Generic
                // eslint-disable-next-line react/forbid-dom-props
                style={{ backgroundImage: `url('${heroImage()}')` }}
                className={classNames('tw-bg-cover tw-py-3xl md:tw-py-5xl', isGuidePg && 'text-white')}
            >
                <div className="container tw-px-0 tw-flex tw-flex-col lg:tw-flex-row tw-justify-around tw-items-center">
                    {customer && (
                        <>
                            {isWebinarPg ? (
                                // Show SG & Customer logo for customer-based webinars
                                <div className="tw-pb-md col-lg-4 col-12 lg:tw-text-center lg:tw-px-0 lg:tw-pb-0">
                                    <img
                                        className={`tw-border-solid tw-border-r-black tw-inline tw-max-w-[65px] md:tw-max-w-[95px] ${
                                            isMdOrDown ? 'tw-border-r-2 mr-3 tw-pr-xs' : 'tw-border-r-3 mr-4 tw-pr-sm'
                                        }`}
                                        src="/sourcegraph/sourcegraph-mark.svg"
                                        alt="Sourcegraph mark"
                                    />
                                    <img
                                        src={customer.logo}
                                        alt={`${customer.name} logo`}
                                        className="tw-inline tw-h-full md:tw-h-[22px] tw-w-auto"
                                    />
                                </div>
                            ) : (
                                <div className="tw-pb-xxs col-lg-2 col-12 lg:tw-px-0 lg:tw-pb-0">
                                    <img
                                        src={customer.logo}
                                        alt={`${customer.name} logo`}
                                        className="tw-inline tw-max-h-[170px] md:tw-max-h-[150px] tw-w-auto"
                                    />
                                </div>
                            )}
                        </>
                    )}

                    <div className={classNames('col-12', customer && 'col-lg-8')}>
                        <h1 className="mb-4 tw-whitespace-pre-line mb-md-2">{title}</h1>
                        {subtitle && <h3 className="max-w-800">{subtitle}</h3>}
                    </div>
                </div>
            </section>

            {hasWatchNowQuery ? (
                // ---- RECORDING BODY VARIATION ----
                <div className="bg-white">
                    <section className="container py-6 lg:tw-py-5xl video-embed embed-responsive embed-responsive-16by9">
                        <iframe
                            className="md:tw-p-5xl embed-responsive-item"
                            src={videoSrc}
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title={subtitle}
                        />
                    </section>

                    <div className="tw-bg-gray-100">{learnMoreCTA}</div>
                </div>
            ) : (
                // ---- DEFAULT BODY VARIATION ----
                <ContentSection color="white" className="tw-flex tw-flex-col-reverse md:tw-flex-row">
                    {description}

                    <div className="tw-pb-3xl col-md-6 col-12 md:tw-pb-0">
                        <h2>{formLabel}</h2>
                        <div className="px-4 py-4 mt-3 shadow-sm tw-px-0 sg-border-gradient-saturn tw-border-solid tw-border-3">
                            {!hasWatchNowQuery && (
                                <HubSpotForm
                                    masterFormName="gatedMulti"
                                    onFormSubmitted={onFormSubmitted}
                                    inlineMessage={
                                        inlineMessage ||
                                        (resource &&
                                            `Enjoy your copy of <a href="${resource}" target="_blank" rel="noopener noreferrer">${title}</a>`)
                                    }
                                />
                            )}
                        </div>
                    </div>

                    {children}
                </ContentSection>
            )}

            {speakers?.length && (
                <ContentSection color="white" parentClassName={classNames({ 'tw-pt-0': !hasWatchNowQuery })}>
                    <h2>Speakers</h2>

                    <section className="flex-wrap tw-flex">
                        {speakers.map((speaker: Speaker) => (
                            <div key={speaker.name} className="tw-pl-0 col-lg-5 col-md-6 col-12 lg:tw-pr-5xl">
                                <img className="py-4" width="140" src={speaker.img} alt={speaker.name} />
                                <h5>{speaker.name}</h5>
                                <figcaption className="my-2 h6 text-muted max-w-md-250">{speaker.title}</figcaption>
                                <p>{speaker.bio}</p>
                            </div>
                        ))}
                    </section>
                </ContentSection>
            )}
        </>
    )
}
