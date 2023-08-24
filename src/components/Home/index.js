import './index.scss'
import ReactTyped from "react-typed";
import { motion } from 'framer-motion';
import Sparkle from '../Sparkle';
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
            variants={aboutVariants}
            initial="initial"
            animate="animate"
            transition='transition'
          >
          
            Hi ! <br/><span className='animated-text'>I'm Haritha</span>
            <br/>
            Web Developer
            <br/>
            <p><br/><ReactTyped strings={["Front End Developer who writes clean, elegant and efficient code"]} typeSpeed={50} loop /></p>
           
            <a href="/contact">
              <motion.button
                variants={buttonVariants}
                scale='scale'
                transition='transition' 
               >Contact Me
               </motion.button>
               
               </a>
          </motion.h1>
          <div className='sparkle-1'>
            <Sparkle style={{ top: '200px', left: '200px' }} />
            <Sparkle style={{ top: '400px', left: '400px' }} />
            <Sparkle style={{ top: '400px', left: '50px' }} />
            </div>
            <div className='techstack-img'>
            <img className='html' alt='htmllogo' src={htmlLogo}></img>
            <img className='css' alt='csslogo' src={cssLogo}></img>
            <img className='js' alt='jslogo' src={jsLogo}></img>
            </div>
        </div>
      );
    
    
};
    


export default Home;