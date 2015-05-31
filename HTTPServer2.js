var express        =        require('express');
var app            =        express();
var bodyParser     =        require("body-parser");

var tz = getTimezone();

app.use(bodyParser.json());

//This is only for demo test for Time server

//get function
app.get('/time',function(request,response){

if(request.query['timezone'] != null)
tz = request.query['timezone'];

var time = getTime(tz);

//output in jSON form
var output = "{<br/>Time: " + time +"<br/>TimeZone: "+tz+"<br/>}"; 

response.send(output);
});

//post function
app.post('/timezone',function(request,response){
tz=request.body.timezone;
console.log(tz);

});
var server = app.listen(3000, function () {

  var host = 'localhost';
  var port = '3000';

  console.log('listening at http://%s:%s', host, port);

});

//function to get the time according to the timezone
function getTime(timezone)
{
var date = new Date;
//Utc time in msec
var utc = date.getTime() - (date.getTimezoneOffset());
//change to specific time zone
var newdate = new Date(utc + (3600000*timezone));
return newdate.toUTCString();
}


function getTimezone(){
	var offset = new Date().getTimezoneOffset();
	var minutes = Math.abs(offset);
	var hours = Math.floor(minutes/60);
	var prefix = offset < 0?"+":"-";
	return prefix+hours;
}