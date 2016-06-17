var postKeeper = document.getElementById('post-keeper');
var showDate = require('./show_date.js');

module.exports = function ContentData() {
  var newMessage = {};
    newMessage.id = ++postKeeper.id;
    newMessage.userName = userField.value;
    newMessage.title = titleField.value;
    newMessage.text = textField.value;
    newMessage.date = showDate();
    newMessage.commentKeeper = [];
  return newMessage;
}