var contentAdder = require('./addcontent.js');
var Button = require('./button.js');
var CommentView = require('./comment.js');
var ContentData = require('./content_data.js');
var addingShield = require('./adder.js');

module.exports = function(info) {

  var contentAdder = require('./addcontent.js');
  var Button = require('./button.js');
  var CommentView = require('./comment.js');
  
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

  postContent.addEventListener('click', function(e){
    var target = e.target;
    if( !target.hasAttribute('data-action') ) {
      return;
    }
    var wholePost = this.parentNode;
    var allPostsKeeper = wholePost.parentNode;
    var type = target.getAttribute('data-action');
    console.log(type);

    switch(type) {
      case 'delete':
        allPostsKeeper.removeChild(wholePost);
        break;

      case 'commenting':
        addingShield(type, commentKeeper);
        break;

      case 'edit':
        // var valueOfOuterHTML = this.querySelector('content-keeper__post-text').outerHTML;
        // valueOfOuterHTML = valueOfOuterHTML.replace(/<p/, '<textarea');
        // valueOfOuterHTML = valueOfOuterHTML.replace(/<\/p>/, '</textarea>');
        break;
    }

  });
  
  return post;
};


