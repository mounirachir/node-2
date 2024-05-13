var nodemailer = require("nodemailer");
var dotenv = require("dotenv");

dotenv.config();
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mistamounir02@gmail.com",
    pass: process.env.PASS,
  },
});

var mailOptions = {
  from: "mistamounir02@gmail.com",
  to: "mounirachir612@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
console.log(process.env.PASS);
