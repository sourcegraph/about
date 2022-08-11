import { FunctionComponent } from 'react'

import { Layout, GatedResourceLayout, Hero } from '@components'
import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'

export const Report: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    return (
        <Layout
            meta={{
                title: 'Cool Vendors in Software Engineering: Enhancing Developer Productivity',
                description:
                    'Get free access to Gartner’s 2022 Cool Vendor Report to learn how Sourcegraph and other innovative tools help engineers and engineering leaders boost developer productivity while mitigating security risks.',
            }}
            hero={
                <Hero
                    variant="venusCode"
                    title="Cool Vendors in Software Engineering: Enhancing Developer Productivity"
                    leftCol={
                        <div className="col-12 tw-px-0 tw-pb-xxs lg:tw-pb-0">
                            <img
                                height={isMdOrDown ? '170' : '150'}
                                src="/external-logos/gartner-cool-vendor-2022.png"
                                alt="Gartner logo"
                            />
                        </div>
                    }
                />
            }
        >
            <GatedResourceLayout
                title="Cool Vendors in Software Engineering: Enhancing Developer Productivity"
                formLabel="Access the report"
                resource="https://www.gartner.com/doc/reprints?id=1-2A44UTV8&ct=220524&st=sb"
                description={
                    <section className="col-md-6 col-12 pr-lg-6">
                        <h3 className="pb-5 font-weight-normal">
                            Get complimentary access to the 2022 Gartner® Cool Vendors™ report.
                        </h3>
                        <p className="tw-pb-xxs">
                            Learn how we believe Sourcegraph and other innovative tools help engineers and engineering
                            leaders boost developer productivity while mitigating security risks.
                        </p>
                        <p className="text-muted">
                            The GARTNER COOL VENDOR badge and Gartner are registered trademarks and service mark of
                            Gartner, Inc. and/or its affiliates and is used herein with permission. All rights reserved.
                            Gartner does not endorse any vendor, product or service depicted in its research
                            publications and does not advise technology users to select only those vendors with the
                            highest ratings or other designation. Gartner research publications consist of the opinions
                            of Gartner’s Research & Advisory organization and should not be construed as statements of
                            fact. Gartner disclaims all warranties, expressed or implied, with respect to this research,
                            including any warranties of merchantability or fitness for a particular purpose.
                        </p>
                        <p className="tw-pb-xxs text-muted">
                            Gartner, Cool Vendors in Software Engineering: Enhancing Developer Productivity, Cool
                            Vendors in Software Engineering: Enhancing Developer Productivity, 16th May 2022.
                        </p>
                    </section>
                }
            />
        </Layout>
    )
}

export default Report
