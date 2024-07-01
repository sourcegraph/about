import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

export const CaseStudy: FunctionComponent = () => {
    const trentGrover = 'Trent Grover, Director of Architecture, Workiva'

    return (
        <Layout
            meta={{
                title: 'Workiva reduces the time it takes to make large-scale code changes by 80%',
                description:
                    'Workiva case study. Learn how Workiva uses Sourcegraph Batch Changes to reduce the time it takes to make large-scale code updates by 80%.',
            }}
            headerColorTheme="dark"
        >
            <CaseStudyLayout
                customer="Workiva"
                title="Workiva reduces the time it takes to make large-scale code changes by 80%"
                logo="/external-logos/workiva-logo.svg"
                quote={{
                    text: 'Sourcegraph Batch Changes gives us the confidence we need to understand the total impact of large-scale code changes before we make them. This enables the entire team to make more impactful decisions more often.',
                    author: trentGrover,
                    image: '/case-studies/trent-grover-workiva.jpg',
                }}
            >
                <ContentSection background="white" slimWidth={true}>
                    <h2 className="pt-8 pb-1">Paying down tech debt</h2>

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

                    <Blockquote
                        quote="Every time I used [our internal tool], I had to fiddle with something just to get it to work."
                        author="Corwin Sheahan, Senior Software Engineer, Workiva"
                    />

                    <p>
                        Whenever a new version of a library came out, they'd either have to manually make the change
                        across dozens of repositories, spend time improving their internal tool to help automate the
                        process, or add the update to their backlog.
                    </p>

                    <Blockquote
                        quote="We fell into the habit of letting tech debt accumulate to the point where all of the sudden we'd have to bring everything to a screeching halt and do nothing for a month or sprint or even a quarter and clean up tech debt around a certain area. The easier the tooling, the faster we can release breaking changes."
                        author={trentGrover}
                    />

                    <h2 className="pt-8 pb-1">Automating large-scale updates with Batch Changes</h2>

                    <p>
                        As an organization that values paying down tech debt, Workiva's Client Platform team started
                        using Sourcegraph{' '}
                        <Link
                            href="/batch-changes"
                            title="Batch Changes"
                            className="btn-link"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Batch Changes
                        </Link>{' '}
                        to help them efficiently propagate updates to dependencies across all of their repositories
                        without any ongoing maintenance. The team has already used Batch Changes to:
                    </p>

                    <ul className="mt-4">
                        <li>Propagate a new version of React to all frontend repositories</li>
                        <li>Update API versions of Kubernetes resources</li>
                        <li>Migrate to a new CDN while updating all code references</li>
                        <li>Update UI component syntax as necessary to support a new version of the Dart language</li>
                        <li>
                            Run test batch changes to ensure that new Chrome web browser releases wouldn't result in any
                            software failures
                        </li>
                    </ul>

                    <Blockquote
                        quote="The fact that Batch Changes runs each step via Docker is super powerful. As long as there's a tool out there that does what you need, you can incorporate it into Batch Changes with minimal effort, and that's been awesome for us."
                        author="Evan Weible, Staff Software Engineer, Workiva"
                    />

                    <h2 className="pt-8 pb-1">
                        Workiva reduces the time it takes to make large-scale code changes by 80%
                    </h2>

                    <p>
                        The Client Platform team has already used Batch Changes numerous times to propagate large-scale
                        updates to the frameworks and shared libraries they maintain. In comparison to manually making
                        these changes, Batch Changes reduces the time it takes to make large-scale code changes by 80%.
                    </p>

                    <Blockquote
                        quote="Updating all of our repositories with Batch Changes saves time, is less error-prone, and gives us confidence that everything is going to plan."
                        author="Joe Bingham, Software Engineer, Workiva"
                    />

                    <p>
                        Instead of spending time maintaining their internal tool, the Workiva team will be using Batch
                        Changes going forward.
                    </p>

                    <Blockquote
                        quote="Using a tool that isn't maintained by us saves us time and drives better adoption. In comparison to the tool we built internally, it's much easier to work with, more feature complete, and well documented."
                        author="Evan Weible, Staff Software Engineer, Workiva"
                    />

                    <h3 className="pt-8 pb-1">About Workiva</h3>

                    <p>
                        Founded in 2008, Workiva's platform enables thousands of enterprises around the world to manage
                        and report business data. Over 3,000 businesses use Workiva to bring together everything their
                        business needs—teammates, datasets, and data sources—so they can work better in the cloud.
                    </p>
                    <p>
                        While Workiva’s cloud technology simplifies complex work for thousands of organizations around
                        the world, their internal teams also rely on cloud platforms to maintain critical components of
                        their software development infrastructure. To further reduce development costs while maintaining
                        their high bar for scalability, reliability, and security, Workiva chose to deploy Sourcegraph
                        on AWS. This enables the team to focus on leveraging Sourcegraph to its full potential without
                        distraction from infrastructure issues.
                    </p>
                    <br />
                </ContentSection>
            </CaseStudyLayout>
        </Layout>
    )
}

export default CaseStudy
