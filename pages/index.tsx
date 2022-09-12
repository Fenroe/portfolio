import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import style from '../styles/app.module.scss'

const Home: NextPage = () => {
  const [theme, setTheme] = useState('light')

  const [showGalleryModal, setShowGalleryModal] = useState(false)

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Full stack developer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
      </Head>

      <section className={theme === 'light' ? style.landing : style.landingDark}>
        <div className={theme === 'light' ? style.landingText : style.landingTextDark}>
          <h1>David Slade</h1>
          <h1>Full stack developer</h1>
        </div>
      </section>
      <nav className={theme === 'light' ? style.navbar : style.navbarDark}>
        <a href="#">
          <picture className={theme === 'light' ? style.navLogo : style.navLogoDark}>
            <img className={theme === 'light' ? style.logo : style.logoDark} src={theme === 'light' ? "/logo.png" : '/logo-dark.svg'} alt="logo"/>
          </picture>
        </a>
        <div className={theme === 'light' ? style.navLinks : style.navLinksDark}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          {theme === 'light'
          ? 
          <button onClick={() => setTheme('dark')}>
            <MdDarkMode />
            <span>Theme</span>
          </button>
          : 
          <button onClick={() => setTheme('light')}>
            <MdLightMode />
            <span>Theme</span>
          </button>
          }

        </div>
      </nav>
      <section id="about" className={theme === 'light' ? style.about : style.aboutDark}>
        <div className={theme === 'light' ? style.sectionHeading : style.sectionHeadingDark}>
          <hr />
          <div>
            <h1>About me</h1>
          </div>
        </div>
        <div className={theme === 'light' ? style.aboutContent : style.aboutContentDark}>
          <div className={theme === 'light' ? style.aboutMe : style.aboutMeDark}>
            <p>Hi, my name&apos;s David (or Dave if you prefer) and I&apos;m a self-taught web developer.  </p>
            <p>Although I only began studying software development as an adult I realised almost immediately that programming was my calling in life. What I enjoy most about problem-solving is the inherent creativity involved in it, and throughout my journey I have strived to never solve a problem the same way twice.</p>
            <p>As a result, I have become adept at a variety of front-end and back-end technologies and have tackled challenges from a range of different perspectives. Today I am an open-minded programmer with a rich understanding of every aspect of the development process and a deep love of learning.</p>
            <p>With my diverse skillset I can make your vision a reality.</p>
          </div>
          <div className={theme === 'light' ? style.aboutSkills : style.aboutSkillsDark}>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-nextjs-original colored"></i>
              <span>Next</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-firebase-plain colored"></i>
              <span>Firebase</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-git-plain colored"></i>
              <span>Git</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-express-original colored"></i>
              <span>Express</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-tailwindcss-plain colored"></i>
              <span>Tailwind</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-bootstrap-plain colored"></i>
              <span>Bootstrap</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-javascript-plain colored"></i>
              <span>Javascript</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-typescript-plain colored"></i>
              <span>Typescript</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-sass-original colored"></i>
              <span>Sass</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-linux-plain colored"></i> 
              <span>Linux</span>
            </div>
            <div className={theme === 'light' ? style.iconWrapper : style.iconWrapperDark}>
              <i className="devicon-nodejs-plain colored"></i>
              <span>Node</span>
            </div> 
          </div>
        </div>
      </section>
      <section id="projects" className={theme === 'light' ? style.projects : style.projectsDark}>
      <div className={theme === 'light' ? style.sectionHeading : style.sectionHeadingDark}>
          <hr />
          <div>
            <h1>See my work</h1>
          </div>
        </div>
        <div className={theme === 'light' ? style.projectWrapper : style.projectWrapperDark}>
          <h2 className={theme === 'light' ? style.projectHeading : style.projectHeadingDark}>Snapshot</h2>
          <div className={theme === 'light' ? style.projectContent : style.projectContentDark}>
            <div className={theme === 'light' ? style.projectPicturesWrapper : style.projectPicturesWrapperDark}>
              <picture className={theme === 'light' ? style.projectPicture : style.projectPictureDark}>
                <img src="/snapshot/snapshot-home.png" alt="project" />
              </picture>
              <picture className={theme === 'light' ? style.projectPicture : style.projectPictureDark}>
                <img src="/snapshot/snapshot-dark.png" alt="project" />
              </picture>
              <picture className={theme === 'light' ? style.projectPicture : style.projectPictureDark}>
                <img src="/snapshot/snapshot-login.png" alt="project" />
              </picture>
            </div>
            <div className={theme === 'light' ? style.projectText : style.projectTextDark}>
              <h3>What I made</h3>
              <p>Snapshot is a social media app inspired by Twitter and Instagram. Visitors can create an account and upload pictures to share with their friends. The front-end was made with React and styled with Tailwind, while Firebase is used to manage user authentication and data.</p>
              <h3>What I learned</h3>
              <p>Working on this project taught me how to manage larger scale applications. Not only was it necessary to learn how to integrate different systems and technologies to achieve the desired result, but it was important to organise the codebase in such a way that features could continue to be implemented in the future. </p>
              <h3>What I would change</h3>
              <p>If I were to restart this project I would more carefully consider my backend solution. While Firebase is a convenient solution that allows for realtime updates, a relational database such as MySQL or PostgreSQL would allow for a more straightforward implementation of features that rely on many-to-many relationships. I would also start with a focus on accessibility instead of working towards that from the end.</p>
              <button className={theme === 'light' ? style.siteBtn : style.siteBtnDark}>See it live</button>
              <button className={theme === 'light' ? style.siteBtn : style.siteBtnDark}>Check the code</button>
            </div>
          </div>
        </div>
        <div className={theme === 'light' ? style.projectWrapper : style.projectWrapperDark}>
          <h2 className={theme === 'light' ? style.projectHeading : style.projectHeadingDark}>Coming to Terms</h2>
          <div className={theme === 'light' ? style.projectContent : style.projectContentDark}>
            <div className={theme === 'light' ? style.projectPicturesWrapper : style.projectPicturesWrapperDark}>
              <picture className={theme === 'light' ? style.projectPicture : style.projectPictureDark}>
                <img src="/snapshot/snapshot-home.png" alt="project" />
              </picture>
              <picture className={theme === 'light' ? style.projectPicture : style.projectPictureDark}>
                <img src="/snapshot/snapshot-dark.png" alt="project" />
              </picture>
              <picture className={theme === 'light' ? style.projectPicture : style.projectPictureDark}>
                <img src="/snapshot/snapshot-login.png" alt="project" />
              </picture>
            </div>
            <div className={theme === 'light' ? style.projectText : style.projectTextDark}>
              <h3>What I made</h3>
              <p>Coming to Terms is a full stack MERN blog website. Visitors can create an account, read blog posts and leave comments on them. The front-end was made with React and was styled with Boostrap, while the back-end runs on Express and utilises a MongoDB database.</p>
              <h3>What I learned</h3>
              <p>This project involved working with a front-end and back-end codebase simultaneously, which reinforced the importance of keeping the source code organised and taking the right approach for each. My main focus was to prevent the codebases from being dependent on each other so that future changes would cause as little disruption as possible. </p>
              <h3>What I would change</h3>
              <p>In retrospect I realise that it&apos;s often better to develop features to suit the app and not the other way around. A blog website would be better suited with an admin dashboard or something of that nature instead of a forum-style user account system, and the addition of profile-customisation options are largely wasted on such a platform.</p>
              <button className={theme === 'light' ? style.siteBtn : style.siteBtnDark}>See it live</button>
              <button className={theme === 'light' ? style.siteBtn : style.siteBtnDark}>Check the code</button>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className={theme === 'light' ? style.contact : style.contactDark}>
      <div className={theme === 'light' ? style.sectionHeading : style.sectionHeadingDark}>
          <hr />
          <div>
            <h1>Get in touch</h1>
          </div>
        </div>
        <form className={theme === 'light' ? style.contactForm : style.contactFormDark} action="">
        <p>I would love to hear from you! If you have any comments or questions please don&apos;t hesitate to send me a message.</p>
          <div className={theme === 'light' ? style.formControl : style.formControlDark}>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Name" />
          </div>
          <div className={theme === 'light' ? style.formControl : style.formControlDark}>
            <label htmlFor="email">Email</label>
            <input name="email" id="email" type="text" placeholder="Email"/>
          </div>
          <div className={theme === 'light' ? style.formControl : style.formControlDark}>
            <label htmlFor="message">Message</label>
            <textarea rows={5} name="message" id="message" placeholder="Message"></textarea>
          </div>
          <button className={theme === 'light' ? style.siteBtn : style.siteBtnDark}>Send</button>
        </form>
      </section>
      <footer className={theme === 'light' ? style.footer : style.footerDark}>
        <a href="https://twitter.com/fenfullstack">
          <FaTwitter className={theme === 'light' ? style.footerIcon : style.footerIconDark} />
        </a>
        <a href="https://github.com/Fenroe">
          <FaGithub className={theme === 'light' ? style.footerIcon : style.footerIconDark} />
        </a>
        <a href="https://www.linkedin.com/in/david-slade-b0a90618a/">
          <FaLinkedin className={theme === 'light' ? style.footerIcon : style.footerIconDark} />
        </a>     
      </footer>
    </div>
  )
}

export default Home
