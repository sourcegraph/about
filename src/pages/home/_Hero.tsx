import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { CustomerLogos, YouTube, Heading } from '@components'
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
        <div className="tw-relative tw-px-sm tw-bg-white tw-text-black">
            {[meshLeft, meshRight].map((image, index) => (
                <div
                    key={`mesh-container-${Math.random()}`}
                    className={classNames('tw-hidden xl:tw-block tw-absolute tw-top-0', {
                        ['tw-left-0']: index === 0,
                        ['tw-right-0']: index === 1,
                    })}
                >
                    <img
                        src={image.src}
                        alt="Sourcegraph mesh branding"
                        draggable={false}
                        className="tw-h-full tw-w-auto"
                        width={index === 0 ? 376 : 365}
                        height={630}
                    />
                    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-[80px] tw-bg-gradient-to-b tw-from-transparent tw-to-white" />
                </div>
            ))}

            <div className="tw-mx-auto tw-pt-md md:tw-pt-5xl tw-text-center">
                <h1 className="tw-text-4xl tw-leading-10 md:tw-text-6xl lg:tw-text-[3.75rem] lg:tw-leading-[1]">
                    <span className="mb-2 tw-text-transparent tw-block tw-bg-clip-text tw-bg-gradient-to-l tw-from-violet-400 tw-to-vermillion-300">
                        {headline}
                    </span>{' '}
                    across your entire codebase
                </h1>

                <Heading size="h5" as="h2" className="tw-my-md tw-mx-auto tw-max-w-4xl !tw-font-normal">
                    Address security risks, onboard to a new codebase, identify the root cause of incidents, promote
                    code reuse, improve code health, and accelerate engineering velocity with Sourcegraph.
                </Heading>

                <div className="tw-mx-auto max-w-350 tw-flex-col sm:tw-flex-row sm:tw-flex tw-items-center">
                    <div className="mb-3 col-sm-6 sm:tw-px-0 mb-sm-0 mr-sm-3">
                        <a
                            className="btn btn-primary w-100"
                            href="https://signup.sourcegraph.com"
                            title="Get free trial"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            Get free trial
                        </a>
                    </div>
                    <div className="col-sm-6 sm:tw-px-0">
                        <Link
                            href="/demo"
                            className="btn btn-outline-primary w-100"
                            title="Request a demo"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            Request a demo
                        </Link>
                    </div>
                </div>

                <div className="tw-max-w-4xl tw-mx-auto tw-my-3xl">
                    <YouTube title="Sourcegraph Product Tour" id="hayQ-rd_kzM" />
                </div>

                <div className="tw-mx-auto tw-text-center max-w-700">
                    <h2 className="tw-mb-2">
                        Over{' '}
                        <Link
                            href="/case-studies"
                            className="tw-text-violet-400"
                            title="1.8 million engineers"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            1.8M engineers
                        </Link>{' '}
                        use Sourcegraph to build software you rely on
                    </h2>

                    <Link
                        href="/case-studies"
                        title="Learn how our customers use Sourcegraph"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        Learn how our customers use Sourcegraph
                    </Link>
                </div>
            </div>

            <CustomerLogos />
        </div>
    )
}

export default Hero
