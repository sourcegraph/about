import { FunctionComponent } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'

import { Alert, Badge, Blockquote, Figure, Heading, HubSpotForm, TableWrapper, Video, YouTube } from '..'
import { PostComponentProps } from '../../interfaces/posts'

import { BylineAndDate } from './BylineAndDate'
import styles from './PostLayout.module.css'

type PostComponents = import('mdx/types').MDXComponents
const components = { Alert, Badge, Blockquote, HubSpotForm, Figure, OpenInNewIcon, TableWrapper, Video, YouTube }

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
        <Heading as="h1" size="h2" className="!font-grotesk">
            {frontmatter.title}
        </Heading>

        {(frontmatter.authors?.length || frontmatter.publishDate) && (
            <BylineAndDate authors={frontmatter.authors} publishDate={frontmatter.publishDate} />
        )}

        {content && (
            <div className={classNames('min-h-[60vh]', styles.content, contentClassName)}>
                <MDXRemote {...content} components={components as PostComponents} />
            </div>
        )}
    </Tag>
)
