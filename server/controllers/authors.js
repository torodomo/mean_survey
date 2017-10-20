var mongoose = require('mongoose');
var Author = mongoose.model('authors');
var path = require('path');

module.exports = {
    
    show: (req,res,next) => {
        Author.find({}, function(err, results){
            if(err) { 
                res.json(err);
            } else {
                res.json(results);
            }
        });
    },

    showOne: (req,res,next) => {
        Author.findOne({_id: req.params.id}, function(err, result){
            if(err) { 
                res.json(err);
            } else {
                res.json(result);
            }
        });
    },

    create: (req,res,next) => {
        var author = new Author(req.body);
        author.save( function(err){
            if(err) { 
                res.json(err);
            } else {
                res.json({message:"Creation Success"});
            }
        });
    },

    remove: (req,res,next) => {
        Author.remove({_id: req.params.id}, function(err){
            if(err) { 
                res.json(err); 
            } else {
                res.json({message:"Delete Success"});
            }
        });
    },

    update: (req, res) => {
        Author.findById({_id: req.params.id}, (err, author) => {
            if(author){
                author.name = req.body.name;
                author.save((err) => {
                    if(err){
                        return res.send(err)
                    }
                    return res.json({message: 'author updated!'})
                })
            }
            else{
                console.log('error')
            }
        });
    },

    showAll: (req,res,next) => {
        Book.find({})
        .populate('_books')
        .exec( function(err, results){
            if(err) { 
                res.json(err);
            } else {
                res.json(results);
            }
        });
    }
}