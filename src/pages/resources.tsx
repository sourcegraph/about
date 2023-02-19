import { FunctionComponent } from 'react'

import AlertOutlineIcon from 'mdi-react/AlertOutlineIcon'

import {
    Layout,
    Filters,
    Card,
    resourceItems,
    Resource,
    ContentSection,
    useFilters,
    Hero,
    CallToActionContentSection,
} from '../components'

const sortResources = (resources: Resource[]): Resource[] =>
    resources.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())

const Resources: FunctionComponent = () => {
    const { filterGroups, setFilter, resetFilterGroup, resetFilterGroups } = useFilters()

    // Checked filters
    const checkedContentTypes = filterGroups
        .find(group => group.title === 'Content Type')
        ?.filters.filter(filter => filter.checked)
        .map(filter => filter.text)
    const checkedSubjects = filterGroups
        .find(group => group.title === 'Subject')
        ?.filters.filter(filter => filter.checked)
        .map(filter => filter.text)
    const checkedFilters = filterGroups.flatMap(group => group.filters).filter(filter => filter.checked)

    // Featured and unfeatured resources
    const featuredResources = sortResources(resourceItems.filter(item => item.featured))
    const unfeaturedResources = sortResources(resourceItems.filter(item => !item.featured))

    // Default, no filters applied
    let resources = [...featuredResources, ...unfeaturedResources]

    // If no checkedContentTypes && checkedSubjects, filter on checkedSubjects
    if (!checkedContentTypes?.length && checkedSubjects?.length) {
        resources = resources.filter(item =>
            checkedSubjects?.every(subject => item.subjects.some(itemSubjects => itemSubjects.includes(subject)))
        )
    }

    // If checkedContentTypes && no checkedSubjects, filter on contentTypes
    if (checkedContentTypes?.length && !checkedSubjects?.length) {
        resources = resources.filter(item => checkedContentTypes?.some(type => type.includes(item.contentType)))
    }

    // If checkedContentTypes && checkedSubjects, filter on both
    if (checkedContentTypes?.length && checkedSubjects?.length) {
        resources = resources
            .filter(item => checkedContentTypes?.some(type => type.includes(item.contentType)))
            .filter(item =>
                checkedSubjects?.every(subject => item.subjects.some(itemSubjects => itemSubjects.includes(subject)))
            )
    }

    // if checkedFilters but no results, show featured
    const noResults = checkedFilters?.length && !resources?.length
    if (noResults) {
        resources = featuredResources
    }

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Resources',
                description: 'Sourcegraph workshops, case studies, whitepapers, blog posts, and recorded events',
            }}
            heroAndHeaderClassName="bg-white"
            hero={
                <Hero
                    variant="white"
                    title="Resources"
                    subtitle="Blog posts, guides, customer stories, and more."
                    centerContent={true}
                />
            }
        >
            <Filters
                groups={filterGroups}
                setFilter={setFilter}
                resetFilterGroup={resetFilterGroup}
                resetFilterGroups={resetFilterGroups}
                disabledClear={!checkedFilters.length}
            />

            <ContentSection background="white" className="max-w-[1062px]">
                {!!noResults && (
                    <div className="mx-auto mb-3xl max-w-md text-center">
                        <span className="mb-xxs inline-flex h-md w-md items-center justify-center rounded-full bg-violet-100 p-1 text-violet-400">
                            <AlertOutlineIcon className="inline" size={18} />
                        </span>
                        <h4>We're stumped!</h4>
                        <p className="text-lg">
                            Sorry, we don't have a match for that. Try adjusting the filters to expand the results.
                        </p>
                    </div>
                )}

                <div className="grid gap-x-sm gap-y-xl sm:grid-cols-2 xl:grid-cols-3">
                    {resources.map(resource => (
                        <Card key={resource.title} resource={resource} />
                    ))}
                </div>
            </ContentSection>

            <CallToActionContentSection />
        </Layout>
    )
}

export default Resources
