import { FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'
import Link from 'next/link'

import { ContentSection, Layout, TrySourcegraph } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const CLASS_NAMES = {
    featureOffered: 'list-group-item bg-transparent border-0',
    featureNotOffered: 'list-group-item bg-transparent border-0 text-muted',
    featureChecked: 'text-success tw-inline',
    featureNotChecked: 'invisible',
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
        }}
    >
        <div className="mt-2">
            <ContentSection className="tw-text-center">
                <h1>Sourcegraph Support</h1>
                <p className="tw-text-xl tw-mt-2">
                    See{' '}
                    <Link href="/pricing" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="Pricing"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Pricing
                        </a>
                    </Link>{' '}
                    to learn more about these tiers.
                </p>
            </ContentSection>

            <div className="tw-mx-auto tw-my-0 tw-max-w-screen-xl">
                <div className="pt-4 row">
                    <div className="mx-auto mb-4 tw-flex col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h1 className="tw-my-xs tw-text-center">Free</h1>
                                <a
                                    className="tw-text-center font-size-base btn btn-outline-primary w-100 tw-justify-center tw-inline-flex"
                                    href="https://docs.sourcegraph.com#quickstart-guide"
                                    title="Deploy"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Deploy
                                </a>
                            </div>
                            <ol className="py-2 mt-4 list-group list-group-flush h-100">
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.communitySupport}
                                    <a
                                        href="https://github.com/sourcegraph/sourcegraph/issues"
                                        title={SUPPORT_FEATURES.publicIssueTracker}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
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
                    <div className="mx-auto mb-4 tw-flex col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="tw-my-xs tw-text-center">Team</h1>
                                <a
                                    className="tw-text-center font-size-base btn btn-success w-100 tw-justify-center tw-inline-flex"
                                    href="https://sourcegraph.com/subscriptions/new"
                                    title="Buy now"
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Buy now
                                </a>
                            </div>
                            <ol className="py-2 mt-4 list-group list-group-flush h-100">
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.communitySupport}
                                    <a
                                        href="https://github.com/sourcegraph/sourcegraph/issues"
                                        title={SUPPORT_FEATURES.publicIssueTracker}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
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
                    <div className="mx-auto mb-4 tw-flex col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="tw-my-xs tw-text-center">Enterprise</h1>
                                <Link
                                    href="/contact/request-info/?form_submission_source=support-enterprise"
                                    passHref={true}
                                >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        className="tw-text-center font-size-base btn btn-outline-primary w-100 tw-justify-center tw-inline-flex"
                                        title="Contact us"
                                        data-button-style={buttonStyle.outline}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        Contact us
                                    </a>
                                </Link>
                            </div>
                            <ol className="py-2 mt-4 list-group list-group-flush h-100">
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    {SUPPORT_FEATURES.communitySupport}
                                    <a
                                        href="https://github.com/sourcegraph/sourcegraph/issues"
                                        title={SUPPORT_FEATURES.publicIssueTracker}
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
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
                                    <Link
                                        href="/contact/request-info/?form_submission_source=support-enterprise"
                                        passHref={true}
                                    >
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            title="contact us"
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
                                        >
                                            contact us
                                        </a>
                                    </Link>
                                    )
                                </li>
                                <li className={CLASS_NAMES.featureOffered}>
                                    <CheckIcon className={CLASS_NAMES.featureChecked} />
                                    Dedicated customer engineer assigned to you (available,{' '}
                                    <Link
                                        href="/contact/request-info/?form_submission_source=support-enterprise"
                                        passHref={true}
                                    >
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            title="contact us"
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
                                        >
                                            contact us
                                        </a>
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
                    <a
                        href="mailto:support@sourcegraph.com"
                        title="support@sourcegraph.com"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        support@sourcegraph.com
                    </a>
                    .
                </p>
                <hr className="my-4" />
            </div>
        </div>

        <ContentSection>
            <TrySourcegraph />
        </ContentSection>
    </Layout>
)

export default Support
