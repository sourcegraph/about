import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, Layout, Video } from '../../../components'
import { useAuthModal } from '../../../context/AuthModalContext'
import { buttonLocation, buttonStyle } from '../../../data/tracking'

const data = [
    {
      feature: 'Autocomplete',
      feature_details: 'Automatically suggest completions for your code',
      view_feature_details: false,
      cody: '✓',
      cody_details: '',
      view_cody_details: false,
      competitor: '✓',
      competitor_details:'',
      view_competitor_details: false,
    },
    {
      feature: 'Chat',
      cody: '✓',
      competitor: '✓'
    },
    {
      feature: 'Inline Chat',
      cody: '✓',
      competitor: 'x'
    },
    {
      feature: 'Commands, e.g.: Generate unit tests, Explain code',
      cody: '✓',
      competitor: 'x'
    },
    {
      feature: 'Users can choose and change models',
      cody: '✓',
      cody_details: ['Anthropic Claude 2', 'OpenAI GPT-3.5-Turbo', 'OpenAI GPT-4'],
      competitor: '✓',
      competitor_details: ['GPT-4']
    },
    {
      feature: 'Autocomplete model',
      cody: '✓',
      cody_details: ['Anthropic Claude Instant', 'OpenAI GPT-3.5 Turbo', 'OpenAI GPT-4'],
      competitor: 'x'
    },
    {
      feature: 'Bring your own LLM API key with Azure OpenAI & AWS Bedrock',
      cody: '✓',
      competitor: 'x'
    },
    {
      feature: 'Code in the local file',
      cody: '✓',
      competitor: '✓'
    },
    {
      feature: 'Neighboring editor tabs',
      cody: '✓',
      competitor: '✓'
    },
    {
      feature: 'Entire codebase spanning all code hosts (via embeddings)',
      cody: '✓',
      competitor: 'x'
    },
    {
      feature: 'Zero retention for data sharing',
      cody: '✓',
      competitor: 'x',
      competitor_details: 'Available, but only on Business tier'
    },
    {
      feature: 'IP indemnity',
      cody: '✓',
      competitor: 'x',
      competitor_details: 'No indemnity for pre-release software'
    },
    {
      feature: 'Web app',
      cody: '✓',
      competitor: 'x'
    },
    {
      feature: 'VS Code',
      cody: '✓',
      competitor: '✓'
    },
    {
      feature: 'JetBrains',
      cody: '✓',
      competitor: 'x'
    },
    {
      feature: 'Neovim',
      cody: '✓',
      cody_details: 'Experimental',
      competitor: '✓'
    },
    {
      feature: 'Visual Studio',
      cody: 'x',
      competitor: '✓'
    },
    {
      feature: 'Mobile App',
      cody: 'x',
      competitor: 'x',
      competitor_details: 'Coming soon'
    }
];

const GetStartedButton: FunctionComponent<{ className?: string }> = ({ className }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody')

    return (
        <button
            title="Get started"
            className={classNames('btn btn-primary', className)}
            type="button"
            onClick={handleOpenModal}
        >
            Get started
        </button>
    )
}

const ContactUsButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <Link
        href="/contact/request-info?form_submission_source=pricing-cody-enterprise"
        className={classNames('btn btn-outline-primary w-full md:w-auto', className)}
        title="Contact us"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation.bodyDemo}
        data-button-type="cta"
    >
        Contact us
    </Link>
)

const FeatureComponent: FunctionComponent<{item: any}> = (item:any) => {
    const data = item.item;
    const [showFeatureDetails, setShowFeatureDetails] = useState(data.view_feature_details)
    const [showCodyDetails, setShowCodyDetails] = useState(data.view_feature_details)
    const [showCompetitorDetails, setShowCompetitorDetails] = useState(data.view_feature_details)
    const toggleFeatureDetails = (): void => setShowFeatureDetails(!showFeatureDetails)
    const toggleCodyDetails = (): void => setShowCodyDetails(!showCodyDetails)
    const toggleCompetitorDetails = (): void => setShowCompetitorDetails(!showCompetitorDetails)

    return (
        <tr>
            <td className="w-1/2">
                {data.feature} 

                {data.feature_details && data.feature_details.length > 0 && 
                    <button type="button" className="ml-2 text-xs" onClick={()=>toggleFeatureDetails()}>ⓘ</button>
                } 

                {showFeatureDetails && 
                <>
                <p className="text-xs">{data.feature_details}</p>
                <Video 
                    source={{
                        mp4: 'blog/release-october-2023/levels-of-code-ai/explain-cody'
                    }}
                    loop={true}
                    title="Cody explains code"
                    />
                </>
                }
            </td>

            <td className="w-1/4 text-center relative">
                {data.cody}
                {data.cody_details && data.cody_details.length > 0 && 
                    <button type="button" className="ml-2 text-xs absolute" onClick={()=>toggleCodyDetails()}>ⓘ</button>
                }
                {showCodyDetails && Array.isArray(data.cody_details) && data.cody_details.map((item:any, index:number) => (
                    <div key={index} className="text-xs">{item}</div>
                ))}

                {showCodyDetails && !Array.isArray(data.cody_details) &&
                    <p>{data.cody_details}</p>
                    
                }
            </td>
            
            <td className="w-1/4 text-center relative">
                {data.competitor}
                {data.competitor_details && data.competitor_details.length > 0 && 
                    <button type="button" className="ml-2 text-xs absolute" onClick={()=>toggleCompetitorDetails()}>ⓘ</button>
                }
                {showCompetitorDetails && 
                    <p className="text-xs">{data.competitor_details}</p>
                }
            </td>
        </tr>
    )
}

const PricingPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs. GitHub Copilot',
            description: 'Feature comparison of Sourcegraph Cody and GitHub Copilot',
        }}
        hero={
            <div className="container mx-auto pt-5xl text-center">
                <h1 className="flex items-center justify-center gap-3">
                    <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px]" /> Cody{' '}
                </h1>
                <p className="mt-6 text-3xl text-black">Sourcegraph Cody vs. GitHub Copilot</p>
            </div>
        }
    >
        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-12">
            <div className="col-span-full">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="font-semibold border-0 w-1/2">Feature</th>
                            <th className="font-semibold border-0 w-1/4">Sourcegraph Cody</th>
                            <th className="font-semibold border-0 w-1/4">GitHub Copilot Individual</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((item, index: number) => (
                            <FeatureComponent item={item} key={index}/>
                        ))
                        }
                    </tbody>
                </table>
                Last updated: 2023-11-27
            </div>
        </ContentSection>
    </Layout>
)

export default PricingPage
