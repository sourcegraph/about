import { useEffect } from 'react'

export const useCerosScript = () => {
    useEffect(() => {
        const cerosScrip = '//view.ceros.com/scroll-proxy.min.js'
        const script = document.createElement('script')
        script.src = cerosScrip
        document.head.append(script)

        return () => {
            script?.remove()
        }
    }, [])
}
