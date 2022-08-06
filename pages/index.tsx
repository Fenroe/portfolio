import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import { useSnapScroll, useProjectPreview } from '../hooks'
import { aboutText } from '../data'
import {
  Bootstrap, Express, Graphql, Javascript, MongoDB,
  Next, Node, Postgresql, React as ReactIcon,
  Sass, Tailwind, Typescript
} from "../svg"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Home: NextPage = () => {
  const { homeRef, aboutRef, projectsRef, contactRef, scrollToProjects } = useSnapScroll()

  const { imageScrollLeft, imageScrollRight } = useProjectPreview()

  useEffect(() => {
    document.querySelectorAll('.home-heading').forEach((heading) => heading.classList.add('home-heading-loaded'))
    document.querySelector('.home-button')?.classList.add('home-button-loaded')
  }, [])

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Full stack developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section ref={homeRef} className="section home-section">
          <div className="landing-content">
            <div className="home-heading-wrapper">
              <h1 className="home-heading">Hello.</h1>
              <h1 className="home-heading">My name&apos;s Dave.</h1>
              <h1 className="home-heading">I&apos;m a <span className="home-heading-span">full stack developer.</span></h1>
            </div>
            <button className="home-button" onClick={scrollToProjects}>See my work</button>
          </div>
        </section>
        <section ref={aboutRef} className="section about-section">
            <h1 className="about-heading">About me</h1>
            <div className="about-content">
              <div className="about-text-wrapper">
                <picture>
                  <img className="about-picture" src="/me-placeholder.png" alt="me" />
                </picture>
                <p className="about-text">{aboutText}</p>
              </div>
              <div className="about-skills-wrapper">
                <div className="about-skill">
                  <Javascript />
                  <span>Javascript</span>
                </div>
                <div className="about-skill">
                  <Typescript />
                  <span>Typescript</span>
                </div>
                <div className="about-skill">
                  <ReactIcon />
                  <span>React</span>
                </div>
                <div className="about-skill">
                  <Next />
                  <span>Next</span>
                </div>
                <div className="about-skill">
                  <Sass />
                  <span>Sass</span>
                </div>
                <div className="about-skill">
                  <Bootstrap />
                  <span>Bootstrap</span>
                </div>
                <div className="about-skill">
                  <Tailwind />
                  <span>Tailwind</span>
                </div>
                <div className="about-skill">
                  <Node />
                  <span>Node</span>
                </div>
                <div className="about-skill">
                  <Express />
                  <span>Express</span>
                </div>
                <div className="about-skill">
                  <MongoDB />
                  <span>MongoDB</span>
                </div>
                <div className="about-skill">
                  <Postgresql />
                  <span>PostgreSQL</span>
                </div>
                <div className="about-skill">
                  <Graphql />
                  <span>GraphQL</span>
                </div>
              </div>
            </div>
        </section>
        <section ref={projectsRef} className="section projects-section">
          <h1 className="projects-heading">See my work</h1>
          <div className="project-wrapper">
            <div className="project">
              <div className="project-image-window">
                <div className="project-image-wrapper">
                  <picture>
                    <img className="project-image" src="/snow.png" alt="Project"/>
                  </picture>
                  <picture>
                    <img className="project-image" src="/star-gazing.jpg" alt="Project"/>
                  </picture>
                  <picture>
                    <img className="project-image" src="/home-background.jpg" alt="Project"/>
                  </picture>
                </div>
                <button className="button-left" onClick={imageScrollLeft}>
                  <BsChevronLeft />
                </button>
                <button className="button-right" onClick={imageScrollRight}>
                  <BsChevronRight />
                </button>
              </div>
              <h2 className="project-name">Project</h2>
              <p className="project-text">This project uses many things to make something cool.</p>
              <a className="project-link" href="google.com">See it live</a>
              <a className="project-link" href="google.com">See the code</a>
            </div>
          </div>
        </section>
        <section ref={contactRef} className="section contact-section">
          <h1 className="contact-heading">Get in touch</h1>
        </section>
      </main>
    </div>
  )
}

export default Home
