import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'
import ReadCaseStudyLink from '../ReadCaseStudyLink'

interface CaseStudyBentoProps {
    imgSrc?: string
    description?: ReactNode | string
    href?: string
    items?: { label: string; description: string }[]
    linkLabel?: string
    author?: string
    className?: string
}
const defaultItems = [
    { label: '$276K', description: 'Engineering time saved' },
    { label: '1,200 hours', description: 'Estimated annual time savings' },
]
export const CaseStudyBento: FunctionComponent<CaseStudyBentoProps> = ({
    imgSrc,
    description,
    linkLabel,
    href,
    items = defaultItems,
    author,
    className,
}) => (
    <ContentSection
        parentClassName="!py-0 mx-auto"
        className={classNames(
            'flex flex-col gap-16 rounded-2xl border border-gray-200 bg-white py-16 px-6 text-white md:flex-row md:gap-16 md:px-14',
            className
        )}
    >
        <div className="flex flex-1 flex-col gap-14">
            <img src={imgSrc ?? '/assets/icons/Nine-violet.svg'} className="h-12 w-[114px]" alt="logo" />
            <div>
                {!description && (
                    <h5 className="mb-0 text-gray-700">
                        Nine’s Platform Engineering team saved hundreds of hours and thousands of dollars by using Code
                        Search and Batch Changes for their CI/CD refactor.
                    </h5>
                )}
                {description}
                {author && <div className="mt-6 text-base text-gray-500">{author}</div>}
            </div>
        </div>
        <div className="relative flex flex-1 flex-col gap-12">
            {items.map(item => (
                <div key={item.label} className="flex flex-col gap-2">
                    <h1 className="mb-0 text-gray-700">{item.label}</h1>
                    <h5 className="text-gray-500">{item.description}</h5>
                </div>
            ))}
            <ReadCaseStudyLink
                linkClassName="btn btn-link-dark focus:ring-gray-300 btn-link-icon text-gray-700 p-0 text-left font-semibold md:text-center"
                href={
                    href ?? 'https://sourcegraph.com/case-studies/how-sourcegraph-transformed-nine-development-workflow'
                }
                linkLabel={linkLabel}
            />
        </div>
    </ContentSection>
)
