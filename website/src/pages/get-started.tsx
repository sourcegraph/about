import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import { BlogPost, FeaturedBlogPosts } from '../components/FeaturedBlogPosts'
import { Jumbotron } from '../components/Jumbotron'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../components/product/EnterpriseReadySolution'
import { GitLabIntegrationSection } from '../components/product/GitLabIntegrationSection'
import { IntegratesWithSection } from '../components/product/IntegratesWithSection'
import { CarouselColors, Testimonial, TestimonialCarousel } from '../components/TestimonialCarousel'
import { Tweets } from '../components/Tweets'
import { YouTube } from '../components/YouTube'
import { ContactPresalesSupportAction } from '../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../css/components/actions/ViewDeveloperDocumentationAction'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'TODO(sqs)',
            description: 'TODO(sqs)',
            image: 'TODO(sqs)',
        }}
        minimal={true}
    >
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="display-1 font-weight-bold">Get started</h1>

                    <h2 className="display-4 font-weight-bold">Quickstart (self-hosted)</h2>
                    <p>Run this to launch Sourcegraph on your local machine. All of your code stays local.</p>
                    <pre
                        className="code border bg-light p-2 mb-0"
                        style={{ whiteSpace: 'pre-wrap', fontSize: '0.8rem' }}
                    >
                        <code>
                            docker run<span className="virtual-br"></span> --publish 7080:7080 --publish
                            127.0.0.1:3370:3370 --rm<span className="virtual-br"></span> --volume
                            ~/.sourcegraph/config:/etc/sourcegraph<span className="virtual-br"></span> --volume
                            ~/.sourcegraph/data:/var/opt/sourcegraph<span className="virtual-br"></span>{' '}
                            sourcegraph/server:3.17.0
                        </code>
                    </pre>

                    <h2 className="h5 mt-4">All deployment options</h2>
                    <p>
                        <a href="https://docs.sourcegraph.com" className="d-flex align-items-center py-1 mt-1">
                            Documentation <ExternalLinkIcon className="icon-inline ml-1 small" />
                        </a>
                    </p>

                    <h2 className="h5 mt-4">Want help?</h2>
                    <div className="pt-1">
                        <button className="btn btn-sm btn-outline-secondary">
                            Schedule time with a Sourcegraph engineer
                        </button>
                        <br />
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
)) as React.FunctionComponent<any>
