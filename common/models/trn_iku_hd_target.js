var util = require("util");

("use strict");

module.exports = function(Trnikuhdtarget) {
  Trnikuhdtarget.upserTrnIkuhdTarget = function(req, cb) {
    var filter = {
      and: [{ YEAR: req.YEAR }, { IKU_TYPE: req.IKU_TYPE }]
    };

    var filterWhere = {
      where: {
        and: [{ YEAR: req.YEAR }, { IKU_TYPE: req.IKU_TYPE }]
      }
    };

    Trnikuhdtarget.findOne(filterWhere, (err, res) => {
      console.log(JSON.stringify(res));
      if (util.isNullOrUndefined(res)) {
        console.log("masuk sini1");
        Trnikuhdtarget.create(
          {
            YEAR: req.YEAR,
            IKU_TYPE: req.IKU_TYPE,
            PERCENTAGE: req.PERCENTAGE,
            DATE_CREATED: req.DATE_CREATED,
            DATE_MODIFIED: req.DATE_MODIFIED
          },
          (error, i) => {
            error ? cb(error) : cb(null, null);
          }
        );
      } else {
        console.log("masuk sini2");
        Trnikuhdtarget.updateAll(
          filter,
          {
            PERCENTAGE: req.PERCENTAGE,
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

  Trnikuhdtarget.remoteMethod("upserTrnIkuhdTarget", {
    accepts: [
      {
        arg: "req",
        type: "Object",
        http: { source: "body" }
      }
    ],
    http: {
      path: "/posttarget",
      verb: "post"
    },
    returns: {
      arg: "data",
      type: "Object"
    }
  });
};
