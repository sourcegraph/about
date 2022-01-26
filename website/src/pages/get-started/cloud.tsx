import * as React from 'react'
import Layout from '../../components/Layout'
import { ContentSection } from '../../components/content/ContentSection'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'

export const CloudPage: React.FunctionComponent<PageProps> = props => {
    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Get Started with Sourcegraph Cloud',
                description:
                    'Search across your repositories and the open-source universe with Sourcegraph Cloud. No technical setup is required. Sign up for free.',
            }}
            hideFooter={true}
            hideGetStartedButton={true}
        >
            <div className="cloud-page">
                <div className="row bg-gradient-blue-green">
                    <div className="col-lg-6 column">
                        <div className="original-container">
                            <a className="btn back-link" href="/get-started">
                                <ArrowLeftIcon />
                                <span>Deployment Options</span>
                            </a>
                            <h1 className="title">Sourcegraph Cloud</h1>
                            <p>Sync your code from GitHub.com or GitLab.com. No technical setup is required.</p>
                            <div className="small-title">Best For</div>
                            <p>Individual developers (small teams coming soon)</p>
                            <p>Search across your repositories and the open-source universe.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 column">
                        <div className="new-container">
                            <div className="bg-white login-section">
                                <h2 className="get-started-page__search-headings">Search open source code</h2>
                                <p>No account required.</p>
                                <a href="https://sourcegraph.com/search" className="btn btn-primary">
                                    Start searching now <ArrowRightIcon />
                                </a>
                            </div>
                            <div className="bg-white mt-5 login-section">
                                <h2 className="get-started-page__search-headings">
                                    Create a free Sourcegraph Cloud account to search your private code
                                </h2>
                                <a
                                    href="https://sourcegraph.com/.auth/github/login?pc=https%3A%2F%2Fgithub.com%2F%3A%3Ae917b2b7fa9040e1edd4&redirect=%2Fwelcome"
                                    className="btn github custom-btn"
                                >
                                    <img
                                        src="../external-logos/GitHub-Mark-Light-32px.png"
                                        width="30"
                                        height="30"
                                        className="mr-3"
                                    />
                                    Continue with GitHub
                                </a>
                                <a
                                    href="https://sourcegraph.com/.auth/gitlab/login?pc=https%3A%2F%2Fgitlab.com%2F%3A%3A013395a61a639f4c3eb3668b89c96039637a86ebb6831f1e141627df3d55384d&redirect=%2Fwelcome"
                                    className="btn gitlab custom-btn"
                                >
                                    <img
                                        src="../external-logos/gitlab-mark.svg"
                                        width="32"
                                        height="32"
                                        className="mr-3"
                                    />
                                    Continue with GitLab
                                </a>
                                <p className="small-font my-3">
                                    Or,{' '}
                                    <a
                                        href="https://sourcegraph.com/sign-up?_ga=2.155066808.1628120401.1642532503-600077800.1642532503&showEmail=true"
                                        title="continue with email"
                                        className="btn"
                                    >
                                        continue with email
                                    </a>
                                </p>
                                <p className="small-font my-3">
                                    By registering, you agree to our{' '}
                                    <a href="/terms" className="btn">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="/privacy" className="btn">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                                <hr />
                                <p className="small-font">
                                    Already have an account?{' '}
                                    <a
                                        href="https://sourcegraph.com/sign-in"
                                        title="Search public code with Sourcegraph Cloud"
                                        className="btn"
                                    >
                                        Log in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CloudPage
