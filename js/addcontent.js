
module.exports =function(dataBase, object) {

	if(dataBase instanceof Array) {
	  	var PostView = require('./post.js');
    	dataBase.forEach(function(item, i, arr) {
      		object.insertBefore(new PostView(item), object.firstElementChild);
    	});

  	} else {

  		var changeableContentMakeingReference;
	
		switch(dataBase.id[0]) {
			case 'p':
				changeableContentMakeingReference = require('./post.js');
				break;
			case 'c':
				changeableContentMakeingReference = require('./comment.js');
				break;
			case 'r':
				changeableContentMakeingReference = require('./reply.js');
				break;
		}

    	object.insertBefore(new changeableContentMakeingReference(dataBase), object.firstElementChild);
  	}

};