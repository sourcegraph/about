import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'

export const GetStartedPage: React.FunctionComponent<PageProps> = props => {
    const buttonRef = React.useRef()
    const newContainerLeftRef = React.useRef()
    const backBtn = React.useRef()

    const expandColumn = e => {
        const column = e.target.parentNode.parentNode
        const id = column.getAttribute('id')

        if (id == 'sg-self-hosted') {
            // Toggle sg-self-hosted column
            column.classList.remove('d-none')
            column.classList.add('expanded')
            column.classList.replace('col-lg-6', 'col-lg-12')
            // Toggle New container
            newContainerLeftRef.current.classList.replace('d-none', 'd-inline-block')
            // Toggle arrow image
            buttonRef.current.classList.toggle('d-none')
            // Toggle other column
            const cloudSection = document.querySelector('#sg-cloud')
            cloudSection.classList.toggle('d-none')
            cloudSection.classList.add('high')
        } /* else {
            // Toggle sg-cloud column
            column.classList.remove('d-none')
            column.classList.add('expanded')
            column.classList.replace('col-lg-6', 'col-lg-12')
            // Toggle arrow image
            buttonRef.current.classList.toggle('d-none')
            // Toggle other column
            document.querySelector('#sg-self-hosted').classList.toggle('d-none')
        }*/
    }

    const goBack = e => {
        const targetNode = e.target.parentNode.parentNode
        let column

        if (targetNode.id == 'sg-self-hosted' || targetNode.id == 'sg-cloud') {
            column = targetNode
        } else if (targetNode.parentNode.id == 'sg-self-hosted' || targetNode.parentNode.id == 'sg-cloud') {
            column = targetNode.parentNode
        } else if (
            targetNode.parentNode.parentNode.id == 'sg-self-hosted' ||
            targetNode.parentNode.parentNode.id == 'sg-cloud'
        ) {
            column = targetNode.parentNode.parentNode
        }

        const id = column.getAttribute('id')

        if (id == 'sg-self-hosted') {
            // Toggle sg-self-hosted column
            column.classList.remove('expanded')
            column.classList.replace('col-lg-12', 'col-lg-6')
            // Toggle New container
            newContainerLeftRef.current.classList.replace('d-inline-block', 'd-none')
            // Toggle arrow image
            buttonRef.current.classList.toggle('d-none')
            // Toggle other column
            const cloudSection = document.querySelector('#sg-cloud')
            cloudSection.classList.toggle('d-none')
            // To fix issue that the sg-cloud section is not high enough when it gets visible when going back to the delpoyment methods
            setTimeout(() => {
                cloudSection.classList.remove('high')
            }, 0)
        } /*else {
            // Toggle sg-cloud column
            column.classList.remove('expanded')
            column.classList.replace('col-lg-12', 'col-lg-6')
            // Toggle arrow image
            buttonRef.current.classList.toggle('d-none')
            // Toggle other column
            document.querySelector('#sg-self-hosted').classList.toggle('d-none')
        }*/
    }

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
                title: 'Choose Your Deployment Model | Get Started with Sourcegraph',
                description:
                    "From Sourcegraph Self-hosted to Sourcegraph Cloud, choose the deployment model that's best for you and get started for free today. ",
                image: 'https://about.sourcegraph.com/sourcegraph-og.png',
            }}
            heroAndHeaderClassName="get-started-page__hero-and-header"
            hero={
                <div className="row">
                    <div className="col-lg-9 column">
                        <h1 className="display-1">What's best for you?</h1>
                        <p className="subTitle">
                            From Amazon to Uber, the world’s best developers use Sourcegraph every day.
                        </p>
                    </div>
                </div>
            }
            hideFooter={true}
            hideGetStartedButton={true}
        >
            <div className="cta-container get-started-page">
                <div className="row">
                    <div id="sg-self-hosted" className="col-lg-6 column bg-gradient-blue-purple">
                        <div className="original-container">
                            <div className="btn back-link" onClick={goBack} ref={node => (backBtn.current = node)}>
                                <ArrowLeftIcon />
                                <span>Deployment Options</span>
                            </div>
                            <h1 className="display-2 title">Sourcegraph Self-Hosted</h1>
                            <span className="badge">
                                <img src="../star.svg" />
                                <span>Most Popular</span>
                            </span>
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
                            <span
                                className="btn btn-primary temporary mt-2"
                                onClick={expandColumn}
                                ref={node => (buttonRef.current = node)}
                            >
                                Get started for free <ArrowRightIcon className="mobileIcon" />
                            </span>
                        </div>

                        <div className="new-container d-none" ref={node => (newContainerLeftRef.current = node)}>
                            <div className="get-started-page__local">
                                <div className="get-started-page__installtext" onClick={copyText}>
                                    <h2 className="get-started-page__search-headings">
                                        Install Sourcegraph locally
                                        <span className="get-started-page__copytext">
                                            <img
                                                src="../copy-text-icon.svg"
                                                className="copytext icon-inline ml-1 medium"
                                            />
                                        </span>
                                    </h2>
                                    <span id="installText">
                                        docker run <br />
                                        --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm <br />
                                        --volume ~/.sourcegraph/config:/etc/sourcegraph <br />
                                        --volume ~/.sourcegraph/data:/var/opt/sourcegraph <br />
                                        sourcegraph/server:3.35.0
                                    </span>
                                </div>
                                <a className="btn" href="https://info.sourcegraph.com/talk-to-a-developer">
                                    Talk to an engineer <ArrowRightIcon />
                                </a>
                                <a
                                    className="btn"
                                    href="https://docs.sourcegraph.com/"
                                >
                                    Deploy to a server or cluster <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="sg-cloud" className="col-lg-6 column bg-gradient-blue-green">
                        <div className="original-container">
                            <div className="btn back-link" onClick={goBack} ref={node => (backBtn.current = node)}>
                                <ArrowLeftIcon />
                                <span>Deployment Options</span>
                            </div>
                            <h1 className="display-2 title">Sourcegraph Cloud</h1>
                            <p>
                                Sync your code from GitHub.com or GitLab.com. No technical setup is required. Sign up
                                for free.
                            </p>
                            <div className="small-title">Best For</div>
                            <p>Individual developers (small teams coming soon)</p>
                            <p>Search across your repositories and the open-source universe.</p>
                            <p className="small-font">
                                Already have a Sourcegraph Cloud account?{' '}
                                <a
                                    href="https://sourcegraph.com/sign-in"
                                    title="Search public code with Sourcegraph Cloud"
                                    className="sign-in-link"
                                >
                                    Sign in
                                </a>
                            </p>
                            <a
                                className="btn btn-primary temporary mt-2"
                                href="https://sourcegraph.com/search"
                                ref={node => (buttonRef.current = node)}
                            >
                                Try it for free <ArrowRightIcon className="mobileIcon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GetStartedPage
