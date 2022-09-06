import { FunctionComponent } from 'react'

import AlertOutlineIcon from 'mdi-react/AlertOutlineIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Layout, Filters, Card, resourceItems, ContentSection, useFilters, Hero, CtaSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const Resources: FunctionComponent = () => {
    const { filterGroups, setFilter } = useFilters()

    const filteredResources = [
        ...resourceItems.filter(item => item.featured),
        ...resourceItems
            .filter(item => !item.featured)
            .sort((a, b) => new Date(a.publishDate).valueOf() - new Date(b.publishDate).valueOf()),
    ]

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
            <Filters groups={filterGroups} setFilter={setFilter} />

            <ContentSection background="white" className="tw-max-w-5xl">
                {/* TODO: Show when there are no results */}
                {false && (
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

                <div className="tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-sm">
                    {filteredResources.map(resource => (
                        <Card key={resource.title} resource={resource} />
                    ))}
                </div>
            </ContentSection>

            <CtaSection
                background="lightNebulousMars"
                title="Get started with Sourcegraph"
                description="Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert or Try Sourcegraph for free."
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
