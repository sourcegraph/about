import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { useRouter } from 'next/router'

import { ContentSection, HubSpotForm, DemioForm } from '.'

interface Speaker {
    name: string
    title: string
    img: string
    bio: string
}

interface Props {
    title: string
    description?: ReactNode
    formLabel?: string
    onFormSubmitted?: () => void
    demioForm?: DemioForm
    inlineMessage?: string
    learnMoreCTA?: ReactNode
    videoSrc?: string
    speakers?: Speaker[]
    children?: ReactNode
    resource?: string
}

export const GatedResourceLayout: FunctionComponent<Props> = ({
    title,
    description,
    formLabel,
    onFormSubmitted,
    demioForm,
    inlineMessage,
    learnMoreCTA,
    videoSrc,
    speakers,
    children,
    resource,
}) => {
    const router = useRouter()
    const { pathname, query } = router
    const hasWatchNowQuery = Object.keys(query).includes('watch-now')

    return (
        <>
            {hasWatchNowQuery ? (
                // ---- RECORDING BODY VARIATION ----
                <div className="bg-white">
                    <div className="container tw-py-3xl lg:tw-py-5xl video-embed embed-responsive embed-responsive-16by9">
                        <iframe
                            className="md:tw-p-5xl embed-responsive-item"
                            src={videoSrc}
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title={title}
                        />
                    </div>

                    <div className="tw-bg-gray-100">{learnMoreCTA}</div>
                </div>
            ) : (
                // ---- DEFAULT BODY VARIATION ----
                <ContentSection background="white" className="tw-flex tw-flex-col-reverse md:tw-flex-row">
                    {description}

                    <div className="tw-pb-3xl col-md-6 col-12 md:tw-pb-0">
                        <h2>{formLabel}</h2>
                        <div className="mt-3 tw-p-sm tw-drop-shadow sg-border-gradient-saturn tw-border-solid tw-border-3">
                            {!hasWatchNowQuery && !demioForm && (
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
                            {!hasWatchNowQuery && demioForm && (
                                <DemioForm
                                    formId={demioForm.formId}
                                    formClassName={demioForm.formClassName}
                                    buttonText={demioForm.buttonText || 'Submit'}
                                />
                            )}
                        </div>
                    </div>

                    {children}
                </ContentSection>
            )}

            {speakers?.length && (
                <ContentSection background="white" parentClassName={classNames({ 'tw-pt-0': !hasWatchNowQuery })}>
                    <h2>Speakers</h2>

                    <section className="tw-flex-wrap tw-flex">
                        {speakers.map((speaker: Speaker) => (
                            <div key={speaker.name} className="tw-pl-0 col-lg-5 col-md-6 col-12 lg:tw-pr-5xl">
                                <img className="tw-py-sm" width="140" src={speaker.img} alt={speaker.name} />
                                <h5>{speaker.name}</h5>
                                <figcaption className="tw-my-xxs tw-text-gray-400 max-w-md-250">
                                    {speaker.title}
                                </figcaption>
                                <p>{speaker.bio}</p>
                            </div>
                        ))}
                    </section>
                </ContentSection>
            )}
        </>
    )
}
