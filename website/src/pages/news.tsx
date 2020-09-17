import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentPage } from '../components/content/ContentPage'
import Layout from '../components/Layout'
import News from '../components/NewsList'

const description = 'The latest Sourcegraph news and press releases.'

export default class NewsPage extends React.Component<any, any> {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props)
        this.state = {
            events: [],
        }
    }

    public render(): JSX.Element | null {
        return (
            <Layout location={this.props.location}>
                <ContentPage
                    title="Sourcegraph in the news"
                    description="The latest Sourcegraph news and press releases"
                    className="text-dark"
                    titleClassName="display-2 font-weight-bold"
                >
                    <Helmet>
                        <title>Sourcegraph - News</title>
                        <meta name="twitter:title" content="Sourcegraph - News" />
                        <meta property="og:title" content="Sourcegraph - News" />
                        <meta name="twitter:description" content={description} />
                        <meta property="og:description" content={description} />
                        <meta name="description" content={description} />
                        <link rel="icon" type="image/png" href="/favicon.png" />
                    </Helmet>
                    <div className="news">
                        <section>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-10">
                                        <h2>News</h2>
                                        <News></News>
                                    </div>
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
                </ContentPage>
            </Layout>
        )
    }
}
