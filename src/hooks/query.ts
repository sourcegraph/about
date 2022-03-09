import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export const useQueryString = (): { queryString: string } => {
    const router = useRouter()
    const [queryString, setQueryString] = useState<string>('')
    useEffect(() => {
        if (!router.isReady) {
            return
        }
        const query = router.query
        setQueryString(Object.entries(query)[0].join('='))
    }, [router.isReady, router.query])

    return {
        queryString,
    }
}
