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
                            3 Find security problems in hours<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#4" className="list-group-item list-group-item-action">
                            4 Find security problems in hours<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#5" className="list-group-item list-group-item-action">
                            5 Find security problems in hours<ArrowRightIcon className="icon-inline ml-1" />
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

                    <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title="Universal code search using regex with Sourcegraph"
                        ></iframe>
                    </div>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="2">
                    <h2 className="display-3">2 What is code search?</h2>
                    <p>
                        Coming soon.
                    </p>

                    <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title="Universal code search using regex with Sourcegraph"
                        ></iframe>
                    </div>

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

                    <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title="Universal code search using regex with Sourcegraph"
                        ></iframe>
                    </div>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="4">
                    <h2 className="display-3">4 Find security problems in hours, not days</h2>
                    <p>
                        Identify incident root causes with confidence, improve production stability, and reduce the
                        time to recovery. Find breaking changes, with diff and commit search returning all matching
                        search results to identify everywhere a pattern, package, or API is used. Mitigate tech
                        security and compliance risks with saved searches to alert for known vulnerabilities and
                        risky code changes. Then, use Batch Changes to automate the process of fixing, merging, and deploying
                        the necessary changes across codebases.
                    </p>

                    <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title="Universal code search using regex with Sourcegraph"
                        ></iframe>
                    </div>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="5">
                    <h2 className="display-3">5 Find security problems in hours, not days</h2>
                    <p>
                        Identify incident root causes with confidence, improve production stability, and reduce the
                        time to recovery. Find breaking changes, with diff and commit search returning all matching
                        search results to identify everywhere a pattern, package, or API is used. Mitigate tech
                        security and compliance risks with saved searches to alert for known vulnerabilities and
                        risky code changes. Then, use Batch Changes to automate the process of fixing, merging, and 
                        deploying the necessary changes across codebases.
                    </p>

                    <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title="Universal code search using regex with Sourcegraph"
                        ></iframe>
                    </div>

		            <hr className="my-md-6" id="" />
            	</div>
            </div>

			<TrySourcegraph />
        </div>
    </Layout>
)) as React.FunctionComponent<any>
