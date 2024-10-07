import React, { FunctionComponent } from 'react'

import { useAuthModal } from '../../context/AuthModalContext'
import { captureCustomEventWithPageData } from '../../lib/utils'

const items = [
    {
        plan: 'Cody Free',
        description: 'Free forever. Best for hobbyists and developers just getting started with code AI.',
        price: 'Free',
        rate: 'No credit card required',
        href: '#',
        buttonLabel: 'Create an account',
    },
    {
        plan: 'Cody Pro',
        description: 'For pro developers who want access to the best models with no limits.',
        price: '$9',
        rate: 'per month',
        href: '#',
        buttonLabel: 'Buy now',
    },
    {
        plan: 'Cody Enterprise',
        description: 'For companies looking for security, scalability, and context spanning their entire codebase.',
        price: '$19',
        rate: 'per user/month',
        href: '#',
        buttonLabel: 'Start a trial',
    },
]
const CodyPlan: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (eventName: string, plan: 'free' | 'pro', initiateOpenModal: boolean): void => {
        captureCustomEventWithPageData('get_cody_onpage_click')
        if (initiateOpenModal) {
            openModal(eventName, plan, true)
        }
    }

    return (
        <div>
            <h2 className="mb-10 ml-6 text-gray-700">Choose the perfect plan for you or your team</h2>
            <div className="flex flex-col flex-wrap gap-[27px] md:flex-row lg:flex-nowrap">
                {items.map(item => (
                    <div
                        key={item.plan}
                        className="max-w-[408px] rounded-2xl border border-[#E4E9F4] bg-white px-10 py-16"
                    >
                        <div>
                            <h2 className="mb-[13px] !text-gray-700">{item.plan}</h2>
                            <div className="mb-[22px] min-h-[81px] max-w-[328px] text-lg text-gray-700 opacity-70">
                                {item.description}
                            </div>
                            <div className="border-t border-[#E4E9F4] pt-8">
                                <h1 className="pb-1 text-gray-500">{item.price}</h1>
                                <div className="pb-2 text-sm text-gray-500">{item.rate}</div>
                            </div>
                            <button
                                onClick={() => {
                                    if (item.plan === 'Cody Free') {
                                        handleOpenModal('cody', 'free', true)
                                    } else if (item.plan === 'Cody Pro') {
                                        handleOpenModal('cody', 'pro', true)
                                    } else {
                                        window.location.href = '/enterprise-trial-offer'
                                    }
                                }}
                                className="btn btn-primary mt-6 w-full text-center"
                                type="button"
                            >
                                <span>{item.buttonLabel}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CodyPlan
