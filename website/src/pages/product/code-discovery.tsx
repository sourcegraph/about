import FilesIcon from 'mdi-react/FilesIcon'
import GlobeIcon from 'mdi-react/GlobeIcon'
import HistoryIcon from 'mdi-react/HistoryIcon'
import SearchIcon from 'mdi-react/SearchIcon'
import StopwatchIcon from 'mdi-react/StopwatchIcon'
import React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { PageSectionLinks } from '../../components/PageSectionLinks'
import { EbookUniversalCodeSearch } from '../../components/product/EbookUniversalCodeSearch'
import { OpenSourcePrivacyFeatureItem } from '../../components/product/OpenSourcePrivacyFeatureItem'
import { SupportedProgrammingLanguagesLink } from '../../components/product/SupportedProgrammingLanguagesLink'
import { UseCasesTable } from '../../components/product/UseCasesTable'
import { YouTube } from '../../components/YouTube'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Code discovery"
            description="Navigate, explore, and understand the code you are looking for, even if you didn’t know it existed."
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <RequestDemoAction className="mt-3" />
                    <ViewDeveloperDocumentationAction
                        className="text-light mt-2"
                        url="https://docs.sourcegraph.com/#quickstart"
                    >
                        Documentation &amp; self-service install
                    </ViewDeveloperDocumentationAction>
                </div>
            }
        >
            <PageSectionLinks
                sections={[
                    { text: 'Features', url: '#features' },
                    { text: 'Use cases', url: '#use-cases' },
                    { text: 'Demo screencasts', url: '#demo' },
                ]}
            />
            <ContentSection className="py-2" color="white">
                <h2 id="features" className="text-center display-3">
                    Code navigation and exploration
                </h2>
                <p className="text-center">Find answers faster, across any codebase from one centralized place.</p>
            </ContentSection>
            <ContentSection color="white" className="py-4">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <IconItem className="position-relative" icon={SearchIcon} color="brand-cyan">
                            <h4>Powerful, easy search</h4>
                            <p>
                                Just type your query into Sourcegraph, and it'll find matches. It supports regular
                                expressions, punctuation, exact matches, and{' '}
                                <a href="https://docs.sourcegraph.com/user/search/queries" target="_blank">
                                    much more
                                </a>
                                . Use the visual query builder to narrow down your search and get familiar with search
                                syntax for next time.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-6 mb-4">
                        <IconItem className="position-relative" icon={StopwatchIcon} color="brand-purple">
                            <h4>Super-optimized for speed</h4>
                            <p>
                                Find what you're looking for in a few hundred milliseconds, even across 10,000s of
                                repositories or in a massive 40 GB monorepo. We're maniacal about making Sourcegraph
                                fast. You can also quickly{' '}
                                <a href="https://docs.sourcegraph.com/user/search/queries" target="_blank">
                                    refine your search
                                </a>{' '}
                                using suggested filters, to narrow down results by repository, language, directory, or{' '}
                                <a href="https://docs.sourcegraph.com/user/search/scopes" target="_blank">
                                    custom scopes
                                </a>
                                .
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-6 mb-4">
                        <IconItem className="position-relative" icon={GlobeIcon} color="green">
                            <h4>Explore definitions &amp; references, even across projects</h4>
                            <p>
                                Find the definition or callers of functions and anything else in code, even across
                                package, dependency, and repository boundaries. Even if your IDE can do this,
                                Sourcegraph lets you explore code intelligently in your web browser in any repository on
                                any branch, instantly and without losing your local context. Works for{' '}
                                <SupportedProgrammingLanguagesLink />.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-6 mb-4">
                        <IconItem className="position-relative" icon={HistoryIcon} color="red">
                            <h4>Search in diffs to find what changed or broke</h4>
                            <p>
                                Look through diffs and commit messages to see recent changes related to a specific
                                function or error message. DevOps teams and SREs find this especially useful when
                                responding to incidents, to find out what code changes might be responsible and who to
                                loop in.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-6 mb-4">
                        <IconItem className="position-relative" icon={FilesIcon} color="brand-orange">
                            <h4>All branches &amp; commits, always up-to-date</h4>
                            <p>
                                Other code search tools limit you to searching a single branch and often have stale
                                results from hours ago. With Sourcegraph's hybrid search (combining indexed and
                                on-the-fly), you can search any branch and any commit. The code is always up-to-date,
                                and you never need to wait for indexing.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-md-6 mb-4">
                        <OpenSourcePrivacyFeatureItem />
                    </div>
                </div>
                <div className="row justify-content-center py-4">
                    <div className="col-lg-10 text-center">
                        <img src="/external-logos/convoy-logo.svg" />
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                For our new developers, Sourcegraph has been invaluable to get to know the repository
                                structure, to track down where code lives, and self-service during their investigations.
                            </p>
                            <footer className="blockquote-footer">Owen Kim, Senior Software Engineer, Convoy</footer>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="gray" className="py-6">
                <EbookUniversalCodeSearch />
            </ContentSection>
            <ContentSection color="purple" className="py-6">
                <h2 className="text-center display-4 pb-4">See Sourcegraph code discovery in action</h2>
                <YouTube id="KSx61-yAMLs" autoplay={true} loop={true} />
            </ContentSection>

            <div className="container-fluid bg-white text-dark pt-1 pb-5">
                <div className="code-search-navigation-page__use-cases">
                    <h2 id="use-cases" className="mt-5 display-4 text-center">
                        How does code search help?
                    </h2>
                    <p className="text-center w-75 mx-auto">
                        Google developers use code search 5-10 times daily (<em>Table 1</em> in{' '}
                        <a
                            href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                            target="_blank"
                        >
                            Google's internal code search research study
                        </a>
                        ). Sourcegraph Universal Code Search users report similar use cases and frequency.
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-md-6 mt-3">
                            <h5>Find example code</h5>
                            <UseCasesTable
                                data={[
                                    {
                                        description: 'API consumer needs help',
                                        example: 'I want to know how a function should be called',
                                    },
                                    {
                                        description: 'Discover correct library for task',
                                        example: 'Best way to convert output stream into a string of limited length',
                                    },
                                    {
                                        description: 'Example to build off of',
                                        example: "Just want to copy-and-paste some code I'm changing",
                                    },
                                    { description: 'How to do something', example: 'How to write a hash function' },
                                ]}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h5>Explore or read code</h5>
                            <UseCasesTable
                                data={[
                                    {
                                        description: 'Check implementation details',
                                        example: 'What does a particular script do?',
                                    },
                                    {
                                        description: 'Browsing',
                                        example: 'Re-familiarizing myself with some code referenced in a code review',
                                    },
                                    {
                                        description: 'Check best practices',
                                        example: 'Where are friend classes usually declared?',
                                    },
                                    {
                                        description: 'Name completion',
                                        example: "I'm looking for an enum member that begins with a particular prefix",
                                    },
                                ]}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h5>Find specific locations</h5>
                            <UseCasesTable
                                data={[
                                    {
                                        description: 'Trace through call graph',
                                        example: 'Where is this class instantiated?',
                                    },
                                    {
                                        description: 'Sharing',
                                        example:
                                            "I'm trying to create a link to a known piece of code, to give to someone else",
                                    },
                                    {
                                        description: 'Locations in source',
                                        example: 'Where are all the environment configurations declared?',
                                    },
                                    {
                                        description: 'Trace code history',
                                        example: 'Who last touched this code?',
                                    },
                                    {
                                        description: 'Responsibility',
                                        example: 'Who is allowed to approve changes to this file?',
                                    },
                                ]}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h5>Determine impact</h5>
                            <UseCasesTable
                                data={[
                                    {
                                        description: 'Why is something failing?',
                                        example:
                                            "Wondering why my change didn't fix a problem in production and am reading the code to diagnose",
                                    },
                                    {
                                        description: 'Understanding dependencies',
                                        example: 'Looking for dependencies of a build file',
                                    },
                                    {
                                        description: 'Side effects of a proposed change',
                                        example: 'Am I about to blow up production with my change?',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ContentSection color="white" className="py-3">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                Software engineering is more about reading code than writing it, and part of this
                                process is finding the code that you should read.
                            </p>
                            <footer className="blockquote-footer">Han-Wen Nienhuys (Google engineer)</footer>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>

            <ContentSection color="black" className="py-6">
                {/*<ProductDemoVideo title="See how Sourcegraph code search makes you a faster and better developer" />*/}
                <h2 id="demo" className="text-center display-4 pb-4">
                    Use Sourcegraph to find answers in code, faster!
                </h2>
                <YouTube id="OGd8wr7XpgU" className="mb-6" />
                <YouTube id="GuqWw3t6H-k" />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Try Sourcegraph now"
                description="Explore, navigate, and better understand all code, everywhere, faster, with Universal Code Search."
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
