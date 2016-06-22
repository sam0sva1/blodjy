var posts = require('./posts.js');
var PostView = require('./post.js');
var addingShield = require('./adder.js');
var addContent = require('./addcontent.js');

var postKeeper = document.getElementById('post-keeper');
postKeeper.number = 0;


var addButton = document.getElementById('addButton');
addButton.onclick = function(e) {
	e.target.hide();
	var type = e.target.getAttribute('data-addtype');
	//adder.appendChild( new addingShield(type, postKeeper));
	new addingShield(type, postKeeper);
};

Element.prototype.hide = function() {
  this.classList.add('hide');
};

addContent(posts, postKeeper);