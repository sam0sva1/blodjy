function dataLoader(url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function() {
    		if (this.status == 200) {
        		resolve(this.response);
    		} else {
        		var error = new Error(this.statusText);
        		error.code = this.status;
        		reject(error);
      		}
    	};

		xhr.send();
	});
}

module.exports = dataLoader;