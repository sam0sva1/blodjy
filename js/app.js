var PostView = require('./post.js');
var posts = require('./posts.js');
var CommentView = require('./comment.js');
var ReplyView = require('./reply.js');
var addShield = require('./adder.js');
var addPost = require('./addpost.js');

var postKeeper = document.getElementById('post-keeper');
postKeeper.id = 0;


Element.prototype.hide = function() {
  this.classList.add('hide');
};

addPost(posts);

addShield();