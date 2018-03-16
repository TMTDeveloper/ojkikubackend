var util = require('util');

'use strict';

module.exports = function (Trnikudt) {






  Trnikudt.findiku = function (req, cb) {
    console.log(JSON.stringify(Number(req.year)-1))
    Trnikudt.find({
      where: {
        YEAR:(Number(req.year)-1).toString(),
        NO_IKU:req.no_iku
      }
    }, (err, res) => {
        console.log(JSON.stringify(err))
      if (util.isNullOrUndefined(res[0])) {
        var data = {
          name: "error",
          status: "401",
        }
        cb(null, data)

      } else {
          var payload = res;
    
        cb(null, payload);
      }
    })


    //   if (err) {
    //     //custom logger
    //     Log.error(err);
    //     res.status(401).json({
    //       "error": "login failed"
    //     });
    //   }

  };


  Trnikudt.remoteMethod(
    'findiku', {
      accepts: [
          {
        arg: 'req',
        type: 'Object',
        http: { source: 'body' }
      }
    ],
      http: {
        path: '/iku',
        verb: 'post'
      },
      returns: {
        arg: 'data',
        type: 'Object'
      }
    }
  )
};
