
module.exports =function(dataBase, object) {

	if(dataBase instanceof Array) {
	  	var PostView = require('./post.js');
    	dataBase.forEach(function(item, i, arr) {
      		object.insertBefore(new PostView(item), object.firstElementChild);
    	});

  	} else {

  		var changeableContentMakerReferense;
  		console.log(dataBase.id[0]);
	
		switch(dataBase.id[0]) {
			case 'p':
				changeableContentMakerReferense = require('./post.js');
				break;
			case 'c':
				changeableContentMakerReferense = require('./comment.js');
				break;
			case 'r':
				changeableContentMakerReferense = require('./reply.js');
				break;
		}

    	object.insertBefore(new changeableContentMakerReferense(dataBase), object.firstElementChild);
  	}

};