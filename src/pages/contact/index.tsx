import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection, ContentPage, Icon, Layout } from '@components'

const title = 'Sourcegraph - Contact Sourcegraph'
const description = 'Contact a real human being on our team.'

const ContactHome: FunctionComponent = () => (
    <Layout
        meta={{
            title,
            description,
        }}
    >
        <ContentPage
            title={title}
            description={description}
            className="text-dark"
            titleClassName="display-2 font-weight-bold"
        >
            <ContentSection className="pt-6 pb-2">
                <div className="row">
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Product support</h5>
                            <div className="card-body">
                                <p className="card-text">For help using Sourcegraph:</p>
                            </div>
                            <div className="list-group list-group-flush">
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="https://github.com/sourcegraph/sourcegraph/issues"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon name="GitHub" size={21} className="mr-1" /> File a public issue
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:support@sourcegraph.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon name="EmailSharp" size={21} className="mr-1" /> Email support@sourcegraph.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Sales</h5>
                            <div className="card-body">
                                <p className="card-text">For information about products and purchasing:</p>
                                <Link href="/demo" passHref={true}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="btn btn-outline-primary stretched-link">Contact sales</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Jobs</h5>
                            <div className="card-body">
                                <p className="card-text">For information about joining our team:</p>
                                <a
                                    href="https://boards.greenhouse.io/sourcegraph91"
                                    className="btn btn-outline-primary stretched-link"
                                >
                                    See career opportunities
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Everything else</h5>
                            <div className="list-group list-group-flush">
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:hi@sourcegraph.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon name="EmailSharp" size={21} className="mr-1" /> hi@sourcegraph.com
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="https://twitter.com/sourcegraph"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon name="Twitter" size={21} className="mr-1" /> @sourcegraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://github.com/sourcegraph"
                                    rel="noreferrer"
                                >
                                    <Icon name="GitHub" size={21} className="mr-1" /> github.com/sourcegraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://www.linkedin.com/company/sourcegraph"
                                    rel="noreferrer"
                                >
                                    <Icon name="LinkedIn" size={21} className="mr-1" /> Sourcegraph on LinkedIn
                                </a>
                                <div className="list-group-item d-flex p-relative">
                                    <Icon name="RoomSharp" size={21} className="mr-1" />
                                    <div>
                                        Sourcegraph
                                        <br />
                                        981 Mission St
                                        <br />
                                        San Francisco, CA 94103 (USA)
                                        <br />
                                        <small>
                                            <a
                                                target="_blank"
                                                href="https://goo.gl/maps/LqTFnekUjRb9N12q6"
                                                rel="noreferrer"
                                            >
                                                View on Google Maps
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)

export default ContactHome
