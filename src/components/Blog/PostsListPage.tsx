import { FunctionComponent } from 'react'

import { Layout, BlogHeader, PostsList } from '@components'
import { useLoadMore } from '@hooks'
import { BlogTypeInfo, PostIndexItem } from '@interfaces/posts'

interface Props {
    blogInfo: BlogTypeInfo
    posts: PostIndexItem[]
    allPosts: PostIndexItem[]
}

export const PostsListPage: FunctionComponent<Props> = ({ allPosts, blogInfo, posts, children }) => {
    const loadMoreHook = useLoadMore(allPosts, 1, posts)

    return (
        <Layout meta={blogInfo.meta} className="bg-light navbar-light">
            <div className="container-lg">
                <BlogHeader {...blogInfo} />
                <div className="pt-4">
                    <PostsList posts={loadMoreHook.currentRecords} />
                    {loadMoreHook.currentRecords.length < allPosts.length && (
                        <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                className="btn btn-primary my-5"
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
