import { Link } from 'gatsby'
import FilesIcon from 'mdi-react/FilesIcon'
import GlobeIcon from 'mdi-react/GlobeIcon'
import HistoryIcon from 'mdi-react/HistoryIcon'
import LockIcon from 'mdi-react/LockIcon'
import SearchIcon from 'mdi-react/SearchIcon'
import StopwatchIcon from 'mdi-react/StopwatchIcon'
import React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { IntegratesWithSection } from '../../components/product/IntegratesWithSection'
import { ProductDemoVideo } from '../../components/product/ProductDemoVideo'
import { UseCasesTable } from '../../components/product/UseCasesTable'
import { ContactPresalesSupportAction } from '../../css/components/actions/ContactPresalesSupportAction'
import { GetSourcegraphNowActions } from '../../css/components/actions/GetSourcegraphNowActions'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Code search and navigation"
            description="Code search helps you grok code so you can write better code more quickly. Sourcegraph's code search is used by elite software teams."
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <a className="btn btn-primary mb-2" href="https://docs.sourcegraph.com/#quickstart">
                        Install
                    </a>
                    <ViewDeveloperDocumentationAction
                        className="text-light my-1"
                        url="https://docs.sourcegraph.com/user/search"
                    >
                        Code search documentation
                    </ViewDeveloperDocumentationAction>
                    <ContactPresalesSupportAction className="text-light" />
                </div>
            }
        >
            <ContentSection color="white" className="py-3">
                <ul className="nav nav-pills mt-5 mb-6 justify-content-center">
                    <li className="nav-item mr-2 mb-2">
                        <a className="nav-link btn btn-outline-primary rounded-lg active" href="#why">
                            Why code search?
                        </a>
                    </li>
                    <li className="nav-item mr-2 mb-2">
                        <a className="nav-link btn btn-outline-primary rounded-lg" href="#use-cases">
                            Use cases
                        </a>
                    </li>
                    <li className="nav-item mr-2 mb-2">
                        <a className="nav-link btn btn-outline-primary rounded-lg" href="#features">
                            Features
                        </a>
                    </li>
                    <li className="nav-item mr-2 mb-2">
                        <a className="nav-link btn btn-outline-primary rounded-lg" href="#integrations">
                            Integrations
                        </a>
                    </li>
                    <li className="nav-item mr-2 mb-2">
                        <a className="nav-link btn btn-outline-primary rounded-lg" href="#demo">
                            Demo screencasts
                        </a>
                    </li>
                    <li className="nav-item mr-2 mb-2">
                        <a className="nav-link btn btn-outline-primary rounded-lg" href="#customers">
                            Customers
                        </a>
                    </li>
                </ul>

                <h2 id="why" className="text-center mb-3">
                    The best developers and teams use code search
                </h2>
                <div className="row">
                    <div className="col-md-4">
                        <Blockquote
                            quote="[It's] essential to be able to easily search [the] whole source … huge productivity boost: easy to find uses, defs, examples, etc."
                            by={
                                <a
                                    href="https://static.googleusercontent.com/media/research.google.com/en/people/jeff/stanford-295-talk.pdf"
                                    target="_blank"
                                >
                                    Jeff Dean (Google Senior Fellow)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="Things...that clearly would have helped every software company I've ever worked at: … instant code search over the entire codebase"
                            by={
                                <a href="https://www.kalzumeus.com/2019/3/18/two-years-at-stripe/" target="_blank">
                                    Patrick McKenzie (patio11)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="Software engineering is more about reading code than writing it, and part of this process is finding the code that you should read."
                            by={
                                <a href="https://github.com/google/zoekt/blob/master/doc/faq.md" target="_blank">
                                    Han-Wen Nienhuys (Google engineer)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="tbgs [Facebook's code search tool] is the StackOverflow for Facebook engineers"
                            by={
                                <a href="https://twitter.com/cyan_binary/status/1015015559115653121" target="_blank">
                                    Facebook engineer
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="A substantial amount of my day is spent inside of Google's internal code search tool."
                            by={
                                <a href="https://twitter.com/foxxtrot/status/988850022530867203?ref_src=twsrc%5Etfw">
                                    Google engineer
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="Sourcegraph [code search] … has made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast."
                            by="Lyft engineering manager"
                        />
                    </div>
                </div>
                <h5 className="mt-3">Want more data on the value of code search?</h5>
                <p>
                    <strong>98%</strong> of Google developers say their Sourcegraph-like internal code search tool is{' '}
                    <strong>"critical"</strong>, according to an{' '}
                    <a
                        href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                        target="_blank"
                    >
                        internal code search research study from Google
                    </a>
                    &nbsp;and a{' '}
                    <a
                        href="https://docs.google.com/document/d/1LQxLk4E3lrb3fIsVKlANu_pUjnILteoWMMNiJQmqNVU/edit#heading=h.xxziwxixfqq3"
                        target="_blank"
                    >
                        Google developer survey
                    </a>
                    . Contact us for more data and an <Link to="/contact">code search ROI calculator</Link>.
                </p>
            </ContentSection>
            <div className="container-fluid bg-white text-dark pt-1 pb-5">
                <div className="code-search-navigation-page__use-cases">
                    <hr className="pt-5" />
                    <h2 id="use-cases" className="mt-5 display-4 text-center">
                        How does code search help?
                    </h2>
                    <p className="text-center w-75 mx-auto">
                        <a
                            href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                            target="_blank"
                        >
                            Google's internal code search research study
                        </a>{' '}
                        (<em>Table 1</em>) answers how Google developers use code search (5-10 times daily). Sourcegraph
                        code search users report similar use cases and frequency.
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
                        <div className="col-md-6 mt-3">
                            <h5>Find specific locations</h5>
                            <UseCasesTable
                                data={[
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
                    </div>
                </div>
            </div>
            <ContentSection color="black" className="pt-5 pb-4">
                <h2 id="features" className="text-center display-3">
                    Sourcegraph code search and navigation
                </h2>
                <p className="text-center">
                    Convinced of the value of code search? Now see why Sourcegraph is the code search tool used by elite
                    software teams.
                </p>
            </ContentSection>
            <ContentSection color="white" className="pt-6 pb-2">
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
                                . Use the visual query builder to narrow down your search and get familiar withsearch
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
                                using suggested filters, to narrow down results by repository, language, directory, or
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
                                <a
                                    href="https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22"
                                    target="_blank"
                                >
                                    24 programming languages
                                </a>
                                .
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
                        <IconItem className="position-relative" icon={LockIcon} color="blue">
                            <h4>Open-source, self-managed, &amp; privacy-respectful</h4>
                            <p>
                                Sourcegraph is{' '}
                                <a href="https://docs.sourcegraph.com/#quickstart" target="_blank">
                                    self-hosted
                                </a>
                                , so your code never leaves your network. And it's{' '}
                                <a href="https://github.com/sourcegraph/sourcegraph" target="_blank">
                                    open-source
                                </a>{' '}
                                (Apache 2.0), so you can verify this. (If you prefer not to self-manage your instance,
                                we offer <Link to="/pricing">cloud-managed deployment</Link>, too.)
                            </p>
                        </IconItem>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="pt-5 pb-3">
                <hr id="integrations" />
                <IntegratesWithSection
                    className="py-6"
                    showTypes={['codeHost', 'plugin', 'language']}
                    customTypeLabels={{ codeHost: 'Code hosts' }}
                />
            </ContentSection>
            <ContentSection color="primary" className="py-6">
                {/*<ProductDemoVideo title="See how Sourcegraph code search makes you a faster and better developer" />*/}
                <h2 id="demo" className="text-center display-4 pb-4">
                    Demo: Sourcegraph code search
                </h2>
                <video autoPlay={true} muted={true} loop={true} playsInline={true} className="w-100 h-auto">
                    <source
                        src="https://storage.googleapis.com/sourcegraph-assets/video/welcome/video/Welcome-Search.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://storage.googleapis.com/sourcegraph-assets/video/welcome/video/Welcome-Search.m4v"
                        type="video/x-m4v"
                    />
                    Demo video playback is not supported on your browser.
                </video>
            </ContentSection>
            <ContentSection color="purple" className="py-6">
                <h2 className="text-center display-4 pb-4">Demo: Sourcegraph code navigation</h2>
                <video autoPlay={true} muted={true} loop={true} playsInline={true} className="w-100 h-auto">
                    <source
                        src="https://storage.googleapis.com/sourcegraph-assets/video/welcome/video/Welcome-CodeNavigation.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://storage.googleapis.com/sourcegraph-assets/video/welcome/video/Welcome-CodeNavigation.m4v"
                        type="video/x-m4v"
                    />
                    Demo video playback is not supported on your browser.
                </video>
            </ContentSection>
            <ContentSection color="white" className="pt-5 pb-3">
                <span id="customers" />
                <CustomerLogosSection trustWhat="code search" />
                <p className="text-center mt-4 small">
                    Curious what other code search tools exist? Check out our{' '}
                    <a href="https://docs.sourcegraph.com/adopt/comp" target="_blank">
                        code search tool comparison guide
                    </a>
                    .
                </p>
            </ContentSection>
            <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Get Sourcegraph now"
                description="Start shipping better software faster with the code search tool used by elite software teams."
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>
