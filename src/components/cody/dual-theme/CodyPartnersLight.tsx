import { FunctionComponent } from 'react'

import { ContentSection } from '../..'

export const CodyPartnersLight: FunctionComponent = () => (
    <ContentSection parentClassName="!px-0 !py-0 !mx-0" className="max-w-full">
        <div className="m-0 mt-16 flex w-full flex-wrap items-center justify-center gap-x-[24px] gap-y-[68px] p-0 px-[24px] pt-[34.55px] pb-[32px] md:mt-[95px] md:w-full md:justify-start md:gap-x-[48px] md:gap-y-[48px] md:px-0 md:py-[44px]">
            <img
                src="/icons/1password-light.svg"
                className="order-5 h-[40px] w-[208.24px] md:order-1"
                alt="1password Logo"
            />
            <img
                src="/icons/volant-partners-light.svg"
                className="order-4 h-[60.2px] w-[275px] md:order-2"
                alt="Volant Partners Logo"
            />
            <img
                src="/icons/databricks-light.svg"
                className="hidden h-[30px] w-[205px] md:order-3 md:block"
                alt="Databricks Logo"
            />
            <img src="/icons/qualtrics-light.svg" className="h-[54.9px] w-[171px] md:order-4" alt="Qualtrics Logo" />
            <img src="/icons/drip-light.svg" className="h-[60px] w-[164px] md:order-5" alt="Drip Logo" />
            <img src="/icons/podium-light.svg" className="order-3 h-[37px] w-[173px] md:order-6" alt="mintable Logo" />
        </div>
    </ContentSection>
)
