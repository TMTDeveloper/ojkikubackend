var util = require("util");
var jwt = require("jsonwebtoken");
var moment = require("moment");
("use strict");

module.exports = function (Loginiku) {
  var app = require("../../server/server");
  // var Loginiku = app.models.User;

  //   app.post( function (req, res) {

  // 	//parse user credentials from request body

  var secretKey = {
    secret: "ilovescotchyscotch"
  };

  Loginiku.loginuser = function (req, cb) {
    console.log(JSON.stringify(req));
    var app = require("../../server/server");
    var MSTUSER = app.models.mst_user;
    var LOGIN_LOG = app.models.LOGIN_LOG;
    MSTUSER.find({
      where: {
        and: [{
          ID_USER: req.email
        }, {
          PASSWORD: req.password
        }]
      }
    },
      (err, res) => {
        console.log(err);
        if (util.isNullOrUndefined(res[0])) {
          var data = {
            name: "error",
            status: "401",
            message: "Wrong user/password"
          };
          cb(data);
        } else {
          console.log(res[0]);
          var payload = res[0];
          var token = jwt.sign(payload.toJSON(), secretKey.secret, {
            expiresIn: "1h" // expires in 24 hours
          });
          var data = {
            token: token
          };
          LOGIN_LOG.create({

            "USERNAME": req.email,
            "DATETIME_LOGIN": moment().local().format()

          },
            (err, res) => {
console.log(err)
            }
          );
          console.log(data);
          cb(null, data);
        }
      }
    );

    //   if (err) {
    //     //custom logger
    //     Log.error(err);
    //     res.status(401).json({
    //       "error": "login failed"
    //     });
    //   }
  };

  Loginiku.remoteMethod("loginuser", {
    accepts: [{
      arg: "user",
      type: "Object",
      http: {
        source: "body"
      }
    }],
    http: {
      path: "/login",
      verb: "post"
    },
    returns: {
      arg: "data",
      type: "Object"
    }
  });
};
