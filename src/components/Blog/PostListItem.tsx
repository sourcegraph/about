import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { PostIndexItemProps } from '../../interfaces/posts'
import { truncate } from '../../lib/utils'

import { BylineAndDate } from './BylineAndDate'

export const PostListItem: FunctionComponent<PostIndexItemProps> = ({
    frontmatter,
    excerpt,
    slugPath,
    className,
    blogType,
    children,
}) => (
    <article className={classNames(className)}>
        <Link
            href={`/${blogType}/${slugPath}`}
            className="group block overflow-hidden rounded-lg hover:-translate-y-1.5"
            style={{ transition: 'transform 500ms cubic-bezier(.67,.03,.25,1.12)' }}
        >
            <img
                className="h-full rounded-lg object-cover"
                src={
                    frontmatter.heroImage
                        ? frontmatter.heroImage
                        : 'https://storage.googleapis.com/sourcegraph-assets/sourcegraph-social-image.png'
                }
                alt={frontmatter.title}
            />
        </Link>

        <h2 className="text-blog-h3 mt-4 mb-3 leading-tight">
            <Link
                href={`/${blogType}/${slugPath}`}
                className="block text-gray-600 hover:text-violet-500"
                title={frontmatter.title}
            >
                {frontmatter.title}
            </Link>
        </h2>

        {(frontmatter.authors?.length || frontmatter.publishDate) && (
            <BylineAndDate authors={frontmatter.authors} publishDate={frontmatter.publishDate} />
        )}

        {slugPath && (
            <p className="mt-3 block text-gray-400">
                {frontmatter.description
                    ? truncate(frontmatter.description, 300)
                    : typeof excerpt === 'string' && excerpt}
            </p>
        )}

        {children}
    </article>
)
