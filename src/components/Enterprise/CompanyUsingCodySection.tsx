import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, InfiniteCarousel } from '..'

export const carouselImages = [
    { src: '/enterprise/cern-logo.svg', className: 'h-[37px] w-[125px] mx-[21px]' },
    { src: '/enterprise/mercado-libre-logo.svg', className: 'h-[51px] w-[121px] mx-[21px]' },
    { src: '/enterprise/SoFi-logo.svg', className: 'h-[49px] w-[169px] mx-[21px]' },
    { src: '/enterprise/qualtrics-logo.svg', className: 'h-[55px] w-[172px] mx-[21px]' },
    { src: '/enterprise/leidos-logo.svg', className: 'h-[54px] w-[225px] mx-[21px]' },
    { src: '/home/carousel/palo-alto-logo.svg', className: ' h-[48px] w-[258px] mx-[21px]' },
]

export const CompanyUsingCodySection: FunctionComponent = () => (
    <ContentSection
        className="relative mx-auto mt-0 flex flex-col items-center gap-12 py-16 text-center md:mt-[-135px] md:pt-[282px] md:pb-[96px]"
        parentClassName="!py-0 md:px-[80px]"
    >
        <div className="z-10 flex flex-col items-center gap-6  text-center md:w-[615px]">
            <h2>Used by 6 of the 10 largest software companies in the world</h2>
            <Link
                href="https://sourcegraph.com/case-studies"
                title="Cody"
                className="btn btn-link btn-link-icon p-0 text-center font-semibold !-tracking-[0.25px]"
            >
                Read customer stories
                <ChevronRightIcon className="link-icon" />
            </Link>
        </div>
            <InfiniteCarousel images={carouselImages} />
    </ContentSection>
)
