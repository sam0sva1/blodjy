var dataCreater = require('./data_creater.js');
module.exports =function(dataBase, object) {
	
	// console.log("From AddContent " + JSON.stringify(dataBase));
	
	if(dataBase instanceof Array) {
	  	var PostView = require('./post.js');
    	dataBase.forEach(function(item, i, arr) {
      		object.insertBefore(new PostView(item), object.firstElementChild);
    	});

  	} else {

  		var changeableContentMakeingReference;
	
		switch(dataBase.type) {
			case 'post':
				dataCreater(dataBase).then(function(result) {
					console.log(result);
					var post = JSON.parse(result);
					changeableContentMakeingReference = require('./post.js');
					object.insertBefore(new changeableContentMakeingReference(post), object.firstElementChild);
				});
				
				break;
			case 'comment':
				dataCreater(dataBase, object.parentNode.id).then(function(result) {
					console.log(result);
					var post = JSON.parse(result);
					changeableContentMakeingReference = require('./comment.js');
					object.insertBefore(new changeableContentMakeingReference(post), object.firstElementChild);
				});
				break;
			case 'reply':
				changeableContentMakeingReference = require('./reply.js');
				break;
		}
  	}
};



// 	if(dataBase instanceof Array) {
// 	  	var PostView = require('./post.js');
//     	dataBase.forEach(function(item, i, arr) {
//       		object.insertBefore(new PostView(item), object.firstElementChild);
//     	});

//   	} else {

//   		var changeableContentMakeingReference;
	
// 		switch(dataBase.type) {
// 			case 'post':
// 				dataSender(dataBase.type, dataBase).then(function(post) {
// 				changeableContentMakeingReference = require('./post.js');
// 				object.insertBefore(new changeableContentMakeingReference(post), object.firstElementChild);
// 				})
				
// 				break;
// 			case 'comment':
// 				changeableContentMakeingReference = require('./comment.js');
// 				break;
// 			case 'reply':
// 				changeableContentMakeingReference = require('./reply.js');
// 				break;
// 		}

//     	object.insertBefore(new changeableContentMakeingReference(dataBase), object.firstElementChild);
//   	}
// };
