import React from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

interface ReadCaseStudyLinkProps {
    parentClassName?: string
    linkClassName: string
    href: string
    linkLabel?: string
    openNewTab?: boolean
}
const ReadCaseStudyLink: React.FC<ReadCaseStudyLinkProps> = ({
    parentClassName,
    linkClassName,
    href,
    openNewTab,
    linkLabel,
}) => (
    <div className={parentClassName}>
        <Link href={href} title="Case study" target={openNewTab ? '_blank' : ''} className={linkClassName}>
            {linkLabel ?? 'Read the case study'}
            <ChevronRightIcon className="link-icon" />
        </Link>
    </div>
)

export default ReadCaseStudyLink
