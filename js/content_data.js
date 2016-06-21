var postKeeper = document.getElementById('post-keeper');
var showDate = require('./show_date.js');

module.exports = function ContentData(type) {
	var index = type.slice(0, 1);
  var newMessage = {};
    newMessage.id = index + (++postKeeper.number);
    newMessage.userName = userField.value;
    
    newMessage.text = textField.value;
    newMessage.date = showDate();
    
    if(index === 'p') {
    	newMessage.title = titleField.value;
    	newMessage.commentKeeper = [];
	} else if (index === 'c') {
		newMessage.replyKeeper = [];
	}
  return newMessage;
};