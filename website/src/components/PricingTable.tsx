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
    Free = 'Free',
    Enterprise = 'Enterprise',
    EnterprisePlus = 'Enterprise Plus',
    Elite = 'Elite',
}

const PLAN_CHECK_ICON_CLASS: Record<Plan, string> = {
    'Open source': 'text-dark',
    Free: 'text-success',
    Enterprise: 'text-success',
    'Enterprise Plus': 'text-success',
    Elite: 'text-success',
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

const ALL_PLANS: PricingItem['plans'] = {
    'Open source': true,
    Free: true,
    Enterprise: true,
    'Enterprise Plus': true,
    Elite: true,
}

const FREE_PLAN: PricingItem['plans'] = { Free: true, Enterprise: true, 'Enterprise Plus': true, Elite: true }

const ENTERPRISE_PLAN: PricingItem['plans'] = { Enterprise: true, 'Enterprise Plus': true, Elite: true }

const ENTERPRISE_PLUS_PLAN: PricingItem['plans'] = { 'Enterprise Plus': true, Elite: true }

const ELITE_PLAN: PricingItem['plans'] = { Elite: true }

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
            { name: 'High-scale clustered search', plans: ENTERPRISE_PLAN },
            {
                name: 'Per-user repository permissions',
                description: 'From your code host (GitHub or GitLab only)',
                url: 'https://docs.sourcegraph.com/admin/repo/permissions',
                plans: ENTERPRISE_PLUS_PLAN,
            },
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
                plans: ENTERPRISE_PLUS_PLAN,
            },
        ],
    },
    {
        id: 'code-intelligence',
        title: 'Code navigation and intelligence',
        items: [
            {
                name: `${SUPPORTED_PROGRAMMING_LANGUAGES_COUNT} supported languages`,
                url: SUPPORTED_PROGRAMMING_LANGUAGES_URL,
                plans: FREE_PLAN,
            },
            { name: 'Single repository definitions and references', plans: FREE_PLAN },
            { name: 'Precise, cross-repository definitions and references', plans: ENTERPRISE_PLAN },
            {
                name: 'Remote development environment',
                description: 'Coming soon',
                plans: ELITE_PLAN,
            },
        ],
    },
    {
        id: 'code-review',
        title: 'Code review',
        items: [{ name: 'Code intelligence integrations for code review tools', plans: ENTERPRISE_PLAN }],
    },
    {
        id: 'code-change-management',
        title: 'Code change management',
        items: [
            {
                name: 'Saved searches',
                url: 'https://docs.sourcegraph.com/user/search/saved_searches',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Email notifications',
                url: 'https://docs.sourcegraph.com/user/search/saved_searches#configuring-email-notifications',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Slack and webhook notifications',
                description: 'Coming soon',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Campaigns',
                url: 'https://about.sourcegraph.com/product/code-change-management',
                description:
                    'Refactor across all repositories, fix critical security issues, and migrate to new APIs and dependencies faster',
                plans: ELITE_PLAN,
            },
            {
                name: 'License compliance and security analysis',
                url: 'https://docs.sourcegraph.com/direction/secure',
                description: 'Coming soon',
                plans: ELITE_PLAN,
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
                plans: FREE_PLAN,
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
                plans: FREE_PLAN,
            },
            {
                name: 'Audit logs',
                description: 'Coming soon',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'External database storage',
                url: 'https://docs.sourcegraph.com/admin/external_database',
                plans: ENTERPRISE_PLAN,
            },
            {
                name: 'Extension whitelist',
                url:
                    'https://docs.sourcegraph.com/admin/extensions#allow-only-specific-extensions-from-sourcegraph-com',
                plans: ENTERPRISE_PLUS_PLAN,
            },
            {
                name: 'Private extension registry',
                url: 'https://docs.sourcegraph.com/admin/extensions',
                plans: ENTERPRISE_PLUS_PLAN,
            },
            {
                name: 'Custom branding',
                url: 'https://docs.sourcegraph.com/admin/config/site_config#reference',
                plans: ENTERPRISE_PLUS_PLAN,
            },
            {
                name: 'Per-user repository permissions',
                url: 'https://docs.sourcegraph.com/admin/repo/permissions',
                plans: ENTERPRISE_PLUS_PLAN,
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
                    Enterprise: 'Additional fees per user',
                    'Enterprise Plus': 'Additional fees per user',
                    Elite: true,
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
                plans: {
                    'Enterprise Plus': 'Additional fees per user',
                    Elite: true,
                },
            },
            {
                name: 'Dedicated support',
                plans: ELITE_PLAN,
            },
        ],
    },
]

export const PricingTable: React.FunctionComponent<{
    allPlans?: Plan[]
    categoriesAndItems?: PricingItemCategory[]
}> = ({
    allPlans = [Plan.OpenSource, Plan.Free, Plan.Enterprise, Plan.EnterprisePlus, Plan.Elite],
    categoriesAndItems = DATA,
}) => (
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
            <div className="col-8 row">
                {allPlans.map(plan => (
                    <div className="col py-3 px-3 border-left border-gray">
                        <h3 className="h4 mb-0 text-center">{plan}</h3>
                    </div>
                ))}
            </div>
        </div>
        <div>
            {categoriesAndItems.map(({ id, title, items }, i) => (
                <React.Fragment key={i}>
                    <div id={id} className="pricing-table__category row mt-5 pt-4 px-2 py-1">
                        <h6 className="col-14 text-uppercase text-muted font-weight-bold">{title}</h6>
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
                            <div className="col-8 row">
                                {allPlans.map((plan, i) => (
                                    <div className="col p-2 border-left border-gray text-center" key={i}>
                                        {typeof plans[plan] === 'string'
                                            ? plans[plan]
                                            : plans[plan] && <CheckIcon className={PLAN_CHECK_ICON_CLASS[plan]} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
)
