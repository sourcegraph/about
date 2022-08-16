import { FunctionComponent } from 'react'

import AlertOutlineIcon from 'mdi-react/AlertOutlineIcon'
import Link from 'next/link'

import {
    Layout,
    Filters,
    Card,
    resourceItems,
    ContentSection,
    RequestDemoTrySourcegraph,
    useFilters,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const Resources: FunctionComponent = () => {
    const { filterGroups, setFilter } = useFilters()

    const topResources = [
        ...resourceItems.filter(item => item.featured),
        ...resourceItems
            .filter(item => !item.featured)
            .slice(0, 3)
            .sort((a, b) => new Date(a.publishDate).valueOf() - new Date(b.publishDate).valueOf()),
    ]

    const bottomResources = resourceItems
        .filter(item => !item.featured)
        .splice(3)
        .sort((a, b) => new Date(a.publishDate).valueOf() - new Date(b.publishDate).valueOf())

    return (
        <Layout
            meta={{
                title: 'Sourcegraph - Resources',
                description: 'Sourcegraph workshops, case studies, whitepapers, blog posts, and recorded events',
            }}
            hero={
                // TODO: Modify Hero component to use bg gradients and replace this
                <div className="sg-bg-gradient-saturn tw-px-sm">
                    <div className="tw-max-w-screen-xl tw-mx-auto tw-py-24">
                        <h1 className="tw-mb-6">Resources</h1>
                        <h3 className="tw-max-w-[800px]">
                            Browse resources tailored to the use cases you care about, and learn how you can use
                            Sourcegraph to understand, fix, and automate across your codebase.
                        </h3>
                    </div>
                </div>
            }
        >
            <Filters groups={filterGroups} setFilter={setFilter} />

            <ContentSection color="white">
                <div className="tw-text-center tw-max-w-xl tw-mx-auto tw-mb-3xl">
                    <span className="tw-bg-violet-100 tw-text-violet-400 tw-w-md tw-h-md tw-p-1 tw-rounded-full tw-inline-flex tw-items-center tw-justify-center tw-mb-xxs">
                        <AlertOutlineIcon className="tw-inline" size={18} />
                    </span>
                    <h4>We're stumped!</h4>
                    <p className="tw-text-lg">
                        Sorry, we don't have a match for that. Try adjusting the filters to expand the results. Can't
                        find what you're looking for?{' '}
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

                <div className="tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-sm">
                    {topResources.map(resource => (
                        <Card key={resource.title} resource={resource} />
                    ))}
                </div>
            </ContentSection>

            <RequestDemoTrySourcegraph
                parentClassName="sg-bg-gradient-saturn"
                description="Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert or try Sourcegraph for free with up to 10 teammates."
            />

            <ContentSection color="white">
                <div className="tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-sm">
                    {bottomResources.map(resource => (
                        <Card key={resource.title} resource={resource} />
                    ))}
                </div>
            </ContentSection>

            <RequestDemoTrySourcegraph
                centerContent={true}
                parentClassName="sg-bg-gradient-saturn"
                description="Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert or try Sourcegraph for free with up to 10 teammates."
            />
        </Layout>
    )
}

export default Resources
