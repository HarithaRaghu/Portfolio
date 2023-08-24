import React from "react";
import './index.scss'

const Contact =()=>{

    return(
     <>
        <div id='contact' className="contact-content">
            
            <form className="form-content">
            <h2>CONTACT ME</h2>
                <div className="form-item">
                 <label htmlFor="name">NAME:</label><br/>
                 <input type='text' id="name" name="name" required/>
                 </div>
                 <div className="form-item">
                 <label htmlFor="email">EMAIL:</label><br/>
                 <input type='email' id="email" name="email" required/>
                 </div>
                 <div className="form-item">
                 <label htmlFor="message">MESSAGE:</label><br/>
                 <textarea id="message" name="message"  rows='4' required/>
                 </div>
                 <button type="submit">SEND</button>
            </form>
        </div>

     </>
    )
}

export default Contact