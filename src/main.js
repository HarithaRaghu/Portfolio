
import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton';
import ReactGA from 'react-ga';  



const Main= ()=> {
ReactGA.initialize('G-ZLXS53V921');
ReactGA.event({
  category: 'User Interaction',
  action: 'Clicked Button',
});
  return (
   
      <div>
        
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <BackToTopButton/>
       
       
      </div>
      
  );
}


export default Main;
