var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Post = require('../files/db_def.js').post;
var Comment = require('../files/db_def.js').comment;
var sequelize = require('../files/db_def.js').sequelize;

var jsonParser = bodyParser.json();

router.get('/', function(req, res) {
  res.send('Undefined the type of content.');
});

router.post('/create', jsonParser, function(req, res) {
	console.log(req.body);

	Comment.sync().then(function() {
		return Comment.create({
			author: req.body.userName,
			text: req.body.text,
			date: req.body.date,
			parentId: req.body.parentId
		});
	}).then(function(obj) {

		// var patternComment = {
		// 	id: obj.id,
		// 	type: obj.type,
  //   		userName: obj.author,
  //   		text: obj.text,
  //   		date: obj.date,
  //   		replyKeeper: obj.keepedReplays
  //   	};

  //   	console.log(patternComment);
		//  	res.status(200)
		// 		.json(patternComment)
		// 		.end();
	});
});

router.get('/edit', function(req, res) {
  res.send('Editing.');
});

router.delete('/delete', jsonParser, function(req, res) {
	console.log(req.body);
	Comment.findById(req.body.id)
		.then(function(post) {
			post.destroy();
		})
		.then(function() {
			res.status(200)
				.send('Comment was deleted!');
		});
});

module.exports = router;