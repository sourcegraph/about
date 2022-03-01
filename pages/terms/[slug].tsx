import path from 'path'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { getMarkdownPages, loadMarkdownFile, serializeMdxSource } from '@lib'

interface PageProps {
    page: Page
    content: MDXRemoteSerializeResult
}

interface FrontMatter {
    title?: string
    layout?: string
    slug?: string
    description?: string
    author?: string
    authorUrl?: string
    publishDate?: Date
    heroImage?: string
    socialImage?: string
    tags?: string[]

}

interface Page {
    content: string
    frontMatter: FrontMatter
}

const CONTENT_PARENT_DIRECTORY = './content/terms'

const Page: NextPage<PageProps> = ({ page, content }) => (
    <div>
        <h1>{page.frontMatter.title}</h1>
        <MDXRemote {...content} />
    </div>
)

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getMarkdownPages(path.join(process.cwd(), CONTENT_PARENT_DIRECTORY))
    const slugs = paths.map(path => path.slugPath)

    return {
        paths: slugs.map((slug: string) => ({ params: { slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    if (!params || !params.slug) {
        throw new Error('Missing slug')
    }

    console.log(path.resolve('./content', 'terms'))
    const page = await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, `${params.slug as string}.md`)) as Page
    const content = await serializeMdxSource(page.content)

    return {
        props: {
            page,
            content,
            preview
        }
    }
}

export default Page
