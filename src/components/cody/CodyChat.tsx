import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'
import { useWindowWidth } from '../../hooks/windowWidth'

interface CodyChatProps {
    isLight?: boolean
}

const answers = [
    'How is this repository structured?',
    'What does this file do?',
    'Where is X component defined?',
    'Why isn’t this code working??',
]

export const CodyChat: FunctionComponent<CodyChatProps> = ({ isLight = false }) => {
    const windowWidth = useWindowWidth()
    const screenStyle = {
        parent: windowWidth > 1140 ? 'relative' : '',
        img: windowWidth > 1140 ? 'absolute' : '',
    }
    return (
        <ContentSection
            className={classNames(
                'flex w-full flex-col overflow-hidden border-gray-200 border-opacity-50 pt-[64px] md:rounded-2xl md:border xl:max-w-[1280px]',
                {
                    'md:bg-violet-700 md:pt-[72px]': !isLight,
                    'h-auto bg-none md:mb-0 md:bg-white md:pt-[48px] md:pb-0 xl:max-h-[757px]': isLight,
                }
            )}
            parentClassName={classNames('!px-0 !pb-0', { '!pt-0 md:!pt-[96px] pb-[16px] md:pb-0': isLight })}
        >
            <div className={classNames('mx-6 md:ml-14', { 'md:mb-32': !isLight, 'md:mb-0': isLight })}>
                <div className="flex w-full max-w-[701px] flex-col gap-[18px]">
                    <img className="h-[32px] w-[32px]" src="/cody/chat-brand-icon.svg" alt="Cody Chat" />
                    <h2
                        className={classNames('m-0 text-left', {
                            'text-white': !isLight,
                            'text-[#0F111A]': isLight,
                        })}
                    >
                        AI chat for code generation and explanation
                    </h2>
                    <h3
                        className={classNames('m-0 text-left md:text-2xl', {
                            'text-[24px] !leading-[30px] !tracking-[-0.25px] text-[#343A4D]': isLight,
                            'text-lg text-gray-200': !isLight,
                        })}
                    >
                        Generate code on demand using AI. Cody also unblocks you when you’re jumping into new projects
                        or trying to understand legacy code.
                    </h3>
                </div>
            </div>

            <div
                className={classNames(
                    `pb-0 pt-8 text-left md:ml-14 md:block md:flex-row lg:flex lg:flex-col lg:items-center ${screenStyle.parent}`,
                    { 'md:pb-28': !isLight, 'md:pt-0 md:pb-[160px]': isLight }
                )}
            >
                <div className={classNames('mb-6 flex w-full flex-col', { 'mt-[44.5px] md:mt-[95.5px]': isLight })}>
                    <div className="flex max-w-[380px] flex-col justify-center gap-4 text-xl md:text-lg">
                        <p
                            className={classNames('px-6 leading-[27px] md:px-[9px]', {
                                'text-sm font-[590] uppercase text-gray-200': !isLight,
                                'text-[18px] font-normal tracking-[-0.25px] text-[#0F111A]  md:pb-[8px] md:text-sm md:font-[600] md:uppercase md:text-[#343A4D]':
                                    isLight,
                            })}
                        >
                            Cody answers your coding questions:
                        </p>

                        {answers.map(answer => (
                            <h5
                                key={answer}
                                className={classNames(
                                    'font-lg m-0 px-6 py-2 font-[590] leading-[25px] tracking-[-0.25px] md:px-2.5 md:font-normal md:leading-[27px]',
                                    {
                                        'ml-[10px] text-[20px] text-[#0F111A] md:ml-0 md:text-[18px]': isLight,
                                        'text-white': !isLight,
                                    }
                                )}
                            >
                                {answer}
                            </h5>
                        ))}
                    </div>
                </div>
                <div className="mx-6 w-full md:mx-0">
                    <img
                        className={classNames(`-right-[100px] flex self-stretch shadow-md ${screenStyle.img}`, {
                            'md:-top-16 md:h-[522px] xl:-right-[20px]': !isLight,
                            'md:bottom-[34px] md:h-[478px] xl:-right-0': isLight,
                        })}
                        src={
                            isLight
                                ? '/assets/cody/cody-chat-interface-light-v2.svg'
                                : '/cody/cody-chat-interface-v2.png'
                        }
                        alt="Cody Chat interface"
                    />
                </div>
            </div>
        </ContentSection>
    )
}
