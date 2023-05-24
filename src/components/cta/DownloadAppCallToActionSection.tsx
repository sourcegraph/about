import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { buttonLocation } from '../../data/tracking'
import { Heading } from '../Heading'

import { TrySourcegraphAppButton } from './TrySourcegraphForFreeButton'

interface StarshipPageCallToAction {
    title?: string
    description?: string
    buttonText?: string
    colorTheme: 'light' | 'dark'
    href?: string
}

export const DownloadAppCallToActionSection: FunctionComponent<StarshipPageCallToAction> = ({
    title = 'Start using Sourcegraph on your own code',
    description = 'Sourcegraph makes it easy to read, write, and fix code—even in big, complex codebases.',
    buttonText = 'Download Sourcegraph',
    colorTheme,
    href,
}) => (
    <div
        className={classNames(
            'relative mt-32 flex w-full flex-col items-center px-sm py-10 text-center text-white',
            colorTheme === 'light' ? 'sg-bg-gradient-purple' : ''
        )}
    >
        {title && (
            <Heading size="h3" className={classNames('!font-grotesk text-4xl tracking-[-1px]')}>
                {title}
            </Heading>
        )}
        {description && <p className="mt-4 mb-0 text-lg text-gray-200">{description}</p>}
        {buttonText && (
            <div className="mt-6 flex gap-x-4 md:mt-8">
                <TrySourcegraphAppButton href={href} buttonLocation={buttonLocation.trySourcegraph} dark={true}>
                    {buttonText}
                </TrySourcegraphAppButton>
            </div>
        )}
    </div>
)
