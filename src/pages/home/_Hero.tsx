import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, CustomerLogos } from '@components'
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
        <ContentSection parentClassName="tw-relative" color="white">
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

            <div className="tw-mx-auto tw-text-center max-w-750">
                <h1 className="tw-text-4xl tw-leading-10 md:tw-text-6xl lg:tw-text-[3.75rem] lg:tw-leading-[1]">
                    <span className="mb-2 tw-text-transparent tw-block tw-bg-clip-text tw-bg-gradient-to-l tw-from-violet-400 tw-to-vermillion-300">
                        {headline}
                    </span>{' '}
                    across your entire codebase
                </h1>
                <p className="my-5 tw-mx-auto max-w-700 tw-font-semibold">
                    Understand, fix, and automate across your codebase with Sourcegraph's code intelligence platform
                </p>

                <div className="tw-mx-auto max-w-350 tw-flex-col sm:tw-flex-row sm:tw-flex tw-items-center">
                    <div className="mb-3 col-sm-6 sm:tw-px-0 mb-sm-0 mr-sm-3">
                        <Link href="/get-started/self-hosted" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="btn btn-primary w-100"
                                title="Get started"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                            >
                                Get started
                            </a>
                        </Link>
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

                <p className="mt-5">
                    Product or installation questions?{' '}
                    <a
                        href="https://info.sourcegraph.com/talk-to-a-developer"
                        title="Talk to an expert"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        Talk to an expert
                    </a>
                    .
                </p>
            </div>

            <div className="tw-py-md md:tw-py-5xl">
                <CustomerLogos />
            </div>

            <div className="tw-mx-auto tw-text-center max-w-600">
                <h2 className="tw-mb-2">
                    Over{' '}
                    <Link href="/case-studies" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="tw-text-violet-400"
                            title="1.2 Million engineers"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            1.2M engineers
                        </a>
                    </Link>{' '}
                    use Sourcegraph to build software you rely on
                </h2>
                <Link href="/case-studies" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="Learn how our customers use Sourcegraph"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        Learn how our customers use Sourcegraph
                    </a>
                </Link>
            </div>
        </ContentSection>
    )
}

export default Hero
