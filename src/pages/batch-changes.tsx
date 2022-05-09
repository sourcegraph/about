import { FunctionComponent } from 'react'

import Link from 'next/link'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import {
    BlockquoteWithBorder,
    ContentSection,
    Layout,
    Video,
    TrySourcegraph,
    buttonStyle,
    buttonLocation,
} from '@components'

const batchChangesDemoFormURL = '/contact/request-batch-changes-demo'

export const BatchChangesPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Batch Changes | Large-Scale Code Changes',
            description:
                'Automate large-scale changes with Sourcegraph Batch Changes. Keep your code up to date and pay down tech debt across all repositories and code hosts.',
        }}
        className="batch-changes-page"
        heroAndHeaderClassName="batch-changes-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-7 mb-lg-6 mt-6">
                        <div className="text-uppercase">Batch Changes</div>
                        <h1 className="display-2 font-weight-bold mb-0">Automate large-scale code&nbsp;changes</h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Keep your code up to date, fix critical security issues, and pay down tech debt across all
                            of your repositories with Batch Changes.
                        </p>
                        <Link
                            href={batchChangesDemoFormURL}
                            passHref={true}
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-primary" title="Request a demo">
                                Request a demo
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        }
    >
        {/* Overview */}
        <ContentSection className="py-4 py-md-7 text-center">
            <h1 className="mb-3">Change code everywhere with a single declarative file</h1>
            <div className="row justify-content-center">
                <p className="col-md-8">
                    Batch Changes gives you a declarative structure for finding and modifying code across all of your
                    repositories. With a simple UI, it is easy to track and manage all of your changesets through checks
                    and code reviews until each change is merged.
                </p>
            </div>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <figure>
                        <img
                            src="/batch-changes/asking_developers_to_update_repos.svg"
                            alt="Graphic of many developers individually updating repositories, while some are not updating their repositories."
                            className="mw-100"
                        />
                        <figcaption className="mt-5">
                            Asking <strong>developers</strong> to update repositories
                        </figcaption>
                    </figure>
                </div>
                <div className="col-md-6 mt-4">
                    <figure>
                        <img
                            src="/batch-changes/using_batch_changes_to_update_repos.svg"
                            alt="Graphic of a single developer updating a lot of repositories."
                        />
                        <figcaption className="mt-5">
                            Using <strong className="text-purple">Batch Changes</strong> to update repositories
                        </figcaption>
                    </figure>
                </div>
            </div>
        </ContentSection>

        {/* Architecture */}
        <div className="bg-gradient-green-blue py-4 py-md-7">
            <ContentSection>
                <div className="row">
                    <div className="col-lg-5">
                        <h1 className="mb-3">Search, define, execute, and track code changes</h1>
                        <ul>
                            <li className="mt-2">
                                Find all occurrences of code to change with Sourcegraph{' '}
                                <a href="http://about.sourcegraph.com/">universal code search</a>
                            </li>
                            <li className="mt-2">
                                Programmatically define changes by creating a declarative specification file
                            </li>
                            <li className="mt-2">Execute specifications via a lightweight CLI</li>
                            <li className="mt-2">
                                Track changeset lifecycle status across multiple code hosts via the Sourcegraph UI
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-7">
                        <Video filePath="batch-changes/how-it-works" />
                    </div>
                </div>
            </ContentSection>
        </div>

        {/* Social proof */}
        <ContentSection className="py-4 pt-md-8 pb-md-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <BlockquoteWithBorder
                        quote={`The ability to automate downstream changes that Sourcegraph Batch Changes provides is a key
                        capability for reducing the hidden burden of updates pushed across teams and enabling us to
                        increase our engineering velocity.`}
                        author="Jared Hodge, Sr. Manager Developer Experience"
                        logo={{
                            src: '/external-logos/indeed-logo.svg',
                            alt: 'Indeed',
                        }}
                        bold={true}
                    />
                </div>
            </div>
        </ContentSection>

        {/* Track */}
        <ContentSection className="py-4 py-md-7">
            <div className="row">
                <div className="col-lg-5">
                    <h1 className="mb-3">Track changes from creation to merge</h1>
                    <p>Tracking changes to many repositories requires spreadsheets and manual labor.</p>
                    <p>
                        With Batch Changes, you can automatically track changeset lifecycle status, like check state,
                        reviews, and merge status via the Sourcegraph UI so you can get the changesets merged.
                    </p>
                </div>
                <div className="col-lg-7">
                    <Video filePath="batch-changes/creation-to-merge" />
                </div>
            </div>
        </ContentSection>

        {/* Use Cases */}
        <ContentSection className="py-4 py-md-7">
            <h1 className="mb-5 text-center">How developers are using Batch Changes </h1>
            <Tabs defaultActiveKey="configuration" id="use-cases" className="justify-content-center">
                <Tab eventKey="configuration" title="Configuration" className="bg-transparent ">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Quickly edit every CI, build, and other configuration files to make changes such as
                                altering steps, migrating versions, or changing base images.
                            </p>
                            <img
                                className="w-100 h-auto mt-4"
                                width="750"
                                height="400"
                                src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/update-circle-ci-username.png"
                                alt="Batch spec for updating the username in Circle CI configurations"
                            />
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="refactoring" title="Refactoring">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Use language-aware tooling of your choice to perform complex refactors like updating an
                                API and its function calls or replacing libraries entirely.
                            </p>
                            <img
                                className="w-100 h-auto mt-4"
                                width="850"
                                height="380"
                                src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/comby-sprintf-to-itoa.png"
                                alt="Batch spec for using Comby to refactor Go code"
                            />
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="security" title="Security">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <p>
                                Refactor code to replace insecure functions, update vulnerable packages, or modify
                                container configurations across hundreds of repositories.
                            </p>
                            <img
                                className="w-100 h-auto mt-4"
                                width="750"
                                height="472"
                                src="https://storage.googleapis.com/sourcegraph-assets/batch-changes/pin-docker-images.png"
                                alt="Batch spec for pinning Docker base images to specific versions"
                            />
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </ContentSection>

        {/* Social proof */}
        <ContentSection className="py-4">
            <div className="row justify-content-center pt-md-4">
                <div className="col-lg-10 text-center">
                    <BlockquoteWithBorder
                        quote={`Sourcegraph Batch Changes gives us the confidence we need to understand the total impact of
                        large-scale code changes before we make them. This enables the entire team to make more
                        impactful decisions more often.`}
                        author="Trent Grover, Director of Architecture - Client Technologies, Workiva"
                        logo={{
                            src: '/external-logos/workiva-vector-logo.svg',
                            alt: 'Workiva',
                        }}
                        bold={true}
                    />
                </div>
            </div>
        </ContentSection>

        {/* Demo */}
        <ContentSection className="py-4 py-md-7">
            <h1 className="mb-3 text-center">See Batch Changes in action</h1>
            <div className="row justify-content-center pt-md-4">
                <div className="col-lg-8 container video-embed embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/eOmiyXIWTCw?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder={0}
                        title="Sourcegraph Batch Changes demo"
                    />
                </div>
            </div>
        </ContentSection>

        <div className="border-top container my-md-6 my-5" />

        <ContentSection>
            <TrySourcegraph demoFormURL={batchChangesDemoFormURL} />
        </ContentSection>
    </Layout>
)

export default BatchChangesPage
