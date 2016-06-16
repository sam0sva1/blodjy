var postKeeper = document.getElementById('post-keeper');
var showDate = require('./show_date.js');

function PostData() {
  var newPost = {};
    newPost.id = ++postKeeper.id;
    newPost.userName = userField.value;
    newPost.title = titleField.value;
    newPost.text = textField.value;
    newPost.date = showDate();
    newPost.commentKeeper = [];
  return newPost;
}

module.exports = PostData;