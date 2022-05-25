import { useState, useEffect } from 'react'

import { PostIndexItem } from '@interfaces/posts'

interface LoadMoreHookObject {
    currentRecords: PostIndexItem[]
    page: number
    setPage: (page: number) => void
}

const CONTENT_PARENT_DIRECTORY = './content/'

export const useLoadMore = (
    initialAllRecords: PostIndexItem[],
    initialPage: number,
    initialCurrentRecords: PostIndexItem[]
): LoadMoreHookObject => {
    const [allRecords, setAllRecords] = useState<PostIndexItem[]>(initialAllRecords)
    const [page, setPage] = useState<number>(initialPage)
    const [currentRecords, setCurrentRecords] = useState<PostIndexItem[]>(initialCurrentRecords)

    useEffect(() => {
        const newPage = page * 20
        const newRecords = allRecords.slice(0, newPage)
        setCurrentRecords(newRecords)
    }, [page, allRecords])

    return {
        currentRecords,
        page,
        setPage,
    }
}
