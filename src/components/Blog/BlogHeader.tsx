import { FunctionComponent } from 'react'

import Link from 'next/link'

import { buttonLocation, buttonStyle } from '../../data/tracking'
import { BlogTypeInfo } from '../../interfaces/posts'
import { Heading } from '../Heading'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {}

export const BlogHeader: FunctionComponent<Props> = ({ title, belowTitle, baseUrl }) => (
    <div className="py-sm">
        <Heading as="h1" size="h2" className="font-bold">
            <Link
                href={baseUrl}
                className="text-black"
                title={title}
                data-button-style={buttonStyle.text}
                data-button-location={buttonLocation.hero}
                data-button-type="cta"
            >
                {title}
            </Link>
        </Heading>

        {belowTitle}
    </div>
)
