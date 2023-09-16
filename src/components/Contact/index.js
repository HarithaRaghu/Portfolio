import React from "react";
import { useState } from "react";
import './index.scss'
import axios from 'axios';

const Contact =()=>{

      const [formData,setFormData]=useState(
        {
            name: '',
            email: '',
            message: '',

        }
      )
      const handleChange=(e)=>{
        const {name,value}=e.target;
           setFormData((prevData)=>({
                 ...prevData,
                 [name]:value,
           })
          
          )
      }
      const handleSubmit = async(e)=>{
        e.preventDefault(e);
        // const { name, email, message } = formData;
        // console.log('Name:', name);
        // console.log('Email:', email);
        // console.log('Message:', message);
        try {

          await axios.post('http://localhost:5000/api/send-email', formData);

          alert('Message sent successfully!');

          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } 
        catch (error) {

          console.error('Error sending message:', error);
          alert('An error occurred while sending the message. Please try again later.');
          
        }
      }
    return(
     <>
        <div id='contact' className="contact-content">
            
            <form className="form-content" onSubmit={handleSubmit}>
            <h2>CONTACT ME</h2>
                <div className="form-item">
                 <label htmlFor="name">NAME:</label><br/>
                 <input type='text' id="name" name="name" value={formData.name} onChange={handleChange} required/>
                 </div>
                 <div className="form-item">
                 <label htmlFor="email">EMAIL:</label><br/>
                 <input type='email' id="email" name="email" value={formData.email}  onChange={handleChange} required/>
                 </div>
                 <div className="form-item">
                 <label htmlFor="message">MESSAGE:</label><br/>
                 <textarea id="message" name="message"  rows='4' value={formData.message}  onChange={handleChange} required/>
                 </div>
                 <button type="submit">SEND</button>
            </form>
        </div>

     </>
    )
}

export default Contact;