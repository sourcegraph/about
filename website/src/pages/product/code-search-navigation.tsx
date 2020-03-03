import { Link } from 'gatsby'
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
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { EnterpriseReadySolution } from '../../components/product/EnterpriseReadySolution'
import { IntegratesWithSection } from '../../components/product/IntegratesWithSection'
import { OpenSourcePrivacyFeatureItem } from '../../components/product/OpenSourcePrivacyFeatureItem'
import { SupportedProgrammingLanguagesLink } from '../../components/product/SupportedProgrammingLanguagesLink'
import { UseCasesTable } from '../../components/product/UseCasesTable'
import { Vimeo } from '../../components/Vimeo'
import { ContactPresalesSupportAction } from '../../css/components/actions/ContactPresalesSupportAction'
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
                    <ContactPresalesSupportAction className="mt-3 text-light" />
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
                    { text: 'Why code search?', url: '#why' },
                    { text: 'Use cases', url: '#use-cases' },
                    { text: 'Features', url: '#features' },
                    { text: 'Integrations', url: '#integrations' },
                    { text: 'Demo screencasts', url: '#demo' },
                    { text: 'Who uses it', url: '#customers' },
                ]}
            />
            <ContentSection className="pt-5 pb-4" color="white">
                <h2 id="features" className="text-center display-3">
                    Code navigation and exploration
                </h2>
                <p className="text-center">
                    Find answers faster, across any codebase from one centralized place.
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
            </ContentSection>
            
            <ContentSection color="purple" className="py-6">
                <h2 className="text-center display-4 pb-4">See Sourcegraph code discovery in action</h2>
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
            
            <ContentSection className="pt-5 pb-4" color="white">
                <h2 id="use-cases" className="text-center display-3">
                    How does code search help?
                </h2>
<p className="text-center w-75 mx-auto">
                        Google developers use code search 5-10 times daily (<em>Table 1</em> in <a
                            href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                            target="_blank">Google's internal code search research study</a>). Sourcegraph Universal Code Search users report similar use cases and frequency.
                    </p>
            </ContentSection>
            <ContentSection color="white" className="pt-6 pb-2">
                       <div className="row">
                 <div className="col-md-6 mb-4">
                            <h4>Find example code</h4>
                            <ul>
                                <li>API consumer needs help: <em>How should this function be called?</em></li>
                                <li>Discover correct library for task: <em>Best way to convert output stream into a string of limited length</em></li>
                                <li>Example to build off of: <em>Want to copy-paste some code I'm changing</em></li>
                                    <li>How to do something: <em>How to write a hash function</em></li>
                                    </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                            <h4>Explore or read code</h4>
                            <ul>
                                <li>Check implementation details: <em>What does a particular script do?</em></li>
                                <li>Browsing: <em>Re-familiarizing myself with some code referenced in a code review</em></li>
                                <li>Check best practices: <em>Where are friend classes usually declared?</em></li>
                                    <li>Name completion: <em>I'm looking for an enum member that begins with a particular prefix</em></li>
                                    </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                            <h4>Find specific locations</h4>
                            <ul>
                                <li>Trace through call graph: <em>Where is this class instantiated?</em></li>
                                <li>Sharing: <em>I'm trying to create a link to a known piece of code, to give to someone else</em></li>
                                <li>Locations in source: <em>Where are all the environment configurations declared?</em></li>
                                    <li>Trace code history: <em>Who last touched this code?</em></li>
                                    <li>Responsibility: <em>Who is allowed to approve changes to this file?”</em></li>
                                    </ul>
                    </div>
                        <div className="col-md-6 mb-4">
                            <h4>Determine impact</h4>
                            <ul>
                                <li>Why is something failing?: <em>Wondering why my change didn't fix a problem in production and am reading the code to diagnose</em></li>
                                <li>Understanding dependencies: <em>Looking for build file dependencies</em></li>
                                <li>Side efects of a proposed change: <em>Am I about to blow up production with my change?</em></li>     
                                    </ul>
                    </div>
                </div>
                        </ContentSection>
             <ContentSection color="white" className="py-3">
 
                <div className="row">
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
                            quote="Sourcegraph [code search] … has made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast."
                            by="Lyft engineering manager"
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="[Sourcegraph] improves my productivity and ability to write clean code by 2-3x."
                            by="Uber senior engineer"
                        />
                    </div>
                </div>
               
            </ContentSection>
            
                    <ContentSection color="black" className="py-6">
                {/*<ProductDemoVideo title="See how Sourcegraph code search makes you a faster and better developer" />*/}
                <h2 id="demo" className="text-center display-4 pb-4">
                    Use Sourcegraph to find answers in code, faster!
                </h2>
                <Vimeo id={340491490} className="mb-6" />
                <Vimeo id={340774081} />
            </ContentSection>
       
            
            <ContentSection color="white" className="pt-5 pb-3" id="integrations" >

                <IntegratesWithSection
                    className="py-6"
                    showTypes={['codeHost', 'plugin', 'language']}
                    customTypeLabels={{ codeHost: 'Code hosts' }}
                />
            </ContentSection>
            
                            <hr />
            
                        <ContentSection color="white" className="pt-5 pb-3">
                <span id="customers" />
                <CustomerLogosSection trustWhat="code search" />
            </ContentSection>
         
            <ContentSection color="black" className="py-5">
                <EnterpriseReadySolution />
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
