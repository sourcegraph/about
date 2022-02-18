import * as React from 'react'
import Layout from '../../components/Layout'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import styles from './index.module.scss'

export const GetStartedPage: React.FunctionComponent = props => {
    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Choose Your Deployment Model | Get Started with Sourcegraph',
                description:
                    "From Sourcegraph Self-hosted to Sourcegraph Cloud, choose the deployment model that's best for you and get started for free today. ",
                image: 'https://about.sourcegraph.com/sourcegraph-og.png',
            }}
            hero={
                <div className="container-xl py-5">
                    <h1 className="display-1">What's best for you?</h1>
                    <p>From Amazon to Uber, the world's best developers use Sourcegraph every day.</p>
                </div>
            }
            heroAndHeaderClassName={styles.hero}
            hideGetStartedButton={true}
        >
            <div className={styles.getStartedPage}>
                <div className="container-xl">
                    <div className="row">
                        <section id="sg-self-hosted" className="col-lg-6 column p-5">
                            <h1 className="title">Sourcegraph Self-Hosted</h1>

                            <span className={`${styles.badge} badge`}>
                                <img src="/star.svg" />
                                <span>Most Popular</span>
                            </span>

                            <p>
                                Deploy and control Sourcegraph in your own infrastructure, or use Docker to install
                                locally. Get started for free.
                            </p>

                            <div className={styles.smallTitle}>Best For</div>
                            <p>Teams and enterprises</p>

                            <p>
                                Collaborate with your team on any code host (including private hosts) and access
                                advanced security functionality.
                            </p>

                            <a className="btn btn-primary my-2" href="/get-started/self-hosted">
                                Get started for free <ArrowRightIcon />
                            </a>
                        </section>

                        <section id="sg-cloud" className="col-lg-6 column p-5">
                            <h1 className="title">Sourcegraph Cloud</h1>

                            <p>Sync your code from GitHub.com or GitLab.com. No technical setup is required.</p>

                            <div className={styles.smallTitle}>Best For</div>
                            <p>Individual developers (small teams coming soon)</p>

                            <p>Search across your repositories and the open-source universe.</p>

                            <p className="small-font">
                                Already have a Sourcegraph Cloud account?{' '}
                                <a
                                    href="https://sourcegraph.com/sign-in"
                                    title="Search public code with Sourcegraph Cloud"
                                    className={styles.signInLink}
                                >
                                    Sign in
                                </a>
                            </p>

                            <a className="btn btn-primary my-2" href="/get-started/cloud">
                                Get started for free <ArrowRightIcon />
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GetStartedPage
