import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { buttonLocation, buttonStyle } from '@data'

const Banner: FunctionComponent = () => (
    <div className="sg-bg-gradient-starship-small tw-px-sm tw-pb-sm lg:tw-pb-0 xl:tw-max-h-5xl">
        <div className="tw-max-w-screen-lg tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-justify-around tw-items-center">
            <div className="tw-h-[80px]">
                <img src="/sourcegraph/sourcegraph-4-starship.svg" alt="Sourcegraph 4.0 Starship" draggable={false} />
            </div>

            <div className="tw-flex tw-flex-col md:tw-flex-row tw-text-center tw-items-center">
                <p className="tw-text-white tw-text-lg tw-mb-xs md:tw-mb-0 md:tw-mr-sm md:tw-text-2xl lg:tw-mr-2xl">
                    Sourcegraph 4.0 launches September 27, 2022
                </p>
                <Link href="/sourcegraph-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                        className="tw-text-blue-300"
                    >
                        See what's coming
                        <ArrowRightIcon className="tw-inline tw-ml-3" />
                    </a>
                </Link>
            </div>
        </div>
    </div>
)

export default Banner
