import { FunctionComponent, ReactNode } from 'react'

import { Layout } from '..'
import { useLoadMore } from '../../hooks/loadMore'
import { BlogTypeInfo, PostIndexItemProps } from '../../interfaces/posts'

import { BlogHeader } from './BlogHeader'
import { PostsList } from './PostsList'

interface Props {
    blogInfo: BlogTypeInfo
    posts: PostIndexItemProps[]
    allPosts: PostIndexItemProps[]
    children?: ReactNode
}

export const PostsListPage: FunctionComponent<Props> = ({ allPosts, blogInfo, posts, children }) => {
    const loadMoreHook = useLoadMore(allPosts, 1, posts)

    return (
        <Layout meta={blogInfo.meta}>
            <div className="mx-auto max-w-screen-xl px-sm">
                <BlogHeader {...blogInfo} variant="list" />

                <div className="pt-sm">
                    <PostsList posts={loadMoreHook.currentRecords} />

                    {loadMoreHook.currentRecords.length < allPosts.length && (
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="btn btn-primary my-8"
                                onClick={() => loadMoreHook.setPage(loadMoreHook.page + 1)}
                            >
                                Load more
                            </button>
                        </div>
                    )}
                </div>

                {children}
            </div>
        </Layout>
    )
}
