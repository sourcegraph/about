import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Install, ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const selfHostedFeatures: string[] = [
    'Free for up to 10 users',
    'Your code never leaves your server',
    'Connect to private code hosts (and local installs)',
    'Access advanced functionality, like Code Insights and Batch Changes',
]

export const SelfHostedSection: FunctionComponent = () => (
    <ContentSection parentClassName="sg-bg-gradient-venus">
        <h2 className="mb-6 tw-text-center">Self-hosted deployment</h2>

        <div className="row">
            <div className="col-lg-6">
                <Install />
            </div>

            <div className="col-lg-6 pl-lg-7">
                <h3 className="mt-6 mt-lg-0">Why choose self-hosted?</h3>

                <ul className="my-4 tw-text-lg">
                    {selfHostedFeatures.map((feature, index) => (
                        <li key={feature} className={classNames({ 'mb-2': selfHostedFeatures.length !== index + 1 })}>
                            {feature}
                        </li>
                    ))}
                </ul>

                <Link href="/get-started/self-hosted" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="tw-text-lg tw-inline-block"
                        title="Learn about self-hosted"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        Learn about self-hosted
                    </a>
                </Link>

                <h5 className="mt-6 mb-4">Need help setting up Sourcegraph?</h5>

                <a
                    className="btn btn-primary tw-inline-flex"
                    href="https://info.sourcegraph.com/talk-to-a-developer"
                    title="Talk to an engineer"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.trySourcegraph}
                    data-button-type="cta"
                >
                    Talk to an engineer
                </a>
            </div>
        </div>
    </ContentSection>
)
