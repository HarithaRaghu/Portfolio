import React, { useState } from 'react';
import "./index.scss"
import Hamburger from "../Hamburger";
import { Link } from 'react-scroll';
import Resume from '../../assets/Resume/Haritha_Resume.pdf'

const Navbar=()=>{
        const [activeLink, setActiveLink] = useState('home');
          const handleDownload=()=>{

            window.open(Resume,'_blank');
            
          }
        
    return(
       <nav className="navbar-1">
         <div >
            <a href="/" className="logo">har!tha</a>
         </div>
          <ul className='nav-links'>
            <li> 
              <Link 
                to="home" 
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                smooth={true} 
                duration={50}
                onClick={() => setActiveLink('home')}
                >
               Home
            </Link></li>
            <li>
            <Link 
              to="about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} 
              smooth={true} 
              duration={50}
              onClick={() => setActiveLink('about')}>
               About
            </Link>
            </li>
            <li>
            <Link 
               to="projects" 
               className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} 
               smooth={true} 
               duration={50}
               onClick={() => setActiveLink('projects')}>
            Projects
            </Link>
              
            </li>
            <li>
              <button 
               onClick={handleDownload}>Resume</button>
              </li>
            
            <li>
              <Link 
                to="contact" 
                className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} 
                smooth={true} 
                duration={50}
                onClick={() => setActiveLink('contact')}>
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