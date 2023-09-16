import React from 'react'
import './index.scss'
const Projects=()=>{
        
    return(
        <>
        
        <div 
        id= 'projects'
        className='projects'
        >
           <div  className='section-heading'>
            <h1>PROJECTS</h1>
            </div>
            <div className='project-container' >
          <div className='projects-1'>
              <h4>Blockchain-Based Government Project Fund Tracking and Management System</h4>
                <a href="/" >Learn more</a>
          </div>

          <div className='projects-1'>
               <h4>Responsive Ecommerce Website Using HTML, CSS & JavaScript</h4>
               <a href="/" >Learn more</a>
          </div>
          <div className='projects-1'>
              <h4>Expense Tracker Web Application Using React Js  </h4>
              <a href="/" >Learn more</a>
          </div>
          </div>
        </div>
        </>
    )

}

export default Projects