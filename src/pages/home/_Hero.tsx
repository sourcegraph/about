import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { CustomerLogos } from '@components'
import { buttonStyle, buttonLocation } from '@data'

import meshLeft from './assets/hero/mesh-left.png'
import meshRight from './assets/hero/mesh-right.png'

import styles from './home.module.scss'

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
        <div className="px-2 py-5 bg-white py-md-7 position-relative">
            {[meshLeft, meshRight].map((image, index) => (
                <div
                    key={image.src}
                    className={classNames(styles.mesh, 'd-none d-lg-block position-absolute top-0', {
                        ['left-0']: index === 0,
                        ['right-0']: index === 1,
                    })}
                >
                    <img src={image.src} alt="" draggable={false} className="w-100 h-500" />
                    <div className={styles.bottomFade} />
                </div>
            ))}

            <div className="mx-auto text-center max-w-750">
                <h1 className={classNames(styles.heading, 'font-weight-bold')}>
                    <span className="mb-2 text-transparent d-block bg-clip-text text-gradient">{headline}</span> across
                    your entire codebase
                </h1>
                <p className="mx-auto my-5 font-weight-bold max-w-700">
                    Understand, fix, and automate across your codebase with Sourcegraph's code intelligence platform
                </p>

                <div className="mx-auto max-w-350 flex-column flex-sm-row d-sm-flex align-items-center">
                    <div className="mb-3 col-sm-6 px-sm-0 mb-sm-0 mr-sm-3">
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
                    <div className="col-sm-6 px-sm-0">
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

            <div className="py-5 py-md-7">
                <CustomerLogos />
            </div>

            <div className="mx-auto text-center max-w-600">
                <h2 className="font-weight-bold">
                    Over{' '}
                    <Link href="/case-studies" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="text-vivid-violet"
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
        </div>
    )
}

export default Hero
