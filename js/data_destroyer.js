function dataDestroyer(type, object) {
    console.log("From AddContent " + JSON.stringify(object));
	return new Promise(function(resolve, reject) {
        var url = "http://localhost:3000/" + type + "/delete";
		var xhr = new XMLHttpRequest();
		xhr.open('DELETE', url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhr.onload = function() {
    		if (this.status == 200) {
        		resolve(this.response);
    		} else {
        		var error = new Error(this.statusText);
        		error.code = this.status;
        		reject(error);
      		}
    	};

        var json = JSON.stringify(object);
		xhr.send(json);
	});
}

module.exports = dataDestroyer;