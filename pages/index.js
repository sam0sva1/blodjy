/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var PostView = __webpack_require__(1);
	var posts = __webpack_require__(4);
	var CommentView = __webpack_require__(2);
	var ReplyView = __webpack_require__(3);
	var showDate = __webpack_require__(5);
	var PostData = __webpack_require__(6);

	var postKeeper = document.getElementById('post-keeper');
	postKeeper.id = 0;
	var fields = document.getElementById('fields');
	var userField = document.getElementById('userField');
	var titleField = document.getElementById('titleField');
	var textField = document.getElementById('textField');
	var postBut = document.getElementById('post_but_form');

	Element.prototype.hide = function() {
	  this.classList.add('hide');
	};

	function clearFields() {
	  userField.value = '';
	  titleField.value = '';
	  textField.value = '';
	}

	function addPost(dateBase) {
	  if(dateBase instanceof Array) {
	    dateBase.forEach(function(item, i, arr) {
	      postKeeper.insertBefore(new PostView(item), postKeeper.firstElementChild);
	    });
	  } else {
	    postKeeper.insertBefore(new PostView(dateBase), postKeeper.firstElementChild);
	  }
	}

	addPost(posts);

	postBut.onclick = function(e) {
	  var parent = e.target.parentNode;
	  if(parent.children[0].value && parent.children[1].value && parent.children[2].value) {
	    addPost( new PostData() );
	    clearFields();
	    parent.hide();
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var CommentView = __webpack_require__(2);

	function PostButton(className) {
	  var button = document.createElement('div');
	  button.className = 'post-button';
	  button.classList.add(className);
	  return button;
	}

	module.exports = function(info) {
	  
	  var post = document.createElement('div');
	  post.className = 'post-keeper__post';
	  post.id = info.id;
	  
	  var postContent = document.createElement('div');
	  postContent.className = 'post__content-keeper';
	  post.appendChild(postContent);
	  
	  var userName = document.createElement('p');
	  userName.className = 'content-keeper__post-username';
	  userName.innerHTML = info.userName;
	  postContent.appendChild(userName);
	  
	  var title = document.createElement('p');
	  title.className = 'content-keeper__post-title';
	  title.innerHTML = info.title;
	  postContent.appendChild(title);
	  
	  var content = document.createElement('p');
	  content.className = 'content-keeper__post-text';
	  content.innerHTML = info.text;
	  postContent.appendChild(content);
	  
	  var date = document.createElement('date');
	  date.className = 'content-keeper__post-date';
	  date.innerHTML = info.date;
	  postContent.appendChild(date);
	  
	  postContent.appendChild( new PostButton('post__edit-button') );
	  postContent.appendChild( new PostButton('post__delete-button') );
	  postContent.appendChild( new PostButton('post__comment-button') );
	  
	  post.appendChild(postContent);
	  
	  var commentKeeper = document.createElement('div');
	  commentKeeper.className = 'post__comment-keeper';
	  
	  if(info.commentKeeper.length > 0) {
	    info.commentKeeper.forEach(function(item, i, arr) {
	      commentKeeper.insertBefore(new CommentView(item), commentKeeper.firstElementChild);
	    });
	  }
	  
	  post.appendChild(commentKeeper);
	  
	  return post;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var ReplyView = __webpack_require__(3);

	function CommentButton(className) {
	  var button = document.createElement('div');
	  button.className = 'comment-button';
	  button.classList.add(className);
	  return button;
	}

	module.exports = function(info) {
	  
	  var comment = document.createElement('div');
	  comment.className = 'comment-keeper__comment';
	  comment.id = info.id;
	  
	  var commentContent = document.createElement('div');
	  commentContent.className = 'comment__comment-content';
	  
	  var userName = document.createElement('p');
	  userName.className = 'comment-content__comment-username';
	  userName.innerHTML = info.userName;
	  commentContent.appendChild(userName);
	  
	  var content = document.createElement('p');
	  content.className = 'comment-content__comment-text';
	  content.innerHTML = info.text;
	  commentContent.appendChild(content);
	  
	  var date = document.createElement('date');
	  date.className = 'comment-content__comment-date';
	  date.innerHTML = info.date;
	  commentContent.appendChild(date);
	  
	  commentContent.appendChild(new CommentButton('comment__edit-button'));
	  commentContent.appendChild(new CommentButton('comment__delete-button'));
	  commentContent.appendChild(new CommentButton('comment__reply-button'));
	  
	  comment.appendChild(commentContent);
	  
	  var replyKeeper = document.createElement('div');
	  replyKeeper.className = 'comment__reply-keeper';
	  
	  if(info.replyKeeper.length > 0) {
	    info.replyKeeper.forEach(function(item, i, arr) {
	      replyKeeper.insertBefore(new ReplyView(item), replyKeeper.firstElementChild);
	    });
	  }
	  
	  comment.appendChild(replyKeeper);
	  
	  return comment;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	

	function ReplyButton(className) {
	  var button = document.createElement('div');
	  button.className = 'reply-button';
	  button.classList.add(className);
	  return button;
	}

	module.exports = function(info) {
	  var reply = document.createElement('div');
	  reply.className = 'reply-keeper__reply';
	  
	  var userName = document.createElement('p');
	  userName.className = 'reply__username';
	  userName.innerHTML = info.userName;
	  reply.appendChild(userName);
	  
	  var content = document.createElement('p');
	  content.className = 'reply__text';
	  content.innerHTML = info.text;
	  reply.appendChild(content);
	  
	  var date = document.createElement('date');
	  date.className = 'reply__date';
	  date.innerHTML = info.date;
	  reply.appendChild(date);
	  
	  reply.appendChild(new ReplyButton('reply__edit-button'));
	  reply.appendChild(new ReplyButton('reply__delete-button'));
	  
	  return reply;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var posts = [
	  {
	    id: 'p124578',
	    userName: 'Sam',
	    title: 'First try',
	    text: 'This is my first try of creating a post!',
	    date: '26-04-16',
	    commentKeeper: [
	      {
	        id: 'c177578',
	        userName: 'Sam',
	        text: 'This is a new comment text!',
	        date: '27-05-16',
	        replyKeeper: [
	        	{
	        		id: 'r134578',
	        		userName: 'Sam',
	        		text: 'This is a new first comment text!',
	        		date: '27-05-16'
	        	},
	        	{
	        		id: 'r134578',
	        		userName: 'Sam',
	        		text: 'This is a new second comment text!',
	        		date: '27-05-16'
	        	}
	        ]
	      },
	      {
	        id: 'c456789',
	        userName: 'Kat',
	        text: 'Another one text for comment!',
	        date: '28-06-16',
	        replyKeeper: []
	      }
	    ]
	  },
	  {
	    id: 'p124784',
	    userName: 'Sam',
	    title: 'Second try',
	    text: 'That it is! My second post!',
	    date: '15-05-16',
	    commentKeeper: [
	      {
	        id: 'c124578',
	        userName: 'Sam',
	        text: "I'm so glad!",
	        date: '16-05-16',
	        replyKeeper: [
	        	{
	        		id: 'r134578',
	        		userName: 'Sam',
	        		text: 'This is a new comment text!',
	        		date: '27-05-16'
	        	}
	        ]
	      },
	      {
	        id: 'c456789',
	        userName: 'Kat',
	        text: 'My congrats!',
	        date: '16-05-16',
	        replyKeeper: [
	        	{
	        		id: 'r134578',
	        		userName: 'Sam',
	        		text: 'This is a new comment text!',
	        		date: '27-05-16'
	        	}
	        ]
	      }
	    ]
	  },
	  {
	    id: 'p124544',
	    userName: 'Sam',
	    title: 'Third try',
	    text: 'That it is! My second post!',
	    date: '15-05-16',
	    commentKeeper: [
	      {
	        id: 'c124578',
	        userName: 'Sam',
	        text: "I'm so glad!",
	        date: '16-05-16',
	        replyKeeper: [
	        	{
	        		id: 'r134578',
	        		userName: 'Sam',
	        		text: 'This is a new comment text!',
	        		date: '27-05-16'
	        	}
	        ]
	      },
	      {
	        id: 'c456789',
	        userName: 'Kat',
	        text: 'My congrats!',
	        date: '16-05-16',
	        replyKeeper: [
	        	{
	        		id: 'r134578',
	        		userName: 'Sam',
	        		text: 'This is a new comment text!',
	        		date: '27-05-16'
	        	},
	        	{
	        		id: 'r134578',
	        		userName: 'Sam',
	        		text: 'This is a new comment text!',
	        		date: '27-05-16'
	        	}
	        ]
	      }
	    ]
	  }
	];

	  module.exports = posts;

/***/ },
/* 5 */
/***/ function(module, exports) {

	function showDate() {
	  
	  var date = new Date();
	  
	  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	  var month = date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
	  var year = date.getFullYear().toString().slice(-2);
	  var minute = date.getMinutes()<10 ? "0" + date.getMinutes() : date.getMinutes();
	  var hour = date.getHours()<10 ? "0" + date.getHours() : date.getHours();
	  
	  var formatDate = day + '-' + month + '-' + year + ' ' + hour  + ':' + minute;
	  
	  return formatDate;
	}

	module.exports = showDate;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var postKeeper = document.getElementById('post-keeper');
	var showDate = __webpack_require__(5);

	function PostData() {
	  var newPost = {};
	    newPost.id = ++postKeeper.id;
	    newPost.userName = userField.value;
	    newPost.title = titleField.value;
	    newPost.text = textField.value;
	    newPost.date = showDate();
	    newPost.commentKeeper = [];
	  return newPost;
	}

	module.exports = PostData;

/***/ }
/******/ ]);