"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function (trn_indicator_qn) {
  trn_indicator_qn.inputdata = function (req, cb) {
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
          }
        ]
      }
    };
    trn_indicator_qn.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        trn_indicator_qn.updateAll({
            and: [{
                KODE_IKU: req.KODE_IKU
              },
              {
                TAHUN_INDICATOR: req.TAHUN_INDICATOR
              },
              {
                PERIODE: req.PERIODE
              }
            ]
          }, {
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_INDICATOR": req.TAHUN_INDICATOR,
            "PERIODE": req.PERIODE,
            "KODE_INDIKATOR": req.KODE_INDIKATOR,
            "THRESHOLD": req.THRESHOLD,
            "INDIKATOR_1_DESC": req.INDIKATOR_1_DESC,
            "INDIKATOR_2_DESC": req.INDIKATOR_2_DESC,
            "INDIKATOR_3_DESC": req.INDIKATOR_3_DESC,
            "REALISASI_1_DESC": req.REALISASI_1_DESC,
            "REALISASI_2_DESC": req.REALISASI_2_DESC,
            "REALISASI_3_DESC": req.REALISASI_3_DESC,
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
        trn_indicator_qn.create({
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_INDICATOR": req.TAHUN_INDICATOR,
            "PERIODE": req.PERIODE,
            "KODE_INDIKATOR": req.KODE_INDIKATOR,
            "THRESHOLD": req.THRESHOLD,
            "INDIKATOR_1_DESC": req.INDIKATOR_1_DESC,
            "INDIKATOR_2_DESC": req.INDIKATOR_2_DESC,
            "INDIKATOR_3_DESC": req.INDIKATOR_3_DESC,
            "REALISASI_1_DESC": req.REALISASI_1_DESC,
            "REALISASI_2_DESC": req.REALISASI_2_DESC,
            "REALISASI_3_DESC": req.REALISASI_3_DESC,
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

  trn_indicator_qn.remoteMethod("inputdata", {
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
