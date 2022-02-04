#!/usr/bin/node

let http = require("http");
let fs = require("fs");

http.createServer(function(request, response){

	if(request.url == "/character.png"){
	
		fs.readFile("character.png", function(error, data){

			if(error){ console.log("Error"); return}

			response.writeHead(200);

			response.end(data);
		})
	}

	fs.readFile("index.html", function(error, data){

		if(error){ console.log("Error"); return}

		response.writeHead(200);

		response.end(data);
	})

}).listen(1095);
