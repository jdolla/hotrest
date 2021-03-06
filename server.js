const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './app/public')));

const htmlRoutes = require('./app/routing/htmlRoutes');
app.use('/', htmlRoutes);

const api = require('./app/routing/apiRoutes');
app.use('/', api);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.redirect('/err.html');
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
