import { FunctionComponent } from 'react'

import Link from 'next/link'

const BlogHome: FunctionComponent = () => (
    <div>
        Home
        <div>
            <Link href="/blog/integration-testing">Post</Link>
        </div>
    </div>
)

export default BlogHome
