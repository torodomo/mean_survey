var users = require('./../controllers/users.js');
var polls = require('./../controllers/polls.js');
var path = require('path');

module.exports = function(app) {
    //Set up routes

	app.post('/users', users.login);
	// Logs the user in or creates user

	app.get('/users/one', users.getID);
	// This is the method we can use to grab the user's
	// name from the database after it is stored in session
	// by initial login

	app.get('/users/logout', users.logout);
	// Logs the user out by clearing session

	app.post('/polls', polls.create);
	// Create a new poll in the database

	app.get('/polls', polls.get);
	// Get all the polls

	app.delete('/polls/:id', polls.delete);
	// Delete a poll

	app.get('/options/:id', polls.getOptions);
	// Get all of one poll's options

	app.get('/polls/:id', polls.getPoll);
	// Get a single poll

	app.put('/options', polls.vote);
	// Add a vote to an option

	app.get('/options/one/:id', polls.getOption)
	// Get a single options

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})
	// This connects our server/express with our frontend/angular!

}