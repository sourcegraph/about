import React, { FunctionComponent, ReactFragment } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { ContentSection } from '../../components/content/ContentSection'

import codeSearchMp4 from './assets/animations/code-search.mp4'
import codeSearchWebm from './assets/animations/code-search.webm'

import codeIntelMp4 from './assets/animations/code-intel.mp4'
import codeIntelWebm from './assets/animations/code-intel.webm'

import batchChangesMp4 from './assets/animations/batch-changes.mp4'
import batchChangesWebm from './assets/animations/batch-changes.webm'

import codeInsightsMp4 from './assets/animations/code-insights.mp4'
import codeInsightsWebm from './assets/animations/code-insights.webm'

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
            webm: codeSearchWebm
        }
    },
    {
        productFeature: 'code intelligence',
        title: 'Navigate your codebase and your dependencies',
        description:
            'Follow symbol definitions and references across packages, dependencies, and repositories seamlessly.',
        details: [
            "Traverse your entire codebase with cross-repository 'Jump to definition' and 'Find references'",
            'Navigate your code in your web browser to see any commit, on any branch, of any repository instantly',
            'Follow dependencies across repositories with confidence using precompiled data for speed and precision',
        ],
        ctaLink: 'https://docs.sourcegraph.com/code_intelligence',
        video: {
            mp4: codeIntelMp4,
            webm: codeIntelWebm
        }
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
            webm: batchChangesWebm
        }
    },
    {
        productFeature: 'code insights',
        title: 'Track what really matters to you and your team',
        description:
            'With Code Insights, know how different initiatives in your codebase are progressing in real time so you can make data-driven decisions.',
        details: [
            'Track migrations, code smells, ownership, versions, and fully customizable metrics',
            'Ensure that security vulnerabilities and deprecated packages get completely removed from your codebase',
            'Create visualizations that update automatically, provide historical trends, and pull directly from the source of truth: the code itself',
        ],
        ctaLink: '/code-insights',
        video: {
            mp4: codeInsightsMp4,
            webm: codeInsightsWebm
        }
    }
]

const FeatureSection: FunctionComponent = () => (
    <ContentSection color="white" className="py-8 mt-8 pb-7">
        <div className="text-center mt-4 mb-7">
            <h1 className="font-weight-bold">How teams use Sourcegraph</h1>
            <p className="max-w-500 mx-auto">
                Sourcegraph's code intelligence platform is built with features that help you understand, fix, and
                automate across your entire codebase.
            </p>
        </div>

        {features.map((feature, i) => (
            <div
                key={i}
                className={classNames('row flex-column-reverse flex-lg-row', {
                    'flex-lg-row-reverse': i % 2,
                    'mb-8': i !== features.length - 1,
                })}
            >
                <div
                    className={classNames('col-lg-6', {
                        'pr-lg-7 pl-lg-0': i % 2 === 0,
                        'pl-lg-7 pr-lg-0': i % 2,
                    })}
                >
                    <small className="text-uppercase font-weight-bold d-block mb-2">{feature.productFeature}</small>
                    <h2 className="font-weight-bold">{feature.title}</h2>
                    <p>{feature.description}</p>
                    <ul>
                        {feature.details.map((detail, k) => (
                            <li key={k}>{detail}</li>
                        ))}
                    </ul>
                    {feature.ctaLink.includes('http') ? (
                        <a href={feature.ctaLink} target="_blank" rel="noreferrer">
                            Learn more
                        </a>
                    ) : (
                        <Link to={feature.ctaLink}>Learn more</Link>
                    )}
                </div>

                <div className="col-lg-6 mb-6 mb-lg-0 py-0 px-5">
                    <video
                        className="shadow w-100 max-w-550 d-block mx-auto"
                        autoPlay={true}
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

export default FeatureSection
