const Server = require("./index")

function entrypoint(){
	const server = new Server();
	server.start();
}


entrypoint();
