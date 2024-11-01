import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import heropic from '../../../public/hero-pic.jpg'
import heropic2 from '../../../public/heropic-1.jpg'
import project1 from '../../../public/style-sole-pic.jpg'
import project2 from '../../../public/portfolio-pic.jpeg'
import project3 from '../../../public/todo-pic.jpg'
const Hero = () => {
  return (
    <main>
        <div className="intro-img-container">
        <div className="intro-container">
          <h1 className="intro-heading">Hi I ,am Hammad Hafeez</h1>
          <h1 className="intro-heading">Frontend Developer</h1>
          <p className="intro-para">
            Hello, I&apos;m Hammad Hafeez, a frontend developer with expertise
            in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS. I
            craft responsive, user-friendly websites and applications, with a
            passion for problem-solving and collaboration. Always learning, I
            stay updated with industry trends to deliver high-quality solutions!
          </p>
          <Link href='https://resume-1-lime.vercel.app/' target='_blank'>
          <button className="hire-btn">Hire Me</button></Link>
    
          <button className="talk-btn">Lets Talk</button>
        </div>

        <div className="img-container">
          <Image src={heropic} alt='hero-pic' className='hero-pic'/>
        </div>
      </div>

      {/* <!-- -------------------------------------     HERO SECTION  -     2--------------------------------------- --> */}

      <div className="intro-img-container">
        <div className="intro-container">
          <h1 className="aboutme-heading">About Me</h1>
          <p className="intro-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            aperiam possimus exercitationem, saepe sint quod nisi harum at,
            maiores, ut quaerat similique sunt praesentium dignissimos officia
          </p>
          <hr />
          <div className="main-skills-container">
            <div className="skills">
              <h4>Skills</h4>
              <p className="skills-text">
                HTML <br />
                CSS <br />
                TypeScript <br />
                Next.Js <br />
                TailwindCSS
              </p>
            </div>
            <div className="experience">
              <h4>Experience</h4>
              <p className="skills-text">
                2 Years <br />
                OF <br />
                Experience <br />
                In This <br />
                Languages
              </p>
            </div>
            <div className="education">
              <h4>Education</h4>
              <p className="skills-text"><b>Inter:</b> In Science (Ongoing)</p>
              <p className="skills-text"><b>Matric:</b> In Science</p>
              <p className="skills-text"><b>Programming:</b> (Ongoing)</p>
            </div>
          </div>
        </div>

        <div className="img-container">
          <Image src={heropic2} alt='Hero-picture' className='hero-pic-2'/>
        </div>
      </div>

      {/* <!-- -------------------------EXPLORE PROJECT SECTION------------------------------ --> */}

      <div id="project">
        <div className="explore-project-heading">
          <h2>Explore My Project</h2>
        </div>
        <div className="img-container">
          <div className="img-cont">
            <Link href='https://style-sole-web.vercel.app/' target='_blank'><Image src={project1} alt='style sole website' className='explore-img'/></Link>
            <h3 className="project-names">Style Sole Website</h3>
          </div>
          <div className="img-cont">
            <Link href='/' target='_blank'><Image src={project3} alt='ToDolist App' className='explore-img'/></Link>
            <h3 className="project-names">ToDo List Application</h3>
          </div>
          <div className="img-cont">
            <Link href='https://my-portfolio-seven-gamma-88.vercel.app/' target='_blank'><Image src={project2} alt='portfolio' className='exploree-img'/></Link>
            <h3 className="project-names">Personal Portfolio Using Tailwind</h3>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero;
