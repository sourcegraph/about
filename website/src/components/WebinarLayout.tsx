import * as React from 'react'
import classNames from 'classnames'
import { ContentSection } from './content/ContentSection'
import { useHubSpot } from '../hooks/hubSpot'
import { useChiliPiper } from '../hooks/chiliPiper'

interface Props {
    customer?: Customer
    title: string
    subtitle: string
    description: React.ReactNode
    speakers: Speaker[]
    children?: React.ReactNode
}

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

export const WebinarLayout: React.FunctionComponent<Props> = ({
    title,
    subtitle,
    customer,
    description,
    speakers,
    children,
}) => {
    useHubSpot({
        portalId: '2762526',
        formId: '66361163-5e08-4be3-8ab0-6590b70df69e',
        targetId: 'form',
    })
    useChiliPiper()

    return (
        <>
            <section className="container py-6 d-flex justify-content-around align-items-center">
                {customer && (
                    <div className="col-lg-6 col-12 text-center">
                        <img
                            className="mr-3 pr-5 border-right border-2 border-black"
                            width="120"
                            src="/sourcegraph/sourcegraph-mark.svg"
                            alt="Sourcegraph mark"
                            />
                        <img
                            className="ml-3"
                            height="30"
                            src={customer.logo}
                            alt={`${customer.name} logo`}
                        />
                    </div>
                )}
                <div className={classNames('col-12', customer ? 'col-lg-6' : 'text-white')}>
                    <h2 className="display-3 font-weight-bold mb-4">{title}</h2>
                    <h3 className={classNames('font-weight-light', { 'max-w-400': customer })}>{subtitle}</h3>
                </div>
            </section>

            <section className="bg-white py-6">
                <ContentSection className="d-flex">
                    {description}

                    <div className="col-6">
                        <h3 className="font-weight-bold">Watch the on-demand webinar</h3>
                        <div className="border border-3 border-plum-mist pt-4 px-4 pb-2 mx-1 mt-3">
                            {/* <div id="form" /> */}
                        </div>
                    </div>
                </ContentSection>

                {children}
            </section>

            <section className="bg-white py-6">
                <ContentSection>
                    <h3 className="font-weight-bold">Speakers</h3>

                    <section className="d-flex">
                        {speakers.map((speaker: Speaker) => (
                            <div key={speaker.name} className="col-md-5">
                                <img
                                    className="py-4 px-0"
                                    width="150"
                                    src={speaker.img}
                                    alt={speaker.name}
                                />
                                <h5>{speaker.name}</h5>
                                <p>{speaker.title}</p>
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
