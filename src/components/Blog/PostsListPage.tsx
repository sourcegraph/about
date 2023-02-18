import { FunctionComponent, ReactNode } from 'react'

import { Layout, BlogHeader, PostsList } from '..'
import { useLoadMore } from '../../hooks/loadMore'
import { BlogTypeInfo, PostIndexItemProps } from '../../interfaces/posts'

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
            <div className="md:container px-sm mx-auto">
                <BlogHeader {...blogInfo} />

                <div className="pt-sm">
                    <PostsList posts={loadMoreHook.currentRecords} />

                    {loadMoreHook.currentRecords.length < allPosts.length && (
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="my-8 btn btn-primary"
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
