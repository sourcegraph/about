import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { buttonLocation, buttonStyle } from '@data'

const Banner: FunctionComponent = () => (
    <div className="sg-bg-gradient-starship-small tw-p-sm xl:tw-h-[80px]">
        <div className="tw-max-w-screen-xl tw-mx-auto tw-text-center tw-flex tw-flex-col lg:tw-flex-row tw-justify-center tw-items-center">
            <img
                src="/sourcegraph/sourcegraph-4.0-white.svg"
                alt="Sourcegraph 4.0 Starship"
                className="tw-my-auto tw-h-[35px]"
                draggable={false}
            />
            <p className="tw-text-white tw-text-lg tw-my-xs md:tw-my-0 md:tw-mx-sm md:tw-text-2xl lg:tw-mx-2xl">
                The code intelligence platform for modern development teams
            </p>
            <Link href="/sourcegraph-4">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    data-button-style={buttonStyle.textWithArrow}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                    className="tw-text-blue-300"
                >
                    See what's new
                    <ArrowRightIcon className="tw-inline tw-ml-3" />
                </a>
            </Link>
        </div>
    </div>
)

export default Banner
