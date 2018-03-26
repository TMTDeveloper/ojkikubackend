var util = require("util");

("use strict");

module.exports = function(Trnikudt) {
  Trnikudt.upserTrnIkuDt = function(req, cb) {
    var filter = {
      and: [
        { YEAR: req.YEAR },
        { NO_IKU: req.NO_IKU },
        { BANK: Number(req.BANK) }
      ]
    };

    var filterWhere = {
      where: {
        and: [
          { YEAR: req.YEAR },
          { NO_IKU: req.NO_IKU },
          { BANK: Number(req.BANK) }
        ]
      }
    };

    console.log(JSON.stringify(Number(req.year) - 1));
    Trnikudt.findOne(filterWhere, (err, res) => {
      console.log(JSON.stringify(res));
      if (util.isNullOrUndefined(res)) {
        console.log("masuk sini1");
        Trnikudt.create(
          {
            YEAR: req.YEAR,
            NO_IKU: req.NO_IKU,
            BANK: req.BANK,
            TW1: req.TW1,
            TW2: req.TW2,
            TW3: req.TW3,
            TW4: req.TW4,
            DATE_CREATED: req.DATE_CREATED,
            DATE_MODIFIED: req.DATE_MODIFIED
          },
          (error, i) => {
            error ? cb(error) : cb(null, null);
          }
        );
      } else {
        console.log("masuk sini2");
        Trnikudt.updateAll(
          filter,
          {
            TW1: req.TW1,
            TW2: req.TW2,
            TW3: req.TW3,
            TW4: req.TW4,
            DATE_CREATED: req.DATE_CREATED,
            DATE_MODIFIED: req.DATE_MODIFIED
          },
          (error, i) => {
            console.log(i);
            error ? cb(error) : cb(null, null);
          }
        );
      }
    });

    // Trnikudt.upsert(
    //   {
    //     YEAR: req.YEAR,
    //     NO_IKU: req.NO_IKU,
    //     BANK: req.BANK,
    //     TW1: req.TW1,
    //     TW2: req.TW2,
    //     TW3: req.TW3,
    //     TW4: req.TW4,
    //     DATE_CREATED: req.DATE_CREATED,
    //     DATE_MODIFIED: req.DATE_MODIFIED
    //   },
    //   (error, i) => {
    //     error ? cb(error) : cb(null, null);
    //   }
    // );

    //   if (err) {
    //     //custom logger
    //     Log.error(err);
    //     res.status(401).json({
    //       "error": "login failed"
    //     });
    //   }
  };

  Trnikudt.findiku = function(req, cb) {
    console.log(JSON.stringify(Number(req.year) - 1));
    Trnikudt.find(
      {
        where: {
          and: [
            { YEAR: (Number(req.year) - 1).toString() },
            { NO_IKU: req.no_iku }
          ]
        }
      },
      (err, res) => {
        console.log(JSON.stringify(err));
        if (util.isNullOrUndefined(res[0])) {
          var data = {
            name: "error",
            status: "401"
          };
          cb(null, data);
        } else {
          var payload = res;

          cb(null, payload);
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

  Trnikudt.remoteMethod("upserTrnIkuDt", {
    accepts: [
      {
        arg: "req",
        type: "Object",
        http: { source: "body" }
      }
    ],
    http: {
      path: "/postdt",
      verb: "post"
    },
    returns: {
      arg: "data",
      type: "Object"
    }
  });

  Trnikudt.remoteMethod("findiku", {
    accepts: [
      {
        arg: "req",
        type: "Object",
        http: { source: "body" }
      }
    ],
    http: {
      path: "/iku",
      verb: "post"
    },
    returns: {
      arg: "data",
      type: "Object"
    }
  });
};
