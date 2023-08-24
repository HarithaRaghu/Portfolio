import "./index.scss"
import Hamburger from "../Hamburger";
import { Link } from 'react-scroll';

const Navbar=()=>{
        
    return(
       <nav className="navbar">
         <div >
            <a href="/" className="logo">har!tha</a>
         </div>
          <ul className='nav-links'>
            <li><a href="/"  >Home</a></li>
            <li>
            <Link to="about" className='nav-link' smooth={true} duration={50}>
               About
            </Link>
            </li>
            <li>
            <Link to="projects" className='nav-link' smooth={true} duration={50}>
            Projects
            </Link>
              
            </li>
            <li><button href="/Resume">Resume</button></li>
            <li><Link to="contact" className='nav-link' smooth={true} duration={50}>
              Contact
            </Link></li>
            
          </ul>
          <div className="hamburger" >
            <Hamburger />
        </div>
       </nav> 
    );
}
export default Navbar;