import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

import { BlogTypeInfo } from '../../interfaces/posts'
import { Heading } from '../Heading'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {
    /**
     * Whether this is being shown on the list/index page or a single post page.
     */
    variant: 'list' | 'post'
    className?: string
}

export const BlogHeader: FunctionComponent<Props> = ({ title, belowTitle, baseUrl, variant, className }) =>
    variant === 'list' ? (
        <div className={classNames(className, 'py-sm')}>
            <Heading as="h1" size="h3" className="inline-block !font-normal">
                <Link href={baseUrl} className="bg-violet-100 px-4 py-2 !font-grotesk text-violet-600 hover:underline">
                    {title}
                </Link>
            </Heading>

            {belowTitle && <div className="mt-4">{belowTitle}</div>}
        </div>
    ) : (
        <nav className={classNames(className, 'my-sm')}>
            <Link
                href={baseUrl}
                className="inline-flex items-center bg-violet-100 py-1 pl-2 pr-3 !font-grotesk text-violet-600  hover:underline"
            >
                <ArrowLeftIcon className="inline h-5" /> {title}
            </Link>
        </nav>
    )
