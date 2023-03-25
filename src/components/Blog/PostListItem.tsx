import { FunctionComponent } from 'react'

import classNames from 'classnames'
import { truncate } from 'lodash'
import Link from 'next/link'

import { FrontMatter, PostIndexItemProps } from '../../interfaces/posts'
import { formatDate } from '../../util'
import { Heading } from '../Heading'

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

        <Heading as="h2" size="h5" className="b-0 font-bold leading-none">
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

const BylineAndDate: React.FunctionComponent<{
    authors: FrontMatter['authors']
    publishDate: FrontMatter['publishDate']
}> = ({ authors, publishDate }) => (
    <p className="text-sm text-gray-400">
        {authors?.length && (
            <span className="mr-1">
                {authors.map((a, index) => (
                    <span key={a.name} className="font-semibold text-gray-600">
                        {a.url ? (
                            <Link href={a.url} className="font-semibold text-gray-600">
                                {a.name}
                            </Link>
                        ) : (
                            a.name
                        )}
                        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                        {index === authors.length - 1 ? ' ' : ', '}
                    </span>
                ))}
            </span>
        )}
        {publishDate && <PublishDate date={publishDate} />}
    </p>
)

const PublishDate: React.FunctionComponent<{ date: string }> = ({ date }) => (
    <time className="whitespace-nowrap" dateTime={date}>
        {formatDate(date)}
    </time>
)
