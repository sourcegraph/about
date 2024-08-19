import Link from 'next/link'

import { FrontMatter } from '../../interfaces/posts'
import { formatDate } from '../../util'

export const BylineAndDate: React.FunctionComponent<{
    authors: FrontMatter['authors']
    publishDate: FrontMatter['publishDate']
}> = ({ authors, publishDate }) => (
    <p className="flex items-center gap-x-3 text-sm text-gray-400">
        {authors?.length && (
            <span className="mr-1">
                {authors.map((a, index) => (
                    <span key={a.name} className="font-semibold text-gray-500">
                        {a.url ? (
                            <Link href={a.url} className="font-semibold text-gray-500">
                                {a.name}
                            </Link>
                        ) : (
                            a.name
                        )}
                        {index === authors.length - 1 ? ' ' : ', '}
                    </span>
                ))}
            </span>
        )}

        {publishDate && <PublishDate date={publishDate} />}
    </p>
)

const PublishDate: React.FunctionComponent<{ date: string }> = ({ date }) => (
    <time className="whitespace-nowrap" dateTime={date}>
        {formatDate(date)}
    </time>
)
