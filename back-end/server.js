var express = require("express");
var path = require('path');


var app = express();
 



app.use(express.static("public"));
 
var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});