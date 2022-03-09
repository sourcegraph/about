import React, { FunctionComponent } from 'react'
import { Link, PageProps } from 'gatsby'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import Layout from '../../components/Layout'
import { Install } from '../../components/Install'
import { BestForTitle, MostPopularBadge } from '.'

import styles from './getStarted.module.scss'

export const BackButton: FunctionComponent<{ search: string }> = ({ search }) => (
    <Link className="btn p-0 text-uppercase mb-3 font-weight-normal" to={`/get-started${search}`}>
        <ArrowLeftIcon className="mb-1" />
        <span className="h6 font-weight-normal ml-3">Deployment Options</span>
    </Link>
)

export const SelfHostedPage: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
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
                        <BackButton search={props.location.search} />

                        <h1 className="display-2 font-weight-bolder mb-2">
                            Sourcegraph <br />
                            Self-Hosted
                        </h1>

                        <MostPopularBadge />

                        <p className="mt-4">
                            Deploy and control Sourcegraph in your own infrastructure, or use Docker to install locally.
                            Get started for free.
                        </p>

                        <BestForTitle />
                        <p>Teams and enterprises</p>

                        <p>
                            Collaborate with your team on any code host (including private hosts) and access advanced
                            security functionality.
                        </p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <Install />

                    <div className="d-flex flex-column align-items-start">
                        <a
                            className="btn p-0 my-4 text-primary cta-btn"
                            data-button-style="3"
                            data-button-location="2"
                            href="https://info.sourcegraph.com/talk-to-a-developer"
                        >
                            Talk to an engineer <ArrowRightIcon />
                        </a>

                        <a 
                            className="btn p-0 text-primary cta-btn" 
                            data-button-style="3"
                            data-button-location="2"
                            href="https://docs.sourcegraph.com/"
                        >
                            Deploy to a server or cluster <ArrowRightIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default SelfHostedPage
