var express = require('express');
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://user:user@ds031193.mlab.com:31193/coj");
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use("/api/v1", restRouter);
/*app.get('/', function (req, res ) {
    res.send('haha');
})*/

app.listen(3000, function (){
    console.log('app listening on port 3000!')
})