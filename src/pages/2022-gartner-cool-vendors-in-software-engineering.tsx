import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout, Hero } from '../components'

export const Report: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Cool Vendors in Software Engineering: Enhancing Developer Productivity',
            description:
                'Get free access to Gartner’s 2022 Cool Vendor Report to learn how Sourcegraph and other innovative tools help engineers and engineering leaders boost developer productivity while mitigating security risks.',
        }}
        hero={
            <Hero
                className="enterprise-form-bg"
                displayUnderNav={true}
                titleClassName="text-white text-4xl md:text-7xl"
                variant="purple"
                title="Cool Vendors in Software Engineering: Enhancing Developer Productivity"
                leftColumn={
                    <img
                        src="/external-logos/gartner-cool-vendor-2022.png"
                        alt="Gartner logo"
                        className="max-w-[170px]"
                    />
                }
                mergeColumns={true}
            />
        }
        headerColorTheme="purple"
    >
        <GatedResourceLayout
            title="Cool Vendors in Software Engineering: Enhancing Developer Productivity"
            formLabel="Download the report"
            resource="https://www.gartner.com/reprints/?id=1-2D6RVJEE&ct=230410&st=sb"
            description={
                <section className="order-2 md:order-1">
                    <h3 className="pb-md font-normal">
                        Get complimentary access to 2022 Gartner® Cool Vendors™ report to learn how we believe
                        Sourcegraph and other innovative tools help engineers and engineering leaders boost developer
                        productivity while mitigating security risks.
                    </h3>

                    <p className="text-gray-400">
                        TThe GARTNER COOL VENDOR badge and Gartner are registered trademarks and service mark of
                        Gartner, Inc. and/or its affiliates and is used herein with permission. All rights reserved.
                        Gartner does not endorse any vendor, product or service depicted in its research publications
                        and does not advise technology users to select only those vendors with the highest ratings or
                        other designation. Gartner research publications consist of the opinions of Gartner’s Research &
                        Advisory organization and should not be construed as statements of fact. Gartner disclaims all
                        warranties, expressed or implied, with respect to this research, including any warranties of
                        merchantability or fitness for a particular purpose.
                    </p>
                    <p className="pb-xxs text-gray-400">
                        Gartner, Cool Vendors in Software Engineering: Enhancing Developer Productivity, Cool Vendors in
                        Software Engineering: Enhancing Developer Productivity, 16th May 2022.
                    </p>
                </section>
            }
        />
    </Layout>
)

export default Report
