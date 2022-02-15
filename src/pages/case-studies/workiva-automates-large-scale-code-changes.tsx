import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection } from '@components'

export const CaseStudy: FunctionComponent = () => {
    const trentGrover = 'Trent Grover, Director of Architecture, Workiva'

    return (
        <Layout
            meta={{
                title: 'Workiva reduces the time it takes to make large-scale code changes by 80%',
                description:
                    'Workiva case study. Learn how Workiva uses Sourcegraph Batch Changes to reduce the time it takes to make large-scale code updates by 80%.',
                image: 'https://about.sourcegraph.com/sourcegraph-og.png',
            }}
            className="navbar-dark bg-black"
        >
            <CaseStudyLayout
                customer="Workiva"
                title="Workiva reduces the time it takes to make large-scale code changes by 80%"
                logo="/external-logos/workiva-logo.svg"
                quote={{
                    quote: 'Sourcegraph Batch Changes gives us the confidence we need to understand the total impact of large-scale code changes before we make them. This enables the entire team to make more impactful decisions more often.',
                    author: trentGrover,
                    image: '/case-studies/trent-grover-workiva.jpg',
                }}
            >
                <ContentSection color="white" className="col-md-6">
                    <div className="container">
                        <p>
                            Founded in 2008, Workiva's platform enables thousands of enterprises around the world to manage
                            and report business data. Over 3,000 businesses use Workiva to bring together everything their
                            business needs—teammates, datasets, and data sources—so they can work better in the cloud.
                        </p>

                        <h2 className="pt-5 pb-1">Paying down tech debt</h2>

                        <p>
                            The Client Platform Team at Workiva is responsible for developing and maintaining the frameworks
                            and shared libraries that all other products are built on. This includes a shared UI widget
                            library and maintaining dozens of Dart packages to support Workiva's entire engineering team.
                        </p>

                        <p>
                            Any time they shipped a release for one of their packages, they'd also have to propagate it
                            across 70+ repositories used by other teams to avoid breaking changes. While they developed
                            their own internal tool to automate these changes, it required ongoing maintenance and didn't
                            provide end-to-end visibility into the path to completion.
                        </p>

                        <p>
                            Whenever a new version of a library came out, they'd either have to manually make the change
                            across dozens of repositories, spend time improving their internal tool to help automate the
                            process, or add the update to their backlog.
                        </p>

                        <h2 className="pt-5 pb-1">Automating large-scale updates with Batch Changes</h2>

                        <p>
                            As an organization that values paying down tech debt, Workiva's Client Platform team started
                            using Sourcegraph <a href="/batch-changes">Batch Changes</a> to help them efficiently propagate
                            updates to dependencies across all of their repositories without any ongoing maintenance. The
                            team has already used Batch Changes to:
                        </p>

                        <ul className="mt-3">
                            <li>Propagate a new version of React to all frontend repositories</li>
                            <li>Update API versions of Kubernetes resources</li>
                            <li>Migrate to a new CDN while updating all code references</li>
                            <li>Update UI component syntax as necessary to support a new version of the Dart language</li>
                            <li>
                                Run test batch changes to ensure that new Chrome web browser releases wouldn't result in any
                                software failures
                            </li>
                        </ul>

                        <h2 className="pt-5 pb-1">
                            Workiva reduces the time it takes to make large-scale code changes by 80%
                        </h2>

                        <p>
                            The Client Platform team has already used Batch Changes numerous times to propagate large-scale
                            updates to the frameworks and shared libraries they maintain. In comparison to manually making
                            these changes, Batch Changes reduces the time it takes to make large-scale code changes by 80%.
                        </p>

                        <p>
                            Instead of spending time maintaining their internal tool, the Workiva team will be using Batch
                            Changes going forward.
                        </p>

                        <br />
                    </div>
                </ContentSection>
            </CaseStudyLayout>
        </Layout>
    )
}

export default CaseStudy
