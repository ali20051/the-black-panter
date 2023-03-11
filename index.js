const express = require("express");
const app     = express();
const path    = require("path");
const bodyParser = require("body-parser");

// make the public dir for public 
app.use("/public", express.static(path.join(__dirname, "public")));
// bodyParser 
app.use(bodyParser.urlencoded({ extended: true }));
// ejs 
app.set("view engine", "ejs");

// The root endpoint

// singup rout 
const singup = require('./routes/singup')
app.use(singup)
// dashboard Rout
const dashboard = require('./routes/dash');
app.use(dashboard);


// app port 
app.listen(3000 , () => {
    console.log('server started');
});