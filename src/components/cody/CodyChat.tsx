import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'
import { useWindowWidth } from '../../hooks/windowWidth'

const answers = [
    'How is this repository structured?',
    'What does this file do?',
    'Where is X component defined?',
    'Why isn’t this code working??',
]

export const CodyChat: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const screenStyle = {
        parent: windowWidth > 1140 ? 'relative' : '',
        img: windowWidth > 1140 ? 'absolute' : '',
    }
    return (
        <ContentSection
            className="flex w-full  flex-col overflow-hidden border-gray-200 border-opacity-50 pt-[64px] md:rounded-2xl md:border md:bg-violet-700 md:pt-[72px] xl:max-w-[1280px]"
            parentClassName="!px-0 !pb-0"
        >
            <div className="mx-6 md:ml-14 md:mb-32">
                <div className="flex w-full max-w-[701px] flex-col gap-[18px]">
                    <img className="h-[48px] w-[48px]" src="/cody/chat-brand-icon.svg" alt="Cody Chat" />
                    <Heading
                        size="h2"
                        className="m-0 text-left font-semibold leading-10 tracking-[-1px] text-white md:text-[40px] md:text-4xl"
                    >
                        AI-powered chat for your code
                    </Heading>
                    <h3 className="m-0 text-left text-lg text-gray-200 md:text-2xl">
                        Cody chat helps unblock you when you’re jumping into new projects, trying to understand legacy
                        code, or taking on tricky problems.
                    </h3>
                </div>
            </div>

            <div
                className={`pb-0 pt-8 text-left md:ml-14 md:block md:flex-row md:pb-28  lg:flex lg:flex-col lg:items-center ${screenStyle.parent}`}
            >
                <div className="mb-6 flex w-full flex-col md:mr-24">
                    <div className="flex max-w-[380px] flex-col justify-center gap-4 text-xl md:text-lg">
                        <p className="px-6 md:px-[9px] text-sm font-[590] uppercase leading-[27px] text-gray-200">
                            Cody can answer questions like:
                        </p>

                        {answers.map(answer => (
                            <h5
                                key={answer}
                                className="font-lg m-0 px-6 md:px-2.5 py-2 font-[590] leading-[25px] tracking-[-0.25px]  text-white md:font-normal md:leading-[27px]"
                            >
                                {answer}
                            </h5>
                        ))}
                    </div>
                </div>
                <div className="w-full mx-6 md:mx-0">
                    <img
                        className={`md:h-[522px] md:-top-16 self-stretch  -right-[128px] flex ${screenStyle.img}`}
                        src="/cody/cody-chat-interface.svg"
                        alt="Cody Chat interface"
                    />
                </div>
            </div>
        </ContentSection>
    )
}
