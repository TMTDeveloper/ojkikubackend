"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function (mst_user_bank) {
  mst_user_bank.inputdata = function (req, cb) {
    var app = require("../../server/server");
    var filterWherePost = {
      where: {
        and: [{
            ID_BANK: req.ID_BANK
          },
          {
            ID_USER: req.ID_USER
          }
        ]
      }
    };
    mst_user_bank.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        mst_user_bank.updateAll({
            and: [{
              ID_BANK: req.ID_BANK
            }, {
              ID_USER: req.ID_USER
            }]
          }, {
            "ID_BANK": req.ID_BANK,
            "ID_USER": req.ID_USER,
            "FLAG_ACTIVE": req.FLAG_ACTIVE,
            "USER_CREATED": req.USER_CREATED,
            "DATETIME_CREATED": req.DATETIME_CREATED,
            "USER_UPDATED": req.USER_UPDATED,
            "DATETIME_UPDATED": req.DATETIME_UPDATED
          },
          (err, res) => {
            if (util.isNullOrUndefined(err)) {
              var Result = {
                status: "200",
                message: "Data sudah di input"
              };

              cb(null, Result);
            } else {
              console.log(err);
              var Result = {
                statusCode: "404",
                message: "You dont have permission to access this service"
              };

              cb(Result);
            }
          }
        );
      } else {
        console.log("here2" + req.pk)
        mst_user_bank.create({
            "ID_BANK": req.ID_BANK,
            "ID_USER": req.ID_USER,
            "FLAG_ACTIVE": req.FLAG_ACTIVE,
            "USER_CREATED": req.USER_CREATED,
            "DATETIME_CREATED": req.DATETIME_CREATED,
            "USER_UPDATED": req.USER_UPDATED,
            "DATETIME_UPDATED": req.DATETIME_UPDATED
          },
          (err, res) => {
            if (util.isNullOrUndefined(err)) {
              var Result = {
                status: "200",
                message: "Data sudah di input"
              };

              cb(null, Result);
            } else {
              console.log(err);
              var Result = {
                statusCode: "404",
                message: "You dont have permission to access this service"
              };

              cb(Result);
            }
          }
        );
      }
    });
  };

  mst_user_bank.remoteMethod("inputdata", {
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
      type: "object"
    }
  });


};
