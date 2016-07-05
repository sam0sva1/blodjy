var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Post = require('../files/db_def.js').post;
var sequelize = require('../files/db_def.js').sequelize;

// middleware that is specific to this router

// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

var jsonParser = bodyParser.json();

router.get('/', function(req, res) {
  res.send('Undefined the type of content.');
});

router.post('/create', jsonParser, function(req, res) {
	// console.log(req.body);
	Post.sync().then(function() {
		return Post.create({
			author: req.body.userName,
			title: req.body.title,
			text: req.body.text,
			date: req.body.date,
			keepedComments: req.body.commentKeeper
		});
	}).then(function(obj) {
		var patternPost = {
			id: obj.id,
			type: obj.type,
    		userName: obj.author,
    		title: obj.title,
    		text: obj.text,
    		date: obj.date,
    		commentKeeper: obj.keepedComments
    	};
    	console.log(patternPost);
		 	res.status(200)
				.json(patternPost)
				.end();
	});
});

router.get('/edit', function(req, res) {
  res.send('Editing.');
});

router.delete('/delete', jsonParser, function(req, res) {
	console.log(req.body);
	Post.findById(req.body.id)
		.then(function(post) {
			post.destroy();
		})
		.then(function() {
			res.status(200)
				.send('Post was deleted!');
		});
});

module.exports = router;