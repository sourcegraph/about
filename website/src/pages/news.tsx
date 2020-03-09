import * as React from 'react'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import News from '../components/NewsList'

export default class NewsPage extends React.Component < any, any > {
    constructor(props: any) {
        super(props)
        this.state = {
            events: [],
        }
    }

    public componentDidMount(): void {
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none')
        }
    }

    public render(): JSX.Element | null {
        const desc =
            'Sourcegraph in the news.'
        return (
            <Layout location={this.props.location}
                meta={{
                    title:
                    'Sourcegraph news and press releases',
                    description:
                    'Sourcegraph in the news.'
                }}
            >
            <div className="news bg-white text-dark">
                <section>
                    <div>
                        <ContentSection color="primary" className="hero-section text-center py-5">
                            <h1>Sourcegraph in the news</h1>
                            <p className="news__head-description">
                                The latest news and press releases.
                            </p>
                        </ContentSection>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col mt-5 mb-5 ">
                                <h3>Press releases</h3>
                                <ul>
                                    <li>
                                        <a href="/blog/press-release-sourcegraph-secures-series-b/?ref=news" >Sourcegraph Secures $23 Million Series B Round for Universal Code Search</a>
                                        <span className="news__date">March 3, 2020</span>
                                    </li>
                                    <li>
                                        <a href="/blog/press-release-sourcegraph-announces-new-gitlab-native-integration/?ref=news" >New GitLab Native Integration, Universal Code Search Engine, and Amazing Company Momentum</a>
                                        <span className="news__date">November 12, 2019</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-10">
                                <h3>News</h3>
                                <News></News>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col mt-5">
                                <h3>Media contact</h3>
                                <p>Tanya Carlsson<br />
                                Offleash PR for Sourcegraph<br />
                                <a href="mailto:tanya@offleashpr.com">tanya@offleashpr.com</a><br />
                                <a href="tel:+17075296139">+1 707-529-6139</a><br />
                                &nbsp;</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </Layout>
        )
    }
}
