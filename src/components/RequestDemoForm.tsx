import { FunctionComponent } from 'react'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface Props {
    title?: string
    description?: string
    demoFormURL?: string
}

export const RequestDemoForm: FunctionComponent<Props> = ({
    title = 'See Sourcegraph in action.',
    description = 'Learn how companies of all sizes and in all industries use Sourcegraph to solve big code problems.',
    demoFormURL = '/demo',
}) => (
    <ContentSection color="black" className="col-sm-12 col-md-9 col-lg-7">
        <div className="container text-center pt-6">
            <h3 className="display-3 font-weight-bold">{title}</h3>
            <p>{description}</p>
            <a
                href={demoFormURL}
                className="btn btn-primary mx-2 mb-3"
                title="Request a demo"
                data-button-style={buttonStyle.primary}
                data-button-location={buttonLocation.bodyDemo}
                data-button-type="cta"
            >
                Schedule a demo
            </a>
        </div>
    </ContentSection>
)
