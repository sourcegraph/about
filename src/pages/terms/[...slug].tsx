import path from 'path'

import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { Layout, Badge, HubSpotForm, TableWrapper } from '../../components'
import { Page } from '../../interfaces/posts'
import { getAllSlugs, getMarkdownFiles, loadMarkdownFile, serializeMdxSource } from '../../lib'

export type Components = import('mdx/types').MDXComponents

export interface PageProps {
    page?: Page
    content?: MDXRemoteSerializeResult
}

const CONTENT_PARENT_DIRECTORY = './content/'

const components = { Badge, HubSpotForm, TableWrapper }

const TermPage: NextPage<PageProps> = ({ page, content }) => {
    const title = page?.frontmatter.title
    const description = page?.frontmatter.description
    const image = page?.frontmatter.socialImage
    const videoID = page?.frontmatter.videoID
    const canonical = page?.frontmatter.canonical
    const externalTitle = page?.frontmatter.externalTitle
    const externalDescription = page?.frontmatter.externalDescription
    const meta = {
        title,
        image,
        videoID,
        description,
        externalTitle,
        externalDescription,
        canonical,
    }

    if (title) {
        meta.title = `Sourcegraph - ${title}`
    }

    return (
        <Layout meta={meta}>
            <section className="bg-gray-200 py-8 text-center">{page && <h1>{title}</h1>}</section>
            <section className="mx-auto my-12 max-w-3xl">
                {content && <MDXRemote {...content} components={components as Components} />}
            </section>
        </Layout>
    )
}

export default TermPage

export const getStaticPaths: GetStaticPaths = async () => {
    const allSlugs = await getAllSlugs()
    if (!allSlugs) {
        return { paths: [{ params: { slug: ['404'] } }], fallback: false }
    }
    const slugs = Object.keys(allSlugs.records.terms.recordSlugs)
    const paths = slugs.map(slug => ({ params: { slug: slug.split('/') } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    if (!params?.slug) {
        throw new Error('Missing slug')
    }
    const files = await getMarkdownFiles()
    if (!files) {
        return { notFound: true }
    }
    const fileSlug = `${(params.slug as string[]).join('/')}`
    const filePath = files.records[fileSlug].filePath

    const page = (await loadMarkdownFile(path.resolve(CONTENT_PARENT_DIRECTORY, filePath))) as Page
    const content = await serializeMdxSource(page.content)

    return {
        props: {
            page,
            content,
            preview,
        },
    }
}
