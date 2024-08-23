import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import TwoColumnContentSection from '../../components/Resources/TwoColumnContentSection'

const GartnerMagicQuadrant: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody | Visionary in Gartner® Magic Quadrant™ for AI Code Assistants',
            description: 'Sourcegraph is honored to be a Visionary in the 2024 Gartner® Magic Quadrant™ for AI Code Assistants',
        }}
        className="bg-gray-50"
        heroAndHeaderClassName="!pt-0"
        hero={
            <TwoColumnContentSection
                subContent={
                    <>
                        <p>
                            We are honored to be recognized by Gartner as a Visionary in the 2024 Gartner® Magic
                            Quadrant™ for AI Code Assistants. This is the first Magic Quadrant for AI Code Assistants
                            published by Gartner, and Sourcegraph is placed as the only Visionary out of 12 vendors
                            evaluated.
                        </p>
                        <p>
                            This position validates our long-term view of how AI Code Assistants can benefit
                            enterprises, and our focus on pairing the best large language models (LLMs) with relevant
                            context from code and non-code sources will continue to allow developers to tackle hard and
                            complex problems.
                        </p>
                    </>
                }
            />
        }
    />
)

export default GartnerMagicQuadrant
