import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { captureCustomEventWithPageData } from '../lib/utils'

interface HomePageCtaProps {
    handleOpenModal: (pagePosition: string) => void
    isVariantStyle?: boolean
}
const HomePageCta: FunctionComponent<HomePageCtaProps> = ({ handleOpenModal, isVariantStyle }) => (
    <div className={classNames('mx-auto', { 'mt-10 max-w-6xl': !isVariantStyle })}>
        <div
            className={classNames('grid grid-cols-1 gap-6 md:mx-0 md:grid-cols-2', {
                'mx-6 py-16 md:py-24': !isVariantStyle,
            })}
        >
            <div className="hover:cta-free-cody relative overflow-hidden rounded-2xl border-1 border-gray-200 bg-white">
                <div className="cta-top-border absolute left-0 right-0 top-0 rounded-t-2xl" />
                <div className=" px-14 py-16">
                    <h2 className="mb-4 text-gray-700">Get started with Cody</h2>
                    <p className="mb-0 text-lg text-gray-500">
                        Use Cody for free in your IDE, no credit card required.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <button
                            type="button"
                            className={classNames('btn btn-primary w-full md:w-auto')}
                            title="free cody"
                            onClick={() => handleOpenModal('bottom')}
                        >
                            Download Cody for free
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={classNames(
                    'rounded-2xl px-14 py-16 text-white',
                    {
                        '!bg-violet-700': isVariantStyle,
                    },
                    { 'cta-home': !isVariantStyle }
                )}
            >
                <h2 className="mb-[10px]">Cody Enterprise</h2>
                <p className="mb-0 text-lg text-[#FFFFFFCC]">
                    Cody Enterprise provides additional security, scalability, and control for your organization.
                    Unlimited usage and context search for your entire codebase.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
                    <Link
                        href="/contact/request-info"
                        title="Get Cody for Enterprise"
                        className="btn btn-secondary-dark w-full px-6 py-2 text-center md:w-auto"
                        onClick={() => captureCustomEventWithPageData('contact_sales_onpage_click', 'bottom')}
                    >
                        Book a demo
                    </Link>
                    <Link
                        href="/pricing"
                        title="See pricing"
                        className="btn btn-link-dark md:btn-link-icon w-full rounded-[5px] px-6 text-center md:w-auto"
                    >
                        See pricing
                        <ChevronRightIcon className="link-icon hidden md:block" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default HomePageCta
