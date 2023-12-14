import { FunctionComponent } from 'react'

import { ContentSection } from '..'

export const CodyPartners: FunctionComponent = () => (
    <ContentSection parentClassName="!p-0 m-0">
        <div className="m-0 mt-16 flex w-full flex-wrap items-center justify-center gap-[68px] p-0 px-20 pt-8 md:mt-0 md:justify-between md:px-[26px] md:pt-24">
            <img src="/icons/qualtrics-logo.svg" className="block h-[51px] w-[158px]" alt="Qualtrics Logo" />
            <img src="/icons/drip-logo.svg" className="h-[41px] w-[111px]" alt="Drip Logo" />
            <img src="/icons/podium-logo.svg" className="h-[36px] w-[168px]" alt="Podium Logo" />
            <img src="/icons/1password-logo.svg" className="h-[42px] w-[214px]" alt="1Password Logo" />
            <img
                src="/icons/volant-partners-logo.svg"
                className="h-[37.998px] w-[173.002px]"
                alt="Volant Partners Logo"
            />
            <img src="/icons/mintable-logo.svg" className="hidden h-[74px] w-[64px] md:block" alt="mintable Logo" />
        </div>
    </ContentSection>
)
