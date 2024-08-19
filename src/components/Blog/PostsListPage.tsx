import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { HubSpotForm, Layout } from '..'
import { useLoadMoreAndSearch } from '../../hooks/loadMoreAndSearch'
import { BlogTypeInfo, PostIndexItemProps } from '../../interfaces/posts'
import { SearchInput } from '../SearchInput'

import { BlogHeader } from './BlogHeader'
import { PostsList } from './PostsList'

import styles from '../../styles/CustomHubspotForm.module.scss'

interface Props {
    blogInfo: BlogTypeInfo
    posts: PostIndexItemProps[]
    allPosts: PostIndexItemProps[]
    children?: ReactNode
}

export const PostsListPage: FunctionComponent<Props> = ({ allPosts, blogInfo, posts, children }) => {
    const { currentRecords, page, setPage, setSearchTerm, filteredRecords, searchTerm } = useLoadMoreAndSearch(
        allPosts,
        1,
        posts
    )

    return (
        <Layout meta={blogInfo.meta}>
            <div className="mx-auto mb-20 max-w-screen-xl px-6 md:mt-5">
                <div className="flex flex-col gap-12 md:flex-row">
                    <div>
                        <div className="sticky top-20 md:max-w-[300px] md:pt-3 lg:max-w-[320px]">
                            <BlogHeader {...blogInfo} title="All posts" variant="list" className="pt-0 md:pt-3" />

                            <div className="mt-5 flex flex-col-reverse gap-6 sm:flex-col md:gap-8">
                                <SearchInput onSearch={setSearchTerm} label="Search" />

                                <div
                                    className={classNames(
                                        styles.blogForm,
                                        'flex flex-col items-start rounded-xl border border-gray-200 p-6'
                                    )}
                                >
                                    <h3 className="mb-4 text-xl font-normal leading-snug">
                                        Subscribe for the latest code AI news and product updates
                                    </h3>

                                    <HubSpotForm
                                        formId="ab908b80-d1ed-44fd-968c-505c85ed72ac"
                                        inlineMessage="Thanks, you are now subscribed!"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 sm:pt-6">
                        {!!searchTerm && !currentRecords.length ? (
                            <div className="col-span-2 mx-auto mb-16 text-center">
                                <span className="h-md w-md mb-2 inline-flex items-center justify-center rounded-full bg-white p-1">
                                    &#128534;
                                </span>
                                <h4>There are no items that match your search criteria.</h4>
                                <p className="text-lg">Please try searching with different terms.</p>
                            </div>
                        ) : (
                            <PostsList posts={currentRecords} />
                        )}

                        {currentRecords.length < filteredRecords.length && (
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    className="btn btn-primary my-8"
                                    onClick={() => setPage(page + 1)}
                                >
                                    Load more
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {children}
            </div>
        </Layout>
    )
}
