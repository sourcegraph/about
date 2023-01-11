import { FunctionComponent } from 'react'
import { buttonStyle, buttonLocation } from '@data'
import CheckboxMarkedOutlineIcon from 'mdi-react/CheckboxMarkedOutlineIcon'
import {
    ContentSection,
    Hero,
    Layout
} from '@components'

const signupUrl = 'https://sourcegraph.typeform.com/to/pIXTgwrd'

export const CodyPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody - Intelligent Coding Assistant',
            description: 'Code more quickly with automated code generation, refactoring, explanations, and answers'
        }}
        className="navbar-dark"
        hero={
            <Hero
                variant="darkNebulous2"
                product="cody (beta)"
                title='Read, write, and understand code 10x faster with AI'
                subtitle="Your {intelligent, code-aware, enterprise-ready} programmer's assistant."
                cta={
                    <div className="tw-text-left tw-flex-col md:tw-flex-row md:tw-flex">
                        <div className="mb-3 mb-md-0">
                            <a
                                href={signupUrl}
                                className="btn btn-primary w-100 max-w-350"
                                title="Sign up for beta access"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                            >
                                Sign up for beta access
                            </a>
                        </div>
                    </div>
                }
                displayUnderNav={true}
            />
        }
    >
        <ContentSection
            background="white"
        >
            <div>
                <h2 className="mb-3 tw-text-center w-100">Codebase-aware chat</h2>
                <p className="tw-text-left icon-subheader w-100 tw-mx-auto tw-max-w-3xl">
                    Answer questions about both general programming topics and your specific codebase from right inside your editor. Cody knows about your local code and can learn from all the code and documentation inside your organization.
                </p>
                <img
                    className="tw-mt-6 tw-mx-auto tw-h-auto tw-max-w-xl"
                    alt="Chatbot dialog"
                    src="https://user-images.githubusercontent.com/1646931/211680462-7013ece4-e312-46e4-89e3-90731dff6710.png" />
            </div>
        </ContentSection>
        <ContentSection
            background="darkNebulous3"
        >
            <div >
                <h2 className="mb-3 tw-text-center w-100">Intelligent refactoring</h2>
                <p className="tw-text-center icon-subheader w-100">
                    Take the toil out of writing tests and refactoring. Pattern-match from existing code and never write boilerplate again.
                </p>
                <img className="tw-mt-6 tw-mx-auto tw-h-auto tw-max-w-5xl"
                    alt="Refactoring command"
                    src="https://user-images.githubusercontent.com/1646931/211680700-7eebb3e8-387a-4e53-a3c8-a8e31246cc47.png" />
            </div>
        </ContentSection>
        <ContentSection
            background="white"
        >
            <div className="flex-wrap tw-flex">
                <h2 className="mb-3 tw-text-center w-100">Context-aware autocomplete</h2>
                <p className="tw-text-center icon-subheader w-100">
                    Let Cody suggest intelligent code completions generated with context from your codebase.
                </p>
                <img className="tw-mt-6 tw-mx-auto tw-h-auto tw-max-w-5xl"
                    alt="Refactoring editor command"
                    src="https://user-images.githubusercontent.com/1646931/211681094-d4df94ce-7602-4ee5-8af0-f8dfddc73f6b.png" />
            </div>
        </ContentSection>
        <ContentSection
            background="darkAuroraGrid"
        >
            <div className="flex-wrap tw-flex">
                <h2 className="mb-3 tw-text-center w-100">Ready for Enterprise</h2>
                <ul className="tw-list-none tw-text-left icon-subheader w-100 tw-max-w-2xl tw-mx-auto" >
                    <li>
                        <CheckboxMarkedOutlineIcon className="mr-2 icon-inline tw-text-green-500 tw-inline" />
                        Deploys self-hosted or on cloud
                    </li>
                    <li>
                        <CheckboxMarkedOutlineIcon className="mr-2 icon-inline tw-text-green-500 tw-inline" />
                        Enterprise privacy, security, and compliance
                    </li>
                    <li>
                        <CheckboxMarkedOutlineIcon className="mr-2 icon-inline tw-text-green-500 tw-inline" />
                        Cross-platform and works with all your code hosts, editors, and environments
                    </li>
                    <li>
                        <CheckboxMarkedOutlineIcon className="mr-2 icon-inline tw-text-green-500 tw-inline" />
                        Works with Sourcegraph precise code intelligence and code search for even better results
                    </li>
                </ul>
            </div>
        </ContentSection>
        <ContentSection
            background="lightNebulousMars"
        >
            <div className="flex-wrap tw-flex">
                <h2 className="mb-3 tw-text-center w-100">Sign up for free early access</h2>
                <a className="btn btn-primary tw-mx-auto" href={signupUrl}>Join beta</a>
            </div>
        </ContentSection>
    </Layout >
)

export default CodyPage
