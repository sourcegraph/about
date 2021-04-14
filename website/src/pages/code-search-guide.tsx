import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { TrySourcegraph } from '../components/TrySourcegraph'
import { Link } from 'gatsby'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

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
                            1 Find security problems in hours<ArrowRightIcon className="icon-inline ml-1" />
                        </Link>
                        <Link to="#2" className="list-group-item list-group-item-action">
                            2 Find security problems in hours<ArrowRightIcon className="icon-inline ml-1" />
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
                    <h2 className="display-3">1 Find security problems in hours, not days</h2>
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
                            class="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowfullscreen=""
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameborder="0"
                            title="Universal code search using regex with Sourcegraph"
                        ></iframe>
                    </div>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="2">
                    <h2 className="display-3">2 Find security problems in hours, not days</h2>
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
                            class="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowfullscreen=""
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameborder="0"
                            title="Universal code search using regex with Sourcegraph"
                        ></iframe>
                    </div>

		            <hr className="my-md-6" id="" />
            	</div>

            	<div className="col-lg-7 offset-lg-4" id="3">
                    <h2 className="display-3">3 Find security problems in hours, not days</h2>
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
                            class="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowfullscreen=""
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameborder="0"
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
                            class="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowfullscreen=""
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameborder="0"
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
                        risky code changes. Then, use Batch Changes to automate the process of fixing, merging, and deploying
                        the necessary changes across codebases.
                    </p>

                    <div className="container my-4 video-embed embed-responsive embed-responsive-16by9 ">
                        <iframe
                            class="embed-responsive-item"
                            src="https://www.youtube-nocookie.com/embed/J9k7l5W1qbk?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=1&amp;rel=0"
                            allowfullscreen=""
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameborder="0"
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