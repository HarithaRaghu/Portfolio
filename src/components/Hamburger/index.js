import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Resume from '../../assets/Resume/Haritha_Raghu_Resume.pdf'
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Hamburger() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);
  const handleDownload=()=>{
    window.open(Resume,'_blank');
  }
 

  return (
    <>
      <MDBNavbar  >
        <MDBContainer fluid>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3}>
        <div className='bg-light shadow-3 p-4'>
          
          <MDBBtn block className='border-bottom m-0'  color='white' >
          <Link to='home' smooth={true} duration={50}>
               Home
            </Link>
          </MDBBtn>
          
          <MDBBtn block className='border-bottom m-0' color='white'  >
          <Link to="about"  smooth={true} duration={50}>
               About
            </Link>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='white' href='/projects'>
          <Link to="projects"  smooth={true} duration={50}>
               Projects
            </Link>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='white' href='/Resume' onClick={handleDownload}>
            Resume
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='white' href='/contact'>
          <Link to="contact" smooth={true} duration={50}>
               Contact
            </Link>
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}