var express = require('express'),
    http = require('http'),
    config = require('./config'),
    mongoose = require('mongoose'),
    logger = require('winston');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + "/public"));
});

app.configure('development', function(){
  config.setDevelopmentConfig();
  config.EnvConfig.dirname = __dirname;
  logger.info('running dev config');

  app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function(){
  logger.info("Express server listening on port " + app.get('port'));
});

var db = config.DatabaseConfig;

module.exports.app = app;
module.exports.config = config;
require('./routes');



