import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Link from 'next/link'

import { ContentSection, Layout } from '../../components'

interface ThankYouProps {
    actionPage: string
    pdfUrl: string
}

interface SlugDataProps {
    [key: string]: ThankYouProps
}

const whitepapers = [
    {
        title: 'cody-context-architecture',
        image: '/resources/cody-context-architecture-og.png',
        description:
            'Context awareness is key to the quality and precision of Cody. Learn how Cody fetches the right context at the right time to answer queries',
        gatedPageUrl: '/resources/a-lp-cody-context-architecture',
    },
    {
        title: 'ai-powers-cody',
        image: '/resources/ai-platform-cody-og.png',
        description:
            'Cody is built on top of Sourcegraph’s code AI platform, giving it the context and intelligence it needs.',
        gatedPageUrl: '/resources/a-lp-how-sourcegraph-ai-platform-powers-cody',
    },
    {
        title: 'big-code',
        image: '/resources/big-code-og.png',
        description: 'With the overnight AI boom, the pain of Big Code is only getting worse.',
        gatedPageUrl: '/resources/a-lp-big-code-in-ai-era',
    },
    {
        title: 'forrester-tei',
        image: '/resources/forrester-og.png',
        description: 'A commissioned study conducted by Forrester Consulting on behalf of Sourcegraph.',
        gatedPageUrl: '/resources/a-lp-forrester-total-economic-impact',
    },
]

const slugData: SlugDataProps = {
    'cody-context-architecture': {
        actionPage: 'cody-context-architecture',
        pdfUrl: 'https://about.sourcegraph.com/whitepaper/cody-context-architecture.pdf',
    },
    'ai-powers-cody': {
        actionPage: 'ai-powers-cody',
        pdfUrl: 'https://about.sourcegraph.com/whitepaper/how-sourcegraph-ai-platform-powers-cody.pdf',
    },
    'big-code': {
        actionPage: 'big-code',
        pdfUrl: 'https://info.sourcegraph.com/hubfs/PDFs/big-code-in-ai-report.pdf',
    },
    'forrester-tei': {
        actionPage: 'forrester-tei',
        pdfUrl: 'https://2762526.fs1.hubspotusercontent-na1.net/hubfs/2762526/PDFs/Sourcegraph%20TEI.pdf',
    },
}

const slugs = Object.keys(slugData)

const ThankYouPage: NextPage<ThankYouProps> = ({ actionPage, pdfUrl }) => (
    <Layout headerColorTheme="dark">
        <ContentSection parentClassName="sg-bg-thank-you-page !pb-16 !pt-8 md:!mt-16" className="">
            <h1 className="mx-auto max-w-[846px] text-center text-white">
                Thank you, the whitepaper is on its way to your inbox
            </h1>

            <h3 className="mx-auto mt-8 max-w-[846px] text-center text-white">
                If you’d like to learn more from our experts, including how organizations are partnering with
                Sourcegraph to accelerate software development, schedule your demo today.
            </h3>

            <div className="mt-[29.5px] flex flex-row flex-wrap justify-center gap-6">
                <Link
                    href={pdfUrl}
                    target="_blank"
                    title="Read now"
                    className="btn-primary-dark px-6 py-2 font-semibold"
                >
                    Read now
                </Link>
                <Link href="/contact/request-info" title="Schedule a demo" className="btn btn-secondary-dark py-2 px-6">
                    Schedule a demo
                </Link>
            </div>

            <h3 className="mt-16 text-center font-semibold text-white md:mt-[113.5px]">Additional content</h3>

            <div className="mt-10 flex flex-row  flex-wrap justify-center gap-[78px]">
                {whitepapers.map(whitepaper => {
                    if (whitepaper.title !== actionPage) {
                        return (
                            <Link href={whitepaper.gatedPageUrl} key={whitepaper.title} className="max-w-[302px]">
                                <img src={whitepaper.image} alt={whitepaper.title} className="max-h-[182px]" />
                                <p className="mt-6 mb-0 text-lg text-gray-200">{whitepaper.description}</p>
                            </Link>
                        )
                    }
                })}
            </div>
        </ContentSection>
    </Layout>
)

export default ThankYouPage

export const getStaticPaths: GetStaticPaths = () => {
    const paths = slugs.map(slug => ({ params: { slug: slug.split('/') } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = ({ params }) => ({
    props: (params?.slug && slugData[params.slug[0]]) || {},
})
