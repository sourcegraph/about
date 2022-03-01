import path from 'path'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { getMarkdownPages } from '@lib'

interface PageProps {
    page: Page
}

interface Page {
    content: string
}

const Page: NextPage<PageProps> = ({ page }) => (
    <div>{page.content}</div>
)

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getMarkdownPages(path.join(process.cwd(), 'content/terms'))
    const slugs = paths.map(path => path.slugPath)

    return {
        paths: slugs.map((slug: string) => ({ params: { slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const page = { content: 'hi' }

    return {
        props: {
            page,
            preview
        }
    }
}

export default Page
