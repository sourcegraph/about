import { Link } from 'gatsby'
import * as React from 'react'
import CheckIcon from 'mdi-react/CheckIcon'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { TrySourcegraph } from '../components/TrySourcegraph'

const title = 'Sourcegraph - Support'
const description = 'Sourcegraph support details for each pricing tier.'
const liClassName = 'list-group-item bg-transparent border-0'
const checkClassName = 'icon-inline support-plan-feature__icon-true'
const nocheckClassName = 'icon-inline support-plan-feature__icon-false'

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="text-dark">
            <Helmet>
                <title>{title}</title>
                <meta name="twitter:title" content={title} />
                <meta property="og:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta property="og:description" content={description} />
                <meta name="description" content={description} />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>
            <div className="pricing-page mt-2">
                <ContentSection className="hero-section text-center py-5">
                    <h1 className="display-2 font-weight-bold">Sourcegraph Support</h1>
                    <p>See <Link to="/pricing">Pricing</Link> to learn more about these tiers.</p>
                </ContentSection>
                <div className="container-fluid pricing-page__plans">
                    <div className="row pt-4">
                        <div className="col-md-4 mx-auto mb-4">
                            <div className="support-plan card">
                                <div className="card-body">
                                    <h2 className="card-title mt-3 mb-1 text-center support-plan__title">Free</h2>
                                    <a className="support-plan__button btn btn-outline-primary w-100 justify-content-center text-center d-inline-flex" href="https://sourcegraph.com/subscriptions/new">Deploy</a>
                                </div>
                                <ol className="list-group support-plan-feature list-group-flush py-3">
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Community support on our <Link to="https://github.com/sourcegraph/sourcegraph/issues">public issue tracker</Link></li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Email support</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Support during working hours (all North American timezones)</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />48 hour response time* to critical issues</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />99.5% uptime (managed instances only)</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Initial implementation support on architecture, deployment, configuration, and rollout</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Shared Slack channel for feedback and communication (available)</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Dedicated customer engineer assigned to you (available) <br />&nbsp;</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-4 mx-auto mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title mt-3 mb-1 text-center support-plan__title">Team</h2>
                                    <a className="support-plan__button btn btn-success w-100 justify-content-center text-center d-inline-flex" href="/contact/request-info/?form_submission_source=support-enterprise">Buy now</a>
                                </div>
                                <ol className="list-group support-plan-feature list-group-flush py-3">
                                    <li className="list-group-item bg-transparent border-0"><CheckIcon className={checkClassName} /> Community support on our <Link to="https://github.com/sourcegraph/sourcegraph/issues">public issue tracker</Link></li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Email support</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Support during working hours (all North American timezones)</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> 48 hour response time* to critical issues</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />99.5% uptime (managed instances only)</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Initial implementation support on architecture, deployment, configuration, and rollout</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Shared Slack channel for feedback and communication (available)</li>
                                    <li className={`${liClassName} pricing-plan-feature__value-false`}><CheckIcon className={nocheckClassName} />Dedicated customer engineer assigned to you (available) <br />&nbsp;</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-4 mx-auto mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title mt-3 mb-1 text-center support-plan__title">Enterprise</h2>
                                    <a className="support-plan__button btn btn-outline-primary w-100 justify-content-center text-center d-inline-flex" href="https://docs.sourcegraph.com#quickstart-guide">Contact us</a>
                                </div>
                                <ol className="list-group support-plan-feature list-group-flush py-3">
                                    <li className="list-group-item bg-transparent border-0"><CheckIcon className={checkClassName} /> Community support on our <Link to="https://github.com/sourcegraph/sourcegraph/issues">public issue tracker</Link></li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Email support</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Support during working hours (all North American timezones)</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> 24 hour response time* to critical issues</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> 99.5% uptime (managed instances only)</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Initial implementation support on architecture, deployment, configuration, and rollout</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Shared Slack channel for feedback and communication (available, <Link to="/contact/request-info/?form_submission_source=pricing-enterprise">contact us</Link>)</li>
                                    <li className={liClassName}><CheckIcon className={checkClassName} /> Dedicated customer engineer assigned to you (available, <Link to="/contact/request-info/?form_submission_source=pricing-enterprise">contact us</Link>)</li>
                                </ol>
                            </div>
                        </div>
                        <p>* We will use commercially reasonable efforts to adhere to the SLAs and uptime defined above. SLAs apply to tickets submitted via email to <Link to="mailto:support@sourcegraph.com">support@sourcegraph.com</Link>.</p>
                    </div>
                    <hr className="my-4" />
                </div>

            </div>
            <TrySourcegraph className="my-6" />
        </div>
    </Layout>
)) as React.FunctionComponent<any>
