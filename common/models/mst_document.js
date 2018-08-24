'use strict';
var util = require("loopback/lib/utils");

module.exports = function (mst_document) {
  mst_document.getAllData = () => {
    let a = mst_document.find({})
    console.log(a)
    return a
  };

  mst_document.remoteMethod("getAllData", {
    accepts: [],
    http: {
      path: "/crud",
      verb: "get"
    },
    returns: {
      arg: "Result",
      type: "Object",
    }
  });
};