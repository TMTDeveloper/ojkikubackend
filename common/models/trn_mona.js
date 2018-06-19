"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function (Trnmona) {
  Trnmona.inputdata = function (req, cb) {
    console.log(req)
    var app = require("../../server/server");
    var filterWherePost = {
      where: {
        and: [{
            YEAR: req.YEAR
          },
          {
            ID_BANK: req.ID_BANK
          },
          {
            TIPE_DOKUMEN: req.TIPE_DOKUMEN
          }
        ]
      }
    };
    Trnmona.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        Trnmona.updateAll({
            and: [{
                YEAR: req.YEAR
              },
              {
                ID_BANK: req.ID_BANK
              },
              {
                TIPE_DOKUMEN: req.TIPE_DOKUMEN
              }
            ]
          }, {
            "YEAR": req.YEAR,
            "ID_BANK": req.ID_BANK,
            "TIPE_DOKUMEN": req.TIPE_DOKUMEN,
            "KETERANGAN": req.KETERANGAN,
            "START_DATE": req.START_DATE,
            "TARGET_DATE": req.TARGET_DATE,
            "REALIZATION_DATE": req.REALIZATION_DATE,
            "USER_CREATED": req.USER_CREATED,
            "DATE_CREATED": req.DATE_CREATED,
            "USER_UPDATED": req.USER_UPDATED,
            "DATE_UPDATED": req.DATE_UPDATED
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
        Trnmona.create({
            "YEAR": req.YEAR,
            "ID_BANK": req.ID_BANK,
            "TIPE_DOKUMEN": req.TIPE_DOKUMEN,
            "KETERANGAN": req.KETERANGAN,
            "START_DATE": req.START_DATE,
            "TARGET_DATE": req.TARGET_DATE,
            "REALIZATION_DATE": req.REALIZATION_DATE,
            "USER_CREATED": req.USER_CREATED,
            "DATE_CREATED": req.DATE_CREATED,
            "USER_UPDATED": req.USER_UPDATED,
            "DATE_UPDATED": req.DATE_UPDATED
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

  Trnmona.remoteMethod("inputdata", {
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
