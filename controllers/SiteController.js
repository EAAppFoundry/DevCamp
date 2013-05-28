var logger = require('winston');

exports.index = function(req, res){
	res.sendfile(config.EnvConfig.dirname + '/public/html/index.html');
}

exports.browser = function(req, res) {
  res.sendfile(config.EnvConfig.dirname + '/public/html/browser.html');
};

