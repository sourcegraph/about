import { PageProps } from 'gatsby'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { TrySourcegraph } from '../components/TrySourcegraph'
import { RequestDemoAction } from '../css/components/actions/RequestDemoAction'

const Video: React.FunctionComponent<{ name: string }> = ({ name }) => (
    <video
        className="w-100 h-auto shadow"
        width={1280}
        height={720}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        controls={false}
    >
        <source
            type="video/webm"
            src={`https://storage.googleapis.com/sourcegraph-assets/batch-changes/${name}.webm`}
        />
        <source type="video/mp4" src={`https://storage.googleapis.com/sourcegraph-assets/batch-changes/${name}.mp4`} />
    </video>
)

export const BatchChangesPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph - Batch Changes',
            description: 'Automate large-scale code changes',
            image: '/favicon.png',
        }}
        heroAndHeaderClassName="batch-changes-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-7 mb-lg-6 mt-6">
                        <div className="text-uppercase">Batch Changes</div>
                        <h1 className="display-2 font-weight-bold mb-0">Automate large-scale code changes</h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Keep your code up to date, fix critical security issues, and pay down tech debt across all
                            of your repositories with Batch Changes.
                        </p>
                        <RequestDemoAction />
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
                        <ul className="list-spaced">
                            <li>
                                Find all occurrences of code to change with Sourcegraph{' '}
                                <a href="http://about.sourcegraph.com/">universal code search</a>
                            </li>
                            <li>Programmatically define changes by creating a declarative specification file</li>
                            <li>Execute specifications via a lightweight CLI</li>
                            <li>
                                Track changeset lifecycle statuses across multiple code hosts via the Sourcegraph UI
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-7">
                        <Video name="how-it-works" />
                    </div>
                </div>
            </ContentSection>
        </div>

        {/* Social proof */}
        <ContentSection className="py-4 py-md-7">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                        <p>
                            The ability to automate downstream changes that Sourcegraph Batch Changes provides is a key
                            capability for reducing the hidden burden of updates pushed across teams and enabling us to
                            increase our engineering velocity
                        </p>
                        <footer className="blockquote-footer">
                            Jared Hodge, Sr. Manager Developer Experience
                            <div className="my-4">
                                <img
                                    src="/external-logos/indeed-logo.svg"
                                    width="110px"
                                    height="30.250px"
                                    alt="Indeed"
                                />
                            </div>
                        </footer>
                    </blockquote>
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
                        With Batch Changes, you can automatically track changeset lifecycle status, like check state, reviews, and merge status via
                        the Sourcegraph UI so you can get the changesets merged.
                    </p>
                </div>
                <div className="col-lg-7">
                    <Video name="creation-to-merge" />
                </div>
            </div>
        </ContentSection>

        {/* Use Cases */}
        <ContentSection className="py-4 py-md-7">
            <h1 className="mb-3 text-center">How developers use Batch Changes </h1>
            <Tabs defaultActiveKey="configuration" id="use-cases" className="justify-content-center">
                <Tab eventKey="configuration" title="Configuration">
                    <div className="row mt-5 justify-content-center">
                        <p className="col-lg-8">
                            Quickly edit every CI, build, and other configuration files to make changes such as altering
                            steps, migrating versions, or changing base images.
                        </p>
                    </div>
                    <div className="text-center">
                        <img src="https://via.placeholder.com/815x392.png" />
                    </div>
                </Tab>
                <Tab eventKey="refactoring" title="Refactoring">
                    <div className="row mt-5 justify-content-center">
                        <p className="col-lg-8">
                            Use language-aware tooling of your choice to perform complex refactors like updating an API
                            and its function calls or replacing libraries entirely.
                        </p>
                    </div>
                    <div className="text-center">
                        <img src="https://via.placeholder.com/815x392.png" />
                    </div>
                </Tab>
                <Tab eventKey="security" title="Security">
                    <div className="row mt-5 justify-content-center">
                        <p className="col-lg-8">
                            Refactor code to replace insecure functions, update vulnerable packages, or modify container
                            configurations across hundreds of repositories.
                        </p>
                    </div>
                    <div className="text-center">
                        <img src="https://via.placeholder.com/815x392.png" />
                    </div>
                </Tab>
            </Tabs>
        </ContentSection>

        {/* Social proof */}
        <ContentSection className="py-4 py-md-7">
            <div className="row justify-content-center pt-md-4">
                <div className="col-lg-10 text-center">
                    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                        <p>
                            Sourcegraph Batch Changes gives us the confidence we need to understand the total impact of
                            large-scale code changes before we make them. This enables the entire team to make more
                            impactful decisions more often.
                        </p>
                        <footer className="blockquote-footer">
                            Trent Grover, Director of Architecture - Client Technologies, Workiva
                        </footer>
                        <div className="d-flex justify-content-center my-4">
                            <img src="/external-logos/workiva-vector-logo.svg" width="110px" alt="Workiva" />
                        </div>
                    </blockquote>
                </div>
            </div>
        </ContentSection>

        {/* Demo */}
        <ContentSection className="py-4 py-md-7">
            <h1 className="mb-3 text-center">See Batch Changes in action</h1>
            <div className="row justify-content-center pt-md-4">
                <div className="col-lg-8 container video-embed embed-responsive embed-responsive-16by9 ">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube-nocookie.com/embed/eOmiyXIWTCw?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder={0}
                        title="Sourcegraph Batch Changes demo"
                    ></iframe>
                </div>
            </div>
        </ContentSection>

        <hr className="container my-md-6" />

        <ContentSection>
            <TrySourcegraph />
        </ContentSection>
    </Layout>
)

export default BatchChangesPage
