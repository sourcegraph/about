import { FunctionComponent, ReactNode } from 'react'

import Link from 'next/link'

interface LinkProps {
    href: string
    alt: string
}

interface LinkWrapperProps {
    link: LinkProps
    children: ReactNode
}

export const LinkWrapper: FunctionComponent<LinkWrapperProps> = ({ link, children }) => (
    <>
        {(link.href.includes('http') ? (
            <a href={link.href} title={link.alt} target="_blank" rel="nofollow noreferrer">
                {children}
            </a>
        ) : (
            <Link href={link.href} title={link.alt}>
                {children}
            </Link>
        ))}
    </>
   
)
