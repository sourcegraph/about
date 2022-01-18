import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'

export const GetStartedPage: React.FunctionComponent<PageProps> = props => {
    const buttonRef = React.useRef()
    const newContainerLeftRef = React.useRef()
    const newContainerRightRef = React.useRef()
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
        } else {
            // Toggle sg-cloud column
            column.classList.remove('d-none')
            column.classList.add('expanded')
            column.classList.replace('col-lg-6', 'col-lg-12')
            // Toggle New container
            newContainerRightRef.current.classList.replace('d-none', 'd-inline-block')
            // Toggle arrow image
            buttonRef.current.classList.toggle('d-none')
            // Toggle other column
            const selfHostedSection = document.querySelector('#sg-self-hosted')
            selfHostedSection.classList.toggle('d-none')
            selfHostedSection.classList.add('high')
        }
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
        } else {
            // Toggle sg-cloud column
            column.classList.remove('expanded')
            column.classList.replace('col-lg-12', 'col-lg-6')
            // Toggle New container
            newContainerRightRef.current.classList.replace('d-inline-block', 'd-none')
            // Toggle arrow image
            buttonRef.current.classList.toggle('d-none')
            // Toggle other column
            const selfHostedSection = document.querySelector('#sg-self-hosted')
            selfHostedSection.classList.toggle('d-none')
            // To fix issue that the sg-cloud section is not high enough when it gets visible when going back to the delpoyment methods
            setTimeout(() => {
                selfHostedSection.classList.remove('high')
            }, 0)
        }
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
                                className="btn btn-primary temporary my-2"
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
                                        sourcegraph/server:3.35.1
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

                    <div id="sg-cloud" className="col-lg-6 column bg-gradient-blue-green">
                        <div className="original-container">
                            <div className="btn back-link" onClick={goBack} ref={node => (backBtn.current = node)}>
                                <ArrowLeftIcon />
                                <span>Deployment Options</span>
                            </div>
                            <h1 className="display-2 title">Sourcegraph Cloud</h1>
                            <p>Sync your code from GitHub.com or GitLab.com. No technical setup is required.</p>
                            <div className="small-title">Best For</div>
                            <p>Individual developers (small teams coming soon)</p>
                            <p>Search across your repositories and the open-source universe.</p>
                            <p className="small-font temporary">
                                Already have a Sourcegraph Cloud account?{' '}
                                <a
                                    href="https://sourcegraph.com/sign-in"
                                    title="Search public code with Sourcegraph Cloud"
                                    className="btn sign-in-link"
                                >
                                    Sign in
                                </a>
                            </p>
                            <span
                                className="btn btn-primary temporary my-2"
                                onClick={expandColumn}
                                ref={node => (buttonRef.current = node)}
                            >
                                Get started for free <ArrowRightIcon className="mobileIcon" />
                            </span>
                        </div>

                        <div className="new-container d-none" ref={node => (newContainerRightRef.current = node)}>
                            <div className="bg-white login-section">
                                <h2 className="get-started-page__search-headings">Search open source code</h2>
                                <p>No account required.</p>
                                <a href="https://sourcegraph.com/search" className="btn btn-primary">
                                    Start searching now <ArrowRightIcon />
                                </a>
                            </div>
                            <div className="bg-white mt-5 login-section">
                                <h2 className="get-started-page__search-headings">
                                    Create a free Cloud account to search your private code
                                </h2>
                                <a
                                    href="https://sourcegraph.com/.auth/github/login?pc=https%3A%2F%2Fgithub.com%2F%3A%3Ae917b2b7fa9040e1edd4&redirect=%2Fwelcome"
                                    className="btn github"
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
                                    className="btn gitlab"
                                >
                                    <img
                                        src="../external-logos/gitlab-mark.svg"
                                        width="32"
                                        height="32"
                                        className="mr-3"
                                    />
                                    Continue with GitLab
                                </a>
                                <p className="small-font">
                                    Or,{' '}
                                    <a
                                        href="https://sourcegraph.com/sign-up"
                                        title="continue with email"
                                        className="btn"
                                    >
                                        continue with email
                                    </a>
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

export default GetStartedPage
