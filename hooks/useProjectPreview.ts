import { useState } from 'react'

const useProjectPreview = () => {
  const [projectIndex, setProjectIndex] = useState(0)

  const [projectImageIndex, setProjectImageIndex] = useState(0)

  const projects = typeof document !== 'undefined' ? document.querySelectorAll('.project') : null

  const getProjectImages = () => {
    if (!projects) return
    const projectImages = projects[projectIndex].querySelectorAll('.project-image')
    return projectImages
  }

  const projectScrollLeft = () => {
    if (!projects) return
    setProjectImageIndex(0)
    if (projectIndex === 0) {
      projects[projects.length - 1].scrollIntoView({ behavior: 'smooth' })
      setProjectIndex(projects.length - 1)
    } else {
      projects[projectIndex - 1].scrollIntoView({ behavior: 'smooth' })
      setProjectIndex(projectIndex - 1)
    }
  }

  const projectScrollRight = () => {
    if (!projects) return
    setProjectImageIndex(0)
    if (projectIndex === projects.length - 1) {
      projects[0].scrollIntoView({ behavior: 'smooth' })
      setProjectIndex(0)
    } else {
      projects[projectIndex + 1].scrollIntoView({ behavior: 'smooth' })
      setProjectIndex(projectIndex + 1)
    }
  }

  const imageScrollLeft = () => {
    if (!projects) return
    const projectImages = getProjectImages()
    if (!projectImages) return
    if (projectImageIndex === 0) {
      projectImages[projectImages.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      setProjectImageIndex(projectImages.length - 1)
    } else {
      projectImages[projectImageIndex - 1].scrollIntoView({ behavior: 'smooth' })
      setProjectImageIndex(projectImageIndex - 1)
    }
  }

  const imageScrollRight = () => {
    if (!projects) return
    const projectImages = getProjectImages()
    if (!projectImages) return
    if (projectImageIndex === projectImages.length - 1) {
      projectImages[0].scrollIntoView({ behavior: 'smooth' })
      setProjectImageIndex(0)
    } else {
      projectImages[projectImageIndex + 1].scrollIntoView({ behavior: 'smooth' })
      setProjectImageIndex(projectImageIndex + 1)
    }
  }

  return {
    projectScrollLeft,
    projectScrollRight,
    imageScrollLeft,
    imageScrollRight
  }
}

export default useProjectPreview
 