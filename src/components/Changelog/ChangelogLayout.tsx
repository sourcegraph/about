import { FunctionComponent } from 'react'

import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'

import { Alert, Badge, Blockquote, Figure, HubSpotForm, TableWrapper, Video, YouTube } from '..'
import { PostComponentProps } from '../../interfaces/posts'
import { formatDate } from '../../util'
import { Chart } from '../Blog/Chart'
import styles from '../Blog/PostLayout.module.css'

import { PostDetailsInfo } from './PostDetailsInfo'

import changelogComponents from '.'

type PostComponents = import('mdx/types').MDXComponents

const components = { ...changelogComponents, Alert, Badge, Blockquote, Chart, HubSpotForm, Figure, OpenInNewIcon, TableWrapper, Video, YouTube }

export const ChangelogLayout: FunctionComponent<PostComponentProps> = ({
    post: { frontmatter },
    content,
    className = '',
    tag: Tag = 'article',
    contentClassName = '',
}) => (
    <Tag className={className}>
        <div>
            <h2 className='font-sans text-3xl font-semibold tracking-tighter text-left'>{frontmatter.title}</h2>
        </div>
        <PostDetailsInfo
            version={frontmatter?.version}
            avatar={frontmatter?.authors?.[0]?.avatar ?? ''}
            username={frontmatter?.authors?.[0]?.name ?? ''}
            keywords={frontmatter?.tags}
            date={formatDate(frontmatter?.publishDate ?? '')}
        />
        {content && (
            <div
                className={classNames(
                    'mt-8',
                    'min-h-[60vh]',
                    styles.content,
                    contentClassName,
                    'prose',
                    '!max-w-[75ch]',
                    'xl:prose-lg',
                    'leading-relaxed',
                    'xl:leading-relaxed',
                    'prose-headings:font-semibold',
                    'prose-headings:mb-2.5',
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
