import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { buttonLocation } from '../../data/tracking'
import { Heading } from '../Heading'

import { TrySourcegraphAppButton } from './TrySourcegraphForFreeButton'

interface CallToAction {
    title: string
    description: string
    buttonText: string
    className?: string
    titleClassName?: string
    descriptionClassName?: string
    buttonClassName?: string
}

export const CallToAction: FunctionComponent<CallToAction> = ({
    title,
    description,
    buttonText,
    className,
    titleClassName,
    buttonClassName,
    descriptionClassName,
}) => (
    <div
        className={classNames(
            className,
            'relative mt-32 flex w-full flex-col items-center px-sm pb-4 text-center text-white'
        )}
    >
        {title && (
            <Heading size="h3" className={classNames(titleClassName, '!font-grotesk text-4xl tracking-[-1px]')}>
                {title}
            </Heading>
        )}
        {description && (
            <p className={classNames(descriptionClassName, 'mt-4 mb-0 text-lg text-gray-200')}>{description}</p>
        )}
        {buttonText && (
            <div className={classNames(buttonClassName, 'mt-6 flex gap-x-4 md:mt-8')}>
                <TrySourcegraphAppButton buttonLocation={buttonLocation.trySourcegraph} dark={true}>
                    {buttonText}
                </TrySourcegraphAppButton>
            </div>
        )}
    </div>
)
