//Load the request module
var request = require('request');

//Lets configure and request
request({
    url: 'http://localhost:3000/timezone',
	qs: {from: 'timez', time: +new Date()},
    method: 'POST',
    //Lets post the following key/values as form
    json: {
        timezone: '2'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
}
});