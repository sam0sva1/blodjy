var PostView = require('./post.js');
var addingShield = require('./adder.js');
var addContent = require('./addcontent.js');
var dataLoader = require('./data_loader.js');

var postKeeper = document.getElementById('post-keeper');
postKeeper.number = 0;

Element.prototype.hide = function() {
  this.classList.add('hide');
};

var addButton = document.getElementById('addButton');
addButton.onclick = function(e) {
	e.target.hide();
	var type = e.target.getAttribute('data-addtype');
	new addingShield(type, postKeeper);
};

dataLoader('/posts')
	.then(
		result => {
			var posts = JSON.parse(result);
			console.log(posts);
			addContent(posts, postKeeper);
		},
		error => {
			console.log(error);
		}
	);