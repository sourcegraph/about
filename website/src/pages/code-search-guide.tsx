import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { TrySourcegraph } from '../components/TrySourcegraph'
import { Link } from 'gatsby'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'

const DESCRIPTION =
    'Sourcegraph is always free for public and open source code. Start using it for private code with a paid plan.'

export default ((props: any) => (
	<Layout location={props.location}>
		<div className="text-dark">
			<Helmet>
                <title>Sourcegraph - Pricing</title>
                <meta name="twitter:title" content="Sourcegraph - Pricing" />
                <meta property="og:title" content="Sourcegraph - Pricing" />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:image" content="https://about.sourcegraph.com/sourcegraph-og.png" />
                <meta name="description" content={DESCRIPTION} />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>

            <div className="pricing-page mt-2">
                <ContentSection className="hero-section text-center py-5">
                    <h1 className="display-2 font-weight-bold">Code Search Guide</h1>
                    <h2>Universal Code Search</h2>
                </ContentSection>
            </div>

            <div className="row d-flex flex-row">
                <div className="col-lg-4 sticky-top mt-2">
                    <div className="list-group">
                        <Link to="#1" className="list-group-item list-group-item-action">
                            1 Introduction<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#2" className="list-group-item list-group-item-action">
                            2 What is code search?<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#3" className="list-group-item list-group-item-action">
                            3 Why use code search?<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#4" className="list-group-item list-group-item-action">
                            4 Types of code search<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#5" className="list-group-item list-group-item-action">
                            5 Common features of code search<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#6" className="list-group-item list-group-item-action">
                            6 How to use code search<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        
                    </div>
                </div>

                <div className="col-lg-7" id="1">
                    <h2 className="display-3">1 Introduction</h2>
                    <p>
                        The way the world creates code has shifted. As developers, we're working with rapidly growing 
                        codebases, a proliferating number of repositories, multiple languages and file formats, and a wide 
                        variety of developer tools.
                    </p>

                    <p>
                        With increased complexity, we still need to efficiently write and make changes to our code while 
                        meeting tight deadlines and stringent quality and security requirements. No pressure.
                    </p>

                    <p>
                        On top of that, we're often dealing with knowledge silos, poor code quality, and manual processes 
                        that interrupt flow and stall productivity. Though we'd like to pretend we're impervious to those 
                        issues, let's be real. We're all familiar with the outcome: Development Delays (yes, with a capital
                        D), which lead to late releases, poor quality, frustrated teams, unhappy customers, and uncompetitive
                        products.
                    </p>

                    <p>
                        Google and Facebook were among the first to start addressing this problem. Their solution? Invest 
                        hundreds of millions of dollars in their customized, proprietary code search infrastructure for 
                        internal use.
                    </p>

                    <p>
                        But what about the rest of us?
                    </p>

                    <p>
                        This is where universal code search (the topic of this guide) comes in.
                    </p>

                    <p>
                        Companies like Uber, Lyft, Yelp, Qualtrics, and others adopted search technology to 
                        enhance developer productivity in the era of Big Code. Unfortunately, a lot of devs 
                        and companies don't know that a search engine for code even exists! We made this guide 
                        because we love code search, and we want everyone to know why and how to get started.
                    </p>

                    <p>
                        In the spirit of Sourcegraph's <a href="https://about.sourcegraph.com/handbook/company">
                        open source/open product/open company ethos</a>, we're sharing advice and best practices to 
                        help you navigate your code easier, no matter what tool(s) you may have access to.
                    </p>
                        
                    <p>
                        Our intention with this guide is to help every dev and development team navigate their codebase 
                        with greater ease so you can spend more time creating and less time agonizing over unintended 
                        rabbit holes. Let's get started!
                    </p>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="2">
                    <h2 className="display-3">2 What is code search?</h2>
                    <p>
                        Code search is a way to find answers to questions related to your codebase. It’s powered by a code search engine: a program that searches for and identifies items in a corpus of source code according to the query specified by the user.
                    </p>
                    
                    <table style="width:80%"> 
                      <tr>
                          <th> Definitions </th>
                      </tr>
                      <tr>
                          <td> Code Search: A way to find answers to questions related to your codebase by searching the contents of the codebase. </td>
                          <td> Code Search Engine: A program that searches for and identifies items in a corpus of source code which corresponds to the input specified by the user. Inputs may be keywords or patterns, structures, or identifiers. <td>
                      </tr>
                    </table>
                    
                    <p> Inputs may be keywords, patterns, structures, or identifiers. A code search engine produces results based on inputs such as text, structures, or symbols. </p>
                    
                    <p> Most code search tools integrate with code hosts and editors so that developers can search, navigate, and understand their code. It helps devs stay in flow and find answers quickly when actively writing or reviewing code. Really good code search makes it possible to search all of your code, regardless of where it’s hosted. 
                          </p>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="3">
                    <h2 className="display-3">3 Why code search?</h2>

                    <p>
                        Once developers have code search they wonder how they ever lived without it. Being 
                        able to quickly find, understand, and fix the code you’re looking for just makes sense 
                        when 75% of a developer’s time is spent reading and understanding code. Not surprisingly, 
                        this sentiment is quite common and motivating among people who use and build code search tools. 
                        Han-Wen Nienhuys, the creator of the Zoekt code search engine, says:
                    </p>

                    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                        <p>Software engineering is more about reading code than writing it, and part of this process is finding the code that you should read.</p>
                        <footer className="blockquote-footer">
                            Han-Wen Nienhuys, the creator of Zoekt search engine
                        </footer>
                        <a href="https://medium.com/hotels-com-technology/going-beyond-grep-for-searching-source-code-zoekt-e7da88ac7b2e">
                            Going beyond grep for searching source code
                            <ArrowRightBoxIcon className="icon-inline ml-1" />
                        </a>
                    </blockquote>

                    <p>
                        Developers at local business listing site Yelp <a href="https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html#shipping-code-faster-with-sourcegraph">
                        use code search to scan through tens of thousands of lines of code</a> before adding new parameters 
                        that could unintentionally break something elsewhere on the site. Code search empowers them to ship 
                        code fast and more reliably.
                    </p>

                    <p> For businesses, code search is critical to maintaining development velocity. As code bases become more complex, more interconnected, and harder to navigate, development velocity stalls. It takes longer to find answers, and constant context switching squashes productive workflows. Tech giants like Microsoft, Google, and Facebook are also keenly aware of how important good code search is to development velocity and have invested millions of dollars into building internal code search tools. </p>
                        
                    <p> Code search improves the experience and velocity of development by acting as a search bar that can point devs in the right direction when they get stuck or need answers. It’s an integral part of an efficient dev workflow as it allows you to find code across all your repositories to find answers, references, and examples. If you are in the business of writing and shipping code, you should know about code search and how to use it. </p>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="4">
                    <h2 className="display-3">4 Types of code search</h2>
                    <p>
                        Code search can vary greatly in its capabilities depending on the type of tool. Code host-based code search is limited to searching the repositories within the code host and the languages indexed by the code host.
                    </p>
                    
                    <table style="width:100%">
                        <tr>
                            <th>Type of code search</th>
                            <th> Capabilitiies</th>
                        </tr>
                        <tr>
                            <td> Standalone</td>
                            <td> Code search is a tool that integrates with code hosts and editors to enable developers to search, navigate, and understand code through the use of queries and filters. </td>
                        </tr>
                        <tr> 
                            <td> Code host-based code search</td>
                            <td> Code search tools that are provided as part of a code hosting platform’s capabilities. With code host-based code search, users are typically limited to searching repositories that exist within the code host platform. </td>
                        </tr>
                        <tr> 
                            <td> Universal code search </td>
                            <td> Universal code search is code search that spans your repositories, code hosts, and programming languages allowing developers to find answers, references, and examples both internally and externally, across the internet. </td>
                        </tr>
                        
                        <p> Code search that is not universal is very limited. For example, using a code search tool that is specific to a single code host means you can’t search code that is stored in other code hosts, limiting access to information. Search that is limited to a specific programming language is like only being able to use Google to find information on a single brand of cars, versus searching all car brands. 
                        </p>
                                

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="5">
                    <h2 className="display-3">5 Common features of code search</h2>
                    <p>
                        Code search UIs usually have three main areas: 
                    </p>
                    
                    <ul>
                        <li> Search interface </li>
                        <li> Results page </li>
                        <li> Code browsing interface </li>
                    </ul>
                    
                    <h3> 1. Search interface </h3>
                    <p> The purpose of the search page is to enable the user to jump as quickly as possible to a point (or points) in the code that they are interested in. The search page typically contains a query box, along with additional fields and toggles that can control the scoping and matching behavior. Toggles and additional fields can include: </p>
                    
                    <ul>
                        <li>Selecting a particular type of result (line of text, symbol name, whole files)</li>
                        <li>Scoping to a particular part of the codebase (e.g., by file prefix, file path pattern, or by top-level project(s))</li>
                        <li>Scoping to a particular revision (usually the default branch is the default, but users often are interested in searching code at a particular point in time or commit)</li>
                    </ul>
                    
                    <p>The search syntax is a major feature area itself, and can include support for a variety of expressions: </p>

                    <ul>
                        <li>String literal queries</li>
                        <li>Regular expressions</li>
                        <li>Full word matching</li>
                        <li>Other pattern-matching syntaxes (e.g., Comby)</li>
                        <li>Keywords that would otherwise be toggles and dropdowns (e.g., filter by file, result type)</li>
                        <li>Logical operators (AND/OR/NOT) that can be used to combine subqueries into more complex queries (e.g., "all functions that match this regular expression in files other than Markdown files")</li>
                        <li>Autocompletion, which helps complete common queries and keywords. This is especially helpful if the query syntax is particularly expressive or powerful.</li>
                    </ul>
                    
                    <p>The search interface is the combination of the query syntax and the UI components surrounding and including the search box. It is the jumping-off point of most code search workflows and its primary purpose is to accept and interpret user intent for what should be displayed in the results interface.
                    </p>
                    
                    <h3> 2. Results interface </h3>
                    
                    <p>The purpose of the search results page is to surface the results that are most relevant to the user's intent, to enable easy scanning of the result set, and to serve as a jumping off point into the actual code that the results point to.</p>
                    
                    <p> Important features are both visual and algorithmic: </p>
                    
                    <ul>
                        <li>What data and metadata is displayed in each result (e.g., filename, section of code matched by the query, surrounding code, syntax highlighting, etc.)</li>
                        <li>The ranking of the matches, which can incorporate a variety of factors like query similarity, project reputation, and user affinity (whether the user recently viewed or modified those files or surrounding files)</li>
                        <li>Additional filter toggles or query refinement suggestions for refining the query and result set, or suggestions to deal with error cases (e.g., "no results found")</li>
                        <li>Whether a total count is returned</li>
                    </ul>
                    
                    <p>Performance and scale are often not considered actual features, but they are first-order considerations for the results page. Ideally, you want code search that scales to the entire universe of code that you care about (including downstream dependencies and currently unused but potentially useful libraries) that returns useful results in as little time as possible. Time to first result and search scope of a single query are KPIs to evaluate for the overall usability and trustworthiness of code search.</p>
                    <h3>3. Code browsing interface</h3>
                    
                    <p> Most code search engines include or are paired with some sort of code browsing interface. This code browsing interface is most often not the editor, but a web-based browsing interface. The reason for this is that opening up a result in an editor might be disruptive (causing a developer to "lose their place" in the code they're currently editing) or impossible (the code surfaced hasn't even been checked out to the developer's editor environment).</>

                    <p>The browsing interface is important, because this is how the developer, having found the area of code of interest, now needs to dive into the code and build a working mental model of how it works and where it fits into the large codebase.</p> 

                    <p>Code browsing interfaces often have some subset of the following features:</p>
                    
                    <ul>
                        <li>Jump to definition</li>
                        <li>Find references</li>
                        <li>Hover tooltips</li>
                        <li>Line-level annotations that incorporate data from other tools. For example, highlighting lines as red or green using code coverage data.</li>
                        <li>Authorship or "blame" information</li>
                        <li>Recent history of changes to this particular file or section of code</li>
                        <li>File browser / file tree</li>
                        <li>A plugin system that allows third-party dev tools to inject their own annotations into the source code view</li>
                    </ul>

                        <p>Code search engines that lack their own internal browsing interface often link to code hosts or dedicated code browsers (e.g., Cscope) that provide code navigation capabilities.</p>
                        
                      <h3>Additional features</h3>
                      <h4>Editing</h4>
                      <p>Most code search engines don't support direct editing. Editors, both native and cloud-based, are typically separate applications, though they may be linked to code search tools by an integration. Such integrations might be bidirectional: jumping from a file open in an editor to the file in the code search browsing interface or jumping from code search into the editor (provided the editor has access to the file being viewed).</p>
                    <h4>Code monitoring</h4>
                    <p> Code monitoring is an extension of the traditional code search functionality that lets a user specify a set of queries they wish to monitor or watch over time. These queries can specify patterns or anti-patterns in the code that a development team is trying to encourage or discourage. </p>
                    
                    
		            <hr className="my-md-6" id="" />
            	</div>
            </div>

			<TrySourcegraph />
        </div>
    </Layout>
)) as React.FunctionComponent<any>
