import React from 'react'
import Profilepic from '../../assets/images/Haritha.jpg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../assets/Resume/Haritha_Resume.pdf'

const About = () => {

  const handleDownload=()=>{
    window.open(Resume,'_blank');
  }

  return (
    <>
      <div id='about'  className="about-container" >
        <div className='heading'>
          <h1>ABOUT ME</h1>
        </div>

        <div className='about-content'>
        <img className="profile-image" src={Profilepic} alt="Haritha" />


          <p>
          Hello, I'm Haritha, a web developer with over 2 years of experience.
          I'm passionate about creating websites and love learning new things to enhance them. 
          I enjoy the challenge of adding new features and making web experiences better. 
          I am currently working at Wipro Technologies as Software Engineer L2. As a web developer, 
          what truly ignites my passion is the vast array of technologies and their pivotal role in the digital landscape. 
          This ever-evolving tech landscape keeps me deeply engaged and fuels my enthusiasm for the work I do.
          </p>
          <div className="icons">
               <a 
               href="https://www.linkedin.com/in/haritha-raghu-b03b60146"
               target="_blank"
               rel="noreferrer"

               >
                  <FontAwesomeIcon 
                  icon={faLinkedin}
                  color="#ffee"
                  className="anchor-icon"
                  />
               </a>
               <a 
               href="https://github.com/HarithaRaghu"
               target="_blank"
               rel="noreferrer"
               >
                  <FontAwesomeIcon 
                  icon={faGithub}
                  color="#ffee"
                  className="anchor-icon"
                  />
               </a>
               <a 
               href="https://instagram.com/haritha_raghu_p?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
               target="_blank"
               rel="noreferrer"
               >
                  <FontAwesomeIcon 
                  icon={faInstagram}
                  color="#ffee"
                  className="anchor-icon"
                  />
               </a>
            </div>
        </div>
        <div className='skills-section'>
          <h1>SKILLS</h1>
           <div className='skill-content'>
            <h4>HTML5</h4>
            <h4>CSS3</h4>
            <h4>Sass</h4>
            <h4>JavaScript</h4>
            <h4>React JS</h4>
            <h4>Java</h4>
            <h4>Bootstrap</h4>
            <h4>GIT</h4>
            <h4>MERN</h4>
            <h4>SQL</h4>
           </div>
            <div className='download-resume'><button className='resume-button' onClick={handleDownload} >Download Resume</button></div>
      </div>
      </div>
     

    </>

  )
}
export default About
