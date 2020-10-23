const express=require("express");
const fs=require("fs");
var app=express();
app.use(express.static('neon'));
//There should be index.html inside the directory else app won't read it
//like if the app uses here neoTxtFolder intead od neon it won't work then
var server=app.listen(8000,function() {
    var host=server.address().address;
    var port=server.address().port;
    console.log('Express app listening at http://%s:%s',host,port);
});