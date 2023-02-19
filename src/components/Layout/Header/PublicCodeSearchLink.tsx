import React from 'react'

import classNames from 'classnames'
import SearchIcon from 'mdi-react/SearchIcon'

/**
 * A link in the header that looks like a search box that takes the user to Sourcegraph.com public
 * code search.
 */
export const PublicCodeSearchLink: React.FunctionComponent<{ dark: boolean }> = ({ dark }) => (
    <a
        href="https://sourcegraph.com/search"
        className={classNames(
            'btn flex items-center whitespace-nowrap rounded border py-1 pl-2 pr-3 text-sm !font-normal',
            dark
                ? 'border-white/30 bg-white/5 text-white/60 hover:border-white hover:bg-white/25 hover:text-white'
                : 'border-black/50 bg-white/25 text-black/60 hover:border-black hover:bg-white hover:text-black'
        )}
    >
        <SearchIcon className="mr-1 h-[18px] w-[18px]" /> <span className="lg:hidden">Public code</span>
        <span className="hidden lg:inline">Public code search</span>
    </a>
)
