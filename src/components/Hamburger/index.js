import React, { useState } from 'react';
import './index.scss'
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

  return (
    <>
      <MDBNavbar>
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
          
          <MDBBtn block className='border-bottom m-0'  color='white' href="/">
            Home
          </MDBBtn>
          
          <MDBBtn block className='border-bottom m-0' color='white' href='/about'>
            About
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='white' href='/projects'>
            Projects
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='white' href='/Resume'>
            Resume
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='white' href='/contact'>
            Contact
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}