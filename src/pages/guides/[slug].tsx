import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '../../components'

const files = [
    {
        name: 'sourcegraph-for-platform-engineering.pdf',
        filePath: '/pdf-in-page/sourcegraph-for-platform-engineering.pdf',
        meta: {
            title: 'Sourcegraph for platform engineering',
            description:
                'Sourcegraph allows platform engineering teams to move faster and de-risk large-scale changes, while giving their leaders visibility into where initiatives really stand to meet OKRs.',
            image: '/white-papers/sourcegraph-for-platform-engineering.png',
        },
    },
]

interface Props {
    filePath: string
    meta?: {
        title: string
        description: string
        image: string
    }
}

/**
 * Renders a PDF within Next.js pages, enhancing social media previews and supporting OG meta tags.
 */
const PdfPage: NextPage<Props> = ({ filePath, meta = {} }) => (
    <Layout meta={meta} hideFooter={true} hideHeader={true}>
        <div className="flex h-screen flex-col">
            <object title={meta?.title} data={filePath} type="application/pdf" width="100%" height="100%" />
        </div>
    </Layout>
)

export default PdfPage

export const getStaticPaths: GetStaticPaths = () => {
    const paths = files.map(pdf => ({ params: { slug: pdf.name } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
    const fileName = params?.slug as string
    const { filePath = '', meta } = files.find(file => file.name === fileName) || {}

    return {
        props: {
            filePath,
            meta,
        },
    }
}
