var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());
var buf =new Buffer(30);
app.get('/', function(request, response) {
 data=fs.readFileSync('index.html','utf8');
buf.write(data)

 response.send(buf.toString('utf8',0,27));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
