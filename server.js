var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8000,
    app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// static content from angular
app.use(express.static(path.join(__dirname, '/public/dist')));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen(port, function() {
    console.log("listening on port: ", port);
});