import { FunctionComponent, useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import classNames from 'classnames'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import { MDXRemote } from 'next-mdx-remote'

import { Alert, Badge, Blockquote, Figure, HubSpotForm, TableWrapper, Video, YouTube } from '..'
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
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
        const router = useRouter()
    
        useEffect(() => {
            const { userId } = router.query
            if (userId) {
                setIsModalOpen(true)
            }
        }, [router.query])
    
        const closeModal = (): void => {
            setIsModalOpen(false)
        }
    
    return (
    <Tag className={className}>
        <div>
            <h2 className="!font-display text-4xl xl:text-6xl">{frontmatter.title}</h2>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-12 rounded">
                        <h2 className="text-3xl mb-4">You are on the waitlist for OpenAI o1.</h2>
                        <p className="text-lg mb-4">We will email you when your account has been granted access.</p>
                        <button onClick={closeModal} type="button" className="btn btn-primary py-2 px-4"
                    >Ok</button>
                    </div>
                </div>
            )}
        </div>

        {(frontmatter.authors?.length || frontmatter.publishDate) && (
            <div className="mt-3">
                <BylineAndDate authors={frontmatter.authors} publishDate={frontmatter.publishDate} />
            </div>
        )}

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
)}
