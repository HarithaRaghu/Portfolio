import React from "react";
// import { useState } from "react";
import './index.scss'
// import axios from 'axios';

const Contact =()=>{
      
      // const [formData,setFormData]=useState(
      //   {
      //       name: '',
      //       email: '',
      //       message: '',

      //   }
      // )
      // const handleChange=(e)=>{
      //   const {name,value}=e.target;
      //      setFormData((prevData)=>({
      //            ...prevData,
      //            [name]:value,
      //      })
          
      //     )
      // }
      // const handleSubmit = async(e)=>{
      //   e.preventDefault(e);
      //   // const { name, email, message } = formData;
      //   // console.log('Name:', name);
      //   // console.log('Email:', email);
      //   // console.log('Message:', message);
      //   try {

      //     await axios.post('http://localhost:5000/api/send-email', formData);

      //     alert('Message sent successfully!');

      //     setFormData({
      //       name: '',
      //       email: '',
      //       subject: '',
      //       message: ''
      //     });
      //   } 
      //   catch (error) {

      //     console.error('Error sending message:', error);
      //     alert('An error occurred while sending the message. Please try again later.');
          
      //   }
      // }
    return(
     <>
        <div id='contact' className="contact-content">
            
            <form className="form-content" method='POST'  name='contactform'  >
                 
            <h2>CONTACT ME</h2>
            <input 
             type='hidden'
             name='form-name'
             value='form-content' 
             action='/confirmation-page'/>
                <div className="form-item">
                 <label htmlFor="name">NAME:</label><br/>
                 <input type='text' id="name" name="name" placeholder="Enter Your name" required/>
                 </div>
                 <div className="form-item">
                 <label htmlFor="email">EMAIL:</label><br/>
                 <input type='email' id="email" name="email" placeholder="Enter your email" required/>
                 </div>
                 <div className="form-item">
                 <label htmlFor="message">MESSAGE:</label><br/>
                 <textarea id="message" name="message"  rows='4' placeholder="Message"   required/>
                 </div>
                 <button type="submit">SEND</button>
            </form>
        </div>

     </>
    )
}

export default Contact;