import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'
import { DevPlatformsSection } from '../Enterprise/DevPlatformsSection'

export const HowCodyWorks: FunctionComponent<{ isLight: boolean; isVariant: boolean }> = ({
    isLight = false,
    isVariant,
}) => (
    <ContentSection
        parentClassName="!py-16 md:!py-28 "
        className={classNames(
            'flex h-auto  max-w-[1280px] flex-col justify-between overflow-hidden rounded-2xl border px-6 px-0  md:my-0 md:flex-row md:justify-between md:gap-2 md:border-1 md:pl-16 md:pr-[82.04px]',
            {
                'border-[#343A4D] bg-violet-700': !isLight,
                'border-gray-200 bg-[#FFF] md:flex': isLight,
                'pb-[92px] md:h-[414px]': !isVariant,
                'flex !items-center pb-24 md:h-[458px] md:pb-0': isVariant,
            }
        )}
    >
        <div
            className={classNames('w-full text-white md:h-full md:max-w-[541px]', {
                'py-16': !isLight,
                'pb-16 pt-[84px]': isLight,
                'flex flex-col justify-center !pb-[39px] !pt-10 md:!pb-16 md:!pt-0': isVariant,
            })}
        >
            <h2
                className={classNames('pb-4', {
                    'text-white': !isLight,
                    'text-[#000]': isLight,
                    '!pb-10': isVariant,
                })}
            >
                Works where your team works
            </h2>
            <p
                className={classNames('text-2xl leading-[30px] -tracking-[0.25px]', {
                    'text-gray-200': !isLight,
                    'text-[#000]': isLight,
                    'md:min-h-auto min-h-[156px] !text-xl !text-gray-500': isVariant,
                })}
            >
                Cody integrates with code from any code host at massive scale. Use it with any programming language or
                framework, from your IDE of choice.
            </p>
        </div>
        <DevPlatformsSection
            isVariant={isVariant}
            isLight={false}
            setOneClassName={isVariant ? 'md:bottom-[29px] gap-[25.05px]' : 'bottom-[42px] gap-[25.05px]'}
            setTwoClassName={isVariant ? 'gap-[25px] top-[37px] md:top-[28px]' : 'gap-[25px] -top-[10px]'}
            setThreeClassName={isVariant ? 'md:bottom-[20px] gap-[25.05px]' : 'bottom-[42px] gap-[25.05px]'}
        />
    </ContentSection>
)
