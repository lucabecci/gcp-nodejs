const express = require("express")
const morgan = require("morgan")

const Server = function Server(){
	this.server = null;
};

Server.prototype.start = function start(){
	const app = express();
	conf(app);
	this.server = app.listen(4040, () => {
		console.log("Server on port:", 4040);
	});
}

Server.prototype.close = function close(){
	console.log("Server closing...");
	this.server.close();
}



function conf(app){
	app.use(morgan("common"));
	app.use(express.json());
	app.use(express.urlencoded({extended: false}));
	app.get("/", function(req, res){
		return res.status(200).json({ message: "Welcome to my first server in GCP_AppEngine" })
	})
	app.get("/ping", function(req, res){
		return res.status(200).json({
			active: true,
			port: 4040,
			cloud: "google cloud platform",
			env: "prod",
			hostaname: "FirstEngine"
		})
	})

}

module.exports = Server
