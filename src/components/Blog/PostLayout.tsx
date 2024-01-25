import { FunctionComponent } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'

import { Alert, Badge, Blockquote, Figure, Heading, HubSpotForm, TableWrapper, Video, YouTube } from '..'
import { PostComponentProps } from '../../interfaces/posts'

import { BylineAndDate } from './BylineAndDate'
import { Chart } from './Chart'
import styles from './PostLayout.module.css'

type PostComponents = import('mdx/types').MDXComponents
const components = { Alert, Badge, Blockquote, Chart, HubSpotForm, Figure, OpenInNewIcon, TableWrapper, Video, YouTube }

/**
 * This component is used to render all types of posts:
 * blog, podcast, and release posts
 */
export const PostLayout: FunctionComponent<PostComponentProps> = ({
    post: { frontmatter },
    content,
    className = '',
    tag: Tag = 'article',
    contentClassName = '',
}) => (
    <Tag className={className}>
        <div className="mt-12">
            <Heading as="h1" size="h2" className="!font-grotesk">
                {frontmatter.title}
            </Heading>
        </div>

        {(frontmatter.authors?.length || frontmatter.publishDate) && (
            <div className="mt-4">
                <BylineAndDate authors={frontmatter.authors} publishDate={frontmatter.publishDate} />
            </div>
        )}

        {content && (
            <div
                className={classNames(
                    'mt-12',
                    'min-h-[60vh]',
                    styles.content,
                    contentClassName,
                    'prose',
                    'prose-headings:font-semibold',
                    'prose-a:text-violet-500',
                    'prose-a:no-underline',
                    'hover:prose-a:text-violet-400',
                    'hover:prose-a:underline',
                    'prose-img:rounded-lg',
                    'prose-img:!mt-8',
                    'prose-code:before:hidden',
                    'prose-code:after:hidden'
                )}
            >
                <MDXRemote {...content} components={components as PostComponents} lazy={true} />
            </div>
        )}
    </Tag>
)
