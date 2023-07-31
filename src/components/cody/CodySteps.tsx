import { FunctionComponent } from 'react'

import Link from 'next/link'

import { EventName } from '../../hooks/eventLogger'
import { Badge } from '../Badge'
import { CodyFeatureCard } from '../CodyFeatureCard'
import { Heading } from '../Heading'

interface CodeSnippetProps {
    handleOpenModal: (description: string) => void
    handleOnClick: (eventName: string, type: string) => void
}

export const CodySteps: FunctionComponent<CodeSnippetProps> = ({ handleOpenModal, handleOnClick }) => (
    <div className="flex w-full flex-wrap justify-center md:flex-nowrap">
        <div className="flex flex-col">
            <CodyFeatureCard
                plainOnMobile={false}
                icon="/sourcegraph-mark.png"
                subHeading="Step 1: Sign up"
                description="Sign up for a Sourcegraph.com account."
                descriptionClassName="!text-lg"
                onClick={() => handleOpenModal('Sign up for a Sourcegraph.com account')}
            />
            <img className="my-2 mx-auto" src="/cody/down-arrow.svg" width={16} height={45} alt="Down arrow" />
            <CodyFeatureCard
                plainOnMobile={false}
                icon="/cody/cody-color-icon.png"
                subHeading="Step 2: Install Cody app"
                description="The app is a free, lightweight, native desktop version of Sourcegraph that connects your local code to our AI coding assistant, Cody."
                descriptionClassName="!text-lg"
                onClick={() => window.location.replace('https://sourcegraph.com/get-cody')}
            />
            <img
                className="my-2 mx-auto md:hidden"
                src="/cody/down-arrow.svg"
                width={16}
                height={45}
                alt="Down arrow"
            />
        </div>

        <img
            className="mx-2 mt-[168px] hidden md:block"
            src="/cody/right-arrow.svg"
            width={61.5}
            height={104}
            alt="Right arrow"
        />

        <div className="sg-cody-feature-card flex w-full	max-w-[509px] flex-col gap-y-6 rounded-lg p-6">
            <Heading size="h4" className="text-white">
                Step 3: Install IDE extension
            </Heading>
            <Link
                href="vscode:extension/sourcegraph.cody-ai"
                className="cody-platforms-bg-gradient hover:sg-bg-hover-ide-extension-button flex w-full items-center justify-center gap-4 rounded-lg border border-white/[.04] py-4 px-6 text-white"
                onClick={() => handleOnClick(EventName.DOWNLOAD_IDE, 'VS Code')}
            >
                <img src="/icons/vscode.svg" height={34} width={34} alt="VScode Icon" />
                VS Code extension
            </Link>{' '}
            <Link
                href="https://plugins.jetbrains.com/plugin/9682-sourcegraph"
                target="_blank"
                className="cody-platforms-bg-gradient hover:sg-bg-hover-ide-extension-button flex w-full items-center justify-center gap-4 rounded-lg border border-white/[.04] py-4 px-6 text-white"
                onClick={() => handleOnClick(EventName.DOWNLOAD_IDE, 'IntelliJ')}
            >
                <img src="/icons/IntelliJ.svg" height={34} width={34} alt="IntelliJ Icon" />
                IntelliJ extension
            </Link>
            <Link
                href="https://info.sourcegraph.com/waitlist"
                target="_blank"
                className="flex w-full items-center justify-center gap-4 rounded-lg border border-dashed border-white/[.15] py-4 px-6 text-white"
            >
                <img src="/icons/Neovim-logo.svg" height={34} width={34} alt="Neovim Icon" />
                Neovim
                <Badge size="small" text="Coming soon!" color="light-gray" />
            </Link>
            <Link
                href="https://info.sourcegraph.com/waitlist"
                target="_blank"
                className="flex w-full items-center justify-center gap-4 rounded-lg border border-dashed border-white/[.15] py-4 px-6 text-white"
            >
                <img src="/icons/EmacsIcon.svg" height={34} width={34} alt="Emacs Icon" />
                Emacs
                <Badge size="small" text="Coming soon!" color="light-gray" />
            </Link>
        </div>
    </div>
)
