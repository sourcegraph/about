import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface Props {
    demoFormURL?: string
    className?: string
}

export const TrySourcegraph: FunctionComponent<Props> = ({ demoFormURL = '/demo', className = '' }) => (
    <ContentSection className={className}>
        <div className="row">
            <div className="col-md-6 pr-md-5">
                <h3 className="display-4 font-weight-bold">Try Sourcegraph for free today</h3>
                <p>
                    You'll be searching your own code in 10 minutes. You can run it self-hosted (all of your code stays
                    local and secure).
                </p>
            </div>
            <div className="col-md-6 pt-3 align-self-center text-center">
                {demoFormURL && (
                    <Link href={demoFormURL} passHref={true}>
                        <a
                            href="#none"
                            className="btn btn-outline-gray-5 mx-2 mb-3"
                            title="Schedule a demo"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                            >
                            Schedule a demo
                        </a>
                    </Link>
                )}
                <Link href="/get-started/self-hosted" passHref={true}>
                    <a
                        href="#none"
                        className="btn btn-primary mx-2 mb-3"
                        title="Try Sourcegraph now"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        Try Sourcegraph now
                    </a>
                </Link>
            </div>
        </div>
    </ContentSection>
)
