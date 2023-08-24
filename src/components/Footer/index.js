import React from "react";
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer=()=>{
   return(
       <>
       <div className="footer-content">
        <h4 className="copyright">&copy; Haritha Raghu 2023</h4>

      <div className="icons">
               <a 
               href="https://www.linkedin.com/in/haritha-raghu-b03b60146"
               target="_blank"
               rel="noreferrer"
               >
                  <FontAwesomeIcon 
                  icon={faLinkedin}
                  color="#ffff"
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
                  color="#ffff"
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
                  color="#ffff"
                  className="anchor-icon"
                  />
               </a>
            </div>
            </div>
            </>
   )
}
export default Footer

