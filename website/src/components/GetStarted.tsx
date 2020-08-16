import { Link } from 'gatsby'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ClipboardArrowLeftOutlineIcon from 'mdi-react/ClipboardArrowLeftOutlineIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import React from 'react'

interface GetStartedProps {
    className?: string
}

export default class GetStarted extends React.PureComponent<GetStartedProps> {
    public copyDockerInstall = () => {
        const el = this.textArea
        el.select()
        document.execCommand('copy')
    }
    public render(): JSX.Element | null {
        return (
            <div className={`get-started mt-6 ${this.props.className || ''}`} id="get-started">
                <div className="container">
                    <h1 className="display-2 font-weight-bold mb-5">Get started with Sourcegraph for free</h1>
                    <div className="row">
                        <div className="col-lg-6 get-started__local">
                            <h2 className="get-started__search-headings">Search your own code</h2>
                            <p>
                                <span className="h5">Quickstart:</span> Run this to launch Sourcegraph locally:
                            </p>
                            <div className="get-started__installtext">
                                <textarea
                                    className="border boxshadow"
                                    spellcheck="false"
                                    rows="5"
                                    onClick={() => this.copyDockerInstall()}
                                    ref={textarea => (this.textArea = textarea)}
                                    value="
                                    docker run &#13;
                                    --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm &#13;
                                    --volume ~/.sourcegraph/config:/etc/sourcegraph &#13;
                                    --volume ~/.sourcegraph/data:/var/opt/sourcegraph &#13;
                                    sourcegraph/server:3.18.0
                                    "
                                    aria-label="A Docker run command to start a local Sourcegraph instance"
                                />
                                <span className="get-started__copytext">
                                    <ClipboardArrowLeftOutlineIcon
                                        onClick={() => this.copyDockerInstall()}
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
                                <Link className="btn btn-sm btn-outline-primary mb-2" to="/contact/request-info">
                                    Schedule time with a Sourcegraph engineer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 get-started__search">
                            <h2 className="get-started__search-headings">Search public code</h2>
                            <p>Search public code or your own public repositories now.</p>
                            <div className="get-started__action boxshadow">
                                Sourcegraph Cloud searches top repositories from GitHub and GitLab and will index any
                                public repository you specify.
                                <br />
                                <a
                                    className="btn btn-sm btn-primary text-light mt-3"
                                    href="https://sourcegraph.com/search"
                                >
                                    Try Sourcegraph Cloud now <ArrowRightIcon className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
