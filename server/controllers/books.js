var mongoose = require('mongoose');
var Book = mongoose.model('books');
var path = require('path');
var Author = mongoose.model('authors');

module.exports = {
    
    show: (req,res,next) => {
        Book.find({}, function(err, results){
            if(err) { 
                res.json(err);
            } else {
                res.json(results);
            }
        });
    },

    showOne: (req,res,next) => {
        Book.findOne({_id: req.params.id}, function(err, result){
            if(err) { 
                res.json(err);
            } else {
                res.json(result);
            }
        });
    },

    create: (req,res,next) => {
        Author.findOne({_id: req.params.id}, function(err, author){
            if(err) { 
                res.json(err);
            } else {
                var book = new Book(req.body);
                book._author = author._id;
                author._books.push(book);
                book.save( function(err){
                    if(err) { 
                        res.json(err);
                    } else {
                        author.save( function(err){
                            if(err) { 
                                res.json(err);
                            } else {
                                res.json({message:"Creation Success"});
                            }
                        });
                    }
                });
            }
        });

    },

    remove: (req,res,next) => {
        Book.remove({_id: req.params.id}, function(err){
            if(err) { 
                res.json(err); 
            } else {
                res.json({message:"Delete Success"});
            }
        });
    },

    update: (req, res) => {
        Book.findById({_id: req.params.id}, (err, book) => {
            if(book){
                book.name = req.body.name;
                book.save((err) => {
                    if(err){
                        return res.send(err)
                    }
                    return res.json({message: 'book updated!'})
                })
            }
            else{
                console.log('error')
            }
        });
    },

    showAll: (req,res,next) => {
        Author.findOne({_id: req.params.id})
        .populate('_books')
        .exec( function(err, result){
            if(err) { 
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
}