import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { ContentSection } from '@components'

interface Props {
    title?: string
    description?: string
    demoFormURL?: string
}

export const RequestDemoTrySourcegraph: FunctionComponent<Props> = () => (
    <ContentSection>
        <div className="row d-flex flex-column mx-4 mx-lg-0 align-items-lg-center align-items-left">
            <div className="mb-5 d-flex flex-column">
                <h1 className="text-center font-weight-bold">Get started with Sourcegraph</h1>
                <p className="text-center">Understand, fix, and automate changes across your entire codebase.</p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <Link href="/demo" passHref={true}>
                    <div className="btn btn-primary col-12">Request a demo</div>
                </Link>
                <Link href="/get-started" passHref={true}>
                    <a href="#none" className="mt-4 font-weight-bold">
                        Try Sourcegraph now
                        <ArrowRightIcon className="ml-1" />
                    </a>
                </Link>
            </div>
        </div>
    </ContentSection>
)
