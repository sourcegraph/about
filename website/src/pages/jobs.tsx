import { ArrowRightIcon } from 'mdi-react'
import * as React from 'react'
import { Helmet } from 'react-helmet'

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
                            Join us on our mission to make it so everyone, in every community, in every country, and in
                            every industry can create products using the best technology.
                        </p>
                        <a href="https://github.com/sourcegraph/careers/blob/master/README.md">
                            <button className="btn jobs__head-button">View Open Positions</button>
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
                                        We offer high-quality medical and dental care for all full-time employees and
                                        their dependents.
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
                                        We have a vacation policy that encourages our team to recharge when they need
                                        to.
                                    </p>
                                </div>
                            </div>
                            <div className="jobs__benefits-list-item">
                                <img className="jobs__benefits-list-item-icon" src="/jobs/family.svg" />
                                <div>
                                    <h3 className="jobs__benefits-list-item-title">Family Friendly</h3>
                                    <p className="jobs__benefits-list-item-description">
                                        We value and support teammates at all stages of life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="jobs__team">
                    <div className="jobs__container">
                        <h1>Our Team</h1>
                        <p className="jobs__team jobs__team--text">
                            Our team consists of talented, collaborative, driven individuals who are attracted to the
                            massive problem we are tackling. We work in an open environment that treats people in a
                            first-class manner and provides them with ownership, responsibility, and autonomy. Learn
                            more about the company.
                        </p>
                        <div className="jobs__team jobs__team--profiles">
                            <img className="jobs__team--profiles-item" src="/profiles/danA.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/farhan.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/felix.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/keegan.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/dan.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/geoffrey.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/stephen.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/matt.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/beyang.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/noemi.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/vanesa.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/scott.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/adam.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/milton.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/quinn.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/isaac.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/nick.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/chris.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/francis.png" />
                            <img className="jobs__team--profiles-item" src="/profiles/ryan.png" />
                        </div>
                    </div>
                </section>
                <section className="jobs__work">
                    <div className="jobs__container">
                        <h1>Our Work</h1>
                        <p>
                            View a few of our open-source projects to get an idea of some of the problems we are working
                            on.
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
                                            Go Language Server to Add Go Support to Editors
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
                                            JavaScript and TypeScript Language Server
                                        </span>
                                        <span className="jobs__work--buttons-text-description">
                                            JavaScript and TypeScript Code Intelligence
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
        )
    }
}
