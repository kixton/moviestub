var express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 2595,
    morgan = require('morgan'),
    bodyParser = require('body-parser');

// create express app
var app = express();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set("view options", {
  layout: false
});

app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
  // render result in index.html
  res.render('public/index.html');
});
 
app.listen(port);
console.log('Express server running at http://localhost:' + port);