import { FunctionComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import Link from 'next/link'

import { TelemetryRecorder } from '@sourcegraph/telemetry'

import {
    Layout,
    Filters,
    ResourceCard,
    resourceItems,
    Resource,
    ContentSection,
    CodyCta,
    useFilters,
    Heading,
    SearchInput,
} from '../components'

const sortResources = (resources: Resource[]): Resource[] =>
    resources.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())

const Resources: FunctionComponent<{ telemetryRecorder: TelemetryRecorder<'',''> }> = ({ telemetryRecorder }) => {
    const { filterGroups, setFilter, resetFilterGroup, resetFilterGroups } = useFilters({ telemetryRecorder })
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
        telemetryRecorder.recordEvent(`resources.${isFeatured ? 'featuredItem' : 'item'}`, 'click', { privateMetadata: {
            title,
            description,
            contentType,
        }})
    }

    useEffect(() => {
        if (!resourcesToDisplay.length) {
            telemetryRecorder.recordEvent('resources.filter.emptyResults', 'view', { privateMetadata: { searchTerm }})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resourcesToDisplay.length, telemetryRecorder])

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
            <ContentSection background="white" parentClassName="bg-gray-50 !pb-0">
                <div className="relative -top-[107px] -mb-[43px] -mt-[70px] flex max-w-[1280px] flex-col justify-between rounded-md border border-gray-500 bg-white px-[23px] py-[31px] shadow-sm md:-top-[84px] md:-mb-[84px] md:gap-x-[144px] lg:flex-row lg:px-[79px] lg:py-[63px]">
                    <div className="flex flex-shrink-0 flex-col items-center justify-center lg:items-start">
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
                        <img
                            className="w-full rounded-lg md:max-w-[700px]"
                            src="/big-code.png"
                            alt="Featured resource"
                            width="2400"
                            height="1350"
                        />
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
                        <SearchInput onSearch={setSearchTerm} label="SEARCH" />
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
            <CodyCta source="Resources Page" />
        </Layout>
    )
}

export default Resources
