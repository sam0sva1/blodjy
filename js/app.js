var posts = require('./posts.js');

var PostView = require('./post.js');
var CommentView = require('./comment.js');
var ReplyView = require('./reply.js');
var addingShield = require('./adder.js');
var addPost = require('./addpost.js');

var addButton = document.getElementById('addButton');
addButton.onclick = function(e) {
	e.target.hide();
	var type = e.target.getAttribute('data-addtype');
	addingShield(type);
};

var postKeeper = document.getElementById('post-keeper');
postKeeper.number = 0;


Element.prototype.hide = function() {
  this.classList.add('hide');
};

addPost(posts);


//addingShield();