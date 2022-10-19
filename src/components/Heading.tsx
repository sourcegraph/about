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
        h1: 'tw-font-sans tw-text-6xl md:tw-text-7xl tw-tracking-normal tw-font-semibold',
        h2: 'tw-font-sans tw-text-4xl md:tw-text-5xl tw-tracking-normal tw-font-semibold',
        h3: 'tw-font-sans tw-text-3xl tw-tracking-normal tw-font-normal',
        h4: 'tw-font-sans tw-text-2xl tw-tracking-normal tw-font-semibold',
        h5: 'tw-font-sans tw-text-xl tw-tracking-normal tw-font-semibold',
        h6: 'tw-font-sans tw-text-lg tw-tracking-wide tw-font-semibold tw-uppercase',
    }

    return <Tag className={classNames(className, sizes[size])}>{children}</Tag>
}
