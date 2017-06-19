'use strict';

if (!process.env.MONGOLAB_USERNAME) {
  var env = require('../env.js');
}

var mongoose = require('mongoose');
var db = function(){
  return{
    config:function(conf){
      mongoose.connect(`mongodb://${process.env.MONGOLAB_USERNAME}:${process.env.MONGOLAB_PASSWORD}@ds123312.mlab.com:23312/bookstore`);
      var db = mongoose.connection;
      db.on('error', console.error.bind(console,'connection error'));
      db.once('open', function(){
        console.log("db is open")
      })
    }
  }
};

module.exports = db();
