import React from 'react'
import Profilepic from '../../assets/images/Haritha.jpg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <>

      <div id='about'className="about-container" >
        <div className='heading'>
          <h1>ABOUT ME</h1>
        </div>

        <div className='about-content'>
        <img className="profile-image" src={Profilepic} alt="Haritha" />


          <p>
           
            I am a highly skilled solution-focused Web developer with two years 
            of experience in IT industry. Committed to writing clean Efficient 
            and maintainable code. Sound knowledge in Data structures and Algorithms.
            Strong technical, analytical and interpersonal skills and a strong interest in exploring new technologies and their applications.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
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
