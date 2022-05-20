import { FunctionComponent, ReactNode } from 'react'

import { ContentSection } from '@components'
import { useHubSpot, HubSpotForm } from '@hooks'

interface Form {
    formId: string
    onFormSubmitted?: () => void
}

interface Props {
    title: string
    subtitle: string
    description: ReactNode
    form: Form
    formLabel?: string
    children?: ReactNode
}

export const GuideLayout: FunctionComponent<Props> = ({ title, subtitle, description, form, formLabel, children }) => {
    const hubSpotConfig: HubSpotForm = {
        portalId: '2762526',
        formId: form.formId,
        targetId: 'form',
        formInstanceId: form.formId,
    }
    if (form.onFormSubmitted) {
        hubSpotConfig.onFormSubmitted = form.onFormSubmitted
    }
    useHubSpot(hubSpotConfig)

    return (
        <>
            <section className="bg-gradient-venus-saturated">
                <div className="container py-6 d-flex flex-column flex-lg-row justify-content-around align-items-center">
                    <div className="col-12">
                        <h1 className="display-2 font-weight-bold mb-4">{title}</h1>
                        <h4 className="display-3 max-w-750">{subtitle}</h4>
                    </div>
                </div>
            </section>

            <section className="bg-white pt-6 pb-8">
                <ContentSection className="d-flex flex-column-reverse flex-md-row">
                    {description}

                    <div className="col-md-6 col-12 pb-md-0 pb-6">
                        {formLabel && <h2 className="font-weight-bold">{formLabel}</h2>}
                        <div className="border-saturn border border-3 shadow-sm py-4 px-4 mt-3">
                            <div id="form" />
                        </div>
                    </div>
                </ContentSection>

                {children}
            </section>
        </>
    )
}

export default GuideLayout
