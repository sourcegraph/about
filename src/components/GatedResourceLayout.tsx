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
                    <div className="video-embed embed-responsive embed-responsive-16by9 container mx-auto py-3xl lg:py-5xl">
                        <iframe
                            className="embed-responsive-item md:p-5xl"
                            src={videoSrc}
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title={title}
                        />
                    </div>

                    <div className="bg-gray-100">{learnMoreCTA}</div>
                </div>
            ) : (
                // ---- DEFAULT BODY VARIATION ----
                <ContentSection background="white" className="mb-4 grid grid-cols-1 gap-0  md:grid-cols-2 md:gap-9">
                    {description}

                    <div className="order-1 pb-3xl md:order-2 md:pb-0">
                        <h2 className="mb-[30px]">{formLabel}</h2>
                        <div className="sg-border-gradient-saturn mt-0 border-3 border-solid p-sm drop-shadow md:mt-4">
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
                <ContentSection background="white" parentClassName={classNames({ 'pt-0': !hasWatchNowQuery })}>
                    <h2>Speakers</h2>

                    <section className="flex flex-wrap">
                        {speakers.map((speaker: Speaker) => (
                            <div key={speaker.name} className="pl-0 lg:pr-5xl">
                                <img className="py-sm" width="140" src={speaker.img} alt={speaker.name} />
                                <h5>{speaker.name}</h5>
                                <figcaption className="my-xxs max-w-[250px] text-gray-400">{speaker.title}</figcaption>
                                <p>{speaker.bio}</p>
                            </div>
                        ))}
                    </section>
                </ContentSection>
            )}
        </>
    )
}
