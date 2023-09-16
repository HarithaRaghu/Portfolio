import './index.scss'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import htmlLogo from "../../assets/images/Home/html.png"
import cssLogo from "../../assets/images/Home/CSS.png"
import jsLogo from "../../assets/images/Home/JavaScript.png"
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
                variants={buttonVariants}
                scale='scale'
                transition='transition' 
               >
                <Link to="contact" smooth={true} duration={10} >
                  Contact Me
                </Link>
               </motion.button>
               
               
          </motion.h1>
            <div className='techstack-img'>
            <img className='html' alt='htmllogo' src={htmlLogo}></img>
            <img className='css' alt='csslogo' src={cssLogo}></img>
            <img className='js' alt='jslogo' src={jsLogo}></img>
            </div>
        </div>
      );
    
    
};
    


export default Home;