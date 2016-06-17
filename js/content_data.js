var postKeeper = document.getElementById('post-keeper');
var showDate = require('./show_date.js');

module.exports = function ContentData(type) {
	var index = type.slice(0, 1);
  var newMessage = {};
    newMessage.id = index + (++postKeeper.number);
    newMessage.userName = userField.value;
    newMessage.title = titleField.value;
    newMessage.text = textField.value;
    newMessage.date = showDate();
    newMessage.commentKeeper = [];
  return newMessage;
};