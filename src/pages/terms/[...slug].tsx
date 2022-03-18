import path from 'path'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Layout, EmbeddedHubSpot } from '@components'
import { getMarkdownPages, loadMarkdownFile, serializeMdxSource } from '@lib'

export type Components = import('mdx/types').MDXComponents

export interface PageProps {
    page?: Page
    content?: MDXRemoteSerializeResult
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

export interface Page {
    content: string
    frontMatter: FrontMatter
}

const CONTENT_PARENT_DIRECTORY = './content/terms'

const components = { EmbeddedHubSpot }

const TermPage: NextPage<PageProps> = ({ page, content }) => (
    <Layout>
        <section className="content-page__title">{page && <h1>{page.frontMatter.title}</h1>}</section>
        <section className="content-page__body">
            {content && <MDXRemote {...content} components={components as Components} />}
        </section>
    </Layout>
)

export default TermPage

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getMarkdownPages(path.join(process.cwd(), CONTENT_PARENT_DIRECTORY))
    const slugs = paths.map(path => path.slugPath.split('/'))

    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    if (!params || !params.slug) {
        throw new Error('Missing slug')
    }

    const page = (await loadMarkdownFile(
        path.resolve(CONTENT_PARENT_DIRECTORY, `${(params.slug as string[]).join('/')}.md`)
    )) as Page
    const content = await serializeMdxSource(page.content)

    return {
        props: {
            page,
            content,
            preview,
        },
    }
}
