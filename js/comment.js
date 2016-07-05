var Button = require('./button.js');
var ReplyView = require('./reply.js');
var addingShield = require('./adder.js');

module.exports = function(info) {
  
  var comment = document.createElement('div');
  comment.className = 'comment-keeper__comment';
  comment.id = info.id;
  
  var commentContent = document.createElement('div');
  commentContent.className = 'comment__comment-content';
  
  var userName = document.createElement('p');
  userName.className = 'comment-content__comment-username';
  userName.innerHTML = info.userName;
  commentContent.appendChild(userName);
  
  var content = document.createElement('p');
  content.className = 'comment-content__comment-text';
  content.innerHTML = info.text;
  commentContent.appendChild(content);
  
  var date = document.createElement('date');
  date.className = 'comment-content__comment-date';
  date.innerHTML = info.date;
  commentContent.appendChild(date);
  
  commentContent.appendChild(new Button('comment__edit-button'));
  commentContent.appendChild(new Button('comment__delete-button'));
  commentContent.appendChild(new Button('comment__reply-button'));
  
  comment.appendChild(commentContent);
  
  var replyKeeper = document.createElement('div');
  replyKeeper.setAttribute('data-content', 'reply');
  replyKeeper.className = 'comment__reply-keeper';
  
  if(info.replyKeeper.length > 0) {
    info.replyKeeper.forEach(function(item, i, arr) {
      replyKeeper.insertBefore(new ReplyView(item), replyKeeper.firstElementChild);
    });
  }
  
  comment.appendChild(replyKeeper);

  commentContent.addEventListener('click', function(e){
    var target = e.target;
    if( !target.hasAttribute('data-action') ) {
      return;
    }
    var wholeComment = this.parentNode;
    var allCommentKeeper = wholeComment.parentNode;
    var type = target.getAttribute('data-action');
    console.log(type);

    switch(type) {
      case 'delete':
        allCommentKeeper.removeChild(wholeComment);
        break;

      case 'reply':
        addingShield(type, replyKeeper);
        break;

      case 'edit':
        var textElementToChange = this.querySelector('.comment-content__comment-text');
        textElementToChange.contentEditable = true;
        textElementToChange.classList.add('editing');

        var editButton = this.querySelector('.comment__edit-button');
        editButton.parentNode.replaceChild(new Button('comment__confirm-button'), editButton);

        var shadow = document.createElement('div');
        shadow.classList.add('shadow');

        var shadowHolder = document.querySelector('#adder');
        shadowHolder.appendChild(shadow);

        document.body.onclick = function(event) {

          if(event.target.getAttribute('data-action') === 'confirm') {

            textElementToChange.classList.remove('editing');
            textElementToChange.contentEditable = false;

            var confirmButton = this.querySelector('.comment__confirm-button');
            confirmButton.parentNode.replaceChild(editButton, confirmButton);

            shadowHolder.removeChild(shadow);
            document.onclick = '';
          }

        };

        break;
    }

  });
  
  return comment;
};