import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import { CustomerLogos } from '../../components/CustomerLogos'
import { buttonStyle, buttonLocation } from '../../tracking'

import meshLeft from './assets/mesh-left.png'
import meshRight from './assets/mesh-right.png'

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
        }, 5000)

        return () => clearInterval(cycle)
    })

    return (
        <div className="bg-white py-7 px-2 position-relative">
            <div
                className={classNames(styles.mesh, 'd-none d-lg-block position-absolute top-0 left-0')}
                style={{ backgroundImage: `url(${meshLeft})` }} />
            <div
                className={classNames(styles.mesh, 'd-none d-lg-block position-absolute top-0 right-0')}
                style={{ backgroundImage: `url(${meshRight})` }} />

            <div className="text-center max-w-700 mx-auto">
                <h1 className="text-5xl font-weight-bold">
                    <span className="d-block mb-2 text-transparent bg-clip-text text-gradient">{headline}</span> across
                    your entire codebase
                </h1>
                <p className="font-weight-bold my-5">
                    Address security risks, onboard to a new codebase, identify the root cause of incidents, promote
                    code reuse, improve code health, and accelerate engineering velocity with Sourcegraph.
                </p>

                <div className="max-w-350 mx-auto flex-column flex-sm-row d-sm-flex align-items-center">
                    <div className="col-sm-6 px-sm-0 mb-3 mb-sm-0 mr-sm-3">
                        <Link
                            className="btn btn-primary w-100"
                            to="/get-started"
                            title="Get started"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="col-sm-6 px-sm-0">
                        <Link
                            className="btn btn-outline-primary w-100"
                            to="/demo"
                            title="Request a demo"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            Request a demo
                        </Link>
                    </div>
                </div>

                <p className="mt-5">
                    Product or installation questions?{' '}
                    <a href="https://info.sourcegraph.com/talk-to-a-developer" title="Talk to an expert">
                        Talk to an expert
                    </a>
                </p>
            </div>

            <div className="py-7">
                <CustomerLogos />
            </div>

            <div className="max-w-600 mx-auto text-center">
                <h2 className="font-weight-bold">
                    Over <span className="text-vivid-violet">1.2M engineers</span> use Sourcegraph to build software
                    you rely on
                </h2>
                <Link to="/case-studies">Learn how our customers use Sourcegraph</Link>
            </div>
        </div>
    )
}

export default Hero
