import { FunctionComponent } from 'react'

import { buttonLocation } from '../../data/tracking'
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
    <div className="relative flex w-full flex-col items-center px-sm pb-4 text-center text-white md:mt-32">
        {title && (
            <Heading size="h3" className="!font-grotesk text-4xl">
                {title}
            </Heading>
        )}
        {description && <p className="mt-4">{description}</p>}
        {buttonText && (
            <TrySourcegraphForFreeButton buttonLocation={buttonLocation.trySourcegraph} dark={true}>
                {buttonText}
            </TrySourcegraphForFreeButton>
        )}
    </div>
)
