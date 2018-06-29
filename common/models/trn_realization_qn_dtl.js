"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function (trn_realization_qn_dtl) {
  trn_realization_qn_dtl.inputdata = function (req, cb) {
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
          }, {
            KODE_BANK: req.KODE_BANK
          }
        ]
      }
    };
    trn_realization_qn_dtl.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        trn_realization_qn_dtl.updateAll({
            and: [{
                KODE_IKU: req.KODE_IKU
              },
              {
                TAHUN_REALISASI: req.TAHUN_REALISASI
              },
              {
                PERIODE: req.PERIODE
              }, {
                KODE_BANK: req.KODE_BANK
              }
            ]
          }, {
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_REALISASI": req.TAHUN_REALISASI,
            "PERIODE": req.PERIODE,
            "KODE_BANK": req.KODE_BANK,
            "NILAI_REALISASI_1": req.NILAI_REALISASI_1,
            "NILAI_REALISASI_2": req.NILAI_REALISASI_2,
            "NILAI_REALISASI_3": req.NILAI_REALISASI_3,
            "PENCAPAIAN": req.PENCAPAIAN,
            "USER_CREATED": req.USER_CREATED,
            "DATETIME_CREATED": req.DATETIME_CREATED,
            "USER_UPDATED": req.USER_CREATED,
            "DATETIME_UPDATED": req.DATETIME_UPDATED,
            "REMARK": req.REMARK,
            "TARGET": req.TARGET
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
        trn_realization_qn_dtl.create({
            "KODE_IKU": req.KODE_IKU,
            "TAHUN_REALISASI": req.TAHUN_REALISASI,
            "PERIODE": req.PERIODE,
            "KODE_BANK": req.KODE_BANK,
            "NILAI_REALISASI_1": req.NILAI_REALISASI_1,
            "NILAI_REALISASI_2": req.NILAI_REALISASI_2,
            "NILAI_REALISASI_3": req.NILAI_REALISASI_3,
            "PENCAPAIAN": req.PENCAPAIAN,
            "USER_CREATED": req.USER_CREATED,
            "DATETIME_CREATED": req.DATETIME_CREATED,
            "USER_UPDATED": req.USER_CREATED,
            "DATETIME_UPDATED": req.DATETIME_UPDATED,
            "REMARK": req.REMARK,
            "TARGET": req.TARGET
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

  trn_realization_qn_dtl.remoteMethod("inputdata", {
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
