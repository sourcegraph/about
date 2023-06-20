import { FunctionComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import CloseIcon from 'mdi-react/CloseIcon'
import SearchIcon from 'mdi-react/SearchIcon'
import Link from 'next/link'

import {
    Layout,
    Filters,
    ResourceCard,
    resourceItems,
    Resource,
    ContentSection,
    useFilters,
    CallToActionWithCody,
    Heading,
} from '../components'
import { EventName, getEventLogger } from '../hooks/eventLogger'

const sortResources = (resources: Resource[]): Resource[] =>
    resources.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())

const Resources: FunctionComponent = () => {
    const { filterGroups, setFilter, resetFilterGroup, resetFilterGroups } = useFilters()
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filteredResources, setFilteredResources] = useState<Resource[]>([])

    const [displayLimit, setDisplayLimit] = useState<number>(6)
    const [previousDisplayLimit, setPreviousDisplayLimit] = useState<number>(displayLimit)
    const lastDisplayItemRef = useRef<HTMLAnchorElement>(null)

    // Featured and unfeatured resources
    const featuredResource = useMemo(() => sortResources(resourceItems.filter(item => item.featured)), [])[0]
    const unfeaturedResources = useMemo(() => sortResources(resourceItems.filter(item => !item.featured)), [])

    // Apply filters
    const filterByContentType = (resources: Resource[], contentTypes: string[]): Resource[] =>
        resources.filter(item => contentTypes.includes(item.contentType))

    const filterBySubjects = (resources: Resource[], subjects: string[]): Resource[] =>
        resources.filter(item =>
            subjects.some(subject => item.subjects.some(itemSubjects => itemSubjects.includes(subject)))
        )

    const applyFilters = useCallback(
        (resources: Resource[]): Resource[] => {
            const checkedContentTypes = filterGroups
                .find(group => group.title === 'Content Type')
                ?.filters.filter(filter => filter.checked)
                .map(filter => filter.text)
            const checkedSubjects = filterGroups
                .find(group => group.title === 'Subject')
                ?.filters.filter(filter => filter.checked)
                .map(filter => filter.text)

            let filteredResources = resources

            if (checkedContentTypes?.length) {
                filteredResources = filterByContentType(filteredResources, checkedContentTypes)
            }

            if (checkedSubjects?.length) {
                filteredResources = filterBySubjects(filteredResources, checkedSubjects)
            }

            return filteredResources
        },
        [filterGroups]
    )

    // Apply search term
    const applySearch = useCallback(
        (resources: Resource[]): Resource[] => {
            const cleanedSearchTerm = searchTerm.trim().replace(/\s+/g, ' ').toLowerCase()

            if (cleanedSearchTerm) {
                return resources.filter(
                    item =>
                        item.title.toLowerCase().includes(cleanedSearchTerm) ||
                        item.description.toLowerCase().includes(cleanedSearchTerm) ||
                        item.keyword.some(keyword => keyword.toLowerCase().includes(cleanedSearchTerm))
                )
            }

            return resources
        },
        [searchTerm]
    )

    // Apply filters and search term
    const applyFiltersAndSearch = useCallback(
        (resources: Resource[]): Resource[] => {
            let filteredResources = applyFilters(resources)
            filteredResources = applySearch(filteredResources)
            setFilteredResources(filteredResources)
            return filteredResources
        },
        [applyFilters, applySearch]
    )

    // Apply filters and search term to the resources
    const resources = useMemo(
        () => applyFiltersAndSearch([featuredResource, ...unfeaturedResources]),
        [applyFiltersAndSearch, featuredResource, unfeaturedResources]
    )

    // If checkedFilters but no results, show featured
    const checkedFilters = filterGroups.flatMap(group => group.filters).filter(filter => filter.checked)
    const noResults = checkedFilters?.length && !resources?.length

    // Resources to render on UI
    const resourcesToDisplay = resources.slice(0, Math.min(displayLimit, resources.length))

    const handleShowMore = (): void => {
        setDisplayLimit(prevLimit => Math.min(prevLimit + 6, resources.length))
    }

    const handleShowLess = (): void => {
        setPreviousDisplayLimit(displayLimit)
        setDisplayLimit(current => (current - 6 < 6 ? 6 : current - 6))
    }

    const handlerResourceItemClick = (resource: Resource, isFeatured?: boolean): void => {
        const { title, contentType, description } = resource
        const eventArguments = {
            title,
            description,
            contentType,
        }
        const eventName = isFeatured ? EventName.RESOURCE_FEATURED_ITEM_CLICK : EventName.RESOURCE_ITEM_CLICK
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log(eventName, eventArguments, eventArguments)
    }

    useEffect(() => {
        if (!resourcesToDisplay.length) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            getEventLogger().log(EventName.EMPTY_RESOURCE_SEARCH_RESULT, { searchTerm }, { searchTerm })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resourcesToDisplay.length])

    useEffect(() => {
        // Scroll the last resource item into view if display limit is reduced
        if (displayLimit < previousDisplayLimit && lastDisplayItemRef.current) {
            const cardRect = lastDisplayItemRef.current.getBoundingClientRect()
            const scrollOffset = cardRect.top - 170
            window.scrollTo({ top: window.scrollY + scrollOffset, behavior: 'smooth' })
        }
    }, [displayLimit, previousDisplayLimit])

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Resources',
                description: 'Sourcegraph workshops, case studies, whitepapers, blog posts, and recorded events',
            }}
            heroAndHeaderClassName="sg-resource-hero"
            headerColorTheme="purple"
            hero={
                <ContentSection
                    parentClassName="relative !pt-0"
                    className="pt-[72px] pb-[70px] text-center text-white md:pb-[30px]"
                >
                    <Heading size="h1" className="pb-6 text-white">
                        Resources
                    </Heading>
                    <p className="mb-[101px] text-[18px] md:mb-[70px] md:text-[30px]">
                        Videos, guides, customer stories, and more
                    </p>
                </ContentSection>
            }
        >
            <ContentSection background="white" parentClassName="bg-gray-50 !py-0">
                <div className="relative -top-[107px] -mb-[43px] -mt-[70px] flex max-w-[1280px] flex-col justify-between gap-x-[144px] rounded-md border border-gray-500 bg-white px-[23px] py-[31px] shadow-sm md:-top-[84px] md:-mb-[84px] lg:flex-row lg:px-[79px] lg:py-[63px]">
                    <div className="flex flex-col items-center justify-center lg:items-start">
                        <p className="pb-1 text-center font-mono font-[500] capitalize lg:text-left">
                            {featuredResource.contentType}
                        </p>
                        <Heading size="h2" className="mb-8 text-center !text-4xl md:mb-4 lg:text-left">
                            {featuredResource.title}
                        </Heading>
                        <Link
                            href={featuredResource.link}
                            className="hidden rounded-[5px] border border-violet-500 px-6 py-2 text-center font-semibold text-violet-500 hover:border-violet-400 hover:text-violet-400 lg:block"
                        >{`Read the ${featuredResource.contentType}`}</Link>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img className="max-h-[252px] w-full rounded-lg" src="/big-code.png" alt="Featured resource" />
                    </div>
                    <Link
                        href={featuredResource.link}
                        onClick={() => handlerResourceItemClick(featuredResource, true)}
                        className="mx-auto mt-8 w-fit rounded-[5px] border border-violet-500 px-6 py-2 text-center font-semibold text-violet-500 hover:border-violet-400 hover:text-violet-400 lg:hidden"
                    >{`Read the ${featuredResource.contentType}`}</Link>
                </div>
            </ContentSection>

            <ContentSection
                parentClassName="bg-gray-50 !pt-0"
                className="grid grid-cols-1 pb-4 md:mt-16 md:grid-cols-3 md:gap-x-[20px]"
            >
                <div className="w-full md:max-w-[371px]">
                    <div className="flex w-full items-center justify-between">
                        <div className="w-full">
                            <Heading size="h6" className="pb-4 text-gray-700">
                                SEARCH
                            </Heading>
                            <div className="relative flex w-full items-center">
                                <SearchIcon size={20} className="absolute left-3 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={event => setSearchTerm(event.target.value)}
                                    className="h-[54px] w-full rounded-lg border border-gray-300 py-2 pl-12 pr-[16px] focus:border-2 focus:border-violet-400 focus:shadow-card focus:outline-none"
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        className="absolute right-2 top-4 text-gray-400"
                                        onClick={() => setSearchTerm('')}
                                    >
                                        <CloseIcon size={24} className="mr-1 inline align-top" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <Filters
                        groups={filterGroups}
                        setFilter={setFilter}
                        resetFilterGroup={resetFilterGroup}
                        resetFilterGroups={resetFilterGroups}
                        disabledClear={!checkedFilters.length}
                    />
                </div>

                <div className="col-span-2">
                    {noResults || !resourcesToDisplay.length ? (
                        <div className="col-span-2 mx-auto mb-3xl text-center">
                            <span className="mb-xxs inline-flex h-md w-md items-center justify-center rounded-full bg-white p-1">
                                &#128534;
                            </span>
                            <h4>There are no items that match your search criteria.</h4>
                            <p className="text-lg">Please try searching with different terms or adjust your filters.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-x-[22px] gap-y-[22px] md:gap-y-[46px] lg:grid-cols-2">
                            {resourcesToDisplay.map((resource, index) => (
                                <ResourceCard
                                    key={resource.title}
                                    resource={resource}
                                    onClick={() => handlerResourceItemClick(resource)}
                                    ref={index === resourcesToDisplay.length - 1 ? lastDisplayItemRef : null}
                                />
                            ))}
                        </div>
                    )}
                    <div className="mx-auto mt-12 flex justify-center gap-x-2 md:mx-0 md:justify-start">
                        {displayLimit > 6 && filteredResources.length > 6 && (
                            <button
                                type="button"
                                className="rounded-[5px] bg-violet-500 px-6 py-2  text-base font-semibold text-white hover:bg-violet-400"
                                onClick={() => handleShowLess()}
                            >
                                Show Less
                            </button>
                        )}
                        {displayLimit < resources.length && (
                            <button
                                type="button"
                                className="rounded-[5px] bg-violet-500 px-6 py-2  text-base font-semibold text-white hover:bg-violet-400"
                                onClick={handleShowMore}
                            >
                                Show More
                            </button>
                        )}
                    </div>
                </div>
            </ContentSection>

            <CallToActionWithCody />
        </Layout>
    )
}

export default Resources
