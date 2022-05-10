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
        <div className="bg-white py-7 px-2 position-relative">
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

            <div className="text-center max-w-750 mx-auto">
                <h1 className={classNames(styles.heading, 'font-weight-bold')}>
                    <span className="d-block mb-2 text-transparent bg-clip-text text-gradient">{headline}</span> across
                    your entire codebase
                </h1>
                <p className="font-weight-bold my-5 max-w-700 mx-auto">
                    Understand, fix, and automate across your codebase with Sourcegraph's code intelligence platform
                </p>

                <div className="max-w-350 mx-auto flex-column flex-sm-row d-sm-flex align-items-center">
                    <div className="col-sm-6 px-sm-0 mb-3 mb-sm-0 mr-sm-3">
                        <Link
                            href="/get-started"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                            passHref={true}
                        >
                            <a className="btn btn-primary w-100" href="#none" title="Get started">
                                Get started
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-6 px-sm-0">
                        <Link
                            href="/demo"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                            passHref={true}
                        >
                            <a className="btn btn-outline-primary w-100" href="#none" title="Request a demo">
                                Request a demo
                            </a>
                        </Link>
                    </div>
                </div>

                <p className="mt-5">
                    Product or installation questions?{' '}
                    <a href="https://info.sourcegraph.com/talk-to-a-developer" title="Talk to an expert">
                        Talk to an expert
                    </a>
                    .
                </p>
            </div>

            <div className="py-7">
                <CustomerLogos />
            </div>

            <div className="max-w-600 mx-auto text-center">
                <h2 className="font-weight-bold">
                    Over <span className="text-vivid-violet">1.2M engineers</span> use Sourcegraph to build software you
                    rely on
                </h2>
                <Link
                    href="/case-studies"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Learn how our customers use Sourcegraph
                </Link>
            </div>
        </div>
    )
}

export default Hero
