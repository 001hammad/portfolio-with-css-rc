import React from 'react';
import Image from 'next/image';
import aboutpic from '../../../../public/about-pic.jpg';

const About = () => {
  return (
    <div>
      <div className='aboutpic-div'>
      <Image src={aboutpic} alt="About-Pic" className='aboutpic'/>
      </div>
    



        <div>
        <h2 className='intro'>My Introduction</h2>
        <p className='intro'>
          Hello, I&apos;m Hammad Hafeez, a driven and passionate individual from
          Karachi, Pakistan. With a keen interest in technology, I&apos;m currently
          pursuing my IT course from Governor House Sindh, while simultaneously
          exploring my entrepreneurial spirit.
        </p>
        <p className='intro'>
          As a self-taught frontend developer, I&apos;ve acquired expertise in HTML,
          CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS. My dedication
          and hard work have enabled me to successfully develop various projects
          that have garnered appreciation from my teachers and peers.
        </p>
        <p className='intro'>
          I&apos;m eager to continue learning and expanding my skill set, staying
          up-to-date with the latest advancements in the tech industry. I&apos;m
          excited to collaborate and contribute to innovative projects that make
          a meaningful impact.
        </p><hr className='hr'/>
        </div>

  {/* // ------------------------------OUR SERVICES SECTION-----------------------  */}

<div>
        <h2 className='introo'>
        As a skilled frontend developer, I offer the following services:

        </h2>
        <p className='introo'>
        1. Web Development: Building responsive, user-friendly, and visually appealing websites using HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.

        </p>
        <p className='introo'>
        2. Frontend Development: Creating interactive and engaging frontend experiences for web applications, including UI/UX design, prototyping, and testing.

        </p>
        <p className='introo'>
        3. Mobile-First Design: Designing and developing mobile-friendly websites and applications that provide seamless user experiences across various devices.</p>
     </div>
</div>

)
}
      


export default About
