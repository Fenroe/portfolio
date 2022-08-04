import { useRef, useEffect } from 'react'

const useHorizontalScroll = () => {
  const elRef = useRef(null)
  useEffect(() => {
    const el: HTMLElement = elRef.current!
    let loading: boolean = false
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (loading === true) return
        if (e.deltaY === 0) return
        loading = true
        if (el.clientWidth > 992) {
          e.preventDefault()
          el.scrollTo({
            left: el.scrollLeft + (e.deltaY * 2)
          })
        }
        loading = false
      }
      el.addEventListener('wheel', onWheel)

      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])

  return elRef
}

export default useHorizontalScroll
