import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'

export const CodyChat: FunctionComponent = () => (
    <ContentSection
        className="flex w-full flex-col gap-y-[17.5px] md:gap-y-16 md:px-[60px] xl:max-w-[1280px]"
        parentClassName="!px-0 !pb-0"
    >
        <div className="w-full px-6 md:w-[554px]">
            <img className="" src="/cody/cody-chat.svg" alt="Cody Chat" />
            <Heading size="h2" className="py-[18px] text-left !text-4xl text-white">
                AI-powered chat for your code
            </Heading>
            <p className="mb-0 text-left text-lg text-gray-200">
                Cody chat helps unblock you when you’re jumping into new projects, trying to understand legacy code, or
                taking on tricky problems.
            </p>
        </div>
        <div className="flex w-full flex-col gap-y-6 overflow-hidden text-left text-gray-200 md:flex-row lg:items-center">
            <div className="flex w-full flex-col px-6 md:w-[398px] md:py-6">
                <p className="pb-[17px] text-lg md:text-base">Cody can answer questions like:</p>
                <div className="flex flex-col gap-[10px] text-xl md:text-lg">
                    <p className="mb-0 py-[11px] px-[10px]">How is this repository structured?</p>
                    <p className="mb-0 py-[11px] px-[10px]">What does this file do?</p>
                    <p className="mb-0 py-[11px] px-[10px]">Where is X component defined?</p>
                    <p className="mb-0 py-[11px] px-[10px]">Why isn’t this code working??</p>
                </div>
            </div>
            <div className="w-full">
                <img
                    className="relative hidden max-w-[809px] self-stretch md:flex"
                    src="/cody/cody-chat-interface.svg"
                    alt="Cody Chat interface"
                />
            </div>
            <img
                className="relative flex self-stretch pl-6 md:hidden"
                src="/cody/cody-chat-mobile.svg"
                alt="Cody Chat interface"
            />
        </div>
    </ContentSection>
)
