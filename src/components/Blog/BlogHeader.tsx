import { FunctionComponent } from 'react'

import Link from 'next/link'

import { buttonLocation, buttonStyle } from '../../data/tracking'
import { BlogTypeInfo } from '../../interfaces/posts'
import { Heading } from '../Heading'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {}

export const BlogHeader: FunctionComponent<Props> = ({ title, belowTitle, baseUrl }) => (
    <div className="py-sm">
        <Heading as="h1" size="h3" className="inline-block !font-normal">
            <Link
                href={baseUrl}
                className="bg-violet-100 px-4 py-2 text-violet-600"
                title={title}
                data-button-style={buttonStyle.text}
                data-button-location={buttonLocation.hero}
                data-button-type="cta"
            >
                {title}
            </Link>
        </Heading>

        {belowTitle && <div className="mt-4">{belowTitle}</div>}
    </div>
)
