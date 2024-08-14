import React, { useState } from 'react'

import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { Layout, HubSpotForm } from '../../components'
import { CalendarIcon, SearchIcon, ChevronDownIcon } from '../../components/Changelog/icons'
import { NoItemsFound } from '../../components/Changelog/NoItemsFound'
import { primaryTopics, secondaryTopics } from '../../constants/changelogTopics'
import { useLoadMoreAndSearch } from '../../hooks/loadMoreAndSearch'
import { getAllPublishedChangeLogPosts } from '../../lib/api'
import { formatDate } from '../../lib/utils'

const Changelog: NextPage<any> = ({ posts, allPosts }) => {
    const [expanded, setExpanded] = useState(false)

    const { currentRecords, page, setPage, setSearchTerm, filteredRecords, searchTerm, setSelectedTags, selectedTags, setSelectedVersions, selectedVersions } = useLoadMoreAndSearch(
        allPosts,
        1,
        posts
    )

    const allTags = currentRecords
        .map(record => record.frontmatter.tags)
        .flat()
        .filter((tag, index, self) => self.indexOf(tag) === index)

    const secondaryTags = [...allTags.filter(tag => (tag as string) && !primaryTopics.includes(tag as string) && !secondaryTopics.includes(tag as string)), ...secondaryTopics].sort()

    const initialTopicLimit = primaryTopics.length

    let visibleTopics = expanded ? [...primaryTopics, ...secondaryTags] : primaryTopics
    visibleTopics = [...selectedTags, ...visibleTopics].filter((tag, index, self) => self.indexOf(tag) === index)

    const remainingCount = secondaryTags.length - (visibleTopics.length - primaryTopics.length)

    const toggleExpanded = (): void => {
        setExpanded(!expanded)  
    }

    const toggleTag = (keyword: string): void => {
        if (selectedTags.includes(keyword)) {
            setSelectedTags(selectedTags.filter(tag => tag !== keyword));
        }
        else {
            setSelectedTags([...selectedTags, keyword]);
        }
    }

    const toggleVersion = (keyword = ''): void => {
        if (selectedVersions.includes(keyword)) {
            setSelectedVersions(selectedVersions.filter(version => version !== keyword));
        }
        else {
            setSelectedVersions([...selectedVersions, keyword]);
        }
    }

    return (
        <Layout className="bg-[#F9FAFB]">
            <div className="relative mt-[-30px] flex items-center justify-center bg-[#F9FAFB]">
                <div
                    className="relative flex h-[330px] w-[85%] items-center justify-center rounded-lg bg-cover bg-center"
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{ backgroundImage: 'url("/assets/changelog/bento-hero.png")' }}
                >
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-6 px-[80px]">
                        <h1 className="font-sans text-6xl font-semibold leading-extra-tight tracking-extra-tight text-white">
                            Changelog
                        </h1>
                        <p className="font-sans text-base font-normal leading-custom-150 tracking-custom-tight text-white">
                            Latest updates to the Sourcegraph and Cody platform
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-scree flex items-center justify-center bg-[#F9FAFB] pt-14">
                <div className="container mx-auto flex w-[83%] flex-col p-6 md:flex-row">
                    <div className="flex w-full flex-col md:w-3/4">
                        {currentRecords.length > 0 ? currentRecords.map(({ frontmatter: post, slugPath }) => (
                            <div key={post.title} className="mb-12 flex">
                                <aside className="w-1/4 pr-6">
                                    <div className="mb-5 flex items-center gap-1.5">
                                        <CalendarIcon />
                                        <h2 className="text-gray-900 font-sans text-sm font-normal leading-6 tracking-normal">
                                            {formatDate(post?.publishDate)}
                                        </h2>
                                    </div>
                                    {post.tags && post.tags.length > 0 &&
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map(keyword =>
                                                <button
                                                    type='button'
                                                    onClick={() => toggleTag(keyword)}
                                                    key={keyword}
                                                    className='flex px-2 py-1 items-center justify-center rounded-[6px] border border-gray-200 bg-white'
                                                >
                                                    <span className='text-center font-sans text-sm font-normal leading-[150%] tracking-[0px]'>
                                                        {keyword}
                                                    </span>
                                                </button>
                                            )}
                                        </div>
                                    }
                                </aside>
                                <svg
                                    width="30"
                                    height="100%"
                                    viewBox="0 0 30 100%"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 21.5V30H1V21.5C1 18.4625 3.46243 16 6.5 16H15.0164C15.2737 19.9091 18.5258 23 22.5 23C26.6422 23 30 19.6422 30 15.5C30 11.3578 26.6422 8 22.5 8C18.5258 8 15.2737 11.0909 15.0164 15H6.5C2.91016 15 0 17.9102 0 21.5ZM22.5 22C26.0898 22 29 19.0898 29 15.5C29 11.9102 26.0898 9 22.5 9C18.9102 9 16 11.9102 16 15.5C16 19.0898 18.9102 22 22.5 22Z"
                                        fill="#E4E9F4"
                                    />
                                    <path d="M1 30H0V399H1V30Z" fill="#E4E9F4" />
                                </svg>

                                {/* Content part */}
                                <div className="ml-4 w-[55%]">
                                    <Link
                                        href={`/changelog/${slugPath}`}
                                        className="not-prose group text-inherit hover:text-inherit"
                                    >
                                        <h2>{post.title}</h2>
                                    </Link>
                                    <div className="my-4 flex items-center space-x-2">
                                        <button type='button' onClick={() => toggleVersion(post?.version?.[0] ?? '')} className="flex items-center justify-center rounded-md bg-[#E4E9F4] px-2 py-1">
                                            <span className="text-center font-sans text-sm font-normal leading-[150%] tracking-[0px] text-[#374151]">
                                            {post?.version?.[0] ?? ''}
                                            </span>
                                        </button>
                                        <img
                                            src={post?.avatar}
                                            alt={post?.authors?.[0]?.name ?? ''}
                                            className="bg-lightgray h-[20px] w-[20px] rounded-full border-[0.5px] border-[#14171F] bg-cover bg-center bg-no-repeat"
                                        />
                                        <span className="font-sans text-sm font-normal leading-[150%] tracking-[0px] text-[#111928]">
                                            {post?.authors?.[0]?.name ?? ''}
                                        </span>
                                    </div>
                                    <p className='self-stretch text-[#111928] font-sans text-sm font-normal leading-[150%] tracking-normal'>{post?.description}</p>
                                </div>
                            </div>
                        )): <NoItemsFound />}

                        {/* <div className="flex-1 sm:pt-6">
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
                            </div>
                        */}
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

                    {/* Right part */}
                    <aside className="mt-6 w-full md:mt-0 md:w-1/4 md:pl-6">
                        <div className="top-0">
                            <div className="relative mb-4 w-full">
                                <input
                                    type="text"
                                    onChange={event => setSearchTerm(event.target.value)}
                                    placeholder="Search"
                                    className="w-full rounded-lg border border-[#A6B6D9] bg-[#F9FAFB] p-3 pl-10 font-sans text-sm font-normal leading-[21px] tracking-normal text-[#374151]"
                                />
                                <div className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 transform">
                                    <SearchIcon />
                                </div>
                            </div>
                            {
                                selectedVersions.length > 0 && 
                                <div className="space-y-6">
                                    <h2 className="mt-8 mb-6 font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-[#111928]">
                                        VERSION
                                    </h2>
                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {selectedVersions.map(keyword => (
                                            <button
                                                type='button'
                                                onClick={() => toggleVersion(keyword || '')}
                                                key={keyword}
                                                className={`flex px-2 py-1 ${selectedVersions.includes(keyword || '') ? 'justify-center items-center gap-1 rounded-md border border-[#E8D1FF] bg-[#EEDFFF]' : 'items-center justify-center rounded-[6px] border border-gray-200 bg-white'} `}
                                            >
                                                <span className={`text-center font-sans text-sm font-normal ${selectedVersions.includes(keyword || '') ? 'text-[#6112A3] leading-[150%] tracking-[0px]' : 'text-gray-900 leading-6 tracking-normal'}`}>
                                                    {keyword}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            }
                            <div className="space-y-6">
                                <h2 className="mt-8 mb-6 font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-[#111928]">
                                    TOPICS
                                </h2>
                                <div className="mb-8 flex flex-wrap gap-2">
                                    {visibleTopics.map(keyword => (
                                        <button
                                            type='button'
                                            onClick={() => toggleTag(keyword || '')}
                                            key={keyword}
                                            className={`flex px-2 py-1 ${selectedTags.includes(keyword || '') ? 'justify-center items-center gap-1 rounded-md border border-[#E8D1FF] bg-[#EEDFFF]' : 'items-center justify-center rounded-[6px] border border-gray-200 bg-white'} `}
                                        >
                                            <span className={`text-center font-sans text-sm font-normal ${selectedTags.includes(keyword || '') ? 'text-[#6112A3] leading-[150%] tracking-[0px]' : 'text-gray-900 leading-6 tracking-normal'}`}>
                                                {keyword}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                {remainingCount > 0 && !expanded && (
                                    <div>
                                        <button type='button' onClick={toggleExpanded} className="text-blue-600 flex items-center">
                                            <ChevronDownIcon />
                                            <span className="ml-2 font-sans text-sm font-normal leading-[21px] tracking-normal text-black">
                                                Expand all ({remainingCount})
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="mt-8 subsribe-changelog-button">
                                <h2 className="font-sans text-sm font-semibold uppercase leading-[21px] tracking-wide text-[#111928] mt-8 mb-4">SUBSCRIBE</h2>
                                <HubSpotForm
                                    formId="ab908b80-d1ed-44fd-968c-505c85ed72ac"
                                    inlineMessage="Thanks, you are now subscribed!"
                                />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const publishedPosts = await getAllPublishedChangeLogPosts()

    if (!publishedPosts) {
        return { notFound: true }
    }

    const postsIndexProps = publishedPosts.map(post => ({
        frontmatter: post.frontmatter,
        excerpt: post.excerpt,
        slugPath: post.slugPath,
        urlPath: post.urlPath,
    }))

    return {
        props: {
            allPosts: postsIndexProps,
            posts: publishedPosts.slice(0, 20),
            preview,
        },
    }
}

export default Changelog
