import { FunctionComponent, useEffect } from 'react'

import { useRouter } from 'next/router'

const AppPage: FunctionComponent = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/cody').catch(error => {
            console.error('Error pushing to /cody', error)
        })
    }, [])
    return null
}

export default AppPage
