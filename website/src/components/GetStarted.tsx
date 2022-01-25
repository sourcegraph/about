import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import FileDocumentMultipleOutlineIcon from 'mdi-react/FileDocumentMultipleOutlineIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import React from 'react'

interface GetStartedProps {
    className?: string
}

export default class GetStarted extends React.PureComponent<GetStartedProps> {
    public copyText = () => {
        const copyText = document.getElementById('installText').textContent
        const textArea = document.createElement('textarea')
        document.getElementById('installText').style.backgroundColor = '#ccedff'
        textArea.textContent = copyText
        document.body.append(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
    }
    public render(): JSX.Element | null {
        return (
            <div className={`get-started ${this.props.className || ''}`} id="get-started">
                <div className="container">
                    <h1 id="get-started" className="display-2 font-weight-bold mb-5">
                        Self-hosted deployment
                    </h1>
                    <div className="row">
                        <div className="col-lg-6 get-started__local">
                            <h2 className="get-started__search-headings">Install Sourcegraph locally:</h2>
                            <div className="get-started__installtext border boxshadow" onClick={() => this.copyText()}>
                                <span id="installText">
                                    docker run <br />
                                    --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm <br />
                                    --volume ~/.sourcegraph/config:/etc/sourcegraph <br />
                                    --volume ~/.sourcegraph/data:/var/opt/sourcegraph <br />
                                    sourcegraph/server:3.36.2
                                </span>
                                <span className="get-started__copytext">
                                    <FileDocumentMultipleOutlineIcon className="copytext icon-inline ml-1 medium" />
                                </span>
                            </div>
                            <p>
                                <a className="d-inline-flex mt-5 font-weight-bold" href="https://docs.sourcegraph.com">
                                    Deploy to a server or cluster <ArrowRightIcon className="ml-1" />
                                </a>
                            </p>
                            <h2 className="h5 d-inline-flex mt-4 mr-4">Want help?</h2>
                            <a
                                className="btn btn-primary d-inline-flex"
                                href="https://info.sourcegraph.com/talk-to-a-developer"
                            >
                                Talk to an engineer <ArrowRightIcon className="ml-1" />
                            </a>
                        </div>

                        <div className="col-lg-6 get-started__search">
                            <h2 className="get-started__search-headings">Why choose self-hosted?</h2>
                            <ul className="font-size-medium">
                                <li>Free for up to 10 users</li>
                                <li>Collaborate with your team across infinite repositories</li>
                                <li>Connect to private code hosts (and local installs)</li>
                                <li>Free trial for enterprise features</li>
                            </ul>
                            <a className="d-inline-flex font-weight-bold" href="/get-started">
                                Learn about self-hosted vs. Cloud features <ArrowRightIcon className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
