var PostView = require('./post.js');
var CommentView = require('./comment.js');
var ReplyView = require('./reply.js');

//var postKeeper = document.getElementById('post-keeper');

// module.exports = function addContent(dateBase, object) {
// 	//console.log(PostView());
// 	  if(dateBase instanceof Array) {
//     dateBase.forEach(function(item, i, arr) {
//       object.appendChild(new PostView(item));
//     });
//   } else {
//     object.appendChild(new PostView(dateBase));
//   }
// };

module.exports =function(dateBase, object) {

	  if(dateBase instanceof Array) {
    dateBase.forEach(function(item, i, arr) {
      object.insertBefore(new PostView(item), object.firstElementChild);
    });
  } else {
    object.insertBefore(new PostView(dateBase), object.firstElementChild);
  }
  
};