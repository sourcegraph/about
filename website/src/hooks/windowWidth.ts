import { useLayoutEffect, useState } from 'react';

export const useWindowWidth = () => {
  let [windowWidth, setWindowWidth] = useState<number>(0)
  
  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth)

    const resizeListener = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return windowWidth
}
