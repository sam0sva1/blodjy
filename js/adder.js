var adder = document.querySelector('.adder');
var ContentData = require('./content_data.js');
var addPost = require('./addpost.js');
var postKeeper = document.getElementById('post-keeper');
var addButton = document.getElementById('addButton');

module.exports = function(type) {

var fields = document.createElement('div');
fields.setAttribute('id', 'fields');
fields.className = 'adder__fields';

var header = document.createElement('span');
header.innerHTML = 'Add a new ' + type + '!';
fields.appendChild(header);

var userField = document.createElement('input');
userField.setAttribute('type', 'text');
userField.setAttribute('id', 'userField');
userField.setAttribute('placeholder', 'Your name');
userField.className = 'fields__userField';
fields.appendChild(userField);

if(type === 'post') {
	var titleField = document.createElement('input');
	titleField.setAttribute('type', 'text');
	titleField.setAttribute('id', 'titleField');
	titleField.setAttribute('placeholder', 'Title');
	titleField.className = 'fields__titleField';
	fields.appendChild(titleField);
}

var textField = document.createElement('textarea');
textField.setAttribute('rows', 10);
textField.setAttribute('id', 'textField');
textField.setAttribute('placeholder', 'How are you?');
textField.className = 'fields__textField';
fields.appendChild(textField);

var quitButton = document.createElement('div');
quitButton.setAttribute('id', 'quitButton');
quitButton.className = 'fields__quitBut';
fields.appendChild(quitButton);

var postButton = document.createElement('div');
postButton.setAttribute('id', 'post_but_form');
postButton.className = 'fields__postBut';
postButton.innerHTML = 'Post it!';
fields.appendChild(postButton);

var shadow = document.createElement('div');
shadow.className = 'shadow';

adder.appendChild(shadow);
adder.appendChild(fields);

quitButton.onclick = function(e){
	var parent = e.target.parentNode;
	parent.parentNode.removeChild(parent);
	addButton.classList.remove('hide');
	var shadow = document.querySelector('.shadow');
    shadow.parentNode.removeChild(shadow);
};

postButton.onclick = function(e) {
  var parent = e.target.parentNode;

  if(userField.value && titleField.value && textField.value) {
     addPost( new ContentData(type) );

    parent.parentNode.removeChild(parent);
    addButton.classList.remove('hide');

    shadow.parentNode.removeChild(shadow);
  }
};

};