'use strict';

const nodemailer = require('nodemailer');
const mailServerConfig = require('./config');

let transport = nodemailer.createTransport(mailServerConfig);

let message = {
  from: mailServerConfig.auth.user,
  to: 'nuda.light@gmail.com',
  subject: 'my Simple Subject',
  html: '<p>Hello, <b>World</b></p>'
};


let mailer = {
  sendLetter(opts){

    

    let message = {
      from: mailServerConfig.auth.user,
      to: opts.to,
      subject: opts.subject,
      html: `<a href="http://localhost:7700/#/activate/${ opts.data.activateCode }">Your activation code</a>`
    };

    transport.sendMail(message, (err, response) => {
      if (err) throw err;

      console.log('TRANSPORTER RESPONSE:', response);
      transport.close();
    })

  }
};




module.exports = mailer;
