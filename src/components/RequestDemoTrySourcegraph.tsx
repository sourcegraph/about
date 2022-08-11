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
    <ContentSection className="container col-xl-6 tw-justify-center">
        <div className="mx-4 row tw-flex tw-flex-col mx-lg-0 align-items-md-center align-items-left">
            <div className="mb-5 tw-flex tw-flex-col">
                <h2 className="text-center tw-mb-6">Get started with Sourcegraph</h2>
                <p className="text-center">Understand, fix, and automate changes across your entire codebase.</p>
            </div>
            <div className="tw-flex tw-flex-col">
                <Link href="/demo" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="Request a demo"
                        className="btn btn-primary"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Request a demo
                    </a>
                </Link>
                <Link href="/get-started/self-hosted" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="Try Sourcegraph now"
                        className="mt-4"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Try Sourcegraph now
                        <ArrowRightIcon className="ml-2 tw-inline" />
                    </a>
                </Link>
            </div>
        </div>
    </ContentSection>
)
