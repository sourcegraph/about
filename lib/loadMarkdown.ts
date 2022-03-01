import fs from 'fs/promises'

import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

interface Page {
    frontMatter: FrontMatter
    content: string
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

export const loadMarkdownFile = async (filename: string): Promise<Page | Error> => {
    const page = await fs.readFile(filename, 'utf8')
        .then(page => {
            const { data, content } = matter(page)
            return { frontMatter: data, content }
        })
        .catch(error => { throw new Error(error) })

        return page
}

export const serializeMdxSource = async (markdownContent: string): Promise<MDXRemoteSerializeResult> => {
    const serializeResult = await serialize(markdownContent, {
        mdxOptions: {
            rehypePlugins: [
                // Add "slug" IDs to each heading, for links and table of contents.
                rehypeSlug,
                // Add auto links to each heading.
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            className: 'link-hover',
                        },
                        behavior: 'append',
                        content: { type: 'text', value: '#' },
                    },
                ],
            ],
        },
    })

    return serializeResult
}
