import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import { Layout, Install, BackButton } from '@components'
import { useQueryString } from '@hooks'

import { BestForTitle, MostPopularBadge } from '.'

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
                <div className="container-xl py-5">
                    <h1 className="display-1 mb-2">
                        <strong>What's best for you?</strong>
                    </h1>
                    <p>From Amazon to Uber, the world's best developers use Sourcegraph every day.</p>
                </div>
            }
            heroAndHeaderClassName={styles.hero}
            hideGetStartedButton={true}
        >
            <div className={`${styles.root} bg-gradient-blue-purple py-5`}>
                <div className="row container-xl mx-auto py-5">
                    <div className="col-lg-6">
                        <div>
                            <BackButton
                                href={`/get-started${routerHook.queryString ? `?${routerHook.queryString}` : ''}`}
                                text="Deployment Options"
                            />

                            <h1 className="display-2 font-weight-bolder mb-2">
                                Sourcegraph <br />
                                Self-Hosted
                            </h1>

                            <MostPopularBadge />

                            <p className="mt-4">
                                Deploy and control Sourcegraph in your own infrastructure, or use Docker to install
                                locally. Get started for free.
                            </p>

                            <BestForTitle />
                            <p>Teams and enterprises</p>

                            <p>
                                Collaborate with your team on any code host (including private hosts) and access
                                advanced security functionality.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <Install />

                        <div className="d-flex flex-column align-items-start">
                            <a
                                className="btn p-0 my-4 text-primary"
                                href="https://info.sourcegraph.com/talk-to-a-developer"
                            >
                                Talk to an engineer <ArrowRightIcon />
                            </a>

                            <a className="btn p-0 text-primary" href="https://docs.sourcegraph.com/">
                                Deploy to a server or cluster <ArrowRightIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SelfHostedPage
