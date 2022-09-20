import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, CustomerLogos, Video } from '@components'
import { buttonStyle, buttonLocation } from '@data'

import meshLeft from './assets/hero/mesh-left.png'
import meshRight from './assets/hero/mesh-right.png'

const Hero: FunctionComponent = () => {
    const headlines: string[] = ['Understand and search', 'Fix vulnerabilities and issues', 'Automate key workflows']
    const [headlineIndex, setHeadlineIndex] = useState(0)
    const [headline, setHeadline] = useState(headlines[0])

    useEffect(() => {
        const cycle = setInterval(() => {
            const newIndex = headlineIndex === headlines.length - 1 ? 0 : headlineIndex + 1

            setHeadline(headlines[newIndex])
            setHeadlineIndex(newIndex)
        }, 3500)

        return () => clearInterval(cycle)
    })

    return (
        <ContentSection background="white" parentClassName="tw-relative">
            {[meshLeft, meshRight].map((image, index) => (
                <div
                    key={image.src}
                    className={classNames('tw-hidden lg:tw-block tw-absolute tw-top-0', {
                        ['tw-left-0']: index === 0,
                        ['tw-right-0']: index === 1,
                    })}
                >
                    <img src={image.src} alt="" draggable={false} className="w-100 h-500" />
                    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-[80px] tw-bg-gradient-to-b tw-from-transparent tw-to-white" />
                </div>
            ))}

            <div className="tw-mx-auto tw-pt-md md:tw-pt-5xl tw-text-center max-w-750">
                <h1 className="tw-text-4xl tw-leading-10 md:tw-text-6xl lg:tw-text-[3.75rem] lg:tw-leading-[1]">
                    <span className="mb-2 tw-text-transparent tw-block tw-bg-clip-text tw-bg-gradient-to-l tw-from-violet-400 tw-to-vermillion-300">
                        {headline}
                    </span>{' '}
                    across your entire codebase
                </h1>
                <p className="my-5 tw-mx-auto max-w-700">
                    Address security risks, onboard to a new codebase, identify the root cause of  incidents, promote code reuse,  improve code health, and accelerate engineering velocity with Sourcegraph.
                </p>

                <div className="tw-mx-auto max-w-350 tw-flex-col sm:tw-flex-row sm:tw-flex tw-items-center">
                    <div className="mb-3 col-sm-6 sm:tw-px-0 mb-sm-0 mr-sm-3">
                        <a
                            className="btn btn-primary w-100"
                            href="https:/signup.sourcegraph.com"
                            title="Get started"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            Get free trial
                        </a>
                    </div>
                    <div className="col-sm-6 sm:tw-px-0">
                        <Link href="/demo" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="btn btn-outline-primary w-100"
                                title="Request a demo"
                                data-button-style={buttonStyle.outline}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                            >
                                Request a demo
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <ContentSection slimWidth={true} parentClassName="tw-mt-5xl">
                <Video
                    source={{
                        mp4: 'batch-changes/how-it-works',
                        webm: 'batch-changes/how-it-works',
                    }}
                    loop={true}
                    title="Batch Changes: How it works"
                />
            </ContentSection>

            <CustomerLogos />
        </ContentSection>
    )
}

export default Hero
