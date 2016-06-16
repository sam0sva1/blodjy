var ReplyView = require('./reply.js');

function CommentButton(className) {
  var button = document.createElement('div');
  button.className = 'comment-button';
  button.classList.add(className);
  return button;
}

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
  
  commentContent.appendChild(new CommentButton('comment__edit-button'));
  commentContent.appendChild(new CommentButton('comment__delete-button'));
  commentContent.appendChild(new CommentButton('comment__reply-button'));
  
  comment.appendChild(commentContent);
  
  var replyKeeper = document.createElement('div');
  replyKeeper.className = 'comment__reply-keeper';
  
  if(info.replyKeeper.length > 0) {
    info.replyKeeper.forEach(function(item, i, arr) {
      replyKeeper.insertBefore(new ReplyView(item), replyKeeper.firstElementChild);
    });
  }
  
  comment.appendChild(replyKeeper);
  
  return comment;
};