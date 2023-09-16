"use strict";

var nodemailer = require('nodemailer');

exports.handler = function _callee(event, context) {
  var data, transporter, mailOptions;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = JSON.parse(event.body);
          transporter = nodemailer.createTransport({
            service: emailService,
            auth: {
              user: emailUser,
              pass: emailPassword
            }
          });
          mailOptions = {
            from: email,
            to: 'haritharaghu1998@gmail.com',
            text: "Name: ".concat(name, "\nEmail: ").concat(email, "\nMessage: ").concat(message)
          };
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(transporter.sendMail(mailOptions));

        case 6:
          return _context.abrupt("return", {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Email sent successfully'
            })
          });

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          return _context.abrupt("return", {
            statusCode: 500,
            body: JSON.stringify({
              error: 'Error sending email'
            })
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9]]);
};