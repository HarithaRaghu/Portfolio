import React from 'react'
import Profilepic from '../../assets/images/Haritha.jpg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const About = () => {
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

      </div>

    </>

  )
}
export default About
