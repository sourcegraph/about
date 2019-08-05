import CheckIcon from 'mdi-react/CheckIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import QuestionMarkCircleOutlineIcon from 'mdi-react/QuestionMarkCircleOutlineIcon'
import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import {
    SUPPORTED_PROGRAMMING_LANGUAGES_COUNT,
    SUPPORTED_PROGRAMMING_LANGUAGES_URL,
} from './product/SupportedProgrammingLanguagesLink'

enum Plan {
    OpenSource = 'Open source',
    Core = 'Core',
    Enterprise = 'Enterprise',
    Unlimited = 'Unlimited',
}

const PLAN_CHECK_ICON_CLASS: Record<Plan, string> = {
    'Open source': 'text-dark',
    Core: 'text-success',
    Enterprise: 'text-success',
    Unlimited: 'text-success',
}

interface PricingItemCategory {
    id: string
    title: string
    items: PricingItem[]
}

interface PricingItem {
    name: string
    description?: string
    url?: string
    plans: Partial<Record<Plan, boolean | string>>
}

const ALL_PLANS: PricingItem['plans'] = { 'Open source': true, Core: true, Enterprise: true, Unlimited: true }

const CORE_PLAN: PricingItem['plans'] = { Core: true, Enterprise: true, Unlimited: true }

const ENTERPRISE_PLAN: PricingItem['plans'] = { Enterprise: true, Unlimited: true }

const UNLIMITED_PLAN: PricingItem['plans'] = { Unlimited: true }

const DATA: PricingItemCategory[] = [
    {
        id: 'code-search',
        title: 'Code search',
        items: [
            { name: 'Cross-repository search', plans: ALL_PLANS },
            { name: 'Indexed search', plans: ALL_PLANS },
            { name: 'Any branch/commit search', plans: ALL_PLANS },
            { name: 'Diff and commit message search', plans: ALL_PLANS },
            { name: 'Repository, path, & language filters', plans: ALL_PLANS },
            { name: 'Regular expression queries', plans: ALL_PLANS },
            { name: 'Browser search shortcuts', plans: ALL_PLANS },
            {
                name: 'Per-user repository permissions',
                description: 'From your code host (GitHub or GitLab only)',
                url: 'https://docs.sourcegraph.com/admin/repo/permissions',
                plans: ENTERPRISE_PLAN,
            },
            { name: 'High-scale clustered search', plans: ENTERPRISE_PLAN },
        ],
    },
    {
        id: 'code-navigation',
        title: 'Code browsing',
        items: [
            {
                name: 'Repository, file, and directory browsing',
                plans: ALL_PLANS,
            },
            {
                name: 'Branch, tag, and commit viewer',
                plans: ALL_PLANS,
            },
            {
                name: 'Commit comparison',
                plans: ALL_PLANS,
            },
            {
                name: 'Repository contributors listing',
                plans: ALL_PLANS,
            },
            {
                name: 'High-scale repository mirroring',
                description: 'Usually needed for ~1,000+ repositories',
                url: 'https://docs.sourcegraph.com/admin/repo/webhooks',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Per-user repository permissions',
                description: 'From your code host (GitHub or GitLab only)',
                url: 'https://docs.sourcegraph.com/admin/repo/permissions',
                plans: ENTERPRISE_PLAN,
            },
        ],
    },
    {
        id: 'code-intelligence',
        title: 'Code intelligence',
        items: [
            {
                name: `${SUPPORTED_PROGRAMMING_LANGUAGES_COUNT} supported languages`,
                url: SUPPORTED_PROGRAMMING_LANGUAGES_URL,
                plans: CORE_PLAN,
            },
            { name: 'Single repository definitions and references', plans: CORE_PLAN },
            { name: 'Cross-repository definitions and references', plans: ENTERPRISE_PLAN },
            {
                name: 'High-scale clustered language servers',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Remote development environment',
                description: 'Coming soon',
                plans: UNLIMITED_PLAN,
            },
        ],
    },
    {
        id: 'code-review',
        title: 'Code review',
        items: [{ name: 'Code intelligence integrations for code review tools', plans: ENTERPRISE_PLAN }],
    },
    {
        id: 'code-alerts-automation',
        title: 'Code alerts & automation',
        items: [
            { name: 'Saved searches', plans: ENTERPRISE_PLAN },
            { name: 'Email notifications', plans: ENTERPRISE_PLAN },
            {
                name: 'Slack and webhook notifications',
                description: 'Coming soon',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Large-scale code modifications',
                description: 'Only available to select customers in preview',
                plans: UNLIMITED_PLAN,
            },
            {
                name: 'License compliance and security analysis',
                description: 'Coming soon',
                plans: UNLIMITED_PLAN,
            },
        ],
    },
    {
        id: 'integrations',
        title: 'Integrations',
        items: [
            {
                name: 'Sourcegraph extension API',
                url: 'https://docs.sourcegraph.com/extensions',
                plans: ALL_PLANS,
            },
            {
                name: 'Sourcegraph GraphQL API',
                url: 'https://docs.sourcegraph.com/api/graphql',
                plans: ALL_PLANS,
            },
            {
                name: 'Code/repository host integrations',
                url: 'https://docs.sourcegraph.com/integration',
                plans: ALL_PLANS,
            },
            {
                name: 'Browser extension (Chrome/Firefox)',
                url: 'https://docs.sourcegraph.com/integration/browser_extension',
                plans: ALL_PLANS,
            },
            {
                name: 'Sourcegraph CLI',
                url: 'https://github.com/sourcegraph/src-cli',
                plans: ALL_PLANS,
            },
            {
                name: 'Sourcegraph.com extension registry',
                url: 'https://sourcegraph.com/extensions',
                plans: CORE_PLAN,
            },
        ],
    },
    {
        id: 'admin',
        title: 'Administration',
        items: [
            {
                name: 'User authentication via SSO (SAML/OpenID Connect/etc.)',
                url: 'https://docs.sourcegraph.com/admin/auth',
                plans: CORE_PLAN,
            },
            {
                name: 'Per-user repository permissions',
                url: 'https://docs.sourcegraph.com/admin/repo/permissions',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'External database storage',
                url: 'https://docs.sourcegraph.com/admin/external_database',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Custom branding',
                url: 'https://docs.sourcegraph.com/admin/config/site_config#reference',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Extension whitelist',
                url:
                    'https://docs.sourcegraph.com/admin/extensions#allow-only-specific-extensions-from-sourcegraph-com',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Private extension registry',
                url: 'https://docs.sourcegraph.com/admin/extensions',
                plans: UNLIMITED_PLAN,
            },
            {
                name: 'Unlimited guest users',
                plans: UNLIMITED_PLAN,
            },
            {
                name: 'Audit logs',
                description: 'Coming soon',
                plans: UNLIMITED_PLAN,
            },
        ],
    },
    {
        id: 'deployment',
        title: 'Deployment & security',
        items: [
            {
                name: 'Self-managed (on-premises) deployment',
                url: 'https://docs.sourcegraph.com/admin/install',
                plans: ALL_PLANS,
            },
            {
                name: 'External database storage',
                url: 'https://docs.sourcegraph.com/admin/external_database',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'High-scale, high-availability cluster deployment',
                url: 'https://docs.sourcegraph.com/admin/install/cluster',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Instance logging, monitoring, & tracing',
                url: 'https://docs.sourcegraph.com/admin/monitoring_and_tracing',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Cloud-managed deployment',
                description:
                    'Have Sourcegraph run and manage your instance, using our secure infrastructure or a sub-account on your own cloud provider',
                plans: {
                    Enterprise: '+$19/user/month',
                    Unlimited: true,
                },
            },
        ],
    },
    {
        id: 'support',
        title: 'Support',
        items: [
            {
                name: 'Community support',
                url: 'https://github.com/sourcegraph/sourcegraph/issues',
                plans: ALL_PLANS,
            },
            {
                name: 'Priority support',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: '24/7 uptime support',
                plans: UNLIMITED_PLAN,
            },
            {
                name: 'Dedicated support',
                plans: UNLIMITED_PLAN,
            },
        ],
    },
]

export const PricingTable: React.FunctionComponent<{
    allPlans?: Plan[]
    categoriesAndItems?: PricingItemCategory[]
}> = ({ allPlans = [Plan.OpenSource, Plan.Core, Plan.Enterprise, Plan.Unlimited], categoriesAndItems = DATA }) => (
    <div className="pricing-table">
        <div className="row align-items-center border border-gray">
            <div className="col-4 py-3">
                <img
                    className="pl-2"
                    // tslint:disable-next-line: jsx-ban-props
                    style={{ width: 'fit-content' }}
                    src="/sourcegraph/logo.svg"
                />
            </div>
            {allPlans.map(plan => (
                <div className="col-2 py-3 px-3 border-left border-gray">
                    <h3 className="h4 mb-0 text-center">{plan}</h3>
                </div>
            ))}
        </div>
        <div>
            {categoriesAndItems.map(({ id, title, items }, i) => (
                <React.Fragment key={i}>
                    <div id={id} className="pricing-table__category row mt-5 pt-4 px-2 py-1">
                        <h6 className="col-12 text-uppercase text-muted font-weight-bold">{title}</h6>
                    </div>
                    {items.map(({ name, description, url, plans }, i) => (
                        <div
                            key={i}
                            className={`pricing-table__item row ${
                                i === 0 ? 'border-top' : ''
                            } border-bottom border-gray`}
                        >
                            <div className="col-4 pricing-table__item-name">
                                <div className="p-2">
                                    {name}
                                    <OverlayTrigger
                                        placement="auto"
                                        overlay={description ? <Tooltip id="tooltip">{description}</Tooltip> : <span />}
                                    >
                                        <span>
                                            {description && !url && (
                                                <span className="text-muted ml-2">
                                                    <QuestionMarkCircleOutlineIcon />
                                                </span>
                                            )}
                                            {url && (
                                                <a href={url} target="_blank" className="text-muted ml-2">
                                                    <ExternalLinkIcon />
                                                </a>
                                            )}
                                        </span>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            {allPlans.map(plan => (
                                <div className="col-2 p-2 border-left border-gray text-center">
                                    {typeof plans[plan] === 'string'
                                        ? plans[plan]
                                        : plans[plan] && <CheckIcon className={PLAN_CHECK_ICON_CLASS[plan]} />}
                                </div>
                            ))}
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
)
