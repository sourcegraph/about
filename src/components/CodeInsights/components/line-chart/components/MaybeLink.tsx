import { AnchorHTMLAttributes, FunctionComponent, ReactElement } from 'react'

import Link from 'next/link'

interface MaybeLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string
}

/** Wraps the children in a link if to (link href) prop is passed. */
export const MaybeLink: FunctionComponent<MaybeLinkProps> = ({ children, to, ...props }) =>
    to ? (
        <Link {...props} href={to}>
            {children}
        </Link>
    ) : (
        (children as ReactElement)
    )
