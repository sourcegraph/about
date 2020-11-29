import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import * as craft from '../images/about/sg-craftventures.png'
import * as felicis from '../images/about/sg-felicis.png'
import * as goldcrest from '../images/about/sg-goldcrest.png'
import * as redpoint from '../images/about/sg-redpoint.png'

export default class About extends React.Component<any, any> {
    public render(): JSX.Element | null {
        const description =
            'Sourcegraph builds universal code search for every developer and company so they can innovate faster. We help developers and companies with billions of lines of code create the software you use every day.'
        return (
            <Layout location={this.props.location}>
                <div className="about content-page bg-white text-dark">
                    <Helmet>
                        <title>Sourcegraph - About</title>
                        <meta name="twitter:title" content="Sourcegraph - About" />
                        <meta property="og:title" content="Sourcegraph - About" />
                        <meta name="twitter:site" content="@srcgraph" />
                        <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
                        <meta name="twitter:card" content="summary" />

                        <meta name="twitter:description" content={description} />
                        <meta property="og:description" content={description} />
                        <meta name="description" content={description} />
                    </Helmet>
                    <div>
                        <div className="light-11-bg jumbotron about__jumbotron text-center">
                            <div className="container py-5">
                                <h1>About Sourcegraph</h1>
                                <p className="h4 font-weight-normal">
                                    Sourcegraph builds universal code search for every developer and company so they can
                                    innovate faster. We help developers and companies with billions of lines of code
                                    create the software you use every day.
                                </p>
                            </div>
                        </div>
                        <div className="about__plan">
                            <div className="about__plan-container container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Learn all about Sourcegraph</h3>
                                        <p>
                                            The <a href="/handbook">Sourcegraph handbook</a> has everything from our
                                            high-level strategy and goals to documentation of routine business
                                            processes. It's public for everyone to read because we are{' '}
                                            <a href="/company/values#open-and-transparent">open and transparent</a>.
                                        </p>
                                        <a href="/handbook" className="btn btn-primary">
                                            Read the Sourcegraph handbook <ArrowRightIcon className="ml-1" />
                                        </a>
                                        <h6 className="mt-5">Handbook pages you might find interesting:</h6>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item mr-4">
                                                <a href="/company/strategy">Strategy</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/company/values">Values</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/company/remote">All-remote</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/company/goals">Goals</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/company/team">Team</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/company/careers">Open roles (we're hiring!)</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/handbook/communication/code_of_conduct">
                                                    Commitment to inclusion
                                                </a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/company/team/org_chart">Org chart</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                Codes of conduct:{' '}
                                                <a href="/handbook/communication/code_of_conduct">Team</a> and{' '}
                                                <a href="/community/code_of_conduct">Community</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/handbook/communication/content_guidelines">Style guide</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/direction">Product direction</a>
                                            </li>
                                            <li className="list-inline-item mr-4">
                                                <a href="/handbook/marketing/messaging">Messaging</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about__founders">
                            <div className="container">
                                <h1 className="mb-3">
                                    Founders
                                    <br />
                                </h1>
                                <Img sizes={this.props.data.Founders.childImageSharp.sizes} className="w-100 mb-3" />
                                <div className="row">
                                    <div className="col">
                                        <div>
                                            <h1>Quinn Slack</h1>
                                            <h5>CEO</h5>
                                            <div className="d-flex about__founders-social">
                                                <a href="https://github.com/sqs" target="_blank">
                                                    <div className="icon">
                                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                            <path
                                                                fill="#000000"
                                                                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="https://twitter.com/sqs" target="_blank">
                                                    <div className="icon">
                                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                            <path
                                                                fill="#000000"
                                                                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="https://www.linkedin.com/in/quinnslack/" target="_blank">
                                                    <div className="icon">
                                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                            <path
                                                                fill="#000000"
                                                                d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                            <p>
                                                Quinn Slack is CEO and co-founder of Sourcegraph. Prior to Sourcegraph,
                                                Quinn co-founded Blend Labs, an enterprise technology company with over
                                                500 employees dedicated to improving home lending.
                                            </p>
                                            <p>
                                                At Palantir Technologies, he created a technology platform to help two
                                                of the top five U.S. banks recover from the housing crisis. He was the
                                                first employee and developer at Bleacher Report after graduating from
                                                high school.
                                            </p>
                                            <p>Quinn graduated with a BS in Computer Science from Stanford.</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <h1>Beyang Liu</h1>
                                            <h5>CTO</h5>
                                            <div className="d-flex about__founders-social">
                                                <a href="https://github.com/beyang" target="_blank">
                                                    <div className="icon">
                                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                            <path
                                                                fill="#000000"
                                                                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="https://twitter.com/beyang" target="_blank">
                                                    <div className="icon">
                                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                            <path
                                                                fill="#000000"
                                                                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a
                                                    href="https://www.linkedin.com/in/beyang-liu/"
                                                    target="_blank"
                                                >
                                                    <div className="icon">
                                                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                                                            <path
                                                                fill="#000000"
                                                                d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                            <p>
                                                Beyang Liu is CTO and co-founder of Sourcegraph. Prior to Sourcegraph,
                                                Beyang was a software engineer at Palantir Technologies, where he
                                                developed new data analysis software on a small, customer-facing team
                                                working with Fortune 500 companies.
                                            </p>
                                            <p>
                                                Beyang studied Computer Science at Stanford, where he published research
                                                in probabilistic graphical models and computer vision at the Stanford AI
                                                Lab and thoroughly enjoyed his compilers course.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="/company/team">
                                    <button className="btn btn-primary">See all Sourcegraph team members</button>
                                </a>
                            </div>
                        </div>
                        <div className="about__investors">
                            <div className="container">
                                <h1 className="mb-3">
                                    Investors
                                    <br />
                                </h1>
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <img src={craft} alt="Craft" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={redpoint} alt="Redpoint" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={goldcrest} alt="Goldcrest Capital" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={felicis} alt="Felicis Ventures" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query aboutImages {
        Founders: file(relativePath: { eq: "about/sg-founders.png" }) {
            childImageSharp {
                sizes(maxWidth: 1080) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }
`
