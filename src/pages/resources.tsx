import { FunctionComponent } from 'react'

// import AlertOutlineIcon from 'mdi-react/AlertOutlineIcon'

import { Layout, Filters, Card, resourceItems, ContentSection, RequestDemoTrySourcegraph } from '@components'

const Resources: FunctionComponent = () => {
    const topResources = [
        ...resourceItems.filter(item => item.featured),
        ...resourceItems
            .filter(item => !item.featured)
            .slice(0, 3)
            .sort((a, b) => new Date(a.publishDate).valueOf() - new Date(b.publishDate).valueOf()),
    ]

    const bottomResources = resourceItems.filter(item => !item.featured).splice(3)
    // TODO: Add this when all dates are added to data
    // .sort((a, b) => new Date(a.publishDate).valueOf() - new Date(b.publishDate).valueOf())

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
            <Filters />

            <ContentSection color="white">
                {/* <div className="tw-text-center tw-max-w-xl tw-mx-auto tw-mb-3xl">
                    <span className="tw-bg-violet-100 tw-text-violet-400 tw-w-md tw-h-md tw-p-1 tw-rounded-full tw-inline-flex tw-items-center tw-justify-center tw-mb-xxs">
                        <AlertOutlineIcon className="tw-inline" size={18} />
                    </span>
                    <h4>We're stumped!</h4>
                    <p className="tw-text-lg">We couldn't find any resource that matched all the filters chosen above — but maybe these will be of use...</p>
                </div> */}

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
