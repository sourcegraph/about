import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'

export const CodyHeadline: FunctionComponent<{
    userGroup: string | undefined
    handleOpenModal: () => void
    isLight?: boolean
    wrapperClassName?: string
}> = ({ userGroup, handleOpenModal, isLight = false, wrapperClassName }) => (
    <ContentSection
        parentClassName="!py-0 !px-0"
        className={classNames('-mt-8 pt-0 text-center md:mt-0', wrapperClassName, {
            'md:pt-[10px]': isLight,
            'md:pt-[22px]': !isLight,
        })}
    >
        <div className="mx-auto w-full px-6 md:w-[849px] lg:w-[895px]">
            {userGroup === 'test-value' ? (
                <>
                    <h1
                        className={classNames(
                            'mx-auto w-full pt-6 text-[48px] font-semibold !leading-[58px] tracking-[-1px] text-white md:text-[52px] md:!leading-[62px]',
                            {
                                'text-white': !isLight,
                                'text-[#0F111A]': isLight,
                            }
                        )}
                    >
                        Code more, type&nbsp;less
                    </h1>
                    <Heading
                        size="h3"
                        className={classNames('mx-auto mb-8 mt-6 max-w-[700px] leading-[30px] !tracking-[-0.25px]', {
                            'text-[#FFFFFFbb]': !isLight,
                            'text-[#343A4D]': isLight,
                        })}
                    >
                        Cody is the AI coding assistant that understands <span className="italic">your</span> code.
                    </Heading>
                    <div
                        className={classNames(
                            'grid-cols mb-8 grid gap-[8px] font-sans text-lg leading-[27px] tracking-[-0.25px]',
                            { 'text-[#FFFFFFbb]': !isLight, 'text-[#343A4D]': isLight }
                        )}
                    >
                        <span>✨ Ingest code from any code host</span>
                        <span>✨ Choose from the latest AI models</span>
                        <span>✨ Get relevant AI suggestions through enhanced context</span>
                    </div>
                </>
            ) : (
                <>
                    <h1
                        className={classNames(
                            'mx-auto w-full pt-6 text-[48px] font-semibold leading-[48px] text-white md:text-[72px] md:leading-[86px]',
                            {
                                'text-white': !isLight,
                                'text-[#0F111A]': isLight,
                            }
                        )}
                    >
                        Write less, ship more
                    </h1>
                    <Heading
                        size="h3"
                        className={classNames('mx-auto mb-8 mt-6  max-w-[700px] leading-[30px] !tracking-[-0.25px]', {
                            'text-[#FFFFFFbb]': !isLight,
                            'text-[#343A4D]': isLight,
                        })}
                    >
                        Cody is a coding AI assistant that uses AI and a deep understanding of your codebase to help you
                        write and understand code faster.
                    </Heading>
                </>
            )}

            <button
                type="button"
                className={classNames('btn btn-inverted-primary px-5 py-3', {
                    'bg-violet-700 text-[#FFF]': isLight,
                    'text-violet-500': !isLight,
                })}
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
