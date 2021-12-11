import * as React from 'react'
import { Link } from 'gatsby'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'

export const GetStartedPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph | Sourcegraph Get started',
            description: '',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="get-started-page"
        heroAndHeaderClassName="get-started-page__hero-and-header"
        hero={
            <div className="row">
                <div className="col-lg-9 column">
                    <h1 className="display-1 mb-0">What's best for you?</h1>
                    <p className="subTitle">
                        From Amazon to Uber, the world’s best developers use Sourcegraph everyday.
                    </p>
                </div>
            </div>
        }
    >
        <div className="cta-container">
            <div className="row">
                <div className="col-lg-6 column left-column bg-gradient-blue-purple">
                    <h1 className="display-2 title">Sourcegraph Self-Hosted</h1>
                    <span className="badge">
                        <img src="../star.svg" />
                        <span>Most Popular</span>
                    </span>
                    <p>
                        Deploy and control Sourcegraph in your own infrastructure, or use Docker to install locally. Get
                        started for free.
                    </p>
                </div>
                <div className="col-lg-6 column right-column bg-gradient-blue-green">
                    <h1 className="display-2 title">Sourcegraph Cloud</h1>
                    <p>
                        Sync your code from GitHub.com or GitLab.com. No technical setup is required. Sign up for free.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export default GetStartedPage
