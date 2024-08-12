import { useState, useEffect } from 'react'

import { PostIndexItemProps } from '../interfaces/posts'

interface LoadMoreHookObject {
    currentRecords: PostIndexItemProps[]
    page: number
    setPage: (page: number) => void
    setSearchTerm: (searchTerm: string) => void
    setSelectedTags: (tags: string[]) => void
    setSelectedVersions: (versions: string[]) => void
    searchTerm: string
    selectedTags: string[]
    selectedVersions: string[]
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
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [selectedVersions, setSelectedVersions] = useState<string[]>([])

    const filterRecords = (
        records: PostIndexItemProps[],
        term: string,
        tags: string[],
        versions: string[]
    ): PostIndexItemProps[] => {
        let filtered = records

        // Filter by search term
        if (term) {
            const lowerCasedTerm = term.toLocaleLowerCase()
            const matchedByTitle = filtered.filter(record =>
                record.frontmatter.title?.toLocaleLowerCase().includes(lowerCasedTerm)
            )
            const matchedByDescription = filtered.filter(
                record =>
                    !matchedByTitle.includes(record) && // Exclude the items that already matched by title
                    record.frontmatter.description?.toLocaleLowerCase().includes(lowerCasedTerm)
            )

            filtered = [...matchedByTitle, ...matchedByDescription]
        }

        if (tags.length > 0) {
            filtered = filtered.filter(record =>
                record.frontmatter.tags?.some(tag => tags.includes(tag))
            )
        }

        if (versions.length > 0) {
            filtered = filtered.filter(record =>
                record.frontmatter.version?.some(version => versions.includes(version))
            )
        }

        return filtered
    }

    useEffect(() => {
        setFilteredRecords(filterRecords(initialAllRecords, searchTerm, selectedTags, selectedVersions))
    }, [searchTerm, initialAllRecords, selectedTags, selectedVersions])

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
        setSelectedTags,
        setSelectedVersions,
        filteredRecords,
        searchTerm,
        selectedTags,
        selectedVersions
    }
}
