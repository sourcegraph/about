import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import { 
    BlockquoteWithBorder, 
    buttonStyle, 
    buttonLocation, 
    ContentSection, 
    CustomCarousel, 
    Layout, 
    YouTube } from '@components'

const items = [
    {
        backgroundClass: 'bg-gradient-green-blue',
        buttonLabel: 'Understand your code',
        text: 'Understand new code fast: discover code across all of your repositories, code hosts, and languages, and utilize Sourcegraph’s Code Intelligence to highlight dependencies and assess the impact of proposed code changes.',
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        backgroundClass: 'bg-gradient-blue-purple',
        buttonLabel: 'Accelerate velocity',
        text: 'Streamline collaboration across teams, even while apart: find and reuse code, search for best practices for unfamiliar libraries or APIs, share links to code with teammates, and catch more bugs through better code reviews—and fix them faster, too.',
        headerClass: '',
        itemClass: 'd-none',
    },
    {
        backgroundClass: 'bg-gradient-purple-yellow',
        buttonLabel: 'Mitigate risks',
        text: 'Identify and mitigate issues across your entire codebase: monitor the introduction of vulnerable dependencies, hunt down outdated practices and patterns, and reduce the time it takes to search for bugs and security concerns.',
        headerClass: '',
        itemClass: 'd-none',
    },
]

export const CloudBeta: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Sourcegraph Cloud (Beta)',
            description:
                'Maximize developer productivity and stay focused on the work you love doing. Sourcegraph Cloud is now available in beta for small teams.',
            image: '/sourcegraph-og.png',
        }}
        hero={
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-9">
                        <h1 className="font-weight-bold display-2 mb-4">
                            Speed up your team's workflow with Universal Code Search.
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="font-weight-bold mb-2">Introducing team access to Sourcegraph Cloud (Private Beta)</h4>
                        <p>
                            Teams of up to 25 users can now add their private repositories to Sourcegraph Cloud to
                            experience great code search together. Find & fix vulnerabilities, resolve incidents, and
                            onboard engineers to new codebases fast. Join the waitlist today to get exclusive early
                            access.
                        </p>
                        <a
                            className="btn btn-primary mt-5"
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
        <ContentSection className="py-4 py-md-7">
            <YouTube id="0DPXTB_Gzbw" title="How developers are using Sourcegraph" />
        </ContentSection>
        <ContentSection>
            <BlockquoteWithBorder
                quote="Sourcegraph makes it so much easier to onboard to large codebases. It's an absolute game changer when it comes to navigating around an ecosystem with hundreds of repositories or even multiple organizations."
                author="Alex Wu, Software Engineer at Anyscale"
                logoImage="/external-logos/anyscale-logo.svg"
                logoAlt="Anyscale Logo"
                bold={true}
                />
        </ContentSection>
        <div className="py-7">
            <CustomCarousel items={items} backgroundClass="bg-gradient-green-blue"/>
        </div>
        <ContentSection className="text-center">
            <div className="row">
                <div className="mb-3 col-lg-12">
                    <img src="/join-the-waitlist.svg" className="mb-5" alt="Join the waitlist for Sourcegraph!" />
                    <h1 className="display-2 font-weight-bold">Join the waitlist.</h1>
                    <p className="my-3">Access Sourcegraph Cloud for free during the beta</p>
                    <p className="mt-4 font-weight-bold">We're looking for teams that:</p>
                    <ul className="mb-5 list-group list-group-flush max-w-500 mx-auto">
                        <li className="list-group-item">Have 5 to 25 engineers</li>
                        <li className="list-group-item">Host their code on GitHub.com or GitLab.com</li>
                        <li className="list-group-item">Are eager to partner with our Product team to provide feedback</li>
                        <li className="list-group-item">Are ready to experience the power of code search</li>
                    </ul>
                    <a
                        className="btn btn-primary"
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

export default CloudBeta
