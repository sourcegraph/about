import { useState, useEffect } from 'react'

import { PostIndexItemProps } from '../interfaces/posts'

interface LoadMoreHookObject {
    currentRecords: PostIndexItemProps[]
    page: number
    setPage: (page: number) => void
}

export const useLoadMore = (
    initialAllRecords: PostIndexItemProps[],
    initialPage: number,
    initialCurrentRecords: PostIndexItemProps[]
): LoadMoreHookObject => {
    const [allRecords, setAllRecords] = useState<PostIndexItemProps[]>(initialAllRecords)
    const [page, setPage] = useState<number>(initialPage)
    const [currentRecords, setCurrentRecords] = useState<PostIndexItemProps[]>(initialCurrentRecords)

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
