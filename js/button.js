module.exports = function(class_name) {
  var button = document.createElement('div');
  
  var splitedClassName = class_name.split('__');
  var contentType = splitedClassName[0];
  button.className = contentType + '-button';

  var type = splitedClassName[1].match(/edit|delete|confirm|comment|reply/);
  button.setAttribute('data-action', type);

  button.classList.add(class_name);
  return button;
};