var express = require('express');
var connect = require('connect');
var serveStatic = require('serve-static');
var app = express();


app.use(serveStatic(__dirname + '/built/bin', {'index': ['default.html', 'default.htm']}));
app.use(serveStatic(__dirname + '/public', {'index': ['index.html', 'default.htm']}));
app.listen(8080);
// 
//connect().use(serveStatic(__dirname.slice(0, -4) + '/built/bin'), { index: true }).listen(8080, function(){
//    console.log('Server running on 8080 in directory ' + __dirname.slice(0, -4) + '/built/bin');
//});
