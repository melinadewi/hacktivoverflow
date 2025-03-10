"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function (email, teks) {

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
    auth: {
      user: process.env.MAIL, // generated ethereal user
      pass: process.env.MAIL_PASS // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: process.env.MAIL, // sender address
    to: email, // list of receivers
    subject: "Your daily report ✔", // Subject line
    text: teks, // plain text body
  });

  console.log("Message sent: %s", info);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);