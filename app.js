var express = require("express");

var cityRouter = require("./routers/city");
var path = require("path");
var cors = require('cors')
var app = express()
 
app.use(cors())
 
var port = 8080;
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/city", cityRouter);
app.listen(port);
