"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function (trn_indicator_ql) {
  trn_indicator_ql.inputdata = function (req, cb) {
    console.log(req)
    var app = require("../../server/server");
    var filterWherePost = {
      where: {
        and: [{
            KODE_IKU: req.KODE_IKU
          },
          {
            TAHUN_INDICATOR: req.TAHUN_INDICATOR
          },
          {
            PERIODE: req.PERIODE
          },
          {
            NO_DETAIL: req.NO_DETAIL
          }
        ]
      }
    };
    trn_indicator_ql.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        trn_indicator_ql.updateAll({
            and: [{
                KODE_IKU: req.KODE_IKU
              },
              {
                TAHUN_INDICATOR: req.TAHUN_INDICATOR
              },
              {
                PERIODE: req.PERIODE
              },
              {
                NO_DETAIL: req.NO_DETAIL
              }
            ]
          }, {

            "KODE_IKU": req.KODE_IKU,
            "TAHUN_INDICATOR": req.TAHUN_INDICATOR,
            "PERIODE": req.PERIODE,
            "NO_DETAIL": req.NO_DETAIL,
            "TIPE_DATA": req.TIPE_DATA,
            "DESKRIPSI": req.DESKRIPSI,
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
        trn_indicator_ql.create({
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_INDICATOR": req.TAHUN_INDICATOR,
            "PERIODE": req.PERIODE,
            "NO_DETAIL": req.NO_DETAIL,
            "TIPE_DATA": req.TIPE_DATA,
            "DESKRIPSI": req.DESKRIPSI,
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

  trn_indicator_ql.remoteMethod("inputdata", {
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
