import { FunctionComponent } from 'react'

import { Badge, ContentSection, Heading } from '..'

export const CodyIde: FunctionComponent = () => (
    <ContentSection
        parentClassName="!py-0"
        className="flex w-full flex-col items-center gap-x-12 gap-y-12 pt-16 md:flex-row md:px-8 md:pt-[40px]"
    >
        <div className="flex w-full flex-wrap justify-center gap-x-6 gap-y-8 py-4 md:h-32 md:gap-x-8 md:first:gap-x-12">
            <div className="flex h-full flex-col items-center justify-center">
                <Heading size="h6" className="whitespace-nowrap !text-lg text-gray-200">
                    Cody is available for:
                </Heading>
            </div>
            <div className="flex items-center gap-x-4 md:px-6">
                <img className="" src="/icons/intelliJ.svg" alt="IntelliJ IDE marketplace" />{' '}
                <Heading size="h4" className="!text-2xl text-gray-200">
                    IntelliJ
                </Heading>
            </div>
            <div className="flex items-center  gap-x-4 md:px-6">
                <img className="" src="/icons/vscode.svg" alt="VS Code IDE Marketplace" />{' '}
                <Heading size="h4" className="!text-2xl text-gray-200">
                    VS Code
                </Heading>
            </div>
            <div className="flex items-center  gap-x-4 md:px-6">
                <img className="" src="/icons/Neovim-logo.svg" alt="NeoVim IDE" />{' '}
                <Badge text="Coming soon" size="small" color="light-gray" />
            </div>
            <div className="flex items-center  gap-x-4 md:px-6">
                <img className="" src="/icons/EmacsIcon.svg" alt="Emacs IDE" />{' '}
                <Badge text="Coming soon" size="small" color="light-gray" />
            </div>
        </div>
    </ContentSection>
)
