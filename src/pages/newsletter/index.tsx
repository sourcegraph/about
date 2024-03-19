import React, { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading, Badge, Layout, HubSpotForm } from '../../components'

import styles from '../../styles/CustomHubspotForm.module.scss'

const meta = {
    title: 'Newsletter',
}

const Newsletter: FunctionComponent = () => (
    <Layout meta={meta}>
        <div className="mx-auto max-w-7xl px-sm md:px-6">
            <div className="flex flex-col items-start gap-md py-3xl  lg:flex-row lg:gap-sm lg:py-5xl">
                <div className="flex-start flex flex-1 flex-col gap-sm lg:gap-xs">
                    <Badge
                        text="From the source"
                        size="large"
                        className="w-fit !rounded-none border border-violet-500 px-3 !py-1 !text-lg !font-medium !leading-[27px] !tracking-[-0.75px]"
                        color="violet"
                    />
                    <Heading size="h2" className="color-[#0F111A] m-0 normal-case !leading-[40px] !tracking-[-1px]">
                        Subscribe for the latest code AI industry news and product updates
                    </Heading>
                    <p className="color-[#0F111A] m-0 text-lg leading-[27px] !tracking-[-0.25px]">
                        Get our monthly newsletter with news around the industry along with Sourcegraph product and blog
                        updates.
                    </p>
                </div>
                <div
                    className={classNames(
                        'newsletter-form flex w-full max-w-[628px] flex-col items-baseline gap-4 rounded-lg border border-gray-200 bg-gray-50 p-lg [&>div]:w-full',
                        styles.newsletter
                    )}
                >
                    <HubSpotForm
                        formId="6b6eaaf8-c6ec-410c-9a2b-2e93761cb453"
                        inlineMessage="Thank you! You're signed up"
                        overrideFormShorten={true}
                    />
                </div>
            </div>
        </div>
    </Layout>
)

export default Newsletter
