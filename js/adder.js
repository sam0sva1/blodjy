var adder = document.querySelector('.adder');
var ContentData = require('./content_data.js');
var addPost = require('./addpost.js');
var postKeeper = document.getElementById('post-keeper');


module.exports = function() {

var fieldHolder = document.createElement('div');
fieldHolder.setAttribute('id', 'fields');
fieldHolder.className = 'adder__fields';

var userNameField = document.createElement('input');
userNameField.setAttribute('type', 'text');
userNameField.setAttribute('id', 'userField');
userNameField.setAttribute('placeholder', 'Your name');
userNameField.className = 'fields__userField';
fieldHolder.appendChild(userNameField);

var title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('id', 'titleField');
title.setAttribute('placeholder', 'Title');
title.className = 'fields__titleField';
fieldHolder.appendChild(title);

var textField = document.createElement('textarea');
textField.setAttribute('rows', 10);
textField.setAttribute('id', 'textField');
textField.setAttribute('placeholder', 'How are you?');
textField.className = 'fields__textField';
fieldHolder.appendChild(textField);

var postButton = document.createElement('div');
postButton.setAttribute('id', 'post_but_form');
postButton.className = 'fields__postBut';
postButton.innerHTML = 'Post it!';
fieldHolder.appendChild(postButton);

var shadow = document.createElement('div');
shadow.className = 'shadow';

adder.appendChild(shadow);
adder.appendChild(fieldHolder);

var fields = document.getElementById('fields');
var userField = document.getElementById('userField');
var titleField = document.getElementById('titleField');
var textField = document.getElementById('textField');
var postBut = document.getElementById('post_but_form');

postBut.onclick = function(e) {
  var parent = e.target.parentNode;
  if(parent.children[0].value && parent.children[1].value && parent.children[2].value) {
    addPost( new ContentData() );
    parent.parentNode.removeChild(parent);
    document.querySelector('.shadow').parentNode.removeChild(document.querySelector('.shadow'));
  }
};

};



