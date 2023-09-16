import React,{useState} from 'react';
import "./index.scss"
import Hamburger from "../Hamburger";
import { Link } from 'react-router-dom';
import Resume from '../../assets/Resume/Haritha_Raghu_Resume.pdf'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const handleDownload=()=>{
    window.open(Resume,'_blank');
  }
  return (
    <nav className="navbar-1">
      <div>
        <Link to="/" className="logo">har!tha</Link> 
      </div>
      <ul className='nav-links'>
        <li>
          <Link to="/" 
          className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => setActiveLink('home')}
          >Home</Link>
        </li>
        <li>
          <Link 
          to="/about" 
          className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
          onClick={() => setActiveLink('about')}>
            About</Link> 
        </li>
        <li>
          <Link 
          to="/projects" 
          className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveLink('projects')}>Projects</Link> 
        </li>
        <li>
        <button href="/Resume" onClick={handleDownload}>Resume</button>
        </li>
        <li>
          <Link to="/contact" 
          className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveLink('contact')}>Contact</Link> 
        </li>
      </ul>
      <div className="hamburger">
        <Hamburger />
      </div>
    </nav>
  );
}

export default Navbar;
