import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '../../components'

const files = [
    {
        name: 'cody-context-architecture.pdf',
        filePath: '/pdf-in-page/cody-context-architecture.pdf',
        meta: {
            title: 'Cody context architecture',
            description:
                'Context awareness is key to the quality and precision of Cody. This paper outlines how Cody fetches the right context at the right time to answer queries',
            image: '/pdf-in-page/cody-context-architecture.png',
        },
    },
    {
        name: 'how-sourcegraph-ai-platform-powers-cody.pdf',
        filePath: '/pdf-in-page/how-sourcegraph-ai-platform-powers-cody.pdf',
        meta: {
            title: "How sourcegraph's AI platform powers cody",
            description:
                'Context awareness is key to the quality and precision of Cody. This paper outlines how Cody fetches the right context at the right time to answer queries.',
            image: '/pdf-in-page/how-sourcegraph-ai-platform-powers-cody.png',
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
