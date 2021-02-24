import { Link } from 'gatsby'
import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { TrySourcegraph } from '../components/TrySourcegraph'

const title = 'Sourcegraph - Campaigns'
const desc =
    'Sourcegraph Campaigns - Make large-scale code changes.'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph - Campaigns',
            description: 'Make large-scale code changes',
            image: '/favicon.png',
        }}
        heroAndHeaderClassName="campaigns-page__header-and-hero"
        hero={
            <div className="campaigns-page campaigns-page__hero container mb-3">
                <div className="row">
                    <div className="col-lg-7 mb-lg-6 mt-6">
                        <h1 className="display-2 font-weight-bold mb-0">Make large-scale code changes</h1>
                        <p className="home__semiwide-paragraph my-5 display-4">
                            Remove legacy code, fix critical security issues, and XYZ across all of your repositories.
                        </p>
                    </div>
                    <div className="col-lg-5 mt-lg-6 pt-4 mb-6">
                        <h2 className="font-weight-normal campaigns-page__see-how">
                            FPO
                        </h2>
                        <img
                            src="/code-search-illustrated.svg"
                            className="home__diagram w-150"
                            alt="Code search across multiple code hosts, including GitHub, GitLab, BitBucket, and Azure"
                        />
                    </div>
                </div>
            </div>
        }
    >
        <div className="campaigns-page">
            <ContentSection className="mt-5">
                <div className="row">
                    <div className="col-lg-7 pl-lg-6">
                        FPO
                        <img
                            src="/code-search-illustrated.svg"
                            className="home__diagram w-150"
                            alt="Code search across multiple code hosts, including GitHub, GitLab, BitBucket, and Azure"
                        />
                    </div>
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Architecture</h2>
                        <ul>
                            <li>Find all occurrences of code to change with Sourcegraph universal code search</li>
                            <li>Programmatically define changes by creating a declarative specification file</li>
                            <li>Execute specifications via a lightweight CLI</li>
                            <li>Track changeset lifecycle statuses across multiple code hosts via the Sourcegraph UI</li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-10 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                The ability to automate downstream changes that Sourcegraph Campaigns provides is a key capability for reducing the hidden burden of updates pushed across teams and enabling us to increase our engineering velocity
                            </p>
                            <footer className="blockquote-footer">Jared Hodge, Sr. Manager Developer Experience</footer>
                            <div className="d-flex justify-content-center my-4">
                                <img src="/external-logos/indeed-logo.svg" width="110px" alt="Indeed" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="mt-5">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="display-3 font-weight-bold">Track progress</h2>
                        <p>
                            {' '}
                            FPO
                        </p>
                    </div>
                    <div className="col-lg-7 mt-5 pl-lg-4">
                        <img
                            src="/code-search-illustrated.svg"
                            className="home__diagram w-150"
                            alt="Code search across multiple code hosts, including GitHub, GitLab, BitBucket, and Azure"
                        />
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="mt-5">
                <h2 className="display-3 font-weight-bold">Use cases</h2>
                <Tabs defaultActiveKey="security" id="use-cases">
                    <Tab eventKey="security" title="Security">
                        <div className="row mt-5">
                            <div className="col-lg-5">
                                <img src="/external-logos/fpo1.jpg" width="400px" />
                            </div>
                            <div className="col-lg-7 pl-lg-4">
                                <h3>Security</h3>
                                <ul>
                                    <li>Refactor code to replace insecure functions, update vulnerable packages, or modify container configurations across hundreds of repositories.</li>
                                    <li>Quickly edit every CI, build and other configuration files to make changes such as altering steps, migrating versions or changing base images.</li>
                                    <li>Use language aware tooling of your choice to perform complex refactors like updating an API and its function calls or replacing libraries entirely.</li>
                                </ul>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="configuration" title="Configuration">
                        <div className="row mt-5">
                            <div className="col-lg-5">
                                <img src="/external-logos/fpo2.jpg" width="400px" />
                            </div>
                            <div className="col-lg-7 pl-lg-4">
                                <h3>Configuration</h3>
                                <ul>
                                    <li>Refactor code to replace insecure functions, update vulnerable packages, or modify container configurations across hundreds of repositories.</li>
                                    <li>Quickly edit every CI, build and other configuration files to make changes such as altering steps, migrating versions or changing base images.</li>
                                    <li>Use language aware tooling of your choice to perform complex refactors like updating an API and its function calls or replacing libraries entirely.</li>
                                </ul>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="refactoring" title="Refactoring">
                        <div className="row mt-5">
                            <div className="col-lg-5">
                                <img src="/external-logos/fpo1.jpg" width="400px" />
                            </div>
                            <div className="col-lg-7 pl-lg-4">
                                <h3>Refactoring</h3>
                                <ul>
                                    <li>Refactor code to replace insecure functions, update vulnerable packages, or modify container configurations across hundreds of repositories.</li>
                                    <li>Quickly edit every CI, build and other configuration files to make changes such as altering steps, migrating versions or changing base images.</li>
                                    <li>Use language aware tooling of your choice to perform complex refactors like updating an API and its function calls or replacing libraries entirely.</li>
                                </ul>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </ContentSection>
            <ContentSection className="mt-5">
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-10 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                "The ability to automate downstream changes that Sourcegraph Campaigns provides is a key capability for reducing the hidden burden of updates pushed across teams and enabling us to increase our engineering velocity.
                            </p>
                            <footer className="blockquote-footer">Jared Hodge, Sr. Manager Developer Experience</footer>
                            <div className="d-flex justify-content-center my-4">
                                <img src="/external-logos/workiva-vector-logo.svg" width="110px" alt="Workiva" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="mt-5">
                <div className="row justify-content-center pt-md-4">
                    <div className="col-lg-8 container video-embed embed-responsive embed-responsive-16by9 ">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/EfKwKFzOs3E?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title="Sourcegraph Campaigns"
                        ></iframe>
                    </div>
                </div>
                <hr className="my-md-6" />
            </ContentSection>
            <ContentSection className="mt-5">
                <TrySourcegraph />
            </ContentSection>
        </div>
    </Layout >
)) as React.FunctionComponent<any>
