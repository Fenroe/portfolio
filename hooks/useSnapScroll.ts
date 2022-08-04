import { useState, useRef, useEffect } from 'react'

const useSnapScroll = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0)

  const [loading, setLoading] = useState(false)

  const [lastScrollDate, setLastScrollDate] = useState(0)

  const [swipeStart, setSwipeStart] = useState({
    x: 0,
    y: 0
  })

  const [swipeStartTime, setSwipeStartTime] = useState(0)

  const homeRef = useRef(null)

  const aboutRef = useRef(null)

  const projectsRef = useRef(null)

  const contactRef = useRef(null)

  const scrollToHome = () => {
    if (homeRef) {
      const homeContainer: HTMLElement = homeRef.current!
      homeContainer.scrollIntoView({ behavior: 'smooth' })
      setCurrentSectionIndex(0)
    }
  }

  const scrollToAbout = () => {
    if (aboutRef) {
      const aboutContainer: HTMLElement = aboutRef.current!
      aboutContainer.scrollIntoView({ behavior: 'smooth' })
      setCurrentSectionIndex(1)
    }
  }

  const scrollToProjects = () => {
    if (projectsRef) {
      const projectsContainer: HTMLElement = projectsRef.current!
      projectsContainer.scrollIntoView({ behavior: 'smooth' })
      setCurrentSectionIndex(2)
    }
  }

  const scrollToContact = () => {
    if (contactRef) {
      const contactContainer: HTMLElement = contactRef.current!
      contactContainer.scrollIntoView({ behavior: 'smooth' })
      setCurrentSectionIndex(3)
    }
  }

  useEffect(() => {
    const homeContainer: HTMLElement = homeRef.current!
    const aboutContainer: HTMLElement = aboutRef.current!
    const projectsContainer: HTMLElement = projectsRef.current!
    const contactContainer: HTMLElement = contactRef.current!
    const pageContainers: HTMLElement[] = [homeContainer, aboutContainer, projectsContainer, contactContainer]
  
    const navigationKeys:string[] = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown']

    const threshold:number = 150
    const restraint:number = 100
    const allowedTime:number = 300

    const moveRight = () => {
      if (currentSectionIndex === pageContainers.length - 1) return
      pageContainers[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' })
      setCurrentSectionIndex(currentSectionIndex + 1)
    }
  
    const moveLeft = () => {
      if (currentSectionIndex === 0) return
      pageContainers[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' })
      setCurrentSectionIndex(currentSectionIndex - 1)
    }

    const onWheel = (e:WheelEvent) => {
      console.log('wheel')
      if (window.innerWidth < 500 || window.innerHeight < 600) return
      e.preventDefault()
      if (loading) return
      if (Date.now() - lastScrollDate < 500) return
      setLoading(true)
      if (e.deltaY > 0 || e.deltaX > 0) {
        moveRight()
      } else {
        moveLeft()
      }
      setLastScrollDate(Date.now())
      setLoading(false)
    }

    const onKeyDown = (e:KeyboardEvent) => {
      if (window.innerWidth < 500 || window.innerHeight < 600) return
      if (navigationKeys.includes(e.key)) {
        e.preventDefault()
        if (loading) return
        if (Date.now() - lastScrollDate < 500) return
        setLoading(true)
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          moveRight()
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          moveLeft()
        }
        setLastScrollDate(Date.now())
        setLoading(false)
      }
    }

    const onTouchStart = (e:TouchEvent) => {
      console.log('boop')
      if (Date.now() - lastScrollDate < 500) return
      if (Date.now() - swipeStartTime < 500) return
      if (window.innerWidth < 400 || window.innerHeight < 600) return
      e.preventDefault()
      const touchObj = e.changedTouches[0]
      setSwipeStart({
        x: touchObj.pageX,
        y: touchObj.pageY
      })
      setSwipeStartTime(Date.now())
    }

    const onTouchMove = (e:TouchEvent) => {
      if (window.innerWidth < 500 || window.innerHeight < 600) return
      e.preventDefault()
    }

    const onTouchEnd = (e:TouchEvent) => {
      if (window.innerWidth < 500 || window.innerHeight < 600) return
      e.preventDefault()
      const touchObj = e.changedTouches[0]
      const distanceX = touchObj.pageX - swipeStart.x
      const distanceY = touchObj.pageY - swipeStart.y
      const elapsedTime = Date.now() - swipeStartTime
      if (elapsedTime > allowedTime) return
      if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
        if (distanceX < 0) {
          moveRight()
        } else {
          moveLeft()
        }
        setLastScrollDate(Date.now())
      }
      if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
        if (distanceY < 0) {
          moveRight()
        } else {
          moveLeft()
        }
        setLastScrollDate(Date.now())
      }
    }

    const onResize = () => {
      if (window.innerWidth < 500 || window.innerHeight < 600) return
      pageContainers[currentSectionIndex].scrollIntoView()
    }

    const addListeners = () => {
      console.log('yes')
      document.addEventListener('wheel', onWheel, { passive: false })
      document.addEventListener('keydown', onKeyDown, { passive: false })
      window.addEventListener('resize', onResize, { passive: false })
      document.addEventListener('touchstart', onTouchStart, { passive: false })
      document.addEventListener('touchmove', onTouchMove, { passive: false })
      document.addEventListener('touchend', onTouchEnd, { passive: false })
    }

    const removeListeners = () => {
      document.removeEventListener('wheel', onWheel)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
    }

    addListeners()

    return () => removeListeners()
  }, [currentSectionIndex, lastScrollDate, loading, swipeStart, swipeStartTime])

  return { homeRef, aboutRef, projectsRef, contactRef, scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }
}

export default useSnapScroll
