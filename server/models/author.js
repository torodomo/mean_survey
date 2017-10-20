var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new mongoose.Schema({
    name: { type: String },
    _books: [{ type: Schema.Types.ObjectId, ref: 'books' }]
    
    }, {timestamps: true});

var Author = mongoose.model('authors', AuthorSchema);
module.exports = Author;