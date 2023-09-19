
import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton';
import { initialize, pageview } from 'react-ga';



const Main= ()=> {
 initialize('G-ZLXS53V921');
 React.useEffect(() => {
  pageview(window.location.pathname + window.location.search);
}, []);
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
