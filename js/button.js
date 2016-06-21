module.exports = function(class_name) {
  var button = document.createElement('div');
  var contentType = class_name.match(/post|comment|reply/);
  button.className = contentType + '-button';

  var type = class_name.match(/edit|delete|commenting|replying/);
  button.setAttribute('data-action', type);

  button.classList.add(class_name);
  return button;
};