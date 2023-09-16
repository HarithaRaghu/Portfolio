
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: emailService, 
    auth: {
      user: emailUser,
      pass: emailPassword
    },
  });

  const mailOptions = {
    from: email,
    to: 'haritharaghu1998@gmail.com',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};
