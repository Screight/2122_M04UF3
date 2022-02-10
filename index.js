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


if(request.url == "/character_black_red.png"){
	uploadAsset("character_black_red.png");
}


if(request.url == "/character_blonde_white.png"){
	uploadAsset("character_blonde_white.png");
}


if(request.url == "/character_brown_red.png"){
	uploadAsset("character_brown_red.png");
}


if(request.url == "/racer_green.png"){
	uploadAsset("racer_green.png");
}

if(request.url == "/road_background.png"){
	uploadAsset("road_background.png");
}

uploadAsset("index.html");

}).listen(1095);
