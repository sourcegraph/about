import { FunctionComponent, ReactFragment, useEffect } from 'react'

import classNames from 'classnames'
import { startCase } from 'lodash'
import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

import batchChangesMp4 from './assets/animations/batch-changes.mp4'
import batchChangesWebm from './assets/animations/batch-changes.webm'
import codeInsightsMp4 from './assets/animations/code-insights.mp4'
import codeInsightsWebm from './assets/animations/code-insights.webm'
import codeIntelMp4 from './assets/animations/code-intel.mp4'
import codeIntelWebm from './assets/animations/code-intel.webm'
import codeSearchMp4 from './assets/animations/code-search.mp4'
import codeSearchWebm from './assets/animations/code-search.webm'

interface Video {
    mp4: string
    webm: string
}

interface Features {
    productFeature: string
    title: string
    description: string | ReactFragment
    details: string[]
    ctaLink: string
    video: Video
}

const features: Features[] = [
    {
        productFeature: 'code search',
        title: 'Find what you need: any code host, language, or repository',
        description:
            'Use Code Search to find what you need, across thousands of repositories and multiple code hosts, in milliseconds.',
        details: [
            'Search for snippets, commits, dependencies, or errors across your entire codebase',
            'Create code monitors to be alerted when known vulnerabilities or undesirable code is introduced',
            "Access all of your team's code in one place; never get stuck searching one repository or code host at a time",
        ],
        ctaLink: '/code-search',
        video: {
            mp4: codeSearchMp4,
            webm: codeSearchWebm,
        },
    },
    {
        productFeature: 'code intelligence',
        title: 'Navigate your codebase and your dependencies',
        description:
            'Follow symbol definitions and references across packages, dependencies, and repositories seamlessly.',
        details: [
            "Traverse your entire codebase with cross-repository 'Go to definition' and 'Find references'",
            'Navigate your code in your web browser to see any commit, on any branch, of any repository instantly',
            'Follow dependencies across repositories with confidence using precompiled data for speed and precision',
        ],
        ctaLink: 'https://docs.sourcegraph.com/code_intelligence',
        video: {
            mp4: codeIntelMp4,
            webm: codeIntelWebm,
        },
    },
    {
        productFeature: 'batch changes',
        title: 'Automate large-scale code changes',
        description: (
            <>
                Batch Changes allows you to automate code changes across your entire codebase. Move fast and fix things{' '}
                <em>safely</em>.
            </>
        ),
        details: [
            'Update legacy code, remove outdated patterns, and fix critical security issues across multiple repositories',
            'Track changes across your codebase without maintaining spreadsheets of places that need to be updated',
            'Automate fixing breaking changes introduced by library or package updates',
        ],
        ctaLink: '/batch-changes',
        video: {
            mp4: batchChangesMp4,
            webm: batchChangesWebm,
        },
    },
    {
        productFeature: 'code insights',
        title: 'Track what really matters to you and your team',
        description:
            'With Code Insights, know how different initiatives in your codebase are progressing in real time so you can make data-driven decisions.',
        details: [
            'Track migrations, code smells, ownership, and versions with fully customizable dashboards',
            'Ensure that security vulnerabilities and deprecated packages get completely removed from your codebase',
            'Create visualizations that update automatically, provide historical trends, and pull directly from the source of truth: the code itself',
        ],
        ctaLink: '/code-insights',
        video: {
            mp4: codeInsightsMp4,
            webm: codeInsightsWebm,
        },
    },
]

interface VideoElement {
    el: HTMLVideoElement | null
    paused: boolean
}

const FeatureSection: FunctionComponent = () => {
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
    }, [])

    return (
        <ContentSection color="white" className="py-8 pb-7">
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
        </ContentSection>
    )
}

export default FeatureSection
