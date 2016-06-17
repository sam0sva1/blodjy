var CommentView = require('./comment.js');

module.exports = function addPost(dateBase, object) {
    object.insertBefore(new CommentView(dateBase), object.firstElementChild);
};