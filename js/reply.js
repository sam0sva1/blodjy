var Button = require('./button.js');

module.exports = function(info) {
  var reply = document.createElement('div');
  reply.className = 'reply-keeper__reply';
  
  var userName = document.createElement('p');
  userName.className = 'reply__username';
  userName.innerHTML = info.userName;
  reply.appendChild(userName);
  
  var replyContent = document.createElement('p');
  replyContent.className = 'reply__text';
  replyContent.innerHTML = info.text;
  reply.appendChild(replyContent);
  
  var date = document.createElement('date');
  date.className = 'reply__date';
  date.innerHTML = info.date;
  reply.appendChild(date);
  
  reply.appendChild(new Button('reply__edit-button'));
  reply.appendChild(new Button('reply__delete-button'));

  reply.addEventListener('click', function(e){
    var target = e.target;
    if( !target.hasAttribute('data-action') ) {
      return;
    }
    var wholeReply = this;
    var allReplyKeeper = wholeReply.parentNode;
    var type = target.getAttribute('data-action');
    console.log(type);

    switch(type) {
      case 'delete':
        allReplyKeeper.removeChild(wholeReply);
        break;

      case 'edit':
        var textElementToChange = this.querySelector('.reply__text');
        textElementToChange.contentEditable = true;
        textElementToChange.classList.add('editing');

        var editButton = this.querySelector('.reply__edit-button');
        editButton.parentNode.replaceChild(new Button('reply__confirm-button'), editButton);

        var shadow = document.createElement('div');
        shadow.classList.add('shadow');

        var shadowHolder = document.querySelector('#adder');
        shadowHolder.appendChild(shadow);

        document.body.onclick = function(event) {

          if(event.target.getAttribute('data-action') === 'confirm') {

            textElementToChange.classList.remove('editing');
            textElementToChange.contentEditable = false;

            var confirmButton = this.querySelector('.reply__confirm-button');
            confirmButton.parentNode.replaceChild(editButton, confirmButton);

            shadowHolder.removeChild(shadow);
            document.onclick = '';
          }

        };

        break;
    }

  });

  return reply;
};