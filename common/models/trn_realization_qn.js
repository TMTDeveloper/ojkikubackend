"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function (trn_realization_qn) {
  trn_realization_qn.inputdata = function (req, cb) {
    console.log(req)
    var app = require("../../server/server");
    var filterWherePost = {
      where: {
        and: [{
            KODE_IKU: req.KODE_IKU
          },
          {
            TAHUN_REALISASI: req.TAHUN_REALISASI
          },
          {
            PERIODE: req.PERIODE
          }
        ]
      }
    };
    trn_realization_qn.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        trn_realization_qn.updateAll({
            and: [{
                KODE_IKU: req.KODE_IKU
              },
              {
                TAHUN_REALISASI: req.TAHUN_REALISASI
              },
              {
                PERIODE: req.PERIODE
              }
            ]
          }, {
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_REALISASI": req.TAHUN_REALISASI,
            "PERIODE": req.PERIODE,
            "KODE_INDIKATOR": req.KODE_INDIKATOR,
            "PENCAPAIAN": req.PENCAPAIAN,
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
        trn_realization_qn.create({
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_REALISASI": req.TAHUN_REALISASI,
            "PERIODE": req.PERIODE,
            "KODE_INDIKATOR": req.KODE_INDIKATOR,
            "PENCAPAIAN": req.PENCAPAIAN,
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

  trn_realization_qn.remoteMethod("inputdata", {
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
