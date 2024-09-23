import React, { FunctionComponent } from 'react'

const items = [
    {
        plan: 'Cody for everyone',
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
        rate: 'per user/month',
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
        secondButtonLabel: 'Learn more',
    },
]
const CodyPlan: FunctionComponent = () => (
    <div>
        <h2 className="mb-10 ml-6 text-gray-700">Cody for everyone</h2>
        <div className="flex flex-col flex-wrap gap-[27px] md:flex-row lg:flex-nowrap">
            {items.map(item => (
                <div key={item.plan} className="max-w-[408px] rounded-2xl border border-[#E4E9F4] bg-white px-10 py-16">
                    <div>
                        <h2 className="mb-[13px] !text-gray-700">{item.plan}</h2>
                        <div className="mb-[22px] min-h-[81px] max-w-[328px] text-lg text-gray-700 opacity-70">
                            {item.description}
                        </div>
                        <div className="border-t border-[#E4E9F4] pt-8">
                            <h1 className="pb-1 text-gray-500">{item.price}</h1>
                            <div className="pb-2 text-sm text-gray-500">{item.rate}</div>
                        </div>
                        <button onClick={() => {}} className="btn btn-primary mt-6 w-full text-center" type="button">
                            <span>{item.buttonLabel}</span>
                        </button>
                        {item.secondButtonLabel && (
                            <button
                                className="btn btn-secondary mt-6 w-full -tracking-[0.25px]"
                                type="button"
                                onClick={() => {}}
                            >
                                Learn more
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default CodyPlan
