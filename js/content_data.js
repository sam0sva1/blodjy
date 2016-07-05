var postKeeper = document.getElementById('post-keeper');
var showDate = require('./show_date.js');

module.exports = function ContentData(type) {
  var newMessage = {};

  newMessage.type = type;
  newMessage.userName = userField.value;
    
  newMessage.text = textField.value;
  newMessage.date = showDate();
    
  if(type === 'post') {
  	newMessage.title = titleField.value;
  	newMessage.commentKeeper = [];
  } else if (type === 'comment') {
	  newMessage.replyKeeper = [];
  }
  return newMessage;
};