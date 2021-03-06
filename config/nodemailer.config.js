const nodemailer = require("nodemailer");
const config = require("../config/auth.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: user,
        pass: pass,
    },
});

module.exports.sendConfirmationEmail = (email, confirmationCode) => {
    console.log("Check");
    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello,
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://127.0.0.1:5000/confirm${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
};