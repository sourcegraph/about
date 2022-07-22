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
                className={classNames('bg-cover py-6 py-md-7', isGuidePg && 'text-white')}
            >
                <div className="container px-0 d-flex flex-column flex-lg-row justify-content-around align-items-center">
                    {customer && (
                        <>
                            {isWebinarPg ? (
                                // Show SG & Customer logo for customer-based webinars
                                <div className="col-lg-4 col-12 text-lg-center px-lg-0 pb-5 pb-lg-0">
                                    <img
                                        className={`border-right border-black ${
                                            isMdOrDown ? 'border-2 mr-3 pr-3' : 'border-3 mr-4 pr-4'
                                        }`}
                                        width={isMdOrDown ? '65' : '95'}
                                        src="/sourcegraph/sourcegraph-mark.svg"
                                        alt="Sourcegraph mark"
                                    />
                                    <img
                                        height={isMdOrDown ? '15' : '22'}
                                        src={customer.logo}
                                        alt={`${customer.name} logo`}
                                    />
                                </div>
                            ) : (
                                <div className="col-lg-2 col-12 px-lg-0 pb-2 pb-lg-0">
                                    <img
                                        height={isMdOrDown ? '170' : '150'}
                                        src={customer.logo}
                                        alt={`${customer.name} logo`}
                                    />
                                </div>
                            )}
                        </>
                    )}

                    <div className={classNames('col-12', customer && 'col-lg-8')}>
                        <h1 className="display-2 font-weight-bold mb-4 mb-md-2 whitespace-pre-line">{title}</h1>
                        {subtitle && <h3 className="font-weight-normal max-w-800">{subtitle}</h3>}
                    </div>
                </div>
            </section>

            {hasWatchNowQuery ? (
                // ---- RECORDING BODY VARIATION ----
                <div className="bg-white">
                    <section className="py-6 py-lg-7 container video-embed embed-responsive embed-responsive-16by9">
                        <iframe
                            className="p-md-7 embed-responsive-item"
                            src={videoSrc}
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title={subtitle}
                        />
                    </section>

                    <div className="bg-light-gray-3">{learnMoreCTA}</div>
                </div>
            ) : (
                // ---- DEFAULT BODY VARIATION ----
                <section className="bg-white py-6 py-lg-7">
                    <ContentSection className="d-flex flex-column-reverse flex-md-row px-0">
                        {description}

                        <div className="col-md-6 col-12 pb-md-0 pb-6">
                            <h2 className="font-weight-bold">{formLabel}</h2>
                            <div className="border-saturn border border-3 shadow-sm py-4 px-4 mt-3 px-0">
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
                    </ContentSection>

                    {children}
                </section>
            )}

            {speakers?.length && (
                <section className="bg-white py-6 py-lg-7">
                    <ContentSection>
                        <h2 className="font-weight-bold">Speakers</h2>

                        <section className="d-flex flex-wrap">
                            {speakers.map((speaker: Speaker) => (
                                <div key={speaker.name} className="col-lg-5 col-md-6 col-12 pl-0 pr-lg-7">
                                    <img className="py-4" width="140" src={speaker.img} alt={speaker.name} />
                                    <h5 className="font-weight-bold">{speaker.name}</h5>
                                    <figcaption className="h6 font-weight-normal text-muted max-w-md-250 my-2">
                                        {speaker.title}
                                    </figcaption>
                                    <p>{speaker.bio}</p>
                                </div>
                            ))}
                        </section>
                    </ContentSection>
                </section>
            )}
        </>
    )
}
