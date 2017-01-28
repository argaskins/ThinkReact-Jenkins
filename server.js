const express = require('express');
const path = require('path');
const fs = require('fs');

var server = function() {
  var self = this;

  self.port = '8080';
  self.createRoutes = function() {
    self.routes = {};

    self.routes['/'] = function(req, res) {
      res.setHeader('Content-Type', 'text/html');
      res.send(fs.readFileSync('./views/index.html'));
    };

    self.routes['/tweets'] = function(req, res){

      var tweets = [];
      tweets.push({date:"today", text:"I love tweets", user:"@jwesleye"});
      tweets.push({date:"yesterday", text:"I Like tweets", user:"@jwesleye"});
      tweets.push({date:"tomorrow", text:"All work and no play makes Jack a dull boy", user:"@jwesleye"});

      res.jsonp({"tweets": tweets});
    };


  };
////---------

  self.initializeServer = function() {
    self.createRoutes();
    self.app = express();
    self.app.use(express.static('public'));
    self.app.set('view engine',  'ejs');

    //Add handler for the app (from routes).

    for (var r in self.routes) {

      self.app.get(r, self.routes[r]);
    }
  };

  self.start = function() {
    // Start the app on the specfic interface (and port)
    self.app.listen(self.port, function() {
      console.log('%s: Node server started on port %d ...',
        Date(Date.now()), self.port);
    });
  };
};

var app = new server();
app.initializeServer();
app.start();
