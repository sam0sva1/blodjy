var contentAdder = require('./addcontent.js');
var Button = require('./button.js');
var CommentView = require('./comment.js');
var ContentData = require('./content_data.js');
var addingShield = require('./adder.js');

function textChangerSwitcher(contentHoldingElement, offOnFlag){
  var textElementToChange = contentHoldingElement.querySelector('content-keeper__post-text');
  var ChangingValueBuffer = textElementToChange.outerHTML;
  if(offOnFlag) {
    ChangingValueBuffer = ChangingValueBuffer.replace(/<p/, '<textarea').replace(/<\/p>/, '</textarea>');
  } else {
    ChangingValueBuffer = ChangingValueBuffer.replace(/<textarea/, '<p').replace(/<\/textarea/, '</p>');
  }
  textElementToChange.outerHTML = ChangingValueBuffer;
}



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
        var textElementToChange = this.querySelector('.content-keeper__post-text');
        textElementToChange.contentEditable = true;
        textElementToChange.classList.add('editing');

        var editButton = this.querySelector('.post__edit-button');
        editButton.parentNode.replaceChild(new Button('post__confirm-button'), editButton);

        var shadow = document.createElement('div');
        shadow.classList.add('shadow');

        var shadowHolder = document.querySelector('#adder');
        shadowHolder.appendChild(shadow);

        document.body.onclick = function(event) {

          if(event.target.getAttribute('data-action') === 'confirm') {
            console.log(event.target.getAttribute('data-action'));

          textElementToChange.classList.remove('editing');
          textElementToChange.contentEditable = false;
            console.log(1);
          var confirmButton = this.querySelector('.post__confirm-button');
          confirmButton.parentNode.replaceChild(editButton, confirmButton);
            console.log(2);
          shadowHolder.removeChild(shadow);
          document.onclick = '';
            console.log(3);
          }

        };

        break;
    }

  });
  
  return post;
};


