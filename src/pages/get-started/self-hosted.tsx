import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import { Layout, Install } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { useQueryString } from '@hooks'

import { DesignedForTitle } from '.'

import styles from './getStarted.module.scss'

export const SelfHostedPage: FunctionComponent = () => {
    const routerHook = useQueryString()

    return (
        <Layout
            meta={{
                title: 'Get Started with Sourcegraph Self-Hosted',
                description:
                    'Deploy and control Sourcegraph in your own infrastructure, or use Docker to install locally. Get started for free.',
            }}
            hero={
                <div className="py-5 container-xl">
                    <h1 className="mb-2">
                        <strong>Get started</strong>
                    </h1>
                    <p>From GE to Uber, the world's best developers use Sourcegraph every day.</p>
                </div>
            }
            heroAndHeaderClassName={styles.hero}
            hideGetStartedButton={true}
        >
            <div className={`${styles.root} sg-bg-gradient-saturn py-5`}>
                <div className="py-5 mx-auto row container-xl">
                    <div className="col-lg-6 pr-lg-7">
                        <div>
                            <h2 className="mb-2">Sourcegraph Self-Hosted</h2>

                            <p className="mt-4">
                                Deploy and control Sourcegraph in your own infrastructure, or use Docker to install
                                locally. Get started for free.
                            </p>

                            <DesignedForTitle />
                            <p>Teams and enterprises</p>

                            <p>
                                Collaborate with your team on any code host (including private hosts) and access
                                advanced security functionality.
                            </p>
                        </div>
                    </div>

                    <div className="py-4 col-lg-6 py-lg-0">
                        <Install />

                        <div className="d-flex flex-column align-items-start">
                            <a
                                className="p-0 mt-5"
                                title="Talk to an engineer"
                                data-button-style={buttonStyle.textWithArrow}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                                href="https://info.sourcegraph.com/talk-to-a-developer"
                            >
                                Talk to an engineer <ArrowRightIcon className="tw-inline" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SelfHostedPage
