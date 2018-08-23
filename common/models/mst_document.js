'use strict';

module.exports = function (mst_document) {

    mst_document.getAllData = function (req, cb) {
        console.log(req)
        mst_document.find({}, (err,res) => {
            console.log(res)
            return res;
        });
        
      };
    
      mst_document.remoteMethod("getAllData", {
        accepts: [{
          arg: "getAllData",
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
          type: "Object",
        }
      });


};





