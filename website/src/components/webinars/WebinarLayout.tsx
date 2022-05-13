import React, { ReactNode, FunctionComponent } from 'react'

import classNames from 'classnames'
import styles from './WebinarLayout.module.scss'

import { ContentSection } from '../content/ContentSection'
import { breakpoints } from '../../breakpoints'
import { useWindowWidth } from '../../hooks'
import { useHubSpot } from '../../hooks/hubSpot'

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
    const isMdScreen = windowWidth < breakpoints.lg && windowWidth > breakpoints.sm
    const isMobile = windowWidth < breakpoints.md

    useHubSpot({
        portalId: '2762526',
        formId: form.formId,
        targetId: 'form',
        formInstanceId: form.formId,
    })

    return (
        <>
            {/* Hero style differs if webinar is customer- vs. interal-based */}
            <section className={classNames(customer && styles.hero)}>
                <div className="container py-6 d-flex flex-column flex-lg-row justify-content-around align-items-center">
                    {customer && (
                        <div className="col-lg-6 col-12 text-lg-center pb-5 pb-lg-0">
                            <img
                                className={`border-right border-black ${
                                    isMobile || isMdScreen ? 'border-2 mr-3 pr-3' : 'border-3 mr-4 pr-4'
                                }`}
                                width={isMobile ? '65' : isMdScreen ? '80' : '110'}
                                src="/sourcegraph/sourcegraph-mark.svg"
                                alt="Sourcegraph mark"
                            />
                            <img
                                height={isMobile ? '15' : isMdScreen ? '20' : '25'}
                                src={customer.logo}
                                alt={`${customer.name} logo`}
                            />
                        </div>
                    )}

                    <div className={classNames('col-12', customer && 'col-lg-6')}>
                        <h2 className="display-3 font-weight-bold mb-4">{title}</h2>
                        <h3 className={classNames('font-weight-light', { 'max-w-400': customer })}>{subtitle}</h3>
                    </div>
                </div>
            </section>

            <section className="bg-white py-6">
                <ContentSection className="d-flex flex-column-reverse flex-md-row">
                    {description}

                    <div className="col-md-6 col-12 pb-md-0 pb-6">
                        <h3 className="font-weight-bold">Watch the on-demand webinar</h3>
                        <div className={`${styles.saturnBorder} border border-3 shadow-sm py-4 px-4 mx-1 mt-3`}>
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
