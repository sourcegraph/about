import { FunctionComponent } from 'react'

import { FaAngleRight } from 'react-icons/fa'

import { Badge, ContentSection, Heading } from '..'
import { useAuthModal } from '../../context/AuthModalContext'

export const CodyIde: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody')
    return (
        <ContentSection
            parentClassName="!py-0"
            className="flex w-full flex-col items-center gap-x-12 gap-y-6 md:flex-col md:px-8"
        >
            <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-8 py-6 md:gap-x-4">
                <div className="flex h-full flex-col items-center justify-center md:pr-8">
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
                    <Heading size="h4" className="!text-2xl text-gray-200">
                        Neovim
                    </Heading>
                </div>
                <div className="flex items-center  gap-x-4 md:px-6">
                    <img className="" src="/icons/EmacsIcon.svg" alt="Emacs IDE" />{' '}
                    <Heading size="h4" className="!text-2xl text-gray-200">
                        Emacs
                    </Heading>
                    <Badge text="Coming soon" size="small" color="light-gray" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    title="Sign up to get started"
                    className="btn flex rounded-[5px] border border-white bg-white text-center text-transparent"
                    type="button"
                    onClick={handleOpenModal}
                >
                    <span className="cody-btn-text flex items-center gap-2 bg-clip-text">
                        Sign up to get started <FaAngleRight className="text-violet-400" />
                    </span>
                </button>
            </div>
        </ContentSection>
    )
}
