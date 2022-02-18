import * as React from 'react'
import Layout from '../../components/Layout'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import styles from './self-hosted.module.scss'

export const SelfHostedPage: React.FunctionComponent = props => {
    const copyText = () => {
        const copyText = document.getElementById('installText').textContent
        const textArea = document.createElement('textarea')
        document.getElementById('installText').style.backgroundColor = '#ccedff'
        textArea.textContent = copyText
        document.body.append(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
    }

    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Get Started with Sourcegraph Self-Hosted',
                description:
                    'Deploy and control Sourcegraph in your own infrastructure, or use Docker to install locally. Get started for free.',
            }}
            hideFooter={true}
            hideGetStartedButton={true}
        >
            <div className={styles.selfHosted}>
                <div className="row container-xl mx-auto py-5">
                    <div className="col-lg-6 column">
                        <div className="original-container">
                            <a className="btn back-link" href="/get-started">
                                <ArrowLeftIcon />
                                <span>Deployment Options</span>
                            </a>

                            <h1 className="title">Sourcegraph Self-Hosted</h1>

                            <p>
                                Deploy and control Sourcegraph in your own infrastructure, or use Docker to install
                                locally. Get started for free.
                            </p>

                            <div className="small-title">Best For</div>
                            <p>Teams and enterprises</p>

                            <p>
                                Collaborate with your team on any code host (including private hosts) and access
                                advanced security functionality.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 column">
                        <div className="new-container">
                            <div className="get-started-page__local">
                                <div className="get-started-page__installtext" onClick={copyText}>
                                    <h2 className="get-started-page__search-headings">
                                        Install Sourcegraph locally
                                        <span className="get-started-page__copytext">
                                            <img
                                                src="/copy-text-icon.svg"
                                                className="copytext icon-inline ml-1 medium"
                                            />
                                        </span>
                                    </h2>
                                    <span id="installText">
                                        docker run <br />
                                        --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm <br />
                                        --volume ~/.sourcegraph/config:/etc/sourcegraph <br />
                                        --volume ~/.sourcegraph/data:/var/opt/sourcegraph <br />
                                        sourcegraph/server:3.36.3
                                    </span>
                                </div>
                                <a className="btn" href="https://info.sourcegraph.com/talk-to-a-developer">
                                    Talk to an engineer <ArrowRightIcon />
                                </a>
                                <a className="btn" href="https://docs.sourcegraph.com/">
                                    Deploy to a server or cluster <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SelfHostedPage
