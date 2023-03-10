import { FunctionComponent } from 'react'

import { buttonLocation } from '../../data/tracking'
import { GetStartedLinkButton } from '../GetStartedButton'
import { Heading } from '../Heading'

import { TrySourcegraphForFreeButton } from './TrySourcegraphForFreeButton'

interface StarshipPageCallToAction {
    title: string
    description: string
    buttonText: string
}

export const StarshipPageCallToAction: FunctionComponent<StarshipPageCallToAction> = ({
    title,
    description,
    buttonText,
}) => (
    <div className="relative mt-32 flex w-full flex-col items-center px-sm pb-4 text-center text-white">
        {title && (
            <Heading size="h3" className="!font-grotesk text-4xl tracking-[-1px]">
                {title}
            </Heading>
        )}
        {description && <p className="mt-4 mb-0 text-lg text-gray-200">{description}</p>}
        {buttonText && (
            <div className="mt-6 flex gap-x-4 md:mt-8">
                <TrySourcegraphForFreeButton buttonLocation={buttonLocation.trySourcegraph} dark={true}>
                    {buttonText}
                </TrySourcegraphForFreeButton>
                <GetStartedLinkButton
                    className="hidden border border-white bg-transparent md:block"
                    buttonLocation={0}
                />
            </div>
        )}
    </div>
)
