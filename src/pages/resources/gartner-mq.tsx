import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import { BentoWithMockup } from '../../components/bentoWithMockup'
import TwoColumnContentSection from '../../components/Resources/TwoColumnContentSection'

const listItems = [
    {
        title: 'Access to the best models:',
        description:
            'The best large language model (LLM) today can quickly be outperformed by another LLM tomorrow. Cody ensures enterprises never have to settle for second-best by offering LLM interoperability and LLM choice with access to the latest models from leading providers like Anthropic, OpenAI, and Google.',
    },
    {
        title: 'Powered by the best context:',
        description:
            'Sourcegraph’s decade-long history of helping enterprise developers search, navigate, and make changes to their code powers the context retrieval capabilities of Cody, allowing it to retrieve more relevant context from not just code but non-code sources like projects, issues, requirements, and docs.',
    },
    {
        title: 'Deployed the way you need:',
        description:
            'Cody offers enterprises flexible deployment options and is designed to work with existing environments, from support for different code hosts and IDEs through to deployment of Cody via self-hosted, cloud, or Virtual Private Cloud (VPC) means. This flexibility extends to LLMs too, so enterprises can use our service or bring their own key via cloud providers such as Amazon Bedrock, Azure OpenAI, or Google Cloud Vertex AI.',
    },
]

const GartnerMq: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody | Visionary in Gartner® Magic Quadrant™ for AI Code Assistants',
            description: 'Sourcegraph is honored to be a Visionary in the 2024 Gartner® Magic Quadrant™ for AI Code Assistants',
        }}
        className="overflow-hidden bg-gray-50"
        heroAndHeaderClassName="!pt-0"
        hero={
            <TwoColumnContentSection
                banner={<BentoWithMockup />}
                alternateStyle={true}
                title={
                    <>
                        Sourcegraph is honored to be recognized by Gartner as a Visionary in the 2024 Gartner® Magic
                        Quadrant™ for AI Code Assistants
                    </>
                }
                subContent={
                    <>
                        <p>
                            We believe this recognition validates our philosophy to build a tool that helps make solving
                            the hardest problems for enterprises like code modernization or fixing security
                            vulnerabilities across a codebase feel mundane. Sourcegraph Cody offers enterprises:
                        </p>
                        <ul className="ml-5 mb-10 flex flex-col gap-2">
                            {listItems.map(item => (
                                <li key={item.title}>
                                    <span className="font-semibold">{item.title}</span> {item.description}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />
        }
    />
)

export default GartnerMq
