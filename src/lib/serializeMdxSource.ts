import rehypePrism from '@mapbox/rehype-prism'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import gfm from 'remark-gfm'

export const serializeMdxSource = async (markdownContent: string): Promise<MDXRemoteSerializeResult> => {
    const serializeResult = await serialize(markdownContent, {
        mdxOptions: {
            remarkPlugins: [gfm],
            rehypePlugins: [
                // Adds syntax highlighting
                rehypePrism,

                // Adds "slug" IDs to each heading, for links and table of contents.
                rehypeSlug,

                // Adds auto links to each heading.
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: {
                            className: 'anchor',
                            ariaHidden: true,
                            tabIndex: -1,
                        },
                        behavior: 'prepend',
                    },
                ],
            ],
        },
    })

    return serializeResult
}
