import { Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import News from '../components/NewsList'

const description = 'The latest Sourcegraph news and press releases.'

export default ((props: any) => (
    <Layout location={props.location}>
        <div className="text-dark">
            <Helmet>
                <title>Sourcegraph - News</title>
                <meta name="twitter:title" content="Sourcegraph - News" />
                <meta property="og:title" content="Sourcegraph - News" />
                <meta name="twitter:description" content={description} />
                <meta property="og:description" content={description} />
                <meta name="description" content={description} />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Helmet>
            <ContentSection className="hero-section text-center py-5">
                <h1 className="display-2 font-weight-bold">Sourcegraph News</h1>
                <p>
                    The latest Sourcegraph news and <Link to="/press-release">press releases</Link>
                </p>
            </ContentSection>
            <div className="news">
                <section>
                    <div className="container">
                        <div className="row justify-content-start">
                            <News></News>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col mt-5">
                                <h3>Media contact</h3>
                                <p>
                                    Tanya Carlsson
                                    <br />
                                    Offleash PR for Sourcegraph
                                    <br />
                                    <a href="mailto:tanya@offleashpr.com">tanya@offleashpr.com</a>
                                    <br />
                                    <a href="tel:+17075296139">+1 707-529-6139</a>
                                    <br />
                                    &nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </Layout>
)) as React.FunctionComponent<any>
