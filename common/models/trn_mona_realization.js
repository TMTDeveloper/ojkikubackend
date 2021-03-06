"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");

module.exports = function (Trnmonarealization) {
  Trnmonarealization.inputdata = function (req, cb) {
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
    Trnmonarealization.findOne(filterWherePost, (err, res) => {
      if (res != null) {
        console.log("here")
        Trnmonarealization.updateAll({
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
            "USER_REALIZATION": req.USER_REALIZATION,
            "REALIZATION_DATE": req.REALIZATION_DATE,
            "USER_UPDATED": req.USER_UPDATED,
            "DATE_UPDATED": req.DATE_UPDATED,
            "UPDATEBY_USER": req.UPDATEBY_USER
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
        Trnmonarealization.create({
          "YEAR": req.YEAR,
          "ID_BANK": req.ID_BANK,
          "TIPE_DOKUMEN": req.TIPE_DOKUMEN,
          "KETERANGAN": req.KETERANGAN,
          "USER_REALIZATION": req.USER_REALIZATION,
          "REALIZATION_DATE": req.REALIZATION_DATE,
          "USER_UPDATED": req.USER_UPDATED,
          "DATE_UPDATED": req.DATE_UPDATED,
          "UPDATEBY_USER": req.UPDATEBY_USER
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

  Trnmonarealization.totalDocument = async function () {
    let allDocument = await Trnmonarealization.find({});

    let totaldoc = {}, labelList = [], dataList = []

    await allDocument.forEach(element => {
      if(totaldoc[element.TIPE_DOKUMEN]){
        totaldoc[element.TIPE_DOKUMEN]++
      } else {
        totaldoc[element.TIPE_DOKUMEN] = 1
      }

      if(!labelList.includes(element.TIPE_DOKUMEN))
      labelList.push(element.TIPE_DOKUMEN)
    });

    await Object.keys(totaldoc).forEach(element => {
      dataList.push(totaldoc[element]);
    })
    
    
    return {totaldoc,labelList,dataList};
  }

  Trnmonarealization.remoteMethod("inputdata", {
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

  Trnmonarealization.remoteMethod("totalDocument", {
    accepts: [],
    http: {
      path: "/totaldocument",
      verb: "get"
    },
    returns: {
      arg: "result",
      type: "Object",
    }
  });




};
