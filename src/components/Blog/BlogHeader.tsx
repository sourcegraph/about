import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

import { BlogTypeInfo } from '../../interfaces/posts'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {
    /**
     * Whether this is being shown on the list/index page or a single post page.
     */
    variant: 'list' | 'post'
    className?: string
}

export const BlogHeader: FunctionComponent<Props> = ({ title, belowTitle, baseUrl, variant, className }) =>
    variant === 'list' ? (
        <div className={classNames(className, 'py-6')}>
            <h3 className="inline-block text-6xl font-semibold">
                <Link href={baseUrl} className="!font-grotesk text-gray-600 hover:underline">
                    {title}
                </Link>
            </h3>

            {belowTitle && <div className="mt-5">{belowTitle}</div>}
        </div>
    ) : (
        <nav className={classNames(className, 'my-6')}>
            <Link
                href={baseUrl}
                className="!font-grotesk group inline-flex items-center text-sm text-gray-300 hover:text-gray-600"
            >
                <ArrowLeftIcon className="inline h-3 transition-transform group-hover:-translate-x-1" /> {title}
            </Link>
        </nav>
    )
