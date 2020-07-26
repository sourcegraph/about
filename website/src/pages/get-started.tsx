import { Link } from 'gatsby'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ClipboardArrowLeftOutlineIcon from 'mdi-react/ClipboardArrowLeftOutlineIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'

export default class GetStarted extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    public copyDockerInstall = () => {
        const el = this.textArea
        el.select()
        document.execCommand('copy')
    }
    public render(): JSX.Element | null {
        return (
            <Layout
                location={this.props.location}
                meta={{
                    title: 'Get started with Sourcegraph',
                    description: 'Get started with Sourcegraph',
                    image: '/favicon.png',
                }}
                minimal={true}
            >
                <div className="get-started-page form-page container mt-5">
                    <h1 className="display-2 font-weight-bold mb-5">Get started with Sourcegraph for free</h1>
                    <div className="row">
                        <div className="col-lg-6 get-started-page__local">
                            <h3>Search your own code</h3>
                            <p>
                                <span className="h5">Quickstart:</span> Run this to launch Sourcegraph locally:
                            </p>
                            <div className="get-started-page__installtext">
                                <textarea
                                    className="border"
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
                                />
                                <a className="get-started-page__copytext" href="#">
                                    <ClipboardArrowLeftOutlineIcon
                                        onClick={() => this.copyDockerInstall()}
                                        className="copytext icon-inline ml-1 medium"
                                    />
                                </a>
                            </div>
                            <h2 className="h5 mt-4">Deploy to a server or cluster</h2>
                            <p>
                                See{' '}
                                <a
                                    href="https://docs.sourcegraph.com"
                                    className="d-inline-flex align-items-center py-1 mt-1"
                                >
                                    deployment documentation
                                </a>{' '}
                                for information about Docker deployments, Kubernetes clusters, and other clusters.
                            </p>

                            <h2 className="h5 mt-4">Want help?</h2>
                            <div className="pt-1">
                                <Link className="btn btn-sm btn-outline-primary mb-2" to="https://docs.sourcegraph.com">
                                    Docs <ExternalLinkIcon className="icon-inline ml-1 small" />{' '}
                                </Link>{' '}
                                <Link className="btn btn-sm btn-outline-primary mb-2" to="/contact/request-info">
                                    Schedule time with a Sourcegraph engineer
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 get-started-page__search">
                            <h3>Search public code</h3>
                            <p>Search public code or your own public repositories now.</p>
                            <div className="get-started-page__action">
                                Sourcegraph Cloud searches top repositories from GitHub and Gitlab and will index any
                                public repository you specify.
                                <a
                                    className="btn btn-sm btn-primary text-light mt-3"
                                    href="https://sourcegraph.com/search"
                                >
                                    Try Sourcegraph Cloud now <ArrowRightIcon className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 pt-5">
                        <CustomerLogosSection className="pt-5 pb-6 mb-2" />
                    </div>
                </div>
            </Layout>
        )
    }
}
