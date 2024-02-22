import { useState, useEffect } from 'react'

import { PostIndexItemProps } from '../interfaces/posts'

interface LoadMoreHookObject {
    currentRecords: PostIndexItemProps[]
    page: number
    setPage: (page: number) => void
    setSearchTerm: (searchTerm: string) => void
    searchTerm: string
    filteredRecords: PostIndexItemProps[]
}

export const useLoadMoreAndSearch = (
    initialAllRecords: PostIndexItemProps[],
    initialPage: number,
    initialCurrentRecords: PostIndexItemProps[],
    itemsPerPage: number = 20
): LoadMoreHookObject => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredRecords, setFilteredRecords] = useState<PostIndexItemProps[]>(initialAllRecords)
    const [page, setPage] = useState<number>(initialPage)
    const [currentRecords, setCurrentRecords] = useState<PostIndexItemProps[]>(initialCurrentRecords)

    const filterRecords = (records: PostIndexItemProps[], term: string): PostIndexItemProps[] => {
        if (!term) {
            return records
        }

        const lowerCasedTerm = term.toLocaleLowerCase()
        const matchedByTitle = records.filter(record =>
            record.frontmatter.title?.toLocaleLowerCase().includes(lowerCasedTerm)
        )
        const matchedByDescription = records.filter(
            record =>
                !matchedByTitle.includes(record) && // Exclude the items that already matched by title
                record.frontmatter.description?.toLocaleLowerCase().includes(lowerCasedTerm)
        )

        // List items matched by title, then description.
        return [...matchedByTitle, ...matchedByDescription]
    }

    useEffect(() => {
        setFilteredRecords(filterRecords(initialAllRecords, searchTerm))
    }, [searchTerm, initialAllRecords])

    useEffect(() => {
        const newPage = page * itemsPerPage
        const newRecords = filteredRecords.slice(0, newPage)
        setCurrentRecords(newRecords)
    }, [page, filteredRecords, itemsPerPage])

    return {
        currentRecords,
        page,
        setPage,
        setSearchTerm,
        filteredRecords,
        searchTerm,
    }
}
