import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
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
        <div className="mb-5 d-flex flex-column">
            <h1 className="text-center font-weight-bold">Get started with Sourcegraph</h1>
            <p className="text-center">Understand, fix, and automate changes across your entire codebase.</p>
        </div>
        <div className="d-flex flex-column">
            <Link href="/demo" passHref={true}>
                <div className="btn btn-primary max-w-300 mx-auto">Schedule a demo</div>
            </Link>
            <Link href="/get-started/self-hosted" passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    className="mt-4 mx-auto"
                    data-button-style={buttonStyle.textWithArrow}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Try Sourcegraph now
                    <ArrowRightIcon className="ml-2" />
                </a>
            </Link>
        </div>
    </ContentSection>
)
