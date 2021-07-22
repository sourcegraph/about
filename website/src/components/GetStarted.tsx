import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import FileDocumentMultipleOutlineIcon from 'mdi-react/FileDocumentMultipleOutlineIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import React from 'react'

interface GetStartedProps {
    className?: string
}

export default class GetStarted extends React.PureComponent<GetStartedProps> {
    public copyText = () => {
        const copyText = document.getElementById('installText').textContent;
        const textArea = document.createElement('textarea');
        document.getElementById('installText').style.backgroundColor = '#ccedff';
        textArea.textContent = copyText;
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
    public render(): JSX.Element | null {
        return (
            <div className={`get-started ${this.props.className || ''}`} id="get-started">
                <div className="container">
                    <h1 className="display-2 font-weight-bold mb-5">Get started with Sourcegraph for free</h1>
                    <div className="row">
                        <div className="col-lg-6 get-started__local">
                            <h2 className="get-started__search-headings">Search your own code</h2>
                            <p>
                                <span className="h5">Quickstart:</span> Run this to launch Sourcegraph locally:
                            </p>
                            <div className="get-started__installtext border boxshadow" onClick={() => this.copyText()}>
                                <span id="installText">docker run <br />
                                    --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm <br />
                                    --volume ~/.sourcegraph/config:/etc/sourcegraph <br />
                                    --volume ~/.sourcegraph/data:/var/opt/sourcegraph <br />
                                    sourcegraph/server:3.30.0</span>
                                <span className="get-started__copytext">
                                    <FileDocumentMultipleOutlineIcon
                                        className="copytext icon-inline ml-1 medium"
                                    />
                                </span>
                            </div>
                            <h2 className="h5 mt-4">Deploy to a server or cluster</h2>
                            <p>
                                See{' '}
                                <a href="https://docs.sourcegraph.com" className="d-inline-flex align-items-center">
                                    deployment documentation
                                </a>{' '}
                                for information about Docker deployments, Kubernetes clusters, and other clusters.
                            </p>

                            <h2 className="h5 mt-4">Want help?</h2>
                            <div className="pt-1">
                                <a className="btn btn-sm btn-outline-primary mb-2" href="https://docs.sourcegraph.com">
                                    Docs <ExternalLinkIcon className="icon-inline ml-1 small" />{' '}
                                </a>{' '}
                            </div>
                            <div className="pt-1">Contact us: <a href="https://info.sourcegraph.com/talk-to-a-developer">Talk to an engineer</a></div>
                        </div>
                        <div className="col-lg-6 get-started__search">
                            <h2 className="get-started__search-headings">Search open source code</h2>
                            <p>Search open source code or your own public repositories now.</p>
                            <div className="get-started__action boxshadow">
                                Sourcegraph Cloud searches top repositories from GitHub and GitLab and will index any
                                public repository you specify.
                                <br />
                                <a
                                    className="btn btn-sm btn-primary text-light mt-3"
                                    href="https://sourcegraph.com/search"
                                >
                                    Search open source code <ArrowRightIcon className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
