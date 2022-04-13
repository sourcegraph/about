import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Layout } from '@components'
import { useQueryString } from '@hooks'

import styles from './getStarted.module.scss'

export const MostPopularBadge: FunctionComponent = () => (
    <span className={`${styles.mostPopularBadge} badge text-white text-uppercase font-weight-bolder mb-3`}>
        <img alt="star" src="/Star.svg" className="mr-2" />
        <span>Most Popular</span>
    </span>
)

export const BestForTitle: FunctionComponent = () => (
    <div className={`text-uppercase font-weight-bolder mb-1 ${styles.bestForTitle}`}>Best For</div>
)

export const GetStartedPage: FunctionComponent = () => {
    const routerHook = useQueryString()

    const GetStartedCTA: FunctionComponent<{ href: string }> = ({ href }) => (
        <Link href={routerHook.queryString ? `${href}?${routerHook.queryString}` : href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="btn btn-primary my-2">
                Get started for free <ArrowRightIcon />
            </a>
        </Link>
    )

    return (
        <Layout
            meta={{
                title: 'Choose Your Deployment Model | Get Started with Sourcegraph',
                description:
                    "From Sourcegraph Self-hosted to Sourcegraph Cloud, choose the deployment model that's best for you and get started for free today.",
                image: '/sourcegraph-og.png',
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
            <div className={`${styles.root} ${styles.getStartedPage}`}>
                <div className="container-xl">
                    <div className="row">
                        <section id="sg-self-hosted" className="col-lg-6 p-5">
                            <h1>Sourcegraph Self-Hosted</h1>

                            <MostPopularBadge />

                            <p>
                                Deploy and control Sourcegraph in your own infrastructure, or use Docker to install
                                locally. Get started for free.
                            </p>

                            <BestForTitle />
                            <p>Teams and enterprises</p>

                            <p>
                                Collaborate with your team on any code host (including private hosts) and access
                                advanced security functionality.
                            </p>

                            <GetStartedCTA href="/get-started/self-hosted" />
                        </section>

                        <section id="sg-cloud" className="col-lg-6 p-5">
                            <h1 className={styles.sgCloudHeading}>Sourcegraph Cloud</h1>

                            <p>Sync your code from GitHub.com or GitLab.com. No technical setup is required.</p>

                            <BestForTitle />
                            <p>Individual developers and small teams (Beta)</p>

                            <p>
                                Search all your repositories, team's repositories, and the open source universe without
                                having to install or manage a deployment.
                            </p>

                            <GetStartedCTA href="/get-started/cloud" />

                            <p className="mt-3">
                                Already have a Sourcegraph Cloud account?{' '}
                                <a
                                    href="https://sourcegraph.com/sign-in"
                                    title="Search public code with Sourcegraph Cloud"
                                    className="text-reset text-black text-decoration-underline"
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
