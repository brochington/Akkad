var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.prod');

var app = express();
var compiler = webpack(config);

var port = process.env.PORT || 8080

app.use('/static', express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(port, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
  console.log('Press Ctrl+C to quit.');
});
