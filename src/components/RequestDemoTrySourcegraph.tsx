import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface Props {
    title?: string
    description?: string
    demoFormURL?: string
}

export const RequestDemoTrySourcegraph: FunctionComponent<Props> = () => (
    <ContentSection className="container col-xl-6 justify-content-center">
        <div className="row d-flex flex-column mx-4 mx-lg-0 py-5 py-md-7 align-items-lg-center align-items-left">
            <div className="mb-5 d-flex flex-column">
                <h1 className="text-center font-weight-bold">Get started with Sourcegraph</h1>
                <p className="text-center">Understand, fix, and automate changes across your entire codebase.</p>
            </div>
            <div className="d-flex flex-column">
                <Link href="/demo" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="Request a demo"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <div className="btn btn-primary">Request a demo</div>
                    </a>
                </Link>
                <Link href="/get-started/self-hosted" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="Try Sourcegraph now"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <p className="mt-4 btn font-weight-bold text-curious-blue">Try Sourcegraph now</p>
                    </a>
                </Link>
            </div>
        </div>
    </ContentSection>
)
