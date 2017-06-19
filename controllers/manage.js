'use strict';

var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');

module.exports = function(router) {

    router.get('/', function(req, res) {
        res.render('manage/index')
    });

    router.get('/books', function(req, res) {
        Book.find({}, (err, books) => {
            if (err) {
                console.log(err);
            }
            var model = {
                books
            }
            res.render('manage/books/index', model)
        })
    });
    router.get('/categories', function(req, res) {
      Category.find({}, (err, categories) => {
          if (err) {
              console.log(err);
          }
          var model = {categories}
          res.render('manage/categories/index', model)
      })
    });

    /* BOOKS MANAGMENT */

    router.get('/books/add',function(req,res){
      Category.find({},(err,categories)=>{
        if(err){
          console.log(err);
        }
        var model = {categories};
        res.render('manage/books/add',model);
      })
    })

    router.post('/books/',function(req,res){
      var title = req.body.title && req.body.title.trim();
      var category = req.body.category && req.body.category.trim();
      var author = req.body.author && req.body.author.trim();
      var publisher = req.body.publisher && req.body.publisher.trim();
      var price = req.body.price && req.body.price.trim();
      var description = req.body.description && req.body.description.trim();
      var cover = req.body.cover && req.body.cover.trim();

      if(isNaN(price)){
        req.flash('error', "price is not a number");
        res.location('/manage/books/add');
        res.redirect('/manage/books/add');
      }
      var newBook = new Book({title,category,description,author,publisher,cover,price});

      newBook.save(function(err){
        if(err){
          console.log('save error', err)
        }
        req.flash('success','Book Added');
        res.location('/manage/books');
        res.redirect('/manage/books');
      })
    })

    router.get('/books/edit/:id',function(req,res){
      Category.find({},(err,categories)=>{
        Book.findOne({_id:req.params.id},(err,book)=>{
          if(err){
            console.log(err);
          }
          var model = {categories,book}
          res.render('manage/books/edit', model);
        })

      })
    })

    router.post('/books/edit/:id',function(req,res){
      var title = req.body.title && req.body.title.trim();
      var category = req.body.category && req.body.category.trim();
      var author = req.body.author && req.body.author.trim();
      var publisher = req.body.publisher && req.body.publisher.trim();
      var price = req.body.price && req.body.price.trim();
      var description = req.body.description && req.body.description.trim();
      var cover = req.body.cover && req.body.cover.trim();

      Book.update({_id:req.params.id},{
        title,
        category,
        author,
        publisher,
        price,
        description,
        cover
      }, (err)=>{
        if(err){
          console.log('update error', err)
        }
        req.flash('success','Book Updated');
        res.location('/manage/books');
        res.redirect('/manage/books');
      })
});
    router.delete('/books/delete/:id',function(req,res){
      Book.remove({_id:req.params.id},(err)=>{
        if(err){
          console.log(err);
        }
        req.flash('success','Book deleted');
        res.location('/manage/books');
        res.redirect('/manage/books')
      })
    })

    /* CATEGORIES ROUTES*/

    router.get('/categories/add',function(req,res){
      res.render('manage/categories/add');
    })

    router.post('/categories', function(req,res){
      var name = req.body.name && req.body.name.trim();

      var newCategory = new Category({name});

      newCategory.save((err)=>{
        if(err){
          console.log('save error', save);
        }
        req.flash('success','Category Added');
        res.location('/manage/categories');
        res.redirect('/manage/categories');
      })
    })

    router.get('/categories/edit/:id',function(req,res){
      Category.findOne({_id:req.params.id},(err,category)=>{
        if(err){
          console.log(err);
        }
        var model = {category}
        res.render('manage/categories/edit', model);
      })
    })

    router.post('/categories/edit/:id',function(req,res){
      var name = req.body.name && req.body.name.trim();

      Category.update({_id:req.params.id},{name},(err)=>{
        if(err){
          console.log('update error', err);
        }
        req.flash('success', 'Category updated');
        res.location('/manage/categories');
        res.redirect('/manage/categories')
      })
    })

    router.delete('/categories/delete/:id',function(req,res){
      Category.remove({_id:req.params.id},(err)=>{
        if(err){
          console.log(err);
        }
        req.flash('success','Category deleted');
        res.location('/manage/categories');
        res.redirect('/manage/categories')
      })
    })

};
