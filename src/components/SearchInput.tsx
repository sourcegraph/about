import React, { useState, ChangeEvent } from 'react'

import classNames from 'classnames'
import CloseIcon from 'mdi-react/CloseIcon'
import SearchIcon from 'mdi-react/SearchIcon'

import { debounce } from '../lib/utils'

import { Heading } from './Heading'

interface SearchInputProps {
    onSearch?: (searchTerm: string) => void
    initialValue?: string
    className?: string
    label?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, label, className, initialValue = '' }) => {
    const [searchTerm, setSearchTerm] = useState(initialValue)

    // Debounce the onSearch function.
    const debouncedSearch = debounce((term: string) => {
        onSearch?.(term)
    }, 300)

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value)
        debouncedSearch(event.target.value)
    }

    const handleClearSearch = (): void => {
        setSearchTerm('')
        onSearch?.('')
    }

    return (
        <div className={classNames(className, 'w-full')}>
            <Heading size="h6" className="pb-4 text-gray-700">
                {label}
            </Heading>
            <div className="relative flex w-full items-center">
                <SearchIcon size={20} className="absolute left-3 text-gray-400" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    className="h-[54px] w-full rounded-lg border border-gray-300 py-2 pl-12 pr-[16px] focus:border-2 focus:border-violet-400 focus:shadow-card focus:outline-none"
                />
                {searchTerm && (
                    <button type="button" className="absolute right-2 top-4 text-gray-400" onClick={handleClearSearch}>
                        <CloseIcon size={24} className="mr-1 inline align-top" />
                    </button>
                )}
            </div>
        </div>
    )
}

export { SearchInput }
