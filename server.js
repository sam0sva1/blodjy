var express = require('express');
var app = express();
var User = require('./files/db_def.js').user;
var Post = require('./files/db_def.js').post;
var Comment = require('./files/db_def.js').comment;
var sequelize = require('./files/db_def.js').sequelize;

var postRoute = require('./files/post_route');
var commentRoute = require('./files/comment_route');

app.use(express.static('pages'));
app.use(express.static('pages/images'));

app.use('/post', postRoute);
app.use('/comment', commentRoute);

app.get('/posts', (req, res) => {
	Post.findAll({
				limit:5,
				order: [
					['createdAt', 'DESC']
				]})
	.then(function(posts) {
		var postsToSend = [];
		posts.forEach(function(post) {
			var patternPost = {
				id: post.id,
				type: post.type,
    			userName: post.author,
    			title: post.title,
    			text: post.text,
    			date: post.date,
    			commentKeeper: post.keepedComments
			}
			postsToSend.unshift(patternPost);
		});
		res.status(200)
			.json(postsToSend)
			.end();
	});
});

// Comment.sync().then(function() {
// 		return Comment.create({
// 			author: "Kate",
// 			text: "I think it's awesome!",
// 			date: "29-06-16 10:23",
// 			keepedReplays: []
// 		});
// 	});

// Post.sync().then(function() {
// 	return Post.create({
// 		author: "Samosval",
// 		title: "",
// 		text: "",
// 		date: "29-06-16 10:23",
// 		keepedComments: []
// 	});
// });


app.get('/user/:user', (req, res) => {
	User.findOne({where: {id: 'u1'} }).then(user=>{
		console.log(user.userName);
	});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});