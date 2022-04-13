import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ContentSection } from '@components'

interface Props {
    title?: string
    description?: string
    demoFormURL?: string
}

export const RequestDemoTrySourcegraph: FunctionComponent<Props> = () => (
    <div className="bg-light-gray-4-3">
        <ContentSection>
            <div className="bg-light-gray-4-3 row d-flex flex-column mx-4 mx-lg-0 py-7 align-items-lg-center align-items-left">
                <div className="mb-5 d-flex flex-column">
                    <h1 className="text-center font-weight-bold">Get started with Sourcegraph</h1>
                    <p className="text-center">Understand, fix, and automate changes across your entire codebase.</p>
                </div>
                <div className="d-flex flex-column">
                    <Link href="/demo" passHref={true}>
                        <div className="btn btn-primary">Request a demo</div>
                    </Link>
                    <Link href="/get-started" passHref={true}>
                        <p className="mt-4 btn font-weight-bold text-curious-blue">Try Sourcegraph now</p>
                    </Link>
                </div>
            </div>
        </ContentSection>
    </div>
)
