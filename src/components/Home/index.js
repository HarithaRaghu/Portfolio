import './index.scss'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3,faJava,faJs,faReact,faGit,faBootstrap} from '@fortawesome/free-brands-svg-icons';

const aboutVariants={
  initial:{ 
           opacity: 0, 
            x: '-100vh' 
          },
  animate:{
         opacity: 1,
          x: 0, 
        },
  transition:{   
         type: 'spring', 
         bounce: 0.3 }
}
const buttonVariants={
  animate:{
         scale: 1.7 
        },
  transition:{ 
           delay: 1,
          yoyo: Infinity 
        }
}


const Home=()=>{
  
    return (
         
        <div className='text-zone'>
           
          <motion.h1 
             id='home'
            variants={aboutVariants}
            initial="initial"
            animate="animate"
            transition='transition'
          >
          
            Hi ! <br/><span className='animated-text'>I'm Haritha</span>
            <br/>
            Web Developer
            <br/>
            <p><br/>Front End Developer who writes clean, elegant and efficient code</p>
              
              
              <motion.button
              className='contact-button'
                variants={buttonVariants}
                scale='scale'
                transition='transition' 
               >
                <Link to="contact"  smooth={true} duration={10} >
                  Contact Me
                </Link>
               </motion.button>
               
               
          </motion.h1>
            <div className='techstack-icon'>
            
             <FontAwesomeIcon 
                  icon={faHtml5}
                  color=" #F06529"
                  className="anchor-icon"
                  />
                  <FontAwesomeIcon 
                  icon={faCss3}
                  color="#2965f1"
                  className="anchor-icon"
                  />
                  <FontAwesomeIcon 
                  icon={faJs}
                  color=" #F0DB4F"
                  className="anchor-icon"
                  />
                  <FontAwesomeIcon 
                  icon={faGit}
                  color="#F1502F"
                  className="anchor-icon"
                  /> <br/><br/>
                  <FontAwesomeIcon 
                  icon={faJava}
                  color="#5382A1"
                  className="anchor-icon"
                  />
                  <FontAwesomeIcon 
                  icon={faReact}
                  color="#61DBFB"
                  className="anchor-icon"
                  />
                  <FontAwesomeIcon 
                  icon={faBootstrap}
                  color="#563d7c"
                  className="anchor-icon"
                  />
            </div>
        </div>
      );
    
    
};
    


export default Home;