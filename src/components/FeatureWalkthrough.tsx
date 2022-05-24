import { FunctionComponent, useEffect } from 'react'

import classNames from 'classnames'
import { startCase } from 'lodash'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'
import { Features, VideoElement } from '@interfaces/featureWalkthrough'

interface Props {
    features: Features[]
}

export const FeatureWalkthrough: FunctionComponent<Props> = ({ features }) => {
    useEffect(() => {
        const videos = features.map(
            (vid, index): VideoElement => ({
                el: document.querySelector(`.video-${index}`),
                paused: true,
            })
        )

        if (window.IntersectionObserver) {
            for (const vid of videos) {
                const observer = new IntersectionObserver(
                    entries => {
                        const currentVideo = entries[0]

                        if (!currentVideo.isIntersecting && !vid.paused) {
                            vid?.el?.pause()
                            vid.paused = true
                        } else if (vid.paused) {
                            vid?.el?.play()
                            vid.paused = false
                        }
                    },
                    { threshold: 1 }
                )

                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                observer.observe(vid.el!)
            }
        }
    }, [features])

    return (
        <>
            <div className="text-center mt-8 pt-4 mb-7">
                <h1 className="font-weight-bold">How teams use Sourcegraph</h1>
                <p className="max-w-500 mx-auto">
                    Sourcegraph's code intelligence platform is built with features that help you understand, fix, and
                    automate across your entire codebase.
                </p>
            </div>

            {features.map((feature, index) => (
                <div
                    key={feature.productFeature}
                    className={classNames('row flex-column-reverse flex-lg-row', {
                        'flex-lg-row-reverse': index % 2,
                        'mb-8': index !== features.length - 1,
                    })}
                >
                    <div
                        className={classNames('col-lg-6', {
                            'pr-lg-7 pl-lg-0': index % 2 === 0,
                            'pl-lg-7 pr-lg-0': index % 2,
                        })}
                    >
                        <small className="text-uppercase font-weight-bold d-block mb-2">{feature.productFeature}</small>
                        <h2 className={classNames('font-weight-bold', { 'max-w-350': index !== 0 })}>
                            {feature.title}
                        </h2>
                        <p>{feature.description}</p>
                        <ul>
                            {feature.details.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                        {feature.ctaLink.includes('http') ? (
                            <a
                                href={feature.ctaLink}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline-primary mt-2"
                                data-button-style={buttonStyle.outline}
                                data-button-location={buttonLocation.body}
                            >
                                Learn more about {startCase(feature.productFeature)}
                            </a>
                        ) : (
                            <Link
                                href={feature.ctaLink}
                                data-button-style={buttonStyle.outline}
                                data-button-location={buttonLocation.body}
                                passHref={true}
                            >
                                <a className="btn btn-outline-primary mt-2" href="#none">
                                    Learn more about {startCase(feature.productFeature)}
                                </a>
                            </Link>
                        )}
                    </div>

                    <div className="col-lg-6 mb-6 mb-lg-0 py-0 px-5">
                        <video
                            className={`shadow w-100 max-w-550 d-block mx-auto rounded video-${index}`}
                            autoPlay={false}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            controls={false}
                            data-cookieconsent="ignore"
                        >
                            <source type="video/webm" src={feature.video.webm} data-cookieconsent="ignore" />
                            <source type="video/mp4" src={feature.video.mp4} data-cookieconsent="ignore" />
                        </video>
                    </div>
                </div>
            ))}
        </>
    )
}
