import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '../../components'
import { LayoutProps } from '../../components/Layout/Layout'

export interface PageProps {
    filePath: string
    meta?: LayoutProps['meta']
}

const files = [
    {
        name: 'cody-context-architecture.pdf',
        filePath: '/whitepaper-files/cody-context-architecture.pdf',
        meta: {
            title: 'Cody context architecture',
            description:
                'Context awareness is key to the quality and precision of Cody. This paper outlines how Cody fetches the right context at the right time to answer queries',
            image: '/whitepaper-files/cody-context-architecture.png',
        },
    },
    {
        name: 'how-sourcegraph-ai-platform-powers-cody.pdf',
        filePath: '/whitepaper-files/how-sourcegraph-ai-platform-powers-cody.pdf',
        meta: {
            title: "How sourcegraph's AI platform powers cody",
            description:
                'Context awareness is key to the quality and precision of Cody. This paper outlines how Cody fetches the right context at the right time to answer queries.',
            image: '/whitepaper-files/how-sourcegraph-ai-platform-powers-cody.png',
        },
    },
    {
        name: 'sourcegraph-for-platform-engineering.pdf',
        filePath: '/whitepaper-files/sourcegraph-for-platform-engineering.pdf',
        meta: {
            title: 'Sourcegraph for platform engineering',
            description:
                'Sourcegraph allows platform engineering teams to move faster and de-risk large-scale changes, while giving their leaders visibility into where initiatives really stand to meet OKRs.',
            image: '/whitepaper-files/sourcegraph-for-platform-engineering.png',
        },
    },
]

const PdfPage: NextPage<PageProps> = ({ filePath, meta }) => (
    <Layout meta={meta} hideFooter={true} hideHeader={true}>
        <div className="flex h-screen flex-col">
            <iframe title={meta?.title} src={filePath} width="100%" height="100%" />
        </div>
    </Layout>
)

export default PdfPage

export const getStaticPaths: GetStaticPaths = () => {
    const paths = files.map(pdf => ({ params: { slug: [pdf.name] } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<PageProps> = ({ params }) => {
    const fileName = params?.slug?.[0] as string
    const { filePath = '', meta = {} } = files.find(whitepapper => whitepapper.name === fileName) || {}
    return {
        props: {
            filePath,
            meta,
        },
    }
}
