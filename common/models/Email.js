'use strict';

module.exports = function (Email) {
  // send an email
  Email.sendEmail = function (cb, email, html) {
    Email.app.models.Email.send({
      to: email,
      from: 'tmtdev888@gmail.com',
      subject: 'OJK IKU MOKA',
      html: html
    }, function (err, mail) {
      console.log('email sent!');
    });
  }

  Email.inputdata = function (req, cb) {
    console.log(req)
    Email.sendEmail(req.email, req.html);
    return 'terkirim';
  };

  Email.remoteMethod("inputdata", {
    accepts: [{
      arg: "inputdata",
      type: "Object",
      http: {
        source: "body"
      }
    }],
    http: {
      path: "/crud",
      verb: "post"
    },
    returns: {
      arg: "Result",
      type: "string",
    }
  });


};