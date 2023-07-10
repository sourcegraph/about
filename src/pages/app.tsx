import { FunctionComponent, useEffect } from 'react'

import { useRouter } from 'next/router'

const AppPage: FunctionComponent = () => {
  const router = useRouter()

  useEffect(() => {
    void router.push('/cody')
  }, [])

  return null
}

export default AppPage
