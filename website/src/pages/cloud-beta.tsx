import { PageProps } from 'gatsby'
import * as React from 'react'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import CustomCarousel from '../components/CustomCarousel'
import { buttonStyle, buttonLocation } from '../tracking'

const items = [
    {
        id: 0,
        backgroundClass: 'bg-gradient-green-blue',
        buttonLabel: 'Understand your code',
        text: 'Understand new code fast: discover code across all of your repositories, code hosts, and languages, and utilize Sourcegraph’s Code Intelligence to highlight dependencies and assess the impact of proposed code changes.',
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        id: 1,
        backgroundClass: 'bg-gradient-blue-purple',
        buttonLabel: 'Accelerate velocity',
        text: 'Streamline collaboration across teams, even while apart: find and reuse code, search for best practices for unfamiliar libraries or APIs, share links to code with teammates, and catch more bugs through better code reviews—and fix them faster, too.',
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        id: 2,
        backgroundClass: 'bg-gradient-purple-yellow',
        buttonLabel: 'Mitigate risks',
        text: 'Identify and mitigate issues across your entire codebase: monitor the introduction of vulnerable dependencies, hunt down outdated practices and patterns, and reduce the time it takes to search for bugs and security concerns.',
        headerClass: '',
        itemClass: 'd-none',
    },
]

export const CloudBetaPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph | Sourcegraph Cloud (Beta)',
            description:
                'Maximize developer productivity and stay focused on the work you love doing. Sourcegraph Cloud is now available in beta for small teams.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="cloud-beta-page"
        heroAndHeaderClassName="cloud-beta-page__hero-and-header"
        hero={
            <div className="container pb-4">
                <div className="row">
                    <div className="col-lg-9">
                        <h1 className="title display-2 mb-4">
                            Speed up your team's workflow with Universal Code Search.
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <p className="subTitle">Introducing team access to Sourcegraph Cloud (Private Beta)</p>
                        <p>
                            Teams of up to 25 users can now add their private repositories to Sourcegraph Cloud to
                            experience great code search together. Find & fix vulnerabilities, resolve incidents, and
                            onboard engineers to new codebases fast. Join the waitlist today to get exclusive early
                            access.
                        </p>
                        <a
                            className="btn btn-primary join-the-watilist-hero-btn"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                            href="https://share.hsforms.com/14OQ3RoPpQTOXvZlUpgx6-A1n7ku"
                        >
                            Join the waitlist <ArrowRightIcon className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        }
    >
        <ContentSection className="py-4 py-md-7 bg-light-gray">
            <div className="row">
                <div className="col-lg-12">
                    <div className="container video-embed embed-responsive embed-responsive-16by9 border">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/0DPXTB_Gzbw"
                            allowFullScreen={true}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            title="How developers are using Sourcegraph"
                        ></iframe>
                    </div>
                </div>
            </div>
        </ContentSection>

        <ContentSection className="py-4 text-center anyscale">
            <blockquote>
                <p>
                    Sourcegraph makes it so much easier to onboard to large codebases. It's an absolute game changer
                    when it comes to navigating around an ecosystem with hundreds of repositories or even multiple
                    organizations.
                </p>
                <footer className="blockquote-footer">Alex Wu, Software Engineer at Anyscale</footer>
                <div className="my-4">
                    <img src="/external-logos/anyscale-logo.svg" width="110px" alt="anyscale" />
                </div>
            </blockquote>
        </ContentSection>

        <CustomCarousel items={items} backgroundClass="bg-gradient-green-blue" />

        <ContentSection className="join-the-waitlist text-center">
            <div className="row">
                <div className="col-lg-12">
                    <img src="../join-the-waitlist.svg" className="mb-5" />
                    <h1 className="display-2 mb-0 title">Join the waitlist.</h1>
                    <p className="mt-3 mb-lg-6">Access Sourcegraph Cloud for free during the beta</p>
                    <p className="mt-5 font-weight-bold">We're looking for teams that:</p>
                    <div className="mb-5">
                        <ul>
                            <li>Have 5 to 25 engineers</li>
                            <li>Host their code on GitHub.com or GitLab.com</li>
                            <li>Are eager to partner with our Product team to provide feedback</li>
                            <li>Are ready to experience the power of code search</li>
                        </ul>
                    </div>
                    <a
                        className="btn btn-primary  "
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        href="https://share.hsforms.com/14OQ3RoPpQTOXvZlUpgx6-A1n7ku"
                    >
                        Join the waitlist <ArrowRightIcon className="ml-1" />
                    </a>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default CloudBetaPage
