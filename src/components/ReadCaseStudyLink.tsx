import React from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

interface ReadCaseStudyLinkProps {
    parentClassName?: string
    linkClassName: string
    href: string
}
const ReadCaseStudyLink: React.FC<ReadCaseStudyLinkProps> = ({ parentClassName, linkClassName, href }) => (
        <div className={parentClassName}>
            <Link href={href} title="Case study" className={linkClassName}>
                Read the case study
                <ChevronRightIcon className="link-icon" />
            </Link>
        </div>
    )

export default ReadCaseStudyLink
