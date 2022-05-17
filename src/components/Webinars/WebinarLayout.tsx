import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { ContentSection } from '@components'
import { breakpoints } from '@data'
import { useWindowWidth, useHubSpot, HubSpotForm } from '@hooks'

import styles from './WebinarLayout.module.scss'

interface Customer {
    name: string
    logo: string
    href: string
}

interface Speaker {
    name: string
    title: string
    img: string
    bio: string
}

interface Form {
    formId: string
    onFormSubmitted?: () => void
}

interface Props {
    customer?: Customer
    title: string
    subtitle: string
    description: ReactNode
    form: Form
    speakers: Speaker[]
    children?: ReactNode
}

export const WebinarLayout: FunctionComponent<Props> = ({
    title,
    subtitle,
    customer,
    description,
    form,
    speakers,
    children,
}) => {
    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    const hubSpotConfig: HubSpotForm = {
        portalId: '2762526',
        formId: form.formId,
        targetId: 'form',
        formInstanceId: form.formId,
    }
    if (form.onFormSubmitted) {
        hubSpotConfig.onFormSubmitted = form.onFormSubmitted
    }
    useHubSpot(hubSpotConfig)

    return (
        <>
            <section className={styles.hero}>
                <div className="container py-6 d-flex flex-column flex-lg-row justify-content-around align-items-center">
                    {/* Show SG & Customer logo for customer-based webinars */}
                    {customer && (
                        <div className="col-lg-4 col-12 text-lg-center px-lg-0 pb-5 pb-lg-0">
                            <img
                                className={`border-right border-black ${
                                    isMdOrDown ? 'border-2 mr-3 pr-3' : 'border-3 mr-4 pr-4'
                                }`}
                                width={isMdOrDown ? '65' : '95'}
                                src="/sourcegraph/sourcegraph-mark.svg"
                                alt="Sourcegraph mark"
                            />
                            <img height={isMdOrDown ? '15' : '22'} src={customer.logo} alt={`${customer.name} logo`} />
                        </div>
                    )}

                    <div className={classNames('col-12', customer && 'col-lg-8')}>
                        <h1 className="display-2 font-weight-bold mb-4">{title}</h1>
                        <h4 className="font-weight-normal">{subtitle}</h4>
                    </div>
                </div>
            </section>

            <section className="bg-white py-6">
                <ContentSection className="d-flex flex-column-reverse flex-md-row">
                    {description}

                    <div className="col-md-6 col-12 pb-md-0 pb-6">
                        <h2 className="font-weight-bold">Watch the on-demand webinar</h2>
                        <div className={`${styles.saturnBorder} border border-3 shadow-sm py-4 px-4 mt-3`}>
                            <div id="form" />
                        </div>
                    </div>
                </ContentSection>

                {children}
            </section>

            <section className="bg-white pb-6">
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
        </>
    )
}

export default WebinarLayout
