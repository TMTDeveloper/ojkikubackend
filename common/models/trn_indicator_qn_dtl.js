"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function (trn_indicator_qn_dtl) {
  trn_indicator_qn_dtl.inputdata = function (req, cb) {
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
            KODE_BANK: req.KODE_BANK
          },
        ]
      }
    };
    trn_indicator_qn_dtl.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        trn_indicator_qn_dtl.updateAll({
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
                KODE_BANK: req.KODE_BANK
              }
            ]
          }, {
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_INDICATOR": req.TAHUN_INDICATOR,
            "PERIODE": req.PERIODE,
            "KODE_BANK": req.KODE_BANK,
            "THRESHOLD": req.THRESHOLD,
            "NILAI_INDICATOR_1": req.NILAI_INDICATOR_1,
            "NILAI_INDICATOR_2": req.NILAI_INDICATOR_2,
            "NILAI_INDICATOR_3": req.NILAI_INDICATOR_3,
            "USER_CREATED": req.USER_CREATED,
            "DATETIME_CREATED": req.DATETIME_CREATED,
            "USER_UPDATED": req.USER_CREATED,
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
        trn_indicator_qn_dtl.create({
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_INDICATOR": req.TAHUN_INDICATOR,
            "PERIODE": req.PERIODE,
            "KODE_BANK": req.KODE_BANK,
            "THRESHOLD": req.THRESHOLD,
            "NILAI_INDICATOR_1": req.NILAI_INDICATOR_1,
            "NILAI_INDICATOR_2": req.NILAI_INDICATOR_2,
            "NILAI_INDICATOR_3": req.NILAI_INDICATOR_3,
            "USER_CREATED": req.USER_CREATED,
            "DATETIME_CREATED": req.DATETIME_CREATED,
            "USER_UPDATED": req.USER_CREATED,
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

  trn_indicator_qn_dtl.remoteMethod("inputdata", {
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
