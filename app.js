var express = require('express');
			var myapp = new express();
			
			// ejs
		myapp.set('views', __dirname + '/views');
		myapp.set('view engine', 'ejs');
			
			// set port
		myapp.listen(3000);
		module.exports = myapp;