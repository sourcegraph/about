import { FunctionComponent } from 'react'

import Link from 'next/link'

import { BlogTypeInfo } from '@interfaces/posts'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {}

export const BlogHeader: FunctionComponent<Props> = ({ title, belowTitle, baseUrl }) => (
    <div>
        <h1 className="display-4 font-weight-bold mt-3">
            <Link href={baseUrl} passHref={true}>
                <a className="text-body" href="#none">{title}</a>
            </Link>
        </h1>

        {belowTitle}
    </div>
)
