

function ReplyButton(className) {
  var button = document.createElement('div');
  button.className = 'reply-button';
  button.classList.add(className);
  return button;
}

module.exports = function(info) {
  var reply = document.createElement('div');
  reply.className = 'reply-keeper__reply';
  
  var userName = document.createElement('p');
  userName.className = 'reply__username';
  userName.innerHTML = info.userName;
  reply.appendChild(userName);
  
  var content = document.createElement('p');
  content.className = 'reply__text';
  content.innerHTML = info.text;
  reply.appendChild(content);
  
  var date = document.createElement('date');
  date.className = 'reply__date';
  date.innerHTML = info.date;
  reply.appendChild(date);
  
  reply.appendChild(new ReplyButton('reply__edit-button'));
  reply.appendChild(new ReplyButton('reply__delete-button'));
  
  return reply;
};