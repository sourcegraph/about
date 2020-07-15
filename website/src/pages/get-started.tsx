import { Link } from 'gatsby'
import ClipboardArrowLeftOutlineIcon from 'mdi-react/ClipboardArrowLeftOutlineIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import * as React from 'react'
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
                <div className="form-page container mt-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="display-1 font-weight-bold">Get started with Sourcegraph</h1>

                            <h2 className="h5 mt-4">Quickstart</h2>
                            <p>Run this to launch Sourcegraph on your local machine:</p>
                            <div className="installtext">
                                <textarea
                                    className="border p-2"
                                    spellcheck="false"
                                    rows="5"
                                    onClick={() => this.copyDockerInstall()}
                                    ref={textarea => (this.textArea = textarea)}
                                    value="
                                    docker run &#13;
                                    --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm &#13;
                                    --volume ~/.sourcegraph/config:/etc/sourcegraph &#13;
                                    --volume ~/.sourcegraph/data:/var/opt/sourcegraph &#13;
                                    sourcegraph/server:3.17.3
                                    "
                                />
                                <a className="copytext" href="#">
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
                                <Link className="btn btn-sm btn-outline-primary" to="/contact/request-info">
                                    Request time with a Sourcegraph engineer
                                </Link>
                                <a href="https://docs.sourcegraph.com" className="d-flex align-items-center py-1 mt-1">
                                    Docs <ExternalLinkIcon className="icon-inline ml-1 small" />
                                </a>
                            </div>

                            <hr className="my-5" />

                            <h2 className="h5">Just need to search public code?</h2>
                            <p>
                                Use <a href="https://sourcegraph.com/search">Sourcegraph.com</a>. Tip:{' '}
                                <code className="border rounded text-nowrap">repo:github.com/my/repo foo</code>.
                            </p>
                        </div>
                        <div className="col-lg-6 pt-5">
                            <CustomerLogosSection className="pt-5 pb-6 mb-2" />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
