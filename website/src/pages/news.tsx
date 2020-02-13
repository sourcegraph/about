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
                        <div class="container">
                            <div class="row">
                                <div class="col mt-5 mb-5 ">
                                    <h3>Press releases</h3>
                                     <ul>
                                        <li><a href="/blog/press-release-sourcegraph-announces-new-gitlab-native-integration/?ref=news" >New GitLab Native Integration, Universal Code Search Engine, and Amazing Company Momentum</a> 
                                        <span class="news__date">November 12, 2019</span>
                                        </li>
                                    </ul>  
                                </div>
                            </div>
                        </div>  

                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-sm-10 col-lg-10">                                                                     
                                    <h3>News</h3>
                                    <h5>2020</h5>
                                    <div class="container-fluid">
                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/infoworld-sq-logo.png" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>InfoWorld</strong> <span class="news__date">January 15, 2020</span><br />
                                                <a href="https://www.infoworld.com/article/3514213/sourcegraph-universal-code-search-and-intelligence.html" rel="nofollow">Sourcegraph: Universal code search and intelligence</a>
                                            </p>
                                        </div>
                                      </div>
                                    </div>
                                    <h5>2019</h5>
                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/techrepublic-sq-logo.png" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>Tech Republic</strong> <span class="news__date">December 4, 2019</span><br />
                                                <a href="https://www.techrepublic.com/article/java-and-javascript-dominated-software-development-in-the-2010s/" rel="nofollow">Java and JavaScript dominated software development in the 2010s</a>
                                            </p>
                                        </div>
                                      </div>
                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/security-boulevard-sq-logo.svg" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>Security Boulevard</strong> <span class="news__date">November 28, 2019</span><br />
                                                <a href="https://securityboulevard.com/2019/11/5-free-developer-tools-were-grateful-for/" rel="nofollow">5 Free Developer Tools We’re Grateful For</a>
                                            </p>
                                        </div>
                                      </div>
                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/app-developer-magazine-sq-logo.svg" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>App Developer Magazine </strong> <span class="news__date">November 28, 2019</span><br />
                                                <a href="https://appdevelopermagazine.com/universal-source-code-search-engine-emerges/" rel="nofollow">Universal source code search engine emerges</a>
                                            </p>
                                        </div>
                                      </div>

                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/devclass-sq-logo.svg" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>DevClass</strong> <span class="news__date">November 25, 2019</span><br />
                                                <a href="https://devclass.com/2019/11/25/gitlab-12-5-gets-multi-cloud-rolling/" rel="nofollow">GitLab 12.5 gets multi-cloud rolling</a>
                                            </p>
                                        </div>
                                      </div>

                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/dataversity-sq-logo.svg" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>Dataversity</strong> <span class="news__date">November 18, 2019</span><br />
                                                <a href="https://www.dataversity.net/sourcegraph-announces-new-gitlab-native-integration-universal-code-search-engine/" rel="nofollow">Sourcegraph Announces New GitLab Native Integration, Universal Code Search Engine</a>
                                            </p>
                                        </div>
                                      </div>

                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/the-new-stack-sq-logo-01.svg" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>The New Stack</strong> <span class="news__date">November 15, 2019</span><br />
                                                <a href="https://thenewstack.io/this-week-in-programming-dear-tech-conferences-do-better/" rel="nofollow">This Week in Programming: Dear Tech Conferences, Do Better</a>
                                            </p>
                                        </div>
                                      </div>

                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/devclass-sq-logo.svg" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>DevClass</strong> <span class="news__date">November 13, 2019</span><br />
                                                <a href="https://devclass.com/2019/11/13/gitlab-gets-native-with-sourcegraph-code-review-in-upcoming-release/" rel="nofollow">GitLab gets native with Sourcegraph code review in upcoming release</a>
                                            </p>
                                        </div>
                                      </div>
                                      <div class="row mb-4">
                                        <div class="col-sm-4 col-lg-2 text-center">
                                          <img className="news__image" src="/external-logos/sd-times-sq-logo.svg" />
                                        </div>
                                        <div class="col-sm-10 col-lg-10 align-self-center">
                                          <p><strong>SD Times </strong> <span class="news__date">November 12, 2019</span><br />
                                                <a href="https://sdtimes.com/softwaredev/sd-times-news-digest-codefreshs-ci-cd-live-debugger-azure-functions-premium-and-smartbear-announces-readyapi-3-0/" rel="nofollow">SD Times news digest: Codefresh’s CI/CD live debugger, Azure Functions Premium, and SmartBear announces ReadyAPI 3.0</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div class="container">
                            <div class="row justify-content-md-center">
                                <div class="col mt-5">                                           
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
