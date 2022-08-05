import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, CaseStudyCard, HubSpotForm, BlogResourceItem } from '@components'
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
        <div className="py-6 sg-bg-gradient-saturn">
            <section className="container max-w-900">
                <h1 className="display-1 font-weight-bold max-w-800">
                    Accelerate engineering velocity with Sourcegraph
                </h1>
                <h5 className="py-4 font-weight-normal">
                    See why over 1.2M engineers use Sourcegraph to build software you rely on
                </h5>
                <div className="pt-0 max-w-400 pt-md-4">
                    <HubSpotForm masterFormName="contactEmail" chiliPiper={true} />
                </div>
            </section>
        </div>

        <div className="container mt-6 max-w-900">
            <h1 className="display-3 font-weight-bold">Move fast — even in big code bases</h1>
            <h5 className="py-3 font-weight-normal">Learn how these software companies used Sourcegraph</h5>
            <div className="flex-wrap pt-4 d-flex tw-relative">
                {caseStudyItems.map(study => (
                    <div key={study.name} className="px-0 mb-6 col-sm-6 col-md-4">
                        <CaseStudyCard study={study} bwLogo={true} />
                    </div>
                ))}
            </div>
        </div>

        <div className="py-6 sg-bg-gradient-venus">
            <section className="container text-center max-w-900">
                <h1 className="pt-2 display-3 font-weight-bold">Want to use Sourcegraph at your company?</h1>
                <h5 className="pt-4 pb-1 mx-auto max-w-550 font-weight-normal">
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
                </h5>
            </section>
        </div>

        <div className="container px-0 my-6 max-w-900 my-md-8">
            <div className="col-lg-6">
                <h1 className="mb-5 font-weight-bold">Related resources</h1>
            </div>
            {blogResourceItems.map(item => (
                <BlogResourceItem key={item.title} blog={item} />
            ))}
        </div>

        <div className="py-5 text-white d-flex flex-md-row flex-column align-items-center justify-content-center bg-primary font-weight-bold">
            <h5 className="my-auto text-center max-w-250 max-w-md-400 font-weight-bold pr-md-4">
                Looking for our changelog? Look no further
            </h5>
            <a
                href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                className="mt-4 border-white rounded btn btn-primary mt-md-0"
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
