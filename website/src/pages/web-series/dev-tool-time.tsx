import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { ContentSection } from '../../components/content/ContentSection'
import { createHubSpotForm } from '../../components/HubSpot'
import { WebSeriesPage, WebSeriesRequestDemoForm } from '../../components/content/WebSeriesPage'
import TwitterIcon from 'mdi-react/TwitterIcon'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'

export const DevToolTime: React.FunctionComponent = (props: any) => {
    useEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: '6dfd004b-3c5c-4c63-89c5-11309d181a14',
            targetId: 'hubspotDevToolTime',
        })
    }, [])
    const title = 'Sourcegraph Dev Tool Time.'
    const desc = 'From emerging tech and productivity hacks to hardware and office setups.'
    return (
        <Layout location={props.location} minimal={true}>
            <Helmet>
                <title>{title}</title>
                <meta name="twitter:title" content={title} />
                <meta property="og:title" content={title} />
                <meta name="twitter:site" content="@srcgraph" />
                <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={desc} />
                <meta property="og:description" content={desc} />
                <meta name="description" content={desc} />
            </Helmet>
            <WebSeriesPage title="Dev Tool Time">
                <ContentSection color="white" className="col-md-6 pt-5">
                    <div className="container">
                        <p>
                            Sourcegraph is launching Dev Tool Time, a bi-monthly virtual event series hosted by Beyang
                            Liu, Co-Founder and CTO and Vanesa Ortiz, Community Advocate and Engineer. The series aims
                            to help developers learn about existing and emerging developer tools. What’s the best
                            productivity hack when using vim? What do developers prefer working in, IDE or terminal
                            editor? We are excited to announce our first set of guests including Seth Vargo, Engineer at
                            Google Cloud, Leah Culver, iOS Engineer at Twitter on Spaces, Suz Hinton, Coder at Stripe,
                            Megan Marsh, Lead Engineer HashiCorp focused on Packer, Phil Hacck, Founder of A Serious
                            Business, Inc., and Josh Goldberg, Staff Engineer at Codecademy.
                        </p>
                    </div>
                </ContentSection>
                <ContentSection color="black" className="py-5">
                    <div className="row justify-content-md-center">
                        <div className="col-md-3 text-center">
                            <a href="https://twitter.com/srcgraph" target="_blank">
                                <TwitterIcon size={72} />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <h5>
                                Spread the word about Dev Tool Time!{' '}
                                <a
                                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                                    className="twitter-share-button"
                                    data-text="Checkout #DevToolTime! They're covering everything from emerging tech and productivity hacks to hardware and office setups with an awesome guest lineup."
                                    data-url="https://about.sourgraph.com/web-series/dev-tool-time"
                                    data-related="srcgraph"
                                    data-show-count="false"
                                ></a>
                            </h5>
                        </div>
                    </div>
                </ContentSection>
                <ContentSection color="gray" className="py-5">
                    <div className="row justify-content-md-center">
                        <div className="col-md-3 text-center">
                            <img
                                src="/external-logos/sourcegraph-universal-code-search-ebook-v1.jpg"
                                alt="Download: Universal Code Search and Intelligence"
                                width="170"
                                className="universal-code-search--glow"
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>EBOOK</h5>
                            <h3>Universal code search and intelligence</h3>
                            <h6>
                                Learn more on how Sourcegraph Universal Code Search can improve your productivity and
                                efficiency as a developer.
                            </h6>
                            <Link
                                className="btn btn-lg btn-outline-light universal-code-search__btn mt-3 font-weight-normal "
                                to="/resources/universal-code-search-ebook/?utm_medium=organic_search&utm_source=about&utm_content=universal-code-search"
                            >
                                Free download
                            </Link>
                        </div>
                    </div>
                </ContentSection>
            </WebSeriesPage>
            <WebSeriesRequestDemoForm />
        </Layout>
    )
}
export default DevToolTime
