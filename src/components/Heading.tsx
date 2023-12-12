import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface Heading {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: ReactNode | string
    className?: string
}

/**
 * This component renders our typography headings as defined in our DLS. This
 * allows us to render specifically sized headings with semantic and valid
 * ordering. Heading elements should always be in sequentially descending order
 * for accessibility and valid page structure.
 *
 * @param props - component props
 * @param props.as - the type of heading to render regardless of size. This is important
 * to avoid skipping heading levels for valid ordering.
 * @param props.size - the size of heading
 * @param props.children - the children of the heading
 * @param props.className - the className of the heading
 */
export const Heading: FunctionComponent<Heading> = ({ as, size, children, className }) => {
    /**
     * By default, the tag size will be used for the tag if you're not skipping
     * levels based on specific designs. Otherwise, we render the tag using
     * what's passed in the "as" prop.
     */
    const Tag = as ?? size

    const sizes = {
        h1: 'font-sans text-6xl md:text-7xl tracking-normal md:tracking-tightest font-semibold',
        h2: 'font-sans text-4xl md:text-5xl tracking-normal md:tracking-tighter font-semibold',
        h3: 'font-sf text-2xl tracking-tight font-normal',
        h4: 'font-sans text-2xl tracking-normal font-semibold',
        h5: 'font-sf text-xl tracking-tight font-semibold',
        h6: 'font-sans text-lg tracking-wide font-semibold uppercase',
    }

    return <Tag className={classNames(className, sizes[size])}>{children}</Tag>
}
