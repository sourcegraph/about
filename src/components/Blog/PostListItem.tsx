import { FunctionComponent } from 'react'

import classNames from 'classnames'
import { truncate } from 'lodash'
import Link from 'next/link'

import { PostIndexItemProps } from '../../interfaces/posts'
import { Heading } from '../Heading'

import { BylineAndDate } from './BylineAndDate'

export const PostListItem: FunctionComponent<PostIndexItemProps> = ({
    frontmatter,
    excerpt,
    slugPath,
    className,
    blogType,
    children,
}) => (
    <article className={classNames(className, 'space-y-2')}>
        <Link href={`/${blogType}/${slugPath}`} className="mb-3 block">
            <img
                className="w-full rounded-lg"
                src={
                    frontmatter.heroImage
                        ? frontmatter.heroImage
                        : 'https://storage.googleapis.com/sourcegraph-assets/sourcegraph-social-image.png'
                }
                alt={frontmatter.title}
            />
        </Link>

        <Heading as="h2" size="h5" className="b-0 !font-grotesk font-bold leading-none">
            <Link
                href={`/${blogType}/${slugPath}`}
                className="block text-gray-600 hover:text-violet-500 hover:underline"
                title={frontmatter.title}
            >
                {frontmatter.title}
            </Link>
        </Heading>

        {slugPath && (
            <p className="text-gray-500">
                {frontmatter.description
                    ? truncate(frontmatter.description, { length: 300 })
                    : typeof excerpt === 'string' && excerpt}
            </p>
        )}

        {children}

        {(frontmatter.authors?.length || frontmatter.publishDate) && (
            <BylineAndDate authors={frontmatter.authors} publishDate={frontmatter.publishDate} />
        )}
    </article>
)
