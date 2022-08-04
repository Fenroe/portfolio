import { useState } from 'react'

const Skill = ( { iconClass, iconSpan, iconSVG }: { iconClass: string, iconSpan: string, iconSVG: JSX.Element }) => {
  const [currentClass, setCurrentClass] = useState(iconClass)

  const setClass = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 500) {
        console.log(window.innerWidth)
        return `${iconClass} colored`
      } else {
        return currentClass
      }
    }
    return currentClass
  }
  const expandClass = () => {
    setCurrentClass(`${iconClass} colored`)
  }

  const resetClass = () => {
    setCurrentClass(iconClass)
  }

  return (
    <div className="about-skill" onMouseEnter={expandClass} onMouseLeave={resetClass}>
      {iconSVG}
      <span>{iconSpan}</span>
    </div>
  )
}

export default Skill
