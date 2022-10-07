import { FunctionComponent } from 'react'

import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'
import { BlogTypeInfo } from '@interfaces/posts'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {}

export const BlogHeader: FunctionComponent<Props> = ({ title, belowTitle, baseUrl }) => (
    <div className="tw-py-sm">
        <h1>
            <Link href={baseUrl} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    className="tw-text-black"
                    title={title}
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    {title}
                </a>
            </Link>
        </h1>

        {belowTitle}
    </div>
)
