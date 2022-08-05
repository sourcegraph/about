import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Layout } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { useQueryString } from '@hooks'

import styles from './getStarted.module.scss'

export const MostPopularBadge: FunctionComponent = () => (
    <span className={`${styles.mostPopularBadge} tw-bg-violet-400 badge text-white text-uppercase font-weight-bolder mb-3`}>
        <img alt="star" src="/Star.svg" className="mr-2 tw-inline" />
        <span>Most Popular</span>
    </span>
)

export const DesignedForTitle: FunctionComponent = () => (
    <div className={`text-uppercase font-weight-bolder mb-1 ${styles.designedForTitle}`}>Designed For</div>
)

export const GetStartedPage: FunctionComponent = () => {
    const routerHook = useQueryString()

    const GetStartedCTA: FunctionComponent<{ href: string }> = ({ href }) => (
        <Link href={routerHook.queryString ? `${href}?${routerHook.queryString}` : href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className="my-2 btn btn-primary"
                title="Get started for free"
                data-button-style={buttonStyle.primary}
                data-button-location={buttonLocation.trySourcegraph}
                data-button-type="cta"
            >
                Get started for free <ArrowRightIcon className="tw-inline" />
            </a>
        </Link>
    )

    return (
        <Layout
            meta={{
                title: 'Choose Your Deployment Model | Get Started with Sourcegraph',
                description:
                    "From Sourcegraph Self-hosted to Sourcegraph Cloud, choose the deployment model that's best for you and get started for free today.",
            }}
            hero={
                <div className="py-5 container-xl">
                    <h1 className="mb-2 display-1">
                        <strong>What's best for you?</strong>
                    </h1>
                    <p>From GE to Uber, the world's best developers use Sourcegraph every day.</p>
                </div>
            }
            heroAndHeaderClassName={styles.hero}
            hideGetStartedButton={true}
        >
            <div className={`${styles.root} ${styles.getStartedPage}`}>
                <div className="container-xl">
                    <div className="row">
                        <section id="sg-self-hosted" className="p-5 col-lg-6 sg-bg-gradient-saturn">
                            <h1>Sourcegraph Self-Hosted</h1>

                            <MostPopularBadge />

                            <p>
                                Deploy and control Sourcegraph in your own infrastructure, or use Docker to install
                                locally. Get started for free.
                            </p>

                            <DesignedForTitle />
                            <p>Teams and enterprises</p>

                            <p>
                                Collaborate with your team on any code host (including private hosts) and access
                                advanced security functionality.
                            </p>

                            <GetStartedCTA href="/get-started/self-hosted" />
                        </section>

                        <section id="sg-cloud" className="p-5 col-lg-6 sg-bg-gradient-venus">
                            <h1 className={styles.sgCloudHeading}>Sourcegraph Cloud</h1>

                            <p>Sync your code from GitHub.com or GitLab.com. No technical setup is required.</p>

                            <DesignedForTitle />
                            <p>Individual developers</p>

                            <p>
                                Search all your repositories and the open source universe without having to install or
                                manage a deployment.
                            </p>

                            <GetStartedCTA href="/get-started/cloud" />

                            <p className="mt-3">
                                Already have a Sourcegraph Cloud account?{' '}
                                <a
                                    className="text-black text-reset tw-underline"
                                    href="https://sourcegraph.com/sign-in"
                                    title="Search public code with Sourcegraph Cloud"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Sign in
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GetStartedPage
