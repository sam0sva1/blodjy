var express = require('express');
var app = express();

app.use(express.static('pages'));
app.use(express.static('pages/images'));

app.get('/posts', function(req, res) {
	var posts = require('./files/posts.js');
	res.status(200)
		.json(posts)
		.end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});