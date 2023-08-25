 
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors=require("cors");

const corsOptions ={
  origin: ['http://localhost:3000'], 
   credentials:true,            
   optionSuccessStatus:200,
}

const emailService = process.env.EMAIL_SERVICE;
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions)) 
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: emailService, 
    auth: {
      user: emailUser,
      pass: emailPassword
    }
  });

  const mailOptions = {
    from: email,
    to: 'haritharaghu1998@gmail.com',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
