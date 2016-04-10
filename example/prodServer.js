var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.prod');

var app = express();
var compiler = webpack(config);

var port = process.env.PORT || 3031

app.use('/static', express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
