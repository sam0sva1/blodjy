var Button = require('./button.js');
var CommentView = require('./comment.js');

module.exports = function(info) {
  
  var post = document.createElement('div');
  post.className = 'post-keeper__post';
  post.id = info.id;
  
  var postContent = document.createElement('div');
  postContent.className = 'post__content-keeper';
  post.appendChild(postContent);
  
  var userName = document.createElement('p');
  userName.className = 'content-keeper__post-username';
  userName.innerHTML = info.userName;
  postContent.appendChild(userName);
  
  var title = document.createElement('p');
  title.className = 'content-keeper__post-title';
  title.innerHTML = info.title;
  postContent.appendChild(title);
  
  var content = document.createElement('p');
  content.className = 'content-keeper__post-text';
  content.innerHTML = info.text;
  postContent.appendChild(content);
  
  var date = document.createElement('date');
  date.className = 'content-keeper__post-date';
  date.innerHTML = info.date;
  postContent.appendChild(date);
  
  postContent.appendChild( new Button('post__edit-button') );
  postContent.appendChild( new Button('post__delete-button') );
  postContent.appendChild( new Button('post__commenting-button') );
  
  post.appendChild(postContent);
  
  var commentKeeper = document.createElement('div');
  commentKeeper.className = 'post__comment-keeper';
  
  if(info.commentKeeper.length > 0) {
    info.commentKeeper.forEach(function(item, i, arr) {
      commentKeeper.insertBefore(new CommentView(item), commentKeeper.firstElementChild);
    });
  }
  
  post.appendChild(commentKeeper);
  
  return post;
};


  // postContent.addEventListener('click', function(e){
  //   var target = e.target;
  //   var postItSelf = this.parentNode.parentNode;
  //   var type = target.getAttribute('data-action');
  //   switch(type) {
  //     case 'delete':
  //     postItSelf.removeChild(this.parentNode);
  //     break;

  //     case 'comment':
  //     var comKeep = postItSelf.querySelector('post__comment-keeper');

  //     addContent( new ContentData(type), comKeep);
  //     break;
  //   }
  // });