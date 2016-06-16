var express = require('express');
var app = express();

app.use(express.static('pages'));
app.use(express.static('pages/images'));

app.get('/', function(req, res) {

});

app.listen('2000', function() {
	console.log('runs...2000');
});