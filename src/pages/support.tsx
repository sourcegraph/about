import { FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'
import Link from 'next/link'

import { ContentSection, Layout, TrySourcegraph } from '@components'

const CLASS_NAMES = {
    featureOffered: 'list-group-item bg-transparent border-0',
    featureNotOffered: 'list-group-item bg-transparent border-0 text-muted',
    featureChecked: 'icon-inline text-success',
    featureNotChecked: 'icon-inline invisible',
}

const SUPPORT_FEATURES = {
    communitySupport: 'Community support on our ',
    publicIssueTracker: 'public issue tracker',
    emailSupport: 'Email support',
    workingHoursSupport: 'Support during working hours (all North American timezones)',
    responseTime48: '48 hour response time* to critical issues',
    responseTime24: '24 hour response time* to critical issues',
    uptime: '99.5% uptime (managed instances only)',
    implementationSupport: 'Initial implementation support on architecture, deployment, configuration, and rollout',
    sharedSlackChannel: 'Shared Slack channel for feedback and communication (available)',
    sharedSlackChannelContact: 'Shared Slack channel for feedback and communication (available, ',
    customerEngineer: 'Dedicated customer engineer assigned to you (available)',
    customerEngineerContact: 'Dedicated customer engineer assigned to you (available, ',
}

const Support: FunctionComponent = () => (
    <Layout
        className="text-dark"
        meta={{
            title: 'Sourcegraph - Support',
            description: 'Sourcegraph support details for each pricing tier.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
    >
        <div className="mt-2">
            <ContentSection className="hero-section text-center py-5">
                <h1 className="display-2 font-weight-bold">Sourcegraph Support</h1>
                <p>
                    See <Link href="/pricing">Pricing</Link> to learn more about these tiers.
                </p>
            </ContentSection>
            <div className="container-fluid my-0 mx-auto max-w-1000">
                <div className="row pt-4">
                    <div className="d-flex col-md-4 mx-auto mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h1 className="card-title mt-3 mb-3 text-center">Free</h1>
                                <a
                                    className="font-size-base min-w-150 btn btn-outline-primary w-100 justify-content-center text-center d-inline-flex"
                                    href="https://docs.sourcegraph.com#quickstart-guide"
                                >
                                    Deploy
                                </a>
                            </div>
                            <ol className="mt-4 list-group list-group-flush py-2 h-100">
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.communitySupport}
                                    <a href="https://github.com/sourcegraph/sourcegraph/issues">
                                        {SUPPORT_FEATURES.publicIssueTracker}
                                    </a>
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.emailSupport}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.workingHoursSupport}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.responseTime48}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.uptime}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.implementationSupport}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.sharedSlackChannel}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.customerEngineer}
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="d-flex col-md-4 mx-auto mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title mt-3 mb-3 text-center">Team</h1>
                                <a
                                    className="font-size-base min-w-150 btn btn-success w-100 justify-content-center text-center d-inline-flex"
                                    href="https://sourcegraph.com/subscriptions/new"
                                >
                                    Buy now
                                </a>
                            </div>
                            <ol className="mt-4 list-group list-group-flush py-2 h-100">
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.communitySupport}
                                    <a href="https://github.com/sourcegraph/sourcegraph/issues">
                                        {SUPPORT_FEATURES.publicIssueTracker}
                                    </a>
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.emailSupport}
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.workingHoursSupport}
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.responseTime48}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.uptime}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.implementationSupport}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.sharedSlackChannel}
                                </li>
                                <li className={CLASS_NAMES.featureNotOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureNotChecked} />
                                    {SUPPORT_FEATURES.customerEngineer}
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="d-flex col-md-4 mx-auto mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title mt-3 mb-3 text-center">Enterprise</h1>
                                <Link
                                    href="/contact/request-info/?form_submission_source=support-enterprise"
                                    passHref={true}
                                >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="font-size-base min-w-150 btn btn-outline-primary w-100 justify-content-center text-center d-inline-flex">
                                        Contact us
                                    </a>
                                </Link>
                            </div>
                            <ol className="mt-4 list-group list-group-flush py-2 h-100">
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.communitySupport}
                                    <a href="https://github.com/sourcegraph/sourcegraph/issues">
                                        {SUPPORT_FEATURES.publicIssueTracker}
                                    </a>
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.emailSupport}
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.workingHoursSupport}
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.responseTime24}
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.uptime}
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.implementationSupport}
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.sharedSlackChannelContact}{' '}
                                    <Link href="/contact/request-info/?form_submission_source=support-enterprise">
                                        contact us
                                    </Link>
                                    )
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    Dedicated customer engineer assigned to you (available,{' '}
                                    <Link href="/contact/request-info/?form_submission_source=support-enterprise">
                                        contact us
                                    </Link>
                                    )
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <p className="mx-4">
                    * We will use commercially reasonable efforts to adhere to the SLAs and uptime defined above. SLAs
                    apply to tickets submitted via email to{' '}
                    <a href="mailto:support@sourcegraph.com">support@sourcegraph.com</a>.
                </p>
                <hr className="my-4" />
            </div>
        </div>
        <TrySourcegraph className="my-6" />
    </Layout>
)

export default Support
