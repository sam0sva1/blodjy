var PostView = require('./post.js');
var postKeeper = document.getElementById('post-keeper');

module.exports = function addPost(dateBase) {
	  if(dateBase instanceof Array) {
    dateBase.forEach(function(item, i, arr) {
      postKeeper.insertBefore(new PostView(item), postKeeper.firstElementChild);
    });
  } else {
    postKeeper.insertBefore(new PostView(dateBase), postKeeper.firstElementChild);
  }
};