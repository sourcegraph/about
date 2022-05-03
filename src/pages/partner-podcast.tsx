import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, CaseStudyCard, FormLegal, BlogListItem } from '@components'
import { useHubSpot } from '@hooks'

const resourceItems = [
    {
        title: 'Continuous developer onboarding: A guide to cultivating a culture of professional growth',
        description:
            'Download the guide to developer onboarding and learn how to shift to a culture of continuous onboarding in your engineering organization.',
        type: 'Guide',
        image: '/guides/dev-onboarding/thumbnail.png',
        href: '/guides/continuous-developer-onboarding',
    },
    {
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
        description:
            'See how Nutanix was able to confidently identify every instance of Log4j across its sprwaling codebase and deliver patches to its customers that fully remediated the vulnerability within 4 days.',
        type: 'Case study',
        image: 'https://storage.googleapis.com/sourcegraph-assets/blog/code-insights-ga-blogs/code-insights-docs.png',
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

const PartnerPodcastPage: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '98187d3b-d8a9-43e2-bb95-d93dd029c688',
        targetId: 'form',
        chiliPiper: true,
    })

    return (
        <Layout
            meta={{
                title: 'Code Intelligence Platform | Sourcegraph',
                description:
                    'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Sourcegraph.',
            }}
        >
            <div className="bg-gradient-saturn-reversed py-6">
                <section className="container max-w-900">
                    <h1 className="display-1 font-weight-bold max-w-800">
                        Accelerate engineering velocity with Sourcegraph
                    </h1>
                    <h5 className="py-4 font-weight-normal">
                        See why over 1.2M engineers use Sourcegraph to build software you rely on
                    </h5>
                    <div className="max-w-400 pt-0 pt-md-4">
                        <div id="form" />
                        <FormLegal />
                    </div>
                </section>
            </div>

            <div className="container max-w-900 mt-6">
                <h1 className="display-3 font-weight-bold">Move fast — even in big code bases</h1>
                <h5 className="font-weight-normal py-3">Learn how these software companies used Sourcegraph</h5>
                <div className="d-flex flex-wrap pt-4 position-relative">
                    {caseStudyItems.map(study => (
                        <div key={study.name} className="col-sm-6 col-md-4 mb-6 px-0">
                            <CaseStudyCard study={study} bwLogo={true} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-venus-saturated py-6">
                <section className="container max-w-900 text-center">
                    <h1 className="display-3 font-weight-bold pt-2">Want to use Sourcegraph at your company?</h1>
                    <h5 className="pt-4 pb-1 mx-auto max-w-550 font-weight-normal">
                        <span>
                            <Link href="/get-started">Get started </Link>
                        </span>
                        for free with up to 10 teammates or
                        <span>
                            <Link href="/demo"> request a demo </Link>
                        </span>
                        to learn about our enterprise plan and to see Sourcegraph in your own environment.
                    </h5>
                </section>
            </div>

            <div className="container max-w-900 my-md-8 my-6 px-0">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {resourceItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>

            <div className="py-5 d-flex flex-md-row flex-column align-items-center justify-content-center bg-primary text-white font-weight-bold">
                <h5 className="max-w-250 max-w-md-400 text-center font-weight-bold my-auto pr-md-4">
                    Looking for our changelog? Look no further
                </h5>
                <a
                    href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                    className="rounded btn btn-primary border-white mt-md-0 mt-4"
                >
                    Changelog
                </a>
            </div>
        </Layout>
    )
}

export default PartnerPodcastPage
