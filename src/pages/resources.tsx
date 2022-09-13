import { FunctionComponent } from 'react'

import AlertOutlineIcon from 'mdi-react/AlertOutlineIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import {
    Layout,
    Filters,
    Card,
    resourceItems,
    Resource,
    ContentSection,
    useFilters,
    Hero,
    CtaSection,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

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
            heroAndHeaderClassName="tw-bg-white"
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

            <ContentSection background="white" className="tw-max-w-[1062px]">
                {!!noResults && (
                    <div className="tw-text-center tw-max-w-xl tw-mx-auto tw-mb-3xl">
                        <span className="tw-bg-violet-100 tw-text-violet-400 tw-w-md tw-h-md tw-p-1 tw-rounded-full tw-inline-flex tw-items-center tw-justify-center tw-mb-xxs">
                            <AlertOutlineIcon className="tw-inline" size={18} />
                        </span>
                        <h4>We're stumped!</h4>
                        <p className="tw-text-lg">
                            Sorry, we don't have a match for that. Try adjusting the filters to expand the results.
                            Can't find what you're looking for?{' '}
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Schedule a call
                                </a>
                            </Link>{' '}
                            with a Sourcegraph teammate.
                        </p>
                    </div>
                )}

                <div className="tw-grid sm:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-x-sm tw-gap-y-xl">
                    {resources.map(resource => (
                        <Card key={resource.title} resource={resource} />
                    ))}
                </div>
            </ContentSection>

            <CtaSection
                background="lightNebulousMars"
                title="Get started with Sourcegraph"
                description="Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert or try Sourcegraph for free."
                cta1={{
                    text: 'Get Started',
                    link: '/get-started/self-hosted',
                    ctaStyle: 'primaryButton',
                }}
                cta2={{
                    text: 'Request a demo',
                    link: '/demo',
                    icon: <ArrowRightIcon />,
                }}
                centerContent={true}
            />
        </Layout>
    )
}

export default Resources
