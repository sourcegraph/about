import { FunctionComponent } from 'react'

import { Heading, ContentSection } from '..'

export const CodyHeadline: FunctionComponent<{
    userGroup: string | undefined
    handleOpenModal: () => void
}> = ({ userGroup, handleOpenModal }) => (
    <ContentSection parentClassName="!py-0 !px-0" className="-mt-8 pt-0 text-center md:mt-0 md:pt-[22px]">
        <div className="mx-auto w-full px-6 md:w-[849px] lg:w-[895px]">
            {userGroup === 'test-value' ? (
                <>
                    <h1 className="mx-auto w-full pt-6 text-[48px] font-semibold !leading-[58px] tracking-[-1px] text-white md:text-[52px] md:!leading-[62px]">
                        Code more, type&nbsp;less
                    </h1>
                    <Heading
                        size="h3"
                        className="mx-auto mb-4 mt-6 max-w-[700px] leading-[30px] !tracking-[-0.25px] text-[#FFFFFFbb]"
                    >
                        Cody is the AI coding assistant that understands <span className="italic">your</span> code.
                    </Heading>
                    <div className="grid-cols mb-8 grid gap-[8px] font-sans text-lg leading-[27px] tracking-[-0.25px] text-[#FFFFFFbb]">
                        <span>✨ Ingest code from any code host</span>
                        <span>✨ Choose from the latest AI models</span>
                        <span>✨ Get relevant AI suggestions through enhanced context</span>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="mx-auto w-full pt-6 text-[48px] font-semibold leading-[48px] text-white md:text-[72px] md:leading-[86px]">
                        Write less, ship more
                    </h1>
                    <Heading
                        size="h3"
                        className="mx-auto mb-8 mt-6  max-w-[700px] leading-[30px] !tracking-[-0.25px] text-[#FFFFFFbb]"
                    >
                        Cody is a coding AI assistant that uses AI and a deep understanding of your codebase to help you
                        write and understand code faster.
                    </Heading>
                </>
            )}

            <button
                type="button"
                className="btn btn-inverted-primary px-5 py-3 text-violet-500"
                title="Get Cody for free"
                onClick={handleOpenModal}
            >
                <div className="flex items-center justify-center">
                    <img src="/cody/cody-logo.svg" className="mr-2 h-[15px] w-[15px]" alt="Cody Logo" /> Get Cody for
                    free
                </div>
            </button>
        </div>
    </ContentSection>
)
