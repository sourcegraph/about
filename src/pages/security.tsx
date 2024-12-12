import { FunctionComponent } from 'react'

import KeyboardArrowRightIcon from 'mdi-react/KeyboardArrowRightIcon'
import Link from 'next/link'

import { ContentSection, Layout, Tabs } from '../components'
import { buttonStyle } from '../data/tracking'

const SecurityPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Security at Sourcegraph',
            description:
                'We know that source code is one of your most sensitive assets. Every component of Sourcegraph was designed with security in mind.',
        }}
        heroAndHeaderClassName="bg-white"
        childrenClassName="bg-white"
    >
        <div className="mx-auto max-w-[800px] text-gray-700">
            <div className="py-10 px-6 text-center">
                <h1 className="mb-4">Security at Sourcegraph</h1>
                <h2 className="text-gray-500">
                    We know that source code is one of your most sensitive assets. Every component of Sourcegraph was
                    designed with security in mind.
                </h2>

                <Link
                    href="mailto:security@sourcegraph.com"
                    className="btn-link btn-link-icon mt-8 flex justify-center font-semibold"
                    title="Contact our security team"
                    data-button-style={buttonStyle.textWithArrow}
                >
                    Contact our security team
                    <KeyboardArrowRightIcon className="link-icon" />
                </Link>
            </div>

            <ContentSection parentClassName="md:pt-6 pt-6 max-w-[846px] flex justify-center mx-auto" className="w-full">
                <Tabs
                    tabs={[
                        {
                            key: 'product-security',
                            title: 'Product Security',
                            className: 'md:text-2xl py-5',
                            content: (
                                <div>
                                    <h3 className="mt-4">Sourcegraph Cloud</h3>
                                    <h4 className="mt-6">Infrastructure</h4>
                                    <ul className="mt-4 ml-5 space-y-1.5 text-gray-500">
                                        <li>
                                            All infrastructure is hosted on Google Cloud Platform and managed through
                                            Terraform.
                                        </li>
                                        <li>
                                            Customer instances are provisioned in fully segregated GCP environments,
                                            ensuring that customer data is fully segregated.
                                        </li>
                                        <li>
                                            All storage volumes are encrypted at rest, and data is encrypted during
                                            transport from code host to cloud environment.
                                        </li>
                                        <li>
                                            Sourcegraph leverages permission management tools for just-in-time access
                                            and group based permissions to enforce least privilege access across our
                                            cloud infrastructure.
                                        </li>
                                        <li>
                                            Domains are managed through Cloudflare and use its security capabilities,
                                            like Web Application Firewall and Rate Limiting.
                                        </li>
                                        <li>
                                            External access to production systems is restricted by firewall. Secrets
                                            that grant access to compute resources are stored only on encrypted local
                                            drives or a secret management service.
                                        </li>
                                        <li>
                                            Instances are updated monthly, and are actively maintained to keep the
                                            service up and healthy.
                                        </li>
                                        <li>
                                            Instances are updated for security patches as needed, according to
                                            Sourcegraph's{' '}
                                            <Link
                                                href="https://www.notion.so/sourcegraph/Vulnerability-Management-Policy-6c5dbd3be6b24d7787e5b6512450c306"
                                                title="Vulnerability Management Policy"
                                                className="text-black underline"
                                                target="_blank"
                                            >
                                                Vulnerability Management Policy.
                                            </Link>
                                        </li>
                                    </ul>
                                    <h5 className="mt-6">Monitoring and Incident Response</h5>
                                    <ul className="mt-4 ml-5 space-y-1.5 text-gray-500">
                                        <li>
                                            Our operations team monitors service availability 24x7x365. They investigate
                                            alerts and potential attacks 24x7x365, triaging and responding when
                                            necessary.
                                        </li>
                                        <li>
                                            We only log information crucial for security and support. Only restricted
                                            personnel have access to user data. Logs are stored in GCP and the
                                            information is retained for up to 365 days. Find out more in our{' '}
                                            <Link
                                                href="/terms/privacy"
                                                title="Privacy Policy"
                                                className="text-black underline"
                                            >
                                                Privacy Policy.
                                            </Link>
                                        </li>
                                        <li>
                                            Service, application, and access logs are stored centrally by Sourcegraph
                                            and monitored.You can find more details in our{' '}
                                            <Link
                                                href="https://www.notion.so/sourcegraph/Security-Incident-Response-Policy-1537d1e4212d4c288f4b4bb4a7118578"
                                                title="Security Incident Response Policy"
                                                className="text-black underline"
                                            >
                                                Security Incident Response Policy.
                                            </Link>
                                        </li>
                                        <li>
                                            Only restricted Sourcegraph employees have access to a customer's instance,
                                            strictly for support and maintenance purposes. Access is logged and
                                            monitored.
                                        </li>
                                        <li>
                                            Sourcegraph employees access the instance through secure SSO means, ensuring
                                            MFA protections and more.
                                        </li>
                                    </ul>

                                    <h3 className="mt-10">Sourcegraph self-hosted</h3>
                                    <p className="mb-0 mt-4 text-gray-500">
                                        Sourcegraph self-hosted gives you the most control over deployment and security
                                        options.
                                    </p>
                                    <ul className="ml-5 space-y-1.5 text-gray-500">
                                        <li>
                                            Sourcegraph self-hosted instances do not send any customer code to other
                                            servers. Sourcegraph employees have no access to customer code.
                                        </li>
                                        <li>
                                            Other than the email address of the initial installer (who we may contact
                                            regarding sales, product updates, security updates, and policy updates),
                                            self-hosted Sourcegraph instances do not send any personal data to other
                                            servers. Learn more in our{' '}
                                            <Link
                                                href="https://sourcegraph.com/docs/admin/pings"
                                                title="pings documentation"
                                                className="text-black underline"
                                                target="_blank"
                                            >
                                                pings documentation.
                                            </Link>
                                        </li>
                                        <li>
                                            When self-hosting Sourcegraph, all application logs are stored locally and
                                            never shared with Sourcegraph (the company). Sourcegraph employees and
                                            contractors never have access to your Sourcegraph instance or its data
                                            unless explicitly shared for troubleshooting purposes.
                                        </li>
                                        <li>
                                            Authentication via SAML, OAuth, HTTP Proxy auth, and OpenID Connect is
                                            configurable. Basic authentication is enabled by default.
                                        </li>
                                        <li>
                                            Enterprise customers can configure Sourcegraph to{' '}
                                            <Link
                                                href="https://sourcegraph.com/docs/admin/permissions"
                                                title="enforce repository permissions"
                                                className="text-black underline"
                                                target="_blank"
                                            >
                                                enforce repository permissions
                                            </Link>{' '}
                                            from connected code hosts. Sourcegraph also exposes a GraphQL API to
                                            explicitly set repository permissions.
                                        </li>
                                        <li>
                                            Encryption at-rest and in-transit are configurable and highly recommended.
                                        </li>
                                    </ul>

                                    <h3 className="mt-6">
                                        Shared security model for Sourcegraph Cloud and Sourcegraph.com
                                    </h3>
                                    <ul className="mt-4 ml-5 space-y-1.5 text-gray-500">
                                        <li>
                                            For these products, Sourcegraph (the company) handles the security of the
                                            applications, the systems they run on, and the environments those systems
                                            are hosted within.
                                        </li>
                                        <li>
                                            As a customer you are responsible for the proper management of information
                                            on your account, ensuring that access tokens are properly handled, and
                                            ensuring that code host connections and linked repositories are correctly
                                            configured. You control users, access to your data, and what extensions you
                                            install and trust. Finally, you are responsible for ensuring your company is
                                            meeting compliance requirements and have awareness of the impact the
                                            previous items can have on the confidentiality of your code.
                                        </li>
                                    </ul>

                                    <h3 className="mt-6">General security practices </h3>
                                    <h5 className="mt-4">Development</h5>
                                    <ul className="mt-4 ml-5 space-y-1.5 text-gray-500">
                                        <li>
                                            Access to all internal systems is protected by multi-factor authentication.
                                            Access is restricted to those who require it to perform their job, and is
                                            regularly reviewed and revoked upon termination or when no longer needed.
                                        </li>
                                        <li>
                                            Code reviews are mandatory for all code changes to our product.
                                            Security-sensitive changes are additionally reviewed by the security team
                                            before being released.
                                        </li>
                                        <li>
                                            Furthermore, internally, we use our own product to provide critical context
                                            during code reviews (such as identifying dependencies of modified code).
                                        </li>
                                        <li>
                                            End-to-end tests to validate authentication and other critical workflows
                                            (such as authorization and authentication).
                                        </li>
                                        <li>
                                            We do not store sensitive keys and passwords in our code, instead relying on
                                            a secure secret vault.
                                        </li>
                                        <li>Our software components are monitored for CVEs.</li>
                                    </ul>

                                    <h5 className="mt-6">Code Security</h5>
                                    <ul className="mt-4 ml-5 space-y-1.5 text-gray-500">
                                        <li>
                                            We employ various tools and processes to ensure Sourcegraph’s code remains
                                            secure.
                                        </li>
                                        <li>Containers are scanned for CVEs using GCP provider-specific tooling.</li>
                                        <li>Code coverage tools are used to ensure unit test coverage.</li>
                                        <li>3rd party penetration tests are conducted annually.</li>
                                        <li>Internal audits of our code and systems are run regularly.</li>
                                    </ul>

                                    <h5 className="mt-6">Container Security</h5>
                                    <ul className="mt-4 ml-5 space-y-1.5 text-gray-500">
                                        <li>
                                            We utilize industry-leading practices to build and ship our software,
                                            utilizing distroless Docker images and a secure software supply-chain.
                                        </li>
                                        <li>
                                            We publish signed Software Bill-of-Materials (SBOM) for our
                                            container images, allowing customers to verify the security of our products
                                            for themselves. See{' '}
                                            <Link
                                                href="https://sourcegraph.com/docs/cli/how-tos/fetch_sboms"
                                                title="How to fetch SBOMs for Sourcegraph"
                                                className="text-black underline"
                                                target="_blank"
                                            >
                                                How to fetch SBOMs for Sourcegraph.
                                            </Link>
                                            for more details.
                                        </li>
                                    </ul>
                                </div>
                            ),
                        },
                        {
                            key: 'trust-compliance',
                            title: 'Trust & Compliance',
                            className: 'md:text-2xl py-5',
                            content: (
                                <div>
                                    <h3 className="my-4">Trust & Compliance</h3>
                                    <p className="text-lg text-gray-500">
                                        For details on our information security practices or to request a copy of our
                                        SOC 2 Report, please visit our Security Trust Portal.
                                    </p>
                                    <Link
                                        href="https://security.sourcegraph.com/"
                                        className="btn btn-secondary"
                                        title="Go to Security Trust Portal"
                                        data-button-style={buttonStyle.outline}
                                        target="_blank"
                                    >
                                        Go to Security Trust Portal
                                    </Link>

                                    <h4 className="mt-8 mb-4 text-xl">Subprocessors</h4>
                                    <p className="text-lg text-gray-500">
                                        For a list of Sourcegraph's subprocessors, please visit the link below.
                                    </p>

                                    <Link
                                        href="/terms/subprocessors"
                                        className="btn-link btn-link-icon mt-8 flex font-semibold"
                                        title="Go to Subprocessors"
                                        data-button-style={buttonStyle.textWithArrow}
                                    >
                                        Go to Subprocessors
                                        <KeyboardArrowRightIcon className="link-icon" />
                                    </Link>
                                </div>
                            ),
                        },
                        {
                            key: 'bug-bounty',
                            title: 'Bug Bounty',
                            className: 'md:text-2xl py-5',
                            content: (
                                <div>
                                    <h3 className="my-4">Program</h3>
                                    <p className="mb-8 text-lg text-gray-500">
                                        Sourcegraph hosts a private bug bounty program on HackerOne. If you believe that
                                        you have found a vulnerability related to Sourcegraph, please reach out to
                                        security@sourcegraph.com with your HackerOne username. Sourcegraph will add you
                                        to the platform, where you can make a report, which will be processed according
                                        to the terms of our bug bounty policy.
                                    </p>
                                    <Link
                                        href="mailto:security@sourcegraph.com"
                                        className="btn btn-secondary"
                                        title="Go to Security Trust Portal"
                                        data-button-style={buttonStyle.outline}
                                    >
                                        Contact Security Team
                                    </Link>
                                </div>
                            ),
                        },
                    ]}
                    navClassName="sm:gap-x-12"
                />
            </ContentSection>
        </div>
    </Layout>
)

export default SecurityPage
