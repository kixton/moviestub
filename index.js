var express = require("express"),
    fs = require("fs"),
    port = process.env.PORT || 2595,
    morgan = require("morgan"),
    bodyParser = require("body-parser");

// create express app
var app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set("view options", {
  layout: false
});

app.use(express.static(__dirname + "/public"));
 
app.get("/", function (req, res) {
  // render result in index.html
  res.render("public/index.html");
});

// server side endpoint to get movie data and return it as a json object
app.get("/movies", function (req, res) {
  var movies = require("./data/movies.json");
  res.json(movies);
});
 
// server side endpoint to update booking details
app.post('/book', function (req, res) {
  var data = {
    'qty': req.body.qty,
    'date': req.body.date,
    'id': req.body.movie_id,
    'name': req.body.movie_name
  };
  bookings.push(data);
  res.render('public/templates/booktix.html');
  res.json(bookings);
});

app.listen(port);
console.log("Express server running at http://localhost:" + port);