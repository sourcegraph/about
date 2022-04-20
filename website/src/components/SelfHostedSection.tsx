import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

import { Install } from './Install'
import { buttonStyle, buttonLocation } from '../tracking'

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
                        {selfHostedFeatures.map((feature, i) => (
                            <li key={i} className={classNames({ 'mb-2': selfHostedFeatures.length !== i + 1 })}>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a
                        className="d-inline-block text-lg"
                        href="/get-started"
                        data-button-style={buttonStyle.arrowWithText}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        Learn about self-hosted vs Cloud features
                    </a>

                    <h5 className="mt-6 mb-4 font-weight-bold">Want help?</h5>

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
