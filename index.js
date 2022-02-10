#!/usr/bin/node

let http = require("http");
let fs = require("fs");


http.createServer(function(request, response){

	
function uploadAsset(name){

	fs.readFile(name, function(error, data){

	if(error){ console.log("Error"); return}

	response.writeHead(200);

	response.end(data);

	});
}

if(request.url == "/character.png"){
	uploadAsset("character.png");
}

uploadAsset("index.html");

}).listen(1095);
