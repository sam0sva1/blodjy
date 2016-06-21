var addContent = require('./addcontent.js');
var ContentData = require('./content_data.js');
var addShieldContainer = document.getElementById('adder');

module.exports = function(type, objectContainer) {

var popup = document.createElement('div');

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
quitButton.setAttribute('data-button', 'quitButton');
quitButton.className = 'fields__quitBut';
fields.appendChild(quitButton);

var postButton = document.createElement('div');
postButton.setAttribute('data-button', 'post_but_form');
postButton.className = 'fields__postBut';
postButton.innerHTML = 'Post it!';
fields.appendChild(postButton);

var shadow = document.createElement('div');
shadow.className = 'shadow';

popup.appendChild(fields);
popup.appendChild(shadow);

popup.addEventListener('click', function(e){
	var target = e.target;

	if( target.classList.contains('shadow')) {
  		console.log(target);
  		var popUpWindow = target.parentNode;
  		var containerForPopUp = popUpWindow.parentNode;
  		containerForPopUp.removeChild(popUpWindow);
		addButton.classList.remove('hide');
  	}
	
  	if( !target.hasAttribute('data-button')) {
  		return;
  	}

  	var popUpWindow = target.parentNode.parentNode;
  	var containerForPopUp = popUpWindow.parentNode;

	var action = target.getAttribute('data-button');
	switch(action) {
	  	case 'post_but_form':

	  		if(userField.value && textField.value) {
	  			
	  			// if(!titleField || !titleField.value){
	  			// 	return;
	  			// }

     			addContent( new ContentData(type), objectContainer);

    			containerForPopUp.removeChild(popUpWindow);
    			addButton.classList.remove('hide');
  			}

	  		break;

	  	case 'quitButton':

	  		containerForPopUp.removeChild(popUpWindow);
			addButton.classList.remove('hide');
	  		break;

	}
});


addShieldContainer.appendChild(popup);
//return popup;

};


