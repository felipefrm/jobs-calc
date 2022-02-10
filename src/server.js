const express = require("express");
const server = express();

server.use(express.urlencoded({extended: true}))

const routes = require("./routes")
server.use(routes)

const path = require("path")
server.set("view engine", "ejs")
server.set("views", path.join(__dirname, 'views'))
server.use(express.static("public"))


server.listen(3000, () => console.log("Server running on port 3000."));
