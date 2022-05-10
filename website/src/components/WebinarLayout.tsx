import * as React from 'react'
import { ContentSection } from './content/ContentSection'
import { CaseStudyRequestDemoForm } from './content/CaseStudyPage'

interface Props {
    customer?: Customer
    title: string
    subtitle: string
    description: React.ReactNode
    children?: React.ReactNode
}

interface Customer {
    name: string
    logo: string
    href: string
}

export const WebinarLayout: React.FunctionComponent<Props> = ({
    title,
    subtitle,
    customer,
    description,
    children,
}) => (
    <>
        <section className="container py-6 d-flex justify-content-center align-items-center">
            {customer && (
                <div className="col-lg-6 text-center">
                    <img
                        className="mr-5"
                        width="75"
                        src="/sourcegraph/sourcegraph-mark.svg"
                        alt="Sourcegraph mark"
                        />
                    <img
                        className="ml-5"
                        height="30"
                        src={customer.logo}
                        alt={`${customer.name} logo`}
                    />
                </div>
            )}
            <div className="col-lg-6">
                <h2 className="display-3 font-weight-bold mb-4">{title}</h2>
                <h3 className="font-weight-light">{subtitle}</h3>
            </div>
        </section>

        <section className="bg-white py-6">
            <ContentSection className="d-flex">
                {description}

                <div className="col-6">
                    <h3 className="font-weight-bold">Watch the on-demand webinar</h3>
                </div>
            </ContentSection>

            {children}
        </section>

        <CaseStudyRequestDemoForm />
    </>
)

export default WebinarLayout
