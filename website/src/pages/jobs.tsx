import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
export default class JobsPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            jobs: [],
        }
    }

    public componentDidMount(): void {
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none')
        }
    }

    public render(): JSX.Element | null {
        const desc =
            'Join us on our mission to make it so everyone, in every community, in every country, and in every industry can create products using the best technology.'
        return (
            <Layout location={this.props.location}>
                <div className="jobs">
                    <Helmet>
                        <title>Careers at Sourcegraph</title>
                        <meta name="twitter:title" content="Careers at Sourcegraph" />
                        <meta property="og:title" content="Careers at Sourcegraph" />
                        <meta name="description" content={desc} />
                        <meta name="twitter:description" content={desc} />
                        <meta property="og:description" content={desc} />
                        <script
                            id="bebop-embed-loader"
                            async={true}
                            defer={true}
                            src="https://hire.withgoogle.com/s/embed/jobs.js?company=sourcegraphcom"
                        />
                    </Helmet>
                    <section className="jobs jobs__head">
                        <div className="jobs__container">
                            <h1> Careers at Sourcegraph</h1>
                            <p className="jobs__head-description">
                                Join us on our mission to make it so everyone, in every community, in every country, and
                                in every industry can create products using the best technology.
                            </p>
                            <a href="https://github.com/sourcegraph/careers/blob/master/README.md">
                                <button className="btn jobs__head-button">View open positions</button>
                            </a>
                        </div>
                    </section>
                    <section className="jobs__benefits">
                        <div className="jobs__container">
                            <h1>Benefits</h1>
                            <div className="jobs__benefits-list">
                                <div className="jobs__benefits-list-item">
                                    <img className="jobs__benefits-list-item-icon" src="/jobs/medical.svg" />
                                    <div>
                                        <h3 className="jobs__benefits-list-item-title">Medical</h3>
                                        <p className="jobs__benefits-list-item-description">
                                            We offer high-quality medical and dental care for all full-time employees
                                            and their dependents.
                                        </p>
                                    </div>
                                </div>
                                <div className="jobs__benefits-list-item">
                                    <img className="jobs__benefits-list-item-icon" src="/jobs/wellness.svg" />
                                    <div>
                                        <h3 className="jobs__benefits-list-item-title">Wellness</h3>
                                        <p className="jobs__benefits-list-item-description">
                                            A healthy mind and body is imperative to doing your best work and living a
                                            healthy life. We offer a generous monthly stipend that can be used at your
                                            discretion.
                                        </p>
                                    </div>
                                </div>
                                <div className="jobs__benefits-list-item">
                                    <img className="jobs__benefits-list-item-icon" src="/jobs/vacation.svg" />
                                    <div>
                                        <h3 className="jobs__benefits-list-item-title">Vacation</h3>
                                        <p className="jobs__benefits-list-item-description">
                                            We have a vacation policy that encourages our team to recharge when they
                                            need to.
                                        </p>
                                    </div>
                                </div>
                                <div className="jobs__benefits-list-item">
                                    <img className="jobs__benefits-list-item-icon" src="/jobs/family.svg" />
                                    <div>
                                        <h3 className="jobs__benefits-list-item-title">Family friendly</h3>
                                        <p className="jobs__benefits-list-item-description">
                                            We value and support teammates at all stages of life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="jobs__work">
                        <div className="jobs__container">
                            <h1>Our work</h1>
                            <p>
                                View a few of our open-source projects to get an idea of some of the problems we are
                                working on.
                            </p>
                            <div className="jobs__work--buttons">
                                <a
                                    href="https://github.com/sourcegraph/go-langserver"
                                    className="mr-lg-2 link"
                                    target="blank"
                                >
                                    <div className="jobs__work--buttons-button">
                                        <div className="jobs__work--buttons-text">
                                            <span className="jobs__work--buttons-text-title">Go language server</span>
                                            <span className="jobs__work--buttons-text-description">
                                                Go language server to add Go support to editors
                                            </span>
                                        </div>
                                        <div className="jobs__work--buttons-icon">
                                            <ArrowRightIcon />
                                        </div>
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/sourcegraph/javascript-typescript-langserver"
                                    className="link"
                                    target="blank"
                                >
                                    <div className="jobs__work--buttons-button">
                                        <div className="jobs__work--buttons-text">
                                            <span className="jobs__work--buttons-text-title">
                                                JavaScript and TypeScript language server
                                            </span>
                                            <span className="jobs__work--buttons-text-description">
                                                JavaScript and TypeScript code intelligence
                                            </span>
                                        </div>
                                        <div className="jobs__work--buttons-icon">
                                            <ArrowRightIcon />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
