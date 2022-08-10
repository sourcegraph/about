import { FunctionComponent, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { ContentSection, HubSpotForm, DemioForm, DemioFormProps } from '@components'

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
    demioForm?: DemioFormProps
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
                    <section className="py-6 py-lg-7 container video-embed embed-responsive embed-responsive-16by9">
                        <iframe
                            className="p-md-7 embed-responsive-item"
                            src={videoSrc}
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title={title}
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
                    </ContentSection>

                    {children}
                </section>
            )}

            {speakers?.length && (
                <section className="bg-white pb-7">
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
