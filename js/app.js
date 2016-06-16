var PostView = require('./post.js');
var posts = require('./posts.js');
var CommentView = require('./comment.js');
var ReplyView = require('./reply.js');
var showDate = require('./show_date.js');
var PostData = require('./post_data.js');

var postKeeper = document.getElementById('post-keeper');
postKeeper.id = 0;
var fields = document.getElementById('fields');
var userField = document.getElementById('userField');
var titleField = document.getElementById('titleField');
var textField = document.getElementById('textField');
var postBut = document.getElementById('post_but_form');

Element.prototype.hide = function() {
  this.classList.add('hide');
};

function clearFields() {
  userField.value = '';
  titleField.value = '';
  textField.value = '';
}

function addPost(dateBase) {
  if(dateBase instanceof Array) {
    dateBase.forEach(function(item, i, arr) {
      postKeeper.insertBefore(new PostView(item), postKeeper.firstElementChild);
    });
  } else {
    postKeeper.insertBefore(new PostView(dateBase), postKeeper.firstElementChild);
  }
}

addPost(posts);

postBut.onclick = function(e) {
  var parent = e.target.parentNode;
  if(parent.children[0].value && parent.children[1].value && parent.children[2].value) {
    addPost( new PostData() );
    clearFields();
    parent.hide();
  }
};