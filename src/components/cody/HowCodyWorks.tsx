import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection, Heading } from '..'
import { DevPlatformsSection } from '../Enterprise/DevPlatformsSection'

export const HowCodyWorks: FunctionComponent<{ isLight: boolean }> = ({ isLight = false }) => (
    <ContentSection
        parentClassName="!py-0 !px-0"
        className={classNames(
            'flex h-auto max-w-[1280px] flex-col justify-between overflow-hidden border-y px-6 px-0 md:my-24 md:h-[414px] md:flex-row md:justify-between md:gap-2 md:rounded-2xl md:border-1 md:pl-16 md:pr-[82.04px]',
            { 'border-[#343A4D] bg-violet-700': !isLight, 'hidden border-gray-200 bg-[#FFF] md:flex': isLight }
        )}
    >
        <div
            className={classNames('w-full text-white md:h-full md:max-w-[541px]', {
                'py-16': !isLight,
                'pb-16 pt-[84px]': isLight,
            })}
        >
            <Heading
                size="h2"
                className={classNames('pb-4 !text-[40px] !leading-10 !-tracking-[1px]', {
                    'text-white': !isLight,
                    'text-[#000]': isLight,
                })}
            >
                Works with your existing code hosts and IDEs
            </Heading>
            <p
                className={classNames('text-2xl leading-[30px] -tracking-[0.25px]', {
                    'text-gray-200': !isLight,
                    'text-[#000]': isLight,
                })}
            >
                Cody lives in VS Code and JetBrains IDEs and works with code from any code host.
            </p>
            <p
                className={classNames('text-2xl leading-[30px] -tracking-[0.25px]', {
                    'text-gray-200': !isLight,
                    'text-[#000]': isLight,
                })}
            >
                Cody Enterprise integrates with all your code hosts for expanded codebase context and personalization.
            </p>
        </div>
        <DevPlatformsSection
            isLight={false}
            setOneClassName="bottom-[42px] gap-[25.05px]"
            setTwoClassName="gap-[25px] -top-[10px]"
            setThreeClassName="bottom-[42px] gap-[25.05px]"
        />
    </ContentSection>
)
