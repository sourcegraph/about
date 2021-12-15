import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import FileDocumentMultipleOutlineIcon from 'mdi-react/FileDocumentMultipleOutlineIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'

export const GetStartedPage: React.FunctionComponent<PageProps> = props => {
    const imageRef = React.useRef()
    const newContainerLeftRef = React.useRef()
    const newContainerRightRef = React.useRef()
    const backBtn = React.useRef()

    const expandColumn = e => {
        const column = e.target.parentNode.parentNode.parentNode
        const id = column.getAttribute('id')

        if (id == 'sg-self-hosted') {
            // Toggle sg-self-hosted column
            column.classList.remove('d-none')
            column.classList.add('expanded')
            column.classList.replace('col-lg-6', 'col-lg-12')
            // Toggle New container
            newContainerLeftRef.current.classList.replace('d-none', 'd-inline-block')
            // Toggle arrow image
            imageRef.current.classList.toggle('d-none')
            // Toggle other column
            document.querySelector('#sg-cloud').classList.toggle('d-none')
        } else {
            // Toggle sg-cloud column
            column.classList.remove('d-none')
            column.classList.add('expanded')
            column.classList.replace('col-lg-6', 'col-lg-12')
            // Toggle New container
            newContainerRightRef.current.classList.replace('d-none', 'd-inline-block')
            // Toggle arrow image
            imageRef.current.classList.toggle('d-none')
            // Toggle other column
            document.querySelector('#sg-self-hosted').classList.toggle('d-none')
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
            imageRef.current.classList.toggle('d-none')
            // Toggle other column
            document.querySelector('#sg-cloud').classList.toggle('d-none')
        } else {
            // Toggle sg-cloud column
            column.classList.remove('expanded')
            column.classList.replace('col-lg-12', 'col-lg-6')
            // Toggle New container
            newContainerRightRef.current.classList.replace('d-inline-block', 'd-none')
            // Toggle arrow image
            imageRef.current.classList.toggle('d-none')
            // Toggle other column
            document.querySelector('#sg-self-hosted').classList.toggle('d-none')
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
                title: 'Sourcegraph | Sourcegraph Get started',
                description: '',
                image: 'https://about.sourcegraph.com/sourcegraph-og.png',
            }}
            className="get-started-page"
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
        >
            <div className="cta-container">
                <div className="row">
                    <div id="sg-self-hosted" className="col-lg-6 column bg-gradient-blue-purple">
                        <div className="original-container">
                            <div className="btn back-link" onClick={goBack} ref={node => (backBtn.current = node)}>
                                <ArrowLeftIcon />
                                <span>Deployment Options</span>
                            </div>
                            <h1 className="display-2 title">
                                Sourcegraph Self-Hosted
                                <img
                                    src="../white-arrow-black-bg-circle.svg"
                                    className="column-hover-content-temporary"
                                    onClick={expandColumn}
                                    ref={node => (imageRef.current = node)}
                                />
                            </h1>
                            <span className="badge">
                                <img src="../star.svg" />
                                <span>Most Popular</span>
                            </span>
                            <p>
                                Deploy and control Sourcegraph in your own infrastructure, or use Docker to install
                                locally. Get started for free.
                            </p>
                            <div className="small-title column-hover-content">Best For</div>
                            <p className="column-hover-content">Teams and enterprises</p>
                            <p className="column-hover-content">
                                Collaborate with your team(s) on any code host (including private hosts) and access
                                advanced security functionality.
                            </p>
                        </div>

                        <div className="new-container d-none" ref={node => (newContainerLeftRef.current = node)}>
                            <div className="col-lg-6 get-started-page__local">
                                <div className="get-started-page__installtext" onClick={copyText}>
                                    <h2 className="get-started-page__search-headings">Install Sourcegraph locally</h2>
                                    <span id="installText">
                                        docker run <br />
                                        --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm <br />
                                        --volume ~/.sourcegraph/config:/etc/sourcegraph <br />
                                        --volume ~/.sourcegraph/data:/var/opt/sourcegraph <br />
                                        sourcegraph/server:3.34.2
                                    </span>
                                    <span className="get-started-page__copytext">
                                        <FileDocumentMultipleOutlineIcon className="copytext icon-inline ml-1 medium" />
                                    </span>
                                </div>
                                <a
                                    className="btn d-inline-flex"
                                    href="https://info.sourcegraph.com/talk-to-a-developer"
                                >
                                    Talk to an engineer <ArrowRightIcon />
                                </a>
                                <a
                                    className="btn d-inline-flex"
                                    href="https://docs.sourcegraph.com/?_ga=2.201374673.1399262176.1639413453-1178026362.1636406090"
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
                            <h1 className="display-2 title">
                                Sourcegraph Cloud
                                <img
                                    src="../white-arrow-black-bg-circle.svg"
                                    className="column-hover-content-temporary"
                                    onClick={expandColumn}
                                    ref={node => (imageRef.current = node)}
                                />
                            </h1>
                            <p>
                                Sync your code from GitHub.com or GitLab.com. No technical setup is required. Sign up
                                for free.
                            </p>
                            <div className="small-title column-hover-content">Best For</div>
                            <br />
                            <p className="column-hover-content">Individual developers.</p>
                            <p className="column-hover-content">
                                Search across your repositories and the open-source universe.
                            </p>
                            <p className="column-hover-content small-font">
                                Already have a Sourcegraph Cloud account?{' '}
                                <a
                                    href="https://sourcegraph.com/sign-in"
                                    title="Search public code with Sourcegraph Cloud"
                                    className="sign-in-link"
                                >
                                    Sign in
                                </a>
                            </p>
                        </div>
                        <div className="new-container d-none" ref={node => (newContainerRightRef.current = node)}>
                            <div className="col-lg-6">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GetStartedPage
