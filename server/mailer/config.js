'use strict';

const mailServerConfig = {
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'servak-test@yandex.ru',
    pass: 'dummy-password'
  }
};


module.exports = mailServerConfig;
