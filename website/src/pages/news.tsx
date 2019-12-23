import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
export default class NewsPage extends React.Component<any, any> {
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
            <Layout location={this.props.location}>
                <div className="News bg-white text-dark">
                    <Helmet>
                        <title>Sourcegraph - News</title>
                        <meta name="twitter:title" content="Sourcegraph news" />
                        <meta property="og:title" content="Sourcegraph news" />
                        <meta name="description" content="Sourcegraph news" />
                        <meta name="twitter:description" content="Sourcegraph news" />
                        <meta property="og:description" content="Sourcegraph news" />
                    </Helmet>
                    <section className="news news__head">
                        <div className="news__container">
                        <ContentSection color="primary" className="hero-section text-center py-5">
                            <h1>Sourcegraph in the news</h1>
                            <p className="news__head-description">
                                The latest news and press releases.
                            </p>
                        </ContentSection>
                        </div>
                    </section>
                    <section className="newsroom">
                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col mt-5">
                                    <h3>Press Releases</h3>
                                     <ul>
                                        <li>November 12, 2019<br />
                                        <a href="/blog/press-release-sourcegraph-announces-new-gitlab-native-integration/?ref=news" >New GitLab Native Integration, Universal Code Search Engine, and Amazing Company Momentum</a></li>
                                    </ul>  
                                </div>
                            </div>
                        </div>  

                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col mt-5">                                                                     
                                    <h3>News</h3>
                                    <h5>2019</h5>
                                    <ul>
                                        <li><strong>Tech Republic</strong> December 4, 2019<br />
                                        <a href="https://www.techrepublic.com/article/java-and-javascript-dominated-software-development-in-the-2010s/" rel="nofollow">Java and JavaScript dominated software development in the 2010s</a></li>
                                        <li><strong>Security Boulevard</strong> November 28, 2019<br />
                                        <a href="https://securityboulevard.com/2019/11/5-free-developer-tools-were-grateful-for/" rel="nofollow">5 Free Developer Tools We’re Grateful For</a></li>
                                        <li><strong>DevClass</strong> November 25, 2019<br />
                                        <a href="https://devclass.com/2019/11/25/gitlab-12-5-gets-multi-cloud-rolling/" rel="nofollow">GitLab 12.5 gets multi-cloud rolling</a></li>
                                        <li><strong>App Developer Magazine </strong> November 28, 2019<br />
                                        <a href="https://appdevelopermagazine.com/universal-source-code-search-engine-emerges/" rel="nofollow">Universal source code search engine emerges</a></li>
                                        <li><strong>Dataversity</strong> November 18, 2019<br />
                                        <a href="https://www.dataversity.net/sourcegraph-announces-new-gitlab-native-integration-universal-code-search-engine/" rel="nofollow">Sourcegraph Announces New GitLab Native Integration, Universal Code Search Engine</a></li>
                                        <li><strong>The New Stack</strong> November 15, 2019<br />
                                        <a href="https://thenewstack.io/this-week-in-programming-dear-tech-conferences-do-better/" rel="nofollow">This Week in Programming: Dear Tech Conferences, Do Better</a></li>
                                        <li><strong>DevClass</strong> November 13, 2019<br />
                                        <a href="https://devclass.com/2019/11/13/gitlab-gets-native-with-sourcegraph-code-review-in-upcoming-release/" rel="nofollow">GitLab gets native with Sourcegraph code review in upcoming release</a></li>
                                        <li><strong>SD Times </strong> November 12, 2019<br />
                                        <a href="https://sdtimes.com/softwaredev/sd-times-news-digest-codefreshs-ci-cd-live-debugger-azure-functions-premium-and-smartbear-announces-readyapi-3-0/" rel="nofollow">SD Times news digest: Codefresh’s CI/CD live debugger, Azure Functions Premium, and SmartBear announces ReadyAPI 3.0</a></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>  

                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col mt-5">                                           
                                    <h3>Media Contact</h3>
                                    <p>Tanya Carlsson<br />
                                    Offleash PR for Sourcegraph<br />
                                    <a href="mailto:tanya@offleashpr.com">tanya @ offleashpr.com</a><br />
                                    707.529.6139<br />
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
