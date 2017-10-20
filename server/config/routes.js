var author = require('../controllers/authors.js');
const path = require('path');

module.exports = function(app) {
    app.get('/author',author.show);
    app.post('/author',author.create);
    app.delete('/author/:id', author.remove);
    app.put('/author/:id', author.update);
    app.all("*", (req,res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}