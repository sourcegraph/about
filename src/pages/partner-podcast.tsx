import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, CaseStudyCard, HubSpotForm, ResourceList, ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const blogResourceItems = [
    {
        title: 'Continuous developer onboarding: A guide to cultivating a culture of professional growth',
        description:
            'Download the guide to developer onboarding and learn how to shift to a culture of continuous onboarding in your engineering organization.',
        type: 'Guide',
        img: {
            src: 'blog/thumbnails/continuous-developer-onboarding.png',
            alt: 'Continuous developer onboarding guide thumbnail',
        },
        href: '/guides/continuous-developer-onboarding',
    },
    {
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
        description:
            'See how Nutanix was able to confidently identify every instance of Log4j across its sprwaling codebase and deliver patches to its customers that fully remediated the vulnerability within 4 days.',
        type: 'Case study',
        img: {
            src: 'blog/thumbnails/code-insights-docs.png',
            alt: 'Nutanix fixed Log4j quickly with Sourcegraph case study thumbnail',
        },
        href: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
    },
]

const caseStudyItems = [
    {
        name: 'Nutanix',
        logo: '/external-logos/nutanix-logo.svg',
        altTitle: 'Fix vulnerabilities',
        title: 'Find, fix, and track vulnerable code quickly across your entire codebase. See how Sourcegraph enables Nutanix to remediate every instance of a vulnerability with confidence.',
        url: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
        linkText: 'Read the case study',
    },
    {
        name: 'Cloudflare',
        logo: '/external-logos/cloudflare-logo.svg',
        altTitle: 'Resolve incidents',
        title: 'Identify the root cause in code and fix the issue everywhere, faster. See how Cloudflare stays audit-ready with Sourcegraph.',
        url: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
        linkText: 'Read the case study',
    },
    {
        name: 'Indeed',
        logo: '/external-logos/indeed-logo.svg',
        altTitle: 'Boost code health',
        title: 'Improve code health with large-scale changes and track code health initiatives towards completion. Learn how Indeed improves code health at scale.',
        url: '/case-studies/indeed-accelerates-development-velocity',
        linkText: 'Read the case study',
    },
    {
        name: 'Lyft',
        logo: '/external-logos/lyft-logo.svg',
        altTitle: 'Onboard developers',
        title: 'Decrease time to first commit with self-serve codebase onboarding and knowledge sharing. Learn how Lyft makes every developer autonomous with Sourcegraph.',
        url: '/case-studies/lyft-monolith-to-microservices',
        linkText: 'Read the case study',
    },
    {
        name: 'FactSet',
        logo: '/external-logos/factset-logo.svg',
        altTitle: 'Promote code reuse',
        title: 'Find existing libraries for reuse and contribute to a more secure and coherent codebase. See how FactSet ensures consistency across its codebase.',
        url: '/case-studies/factset-migrates-from-perforce-to-github',
        linkText: 'Read the case study',
    },
]

const PartnerPodcastPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Code Intelligence Platform | Sourcegraph',
            description:
                'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Sourcegraph.',
        }}
    >
        <div className="sg-bg-gradient-saturn tw-px-6 tw-py-5xl">
            <div className="tw-max-w-screen-xl tw-mx-auto">
                <h1 className=" max-w-800">Accelerate engineering velocity with Sourcegraph</h1>
                <h3 className="py-4 tw-max-w-[700px]">
                    See why over 1.2M engineers use Sourcegraph to build software you rely on
                </h3>
                <div className="tw-pt-0 max-w-400 md:tw-pt-sm">
                    <HubSpotForm masterFormName="contactEmail" chiliPiper={true} />
                </div>
            </div>
        </div>

        <ContentSection>
            <h2>Move fast — even in big code bases</h2>
            <h4 className="py-3">Learn how these software companies used Sourcegraph</h4>
            <div className="flex-wrap tw-pt-sm tw-flex tw-relative">
                {caseStudyItems.map(study => (
                    <div key={study.name} className="mb-6 tw-px-0 col-sm-6 col-md-4">
                        <CaseStudyCard study={study} bwLogo={true} />
                    </div>
                ))}
            </div>
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <div className="tw-max-w-screen-xl tw-mx-auto tw-text-center">
                <h2 className="tw-pt-xxs">Want to use Sourcegraph at your company?</h2>
                <p className="tw-pt-sm tw-pb-1 tw-mx-auto tw-max-w-[650px] tw-text-2xl">
                    <span>
                        <Link href="/get-started/self-hosted" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Get started"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Get started
                            </a>
                        </Link>
                    </span>{' '}
                    for free with up to 10 teammates or{' '}
                    <span>
                        <Link href="/demo" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                title="Request a demo"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                request a demo
                            </a>
                        </Link>
                    </span>{' '}
                    to learn about our enterprise plan and to see Sourcegraph in your own environment.
                </p>
            </div>
        </ContentSection>

        <ResourceList items={blogResourceItems} />

        <div className="py-5 tw-text-white tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-center tw-bg-blurple-400">
            <h5 className="tw-my-auto tw-text-center max-w-250 max-w-md-400 md:tw-pr-sm">
                Looking for our changelog? Look no further
            </h5>
            <a
                href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                className="mt-4 border-white tw-rounded btn btn-primary mt-md-0"
                title="Changelog"
                data-button-style={buttonStyle.primary}
                data-button-location={buttonLocation.hero}
                data-button-type="cta"
            >
                Changelog
            </a>
        </div>
    </Layout>
)

export default PartnerPodcastPage
