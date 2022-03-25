import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

export const useQueryString = (): { queryString: string; navigatedFromProduct: boolean } => {
    const router = useRouter()
    const [navigatedFromProduct, setNavigatedFromProduct] = useState<boolean>(false)
    const [queryString, setQueryString] = useState<string>('')
    useEffect(() => {
        if (!router.isReady) {
            return
        }
        const query = router.query
        if (Object.keys(query).length !== 0) {
            setQueryString(Object.entries(query)[0].join('='))
            setNavigatedFromProduct(query.utm_medium === 'inproduct')
        }
    }, [router.isReady, router.query])

    return {
        queryString,
        navigatedFromProduct,
    }
}
