import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'

const darkThemeIcons = [
    { id: 'Qualtrics Logo', src: '/qualtrics-logo.svg', className: 'block h-[51px] w-[158px]' },
    { id: 'Drip Logo', src: '/drip-logo.svg', className: 'h-[41px] w-[111px]' },
    { id: 'Podium Logo', src: '/podium-logo.svg', className: 'h-[36px] w-[168px]' },
    { id: '1Password Logo', src: '/1password-logo.svg', className: 'h-[42px] w-[214px]' },
    { id: 'Volant Partners Logo', src: '/volant-partners-logo.svg', className: 'h-[37.998px] w-[173.002px]' },
    { id: 'mintable Logo', src: '/mintable-logo.svg', className: 'hidden h-[74px] w-[64px] md:block' },
]

const lightThemeIcons = [
    { id: '1Password Logo', src: '/1password-light.svg', className: 'block h-[40px] w-[208px] order-5 md:order-1' },
    {
        id: 'Volant Partners Logo',
        src: '/volant-partners-light.svg',
        className: 'h-[60.2px] w-[275px] md:h-[37.84px] md:w-[173px] order-4 md:order-2',
    },
    { id: 'Qualtrics Logo', src: '/qualtrics-light.svg', className: 'h-[54.91px] w-[171.47px] order-1 md:order-3' },
    { id: 'Drip Logo', src: '/drip-light.svg', className: 'h-[60px] w-[164px] order-2 md:order-4' },
    { id: 'Podium Logo', src: '/podium-light.svg', className: 'h-[37px] w-[173px] order-3 md:order-5' },
    {
        id: 'mintable Logo',
        src: '/mintable-light.svg',
        className: 'hidden h-[74px] w-[60.5px] md:block md:order-6',
    },
]

export const CodyPartners: FunctionComponent<{ isLight?: boolean }> = ({ isLight = false }) => (
    <ContentSection parentClassName="!p-0 m-0">
        <div
            className={classNames(
                'm-0 mt-16 flex w-full flex-wrap items-center justify-center p-0 pt-8 md:mt-0 md:pt-24',
                {
                    'gap-[24px] gap-y-[68px] py-[32px] px-[24px] md:justify-center md:gap-x-[48px] md:gap-x-[48px] md:py-0 md:px-[0px]':
                        isLight,
                    'gap-[68px] px-20 md:justify-between md:px-[26px]': !isLight,
                }
            )}
        >
            {(isLight ? lightThemeIcons : darkThemeIcons).map(icon => (
                <img key={icon.id} src={`/icons${icon.src}`} className={classNames(icon.className)} alt={icon.id} />
            ))}
        </div>
    </ContentSection>
)
