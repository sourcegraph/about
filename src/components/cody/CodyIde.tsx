import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'

export const CodyIde: FunctionComponent = () => (
    <ContentSection
        parentClassName="!py-0"
        className="mt-16 flex w-full flex-col items-center gap-x-12 gap-y-6 md:mt-14 md:flex-col md:px-8"
    >
        <div className="flex w-full flex-col items-center justify-center gap-x-6 gap-y-8 py-6 md:flex-row md:gap-x-4">
            <div className="flex h-full flex-col items-center justify-center md:pr-8">
                <Heading size="h6" className="whitespace-nowrap !text-lg text-gray-200">
                    Cody is available for:
                </Heading>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-8">
                <div className="flex items-center gap-x-4 md:px-6">
                    <img className="h-[50px] w-[50px]" src="/icons/vscode.svg" alt="VS Code IDE Marketplace" />{' '}
                    <div>
                        <Heading size="h4" className="!text-2xl text-gray-200">
                            VS Code
                        </Heading>
                        <span className="text-sm text-white text-opacity-80">GA</span>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 md:px-6">
                    <img className="h-[50px] w-[50px]" src="/icons/intelliJ.svg" alt="IntelliJ IDE marketplace" />{' '}
                    <div>
                        <Heading size="h4" className="!text-2xl text-gray-200">
                            IntelliJ
                        </Heading>
                        <span className="text-sm text-white text-opacity-80">BETA</span>
                    </div>
                </div>
                <div className="flex items-center  gap-x-4 md:px-6">
                    <img className="h-[50px] w-[50px]" src="/icons/Neovim-logo.svg" alt="NeoVim IDE" />{' '}
                    <div>
                        <Heading size="h4" className="!text-2xl text-gray-200">
                            Neovim
                        </Heading>
                        <span className="text-sm text-white text-opacity-80">EXPERIMENTAL</span>
                    </div>
                </div>
                <div className="flex items-center  gap-x-4 md:px-6">
                    <img className="h-[50px] w-[50px]" src="/icons/EmacsIcon.svg" alt="Emacs IDE" />{' '}
                    <div>
                        <Heading size="h4" className="!text-2xl text-gray-200">
                            Emacs
                        </Heading>
                        <span className="text-sm text-white text-opacity-80">COMING SOON</span>
                    </div>
                </div>
            </div>
        </div>
    </ContentSection>
)
