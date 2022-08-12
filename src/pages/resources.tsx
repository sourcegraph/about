import { FunctionComponent } from 'react'

import { Layout, Filters } from '@components'

const Resources: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Resources',
            description: 'Sourcegraph workshops, case studies, whitepapers, blog posts, and recorded events',
        }}
        hero={
            // TODO: Modify Hero component to use bg gradients and replace this
            <div className="sg-bg-gradient-saturn tw-px-sm">
                <div className="tw-max-w-screen-xl tw-mx-auto tw-py-24">
                    <h1 className="tw-mb-6">Resources</h1>
                    <h3 className="tw-max-w-[800px]">
                        Browse resources tailored to the use cases you care about, and learn how you can use Sourcegraph
                        to understand, fix, and automate across your codebase.
                    </h3>
                </div>
            </div>
        }
    >
        <Filters />
    </Layout>
)

export default Resources
