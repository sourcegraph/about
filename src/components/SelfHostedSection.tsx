import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Install } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const selfHostedFeatures: string[] = [
    'Free for up to 10 users',
    'Your code never leaves your server',
    'Connect to private code hosts (and local installs)',
    'Access advanced functionality, like Code Insights and Batch Changes',
]

export const SelfHostedSection: FunctionComponent = () => (
    <div className="bg-gradient-venus py-7">
        <div className="container">
            <h1 className="font-weight-bold mb-6 text-center">Self-hosted deployment</h1>

            <div className="row">
                <div className="col-lg-6">
                    <Install />
                </div>

                <div className="col-lg-6 pl-lg-7">
                    <h3 className="mt-6 mt-lg-0 font-weight-bold">Why choose self-hosted?</h3>

                    <ul className="my-4 text-lg">
                        {selfHostedFeatures.map((feature, index) => (
                            <li
                                key={feature}
                                className={classNames({ 'mb-2': selfHostedFeatures.length !== index + 1 })}
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/get-started"
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                        passHref={true}
                    >
                        <a className="d-inline-block text-lg" href="#none">
                            Learn about self-hosted vs Cloud features
                        </a>
                    </Link>

                    <h5 className="mt-6 mb-4 font-weight-bold">Need help setting up Sourcegraph?</h5>

                    <a
                        className="btn btn-primary d-inline-flex"
                        href="https://info.sourcegraph.com/talk-to-a-developer"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        Talk to an engineer
                    </a>
                </div>
            </div>
        </div>
    </div>
)
