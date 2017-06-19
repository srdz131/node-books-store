'use strict';

var Book = require('../models/bookModel');

module.exports = function (router) {
    router.get('/', function (req, res) {
      Book.find({},(err,books)=>{
        if(err){
          console.log(err);
        }
        books.forEach((book)=>{
          book.truncText = book.truncText(60);
        })
        var model = {books}
        res.render('index', model);
      })
  });
};
